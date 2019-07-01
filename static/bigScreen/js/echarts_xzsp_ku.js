//接单量xzsp_sqcl 
function xzsp_sqcl() {
	var xzsp_jdl = echarts.init(document.getElementById('xzsp_jdl'));
	var data = [89, 112, 90, 130, 102, 143, 128];
	var myDate = new Date(); //获取系统当前时间
	var year = myDate.getYear(); //获取系统当前年份
	var month = myDate.getMonth() + 1; //获取当前月份
	var xdata;
	if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
		xdata = [month + '-01', month + '-05', month + '-10', month + '-15', month + '-20', month + '-25', month + '-31'];
	} else if(month == 4 || month == 6 || month == 9 || month == 11) {
		xdata = [month + '-01', month + '-05', month + '-10', month + '-15', month + '-20', month + '-25', month + '-30'];
	} else if(year % 4 == 0 && year % 100 != 0) {
		xdata = [month + '-01', month + '-05', month + '-10', month + '-15', month + '-20', month + '-25', month + '-29'];
	} else {
		xdata = [month + '-01', month + '-05', month + '-10', month + '-15', month + '-20', month + '-25', month + '-28'];
	};
	var option_jdl = {
		grid: {
			left: 30,
			right: 50,
			top: 50,
			bottom: 30,
			containLabel: true
		},
		xAxis: {
			type: 'category',
			boundaryGap: false,
			data: xdata,
			triggerEvent: true,
			splitLine: {
				show: false
			},
			axisLine: {
				show: true,
				lineStyle: {
					width: 2,
					color: 'rgba(255,255,255,.6)'
				}
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				color: '#fff',
				fontSize: 14,
				textShadowOffsetY: 2
			}
		},
		yAxis: {
			name: '当月每天接单数量',
			nameTextStyle: {
				color: '#fff',
				fontSize: 14,
				textShadowColor: '#000',
				textShadowOffsetY: 2
			},
			type: 'value',
			splitLine: {
				show: true,
				lineStyle: {
					color: 'rgba(255,255,255,.2)'
				}
			},
			axisLine: {
				show: true,
				lineStyle: {
					width: 2,
					color: 'rgba(255,255,255,.6)'
				}
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				color: '#fff',
				fontSize: 14,
				textShadowColor: '#000',
				textShadowOffsetY: 2
			}
		},
		series: [{
			data: data,
			type: 'line',
			smooth: true,
			symbol: 'circle',
			symbolSize: 12,
			color: '#03DFF1',
			lineStyle: {
				color: "#03E0F2"
			},
			label: {
				show: true,
				position: 'top',
				textStyle: {
					color: '#FEC201',
					fontSize: 14,
				}
			},
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgba(1,98,133,0.6)'
					}, {
						offset: 1,
						color: 'rgba(7, 25, 75, 0)'
					}], false),
					shadowColor: 'rgba(0, 0, 0, 0.1)',
					shadowBlur: 10
				}
			}
		}]
	}
	xzsp_jdl.setOption(option_jdl);
}

function echartAAAAAAAAAAAA(){
// function echartA2() {改名了
	var echart_A2 = echarts.init(document.getElementById('echart_A2'));
	echart_A2.setOption({
		title: [{
				x: "12%",
				bottom: 30,
				text: '办结率',
				textStyle: {
					fontWeight: 'normal',
					fontSize: 18,
					color: "#4cd4db"
				}
			},
			{
				x: "42%",
				bottom: 30,
				text: '时效率',
				textStyle: {
					fontWeight: 'normal',
					fontSize: 18,
					color: "#0271ff"
				}
			},
			{
				x: "70%",
				bottom: 30,
				text: '满意率',
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
					value: 436
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
					value: 245
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
					value: 135
				}]
			}
		]
	});
}

