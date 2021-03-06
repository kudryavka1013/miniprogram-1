// pages/admin/admin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        "icon":"manager-o",
        "text":"教师管理",
        "clickevent":"toTeacherManage"
      },
      {
        "icon":"friends-o",
        "text":"学生管理",
        "clickevent":"toStudentManage"
      },
      {
        "icon":"records",
        "text":"课程管理",
        "clickevent":"toCourseManage"
      },
      {
        "icon":"contact",
        "text":"我的信息",
        "clickevent":"toMyStatus"
      },
    ]
  },

  toTeacherManage:function(){
    wx.navigateTo({
      url: '../teacherManage/teacherManage',
    })
  },

  toStudentManage:function(){
    wx.navigateTo({
      url: '../studentManage/studentManage',
    })
  },

  toCourseManage:function(){
    wx.navigateTo({
      url: '../courseManage/courseManage',
    })
  },

  toMyStatus:function(){
    wx.navigateTo({
      url: '../myStatus/myStatus',
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