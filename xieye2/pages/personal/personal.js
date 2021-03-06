// pages/personal/personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    vip:true,
    headimg:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2043305675,3979419376&fm=200&gp=0.jpg',
    name:'耐克旗舰店'
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
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  // 跳转个人资料
  personaldata: function () {
    wx.navigateTo({
      url: '../personaldata/personaldata'
    })
  },
  // 跳转我的钱包
  mypurse:function(){
    wx.navigateTo({
      url: '../mypurse/mypurse'
    })
  },
  // 跳转鞋业圈
  xieyequan:function(){
    wx.navigateTo({
      url: '../xieyequan/xieyequan?userid=100'
    })
  },
  // 跳转意见反馈
  feedback: function () {
    wx.navigateTo({
      url: '../feedback/feedback?userid=100'
    })
  },
  // 跳转我的广告
  myadvert: function() {
    wx.navigateTo({
      url: '../myadvert/myadvert?userid=100'
    })
  },
  // 跳转设置
  setting: function () {
    wx.navigateTo({
      url: '../setting/setting'
    })
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
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})