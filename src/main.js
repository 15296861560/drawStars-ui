/*
 * @Description: 
 * @Version: 2.0
 * @Autor: lgy
 * @Date: 2022-10-07 22:35:04
 * @LastEditors: lgy
 * @LastEditTime: 2022-10-08 23:19:02
 */
import Vue from 'vue'
import App from './App.vue'


import DrawStartsUI from './assets/draw-stars-ui.umd.js';
import './assets/draw-stars-ui.css';

Vue.use(DrawStartsUI)

Vue.config.productionTip = false



new Vue({
  render: h => h(App),
}).$mount('#app')