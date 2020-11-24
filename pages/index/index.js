//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    isLogin: true,
    userInfo: null,
    isAuthenticated: false,
    identity: '教师',
    id:'',
  },

  onIdentityChange: function (event) {
    this.setData({
      identity: event.detail
    })
  },

  onIdChange:function(event){
    this.setData({
      id:event.detail
    })
  },

  toAdmin: function () {
    wx.redirectTo({
      url: '../admin/admin',
    })
  },
  toTeacher: function () {
    wx.redirectTo({
      url: '../teacher/teacher',
    })
  },

  login: function () {
    var that = this
    // 调用接口获取登录凭证
    wx.login({
      success(loginRes) {
        console.log(loginRes)
        if (loginRes.code) {
          //发送code到后端验证身份
          wx.request({
            url: 'https://test.com/onLogin',
            method: 'POST',
            data: {
              code: loginRes.code
            },
            success: (res) => {
              console.log(res)
              that.setData({
                userInfo: res.data
              })
              let userInfo = res.data
              // 已经在系统中认证过
              if (userInfo.isAuthenticated) {
                // 保存登陆状态和信息到本地
                try {
                  wx.setStorageSync('loginInfo', userInfo)
                } catch (e) {
                  console.log(e)
                }
                app.globalData.userInfo = userInfo
                // 提示重新打开小程序
                that.setData({
                  isAuthenticated: true
                })
              } else {
                // 跳转到认证页
                that.setData({
                  isLogin: true
                })
              }
            }
          })
        } else {
          console.log('登录失败！' + loginRes.errMsg)
        }
      }
    })
  },

  onAuthenticate:function(){
    wx.request({
      url:'',
      method:POST,
      data:{
        identity:'',
        id:''
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    if (app.globalData.userInfo == null) {
      this.login()
    }
  },
})