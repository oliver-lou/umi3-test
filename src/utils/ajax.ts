import { default as fetch } from 'dva/fetch';
export function ajax(url: string) {
    return fetch(url);
}
