import { defineConfig } from 'umi';
const openBrowser = require('open-browser-webpack-plugin');

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  chainWebpack(config) {
    config
      .plugin('open-browser-webpack-plugin')
      .use(openBrowser, [{ url: 'http://localhost:10000' }]); // 此处url与项目启动的url保持一致
  },
});
