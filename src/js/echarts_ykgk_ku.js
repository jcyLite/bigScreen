//收取材料TOP10  xzsp_sqcl
window.xzsp_sqcl = function() {
    var xzsp_sqcl = echarts.init(document.getElementById('xzsp_sqcl'));
    //app.title = '坐标轴刻度与标签对齐';
    var option_sqcl = {
        color: ['#3398DB'],
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        // 		title: {
        // 			text: '单位：万',
        // 			textStyle: {
        // 				fontWeight: 'normal',
        // 				fontSize: 14,
        // 				color: '#fff'
        // 			},
        // 			left: '6%',
        // 			top:'0'
        // 		},
        grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            top: '15%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['个人独资企业', '有限公司', '股份制公司', '合伙企业', '非公司制企业', '合作社', '个体户'],
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                lineStyle: {
                    color: '#FFFFFF'
                }
            },
            axisLabel: {
                color: '#fff',
                fontSize: 14,
                rotate: 45
            }
        }],
        yAxis: [{
            name: '数量：家',
            nameTextStyle: {
                color: "#6CABD7",
                fontSize: 14
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#FFFFFF'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }],
        series: [{
                name: '数量',
                type: 'bar',
                barWidth: '20%',
                data: [663, 798, 500, 680, 720, 820, 620],
                itemStyle: { //图形样式
                    normal: {
                        barBorderRadius: [50, 50, 0, 0],
                        label: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: 'white'
                            }
                        },
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#4043E3'
                        }, {
                            offset: 0.8,
                            color: '#7052f4'
                        }], false)
                    },
                },
            },

        ],
        label: {
            normal: {
                show: true,
                position: 'top',
                formatter: '{c}'
            }
        },
        itemStyle: {
            normal: {

                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(17, 168,171, 1)'
                }, {
                    offset: 1,
                    color: 'rgba(17, 168,171, 0.1)'
                }]),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        }
    };
    xzsp_sqcl.setOption(option_sqcl);
}

//本周与上周工作时段取号趋势
window.xzsp_xnjc2 = function() {
    var xzsp_xnjc2 = echarts.init(document.getElementById('xzsp_xnjc2'));

    var option_xnjc2 = {
        backgroundColor: 'rgba(0,0,0,0)',
        title: {
            text: '单位：千万',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 14,
                color: '#6CABD7'
            },
            left: '6%'
        },
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
            itemWidth: 15,
            itemHeight: 10,
            itemGap: 13,
            data: ['一般公共财政预算收入', '应税销售', '税收'],
            right: '4%',
            textStyle: {
                fontSize: 14,
                color: '#F1F1F3'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '5%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#FFFFFF'
                }
            },
            data: ['2014年', '2015年', '2016年', '2017年', '2018年']
        }, {
            axisPointer: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            axisTick: {
                show: false
            },

        }],
        yAxis: [{
            type: 'value',
            name: '',
            nameTextStyle: {
                color: "#6CABD7",
                fontSize: 16
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#FFFFFF'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 16
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }],
        series: [{
                name: '一般公共财政预算收入',
                type: 'line',
                smooth: false,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 1
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(137, 189, 27, 0.8)'
                        }, {
                            offset: 1,
                            color: 'rgba(137, 189, 27, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 20
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgb(137,189,27)',
                        borderColor: 'rgba(137,189,2,0.27)',
                        borderWidth: 12

                    }
                },
                data: [120, 182, 151, 104, 150, 120, 110]
            },
            {
                name: '应税销售',
                type: 'line',
                smooth: false,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 1
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(3,97,184, 0.8)'
                        }, {
                            offset: 1,
                            color: 'rgba(3,97,184, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 20
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgb(3,97,184)',
                        borderColor: 'rgba(3,97,184,0.27)',
                        borderWidth: 12

                    }
                },
                data: [170, 132, 101, 54, 90, 110, 190]
            }, {
                name: '税收',
                type: 'line',
                smooth: false,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 1
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(221,114,178, 0.8)'
                        }, {
                            offset: 1,
                            color: 'rgba(221,114,178, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgb(221,114,178)',
                        borderColor: 'rgba(221,114,178,0.2)',
                        borderWidth: 12

                    }
                },
                data: [120, 110, 125, 145, 122, 165, 122]
            }
        ]
    };
    xzsp_xnjc2.setOption(option_xnjc2);
}

//美丽乡村轮播
window.slider4 = function() {
    var i = 1;
    setInterval(function() {
        $('.box5 .sliderBox4 .scroll_img4').eq(i).show().siblings().hide();
        var length = $('.box5 .sliderBox4 .scroll_img4').length;
        if (i == length - 1) {
            i = 0;
        } else {
            i++;
        }
    }, 5000);
}

window.slider3 = function() {
        var i = 1;
        setInterval(function() {
            $('.box3 .sliderBox4 .scroll_img4').eq(i).show().siblings().hide();
            var length = $('.box3 .sliderBox4 .scroll_img4').length;
            if (i == length - 1) {
                i = 0;
            } else {
                i++;
            }
        }, 5000);
    }
    // 民生社会事业投入信息
window.xzsp_msshsy__ = function() {
    var xzsp_msshsy = echarts.init(document.getElementById('xzsp_msshsy'));
    //app.title = '坐标轴刻度与标签对齐';
    var option_sqcl = {
        color: ['#3398DB'],
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        // 		title: {
        // 			text: '单位：万',
        // 			textStyle: {
        // 				fontWeight: 'normal',
        // 				fontSize: 14,
        // 				color: '#fff'
        // 			},
        // 			left: '6%',
        // 			top:'0'
        // 		},
        grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            top: '15%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['2014年', '2015年', '2016年', '2017年', '2018年'],
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                lineStyle: {
                    color: '#FFFFFF'
                }
            },
        }],
        yAxis: [{
            name: '单位：亿',
            nameTextStyle: {
                color: "#6CABD7",
                fontSize: 14
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#FFFFFF'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#57617B'
                }
            }
        }],
        series: [{
                name: '数量',
                type: 'bar',
                barWidth: '20%',
                data: [4.2506, 4.76166, 4.295, 5.04924, 5.22852],
                itemStyle: { //图形样式
                    normal: {
                        barBorderRadius: [50, 50, 0, 0],
                        label: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: 'white'
                            }
                        },
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#4043E3'
                        }, {
                            offset: 0.8,
                            color: '#7052f4'
                        }], false)
                    },
                },
            },

        ],
        label: {
            normal: {
                show: true,
                position: 'top',
                formatter: '{c}'
            }
        },
        itemStyle: {
            normal: {

                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(17, 168,171, 1)'
                }, {
                    offset: 1,
                    color: 'rgba(17, 168,171, 0.1)'
                }]),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        }
    };
    xzsp_msshsy.setOption(option_sqcl);
}