// pages/index/index.js
var Mock = require("../../utils/mock.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:1,
    imgarr: [
      'http://jys.m0571.com/img/gg1.png',
      'http://jys.m0571.com/img/gg1.png',
      'http://jys.m0571.com/img/gg1.png',
      'http://jys.m0571.com/img/gg1.png'
    ],
    textarr:[{
      text:'这是新闻一'
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
  goadvert:function(){
    wx:wx.navigateTo({
      url: '../advert/advert'
    })
  },
  godetail: function () {
    wx: wx.navigateTo({
      url: '../detail/detail'
    })
  },
  previewImage: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current,
      urls: this.data.imgarr
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var res = Mock.mock({
      "code":0,
      "msg":'请求成功',
      "arr|3-6":[{
        "text ": 'acolor',
        "imgsrc": "@IMG(200x200)"
      }]
    })
    console.log(res);
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
    wx.showLoading({
      title: '玩命加载中',
    })  
    setTimeout(function(){
      wx.hideLoading()
    },2000)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})