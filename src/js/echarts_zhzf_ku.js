//环形图A1
function echartA1() {
    var myChart = echarts.init(document.getElementById('echart_A1'));
    var scale = 1;
    var echartData = [{
        value: 33,
        name: '执法辅助'
    }, {
        value: 274,
        name: '执法'
    }]
    var rich = {
        yellow: {
            color: "#ffc72b",
            fontSize: 18,
            padding: [5, 4],
            align: 'center',
        },
        total: {
            color: "#ffc72b",
            fontSize: 18,
            align: 'center'
        },
        white: {
            color: "#fff",
            align: 'center',
            fontSize: 14,
            padding: [0, 0]
        },
        blue: {
            color: '#49dff0',
            fontSize: 16,
            align: 'center'
        },
        hr: {
            borderColor: '#0b5263',
            width: '110%',
            borderWidth: 1,
            height: 0,
        }
    }

    var option = {

        title: {
            text: '总人数',
            subtext: '',
            left: 'center',
            top: '49%',
            padding: [10, 0],
            textStyle: {
                color: '#fff',
                fontSize: 14,
                align: 'center'
            }
        },
        subtext: '总数',
        legend: {
            selectedMode: true,
            formatter: function(name) {
                var total = 0; //各科正确率总和
                var averagePercent; //综合正确率
                echartData.forEach(function(value, index, array) {
                    total += value.value;
                });
                return '{total|' + total + '}' + '人';
            },
            data: [echartData[0].name],
            right: 'center',
            top: 'center',
            icon: 'none',
            align: 'center',
            textStyle: {
                color: "#fff",
                fontSize: 16,
                rich: rich
            },
        },
        series: [{
            type: 'pie',
            radius: ['30%', '42%'],
            hoverAnimation: false,
            color: ['#FBFC01', '#0135F7', '#2CFE4F', '#FF6B00', '#12C7FF', '#FF3097'],
            label: {
                normal: {
                    formatter: function(params, ticket, callback) {
                        var total = 0; //考生总数量
                        var percent = 0; //考生占比
                        echartData.forEach(function(value, index, array) {
                            total += value.value;
                        });
                        percent = ((params.value / total) * 100).toFixed(1);
                        return '{white|' + params.name + '}\n{white|' + percent + '%}';
                    },
                    rich: rich
                },
            },
            labelLine: {
                normal: {

                }
            },
            data: echartData
        }]
    };
    myChart.setOption(option);
}

//echartA12
window.echartA12 = function() {
    var myChart = echarts.init(document.getElementById('echart_A12'));
    var scale = 1;
    var echartData = [{
        value: 55,
        name: '公共场所'
    }, {
        value: 14,
        name: '化工生产'
    }, {
        value: 32,
        name: '医疗机构'
    }, {
        value: 8,
        name: '学校卫生'
    }, {
        value: 10,
        name: '建筑'
    }, {
        value: 48,
        name: '其他'
    }, ]
    var rich = {
        yellow: {
            color: "#ffc72b",
            fontSize: 18,
            padding: [5, 4],
            align: 'center',
        },
        total: {
            color: "#ffc72b",
            fontSize: 18,
            align: 'center'
        },
        white: {
            color: "#fff",
            align: 'center',
            fontSize: 14 * scale,
            padding: [10, 0]
        },
        blue: {
            color: '#49dff0',
            fontSize: 18 * scale,
            align: 'center'
        },
        hr: {
            borderColor: '#0b5263',
            width: '110%',
            borderWidth: 1,
            height: 0,
        }
    }

    var option = {

        title: {
            text: '企业数',
            subtext: '',
            left: 'center',
            top: '49%',
            padding: [10, 0],
            textStyle: {
                color: '#fff',
                fontSize: 14,
                align: 'center'
            }
        },
        subtext: '总数',
        legend: {
            selectedMode: true,
            formatter: function(name) {
                var total = 0; //各科正确率总和
                var averagePercent; //综合正确率
                echartData.forEach(function(value, index, array) {
                    total += value.value;
                });
                return '{total|' + total + '}' + '家';
            },
            data: [echartData[0].name],
            right: 'center',
            top: 'center',
            icon: 'none',
            align: 'center',
            textStyle: {
                color: "#fff",
                fontSize: 18,
                rich: rich
            },
        },
        series: [{
            type: 'pie',
            radius: ['30%', '40%'],
            hoverAnimation: false,
            color: ['#FBFC01', '#0135F7', '#2CFE4F', '#FF6B00', '#12C7FF', '#FF3097', "#756eeb"],
            label: {
                normal: {
                    formatter: function(params, ticket, callback) {
                        var total = 0; //考生总数量
                        var percent = 0; //考生占比
                        echartData.forEach(function(value, index, array) {
                            total += value.value;
                        });
                        percent = ((params.value / total) * 100).toFixed(1);
                        return '{white|' + params.name + '}/{white|' + percent + '%}';
                    },
                    rich: rich
                },
            },
            labelLine: {
                normal: {

                }
            },
            data: echartData
        }]
    };
    myChart.setOption(option);
}

