//A2
function echartA2() {
    var echart_A2 = echarts.init(document.getElementById('echart_A2'));
    echart_A2.setOption({
        title: [{
                x: "12%",
                bottom: 20,
                text: '管理处置',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 18,
                    color: "#4cd4db"
                }
            },
            {
                x: "42%",
                bottom: 20,
                text: '网格内处置',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 18,
                    color: "#0271ff"
                }
            },
            {
                x: "70%",
                bottom: 20,
                text: '综合执法处置',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: 18,
                    color: "#f2ba4d"
                }
            }
        ],
        tooltip: {
            show: true
        },
        series: [{
                type: 'gauge', //中间
                center: ['50%', '50%'], // 默认全局居中
                radius: '50%',
                splitNumber: 10, //刻度数量
                min: 0,
                max: 1000,
                startAngle: 200,
                endAngle: -20,
                clockwise: true,
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 2,
                        shadowBlur: 0,
                        color: [
                            [1, '#0271ff']
                        ]
                    }
                },
                axisTick: {
                    show: true,
                    lineStyle: {
                        color: '#0271ff',
                        width: 1
                    },
                    length: -15,
                    splitNumber: 10
                },
                splitLine: {
                    show: true,
                    length: -20,
                    lineStyle: {
                        color: '#0271ff',
                    }
                },
                axisLabel: {
                    distance: -20,
                    textStyle: {
                        color: "#0271ff",
                        fontSize: "16",
                        fontWeight: "bold"
                    }
                },
                pointer: { //仪表盘指针
                    show: 0
                },
                detail: {
                    show: false
                },
                data: [{
                    name: "",
                    value: 1000
                }]
            },
            {
                startAngle: 200, //中间白线
                endAngle: -20,
                type: 'gauge',
                center: ['50%', '50%'], // 默认全局居中
                radius: '45%',
                min: 0,
                max: 1000,
                splitNumber: 0,
                axisLine: { // 坐标轴线
                    lineStyle: {
                        color: [
                            [0.66, '#dddddd'],
                            [1, '#dddddd']
                        ], // 属性lineStyle控制线条样式
                        width: 4
                    }
                },
                axisLabel: { // 坐标轴小标记
                    textStyle: { // 属性lineStyle控制线条样式
                        fontWeight: 'bolder',
                        fontSize: 16,
                        color: 'rgba(30,144,255,0)',
                    }
                },
                splitLine: { // 分隔线
                    length: 10, // 属性length控制线长
                    lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                        width: 0,
                        color: '#444'
                    }
                },
                pointer: { // 分隔线 指针
                    color: '#666666',
                    width: 0,
                    length: 230
                },
                detail: {
                    show: false
                },

            },
            {
                name: '职能处置', //中间指针
                type: 'gauge',
                startAngle: 200,
                endAngle: -20,
                radius: '40%',
                center: ['50%', '50%'], // 默认全局居中
                min: 0,
                max: 1000,
                axisLine: {
                    show: false,
                    lineStyle: {
                        width: 10,
                        shadowBlur: 0,
                        color: [
                            [1, '#0271ff']
                        ]
                    }
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false,
                    length: 10

                },
                axisLabel: {
                    show: false
                },
                pointer: {
                    show: true
                },
                detail: {
                    show: true,
                    offsetCenter: [0, '40%'],
                    textStyle: {
                        fontSize: 15,
                        color: "#0271ff"
                    },
                    formatter: function(value) {
                        return value + '件';
                    }
                },
                itemStyle: {
                    normal: {
                        color: "#0271ff",
                    }
                },
                data: [{
                    value: 1088
                }]
            },
            {
                type: 'gauge', //左边网格内处置
                center: ['20%', '50%'], // 默认全局居中
                radius: '35%',
                splitNumber: 10, //刻度数量
                min: 0,
                max: 1000,
                endAngle: 45,
                clockwise: true,
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 2,
                        shadowBlur: 0,
                        color: [
                            [1, '#4cd4db']
                        ]
                    }
                },
                axisTick: {
                    show: true,
                    lineStyle: {
                        color: '#4cd4db',
                        width: 1
                    },
                    length: -15,
                    splitNumber: 10
                },
                splitLine: {
                    show: true,
                    length: -20,
                    lineStyle: {
                        color: '#4cd4db',
                    }
                },
                axisLabel: {
                    distance: -20,
                    textStyle: {
                        color: "#4cd4db",
                        fontSize: "15",
                        fontWeight: "bold"
                    }
                },
                pointer: { //仪表盘指针
                    show: 0
                },
                detail: {
                    show: false
                },
                data: [{
                    name: "",
                    value: 0
                }]
            },
            {
                type: 'gauge', //左边白色
                center: ['20%', '50%'], // 默认全局居中
                radius: '30%',
                min: 0,
                max: 0,
                endAngle: 45,
                splitNumber: 0,
                axisLine: { // 坐标轴线
                    lineStyle: {
                        color: [
                            [0.66, '#dddddd'],
                            [1, '#dddddd']
                        ], // 属性lineStyle控制线条样式
                        width: 4
                    }
                },

                axisLabel: { // 坐标轴小标记
                    textStyle: { // 属性lineStyle控制线条样式
                        fontWeight: 'bolder',
                        fontSize: 15,
                        color: 'rgba(30,144,255,0)',
                    }
                },
                splitLine: { // 分隔线
                    length: 10, // 属性length控制线长
                    lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                        width: 0,
                        color: '#444'
                    }
                },
                pointer: { // 分隔线 指针
                    color: '#666666',
                    width: 0,
                    length: 230
                },
                detail: {
                    show: false
                },

            },
            {
                name: '网格内处置', //左边
                type: 'gauge',
                endAngle: 45,
                radius: '25%',
                center: ['20%', '50%'], // 默认全局居中
                min: 0,
                max: 1000,
                axisLine: {
                    show: false,
                    lineStyle: {
                        width: 12,
                        shadowBlur: 0,
                        color: [
                            [1, '#4cd4db']
                        ]
                    }
                },
                axisTick: {
                    show: false,

                },
                splitLine: {
                    show: false,
                    length: 20,

                },
                axisLabel: {
                    show: false
                },
                pointer: {
                    show: true,
                },
                detail: {
                    show: true,
                    offsetCenter: ['20%', '60%'],
                    textStyle: {
                        fontSize: 15,
                        color: '#4cd4db'
                    },
                    formatter: function(value) {
                        return value + '件';
                    }
                },
                itemStyle: {
                    normal: {
                        color: "#4cd4db"
                    }
                },
                data: [{
                    value: 3802
                }]
            },
            {
                type: 'gauge', //右边
                center: ['80%', '50%'], // 默认全局居中
                radius: '35%',
                splitNumber: 10, //刻度数量
                min: 0,
                max: 1000,
                startAngle: 140,
                endAngle: -45,
                clockwise: true,
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 2,
                        shadowBlur: 0,
                        color: [
                            [1, '#f2ba4d']
                        ]
                    }
                },
                axisTick: {
                    show: true,
                    lineStyle: {
                        color: '#f2ba4d',
                        width: 1
                    },
                    length: -15,
                    splitNumber: 10
                },
                splitLine: {
                    show: true,
                    length: -20,
                    lineStyle: {
                        color: '#f2ba4d',
                    }
                },
                axisLabel: {
                    distance: -20,
                    textStyle: {
                        color: "#f2ba4d",
                        fontSize: "15",
                        fontWeight: "bold"
                    }
                },
                pointer: { //仪表盘指针
                    show: 0
                },
                detail: {
                    show: false
                },
                data: [{
                    name: "",
                    value: 200
                }]
            },
            {
                type: 'gauge', //右边白线
                center: ['80%', '50%'], // 默认全局居中
                radius: '30%',
                min: 0,
                max: 1000,
                startAngle: 140,
                endAngle: -45,
                splitNumber: 0,
                axisLine: { // 坐标轴线
                    lineStyle: {
                        color: [
                            [0.66, '#dddddd'],
                            [1, '#dddddd']
                        ], // 属性lineStyle控制线条样式
                        width: 4
                    }
                },

                axisLabel: { // 坐标轴小标记
                    textStyle: { // 属性lineStyle控制线条样式
                        fontWeight: 'bolder',
                        fontSize: 16,
                        color: 'rgba(30,144,255,0)',
                    }
                },
                splitLine: { // 分隔线
                    length: 10, // 属性length控制线长
                    lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                        width: 0,
                        color: '#f2ba4d'
                    }
                },
                pointer: { // 分隔线 指针
                    color: '#f2ba4d',
                    width: 0,
                    length: 230
                },
                detail: {
                    show: false
                },

            },
            {
                name: '综合执法处置',
                type: 'gauge',
                startAngle: 140,
                endAngle: -45,
                radius: '25%',
                center: ['80%', '50%'], // 默认全局居中
                min: 0,
                max: 1000,
                axisLine: {
                    show: false,
                    lineStyle: {
                        width: 12,
                        shadowBlur: 0,
                        color: [
                            [1, '#f2ba4d']
                        ]
                    }
                },
                axisTick: {
                    show: false,

                },
                splitLine: {
                    show: false,
                    length: 20,

                },
                axisLabel: {
                    show: false
                },
                pointer: {
                    show: true,
                },
                detail: {
                    show: true,
                    offsetCenter: ['-20%', '60%'],
                    textStyle: {
                        fontSize: 15,
                        color: "#f2ba4d"
                    },
                    formatter: function(value) {
                        return value + '件';
                    }
                },
                itemStyle: {
                    normal: {
                        color: "#f2ba4d"
                    }
                },
                data: [{
                    value: 528
                }]
            }
        ]
    });
}

