// pages/addCourse/addCourse.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    className: '',
    teacherName: '请选择任课教师',
    showTime: false,
    showTeacher: false,
    isDisabled: false,
    timeslot: [{
        values: ['周一', '周二', '周三', '周四', '周五'],
      },
      {
        values: ['第1节', '第2节', '第3节', '第4节', '第5节', '第6节', '第7节', '第8节', '第9节', '第10节', '第11节', '第12节']
      }
    ],
    teacherList: ['老师1号', '老师2号'],
    timeList: [],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 此处应获取教师列表
  },

  onAddTeacher() {
    this.setData({
      showTeacher: true,
      isDisabled: true
    })
  },
  onCloseTeacher() {
    this.setData({
      showTeacher: false,
      isDisabled: false,
    })
  },
  onCancelTeacher() {
    this.setData({
      showTeacher: false,
      isDisabled: false,
    })
  },
  onConfirmTeacher(event) {
    this.setData({
      teacherName: event.detail.value,
      isDisabled: false,
      showTeacher: false,
    })
  },
  onAddTime() {
    this.setData({
      showTime: true
    })
  },
  onCloseTime() {
    this.setData({
      showTime: false
    })
  },
  onCancelTime() {
    this.setData({
      showTime: false
    })
  },
  onConfirmTime(event) {
    var temp = {
      weekday: event.detail.value[0],
      session: event.detail.value[1]
    }
    this.data.timeList.push(temp)
    //此处应有整理数组，将列表按时间顺序排好
    this.setData({
      showTime: false,
      timeList: this.data.timeList
    })
  },
  onClose(event){
    console.log(event)
    console.log(event.detail)
    const { position, instance } = event.detail;
    switch (position) {
      case 'cell':
        instance.close();
        break;
      case 'right':
        // 此处应获取当前项，可能列表的id还要搞一下
        this.data.timeList.pop()
        this.setData({
          timeList:this.data.timeList
        })
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