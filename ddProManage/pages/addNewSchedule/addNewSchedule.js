Page({
  data: {
    date: '',
    date2: '',
    array: ['不提醒', '开始前5分钟', '开始前15分钟', '开始前30分钟', '开始前1小时', '开始前1天', '开始前1周'],
    index: 0,
  },
  onLoad() {
    this.getDefultDate()
  },
  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail);
    this.setData({
      index: e.detail.value,
    });
  },
  getDefultDate() {
    var starTime = new Date()
    var timeTamp = new Date().getTime()
    var addTamp = 1*24*60*60*1000
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
});
