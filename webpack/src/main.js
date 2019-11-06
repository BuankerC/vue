import Vue from 'vue'
// const Vue = require('vue')

import App from './App.vue'

new Vue({
  render: h => h(App)
}).$mount('#app')

// 전에 쓰던 코드
// const app = new Vue({
//   el: '#app'
// })