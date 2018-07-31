module.exports = [{
  name: '首页',
  id: '1',
  componentName: '/home',
  hidden: true
}, {
  name: '首页2',
  id: '2',
  hidden: false,
  sub: [{
    name: '子页面1',
    componentName: '/index3'
  }, {
    name: '子页面2',
    componentName: '/index4'
  }]
}]
