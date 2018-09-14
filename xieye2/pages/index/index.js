//index.js  
//获取应用实例  
var app = getApp()
Page({
  data: {
    typearr: [], //顶部的分类
    winWidth: 0,
    address: '全国', // 区域名称
    pagearr: [],  // swiper 分页数据
    region_id: 0,  // 区域id
    winHeight: 0,
    xiala: 0,  //下拉框 0 代表隐藏 1 代表显示
    currentTab: 0,  // tab切换  
    move: 0,  // 顶部移动的距离
    localarr: [], // 存储swiper所有数据
    isShowSelectInfo: true,   // true 隐藏注册成功弹出层  false 为显示
    arr: ['发布顶部广告栏会员 7折', '发布鞋业圈会员 6折', '广告群发会员 5折', '拥有鞋样推广功能', '能查看所有鞋样配套鞋底', '鞋样以鞋业圈的浏览用户功能', '会员体现手续费 5折']  // 会员权益
  },
  onLoad: function (options) {
    this.setData({
      address: '全国',
      region_id: 0
    })
    try {
      wx.removeStorageSync('address');
      wx.removeStorageSync('region_id');
    } catch (e) {
      // Do something when catch error
    }
    var that = this;
    console.log(this.data.region_id)
    // 设置默认分类
    var arr = [];
    var pagearr = [];
    //  获取鞋业圈分类
    wx.request({
      url: 'https://xxt.yyrjw.com/app/Shaping/GetShoecircleCategory', //仅为示例，并非真实的接口地址
      data: {
        userid: 0
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        for (var i = 0; i < res.data.result.length; i++) {
          arr.push(res.data.result[i].name);
          pagearr.push(1);
        }
        that.setData({
          typearr: res.data.result,
          pagearr: pagearr
        })
        console.log(that.data.typearr)
        that.getItem(that.data.typearr[that.data.currentTab].id, 1, that.data.region_id);
      }
    })

    //获取系统信息 
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
  },
  // 返回电话号码高亮的富文本
  tel: function (phone) {
    phone = phone.replace(/1[34578]\d{9}/, function (macth) {
      var tel = '<span style="color:red;text-decoration:underline;">' + macth + '</span>'
      return tel;
    })
    return phone
  },
  // 返回 文本中的 电话号码
  tel1: function (phone) {
    var tel = '';
    phone.replace(/1[34578]\d{9}/, function (macth) {
      tel = macth
      return tel;
    })
    return tel
  },
  closetip:function(){
    this.setData({
      isShowSelectInfo:true
    })
  },
  // swiper 获取数据封装
  getItem: function (sort, page, region_id) {
    var that = this;
    wx.request({
      url: 'https://xxt.yyrjw.com/app/Shaping/GetShoecircleList',
      data: {
        userid: 0,
        industry_sort: sort,
        limit: 5,
        region_id: region_id,
        page: page
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(that.data.localarr)
        console.log(res.data)
        var k = res.data;
        wx.hideLoading()
        for (var i = 0; i < k.result.circle_goods.length; i++) {
          k.result.circle_goods[i].con = k.result.circle_goods[i].description;
          k.result.circle_goods[i].description = that.tel(k.result.circle_goods[i].description)
          k.result.circle_goods[i].tel = that.tel1(k.result.circle_goods[i].description)
        }

        var localarr = that.data.localarr;
        if (res.data.result.circle_goods.length == 0) {
          console.log('没有更多了')
          wx.showToast({
            title: '没有更多了',
            icon: 'none',
            duration: 2000
          })
        }
        if (page == 1) {
          localarr[that.data.currentTab] = k.result;
          that.setData({
            localarr: localarr
          })
        } else {

          localarr[that.data.currentTab].circle_goods.push(...k.result.circle_goods);
          that.setData({
            localarr: localarr
          })
          console.log(that.data.localarr)
        }

      }
    })
  },
  // 分享
  onShareAppMessage: function (res) {
    var con = res.target.dataset.head + '\n' + res.target.dataset.con;
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log('来自页面内转发按钮')
    } else {
      console.log('来自右上角转发按钮')
    }
    return {
      title: con,
      path: '/pages/index/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  /**
  * 生命周期函数--监听页面显示
  */
  onShow: function () {
    var that = this;
    wx.getStorage({
      key: 'address',
      success: function (res) {
        that.setData({
          address: res.data
        })
      }
    })
    wx.getStorage({
      key: 'region_id',
      success: function (res) {
        console.log(that.data.typearr)
        console.log(that.data.localarr)
        if (res.data != that.data.region_id) {

          var pagearr = that.data.pagearr;
          for (var i = 0; i < pagearr.length; i++) {
            pagearr[i] = 1;
          }
          that.setData({
            pagearr: pagearr
          })
          that.setData({
            localarr: []
          })
          that.getItem(that.data.typearr[that.data.currentTab].id, 1, res.data);
        }
        that.setData({
          region_id: res.data
        })
      }
    })

    console.log(this.data.localarr)
  },
  // 拨打电话
  phone: function (e) {
    console.log(e)
    if (!e.target.dataset.tel) {
      return;
    }
    console.log(e.target.dataset.tel);
    var that = this;
    wx.makePhoneCall({
      phoneNumber: e.target.dataset.tel //仅为示例，并非真实的电话号码
    })
  },
  // 点击发布 跳转到webview
  webview: function (e) {
    wx.navigateTo({
      url: '../xieyepublish/xieyepublish'
    })
  },
  openvip:function(){
    wx.navigateTo({
      url: '../openvip/openvip'
    })
  },
  choosetype:function(){
    wx.navigateTo({
      url: '../choosetype/choosetype'
    })
  },
  // 点击选择地址 跳转页面
  search: function (e) {
    var address = e.target.dataset.address
    var region_id = e.target.dataset.region_id
    wx.navigateTo({
      url: '../address/address?curid=' + region_id + '&curname=' + address
    })
  },
  // 图片放大预览
  previewImage: function (e) {
    console.log(e)
    var current = e.target.dataset.src;
    var imgarr = e.target.dataset.arr;
    wx.previewImage({
      current: current,
      urls: imgarr
    })
  },
  // 左右滑动触发条件   --todo
  bindChange: function (e) {
    console.log(e)
    // 判断原有的数据是否加载 若没有数据则将请求的数据放到localarr
    var localarr = this.data.localarr;
    if (!localarr[e.detail.current]) {
      wx.showLoading({
        title: '加载中',
      })
      setTimeout(function () {
        wx.hideLoading()
      }, 1000)
      console.log('进入当前分类 -> 请求值', this.data.typearr, e.detail.current)
      this.getItem(this.data.typearr[e.detail.current].id, 1, this.data.region_id); //sort, page, region_id
    } else {
      console.log('已有数据，不再请求')
    }
    console.log(this.data.localarr)
    // 跳转到当前分类 并修改上放滚动条位置
    var that = this;
    that.setData({
      currentTab: e.detail.current
    })
    if (e.detail.current >= 2 && e.detail.current <= that.data.typearr.length - 2) {
      var a = e.detail.current - 1;
      console.log(e.detail.current)
      that.setData({
        move: -60 * a
      })
    } else if (e.detail.current <= 2) {
      that.setData({
        move: 0
      })
    } else if (e.detail.current >= that.data.typearr.length - 1) {
      that.setData({
        move: (250 - 80 * that.data.typearr.length)
      })
    }
  },
  // 头部右侧选择触发条件  --todo
  xiala: function (e) {
    if (this.data.xiala == 1) {
      this.setData({
        xiala: 0
      })
    } else {
      this.setData({
        xiala: 1
      })
    }
  },
  // 下拉菜单选中的事件处理
  checked: function (e) {
    console.log(e)
    var cur = e.target.dataset.cur;
    this.setData({
      currentTab: cur,
      xiala: 0
    })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  binds: function (e) {
    console.log('scroll 上拉');
    var pagearr = this.data.pagearr;
    pagearr[this.data.currentTab]++;
    this.setData({
      pagearr: pagearr
    })
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 1000)
    console.log('当前页数=' + this.data.pagearr[this.data.currentTab]);
    console.log('当前index=' + this.data.currentTab + '---当前id=' + this.data.typearr[this.data.currentTab].id)
    //this.getItem(1, 1, res.data);
    // var page = this.data.currentTab;
    this.getItem(this.data.typearr[this.data.currentTab].id, this.data.pagearr[this.data.currentTab], this.data.region_id); //sort, page, region_id

  },
  // 点击tab切换      --todo
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }
})


