// pages/openvip/openvip.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    vip: 0,               // 0 会员过期  <0 未开通会员  >0 剩余的会员天数
    focus:0,
    rec:3,
    arr: ['发布顶部广告栏会员 7折', '发布鞋业圈会员 6折', '广告群发会员 5折', '拥有鞋样推广功能', '能查看所有鞋样配套鞋底', '能查看所有鞋样以及有鞋样以鞋业圈的浏览用户功能', '会员体现手续费 5折'],
    isShowSelectInfo: true
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
  // 点击选择会员套餐
  cur:function(e){
    console.log(e)
    this.setData({
      focus: e.currentTarget.dataset.index
    })
  },
  // 显示特权信息弹出层
  showtip:function(){
    this.setData({
      isShowSelectInfo:false
    })
  },
  // 关闭特权信息弹出层
  know: function () {
    this.setData({
      isShowSelectInfo: true
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