//A2
function echartA2() {
    var myChart = echarts.init(document.getElementById('echart_A2'));
    var category = ['合格', '未按土地出让合同约定用地', '其他'];
    var barData = [122, 9, 36];

    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: "25%",
            right: "1%",
            bottom: "5%",
            top: 10

        },
        xAxis: {
            type: 'value',
            show: false,
            axisLine: {
                lineStyle: {
                    color: '#fff',

                }
            },
            axisLabel: {
                color: '#fff',
                fontSize: 16,

            },
            axisTick: {
                show: false
            }
        },
        yAxis: {
            type: 'category',
            data: category,
            splitLine: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff',

                }
            },
            axisLabel: {
                color: '#fff',
                fontSize: 16,

            },
            axisTick: {
                show: false
            },
            offset: 10,
            nameTextStyle: {
                fontSize: 16
            }
        },
        series: [{
            name: '数量',
            type: 'bar',
            data: barData,
            barWidth: 16,
            barGap: 10,
            smooth: true,
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    offset: [5, -2],
                    textStyle: {
                        color: '#7badf6',
                        fontSize: 16
                    }
                }
            },
            itemStyle: {
                emphasis: {
                    barBorderRadius: 7
                },
                normal: {
                    barBorderRadius: 7,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0, [{
                                offset: 0,
                                color: '#0c1a51'
                            },
                            {
                                offset: 0.5,
                                color: '#54b0d8'
                            },
                            {
                                offset: 1,
                                color: '#84ffff'
                            }

                        ]
                    )
                }
            }
        }]
    };
    myChart.setOption(option);
}

//echartB1
window.echartB1 = function() {
    var myChart = echarts.init(document.getElementById('echart_B1'));
    var option = {
        color: ['#0c7ce2'],
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            top: '8%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['劳务派遣及劳务外包', '建设项目批后监管', '岸坡占用', '其他'],
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {
                color: '#fff',
                fontSize: 12,
                rotate: 35,

            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            }
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
                color: '#fff',
                fontSize: 16,

            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            }
        }],
        series: [{
            name: '直接访问',
            type: 'bar',
            barWidth: '30%',
            data: [14, 35, 2, 115]
        }]
    };
    myChart.setOption(option);
}

//echartE1
window.echartE1 = function() {
    var myChart = echarts.init(document.getElementById('echart_e1'));
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: "{b} : {c}",
            textStyle: {
                fontSize: 16
            }
        },
        grid: {
            top: '1%',
            left: '0',
            right: '3%',
            bottom: '8%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                color: '#fff',
                fontSize: 16
            }
        },
        yAxis: {
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                color: '#fff',
                fontSize: 16
            },
            data: ['送桥化工园区', '周新庄村', '浒路村', '杨楝园', '甜港村', '同文村', '王鸭村', '古坳村', '香橼树村', '闸西村', '南渔村', '池塘头村', '油坊口村', '周新庄村', '食品工业园区', '送桥村', '新坝村']
        },
        series: [{
            name: '送桥',
            type: 'bar',
            data: [103, 11, 4, 3, 8, 3, 4, 6, 3, 7, 8, 6, 2, 10, 12, 3, 7],
            itemStyle: {
                normal: {
                    color: '#0c91b4'
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        color: '#fff',
                        fontSize: 16
                    },
                    formatter: function(e) {
                        var str = '';
                        if (e.value != 0) {
                            str = e.value + ' 家';
                        }
                        return str;
                    }
                }
            }
        }]
    };
    myChart.setOption(option);
}

//echartG1
window.echartG1 = function() {
    var myChart = echarts.init(document.getElementById('echart_G1'));
    var option = {

        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        },
        legend: {
            icon: 'rect',
            itemWidth: 14,
            itemHeight: 5,
            itemGap: 13,
            // data: ['南宁-曼芭'],
            data: ['检查', '处罚'],
            right: '4%',
            textStyle: {
                fontSize: 16,
                color: '#F1F1F3'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            top: '8%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                color: '#fff',
                fontSize: 16
            },
            axisLine: {
                lineStyle: {
                    color: '#ffffff'
                }
            },
            data: ['1月', '2月', '3月', '4月', '5月']
        }],
        yAxis: [{
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#ffffff'
                }
            },
            axisLabel: {
                color: '#fff',
                fontSize: 16
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }],
        series: [{
                name: '处罚',
                type: 'line',
                smooth: true,
                lineStyle: {
                    normal: {
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#2972a5'
                        }, {
                            offset: 0.8,
                            color: '#081456'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'red'
                    }
                },
                data: [2, 1, 3, 4, 16]
            },
            {
                name: '检查',
                type: 'line',
                smooth: true,
                lineStyle: {
                    normal: {
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#2972a5'
                        }, {
                            offset: 0.8,
                            color: '#081456'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#00f5fe'
                    }
                },
                data: [45, 3, 27, 21, 60]
            }
        ]
    };
    myChart.setOption(option);

}