//echartB1
function echartB1() {
	var myChart = echarts.init(document.getElementById('echart_B1'));
	option = {
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
			data: ['公开招标', '邀请招标', '询价', '竞争性谈判', '竞争性磋商','单一来源'],
			axisTick: {
				alignWithLabel: true
			},
			axisLabel: {
                rotate:35,
				color: '#fff',
				fontSize: 16,

			},
			axisLine: {
				lineStyle: {
					color: '#fff'
				}
			},
			axisLabel: {
				rotate: 35,
				textStyle: {
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
			name: '',
			type: 'bar',
			barWidth: '20%',
			data: [35, 2, 48, 2, 2,4]
		}]
	};
	myChart.setOption(option);
}

//个人服务事项TOP5统计
/*
function xzsp_grfwsx() {
	var xzsp_grfwsx = echarts.init(document.getElementById('xzsp_grfwsx'));
	var data_lengend = ['特优证', '施工许可证', '建设工程备案', '城市绿地审批', '城市道路审批']
	option_grfwsx = {
		backgroundColor: 'rgba(0,0,0,0)',
		grid: {
			top: '1%',
			left: '2%'
		},
		legend: {
			orient: 'vertical',
			bottom: 50,
			right: 0,
			left: 330,
			data: [{
					name: data_lengend[0],
					icon: 'square',
					textStyle: {
						color: '#819EDA',
						fontSize: 18
					}
				},
				{
					name: data_lengend[1],
					icon: 'square',
					textStyle: {
						color: '#819EDA',
						fontSize: 18
					}
				},
				{
					name: data_lengend[2],
					icon: 'square',
					textStyle: {
						color: '#819EDA',
						fontSize: 18
					}
				},
				{
					name: data_lengend[3],
					icon: 'square',
					textStyle: {
						color: '#819EDA',
						fontSize: 18
					}
				},
				{
					name: data_lengend[4],
					icon: 'square',
					textStyle: {
						color: '#819EDA',
						fontSize: 18
					}
				}
			],
			textStyle: { //图例文字的样式
				color: '#fff',
				fontSize: 8,
			}
		},
		color: ['#3AA7F9', '#F56C7C', '#FD9A36', '#EBE028', '#31CE65', '#20DACD', '#D671F5', '#F430E8', '#8A31FB'],
		series: [{
			name: '事项名',
			type: 'pie',
			radius: ['45%', '65%'],
			center: ['150px', '100px'],
			data: [{
					value: 120,
					name: '城市道路审批'
				},
				{
					value: 60,
					name: '城市绿地审批'
				},
				{
					value: 101,
					name: '特优证'
				},
				{
					value: 47,
					name: '建设工程备案'
				},
				{
					value: 22,
					name: '施工许可证'
				},

			],
			label: {
				normal: {
					show: true,
					formatter: '{d}%',
					fontSize: 14
				},

			},
			labelLine: {
				show: false
			},
			itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			}
		}]
	};
	xzsp_grfwsx.setOption(option_grfwsx, true);
}
*/

