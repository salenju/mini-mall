//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    swiperData: {
      imgUrls: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562134764&di=7eaf25480b3c3d55e04346d784422217&imgtype=jpg&er=1&src=http%3A%2F%2Fpic83.huitu.com%2Fres%2F20160808%2F892975_20160808162817850600_1.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561540069519&di=1eca5892d2fc5ca58308e65fae2f91b4&imgtype=0&src=http%3A%2F%2Fpic98.huitu.com%2Fres%2F20170809%2F1172635_20170809170901103020_1.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561540094126&di=f4690601eb4263e05cb08714be25537b&imgtype=0&src=http%3A%2F%2Fpic83.huitu.com%2Fres%2F20160721%2F1081420_20160721135630057600_1.jpg'
      ],
      indicatorDots: true,
      circular: true,
      autoplay: true,
    },
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
    ],
  },

  onLoad: function() {

  },

  goDetlTab: function(event) {
    // 获取productId
    let productId = event.currentTarget.dataset.id
    // 携带productId跳转到product detail page
    wx.navigateTo({
      url: `../common/detailTemplate/detailTemplate?productId=${productId}`
    })
  },
})