// pages/banner/banner.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    itemarr: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 500)
    var that = this;
    this.setData({
      title: options.title
    })
    wx.request({
      url: 'https://xxt.yyrjw.com/app/Shaping/ShoecircleAdsDetail', //仅为示例，并非真实的接口地址
      data: {
        userid: 0,
        id: that.data.title
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          itemarr: res.data.result
        })
        console.log(that.data.itemarr)
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  // 点击发布 跳转到广告发布
  bannerpublish: function (e) {
    wx.navigateTo({
      url: '../bannerpublish/bannerpublish'
    })
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