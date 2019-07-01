function bb4() {
	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById('data17'), 'ucdc');
option = {
				tooltip: {
			        trigger: 'axis',
			        axisPointer: {
			            type: 'line'
			        }
			    },
				grid: {
					top:40,
					left: 40,
					right: 40,
					bottom: 30,
				},
				xAxis: {
					type: 'category',
					boundaryGap: false,
					axisLabel: {
				            fontSize: 14
				        },
				        splitLine: {
			            show: false,
			        },
			        axisLine: {
			        	   show: false,
			        },
					data: ['3月','4月', '5月', '6月', '7月', '8月', '9月', ]
				},
				yAxis: {
					type: 'value',
					name:'次',
					axisLabel: {
				            fontSize: 14
				       },
			        axisLine: {
			        	   show: false,
			        },
					nameTextStyle:{color:'#fff'},
				},
				series: [{
						name: '投诉量',
						type: 'line',
						stack: '总量',
						data: [120, 132, 101, 134, 90, 230, 210],
						markPoint: {
							data: [{
								type: 'max',
								name: '最大值'
							}]
						},
					},
				],
				color: ['#0897d7', '#e5b513', '#c02e33']
			};

	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
}




function bb5() {
	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById('data16'), 'ucdc');
 option = {
     tooltip: {
         formatter: function(x) {
             return x.data.des;
         }
     },
     series: [{
         type: 'graph',
         layout: 'force',
         symbolSize: 64,
         roam: true,
         edgeSymbol: ['circle', 'arrow'],
         // edgeSymbolSize: [80, 10],
         edgeLabel: {
             normal: {
                 textStyle: {
                     fontSize: 24
                 }
             }
         },
         force: {
             repulsion: 3000,
             edgeLength: [10, 50]
         },
         draggable: true,
         itemStyle: {
             normal: {
                 color: '#0475ea'
             }
         },
         lineStyle: {
             normal: {
                 width: 2,
                 color: '#fff'

             }
         },
         edgeLabel: {
             normal: {
                 show: true,
                 formatter: function(x) {
                     return x.data.name;
                 }
             }
         },
         label: {
             normal: {
                 show: true,
                 textStyle: {fontSize: 18}
             }
         },
         data: [{
             name: '张伟',
             des: '最高检反贪局侦查处处长，汉东省人民检察院副检察长兼反贪局局长。<br/>经过与腐败违法分子的斗争，最终将一批腐败分子送上了审判台，<br/>正义战胜邪恶，自己也迎来了成长。',
             symbolSize: 100,
             itemStyle: {
                 normal: {
                     color: 'red'
                 }
             }
         }, {
             name: '李达康',
             des: '汉东省省委常委，京州市市委书记。是一个正义无私的好官。<br/>但为人过于爱惜自己的羽毛，对待身边的亲人和朋友显得有些无情。',
             itemStyle: {
                 normal: {
                     color: 'red'
                 }
             }
         }, {
             name: '祁同伟',
             des: '汉东省公安厅厅长',
             symbolSize: 100
         }, {
             name: '陈岩石',
             des: '离休干部、汉东省检察院前常务副检察长。充满正义，平凡而普通的共 产 党人。<br/>对大老虎赵立春，以各种形式执着举报了十二年。<br/>在这场关系党和国家生死存亡的斗争中，老人家以耄耋高龄，<br/>义无反顾地背起了炸 药包，在反腐胜利前夕因病去世。',
             itemStyle: {
                 normal: {
                     color: 'red'
                 }
             }
         }, {
             name: '陆亦可',
             des: '汉东省检察院反贪局一处处长',
             itemStyle: {
                 normal: {
                     color: 'red'
                 }
             }
         }, {
             name: '高育良',
             des: '汉东省省委副书记兼政法委书记。年近六十，是一个擅长太极功夫的官场老手。张伟、陈海和祁同伟是其学生。',
             symbolSize: 100
         }, {
             name: '沙瑞金',
             des: '汉东省省委书记',
             itemStyle: {
                 normal: {
                     color: 'red'
                 }
             }
         }, {
             name: '高小琴',
             des: '山水集团董事长，是一位叱咤于政界和商界的风云人物，处事圆滑、精明干练。'
         }, {
             name: '高小凤'
         }, {
             name: '赵东来',
             des: '汉东省京州市公安局局长，充满正义，整治恶势力，<br/>在与检察部门的合作中从最初的质疑到之后的通力配合。',
             itemStyle: {
                 normal: {
                     color: 'red'
                 }
             }
         }, {
             name: '程度',
             des: '汉东省京州市公安局光明区分局局长，因犯错误，被李达康书记和赵东来局长点名要清除公安队伍。<br/>但在高小琴的帮助下，祁同伟调他当上了省公安厅办公室副主任。<br/>尽管程度逃避了所有罪责，上面也有人保他，<br/>但最终还是在反贪局局长张伟的缜密侦查下被绳之于法。',
         }, {
             name: '吴惠芬',
             des: '汉东省省委副书记高育良的妻子，汉东大学明史教授。',
             itemStyle: {
                 normal: {
                     color: 'red'
                 }
             }
         }, {
             name: '赵瑞龙',
             des: '副国级人物赵立春的公子哥，官二代，打着老子的旗子，<br/>黑白两道通吃，可谓呼风唤雨，权倾一时。',
         }, {
             name: '赵立春',
             des: '副国级领导人，曾经的改革闯将，在权利面前，显得极其渺小。',
         }, {
             name: '陈海',
             itemStyle: {
                 normal: {
                     color: 'red'
                 }
             }
         }, {
             name: '梁璐',
             itemStyle: {
                 normal: {
                     color: 'red'
                 }
             }
         }, {
             name: '刘新建'
         }, {
             name: '欧阳菁'
         }, {
             name: '吴心怡',
             itemStyle: {
                 normal: {
                     color: 'red'
                 }
             }
         }, {
             name: '蔡成功'
         }, {
             name: '丁义珍'
         }],
         links: [{
             source: '高育良',
             target: '张伟',
             name: '师生',
             des: '张伟是高育良的得意门生'
         }, {
             source: '高育良',
             target: '祁同伟',
             name: '师生'
         }, {
             source: '赵立春',
             target: '高育良',
             name: "前领导"
         }, {
             source: '赵立春',
             target: '赵瑞龙',
             name: "父子"
         }, {
             source: '赵立春',
             target: '刘新建',
             name: "前部队下属"
         }, {
             source: '李达康',
             target: '赵立春',
             name: "前任秘书"
         }, {
             source: '祁同伟',
             target: '高小琴',
             name: "情人"
         }, {
             source: '陈岩石',
             target: '陈海',
             name: "父子"
         }, {
             source: '陆亦可',
             target: '陈海',
             name: "属下"
         }, {
             source: '沙瑞金',
             target: '陈岩石',
             name: "故人"
         }, {
             source: '祁同伟',
             target: '陈海',
             name: "师哥"
         }, {
             source: '祁同伟',
             target: '张伟',
             name: "师哥"
         }, {
             source: '张伟',
             target: '陈海',
             name: "同学，生死朋友"
         }, {
             source: '高育良',
             target: '吴惠芬',
             name: "夫妻"
         }, {
             source: '陈海',
             target: '赵东来',
             name: "朋友"
         }, {
             source: '高小琴',
             target: '高小凤',
             name: "双胞胎",
             symbolSize: '1'
         }, {
             source: '赵东来',
             target: '陆亦可',
             name: "爱慕"
         }, {
             source: '祁同伟',
             target: '程度',
             name: "领导"
         }, {
             source: '高育良',
             target: '高小凤',
             name: "情人"
         }, {
             source: '赵瑞龙',
             target: '祁同伟',
             name: "勾结",
             symbolSize: '1',
         }, {
             source: '李达康',
             target: '赵东来',
             name: "领导"
         }, {
             source: '赵瑞龙',
             target: '程度',
             name: "领导"
         }, {
             source: '沙瑞金',
             target: '李达康',
             name: "领导"
         }, {
             source: '沙瑞金',
             target: '高育良',
             name: "领导"
         }, {
             source: '祁同伟',
             target: '梁璐',
             name: "夫妻"
         }, {
             source: '吴惠芬',
             target: '梁璐',
             name: "朋友"
         }, {
             source: '李达康',
             target: '欧阳菁',
             name: "夫妻"
         }, {
             source: '赵瑞龙',
             target: '刘新建',
             name: "洗钱工具"
         }, {
             source: '赵瑞龙',
             target: '高小琴',
             name: "勾结，腐化",
             symbolSize: '1'
         }, {
             source: '赵瑞龙',
             target: '高小凤',
             name: "腐化"
         }, {
             source: '吴心怡',
             target: '陆亦可',
             name: "母女"
         }, {
             source: '吴心怡',
             target: '吴惠芬',
             name: "姐妹"
         }, {
             source: '蔡成功',
             target: '张伟',
             name: "发小"
         }, {
             source: '蔡成功',
             target: '欧阳菁',
             name: "举报",
             lineStyle: {
                 normal: {
                     type: 'dotted',
                     color: '#0475ea'
                 }
             }
         }, {
             source: '欧阳菁',
             target: '刘新建',
             name: "举报",
             lineStyle: {
                 normal: {
                     type: 'dotted',
                     color: '#0475ea'
                 }
             }
         }, {
             source: '刘新建',
             target: '赵瑞龙',
             name: "举报",
             lineStyle: {
                 normal: {
                     type: 'dotted',
                     color: '#000'
                 }
             }
         }, {
             source: '李达康',
             target: '丁义珍',
             name: "领导"
         }, {
             source: '高小琴',
             target: '丁义珍',
             name: "策划出逃"
         }, {
             source: '祁同伟',
             target: '丁义珍',
             name: "勾结"
         }, {
             source: '赵瑞龙',
             target: '丁义珍',
             name: "勾结"
         }]
     }]
 };

	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
}











