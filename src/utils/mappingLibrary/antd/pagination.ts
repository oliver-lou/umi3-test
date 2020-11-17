/**
 * @Description: 不基于路由的分页
 * @Author: Oliver
 * @Modified by: 娄通略
 * @Date: 2020-08-11 18:19:37
 * @Param: 无
 */
export function customPagination(
    pageSize: number,
    pageNum: number,
    total: number,
    location,
    handle,
) {
    return {
        showSizeChanger: false, // 是否可以改变 pageSize
        showQuickJumper: true, // 是否可以快速跳转至某页
        hideOnSinglePage: true, // 只有一页时是否隐藏分页器
        pageSize: pageSize,
        // pageSize: 1,
        total: total,
        current: pageNum,
        showTotal: (totalCount: string) => `共${totalCount}条`,
        // onChange: pageNum => {
        //     scrollTo('detailCard');
        //     router.push({
        //         pathname: location.pathname,
        //         hash: location.hash,
        //         query: {
        //             ...location.query,
        //             pageNum: pageNum || 1,
        //             t: new Date().getTime()
        //         }
        //     });
        //     if (handle) {
        //         handle()
        //     }
        // },
        // onShowSizeChange: (current, pageSize) => {
        //     scrollTo('detailCard');

        //     router.push({
        //         pathname: location.pathname,
        //         hash: location.hash,
        //         query: {
        //             ...location.query,
        //             pageNum: 1,
        //             pageSize
        //         }
        //     });
        // }
    };
}
