// pages/user/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressList: [{
        id: '269794988324487270',
        address: '长富金茂大厦',
        label: 'company',
        labelName: '公司',
        defaultAddress: false,
        contactName: '琚先生',
        contactNumber: '18565723173',
        sex: 'male'
      },
      {
        id: '269794988324487271',
        address: '岗头发展大厦',
        label: 'home',
        labelName: '家',
        defaultAddress: true,
        contactName: '张女士',
        contactNumber: '15221176843',
        sex: 'female'
      },
      {
        id: '269794988324487272',
        address: '学府中路8号',
        label: 'school',
        labelName: '学校',
        defaultAddress: false,
        contactName: '王女士',
        contactNumber: '15891365980',
        sex: 'female'
      },
      {
        id: '269794988324487273',
        address: '喜洋洋超市',
        label: 'parents',
        labelName: '父母家',
        defaultAddress: false,
        contactName: '张先生',
        contactNumber: '15891368888',
        sex: 'male'
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  addAddress: function() {
    wx.navigateTo({
      url: '../newAddress/newAddress',
    })
  }

})