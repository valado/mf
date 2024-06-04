export const APP_PREFIX = '/app';

export const routes = {
  home: {
    path: '/home',
  },
  config: {
    path: '/config',
  },
  presentation: {
    path: '/presentation',
  },
  app: {
    path: `${APP_PREFIX}/:appKey/*`,
  },
};

export const getAppRoute = (key: string) => `${APP_PREFIX}/${key}`;