//办结率和满意率
function xzsp_bjl() {
	var xzsp_bjl = echarts.init(document.getElementById('xzsp_bjl'));

	option_bjl = {
		title: {
			text: '办结率',
			textStyle: {
				color: '#fff'
			},
			top: 180,
			left: 100,
		},
		tooltip: {
			formatter: "{a} <br/>{b} : {c}%"
		},
		series: [{
			min: 0,
			max: 100,
			axisLine: {
				width: 15,
				show: true,
				lineStyle: {
					width: 15,
					shadowBlur: 0,
					color: [
						[0.2, '#F99F3F'],
						[0.8, '#5EAFEE'],
						[1, '#03B98D']
					]
				}
			},
			axisTick: { // 坐标轴小标记
				length: 5,
				splitNumber: 5, // 属性length控制线长
				lineStyle: { // 属性lineStyle控制线条样式
					color: '#fff',
					shadowColor: '#fff', //默认透明
					shadowBlur: 10
				}
			},
			splitLine: { // 分隔线
				length: 15, // 属性length控制线长
				lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
					width: 2,
					color: '#fff',
					shadowColor: '#fff', //默认透明
					shadowBlur: 10
				}
			},
			name: '办结率',
			type: 'gauge',
			//detail: {formatter:'{value}%'},
			detail: {
				formatter: "{value}%",
				//offsetCenter: [0, "60%"],
				textStyle: {
					fontSize: 16,
					color: "#5BB1EF"
				}
			},
			data: [{
				value: 0,
				name: ''
			}]
		}]
	};

	option_bjl.series[0].data[0].value = 97;
	xzsp_bjl.setOption(option_bjl);
	// 	setInterval(function () {
	// 		option_bjl.series[0].data[0].value = 99;
	// 		xzsp_bjl.setOption(option_bjl, true);
	// 	},1000);

	//满意率
	var xzsp_myl = echarts.init(document.getElementById('xzsp_myl'));

	option_myl = {
		title: {
			text: '满意率',
			textStyle: {
				color: '#fff'
			},
			top: 180,
			left: 100,
		},
		tooltip: {
			formatter: "{a} <br/>{b} : {c}%"
		},
		series: [{
			min: 0,
			max: 100,
			axisLine: {
				width: 15,
				show: true,
				lineStyle: {
					width: 15,
					shadowBlur: 0,
					color: [
						[0.2, '#F99F3F'],
						[0.8, '#5EAFEE'],
						[1, '#03B98D']
					]
				}
			},
			axisTick: { // 坐标轴小标记
				length: 5,
				splitNumber: 5, // 属性length控制线长
				lineStyle: { // 属性lineStyle控制线条样式
					color: '#fff',
					shadowColor: '#fff', //默认透明
					shadowBlur: 10
				}
			},
			splitLine: { // 分隔线
				length: 15, // 属性length控制线长
				lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
					width: 2,
					color: '#fff',
					shadowColor: '#fff', //默认透明
					shadowBlur: 10
				}
			},
			name: '满意率',
			type: 'gauge',
			//detail: {formatter:'{value}%'},
			detail: {
				formatter: "{value}%",
				//offsetCenter: [0, "60%"],
				textStyle: {
					fontSize: 16,
					color: "#5BB1EF"
				}
			},
			data: [{
				value: 0,
				name: ''
			}]
		}]
	};
	option_myl.series[0].data[0].value = 99;
	xzsp_myl.setOption(option_myl);
	// 	setInterval(function () {
	// 		option_myl.series[0].data[0].value = 99;
	// 		xzsp_myl.setOption(option_myl, true);
	// 	},1000);
}

//企业服务事项TOP5统计 xzsp_qyfwsx
function xzsp_qyfwsx() {
	var xzsp_qyfwsx = echarts.init(document.getElementById('xzsp_qyfwsx'));
	var data_y = ['建筑许可证申请', '建设用地规划学科组申请', '户外广告审批', '卫生设施拆迁方案审批', '公共场所卫生许可'];
	option_qyfwsx = {
		tooltip: {
			//trigger: 'axis',
			formatter: "{b}: &nbsp;{c}",
			backgroundColor: 'rgba(255,255,255,0.8)',
			extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);',
			textStyle: {
				color: '#6a717b',
			},
		},
		grid: {
			left: '20px',
			//right: '5px',
			top: '20px',
			bottom: '10px',
			containLabel: true
		},
		yAxis: [{
			type: 'category',
			data: data_y,
			inverse: true,
			axisTick: {
				alignWithLabel: true
			},
			axisLabel: {
				margin: 10,
				color: '#FFFFFF',
				fontSize: 14,
				textStyle: {
					color: '#FFFFFF'
				}
			},
			axisLine: {
				show: false,
				lineStyle: {
					color: '#2548ac'
				}
			},

		}],
		xAxis: [{
			type: 'value',
			axisLabel: {
				//show:false,
				margin: 10,
				fontSize: 14,
				textStyle: {
					color: '#53a8fa'
				}
			},
			axisLine: {
				show: false,
				lineStyle: {
					color: '#192469'
				}
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: '#17367c'
				}
			}

		}],
		backgroundColor: 'rgba(0,0,0,0)',
		series: [{
			name: 'Top 10',
			type: 'bar',
			barWidth: 15,
			data: [64, 60, 56, 34, 12],
			label: {
				normal: {
					show: true,
					position: 'right',
					textStyle: {
						color: 'white' //color of value
					}
				}
			},
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: '#0B154A' // 0% 处的颜色
					}, {
						offset: 1,
						color: '#08e3f1' // 100% 处的颜色
					}], false),
					barBorderRadius: [0, 15, 15, 0],
					shadowColor: 'rgba(0,0,0,0.1)',
					shadowBlur: 3,
					shadowOffsetY: 3
				}
			}
		}]
	};
	xzsp_qyfwsx.setOption(option_qyfwsx);

}

