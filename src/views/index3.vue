<template>
  <div>
    <h3>{{$store.state.count}}******{{count}}----{{$store.state.a.count}}</h3>
    <h3>123</h3>
    <p>{{$t('message.hello')}}</p>
    <p>
      <button @click="$store.commit('add', 10)">+</button>
      <button @click="reduce">-</button>
    </p>
    <p>
      <button @click="addAction">+</button>
      <button @click="reduceAction">-</button>
    </p>
  </div>
</template>

<script>

import store from '@/store/store'
import { mapMutations, mapActions } from 'vuex'
export default {
  name: 'index3',
  data () {
    return {
      langEn: 'en',
      langZh: 'zh'
    }
  },
  // computed: mapState(['count']),
  computed: {
    // ...mapState(['count'])
    // count () {
    //   return this.$store.getters.count
    // }
    // ...mapGetters(['count'])
    count () {
      return this.$store.state.a.count
    }
  },
  methods: {
    ...mapMutations(['add', 'reduce']),
    ...mapActions(['addAction', 'reduceAction']),
    addAction () {
      this.$i18n.locale = this.langEn
    },
    reduceAction () {
      this.$i18n.locale = this.langZh
    }
  },
  store
}
</script>

<style scoped>

</style>
