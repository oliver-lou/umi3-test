import { ajax } from '@/utils/ajax';

// 获取首次加载的数据
export function getData() {
    return ajax(`https://api.github.com`);
}