//审批时效 xzsp_spsx
function xzsp_spsx() {
	var xzsp_spsx = echarts.init(document.getElementById('xzsp_spsx'));
	option_spsx = {
		tooltip: {
			trigger: 'axis'
		},
		calculable: true,
		legend: {
			data: ['平均审批时间/天', '平均排队时间/分钟'],
			right: 130,
			top: 3,
			textStyle: { //图例文字的样式
				color: '#fff',
				fontSize: 12
			}
		},
		grid: {
			top: '15%',
			bottom: '30',
			left: '60',
			right: '60',
		},
		xAxis: [{
				type: 'category',
				boundaryGap: false,
				data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
				axisTick: {
					alignWithLabel: false,
					interval: 1
				},
				axisLine: {
					show: false,
					lineStyle: {
						color: '#FFFFFF'
					}
				},

			},

		],
		yAxis: [{
				type: 'value',
				name: '平均审批时间/天',
				nameTextStyle: {
					color: '#6CABD7',
					fontSize: 12,
				},
				axisLine: {
					show: false,
					lineStyle: {
						color: '#FFFFFF'
					}
				},
				splitLine: { // 分隔线
					show: false, // 默认显示，属性show控制显示与否
				},
				axisTick: {
					show: false
				},
				splitLine: {
					show: false,
				}
			},
			{
				type: 'value',
				name: '平均排队时间/分钟',
				nameTextStyle: {
					color: '#6CABD7',
					fontSize: 12
				},
				splitLine: { // 分隔线
					show: false, // 默认显示，属性show控制显示与否
				},
				axisLine: {
					show: false,
					lineStyle: {
						color: '#FFFFFF'
					}
				},
				axisTick: {
					show: false
				},
				splitLine: {
					show: false,
				}
			}
		],
		series: [{
				name: '平均审批时间/天',
				nameTextStyle: {
					color: '#'
				},
				type: 'line',
				smooth: true,
				symbol: 'none',
				data: [40, 30, 24, 20, 17, 13, 12, 18, 15, 10, 9, 8],
				itemStyle: {
					normal: {
						color: '#175BD9'
					}
				},
				areaStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: '#175BD9'
						}, {
							offset: 1,
							color: 'rgba(3,170,196,1)'
						}], false),
						shadowColor: 'rgba(0, 0, 0, 0.1)',
						shadowBlur: 10
					}

				},

			},
			{
				name: '平均排队时间/分钟',
				type: 'line',
				smooth: true,
				symbol: 'none',
				yAxisIndex: 1,
				data: [45, 44, 43, 42, 40, 39, 40, 38, 37, 36, 35, 34],
				itemStyle: {
					normal: {
						color: '#0FAEC4'
					},
				},
				areaStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
							offset: 0,
							color: 'rgba(10,35,84,1)' // 0% 处的颜色
						}, {
							offset: 1,
							color: 'rgba(3,170,196,1)' // 100% 处的颜色
						}], false),
						shadowColor: 'rgba(0, 0, 0, 0.1)',
						shadowBlur: 10
					}
				},
			}
		]
	};

	xzsp_spsx.setOption(option_spsx);
}

