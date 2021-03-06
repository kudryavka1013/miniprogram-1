// pages/teacher.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
        "icon": "bar-chart-o",
        "text": "到课率",
        "clickevent": "toCourseStatus"
      },
      {
        "icon": "contact",
        "text": "我的信息",
        "clickevent": "toMyStatus"
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  toCourseStatus: function () {
    wx.navigateTo({
      url: '../courseStatus/courseStatus'
    })
  },
  toMyStatus: function () {
    wx.navigateTo({
      url: '../myStatus/myStatus'
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
    wx.hideHomeButton()
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