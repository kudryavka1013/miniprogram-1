// pages/addCourse/addCourse.js
import Toast from '@vant/weapp/toast/toast';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    className: '',
    teacherName: '请选择任课教师',
    showTimeSlot: false,
    showTeacher: false,
    isDisabled: false,
    //id从0开始
    timeId: 0,
    timeslot: [{
        values: ['周一', '周二', '周三', '周四', '周五'],
      },
      {
        values: ['1-2节', '3-4节', '5-6节', '7-8节', '9-11节']
      }
    ],
    starttime: ['第一周', '第二周', '第三周', '第四周', '第五周', '第六周', '第七周', '第八周', '第九周', '第十周', '第十一周', '第十二周', '十三周', '第十四周', '第十五周', '第十六周', '第十七周', '第十八周', '第十九周', '第二十周'],
    enttime: ['第一周', '第二周', '第三周', '第四周', '第五周', '第六周', '第七周', '第八周', '第九周', '第十周', '第十一周', '第十二周', '十三周', '第十四周', '第十五周', '第十六周', '第十七周', '第十八周', '第十九周', '第二十周'],
    startTime: '请选择开课时间',
    endTime: '请选择结课时间',
    teacherShowList: [],
    teacherList: [],
    timeList: [],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 此处应获取教师列表
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
        that.changeFormat()
        //清除加载页
        Toast.clear()
      }
    })
  },

  changeFormat: function () {
    var teacherList = this.data.teacherList
    var teacherShowList = this.data.teacherShowList
    for (var i = 0; i < teacherList.length; i++) {
      teacherShowList.push(teacherList[i].teacherName)
    }
    this.setData({
      teacherShowList: teacherShowList
    })
  },
  idIncrease: function () {
    this.setData({
      timeId: this.data.timeId + 1
    })
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

  },
  onAddTimeSlot() {
    this.setData({
      showTimeSlot: true
    })
  },
  onCloseTime() {
    this.setData({
      showTimeSlot: false
    })
  },
  onCancelTime() {
    this.setData({
      showTimeSlot: false
    })
  },

  onConfirmTime(event) {
    const temp = {
      id: this.data.timeId,
      weekday: event.detail.value[0],
      session: event.detail.value[1]
    }
    var list = this.data.timeList
    //判断是否重复
    for (var i = 0; i < list.length; i++) {
      if (temp.weekday == list[i].weekday && temp.session == list[i].session) {
        console.log('isRedundant')
        Toast({
          type: 'fail',
          position: 'top',
          message: '时间段重复'
        });
        return
      }
    }
    this.idIncrease()
    this.data.timeList.push(temp)
    console.log(this.data.timeList)
    //此处应有整理数组，将列表按时间顺序排好
    this.setData({
      showTimeSlot: false,
      timeList: this.data.timeList
    })
  },
  onClose(event) {
    console.log(event)
    // console.log(event.detail)
    const {
      position,
      instance
    } = event.detail;
    const id = event.currentTarget.id
    var list = this.data.timeList
    console.log(id)
    switch (position) {
      case 'cell':
        instance.close();
        break;
      case 'right':
        //删除选中项
        for (var i = 0; i < list.length; i++) {
          if (id == list[i].id) {
            list.splice(i, 1)
            break;
          }
        }
        //更新数据
        this.setData({
          timeList: list
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