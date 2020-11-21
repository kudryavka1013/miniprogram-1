// pages/courseDetail/courseDetail.js

import Toast from '@vant/weapp/toast/toast';
import Dialog from '@vant/weapp/dialog/dialog';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courseName: '',
    courseTeacher: '',
    courseId: '',
    startTime: '',
    endTime: '',
    timeSlotList: [],
    studentList: [],

    courseTime: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //加载提示
    Toast({
      type: 'loading',
      message: '加载中',
      forbidClick: true,
      loadingType: 'spinner',
      mask: true,
      duration: 0,
    })
    var that = this
    //请求数据
    wx.request({
      url: 'https://www.fastmock.site/mock/8620899d8291f4be26eff671db045375/web/admin/detail',
      data: {
        courseId: options.id
      },
      success(res) {
        // 绑定数据
        that.setData({
          courseName: res.data.courseName,
          courseTeacher: res.data.courseTeacher,
          courseId: res.data.courseId,
          startTime: res.data.startTime,
          endTime: res.data.endTime,
          timeSlotList: res.data.timeSlotList,
          studentList: res.data.studentList,
          courseTime: res.data.startTime + ' 至 ' + res.data.endTime
        })
        //清除加载页
        Toast.clear()
      }
    })
  },

  onDeleteCourse:function(){
    Dialog.confirm({
      title: '警告',
      message: '确定要删除该课程吗？',
      asyncClose: true
    })
      .then(() => {
        setTimeout(() => {
          Dialog.close();
        }, 1000);
      })
      .catch(() => {
        Dialog.close();
      });
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