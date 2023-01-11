import 'virtual:windi-base.css';
import 'virtual:windi-components.css';
import '/@/design/index.less';
import 'virtual:windi-utilities.css';

// Register icon sprite
import 'virtual:svg-icons-register';
import App from './App.vue';
import { createApp } from 'vue';
import { initAppConfigStore } from '/@/logics/initAppConfig';
import { setupErrorHandle } from '/@/logics/error-handle';
import { router, setupRouter } from '/@/router';
import { setupRouterGuard } from '/@/router/guard';
import { setupGlobDirectives } from '/@/directives';
import { registerGlobComp } from '/@/components/registerGlobComp';

async function bootstrap() {
  const app = createApp(App);

  initAppConfigStore();

  registerGlobComp(app);

  setupRouter(app);

  setupRouterGuard(router);

  setupGlobDirectives(app);

  setupErrorHandle(app);

  app.mount('#app');
}

bootstrap();