function ba1() {
	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById('data50'), 'ucdc');
option = {
    title : {
        text: '',
        subtext: '',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '80%',
            color: ['#5385f4', '#e734f7', '#14dbfb'],
            center: ['50%', '50%'],
            data:[
                {value:335, name:'经济建设'},
                {value:310, name:'机构团体'},
                {value:234, name:'城市建设'},

            ],
            label: {
					normal: {
						formatter: '{b}\n{d}%',
						textStyle: {
							fontSize: 20
						},
					},
				},
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
}

function ba2() {
	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById('data51'), 'ucdc');
var option = {
	color: ['#1d9bdc'],
    title: {
        text: '',
        x:'center',
        textStyle:{
        	fontSize:32
        }
    },
     textStyle: {
	    	fontFamily: 'Hiragino Sans GB',
	  
        	},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '4%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        axisLine:{
				show: true,
				lineStyle: {
					color: ['#fff'],
					
				}
			},
			axisTick:{
				show: false
			},
    },
    yAxis: {
    	axisLine:{
				show: true,
				lineStyle: {
					color: ['#fff'],
					
				}
			},
			axisTick:{
				show: false
			},
        type: 'category',
        data: ['2018年以来住宅投资和竣工建筑面积','体育设施对外开放','常州市高等教育机构名单','常州市基础建设','垃圾分类','公务员管理机构','体育设施对外开放','常州市高等教育机构名单','常州市基础建设','垃圾分类']
    },
    series: [
        {
            name: '省级部门交办量TOP10',
            type: 'bar',
			width:'15%',
            data: [1193,1429,1681,1933,2020,2214,2417,3225,4920,5653]
        },
    ]
};

	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
}



