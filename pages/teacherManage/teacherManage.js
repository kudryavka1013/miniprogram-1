// pages/teacherManage/teacherManage.js
import Toast from '@vant/weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isAddShow: false,
    isError: false,
    newTeacherName: '',
    teacherList: []
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
    this.data.teacherList.push(newTeacher) //替换
    this.setData({
      isError: false,
      isAddShow: false,
      teacherList: this.data.teacherList,
      newTeacherName: ''
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadTeacherList()

  },
  loadTeacherList: function () {
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
    //加载教师列表
    wx.request({
      method: 'GET',
      url: 'https://www.fastmock.site/mock/8620899d8291f4be26eff671db045375/web/admin/teacherList',
      success(res) {
        //绑定数据
        that.setData({
          teacherList: res.data
        })
        //清除加载页
        Toast.clear()
      }
    })
  },

  onNameChange(event) {
    if (event.detail == '') {
      this.setData({
        isError: true
      })
    } else {
      this.setData({
        isError: false
      })
    }
    this.setData({
      newTeacherName: event.detail
    })
  },
  onClickHide(event) {
    this.setData({
      isError: false,
      isAddShow: false
    })
  },
  onClose(event) {
    console.log(event)
    // console.log(event.detail)
    const index = event.currentTarget.dataset.index
    const teacherToDelete = this.data.teacherList[index]
    const {
      position,
      instance
    } = event.detail;
    switch (position) {
      case 'cell':
        instance.close();
        break;
      case 'right':
        //删除选中项
        wx.request({
          method: 'POST',
          url: '',
          data: teacherToDelete,
          success(res) {
            //更新数据
          }
        })
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