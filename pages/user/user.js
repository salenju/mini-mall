// pages/user/user.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    orderInfo: [{
        id: '259794988324487170',
        url: '../../assets/images/iconfont-order.png',
        name: '我的订单',
      },
      {
        id: '259794988324487171',
        url: '../../assets/images/iconfont-addr.png',
        name: '收货地址',
      },
      {
        id: '259794988324487172',
        url: '../../assets/images/iconfont-kefu.png',
        name: '联系客服',
      },
      {
        id: '259794988324487173',
        url: '../../assets/images/iconfont-help.png',
        name: '常见问题',
      }
    ],
    aboutInfo: [{
        id: '259794988324487178',
        url: '../../assets/images/iconfont-clear.png',
        name: '清除缓存',
      },
      {
        id: '259794988324487179',
        url: '../../assets/images/iconfont-about.png',
        name: '关于我们',
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  commonJump: function(event) {
    let _name = event.currentTarget.dataset.name;
    let mapData = {
      '我的订单': './order/order',
      '收货地址': './address/address',
      '联系客服': './contact/contact',
      '常见问题': './help/help',
      '清除缓存': './clearCache/clearCache',
      '关于我们': './aboutUs/aboutUs'
    }
    wx.navigateTo({
      url: mapData[_name],
    })
  },

})