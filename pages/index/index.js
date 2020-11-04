//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },

  toAdmin: function () {
    wx.redirectTo({
      url: '../admin/admin',
    })
  },
  toTeacher: function () {
    wx.redirectTo({
      url: '../teacher/teacher',
    })
  }
})