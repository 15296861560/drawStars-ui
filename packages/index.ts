/* eslint-disable */

/** 
 * !--------- FBI WARNING ----------!
 * 
 * 根据 /packages 目录下的组件所生成的模块导出，请勿手动修改
 */
import { App, Plugin } from 'vue';

import { ButtonPlugin } from './Button';
import { FlipPlugin } from './Flip';
import { VirtualListPlugin } from './VirtualList';

const DrawStartsPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app);
    FlipPlugin.install?.(app);
    VirtualListPlugin.install?.(app);
  },
};

export default DrawStartsPlugin;

export * from './Button'
export * from './Flip'
export * from './VirtualList'