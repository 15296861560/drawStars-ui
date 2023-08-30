/*
 * @Description: 
 * @Version: 2.0
 * @Autor: lgy
 * @Date: 2023-08-20 20:32:54
 * @LastEditors: lgy
 * @LastEditTime: 2023-08-20 20:34:03
 */
import { App, Plugin } from 'vue';
import Button from './src/index.vue';

export const ButtonPlugin: Plugin = {
    install(app: App) {
        app.component('demo-button', Button);
    },
};

export { Button };