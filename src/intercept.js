import router from '@/router/index';
import store from '@/store/store'

if (sessionStorage.getItem('token')) {
  store.commit('set_token', sessionStorage.getItem('token'))
}
router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.token) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})
