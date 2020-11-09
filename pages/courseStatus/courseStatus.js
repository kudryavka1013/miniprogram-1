// pages/courseStatus/courseStatus.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courseStatusList: [{
      week: '第一周',
      childs: [{
        courseName: '这是名字'
      }, {
        courseName: '这是名字'
      }]

    }, {
      week: '第二周',
      childs: [{
        courseName: '这是名字'
      }, {
        courseName: '这是名字'
      }]

    }, {
      week: '第三周',
      childs: [{
        courseName: '这是名字'
      }, {
        courseName: '这是名字'
      }]

    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.courseStatusList)
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