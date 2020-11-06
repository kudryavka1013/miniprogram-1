// pages/teacherManage/teacherManage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isAddShow: false,
    isError: false,
    newTeacherName: '',
    teacherList: [{
      "teacherName": "testname",
      "teacherId": "123124",
    }]
  },
  toAddTeacher: function () {
    this.setData({
      isAddShow: true
    })
  },
  
  onSaveTeacher: function () {
    //数据正确性检查
    if (this.data.newTeacherName == '') {
      this.setData({
        isError: true
      })
      return
    }
    //提交数据
    var newTeacher = {
      "teacherName": this.data.newTeacherName
    }
    this.data.teacherList.push(newTeacher)//替换
    this.setData({
      isError:false,
      isAddShow: false,
      teacherList: this.data.teacherList,
      newTeacherName:''
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //加载教师列表
    this.loadTeacherList()

  },

  loadTeacherList: function () {
    //请求后端的数据
  },
  onNameChange(event) {
    if(event.detail == ''){
      this.setData({
        isError:true
      })
    }else{
      this.setData({
        isError:false
      })
    }
    this.setData({
      newTeacherName: event.detail
    })
  },
  onClickHide(event) {
    this.setData({
      isError:false,
      isAddShow: false
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