//echartH2
window.echartH2 = function() {
        var myChart = echarts.init(document.getElementById('echart_H2'));
        var scale = 1;
        var echartData = [{
            value: 14,
            name: '责令限期整改'
        }, {
            value: 14,
            name: '排查待上级要求'
        }, {
            value: 9,
            name: '下发督促开工通知书'
        }, {
            value: 12,
            name: '补办手续'
        }, {
            value: 1,
            name: '制止并教育'
        }, {
            value: 4,
            name: '其他'
        }]
        var rich = {
            yellow: {
                color: "#ffc72b",
                fontSize: 18,
                padding: [5, 4],
                align: 'center',
            },
            total: {
                color: "#ffc72b",
                fontSize: 20,
                align: 'center'
            },
            white: {
                color: "#fff",
                align: 'center',
                fontSize: 16 * scale,
                padding: [1, 0]
            },
            blue: {
                color: '#49dff0',
                fontSize: 18 * scale,
                align: 'center'
            },
            hr: {
                borderColor: '#0b5263',
                width: '110%',
                borderWidth: 1,
                height: 0,
            }
        }

        var option = {

            title: {
                text: '案件总数',
                subtext: '',
                left: 'center',
                top: '50%',
                padding: [14, 0],
                textStyle: {
                    color: '#fff',
                    fontSize: 14,
                    align: 'center'
                }
            },
            subtext: '总数',
            legend: {
                selectedMode: true,
                formatter: function(name) {
                    var total = 0; //各科正确率总和
                    var averagePercent; //综合正确率
                    echartData.forEach(function(value, index, array) {
                        total += value.value;
                    });
                    return '{total|' + total + '}' + '件';
                },
                data: [echartData[0].name],
                right: 'center',
                top: 'middle',
                icon: 'none',
                align: 'center',
                textStyle: {
                    color: "#fff",
                    fontSize: 18,
                    rich: rich
                },
            },
            series: [{
                type: 'pie',
                radius: ['35%', '50%'],
                hoverAnimation: false,
                color: ['#FBFC01', '#0135F7', '#2CFE4F', '#FF6B00', '#12C7FF', '#FF3097'],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            var total = 0; //考生总数量
                            var percent = 0; //考生占比
                            echartData.forEach(function(value, index, array) {
                                total += value.value;
                            });
                            percent = ((params.value / total) * 100).toFixed(1);
                            return '{white|' + params.name + '}\n{white|' + percent + '%}';
                        },
                        rich: rich
                    },
                },
                labelLine: {
                    normal: {

                    }
                },
                data: echartData
            }]
        };
        myChart.setOption(option);
    }
    //echartG2
function echartG2() {
    var myChart = echarts.init(document.getElementById('echart_G2'));
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        color: ['#0c7ce2', '#e172b1', '#00ccff', '#ffcc00'],
        legend: {
            orient: 'vertical',
            top: '10',
            x: '30',
            textStyle: {
                color: '#fff'
            },
            data: ['个人', '个体户', '国有企业', '私有企业'],
            formatter: function(name) {
                var oa = option.series[0].data;
                var num = oa[0].value + oa[1].value;
                for (var i = 0; i < option.series[0].data.length; i++) {
                    if (name == oa[i].name) {
                        return name + '     ' + oa[i].value + '     ' + (oa[i].value / num * 100).toFixed(2) + '%';
                    }
                }
            }
        },
        series: [{
            name: '签到比例分析',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
                { value: 14, name: '个人' },
                { value: 3, name: '个体户' },
                { value: 5, name: '个体户' },
                { value: 4, name: '个体户' }

            ],
            label: {
                color: "#ffffff"
            },

            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        color: "#ffffff",
                        //	                            position:'inside',
                        formatter: '{b} : {c}\n({d}%)'
                    }
                },
                labelLine: { show: true }
            }
        }]
    };
    myChart.setOption(option);

}