function ba3() {
	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById('data52'), 'ucdc');
var option = {
    color: ['#fbc714'],
    title: {
        text: '',
        textStyle: {
					
					fontSize: 30
				},
    },
	textStyle: {
		fontFamily: 'Hiragino Sans GB',
		fontSize: 24,
		color:'#f6f6f6'
	},
    tooltip: {},
    radar: {
        // shape: 'circle',
        indicator: [
           { name: '商业', max: 6500},
           { name: '其他', max: 16000},
           { name: '科研', max: 30000},
           { name: '公益', max: 38000},
           { name: '个人', max: 52000},
       
        ]
    },
    series: [{
        name: '',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            
             {
                value : [5000, 8000, 28000, 21000, 22000],
                name : ''
            }
        ]
    }]
};

	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
}







function ba4() {
	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById('data53'), 'ucdc');
option = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		legend: {
			data: ['调用', '存储',],
			align: 'left',
			right: 30,
			textStyle:{
            color :'#fff'
        }
		},
		xAxis: {
			splitLine: {
            show: false,
        },
       axisLine:{
				show: true,
				lineStyle: {
					color: ['#fff'],
					
				}
			},
			axisTick:{
				show: false
			},
            axisLabel: {
            fontSize: 12
        },
			data: ['发改委', '发改委', '发改委', '发改委', '发改委', ],
		},
		yAxis: {
			inverse: false,
			nameTextStyle: {
				color: '#fff'
			},
		    axisLabel: {
            fontSize: 12
           },
           axisLine:{
				show: true,
				lineStyle: {
					color: ['#fff'],
					
				}
			},
			axisTick:{
				show: false
			},
			splitArea: {
				show: false
			}
		},
		grid: {
			left: 60,
			top: 40,
			bottom: 40,
			right: 40
		},
		series: [{
				name: '调用',
				type: 'bar',
				stack: 'one',
				barWidth: 20,
				data: [1126, 2214, 1135, 876, 799, ],
				itemStyle: {
                normal: {
                   	barBorderRadius: [20, 20, 20, 20],
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 1, color: '#1159dd'},
                            {offset: 0, color: '#00fffc'}
                        ]
                    )
                },
            },
				label: {
					normal: {
						show: true,
						position: 'top',
						color: '#00fffc',						
					}
				}
		},
		{
				name: '存储',
				type: 'bar',
				stack: 'two',
				barWidth: 20,
				data: [986, 1214, 1215, 566, 870, ],
				itemStyle: {
                normal: {
                   	barBorderRadius: [20, 20, 20, 20],
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 1, color: '#50a16e'},
                            {offset: 0, color: '#d1fd7b'}
                        ]
                    )
                },
            },
				label: {
					normal: {
						show: true,
						position: 'top',
						color: '#00fffc',						
					}
				}
		},
		]
	};

	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
}





