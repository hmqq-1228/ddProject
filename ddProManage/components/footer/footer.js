Component({
  mixins: [],
  data: {
    taskImg: '../../image/taskActive.png',
    taskText: '#1296db',
    proImg: '../../image/xiangmu.png',
    proText: '#666'
  },
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    bottomNavClick(e) {
      console.info(e.currentTarget.dataset)
      if (e.currentTarget.dataset.linkpage === 'toproject') {
        console.info(1111)
        dd.navigateTo({
          url: '../../pages/myProjectList/myProjectList'
        })
        this.setData({
          proImg: '../../image/xiangmuActive.png',
          proText: '#1296db'
        })
      }
    }
  },
});
