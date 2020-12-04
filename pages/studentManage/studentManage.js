// pages/studentManage/studentManage.js
import Toast from '@vant/weapp/toast/toast';
import Dialog from '@vant/weapp/dialog/dialog';
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isAddShow: false,
    isNameError: false,
    isIdError: false,
    studentList: [],
    newStudentName: '',
    newStudentId: '',
  },

  toAddStudent: function () {
    this.setData({
      isAddShow: true
    })
  },

  onSaveStudent: function () {
    //数据正确性检查
    if (this.data.newStudentName == '') {
      this.setData({
        isNameError: true
      })
      return
    }
    if (this.data.newStudentId == '') {
      this.setData({
        isIdError: true
      })
      return
    }
    //提交数据
    var newStudent = {
      "studentName": this.data.newStudentName,
      "studentId": this.data.newStudentId
    }
    var that = this
    wx.request({
      url: app.globalData.domain + 'addStudentInfo',
      method: 'POST',
      data: newStudent,
      success(res) {
        console.log(res)
        if(res.data.code == 403){
          Toast.fail("学号格式错误")
        }else{
          setTimeout(() => {
            that.setData({
              isNameError: false,
              isIdError: false,
              isAddShow: false,
              studentList: that.data.studentList,
              newStudentName: '',
              newStudentId: ''
            })
            that.loadStudentList()
          }, 300);
        }
      }
    })
  },
  onNameChange(event) {
    if (event.detail == '') {
      this.setData({
        isNameError: true
      })
    } else {
      this.setData({
        isNameError: false
      })
    }
    this.setData({
      newStudentName: event.detail
    })
  },

  onIdChange(event) {
    if (event.detail == '') {
      this.setData({
        isIdError: true
      })
    } else {
      this.setData({
        isIdError: false
      })
    }
    this.setData({
      newStudentId: event.detail
    })
  },

  onClickHide(event) {
    this.setData({
      isNameError: false,
      isIdError: false,
      isAddShow: false
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadStudentList()
  },
  loadStudentList: function () {
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
    //加载学生列表
    wx.request({
      method: 'GET',
      url: app.globalData.domain + 'getStudentInfo',
      success(res) {
        console.log(res.data)
        //绑定数据
        that.setData({
          studentList: res.data.studentList
        })
        //清除加载页
        Toast.clear()
      }
    })
  },
  onClose: function (event) {
    console.log(event)
    // console.log(event.detail)
    var index = event.currentTarget.dataset.index
    var studentToDelete = this.data.studentList[index]
    var that = this
    const {
      position,
      instance
    } = event.detail;
    switch (position) {
      case 'cell':
        instance.close();
        break;
      case 'right':
        //加载提示
        Toast({
          type: 'loading',
          message: '加载中',
          forbidClick: true,
          loadingType: 'spinner',
          mask: true,
          duration: 0,
        })
        //删除选中项
        wx.request({
          method: 'POST',
          url: app.globalData.domain + 'deleteStudentInfo',
          data: studentToDelete,
          success(res) {
            //更新数据
            that.loadStudentList()
          }
        })
        Toast.clear()
        // console.log(list)
        instance.close();
        break;
    }
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