function ba5() {
	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById('data54'), 'ucdc');
option = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		legend: {
			data: ['申请数', '审批数',],
			align: 'left',
			right: 30,
			textStyle:{
            color :'#fff'
        }
		},
		xAxis: {
			splitLine: {
            show: false,
        },
       axisLine:{
				show: true,
				lineStyle: {
					color: ['#fff'],
					
				}
			},
			axisTick:{
				show: false
			},
            axisLabel: {
            fontSize: 12
        },
			data: ['养狗许可', '户外广告', '养狗许可', '户外广告', '养狗许可', ],
		},
		yAxis: {
			inverse: false,
			name: 'm',
			nameTextStyle: {
				color: '#fff'
			},
		    axisLabel: {
            fontSize: 12
           },
           axisLine:{
				show: true,
				lineStyle: {
					color: ['#fff'],
					
				}
			},
			axisTick:{
				show: false
			},
			splitArea: {
				show: false
			}
		},
		grid: {
			left: 60,
			top: 40,
			bottom: 40,
			right: 40
		},
		series: [{
				name: '申请数',
				type: 'bar',
				stack: 'one',
				barWidth: 20,
				data: [1126, 2214, 1135, 876, 799, ],
				itemStyle: {
                normal: {
                   	barBorderRadius: [20, 20, 20, 20],
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 1, color: '#1159dd'},
                            {offset: 0, color: '#00fffc'}
                        ]
                    )
                },
            },
				label: {
					normal: {
						show: true,
						position: 'top',
						color: '#00fffc',						
					}
				}
		},
		{
				name: '审批数',
				type: 'bar',
				stack: 'two',
				barWidth: 20,
				data: [986, 1214, 1015, 566, 770, ],
				itemStyle: {
                normal: {
                   	barBorderRadius: [20, 20, 20, 20],
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 1, color: '#50a16e'},
                            {offset: 0, color: '#d1fd7b'}
                        ]
                    )
                },
            },
				label: {
					normal: {
						show: true,
						position: 'top',
						color: '#00fffc',						
					}
				}
		},
		]
	};

	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
}





