import { App, Plugin } from 'vue';
import VirtualList from './src/index.vue';

export const VirtualListPlugin: Plugin = {
  install(app: App) {
    app.component('ds-virtual-list', VirtualList);
  },
};

export {
  VirtualList,
};
