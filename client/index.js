/*
* @Author: lvyufeng
* @Date:   2018/4/30
*
*/
'use strict'

import Vue from 'vue'
import App from './app.vue'

import './assets/styles/global.styl'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  render: (h) => h(App)
}).$mount(root)
