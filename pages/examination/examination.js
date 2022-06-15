// pages/examination/examination.js
var app = getApp() //获取全局app实例


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
        {id:1,url:"/images/check.png",name:"常规检测",goto:"normal_check/normal_check"},
        {id:2,url:"/images/safe.png",name:"安全检测",goto:"safe_check/safe_check"},
        {id:3,url:"/images/question-circle-fill.png",name:"故障检测",goto:"fault_check/fault_check"},
        {id:4,url:"/images/car-info.png",name:"车况信息",goto:"car_info/car_info"},
        {id:5,url:"/images/weizhang.png",name:"违章检测",goto:"violation_check/violation_check"},
        {id:6,url:"/images/location.png",name:"车主定位",goto:"car_location/car_location"}
    ]
  },
  //跳转方法
  gotoSubEx:(e)=>{
    if(!app.globalData.isLogin){
      console.log(app.globalData.isLogin)
      wx.showToast({
        title: '请先登陆',
        icon:"error",
        duration:500
      })
    }else{
      console.log(e.target.dataset.goto)
      wx.navigateTo({
        // url: `../../subExamination/${e.target.dataset.goto}`,
        url:`../../subExamination/pages/${e.target.dataset.goto}`
      })
    }
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