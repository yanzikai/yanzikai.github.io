//index.js  
//获取应用实例  
var app = getApp()
Page({
  data: {
    nav:['鞋厂','鞋底','加工','鞋料','招聘','包装','化工'],  //顶部的分类
    winWidth: 0,
    address:'全国',
    winHeight: 0,
    xiala:0,  //下拉框 0 代表隐藏 1 代表显示
    currentTab: 0,  // tab切换  
    move: 0,  // 顶部移动的距离
    imgarr: [
      'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1665207864,746409922&fm=27&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1105037253,1131367531&fm=27&gp=0.jpg',
      'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=398952501,2656845064&fm=27&gp=0.jpg'
    ]
  },
  onLoad: function (options) {
    if (options.address){
      var address = options.address;
      this.setData({
        address: address
      })
    }
    
    var that = this;
    //获取系统信息 
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
    // 定位到当前的分类
    // this.setData({
    //   currentTab: 3
    // })
  },
  // 拨打电话
  phone: function (e) {
    console.log(e.target.dataset.tel);
    var that = this;
    wx.makePhoneCall({
      phoneNumber: e.target.dataset.tel //仅为示例，并非真实的电话号码
    })
  },
  // 点击选择地址 跳转页面
  search:function(e){
    var address = e.target.dataset.address
    wx.navigateTo({
      url: '../address/address?cur=' + address
    })
  },
  // 图片放大预览
  previewImage: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current,
      urls: this.data.imgarr
    })
  },
  // 左右滑动触发条件   --todo
  bindChange: function (e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    })
    if (e.detail.current >= 3 && e.detail.current <= that.data.nav.length-3) {
      var a = e.detail.current - 2;
      console.log(e.detail.current)
      that.setData({
        move: -80 * a
      })
    } else if (e.detail.current <= 2) {
      that.setData({
        move: 0
      })
    } else if (e.detail.current >= that.data.nav.length - 2) {
      that.setData({
        move: (250 - 80 * that.data.nav.length)
      })
    }
  },
  // 头部右侧选择触发条件  --todo
  xiala:function(e){
    if(this.data.xiala == 1){ 
      this.setData({
        xiala: 0
      })
    }else{
      this.setData({
        xiala: 1
      })
    }
  },
  // 下拉菜单选中的事件处理
  checked:function(e){
    console.log(e)
    var cur = e.target.dataset.cur;
    this.setData({
      currentTab:cur,
      xiala: 0
    })
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


