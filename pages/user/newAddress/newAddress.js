// pages/user/newAddress/newAddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [{
        name: 'company',
        value: '公司'
      },
      {
        name: 'home',
        value: '家'
      },
      {
        name: 'parents',
        value: '父母家'
      },
      {
        name: 'school',
        value: '学校'
      }
    ],
    sexItems:[
      {
        name:'male',
        value:'男士'
      },
      {
        name: 'female',
        value: '女士'
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  switchChange: function(e) {
    console.log('=====>switch:', e.detail.value);
  }
})