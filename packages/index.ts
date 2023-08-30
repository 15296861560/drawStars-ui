/*
 * @Description: 
 * @Version: 2.0
 * @Autor: lgy
 * @Date: 2023-08-20 20:34:44
 * @LastEditors: lgy
 * @LastEditTime: 2023-08-23 23:42:32
 */
/* eslint-disable */

/** 
 * !--------- FBI WARNING ----------!
 * 
 * 根据 /packages 目录下的组件所生成的模块导出，请勿手动修改
 */
import { App, Plugin } from 'vue';

import { ButtonPlugin } from './Button';

const DrawStartsPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app);
  },
};

export default DrawStartsPlugin;

export * from './Button'