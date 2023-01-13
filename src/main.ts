import 'virtual:windi-base.css';
import 'virtual:windi-components.css';
import '/@/design/index.less';
import 'virtual:windi-utilities.css';

import 'virtual:svg-icons-register';
import App from './App.vue';
import { createApp } from 'vue';
import { setupRouter } from '/@/router';

async function bootstrap() {
  const app = createApp(App);

  setupRouter(app);

  app.mount('#app');
}

bootstrap();
