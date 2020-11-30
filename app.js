//app.js
App({
  onLaunch: function () {
    var that = this
    //获取本地登录信息
    wx.getStorage({
      key: 'loginInfo',
      //已经登录
      success(res) {
        console.log(res)
        let loginInfo = res.data
        that.globalData.userInfo = res.data
        if (loginInfo.type == 'admin') {
          console.log('isAdmin')
          wx.redirectTo({
            url:'/pages/admin/admin'
          })
        } else {
          console.log('isTeacher')
          wx.redirectTo({
            url:'/pages/teacher/teacher'
          })
        }
      },
      fail() {

      }
    })
  },
  globalData: {
    userInfo: null,
    domain:'http://112.74.95.237:5000/'
  }
})