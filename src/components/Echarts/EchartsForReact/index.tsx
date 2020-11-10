import React, { PureComponent } from 'react';
import ReactEcharts from 'echarts-for-react';
import styles from './index.less';
// // import intl from 'react-intl-universal';

export default class Echarts extends PureComponent {
    render() {
        const { option, confirmLoading, style } = this.props;

        // Echart
        const onChartLegendselectchanged = (param, echart) => {};

        const onChartClick = (param, echart) => {};

        let onEvents = {
            click: onChartClick,
            legendselectchanged: onChartLegendselectchanged,
        };

        // 是否有表数据
        let isEmpty = false;

        // TODO: 多图表时如何处理
        // 数组得情况
        const series = option.series;
        // 判断是否是空数据
        if (
            series.length === 0 ||
            (series[0].hasOwnProperty('data') && series[0].data.length === 0)
        ) {
            isEmpty = true;
        }

        return (
            <>
                {// 空数据时，展示空白的提示
                isEmpty ? (
                    <p className={styles.echartEmpty} style={{ ...style }}>
                        {'暂无数据'}
                    </p>
                ) : (
                    // 有数据时画图
                    <ReactEcharts
                        option={option}
                        style={{ ...style }}
                        onEvents={onEvents}
                        theme={'echarts-custom-theme'}
                        // opts={{renderer: 'svg'}}
                    />
                )}
            </>
        );
    }
}
