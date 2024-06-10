// src/setupProxy.js
import { createProxyMiddleware } from 'http-proxy-middleware';

export default function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://lincolneyewear.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // Rewrite path to match the API endpoint
      },
    })
  );
}
