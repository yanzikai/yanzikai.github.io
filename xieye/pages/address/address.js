// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: [],
    currentid:'',
    currentname:''
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
      currentid:options.curid,
      currentname: options.curname
    })
    console.log(options.cur)
    wx.request({
      url: 'https://xxt.yyrjw.com/app/Welcome/GetRegionList', //仅为示例，并非真实的接口地址
      data: {
        userid: 0
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        var address = res.data.result;
        address.unshift({
          id:0,
          name:'全国'
        })
        that.setData({
          address:address
        })
      }
    })
  },
  select:function(e){
    wx.setStorage({
      key: "address",
      data: e.target.dataset.addname
    })
    wx.setStorage({
      key: "region_id",
      data: e.target.dataset.addid
    })
    var select = e.target.dataset.add
    wx.navigateBack({
      delta: 1
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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