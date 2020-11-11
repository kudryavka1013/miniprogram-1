// pages/courseManage/courseManage.js
import Toast from '@vant/weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courseList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadCourseList()
  },
  loadCourseList: function () {
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
      method: 'GET',
      url: 'https://www.fastmock.site/mock/8620899d8291f4be26eff671db045375/web/admin/courseList',
      success(res) {
        //绑定数据
        that.setData({
          courseList: res.data
        })
        //清除加载页
        Toast.clear()
      }
    })
  },
  toAddCourse: function () {
    wx.navigateTo({
      url: '/pages/addCourse/addCourse'
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