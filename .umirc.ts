import { defineConfig } from 'umi';
import openBrowser from 'open-browser-webpack-plugin';

const host = '192.168.1.246';
const port = '10000';
export default defineConfig({
    dva: {
        immer: true,
    },
    nodeModulesTransform: {
        type: 'none',
    },
    // routes: [{ path: '/', component: '@/pages/index' }],
    chainWebpack(config) {
        config.plugin('open-browser-webpack-plugin').use(openBrowser, [
            {
                url: `http://${host}:${port}`,
            },
        ]); // 此处url与项目启动的url保持一致
    },
});
