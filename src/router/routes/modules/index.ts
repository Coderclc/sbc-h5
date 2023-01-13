import type { AppRouteModule } from '/@/router/types';

const index: AppRouteModule = {
  path: '/',
  name: 'Index',
  redirect: '/dashboard',
  meta: {
    title: 'Index',
  },
};

export default index;