//echartH1
window.echartH1 = function() {
    var myChart = echarts.init(document.getElementById('echart_H1'));
    let data = {
        "chart": [{
                month: "未按土地出让合同约定用地",
                value: 9,
                ratio: 14.89
            },

            {
                month: "占道经营",
                value: 5,
                ratio: 79.49
            },

            {
                month: "违建",
                value: 3,
                ratio: 75.8
            },

            {
                month: "商标",
                value: 2,
                ratio: 44.5
            },
            {
                month: "其他",
                value: 7,
                ratio: 44.5
            }

        ]
    }

    //  x轴数据          象形柱图数据  折线图数据
    let xAxisMonth = [],
        barData = [],
        lineData = [];
    for (let i = 0; i < data.chart.length; i++) {
        xAxisMonth.push(data.chart[i].month);
        barData.push({
            "name": xAxisMonth[i],
            "value": data.chart[i].value
        });
        lineData.push({
            "name": xAxisMonth[i],
            "value": data.chart[i].ratio
        });
    }

    var option = {

        title: '',
        grid: {
            top: '2%',
            left: '10%',
            right: '0',
            bottom: '6%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none'
            },
            formatter: function(params) {
                return params[0].data.name + "<br/>" + '数量: ' + params[0].data.value;
            }
        },
        xAxis: [{
                type: 'category',
                show: false,
                data: ['安全消防', '建设管理', '劳动保障', '职业卫生', '生态保护', '市场监管', '其他'],
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#fff'
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            {
                type: 'category',
                show: true,
                position: "bottom",
                data: xAxisMonth,
                // boundaryGap: true,
                // offset: 40,
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#fff'
                    }
                },
                axisLabel: {
                    rotate: 45,
                    textStyle: {
                        color: '#fff'
                    }
                }
            }

        ],
        yAxis: [{
            show: true,

            splitLine: {
                show: false,
                lineStyle: {
                    color: "rgba(255,255,255,0.2)"
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#fff'
                }
            },
            axisLabel: {
                show: true,
                color: '#fff'
            }
        }, {
            show: false,
            type: "value",
            name: "合格率(%)",
            nameTextStyle: {
                color: '#ccc'
            },
            axisLabel: {
                color: '#ccc'
            },
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        }],
        color: ['#e54035'],
        series: [{
            name: '参训人次',
            type: 'pictorialBar',
            xAxisIndex: 1,

            // barCategoryGap: '-5%',
            symbol: 'path://d="M150 50 L130 130 L170 130  Z"',
            itemStyle: {
                normal: {
                    color: 'rgba(13,177,205,0.8)'
                },
                emphasis: {
                    opacity: 1
                }
            },
            data: barData,
        }]
    }
    myChart.setOption(option);
}

//echartF1
window.echartF1 = function() {
    var myChart = echarts.init(document.getElementById('echart_F1'));
    var option = {
        color: ['#0c7ce2'],
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            top: '3%',
            left: '3%',
            right: '4%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['12345', '定期检查', '监督检查', '群众举报', '巡查发现'],
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            }
        }],
        yAxis: [{
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            }
        }],
        series: [{
            name: '直接访问',
            type: 'bar',
            barWidth: '30%',
            data: [6, 9, 4, 2, 5],
            itemStyle: {

                normal: {
                    barBorderRadius: 7,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [
                            { offset: 0, color: '#7c01ea' },
                            { offset: 0.5, color: '#8803e5' },
                            { offset: 1, color: '#9504de' }

                        ]
                    )
                }
            }
        }]
    };
    myChart.setOption(option);
}

//echartI2
window.echartI2 = function() {
    var myChart = echarts.init(document.getElementById('echart_I2'));
    //初始化数据
    var category = ['江苏优嘉植物保护有限公司', '江苏小送桥温泉开发有限公司', '江苏洋通开发投资有限公司', '中交小送桥如东开发建设有限公司', '如东鼎阳建设投资有限公司', '如东深水环境科技有限公司', '如东送桥环保热电有限公司'];
    var barData = [3, 2, 2, 3, 3, 2, 2];

    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: "52%",
            right: "3%",
            top: "2%"

        },
        xAxis: {
            type: 'value',
            show: false,
            axisLine: {
                lineStyle: {
                    color: '#fff',

                }
            },
            axisTick: {
                show: false
            }
        },
        yAxis: {
            type: 'category',
            data: category,
            splitLine: { show: false },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff',

                }
            },
            axisTick: {
                show: false
            },
            offset: 10,
            nameTextStyle: {
                fontSize: 15
            }
        },
        series: [{
            name: '数量',
            type: 'bar',
            data: barData,
            barWidth: 14,
            barGap: 10,
            smooth: true,
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    offset: [5, -2],
                    textStyle: {
                        color: '#fff',
                        fontSize: 13
                    }
                }
            },
            itemStyle: {
                emphasis: {
                    barBorderRadius: 7
                },
                normal: {
                    barBorderRadius: 7,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0, [
                            { offset: 0, color: '#0e1c53' },
                            { offset: 0.5, color: '#555cb1' },
                            { offset: 1, color: '#9074cd' }

                        ]
                    )
                }
            }
        }]
    };
    myChart.setOption(option);
}