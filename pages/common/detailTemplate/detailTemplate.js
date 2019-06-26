// detailTemplate.js

const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productId: null,
    detailInfo: {
      id: '239794988324487170',
      name: '五常大米',
      price: '10.8',
      url: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561541522550&di=e4fc211635adb6e867f2610ac23b26a4&imgtype=0&src=http%3A%2F%2Fwww.chinasensor.cn%2Ffile%2Fupload%2F201707%2F28%2F16054877171185.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561546350893&di=64b617566eee2e42bf37ddc3403370db&imgtype=0&src=http%3A%2F%2Fpic.womai.com%2Fupload%2F2015%2F4%2F22%2F20150422020540509.jpg'],
      description: '一餐五常米，浑忘酒肉香”，遥远的塞外北国，神秘的白山黑水，在此灵动的黑土地上孕育着传奇稻谷——五常大米。“稻花香”做为五常大米中的精品，拥有着一段传奇的历史。说到“稻花香”就得从一个人说起，他就是——田永太，朝鲜族，农艺师，原系黑龙江省五常市龙凤山乡农业技术推广站站长，2009年退休。他从事水稻研究工作40余年，在这漫长的时间里，历尽艰辛，苦心研究适合当地生长的水稻当家品种，每创出一个品牌，都凝聚着田永太的心血和汗水。五常市地处中纬度，冬季在极地大陆气团控制之下，夏季受副热带海洋气团影响。春、秋两季为冬、夏季风交替季节，其气候类型为寒温带。 冬季漫长寒冷，干燥少雪 冬季（11—3月）长达5个月之久，经常处在西北气流和蒙古冷高压控制之下，导致气候寒冷，干燥少雪。一旦雪暴形成，常引起气温急剧下降，并伴有大风，给道路交通和居民的户外活动带来影响。 夏季短促酷热，雨量集中 夏季（6—8月）仅3个月左右，在副热带海洋气团影响下，导致气温高，雨量集中，常表现有明显的雨热同季的特征，易造成洪涝灾害 秋季低温凉爽，初霜较早 秋季（9—10月）北方冷空气势力增强，气温急剧下降。由于较大规模的冷空气入侵，易出现早霜'
    }, // product detail 的信息
    swiperData: {
      indicatorDots: true,
      circular: true,
      autoplay: true,
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // this.setData = ({
    //   productId: options.productId
    // })

    // // 根据productId获取对应product的信息
    // let _detailInfo = {
    //   id: '239794988324487170',
    //   name: '五常大米',
    //   price: '10.8',
    //   url: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561541522550&di=e4fc211635adb6e867f2610ac23b26a4&imgtype=0&src=http%3A%2F%2Fwww.chinasensor.cn%2Ffile%2Fupload%2F201707%2F28%2F16054877171185.jpg', 'https://pics3.baidu.com/feed/838ba61ea8d3fd1f1ca0c3093b1ad21b95ca5f34.png?token=f2bafe7ac98932378991c973657d4d75&s=C5A6BC53C08ADFEF5A283A43030020F4'],
    //   description: '一餐五常米，浑忘酒肉香”，遥远的塞外北国，神秘的白山黑水，在此灵动的黑土地上孕育着传奇稻谷——五常大米。“稻花香”做为五常大米中的精品，拥有着一段传奇的历史。说到“稻花香”就得从一个人说起，他就是——田永太，朝鲜族，农艺师，原系黑龙江省五常市龙凤山乡农业技术推广站站长，2009年退休。他从事水稻研究工作40余年，在这漫长的时间里，历尽艰辛，苦心研究适合当地生长的水稻当家品种，每创出一个品牌，都凝聚着田永太的心血和汗水'
    // }
    // this.setData = ({
    //   detailInfo: _detailInfo
    // })
  },
})