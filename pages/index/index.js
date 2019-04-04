const weatherMap = {
  'sunny': '晴天',
  'cloudy': '多云',
  'overcast': '阴',
  'lightrain': '小雨',
  'heavyrain': '大雨',
  'snow': '雪'
}

const weatherColorMap = {
  'sunny': '#C4EFFF',
  'cloudy': '#DAEFF7',
  'overcast': '#C4CED2',
  'lightrain': '#B6D6E2',
  'heavyrain': '#C3CCD0',
  'snow': '#99E3FF'
}

Page({
  data:{
    nowTemp:'',
    nowWeather:'',
    nowWeatherBackground:'',
  },
  onLoad(){this.getNow()},
  onPullDownRefresh() {
    this.getNow(() => {
      wx.stopPullDownRefresh()
    })
  },
  getNow(callback){
    wx.request({
      url: 'https://test-miniprogram.com/api/weather/now',
      data: {
        city: '绍兴市'
      },
      header: {
        'content-type': 'application/json'
      },
      success: res => {
        const result = res.data.result;
        let temp = result.now.temp;
        let weather = result.now.weather;
        this.setData({
          nowTemp: temp + "°",
          nowWeather: weatherMap[weather],
          nowWeatherBackground: `/images/${weather}-bg.png`,
        });
        wx.setNavigationBarColor({
          frontColor: '#ffffff',
          backgroundColor: weatherColorMap[weather],
          animation: {
            duration: 400,
            timingFunc: 'easeIn'
          }
        })
      },
      complete:()=>{
        callback && callback()
      }
    })
  }

});
