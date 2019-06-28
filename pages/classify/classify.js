// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categoryList: [{
        id: '249794988324487171',
        name: '热销爆品'
      },
      {
        id: '249794988324487172',
        name: '会员特价'
      },
      {
        id: '249794988324487173',
        name: '时令水果'
      },
      {
        id: '249794988324487174',
        name: '肉禽蛋类'
      },
      {
        id: '249794988324487175',
        name: '海鲜水产'
      },
      {
        id: '249794988324487176',
        name: '烘焙糕点'
      },
      {
        id: '249794988324487177',
        name: '休闲零食'
      }
    ],
    curCate: null,
    itemList: [{
        id: '239794988324487170',
        name: '绿豆',
        price: '10.8',
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561528644059&di=73f16965b38c363a6a93fe0f2bbea28f&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Fcq%2Fpics%2Fhv1%2F58%2F224%2F2277%2F148119103.jpg'
      },
      {
        id: '239794988324487171',
        name: '黄豆',
        price: '7.8',
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562136213&di=78149f658d46e7946488d43268093da0&imgtype=jpg&er=1&src=http%3A%2F%2Fdpic.tiankong.com%2Ffg%2Frz%2FQJ6395713508.jpg%3Fx-oss-process%3Dstyle%2Fshows'
      },
      {
        id: '239794988324487172',
        name: '五常大米',
        price: '3.8',
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561541522550&di=e4fc211635adb6e867f2610ac23b26a4&imgtype=0&src=http%3A%2F%2Fwww.chinasensor.cn%2Ffile%2Fupload%2F201707%2F28%2F16054877171185.jpg'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (this.data.categoryList.length !== 0) {
      this.setData({
        curCate: this.data.categoryList[0]['id']
      });
    }
  },

  switchCateTab: function(e) {
    let _cateId = e.target.dataset.id;
    this.setData({
      curCate: _cateId
    });
  },

  goDetlPage: function(event) {
    // 获取productId
    let productId = event.currentTarget.dataset.id
    // 携带productId跳转到product detail page
    wx.navigateTo({
      url: `../common/detailTemplate/detailTemplate?productId=${productId}`
    })
  }
})