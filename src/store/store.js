
import Vue from 'vue'
import Vuex from 'vuex'
import index from './modules/index'

Vue.use(Vuex)

const state = {
  count: 1
}

const mutations = {
  add (state, n) {
    state.count += n
    setTimeout(() => { console.log(`111`) }, 1000)
    console.log('22')
  },
  reduce (state) {
    state.count--
  }
}

const getters = {
  count: function (state) {
    return state.count += 100
  }
}

const actions = {
  addAction (context) {
    context.commit('add', 10)
    setTimeout(() => { context.commit('reduce') }, 1000)
    console.log('我比setTimeout提前执行')
  },
  reduceAction ({commit}) {
    commit('reduce')
  }
}

const moduleA = {
  state,
  mutations,
  getters,
  actions
}

export default new Vuex.Store({
  modules: {
    a: moduleA,
    index
  }
})
