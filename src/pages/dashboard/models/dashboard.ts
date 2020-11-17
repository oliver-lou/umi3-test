// import * as indexService from '../services/index'
import { message } from 'antd';

const currentNamespace = 'dashboardModel';
// select选择器
const getCurrentNamespaceState = state => state[currentNamespace];

export default {
    namespace: currentNamespace,
    state: {
        data: null,
    },
    // subscriptions函数在componentDidMount函数之前执行，只会执行一次
    subscriptions: {
        // setupHistory({ dispatch, history }) {
        //     history.listen((location) => {
        //         if (location.query.page) {
        //             console.log(location);
        //             dispatch({
        //                 type: 'getOutreachList',
        //                 payload: {
        //                     ...location.query
        //                 },
        //             })
        //         }
        //     })
        // },
    },
    reducers: {
        changeList__(state, { payload }) {
            state.list = payload.content;
            state.pagination.page = payload.number + 1;
            state.pagination.size = payload.size;
            state.pagination.total = payload.totalElements;
        },
        changeData__(state, { payload }) {
            state.data = payload;
        },
    },
    effects: {
        *getData({ payload }, { call, put }) {
            yield put({ type: 'changeData__', payload });
        },
    },
};
