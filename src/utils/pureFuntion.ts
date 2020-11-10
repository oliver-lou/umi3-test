/**
 * @Description: 纯函数的工具函数，纯函数没有副作用，且返回结果只依赖参数
 * @Author: Oliver
 * @Modified by: 娄通略
 * @Date: 2020-11-08 16:44:08
 * @Param: 无
 */
// 判断是不是一个空对象
export const isEmptyObject = (obj: object) => {
    return Object.keys(obj).length === 0;
};

export function isObject(obj: object) {
    return obj !== null && typeof obj === 'object';
}

/**
 * @Description: 格式化金额，每三位打一个逗号
 * @Author: Oliver
 * @Modified by: 娄通略
 * @Date: 2020-08-31 15:32:53
 * @Param: 无
 */
export const formatAccount = (str: string) => {
    let formatAccountReg = /(?=(\B)(\d{3})+$)/g;
    return str.replace(formatAccountReg, ',');
};
