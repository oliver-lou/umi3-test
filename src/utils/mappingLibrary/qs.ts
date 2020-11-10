/**
 * @Description: 用于映射第三方库，方便treeShaking
 * @Author: Oliver
 * @Modified by: 娄通略
 * @Date: 2020-11-08 16:44:35
 * @Param: 无
 */
import { stringify } from 'qs';
import { isObject, isEmptyObject } from '../pureFuntion';
/**
 * @Description: 格式化请求参数
 * @Author: Oliver
 * @Modified by: 娄通略
 * @Date: 2020-09-10 16:38:46
 * @Param: 无
 */
export const formatParams = (params: object) => {
    if (!isObject(params) || isEmptyObject(params)) {
        return '';
    } else {
        return `?${stringify(params)}`;
    }
};
