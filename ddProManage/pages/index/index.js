Page({
  data: {
    search: '',
    overStyle: '',
    doingStyle: '',
    finishStyle: '',
    nustarteStyle: '',
  },
  onLoad(query) {
    // 页面加载
    this.getTaskList()
  },
  getTaskList() {
    var app = getApp()
    console.log(app.getDataUrl)
    dd.httpRequest({
      url: app.getDataUrl + '/app/myTaskView',
      method: 'POST',
      data: {
        userId: 'M9AB565771B1BB50F',
        pageNum: 1,
        pageSize: 10,
        sType: '',
        jobName: '',
        sort: ''
      },
      dataType: 'json',
      success: function(res) {
        console.info('11111', res)
      },
      fail: function(res) {
        console.info('22222', res)
      },
      complete: function(res) {
        console.info('33333', res)
      }
    });
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  selectState(e) {
    var that = this
    if (e.currentTarget.dataset.num === '1') {
      console.info(11111)
      that.setData({
        overStyle: '#26a2ff',
        doingStyle: '',
        finishStyle: '',
        nustarteStyle: '',
      })
    } else if (e.currentTarget.dataset.num === '2') {
      that.setData({
        overStyle: '',
        doingStyle: '',
        finishStyle: '',
        nustarteStyle: '#26a2ff',
      })
    } else if (e.currentTarget.dataset.num === '3') {
      that.setData({
        overStyle: '',
        doingStyle: '#26a2ff',
        finishStyle: '',
        nustarteStyle: '',
      })
    } else if (e.currentTarget.dataset.num === '4') {
      that.setData({
        overStyle: '',
        doingStyle: '',
        finishStyle: '#26a2ff',
        nustarteStyle: '',
      })
    }
  },
  toMyTaskDetail() {
    console.info(1111111)
    dd.navigateTo({
      url: '../taskDetail/taskDetail'
    })
  },
  handleSearch(e) {
    console.log('search', e.detail.value);
    this.setData({
      search: e.detail.value,
    });
  },
  doneSearch() {
    console.log('doneSearch', this.data.search);
    dd.hideKeyboard();
  },
  clearSearch() {
    console.log('clear search', this.data.search);
    this.setData({
      search: '',
    });
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
