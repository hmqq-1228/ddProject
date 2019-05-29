Page({
  data: {
    showModel: false,
    showModelFinish: false,
    showModelTran: false,
  },
  onLoad() {},
  toDecompositionTask() {
    dd.navigateTo({
      url: '../decompositionTask/decompositionTask'
    })
  },
  startTask() {
    dd.confirm({
      title: '温馨提示',
      content: '您确定开始此任务？',
      confirmButtonText: '马上开始',
      cancelButtonText: '暂不开始',
      success: (result) => {
        dd.alert({
          title: `${result.confirm}`,
        });
      },
    });
  },
  tranTask() {
    var that = this
    that.setData({
      showModelTran: true,
    })
  },
  concelTran() {
    var that = this
    that.setData({
      showModelTran: false,
    })
  },
  addComment() {
    var that = this
    that.setData({
      showModel: true,
    })
  },
  finishedTask() {
    var that = this
    that.setData({
      showModelFinish: true,
    })
  },
  concelCom() {
    var that = this
    that.setData({
      showModel: false,
    })
  },
  concelFinished() {
    var that = this
    that.setData({
      showModelFinish: false,
    })
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
  uploadFileFinished() {
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
});
