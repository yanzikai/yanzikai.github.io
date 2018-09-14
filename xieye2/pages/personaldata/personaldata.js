// pages/personaldata/personaldata.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headimg:'',
    name:'耐克旗舰店',
    address:'安徽省',
    bindwx:false,
    vip:12,
    xieyang:'行业变更',
    type:'男段'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'headimg',
      success: function (res) {
        that.setData({
          headimg: res.data
        })
      }
    })
    // 设置名称
    wx.getStorage({
      key: 'name',
      success: function (res) {
        that.setData({
          name: res.data
        })
      }
    })
  },
  chooseimage: function () {
    var _this = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        console.log(res);
        wx.setStorage({
          key: "headimg",
          data: res.tempFilePaths[0]
        })
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片  
        _this.setData({
          headimg: res.tempFilePaths[0]
        })
      }
    })
  },
  // 修改厂商名称
  pdname:function(){
    wx.navigateTo({
      url: '../pdname/pdname'
    })
  },
  // 行业变更
  changeindustry: function () {
    wx.navigateTo({
      url: '../changeindustry/changeindustry'
    })
  },
  // 修改所在区域     ---todo
  address: function () {
    wx.navigateTo({
      url: '../address/address'
    })
  },
  // 开通会员
  openvip: function () {
    wx.navigateTo({
      url: '../openvip/openvip'
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    wx.getStorage({
      key: 'headimg',
      success: function (res) {
        that.setData({
          headimg: res.data
        })
      }
    })
    // 设置名称
    wx.getStorage({
      key: 'name',
      success: function (res) {
        that.setData({
          name: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  }
})