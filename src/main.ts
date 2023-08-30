/*
 * @Description: 
 * @Version: 2.0
 * @Autor: lgy
 * @Date: 2023-08-20 20:28:03
 * @LastEditors: lgy
 * @LastEditTime: 2023-08-20 23:28:25
 */
import { createApp } from 'vue'
import App from './App.vue'

import router from "./router";

import './assets/markdown.css';

import DrawStartsUI from '../packages';
import Preview from './components/Preview.vue';


const app = createApp(App);

app.use(router);

app.component('Preview', Preview)
app.use(DrawStartsUI);

app.mount("#app");