function ba6() {
	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById('data55'), 'ucdc');
option = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		legend: {
			data: ['实时量', '历史最高',],
			align: 'left',
			right: 30,
			textStyle:{
            color :'#fff'
        }
		},
		xAxis: {
			splitLine: {
            show: false,
        },
       axisLine:{
				show: true,
				lineStyle: {
					color: ['#fff'],
					
				}
			},
			axisTick:{
				show: false
			},
            axisLabel: {
            fontSize: 12
        },
			data: ['垃圾处理量', '供水量', '燃气用量'],
		},
		yAxis: {
			inverse: false,
			name: 'm',
			nameTextStyle: {
				color: '#fff'
			},
		    axisLabel: {
            fontSize: 12
           },
           axisLine:{
				show: true,
				lineStyle: {
					color: ['#fff'],
					
				}
			},
			axisTick:{
				show: false
			},
			splitArea: {
				show: false
			}
		},
		grid: {
			left: 60,
			top: 40,
			bottom: 40,
			right: 40
		},
		series: [{
				name: '实时量',
				type: 'bar',
				stack: 'one',
				barWidth: 20,
				data: [1126, 2214, 1135,],
				itemStyle: {
                normal: {
                   	barBorderRadius: [20, 20, 20, 20],
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 1, color: '#1159dd'},
                            {offset: 0, color: '#00fffc'}
                        ]
                    )
                },
            },
				label: {
					normal: {
						show: true,
						position: 'top',
						color: '#00fffc',						
					}
				}
		},
		{
				name: '历史最高',
				type: 'bar',
				stack: 'two',
				barWidth: 20,
				data: [986, 1214, 1015],
				itemStyle: {
                normal: {
                   	barBorderRadius: [20, 20, 20, 20],
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 1, color: '#50a16e'},
                            {offset: 0, color: '#d1fd7b'}
                        ]
                    )
                },
            },
				label: {
					normal: {
						show: true,
						position: 'top',
						color: '#00fffc',						
					}
				}
		},
		]
	};

	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
}





function ba7() {
	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById('data56'), 'ucdc');