//echart_F2
function echart_F2() {
    var echart_F2 = echarts.init(document.getElementById('echart_F2'));
    var category = ['送桥村', '南渔村', '浒路村', '甜港村', '周新庄村'];
    option_echart_F2 = {
        color: ['#3398DB'],
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            top: '6%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: category,
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: ['#848aa5'],
                    width: 1,
                    type: 'solid'
                }
            },
            axisLabel: {
                color: '#fff',
                fontSize: 15,
                // rotate: 45
            }
        }],
        yAxis: [{
            type: 'value',
            axisLine: {
                show: true,
                lineStyle: {
                    color: ['#848aa5'],
                    width: 1,
                    type: 'solid'
                }
            },
            axisLabel: {
                color: '#fff',
                fontSize: 16
            }
        }],
        series: [{
            name: '直接访问',
            type: 'bar',
            barWidth: '20',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#01d594'
                    }, {
                        offset: 0.8,
                        color: '#06dbeb'
                    }], false)
                }
            },
            data: [509, 345, 318, 298, 317]
        }]
    };
    echart_F2.setOption(option_echart_F2);
}

//环形图A1
function echartA1() {
    var myChart = echarts.init(document.getElementById('echart_A1'));
    var scale = 1;
    var echartData = [{
        value: 476,
        name: '按时办结数'
    }, {
        value: 6,
        name: '超期处置数'
    }, {
        value: 20,
        name: '超期未处置数'
    }]
    var rich = {
        yellow: {
            color: "#ffc72b",
            fontSize: 30 * scale,
            padding: [5, 4],
            align: 'center',
        },
        total: {
            color: "#ffc72b",
            fontSize: 50 * scale,
            align: 'center'
        },
        white: {
            color: "#fff",
            align: 'center',
            fontSize: 16 * scale,
            padding: [15, 0]
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

    option = {

        title: {
            text: '',

        },

        subtext: '总数',
        legend: {
            orient: 'vertical',
            x: 'right',
            top: 'center',
            align: 'left',
            textStyle: {
                color: '#fff',
                fontSize: 16,
                align: 'center'
            },
            formatter: function(name) {

                var val = "";
                for (var i = 0; i < echartData.length; i++) {
                    if (echartData[i].name == name) {
                        val = echartData[i].value;
                    }
                }
                return name + "  " + val + ' 个';
            },
            data: ['接单数', '处置数', '按时办结数', '超期处置数', '超期未处置数']
        },
        series: [{
            type: 'pie',
            center: ['35%', '45%'],
            radius: ['15%', '30%'],
            hoverAnimation: false,
            color: ['#0e7ce2', '#ff8352', '#e271de', '#f8456b', '#00ffff'],
            label: {
                normal: {
                    formatter: function(params, ticket, callback) {
                        var total = 0; //考生总数量
                        var percent = 0; //考生占比
                        echartData.forEach(function(value, index, array) {
                            total += value.value;
                        });
                        percent = ((params.value / total) * 100).toFixed(1);
                        return '{blue|' + percent + '%}';
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

//echartC1	
function echartC1() {
    var myChart = echarts.init(document.getElementById('echart_C1'));
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        color: ['#9675CE', '#4DD0E4', '#81C683', '#DBE876', '#60B1F2', 'red', 'green'],
        legend: {
            data: ['社会治安', '城市管理', '环境保护', '专项活动', '其他'],
            y: 'top',
            textStyle: {
                color: '#fff'
            }

        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '1%',
            top: '16%',
            containLabel: true
        },
        yAxis: {
            type: 'value',
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#858aa4',

                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 16,
                }
            }
        },
        xAxis: {
            type: 'category',
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff',

                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 16,
                }
            },
            data: ['01月', '02月', '03月', '04月', '05月']
        },
        series: [{
                name: '社会治安',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,

                    }
                },
                data: [7, 0, 0, 0, 1]
            },
            {
                name: '城市管理',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,

                    }
                },
                data: [43, 0, 1, 1, 0]
            },
            {
                name: '环境保护',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,

                    }
                },
                data: [4, 0, 4, 0, 0]
            },
            {
                name: '专项活动',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,

                    }
                },
                data: [0, 0, 0, 5783, 0]
            },
            {
                name: '其他',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,

                    }
                },
                data: [6956, 4901, 5389, 5784, 5416]
            }
        ]
    };
    myChart.setOption(option);
}

//echart_G2		
function echartG2() {
    var myChart = echarts.init(document.getElementById('echart_G2'));
    //初始化数据
    var category = ['陈维维', '缪鹏飞', '缪海祥', '张维池'];
    var barData = [6, 7, 8, 8];

    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: "18%",
            right: "8%",
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
                fontSize: 16
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
                        color: '#fff',
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
                                color: '#0e1c53'
                            },
                            {
                                offset: 0.5,
                                color: '#555cb1'
                            },
                            {
                                offset: 1,
                                color: '#9074cd'
                            }

                        ]
                    )
                }
            }
        }]
    };
    myChart.setOption(option);

}