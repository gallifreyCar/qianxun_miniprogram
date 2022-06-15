// pages/my/my.js
var app = getApp() //获取全局app实例
Page({
 

  /**
   * 页面的初始数据
   */
  data: {
    myList:[
      {id:1,title:"车辆设置",name:"falut_history",image:"/images/settings.png"},
      {id:2,title:"报警设置",name:"fault_analysis",image:"/images/110.png"},
      {id:3,title:"电话信息",name:"history_history",image:"/images/phone.png"},
      {id:4,title:"关于我们",name:"history_history",image:"/images/about.png"},
    ],
    userInfo: {},
    isLogin:false,
    flagA:true,
    flagB:true
  },
  //登陆方法
  loginMe(){
    wx.login({
      timeout: 1000,
      success:(res)=>{
        if (res.code) {
            //发起网络请求 成功则跳转
            wx.request({
              url: 'https://gallifrey.asia/TAPI',
              data: {
                code: res.code
              },
              success:(res)=>{
                // console.log(res);
                if(res.statusCode==200){
                  this.setData({
                    flagA:true
                  })
                  wx.showToast({
                    title: '网络请求成功',
                  })
                }else{
                  wx.showToast({
                    icon:"error",
                    title: '网络请求失败',
                  })
                }
              }  

            })
        } else {
            console.log('网络请求失败！' + res.errMsg)
        }
      }
    })
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          flagB:true
        })
        if(this.data.flagA==true&&this.data.flagB==true){
          wx.showToast({
            title: '登陆成功',
          })
        
          app.globalData.isLogin=true
          this.setData({
            isLogin:app.globalData.isLogin
          })
        }else{
          wx.showToast({
            title: '登陆失败',
          })
        }
      }
    })
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