import Vue from 'vue'
import VueRouter from 'vue-router'
var VueResource = require('vue-resource');

import App from './App.vue'
import Action from '../deps/action-ui'
import VueCodeMirror from 'vue-codemirror'

Vue.use(VueRouter)
Vue.use(VueResource);
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

let router = new VueRouter({
  routes: [
    {
      path: '/'
    }]
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
