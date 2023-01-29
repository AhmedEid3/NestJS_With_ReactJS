const isProd = process.env.NODE_ENV === 'production';

export const baseUrl =
  (isProd ? 'http://139.59.16.64' : 'http://127.0.0.1') + ':80/api/';
