// pages/examiniation/examinitation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    percent:70,
    last_time:"2022-4-26  10:50",
    subTitleList:[
        {id:1,title:"体检项目"},
        {id:2,title:"当前"},
        {id:3,title:"正常"}
    ],
    Ex_what:[
        {id:1,title:"马达转速(mmp)"},
        {id:2,title:"马达扭矩(Nm)"},
        {id:3,title:"电池放电流(A)"},  
        {id:4,title:"电池组总电压(V)"}
    ],
    Ex_now:[
      {id:1,title:"1600"},
      {id:2,title:"1500"},
      {id:3,title:"500"},  
      {id:4,title:"700"}
    ],
    Ex_normal:[
    {id:1,title:"-15000~15000"},
    {id:2,title:"-5000~5000"},
    {id:3,title:"-500~500"},  
    {id:4,title:"0~800"}
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