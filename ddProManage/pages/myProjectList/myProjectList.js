Page({
  data: {
    array: ['全部项目', '集团战略', '公司项目', '部门项目', '小组项目', '个人项目'],
    index: 0,
    unStart: '',
    doing: '',
    finished: '',
  },
  onLoad() {},
  selectData(e) {
    var that = this
    console.info(e.currentTarget.dataset.colornum)
    if (e.currentTarget.dataset.colornum == '1') {
      that.setData({
        unStart: '#26a2ff',
        doing: '',
        finished: '',
      })
    } else if (e.currentTarget.dataset.colornum == '2') {
      that.setData({
        unStart: '',
        doing: '#26a2ff',
        finished: '',
      })
    } else if (e.currentTarget.dataset.colornum == '3') {
      that.setData({
        unStart: '',
        doing: '',
        finished: '#26a2ff',
      })
    }
  },
  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail);
    this.setData({
      index: e.detail.value,
    });
  },
  addNewProject() {
    dd.navigateTo({
      url: '../projectModel/projectModel'
    })
  },
  toProjectDetail() {
    dd.navigateTo({
      url: '../projectDetail/projectDetail'
    })
  }
});
