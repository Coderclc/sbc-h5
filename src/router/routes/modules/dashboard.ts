import type { AppRouteModule } from '/@/router/types';

const dashboard: AppRouteModule = {
  path: '/dashboard',
  name: 'Dashboard',
  component: () => import('/@/view/dashboard/index.vue'),
  meta: {
    title: '首页',
  },
};

export default dashboard;
