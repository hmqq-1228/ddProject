Page({
  data: {
     items: [
      {name: '正常', value: '正常'},
      {name: '紧急', value: '紧急', checked: true},
      {name: '特急', value: '特急'}
    ],
    date: '',
    date2: '',
  },
  onLoad() {
    this.getDefultDate()
  },
  // modalTap1() {
  //   dd.alert({
  //     title: '亲',
  //     content: '您有新的快递消息',
  //     buttonText: '我知道了',
  //     success() {
  //       console.log('用户点击了「我知道了」');
  //     },
  //     fail() {
  //       console.log('fail');
  //     },
  //     complete() {
  //       console.log('complete');
  //     },
  //   });
  // },
  radioChange: function(e) {
    console.log('你选择的框架是：', e.detail.value)
  },
  getDefultDate() {
    var starTime = new Date()
    var timeTamp = new Date().getTime()
    var addTamp = 7*24*60*60*1000
    var endTamp = timeTamp + addTamp
    var staryear = starTime.getFullYear()
    var starmonth = (starTime.getMonth() + 1) < 10 ? '0' + (starTime.getMonth() + 1) : (starTime.getMonth() + 1)
    var starday = starTime.getDate() < 10 ? '0' + starTime.getDate() : starTime.getDate()
    var starHours = starTime.getHours() < 10 ? '0' + starTime.getHours() : starTime.getHours()
    var starMinut = starTime.getMinutes() < 10 ? '0' + starTime.getMinutes() : starTime.getMinutes()
    this.setData({
      date: staryear + '-' + starmonth + '-' + starday + ' ' + starHours + ':' + starMinut
    })
    var endTime = new Date(endTamp)
    var endyear = endTime.getFullYear()
    var endmonth = (endTime.getMonth() + 1) < 10 ? '0' + (endTime.getMonth() + 1) : (endTime.getMonth() + 1)
    var endday = endTime.getDate() < 10 ? '0' + endTime.getDate() : endTime.getDate()
    var endHours = endTime.getHours() < 10 ? '0' + endTime.getHours() : endTime.getHours()
    var endMinut = endTime.getMinutes() < 10 ? '0' + endTime.getMinutes() : endTime.getMinutes()
    this.setData({
      date2: endyear + '-' + endmonth + '-' + endday + ' ' + endHours + ':' + endMinut
    })
  },
  pickerDateTime() {
    var that = this
    dd.datePicker({
      format: 'yyyy-MM-dd HH:mm',
      currentDate: that.data.date,
      success: (res) => {
        var timeTamp = new Date().getTime()
        var timeTamp1 = new Date(res.date).getTime()
        console.info(timeTamp)
        console.info(timeTamp1)
        if (timeTamp1 < timeTamp) {
          var starTime = new Date(timeTamp)
          var staryear = starTime.getFullYear()
          var starmonth = (starTime.getMonth() + 1) < 10 ? '0' + (starTime.getMonth() + 1) : (starTime.getMonth() + 1)
          var starday = starTime.getDate() < 10 ? '0' + starTime.getDate() : starTime.getDate()
          var starHours = starTime.getHours() < 10 ? '0' + starTime.getHours() : starTime.getHours()
          var starMinut = starTime.getMinutes() < 10 ? '0' + starTime.getMinutes() : starTime.getMinutes()
          dd.alert({
            title: '时间不合理',
            content: '时间不能小于当前时间',
            buttonText: '我知道了',
            success() {
              that.setData({
                date: staryear + '-' + starmonth + '-' + starday + ' ' + starHours + ':' + starMinut
              })
            },
          });
        } else {
          that.setData({
            date: res.date
          })
        }
      },
    });
  },
   pickerDateTime2() {
    var that = this
    dd.datePicker({
      format: 'yyyy-MM-dd HH:mm',
      currentDate: that.data.date2,
      success: (res) => {
        var timeTamp = new Date(that.data.date).getTime()
        var timeTamp1 = new Date(res.date).getTime()
        console.info(timeTamp)
        console.info(timeTamp1)
        if (timeTamp1 < timeTamp) {
          var starTime = new Date(timeTamp)
          var staryear = starTime.getFullYear()
          var starmonth = (starTime.getMonth() + 1) < 10 ? '0' + (starTime.getMonth() + 1) : (starTime.getMonth() + 1)
          var starday = starTime.getDate() < 10 ? '0' + starTime.getDate() : starTime.getDate()
          var starHours = starTime.getHours() < 10 ? '0' + starTime.getHours() : starTime.getHours()
          var starMinut = starTime.getMinutes() < 10 ? '0' + starTime.getMinutes() : starTime.getMinutes()
          dd.alert({
            title: '时间不合理',
            content: '结束时间不能小于开始时间',
            buttonText: '我知道了',
            success() {
              that.setData({
                date2: staryear + '-' + starmonth + '-' + starday + ' ' + starHours + ':' + starMinut
              })
            },
          });
        } else {
          that.setData({
            date2: res.date
          })
        }
      },
    });
  },
  uploadFile() {
    var app = getApp()
    dd.chooseImage({
    count: 5,
    success: (res) => {
      console.info(res)
      var filePath = res.filePaths
      dd.uploadFile({
      url: app.getDataUrl + '/file/uploadFileAjax',
      fileType: 'image',
      fileName: 'file',
      filePath: filePath,
      success: (res) => {
        console.info('up', res)
      },
    });
    },
  });
  },
  // bindDateChange(e) {
  //   console.log('picker发送选择改变，携带值为', e)
  //   var timeTamp = new Date().getTime()
  //   if (e.timeStamp < timeTamp) {

  //   }
  //   this.setData({
  //     date: e.detail.value
  //   })
  // },
  // bindTimeChange(e) {
  //   console.log('picker发送选择改变，携带值为', e)
  //   this.setData({
  //     time: e.detail.value
  //   })
  // }
});