option = {
    title : {
        text: '',
        subtext: '',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            color: ['#5385f4', '#e734f7', '#14dbfb', '#9f4aff', '#29aa75', '#ffaa25'],
            center: ['50%', '50%'],
            data:[
                {value:335, name:'溧阳市'},
                {value:310, name:'金坛区'},
                {value:234, name:'武进区'},
                {value:135, name:'天宁区'},
                {value:80, name:'新北区'},
                {value:64, name:'钟楼区'},

            ],
            label: {
					normal: {
						formatter: '{b}\n{d}%',
						textStyle: {
							fontSize: 20
						},
					},
				},
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
}



function ba8() {
	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById('data57'), 'ucdc');
option = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		legend: {
        data:['上报数','立案数','结案数']
         },
		xAxis: {
			splitLine: {
            show: false,
        },
       axisLine:{
				show: true,
				lineStyle: {
					color: ['#fff'],
					
				}
			},
			axisTick:{
				show: false
			},
            axisLabel: {
            fontSize: 12
        },
			data: ['工地管理', '道路容貌', '一类住宅小区', '二类住宅小区', '日常保洁', ],
		},
		yAxis: {
			inverse: false,
			name: '',
			nameTextStyle: {
				color: '#fff'
			},
		    axisLabel: {
            fontSize: 12
           },
           axisLine:{
				show: true,
				lineStyle: {
					color: ['#fff'],
					
				}
			},
			axisTick:{
				show: false
			},
			splitArea: {
				show: false
			}
		},
		grid: {
			left: 60,
			top: 40,
			bottom: 40,
			right: 40
		},
		series: [{
				name: '上报数',
				type: 'bar',
				stack: 'one',
				barWidth: 20,
				data: [160479, 158023, 144144, 96985, 95577, ],
				itemStyle: {
                normal: {
                   	barBorderRadius: [20, 20, 20, 20],
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 1, color: '#1159dd'},
                            {offset: 0, color: '#00fffc'}
                        ]
                    )
                },
            },
				label: {
					normal: {
						show: true,
						position: 'top',
						color: '#00fffc',						
					}
				}
		},
		{
				name: '立案数',
				type: 'bar',
				stack: 'two',
				barWidth: 20,
				data: [153030, 150594, 140154, 91010, 93536, ],
				itemStyle: {
                normal: {
                   	barBorderRadius: [20, 20, 20, 20],
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 1, color: '#490dac'},
                            {offset: 0, color: '#ca86ff'}
                        ]
                    )
                },
            },
				label: {
					normal: {
						show: true,
						position: 'top',
						color: '#ca86ff',						
					}
				}
		},
		{
				name: '结案数',
				type: 'bar',
				stack: 'three',
				barWidth: 20,
				data: [93122, 141780, 133229, 85050, 90057, ],
				itemStyle: {
                normal: {
                   	barBorderRadius: [20, 20, 20, 20],
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 1, color: '#9a7af6'},
                            {offset: 0, color: '#fb99ff'}
                        ]
                    )
                },
            },
				label: {
					normal: {
						show: true,
						position: 'top',
						color: '#fb99ff',						
					}
				}
		},
		
		]
	};

	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
}




function ba9() {
	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById('data58'), 'ucdc');
option = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		xAxis: {
			splitLine: {
            show: false,
        },
       axisLine:{
				show: true,
				lineStyle: {
					color: ['#fff'],
					
				}
			},
			axisTick:{
				show: false
			},
            axisLabel: {
            fontSize: 12
        },
			data: ['天宁区', '武进区', '钟楼区', '金坛区', '新北区', '溧阳市',],
		},
		yAxis: {
			inverse: false,
			name: '',
			nameTextStyle: {
				color: '#fff'
			},
		    axisLabel: {
            fontSize: 12
           },
           axisLine:{
				show: true,
				lineStyle: {
					color: ['#fff'],
					
				}
			},
			axisTick:{
				show: false
			},
			splitArea: {
				show: false
			}
		},
		grid: {
			left: 30,
			top: 40,
			bottom: 40,
			right: 30
		},
		series: [{
				name: '申请数',
				type: 'bar',
				stack: 'one',
				barWidth: 20,
				data: [97.6, 94.3, 94.3, 93.5, 93.4,89.6 ],
				itemStyle: {
                normal: {
                   	barBorderRadius: [20, 20, 20, 20],
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 1, color: '#1159dd'},
                            {offset: 0, color: '#00fffc'}
                        ]
                    )
                },
            },
				label: {
					normal: {
						show: true,
						position: 'top',
						color: '#00fffc',						
					}
				}
		},
		]
	};

	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
}