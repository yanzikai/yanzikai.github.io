// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userid:'',
    thumb:'',
    tel:'',
    vendors_name:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.setData({
      userid: options.userid
    })
    console.log(this.data.userid)
    var that = this;
    wx.request({
      url: 'https://xxt.yyrjw.com/app/Shaping/getMerch',
      data: {
        userid: that.data.userid
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          tel: res.data.result.merch.mobile,
          thumb: res.data.result.merch.thumb,
          vendors_name: res.data.result.merch.vendors_name
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  phone:function(){
    var that = this;
    wx.makePhoneCall({
      phoneNumber: that.data.tel //仅为示例，并非真实的电话号码
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