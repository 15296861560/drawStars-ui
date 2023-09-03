import { App, Plugin } from 'vue';
import {{ compName }} from './src/index.vue';

export const {{ compName }}Plugin: Plugin = {
  install(app: App) {
    app.component('ds-{{ compClassName }}', {{ compName }});
  },
};

export {
  {{ compName }},
};
