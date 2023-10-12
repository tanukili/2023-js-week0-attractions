import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // 注意：上線時所用基本公共路徑
  base: '/2023-js-week0-attractions/',
});

// json Server 配置
const jsonServer = require('json-server');

const apiServer = jsonServer.create();
const apiRouter = jsonServer.router('mock/db.json');
const middlewares = jsonServer.defaults();

apiServer.use(middlewares);
apiServer.use(apiRouter);
apiServer.listen(3000, () => {
  console.log('JSON Server is running');
});
