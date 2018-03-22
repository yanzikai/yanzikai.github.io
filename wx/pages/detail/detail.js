// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgarr: [
      'http://jys.m0571.com/img/wine.png',
      'http://jys.m0571.com/img/indexbanner1.png',
      'http://jys.m0571.com/img/wine.png',
      'http://jys.m0571.com/img/gg1.png'
    ],
    showType:false,
    textarr: [{
      text: '这是新闻一'
    },
    {
      text: '这是新闻二'
    },
    {
      text: '这是新闻三'
    }],
    autoplay: false,
    interval: 5000,
    duration: 1000,
    indicatorDots: true
  },
  previewImage:function(e){
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current,
      urls: this.data.imgarr
    })
  },
  gopay:function(){
    wx:wx.navigateTo({
      url: '../pay/pay'
    })
  },
  showtype:function(){
    var showtype = this.data.showType;
    this.setData({
      showType: !showtype
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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