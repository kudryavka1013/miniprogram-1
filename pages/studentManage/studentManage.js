// pages/studentManage/studentManage.js
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
      "studentId":this.data.newStudentId
    }
    this.data.studentList.push(newStudent) //替换
    this.setData({
      isNameError: false,
      isIdError:false,
      isAddShow: false,
      studentList: this.data.studentList,
      newStudentName: '',
      newStudentId:''
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
    //请求后端的数据
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