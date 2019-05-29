Page({
  data: {
    monGrids: [],
    month: 5,
    year: 2019,
    day: '',
    dateYear: '',
    nowDayTime: '2019-05-23',
    nowDay: '2019-05-01 00:00:00',
    dayList: [],
    checkActive: 2,
  },
  onLoad() {
    var that = this
    that.getDefultTime()
    that.initDate()
  },
  getDefultTime() {
    var that = this
    var starTime = new Date()
    var staryear = starTime.getFullYear()
    var starmonth = (starTime.getMonth() + 1) < 10 ? '0' + (starTime.getMonth() + 1) : (starTime.getMonth() + 1)
    var starday = starTime.getDate() < 10 ? '0' + starTime.getDate() : starTime.getDate()
    // var starHours = starTime.getHours() < 10 ? '0' + starTime.getHours() : starTime.getHours()
    // var starMinut = starTime.getMinutes() < 10 ? '0' + starTime.getMinutes() : starTime.getMinutes()
    that.setData({
      nowDayTime: staryear + '-' + starmonth + '-' + starday
    })
    that.setData({
      dateYear: staryear + '-' + starmonth
    })
     that.setData({
      month: starmonth
    })
  },
  pickerDateTime() {
    var that = this
    dd.datePicker({
      format: 'yyyy-MM',
      currentDate: that.data.dateYear,
      success: (res) => {
        var year = res.date.split('-')[0]
        var month = res.date.split('-')[1]
        that.setData({
          year: year
        })
        that.setData({
          month: month
        })
        that.setData({
          dateYear: res.date
        })
        that.initDate()
      },
    });
  },
  initDate() {
    var that = this
    that.setData({
      monGrids: []
    })
    var myDate = new Date(that.data.dateYear)
    var d = new Date(that.data.year,that.data.month,0)
    var monthMax = d.getDate()
    var weekDay = myDate.getDay()
    for (var i = 0; i < 42; i++) {
      var obj = {
        light: false,
        classStyle: '',
        holiday: 0,
        date: 0,
        allMon: '',
        modelDay: '',
        totalNum: 0,
      }
      if (i >= weekDay) {
        if (i - (weekDay - 1) <= monthMax) {
          obj.date = i - (weekDay - 1)
          obj.allMon = that.data.month
          var allDay
          var modMon
          if (obj.date < 10) {
            allDay = '0' + obj.date
          } else {
            allDay = obj.date
          }
          modMon = obj.allMon
          obj.modelDay = that.data.year + '-' + modMon + '-' + allDay
        }
      }
      that.data.monGrids.push(obj)
    }
    for (var n = 0; n < that.data.monGrids.length; n++) {
      if (that.data.monGrids[n].modelDay === that.data.nowDayTime) {
        that.data.monGrids[n].light = true
      }
    }
  },
  checkState(e) {
    console.info(e)
    var that = this
    if (e.currentTarget.dataset.state == '1') {
      that.setData({
        checkActive: 1
      })
    } else if (e.currentTarget.dataset.state == '2') {
      that.setData({
        checkActive: 2
      })
    } else if (e.currentTarget.dataset.state == '3') {
      that.setData({
        checkActive: 3
      })
    }
  },
  addNewSchedule() {
    dd.navigateTo({
      url: '../addNewSchedule/addNewSchedule'
    })
  },
  toScheduleDetail() {
    dd.navigateTo({
      url: '../scheduleDetail/scheduleDetail'
    })
  },
});
