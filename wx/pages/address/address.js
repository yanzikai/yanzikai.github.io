// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressarr:[{
      addressId:"18",
      name:'李东海',
      isdefault:true,
      isselected:true,
      detail:'钱江世纪城港丽望京大厦C1座3201室',
      tel:'15888888888'
    },
    {
      addressId: "18",
      name: '李东海',
      isdefault: false,
      isselected: false,
      detail: '钱江世纪城港丽望京大厦C1座3201室钱江世纪城港丽望京大厦C1座3201室',
      tel: '15888888888'
    },
    {
      addressId: "18",
      name: '李东海',
      isdefault: false,
      isselected: false,
      detail: '钱江世纪城港丽望京大厦C1座3201室钱江世纪城港丽望京大厦C1座3201室',
      tel: '15888888888'
    },
    {
      addressId: "18",
      name: '李东海',
      isdefault: false,
      isselected: false,
      detail: '钱江世纪城港丽望京大厦C1座3201室钱江世纪城港丽望京大厦C1座3201室',
      tel: '15888888888'
    },
    {
      addressId: "18",
      name: '李东海',
      isdefault: false,
      isselected: false,
      detail: '钱江世纪城港丽望京大厦C1座3201室',
      tel: '15888888888'
    }]
  },
  switch1Change: function (e) {
    console.log('switch1 发生 change 事件，携带值为', e.detail.value)
  },
  toaddaddress:function(){
    wx:wx.navigateTo({
      url: '../addaddress/addaddress'
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