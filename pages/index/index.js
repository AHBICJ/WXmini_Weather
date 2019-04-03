Page({
  onLoad(){
    wx.request({
      url: 'https://test-miniprogram.com/api/weather/now',
      data: {
        city: '绍兴市'
      },
      header: {
        'content-type': 'application/json'
      },
      success: res => console.log(res),
    })
  }

});
wx.setNavigationBarColor({
  frontColor: '#ffffff',
  backgroundColor: '#C4EFFF',
  animation: {
    duration: 400,
    timingFunc: 'easeIn'
  }
})