// pages/courseDetail/courseDetail.js
const app = getApp()
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
    console.log(options)
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
      url: app.globalData.domain + 'getCourseDetail',
      method: 'GET',
      data: {
        'courseId': options.id
      },
      success(res) {
        console.log(res)
        // 绑定数据
        that.setData({
          courseName: res.data.courseName,
          courseTeacher: res.data.courseTeacher,
          courseId: res.data.courseId,
          startTime: res.data.startTime,
          endTime: res.data.endTime,
          timeSlotList: res.data.timeSlotList,
          studentList: res.data.studentList,
          courseTime: that.changeTimeFormat(res.data.startTime) + ' 至 ' + that.changeTimeFormat(res.data.endTime)
        })
        //清除加载页
        Toast.clear()
      }
    })
  },

  //修改拉取到的开课结课时间的格式
  changeTimeFormat: function (time) {
    // console.log("changeFormat")
    switch (time) {
      case 1:
        return '第一周'
      case 2:
        return '第二周'
      case 3:
        return '第三周'
      case 4:
        return '第四周'
      case 5:
        return '第五周'
      case 6:
        return '第六周'
      case 7:
        return '第七周'
      case 8:
        return '第八周'
      case 9:
        return '第九周'
      case 10:
        return '第十周'
      case 11:
        return '第十一周'
      case 12:
        return '第十二周'
      case 13:
        return '第十三周'
      case 14:
        return '第十四周'
      case 15:
        return '第十五周'
      case 16:
        return '第十六周'
      case 17:
        return '第十七周'
      case 18:
        return '第十八周'
      case 19:
        return '第十九周'
      case 20:
        return '第二十周'
      default:
        return time
    }
  },

  //修改拉取到的节次中周几的格式
  // changeWeekdayFormat:function(){
  // },
  //不做了，太麻烦了

  //删除课程
  onDeleteCourse: function () {
    Dialog.confirm({
        title: '警告',
        message: '确定要删除该课程吗？',
        asyncClose: true
      })
      .then(() => {
        wx.request({
          url: app.globalData.domain + 'deleteCourseInfo',
          method: 'POST',
          data: {
            'courseId': this.data.courseId
          },
          success(res) {
            console.log(res)
            Dialog.close()
            Toast.success("删除成功")
            //回退到上一页面
            setTimeout(() => {
              wx.navigateBack({
                delta: 1,
              })
            }, 1000)
          }
        })
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