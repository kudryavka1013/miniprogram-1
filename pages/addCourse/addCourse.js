// pages/addCourse/addCourse.js
import Toast from '@vant/weapp/toast/toast';
import Dialog from '@vant/weapp/dialog/dialog';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    courseName: null,
    teacherName: '请选择任课教师',
    teacherId: null,
    courseTime: '请选择上课时间',
    startTime: null,
    endTime: null,

    showTeacher: false,
    showCourseTime: false,
    showTimeSlot: false,
    showStudent: false,
    isDisabled: false,

    //添加老师的列表内容
    teacherShowList: [],
    //添加学生的列表内容
    studentShowList: [],
    //id从0开始
    timeId: 0,
    sId: 0,
    //时间段列表内容
    timeslot: [{
        values: ['周一', '周二', '周三', '周四', '周五'],
      },
      {
        values: ['1-2节', '3-4节', '5-6节', '7-8节', '9-11节']
      }
    ],
    //开课时间和结课时间列表内容
    courseTimeList: [{
        values: ['第一周', '第二周', '第三周', '第四周', '第五周', '第六周', '第七周', '第八周', '第九周', '第十周', '第十一周', '第十二周', '十三周', '第十四周', '第十五周', '第十六周', '第十七周', '第十八周', '第十九周', '第二十周']
      },
      {
        values: ['第一周', '第二周', '第三周', '第四周', '第五周', '第六周', '第七周', '第八周', '第九周', '第十周', '第十一周', '第十二周', '十三周', '第十四周', '第十五周', '第十六周', '第十七周', '第十八周', '第十九周', '第二十周']
      }
    ],
    teacherList: [],
    studentList: [],
    timeSlotList: [],
    studentToSaveList: [],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 此处应获取教师列表
    this.loadTeacherList()
    // 此处应获取学生列表
    this.loadStudentList()
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
        that.changeTeacherFormat()
        //清除加载页
        Toast.clear()
      }
    })
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
      url: 'https://www.fastmock.site/mock/8620899d8291f4be26eff671db045375/web/admin/studentList',
      success(res) {
        //绑定数据
        that.setData({
          studentList: res.data
        })
        that.changeStduentFormat()
        //清除加载页
        Toast.clear()
      }
    })
  },

  changeTeacherFormat: function () {
    var teacherList = this.data.teacherList
    var teacherShowList = this.data.teacherShowList
    for (var i = 0; i < teacherList.length; i++) {
      teacherShowList.push(teacherList[i].teacherName + ' ' + teacherList[i].teacherId)
    }
    this.setData({
      teacherShowList: teacherShowList
    })
  },
  changeStduentFormat: function () {
    var studentList = this.data.studentList
    var studentShowList = this.data.studentShowList
    for (var i = 0; i < studentList.length; i++) {
      studentShowList.push(studentList[i].studentName + ' ' + studentList[i].studentId)
    }
    this.setData({
      studentShowList: studentShowList
    })
  },

  timeIdIncrease: function () {
    this.setData({
      timeId: this.data.timeId + 1
    })
  },
  sIdIncrease: function () {
    this.setData({
      sId: this.data.sId + 1
    })
  },

  onCourseNameChange(event) {
    this.setData({
      courseName: event.detail
    })
  },
  //添加任课老师的控制
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
    var index = event.detail.index
    this.setData({
      teacherName: event.detail.value,
      teacherId: this.data.teacherList[index].teacherId,
      isDisabled: false,
      showTeacher: false,
    })
    console.log(this.data.teacherId)
  },

  //选择上课时间的控制
  onAddCourseTime() {
    this.setData({
      showCourseTime: true,
      isDisabled: true
    })
  },
  onCloseCourseTime() {
    this.setData({
      showCourseTime: false,
      isDisabled: false
    })
  },
  onCancelCourseTime() {
    this.setData({
      showCourseTime: false,
      isDisabled: false
    })
  },
  onConfirmCourseTime(event) {
    console.log(event)
    //判断是否为合法时间
    if (event.detail.index[0] > event.detail.index[1]) {
      console.log('isRedundant')
      Toast({
        type: 'fail',
        position: 'top',
        message: '时间不合法'
      });
      return
    }
    this.setData({
      startTime: event.detail.value[0],
      endTime: event.detail.value[1],
      courseTime: event.detail.value[0] + ' 至 ' + event.detail.value[1],
      showCourseTime: false,
      isDisabled: false
    })
  },

  //添加时间段的控制
  onAddTimeSlot() {
    this.setData({
      showTimeSlot: true
    })
  },
  onCloseTimeSlot() {
    this.setData({
      showTimeSlot: false
    })
  },
  onCancelTimeSlot() {
    this.setData({
      showTimeSlot: false
    })
  },

  onConfirmTimeSlot(event) {
    const temp = {
      id: this.data.timeId,
      weekday: event.detail.value[0],
      session: event.detail.value[1]
    }
    const list = this.data.timeSlotList
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
    this.timeIdIncrease()
    this.data.timeSlotList.push(temp)
    console.log(this.data.timeSlotList)
    this.setData({
      showTimeSlot: false,
      timeSlotList: this.data.timeSlotList
    })
  },

  // 时间段单元格控制
  onCloseTimeSlotCell(event) {
    console.log(event)
    // console.log(event.detail)
    const {
      position,
      instance
    } = event.detail;
    const id = event.currentTarget.id
    var list = this.data.timeSlotList
    console.log(id)
    switch (position) {
      case 'cell':
        instance.close()
        break
      case 'right':
        //删除选中项
        for (var i = 0; i < list.length; i++) {
          if (id == list[i].id) {
            list.splice(i, 1)
            break
          }
        }
        //更新数据
        this.setData({
          timeSlotList: list
        })
        // console.log(list)
        instance.close()
        break
    }
  },

  // 添加学生控制
  onAddStudent() {
    this.setData({
      showStudent: true,
      isDisabled: true
    })
  },
  onCloseStudent() {
    this.setData({
      showStudent: false,
      isDisabled: false
    })
  },
  onCancelStudent() {
    this.setData({
      showStudent: false,
      isDisabled: false
    })
  },
  onConfirmStudent(event) {
    const index = event.detail.index
    const temp = {
      id: this.data.sId,
      studentName: this.data.studentList[index].studentName,
      studentId: this.data.studentList[index].studentId
    }
    const list = this.data.studentToSaveList
    // 判断是否重复
    for (var i = 0; i < list.length; i++) {
      if (temp.studentId == list[i].studentId) {
        console.log('isRedundant')
        Toast({
          type: 'fail',
          position: 'top',
          message: '学生重复'
        });
        return
      }
    }
    this.sIdIncrease()
    this.data.studentToSaveList.push(temp)
    this.setData({
      showStudent: false,
      studentToSaveList: this.data.studentToSaveList
    })
  },

  // 学生列表单元格控制
  onCloseStudentCell(event) {
    console.log(event)
    const {
      position,
      instance
    } = event.detail;
    const id = event.currentTarget.id
    var list = this.data.studentToSaveList
    console.log(id)
    switch (position) {
      case 'cell':
        instance.close()
        break
      case 'right':
        //删除选中项
        for (var i = 0; i < list.length; i++) {
          if (id == list[i].id) {
            list.splice(i, 1)
            break
          }
        }
        //更新数据
        this.setData({
          studentToSaveList: list
        })
        instance.close()
        break
    }
  },

  onSaveCourse: function () {
    //判断课程名
    if (this.data.courseName == null) {
      console.log("courseNameError")
      Toast({
        type: 'fail',
        message: '课程名有误'
      });
      return
    }
    //判断教师
    if (this.data.teacherId == null) {
      console.log("teacherError")
      Toast({
        type: 'fail',
        message: '任课教师有误'
      });
      return
    }
    //判断上课时间
    if (this.data.startTime == null) {
      console.log("startTimeError")
      Toast({
        type: 'fail',
        message: '上课时间有误'
      });
      return
    }
    //判断课程时间端
    if (this.data.timeSlotList.length == 0) {
      console.log("endTimeError")
      Toast({
        type: 'fail',
        message: '课程时间段有误'
      });
      return
    }
    //判断学生列表
    if (this.data.studentToSaveList.length == 0) {
      console.log("studentListError")
      Toast({
        type: 'fail',
        message: '学生列表有误'
      });
      return
    }
    var studentList = new Array()
    for (var i = 0; i < this.data.studentToSaveList.length; i++) {
      studentList.push(this.data.studentToSaveList[i].studentId)
    }
    var newCourse = {
      courseName: this.data.courseName,
      teacherId: this.data.teacherId,
      startTime: this.data.startTime,
      endTime: this.data.endTime,
      timeSlotList: this.data.timeSlotList,
      studentList: studentList
    }
    console.log(newCourse)
    Dialog.confirm({
        title: '确认',
        message: '确定要添加课程吗？',
        asyncClose: true
      })
      .then(() => {
        wx.request({
          url: '',
          type: 'POST',
          data: newCourse,
          success(res) {
            console.log(res.data)
            Dialog.close()
          }
        })
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