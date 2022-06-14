// pages/examination/examination.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    percentage: 70,
    config: {
      canvasSize: {
        width: 400,
        height: 400
      },
      percent: 70,
      barStyle: [{width: 20, fillStyle: '#f0f0f0'}, {width: 20, animate: true, fillStyle: [{position: 0, color: '#56B37F'}, {position: 1, color: '#c0e674'}]}],
      needDot: true,
      dotStyle: [{r: 20, fillStyle: '#ffffff', shadow: 'rgba(0,0,0,.15)'}, {r: 10, fillStyle: '#56B37F'}]
    },
    gridList:[
        {url:"/images/check.png",name:"常规检测"},
        {url:"/images/safe.png",name:"安全检测"},
        {url:"/images/question-circle-fill.png",name:"故障检测"},
        {url:"/images/car-info.png",name:"车况信息"},
        {url:"/images/weizhang.png",name:"违章检测"},
        {url:"/images/location.png",name:"车主定位"}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
   
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})