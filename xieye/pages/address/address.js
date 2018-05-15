// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: ['北京','全国', '上海', '浙江', '广东', '安徽', '苏州', '福建', '四川', '陕西'],
    current:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      current:options.cur
    })
    console.log(options.cur)
  },
  select:function(e){
    var select = e.target.dataset.add
    wx.redirectTo({
      url: '../index/index?address=' + select
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