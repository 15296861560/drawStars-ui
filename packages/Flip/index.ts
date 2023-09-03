import { App, Plugin } from 'vue';
import Flip from './src/index.vue';

export const FlipPlugin: Plugin = {
  install(app: App) {
    app.component('ds-flip', Flip);
  },
};

export {
  Flip,
};
