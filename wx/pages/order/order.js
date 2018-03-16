// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasaddress:false,
    name:'刘德华',
    detail:'钱江世纪城港丽望京大厦C1座3201室',
    tel:'18558484888',
    goodslist: [{
      country: '美国',
      isselect: true,
      price: '689.00',
      title: '贵州茅台集团中华典藏阿斯顿撒',
      size: '500ml',
      stock: 600,  // 库存
      num: 6
    },
    {
      country: '美国',
      isselect: false,
      price: '689.00',
      title: '贵州茅台集团中华典藏阿斯顿撒',
      size: '500ml',
      stock: 600,  // 库存
      num: 6
    },
    {
      country: '美国',
      isselect: false,
      price: '689.00',
      title: '贵州茅台集团中华典藏阿斯顿撒',
      size: '500ml',
      stock: 600,  // 库存
      num: 6
    }]
  },
  gopay:function(){
    wx:wx.navigateTo({
      url: '../pay/pay'
    })
  },
  toaddress:function(){
    wx:wx.navigateTo({
      url: '../address/address'
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