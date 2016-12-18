// pages/index/index.js
var api = require('../../utils/api.js');

Page({
  data:{
    lists: []
  },
  onLoad:function() {
    //console.log(api.getListUrl());
    this.fetchData(29);
  }
  ,
  fetchData:function(type) {
    var self = this;
    wx.request({
      url: api.getListUrl(type),
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        self.setData({
          lists: self.data.lists.concat(res.data.list)
        })
        // success
        console.log(self.data.lists);
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
  
})