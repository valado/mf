import { http, HttpResponse } from 'msw';
import config from './data/config.json';

export const handlers = [
  http.get('/config', () => {
    return HttpResponse.json(config);
  }),
];
