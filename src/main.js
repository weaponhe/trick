import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Action from '../deps/action-ui'
Vue.use(VueRouter)
Vue.use(Action)

import Nav from './components/Nav/Nav.vue'
Vue.component(Nav.name, Nav)

const Foo  = {template: '<div>foo</div>'}
const Bar  = {template: '<div>bar</div>'}
let router = new VueRouter({
  routes: [{
    path: '/',
    component: Foo
  }, {
    path: '/2',
    component: Bar
  }]
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
