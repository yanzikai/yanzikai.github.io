// pages/advert/advert.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    advertarr:[{
      imgsrc:'http://jys.m0571.com/img/advert1.png',
      detail:'中华人民共和国中国人民中国人民啊啊',
      size:'500ml',
      from:'酒钥匙',
      month:'09',
      day:'06'
    },
    {
      imgsrc: 'http://jys.m0571.com/img/advert1.png',
      detail: '中华人民共和国中国人民中国人民啊啊',
      size: '500ml',
      from: '酒钥匙',
      month: '09',
      day: '06'
    },
    {
      imgsrc: 'http://jys.m0571.com/img/advert1.png',
      detail: '中华人民共和国中国人民中国人民啊啊',
      size: '500ml',
      from: '酒钥匙',
      month: '09',
      day: '06'
    }]
  },
  toadvertdetail:function(){
    wx:wx.navigateTo({
      url: '../advertdetail/advertdetail'
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