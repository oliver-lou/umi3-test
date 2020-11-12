import * as globalService from '../services/global';
import { message } from 'antd';
// import { defaultPagination } from '@/common/constants'

const currentNamespace = 'globalModel';
// select选择器
const getCurrentNamespaceState = (state: object) => state[currentNamespace];

export default {
    namespace: currentNamespace,
    state: {
        data: null,
    },
    // subscriptions函数在componentDidMount函数之前执行，只会执行一次
    subscriptions: {
        // 全局的路由监听函数
        listenHistory({ dispatch, history }) {
            console.log(history);
            history.listen(location => {
                const menu = location.pathname.split('/')[1];
                console.log(menu);
                if (menu) {
                    dispatch({ type: `${menu}Model/getData`, payload: menu });
                }
            });
        },
    },
    reducers: {
        changeList__(state, { payload }) {
            state.list = payload.content;
            state.pagination.page = payload.number + 1;
            state.pagination.size = payload.size;
            state.pagination.total = payload.totalElements;
        },
    },
    effects: {
        *getData({ payload }, { call, put }) {
            const response = yield call(globalService.getData);
            if (!response.code) {
                yield put({ type: 'changeList__', payload: response });
                return response;
            } else {
                message.error(response.msg);
            }
        },
    },
};
