import type { AppRouteModule } from '/@/router/types';

const modules = import.meta.glob<Recordable>('./modules/**/*.ts', { eager: true });

const basicRoutes: AppRouteModule[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  basicRoutes.push(...modList);
});

export { basicRoutes };
