const isProd = process.env.NODE_ENV === 'production';

export const baseUrl =
  (isProd ? 'http://139.59.16.64:3000/' : 'http://127.0.0.1:3000/') + 'api/';
