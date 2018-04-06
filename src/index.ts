import Vue from 'vue'
import App from './App.vue'
import store from './store/index'

new Vue({
  el: '#app',
  template: '<App></App>',
  store,
  components: {
    App,
  },
})

Vue.config.devtools = true
