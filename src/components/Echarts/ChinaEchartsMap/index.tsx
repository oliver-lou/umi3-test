import React, { PureComponent } from 'react';
import 'echarts/map/js/china';
import Echarts from '@/components/Echarts';
import styles from './index.less';
import { cityArr } from './cityArr';

export default class ChinaEchartsMap extends PureComponent {
    onChartClick = params => {
        // 定义全国省份的数组

        console.log(params);
        // 城市中文名
        const cityName = params.name;
        // 查找是否有对s应城市有则加载城市
        for (let i = 0, len = cityArr[0].length; i < len; i++) {
            if (cityName === cityArr[0][i]) {
                // 获取得城市拼音
                this.showCity(cityArr[0][i], cityArr[1][i]);
                return;
            }
        }
        // 没有找到对应城市的话，那么返回到全国地图
        // option.series[0].mapType = 'china';
        // if (params.name === '新疆') {

        // }
    };

    showCity = (zhName, pyName) => {
        console.log(zhName, pyName);
        // import('react').then(module => {
        //     console.log(module);
        // })
        // const _this = this;
        // console.log(this);
        import('echarts/map/js/province/' + pyName + '.js').then(() => {
            const { option } = this.state;
            // console.log(this.state.option);
            // 设定中文省份名才能显示相关省份，之后想要设置什么数据，直接设置到option这里就可以了
            // this.state.option.series[0].mapType = zhName;

            const newOption = { ...option };
            newOption.series[0].mapType = zhName;
            this.setState({ option: newOption });

            // 深拷贝，另建option以免丢失原始option数据
            // var cityOption = JSON.parse(JSON.stringify(this.option));
            // // 模拟虚拟数据
            // if (zhName === '广东') {
            //     cityOption.series[0].data = [{
            //         name: '梅州市',
            //         value: [100, 100]
            //     }, {
            //         name: '深圳市',
            //         value: [100, 200]
            //     }]
            // } else if (zhName === '北京') {
            //     cityOption.series[0].data = [{
            //         name: '海淀区',
            //         value: [500, 1000]
            //     }, {
            //         name: '朝阳区',
            //         value: [500, 4000]
            //     }]
            // }

            // this.setState({ option: cityOption });
        });
    };

    backMap = () => {
        const { option } = this.state;
        const newOption = { ...option };
        newOption.series[0].mapType = 'china';
        this.setState({ option: newOption });
    };

    render() {
        const { option } = this.props;

        return (
            <div className={styles.echartsMapContainer}>
                {/* <button onClick={this.backMap}>返回</button> */}
                <Echarts
                    option={option}
                    style={{ height: 335 }}
                    onChartClick={this.onChartClick}
                />
            </div>
        );
    }
}
