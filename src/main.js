import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Action from '../deps/action-ui'
import VueCodeMirror from 'vue-codemirror'

Vue.use(VueRouter)
Vue.use(VueCodeMirror)
Vue.use(Action)

import Nav from './components/Nav.vue'
import Sidebar from './components/Sidebar.vue'
import Preview from './components/Preview.vue'
import Editor from './components/Editor.vue'
import Codemirror from './components/Codemirror.vue'
Vue.component(Nav.name, Nav)
Vue.component(Sidebar.name, Sidebar)
Vue.component(Preview.name, Preview)
Vue.component(Editor.name, Editor)
Vue.component(Codemirror.name, Codemirror)

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
