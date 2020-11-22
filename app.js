//app.js
App({
  onLaunch: function () {
    var that = this
    //获取本地登录信息
    wx.getStorage({
      key: 'loginInfo',
      //已经登录
      success(res) {
        let loginInfo = res.data
        that.globalData.userInfo = res.data
        switch (loginInfo.user.type) {
          case admin:
            wx.redirectTo({
              url:'/pages/admin/index'
            })
          case teacher:
            wx.redirectTo({
              url:'/pages/teacher/index'
            })
        }
      },
      fail() {

      }
    })
  },
  globalData: {
    userInfo: null,
  }
})