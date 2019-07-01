<%--
  Created by IntelliJ IDEA.
  User: lenovo
  Date: 2018/1/29
  Time: 14:57
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@include file="/common/header.jsp" %>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1,user-scalable=no">

    <title>12345便民服务</title>

    <script src="${ctx}/webResources/My97DatePicker/WdatePicker.js" type="text/javascript"></script>

    <link href="${ctx}/bigScreen/ldzx/css/style.css" rel="stylesheet" type="text/css">
    <link href="${ctx}/bigScreen/ldzx/css/swiper.css" rel="stylesheet" type="text/css">
    <script type="text/javascript" src="${ctx}/bigScreen/js/jquery.js"></script>
    <script type="text/javascript" src="${ctx}/webResources/js/easyui-1.4.4/jquery.easyui.min.js"></script>
    <script type="text/javascript" src="${ctx}/bigScreen/js/swiper.js"></script>
    <script type="text/javascript" src="${ctx}/bigScreen/js/echarts.js"></script>
    <script type="text/javascript" src="${ctx}/bigScreen/js/echarts3.min.js"></script>
    <script type="text/javascript" src="${ctx}/bigScreen/js/echarts-wordcloud.min.js"></script>
    <script type="text/javascript" src="${ctx}/bigScreen/js/ucdc.js"></script>
    <script type="text/javascript" src="${ctx}/bigScreen/js/ciyun.js" ></script>
    <script src="${ctx}/bigScreen/layui/layui.all.js" type="text/javascript"></script>
    <link href="${ctx}/bigScreen/layui/css/layui.css" rel="stylesheet" type="text/css" />
	<style type="text/css">
	.state{cursor:pointer};
	
	.layui-layer-shade {
    width: 0;
    height: 0;
	}
	</style>
    <script type="text/javascript">
        $(function(){
        	$('.close').click(function () {
                /* $('.modal-mask').fadeOut(100); */
                $('.modal-x').slideUp(200);
            });
            startTime();
            statisticCaseByType();
            statisticCaseByDate();
            statisticCaseByWeek();
            statisticCaseByPhone();
            workCountOf24Hours();
            statisticCaseByDept();
            statisticCaseByGkType();
            statisticCaseBySlSource();
            statisticSeatByState();
            publicOpinion();
            statisticYqByGpKey();
        });

        /**
         * @title 工单类型统计
         * @description 统计工单所属类型相对数量统计
         * @author bys
         */
        function statisticCaseByType(){
            $.ajax({
                type: "post",
                url: "${ctx}/fore/index/statistic_statisticCaseByType.action",
                success: function (data) {
                    var statisticData = eval('(' + data + ')');
                    var myChart = echarts.init(document.getElementById('data1'), 'ucdc');
                    var myYData = ['咨询', '投诉', '举报', '建议', '抢修', '报修', '求助', '其他'];
                    var myBaseData = [150, 450, 330, 220, 110, 450, 350, 250];
                    var maxData = [500, 500, 500, 500, 500, 500, 500, 500];
                    var max = Math.max.apply(Math,myBaseData);
                    if (statisticData.length > 0) {
                        myYData = new Array();
                        myBaseData = new Array();
                        maxData = new Array();
                        for (var i = 0; i < statisticData.length; i++) {
                            myYData.push(statisticData[i].typeName);
                            myBaseData.push(parseInt(statisticData[i].typeValue));
                        }
                        max = Math.max.apply(Math,myBaseData);
                        for (var j = 0; j < statisticData.length; j++) {
                            maxData.push(max);
                        }
                    }

                    var option = {
                        grid: {
                            x: 60,
                            y: 40,
                            x2: 5,
                            y2: 25
                        },
                        xAxis: [{
                            data: myYData,
                            axisLabel: {
                                textStyle: {
                                    fontSize: 15
                                }
                            },
                            splitLine: {
                                show: false
                            }
                        }, {
                            // 辅助 x 轴
                            show: false,
                            data: []
                        }],
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'shadow'
                            }
                        },
                        yAxis: {
                            name: '30天工单量(条)',
                            nameTextStyle: {color: '#fff'},
                            max: max,
                            axisLine: {
                                show: false
                            },
                            axisLabel: {
                                textStyle: {
                                    fontSize: 15
                                }
                            }
                        },
                        series: [{
                            // 辅助系列
                            type: 'bar',
                            silent: true,
                            xAxisIndex: 1,
                            itemStyle: {
                                normal: {
                                    color: 'rgba(38, 200, 247, 0.2)'
                                }
                            },
                            barWidth: 15,
                            data:maxData
                        }, {
                            type: 'bar',
                            data:myBaseData,
                            barWidth: 15,
                            itemStyle: {
                                normal: {
                                    barBorderRadius: 10,
                                    color: '#03a9f4'

                                }
                            }
                        }]
                    };
                    myChart.setOption(option);
                }
            });
        }

        /**
         * @title 工单统计 基于年月统计
         * @description 统计当前月后推至一年的数据统计
         * @author bys
         */
        function statisticCaseByDate(){
            $.ajax({
                type: "post",
                url: "${ctx}/fore/index/statistic_statisticCaseByDate.action",
                success: function (data) {
                    var statisticData = eval('(' + data + ')');
                    var myChart = echarts.init(document.getElementById('data3-1'), 'ucdc');
                    var myYData = ['2017.10', '2017.11', '2017.12', '2018.01', '2018.02', '2018.03', '2018.04', '2018.05', '2018.06', '2018.07'];
                    var myData = [0, 200, 400, 600, 200, 500, 100, 600, 230, 110];
                    if (statisticData.length > 0) {
                        myYData = new Array();
                        myData = new Array();
                        for (var i = 0; i < statisticData.length; i++) {
                            myYData.push(statisticData[i].tjTime);
                            myData.push(parseInt(statisticData[i].total12345));
                        }
                    }
                    var syMonthCase =myData[myData.length-2].toString();
                    var byMonthCase =myData[myData.length-1].toString();
                    if(syMonthCase != ''){
                        var html = '上月：';
                        for(var x=0;x<syMonthCase.length;x++){
                            html +='<span>'+syMonthCase.substring(x,x+1)+'</span>';
                        }
                        $("#syMonthCase").html(html);
                    }
                    if(byMonthCase != ''){
                        var html = '本月：';
                        for(var j=0;j<byMonthCase.length;j++){
                            html +='<span>'+byMonthCase.substring(j,j+1)+'</span>';
                        }
                        $("#byMonthCase").html(html);
                    }

                    var option = {
                        grid: {
                            x: 60,
                            y: 60,
                            x2: 60,
                            y2: 30
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'line'
                            }
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: false,
                            data:myYData,
                            axisLabel: {
                                textStyle: {
                                    fontSize: 15
                                }
                            }
                        },
                        yAxis: {
                            type: 'value',
                            name: '月工单量(条)',
                            nameTextStyle: {color: '#fff'},
                            axisLabel: {
                                textStyle: {
                                    fontSize: 15
                                }
                            }
                        },
                        series: [{
                            data:myData,
                            type: 'line',
                            symbol: 'none',
                            areaStyle: {
                                normal: {
                                    color: ['rgba(73,217,254,0.3)']
                                }
                            },
                            smooth: true,
                            color: ['rgba(73,217,254,0.3)']
                        }]
                    };
                    myChart.setOption(option);
                }
            });
            setTimeout('statisticCaseByDate()', 60000);
        }

        /**
         * @title 工单统计 基于本周统计
         * @description 统计当日数据后推6天数据数据统计
         * @author bys
         */
        function statisticCaseByWeek(){
            $.ajax({
                type: "post",
                url: "${ctx}/fore/index/statistic_statisticCaseByWeek.action",
                success: function (data) {
                    var statisticData = eval('(' + data + ')');
                    //console.log(data);
                    var myChart = echarts.init(document.getElementById('data3-2'), 'ucdc');
                    var myYData = ['1.24', '1.25', '1.26', '1.27', '1.28', '1.29', '1.30'];
                    var myData = [900, 800, 1100, 700, 950, 990, 930];
                    var maxDate = [1000, 900, 1200, 800, 1050, 1090, 1030];
                    if (statisticData.length > 0) {
                        myYData = new Array();
                        myData = new Array();
                        maxData = new Array();
                        for (var i = 0; i < statisticData.length; i++) {
                            myYData.push(statisticData[i].tjTime);
                            myData.push(parseInt(statisticData[i].total12345));
                            maxData.push(parseInt(statisticData[i].vjcount));
                        }
                    }
                    var dayCase =myData[myData.length-1].toString();
                    if(dayCase != ''){
                        var html = '今日：';
                        for(var j=0;j<dayCase.length;j++){
                            html +='<span>'+dayCase.substring(j,j+1)+'</span>';
                        }
                        $("#dayCase").html(html);
                    }

                    var option = {
                        grid: {
                            top: 60,
                            left: '3%',
                            right: '4%',
                            bottom: 5,
                            containLabel: true
                        },
                        color: ['#0ca9f2'],
                        tooltip: {
                            trigger: 'axis',

                            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                            },
                            formatter: function(params) {
                                var res = params[0].name+'<br/>';
                                var myseries = option.series;
                                res +="呼入量："+params[1].data+'<br/>';
                                res +="工单量："+params[0].data+'<br/>';
                                return res;
                            }
                        },
                        xAxis: [{
                            type: 'category',
                            data: myYData,
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLabel: {
                                textStyle: {
                                    fontSize: 15
                                }
                            }
                        }, {
                            // 辅助 x 轴
                            type: 'category',
                            show:false,
                            data: myYData,

                        }],
                        yAxis: [{
                            type: 'value',
                            name: '日工单量(条)',
                            nameTextStyle: {color: '#fff'},
                            axisLabel: {
                                textStyle: {
                                    fontSize: 15
                                }
                            }
                        }],
                        series: [{
                            // 辅助系列
                            type: 'bar',
                            silent: true,
                            xAxisIndex: 1,
                            itemStyle: {
                                normal: {
                                    color: 'rgba(38, 200, 247, 0.5)',
                                    barBorderRadius: [10, 10, 0, 0]
                                }
                            },
                            barWidth: 26,
                            data:maxData
                        }, {
                            type: 'bar',
                            barWidth: 26,
                            data:myData,
                            itemStyle: {
                                normal: {
                                    barBorderRadius: [10, 10, 0, 0]
                                }
                            }
                        }]
                    };
                    myChart.setOption(option);
                }
            });
            setTimeout('statisticCaseByWeek()', 60000);
        }

        /**
         * @title 电话统计
         * @description 统计电话 接通率 和 满意率
         * @author bys
         */
        function statisticCaseByPhone(){
            $.ajax({
                type: "post",
                url: "${ctx}/fore/index/statistic_statisticCaseByPhone.action",
                success: function (data) {
                    var statisticData = eval('(' + data + ')');
                    var myChart = echarts.init(document.getElementById('data7-1'), 'ucdc');
                    var myDatas = [{
                        value: 90,
                        name: '满意率'
                    }];
                    var jtDatas = [{
                        value: 90,
                        name: '接通率'
                    }];

                    if (statisticData.length > 0) {
                        myDatas = [{
                            value: statisticData[0].manYiLv12345,
                            name: '满意率'
                        }];
                        jtDatas = [{
                            value: statisticData[0].jieTongLv12345,
                            name: '接通率'
                        }];
                    }
                    var   option = {
                        series: [{
                            min:60,
                            max:100,
                            name: '业务指标',
                            type: 'gauge',
                            center: ['25%', '50%'],
                            radius: '70%',
                            title: {
                                offsetCenter: [0, '100%'],
                                textStyle: {
                                    fontSize: 21,
                                    color: '#c7fbfc'
                                }
                            },
                            detail: {
                            	offsetCenter: [0, '65%'],
                                formatter: '{value}%'
                            },
                            axisLine: { // 坐标轴线
                                lineStyle: { // 属性lineStyle控制线条样式
                                    color: [
                                        [0.5, '#fca13f'],
                                        [0.75, '#5ab1ef'],
                                        [1, '#00ba90']
                                    ],
                                    width: 20
                                }
                            },
                            data: jtDatas
                        }, {
                            min:60,
                            max:100,
                            name: '业务指标',
                            type: 'gauge',
                            radius: '70%',
                            center: ['75%', '50%'],
                            title: {
                                offsetCenter: [0, '100%'],
                                textStyle: {
                                    fontSize: 21,
                                    color: '#c7fbfc'
                                }
                            },
                            detail: {
                            	offsetCenter: [0, '65%'],
                                formatter: '{value}%'
                            },
                            axisLine: { // 坐标轴线
                                lineStyle: { // 属性lineStyle控制线条样式
                                    color: [
                                        [0.5, '#fca13f'],
                                        [0.75, '#5ab1ef'],
                                        [1, '#00ba90']
                                    ],
                                    width: 20
                                }
                            },
                            data:myDatas
                        }]
                    };
                    // 使用刚指定的配置项和数据显示图表。
                    myChart.setOption(option);
                }
            });
        }

        /**
         * @title 24小时电话峰谷图 
         * @description 统计工单所属类型的平均办处时间 相对标准值的统计
         * @author bys
         */
        function workCountOf24Hours(){
            $.ajax({
                type: "post",
                url: "${ctx}/fore/index/statistic_workCountOf24Hours.action?selectTime="+$("#selectTime").val(),

                success: function (data) {
                    var statisticData = eval('(' + data + ')');
                    var myChart = echarts.init(document.getElementById('data2'), 'ucdc');
                    var myYData;
                    var myBaseData = [3, 16, 20, 6, 2, 5, 12, 3];
                    var myBaseData2 = [3, 16, 20, 6, 2, 5, 12, 3];
                    if (statisticData.length > 0) {
                        myYData = new Array();
                        myBaseData = new Array();
                        myBaseData2 = new Array();
                        for (var i = 0; i < statisticData.length; i++) {
                            myYData.push(statisticData[i].xTime);
                                var a=parseInt(statisticData[i].yNum);
                        	    if(a<0){
                                    myBaseData.push(0);
                                }else{
                                    myBaseData.push(parseInt(statisticData[i].yNum));
                                    myBaseData2.push(parseFloat(statisticData[i].bfb));	
                                }
 
                        }
                    }

                    var option = {
                        legend: [{
                            data: ['来电量'],
                            align: 'left',
                            right: 150
                        },
                            {
                                data: ['接通率百分比%'],
                                align: 'left',
                                right: 10
                            },
                        ],
                        tooltip: [{
                            trigger: 'axis',
                            formatter: function(params) {
                                var res = params[0].name+'<br/>';
                                var myseries = option.series;
                                res +="来电数："+params[0].data+'<br/>';
                                res +="接通率："+params[1].data+'%<br/>';
                                return res;
                            },
                            axisPointer: {
                                type: 'shadow'
                            }
                        },

                        ],
                        xAxis: {
                            data: myYData,
                            type: 'category',
                            axisLabel: {
                                textStyle: {
                                    fontSize: 15
                                }
                            }
                        },
                        yAxis: [{
                            name:'来电量',
                        	type: 'value'
                        },{
                            //min: 40,
                            name:'接通百分比',
                            type: 'value',
                            axisLabel:{formatter:'{value} %'}
                        }
                        ],
                        /* grid: {
                            left: '0%',
                            right: '0%',
                            top:'10%',
                            bottom: '3%',
                            containLabel: true
                     	}, */
                        series: [{
                            name: '来电量',
                            type: 'line',
                            /* stack: 'one', */
                            /* barWidth: 26,  */
                            data:myBaseData,
                            color: ['#2e9c8b']
                        },
                            {
                                name: '接通率百分比%',
                                type: 'line',
                                /* stack: 'one', */
                                /* barWidth: 26,  */
                                yAxisIndex: 1,
                                data:myBaseData2,
                                color: ['#9C2C50']
                            }
                        ]
                    };
                    myChart.setOption(option);
                }
            });
            setTimeout('workCountOf24Hours()', 300000);
        }

        /**
         * @title 处置部门统计
         * @description 基于八大网格统计各个网格处理工单数量
         * @author bys
         */
        function statisticCaseByDept(){
            $.ajax({
                type: "post",
                url: "${ctx}/fore/index/statistic_statisticCaseByDept.action",
                success: function (data) {
                    var statisticData = eval('(' + data + ')');
                    //console.log("------------");
                    //console.log(statisticData);
                    var myChart = echarts.init(document.getElementById('data6'), 'ucdc');
                    var myYData = ['双塔街道', '沧浪街道沧浪\n沧浪', '平江街道', '司法局', '区城管'];
                    var myBaseData = [580, 580, 580, 580, 580];
                    var maxData = [600, 600, 600, 600, 600];
                    var max = Math.max.apply(Math,myBaseData);
                    if (statisticData.length > 0) {
                        myYData = new Array();
                        myBaseData = new Array();
                        for (var i = 0; i < statisticData.length; i++) {
                        	var len = statisticData[statisticData.length-i-1].deptName;
                        	console.log(len.length);
                        	if(len.length>6){
                        		var newstr = '';
                        		for(var j=0;j<len.length;j+=6){
                        			var tmp=len.substring(j, j+6);
                        	        newstr+=tmp+'\n';
                        		}
                        		len = newstr.substring(0, newstr.length-1);
                        	}
                            myYData.push(len);
                            myBaseData.push(parseInt(statisticData[statisticData.length-i-1].deptValue));
                        }
                        max = Math.max.apply(Math,myBaseData);
                        for (var j = 0; j < statisticData.length; j++) {
                            maxData.push(max);
                        }
                    }

                    var option = {
                   		grid: {
                               left: '-10%',
                               right: '5%',
                               top:'2%',
                               bottom: '1%',
                               containLabel: true
                        },
                        xAxis: {
                            type: 'value',
                            axisLabel: {
                                textStyle: {
                                    fontSize: 15
                                }
                            }
                        },
                        yAxis: {
                            type: 'category',
                            data:myYData,
                            axisTick : {
                                show:false

                            },
                            axisLine: {
                                show:false,
                                lineStyle:{
                                    color:'#aaa'
                                }
                            },
                            axisLabel: {
                            	'interval':0,
                            	margin:100,
                            	textStyle: {
                                    fontSize: 15,
                                    align:'left',
                                    baseline:'middle'
                                }
                            }
                        },
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                            }
                        },
                        series: [
                        	/* { // For shadow  
                            type: 'bar',
                            itemStyle: {
                                normal: {
                                    color: '#003574',
                                    barBorderRadius: [6, 0, 0, 6]
                                }
                            },
                            barGap: '-100%',
                            barCategoryGap: '40%',
                            data:maxData,
                            animation: false,
                            barWidth: 12
                        },  */{
                            type: 'bar',
                            data: myBaseData,
                            barWidth: 12,
                            itemStyle: {
                                normal: {
                                    barBorderRadius: 6,
                                    color: ['#07a3e9']
                                }
                            }
                        }]
                    };
                    myChart.setOption(option);
                }
            });
        }

        /**
         * @title 归口类型统计
         * @description 基于归口类型统计各个类型工单数量
         * @author bys
         */
        function statisticCaseByGkType(){
            $.ajax({
                type: "post",
                url: "${ctx}/fore/index/statistic_statisticCaseByGkType.action",
                success: function (data) {
                    var statisticData = eval('(' + data + ')');
                    var myChart = echarts.init(document.getElementById('data8'), 'ucdc');
                    var myYData = ['交通出行', '民生服务', '民政社区', '住房保障', '劳动人事', '商贸经济', '医疗卫生','城乡建设'];
                    var myBaseData = [900, 900, 900, 900, 900, 900, 900,900];
                    if (statisticData.length > 0) {
                        myYData = new Array();
                        myBaseData = new Array();
                        for (var i = 0; i < statisticData.length; i++) {
                            myYData.push(statisticData[i].typeName);
                            myBaseData.push(parseInt(statisticData[i].typeValue));
                        }
                    }

                    var option = {
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            top: '10%',
                            containLabel: true
                        },
                        color: ['#0ca9f2'],
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                            }
                        },
                        xAxis: [{
                            type: 'category',
                            data:myYData,
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLabel: {
                                textStyle: {
                                    fontSize: 15,
                                },
                                interval: 0 
                            }
                        }],
                        yAxis: [{
                            type: 'value',
//                            name: '个',
                            nameTextStyle: {color: '#fff'},
                            axisLabel: {
                                textStyle: {
                                    fontSize: 15
                                }
                            }
                        }],
                        series: [{
                            type: 'bar',
                            barWidth: 26,
                            data:myBaseData,
                            itemStyle: {
                                normal: {
                                    barBorderRadius: [10, 10, 0, 0]
                                }
                            }
                        }]
                    };
                    myChart.setOption(option);
                }
            });
        }

        /**
         * @title 受理渠道统计
         * @description 基于受理渠道统计各个渠道工单数量
         * @author bys
         */
        function statisticCaseBySlSource(){
            $.ajax({
                type: "post",
                url: "${ctx}/fore/index/statistic_statisticCaseBySlSource.action",
                success: function (data) {
                    var statisticData = eval('(' + data + ')');
                    var myChart = echarts.init(document.getElementById('data9'), 'ucdc');
                    var myYData = ['寒山闻钟','电话', '网站', '微信', '手机app', '邮件',  '其他'];
                    var myBaseData = [
                    	{
                    		value:2,
                    		name:'寒山闻钟'
                    	},
	                    {
	                        value: 6,
	                        name: '电话'
	                    },
                        {
                            value: 1,
                            name: '网站'
                        },
                        {
                            value: 1,
                            name: '微信'
                        },
                        {
                            value: 0,
                            name: '手机app'
                        },
                        {
                            value: 0,
                            name: '邮件'
                        },
                       /* {
                            value: 0,
                            name: '短信'
                        },*/
                        {
                            value: 0,
                            name: '其他'
                        }
                    ];
                    if (statisticData.length > 0) {
                        myYData = new Array();
                        myBaseData = new Array();
                        for (var i = 0; i < statisticData.length; i++) {
                            myYData.push(statisticData[i].typeName);
                            var d = {
                                value: parseInt(statisticData[i].typeValue),
                                name: statisticData[i].typeName,
                                itemStyle:{
                                    normal:{
                                         label:{
                                             show: true,
                                         },
                                         labelLine: {
                                             show: true
                                         }
                                    }
                                }
                            };
                            myBaseData.push(d);
                        }
                    } 

                    var option = {
                        tooltip : {
                            trigger: 'item',
                            formatter: "{b} : {c} ({d}%)"
                        },
                        legend: {
                            right:50,
                            top:70,
                            height:200,
                            itemWidth:8,
                            itemHeight:8,
                            itemGap:10,
                            textStyle:{
                                color: '#fff',
                                fontSize:16
                            },
                            orient:'vertical',
                            data:myYData
                        },
                        calculable : true,
                        color: [ '#FF2F3C','#7A378B', '#ff6600','#5e88b4', '#00FF33','#3300FF', '#E61ABD','#00FFFF','#FFFF00'],
                        series : [
                            {
                                type:'pie',
                                radius : [50, 100],
                                center : ['40%', '50%'],
                                roseType : 'radius',
                                label: {
                                    normal: {
                                        show: true,
                                        textStyle: {
                                            fontSize: 15,
                                            color: ['#ffffff']
                                        }
                                    },
                                    emphasis: {
                                        show: true
                                    }
                                },
                                lableLine: {
                                    normal: {
                                        show: false
                                    },
                                    emphasis: {
                                        show: true
                                    }
                                },
                                data:myBaseData
                            }

                        ]
                    }
                    var opt = option.series[0];
                    lineHide(opt);
                    //数据为零时隐藏线段
                    function lineHide(opt) {
                        jQuery.each(opt.data, function (i, item) {
                            if (item.value == 0) {
                                item.itemStyle.normal.labelLine.show = false;
                                item.itemStyle.normal.label.show = false;
                            }
                        });
                    }
                    myChart.setOption(option);
                }
            });
        }

        /**
         * @title 指挥坐席监控
         * @description 指挥坐席监控
         * @author bys
         */
        function statisticSeatByState(){
            $.ajax({
                type: "post",
                url: "${ctx}/fore/index/statistic_statisticSeatByState.action",
                success: function (data) {
                    var statistic = eval('(' + data + ')');

                    var jtl = statistic.jtl;
                    var lds = statistic.lds;
                    var jts = statistic.jts;
                    var sssq = statistic.sssq;

                    $("#jtl").html(jtl);
                    $("#lds").html(lds);
                    $("#jts").html(jts);
                    $("#sssq").html(sssq);
                    if(statistic.classLeader){
						$("#classLeader").text("值班长："+statistic.classLeader);
					}
					if(statistic.groupLeader){
						$("#groupLeader").text("组长："+statistic.groupLeader); 
					}
					
                    var statisticData = statistic.seatDatas;
                    var zgZx = 0;
                    var wZx = 0;
                    if (statisticData.length > 0) {
                        for (var i = 0; i < statisticData.length; i++) {
                            var stateCss = 'state-stop';
                            var subStatus = statisticData[i].subStatus;
                           switch (parseInt(statisticData[i].seatState)){
                               case 0://未在线
                                   wZx++;
                                   stateCss = 'state-stop';
                                   break;
                               case 1://示忙
                                       if(parseInt(subStatus) == 102){//未登录
                                           wZx++;
                                           stateCss = 'state-stop';
                                       }else {
                                           zgZx++;
                                           stateCss = 'state-busy';
                                       }
                                   break;
                               case 2://示闲
                                   zgZx++;
                                   stateCss = 'state-ready';
                                   break;
                               case 3://应答
                                   if((parseInt(subStatus) ==315) || (parseInt(subStatus) == 316) || (parseInt(subStatus) == 317)) {//示忙
                                       stateCss = 'state-busy';
                                   }else {
                                       stateCss = 'state-on';
                                   }
                                   zgZx++;
                                   break;
                               case 4://示忙
                                   zgZx++;
                                   stateCss = 'state-busy';
                                   break;
                           }
                            var  seat = document.getElementById(statisticData[i].seatNum);
                            removeClass(seat,"state-stop");
                            removeClass(seat,"state-busy");
                            removeClass(seat,"state-ready");
                            removeClass(seat,"state-on");
                            toggleClass(seat,stateCss);
                            $("#zgZx").html(zgZx+"<span>个</span></h4>");
                            $("#wZx").html(wZx+"<span>个</span></h4>");
                        }
                    }
                }
            });
            setTimeout('statisticSeatByState()', 5000);
        }
        
       
        /**
         *舆情详情
         */
        function showDetail(rowId){
        	$('.modal-x').slideUp(200);        	
        	$.ajax({
        		url:"${ctx}/jsp/PUBLICOPINION_LASTESTINFO/getYuQingDetail.action",
        		data:{
        			"id":rowId
        		},
        		success: function (data) {
        			var parseData = eval('(' + data + ')');
        			//console.log(parseData);
        			var title = parseData[0].title;
        			var createtime = parseData[0].createtime;
        			var sourceUrl = parseData[0].sourceUrl;
        			var author = parseData[0].author;
        			var content = parseData[0].content;
        		    var html = '<div><span class="YqTitle">'+title+'</span></div>'+
        		    			'<div><span class="YqAuthor">作者:&nbsp;&nbsp;'+author+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;时间:&nbsp;&nbsp;'+createtime+'</span></div>'+
        		    			'<div><span class="YqsourceUrl">地址:&nbsp;&nbsp;'+sourceUrl+'</span></div>'+
        		    			'<div><p class="Yqcontent">&nbsp;&nbsp;&nbsp;&nbsp;'+content+'</p></div>';
        			yuqingDetail.innerHTML = html;
        		}
        	});
        	$('.modal-x').slideDown(200);
        }
        

        /**
         *舆情数据请求
         */
        function publicOpinion() {
            var deptId = '';
            $.ajax({
                url: "${ctx}/jsp/PUBLICOPINION_LASTESTINFO/getLastestInfo.action",
                data:{
                    "deptId" : deptId
                },
                success: function (data) {
                    $("#yqTab").empty();
                    var parseData = eval('(' + data + ')');
                    var html = '';
                    for (var i = 0; i < parseData.length; i++) {
                        var title = parseData[i].title;
                        var levelId = (parseData[i].levelId == "-1") ? "敏&nbsp;&nbsp;&nbsp;感" : "非敏感";
                        var lastPubTime = parseData[i].lastPubTime;
                        var id = parseData[i].id;
                        if(parseData[i].levelId == '-1'){
                            html +='<tr><td><span class="state-2" style=" background:rgba(255, 0, 0, 0.62);">' 
                            + levelId + '</span></td><td><span>' + lastPubTime+ 
                            '</span><a onclick="showDetail(\''+id+'\');"><p>' + title + '</p></a></td></tr>';
                        }else {
                            html +='<tr><td><span class="state-1" style=" background:#2e9c8b;">'
                            + levelId + '</span></td><td><span>' + lastPubTime+ 
                            '</span><a onclick="showDetail(\''+id+'\');"><p>' + title + '</p></a></td></tr>';
                        }

                    }
                    $("#demo1").html(html);
                    $("#demo2").html(html);
                    var speed = 50;
                    var MyMar = setInterval(Marquee, speed);
                    demo.onmouseover = function () {
                        clearInterval(MyMar);
                    };
                    demo.onmouseout = function () {
                        MyMar = setInterval(Marquee, speed);
                    }
                }
            });
        }

        /**
         * @throws Exception
         * @title 舆情信息统计
         * @description 舆情信息统计
         * @author bys
         */
        function statisticYqByGpKey(){
            $.ajax({
                type: "post",
                url: "${ctx}/fore/index/statistic_statisticYqByGpKey.action",
                success: function (data) {
                    var statisticData = eval('(' + data + ')');
                    var myChart = echarts.init(document.getElementById('data4-1'), 'ucdc');
                    var lendData = ['环境', '住宿', '门票', '景点'];
                    var myYData = ['2018-01-30', '2018-01-31', '2018-02-01', '2018-02-03', '2018-02-04', '2018-02-05', '2018-02-06'];
                    var seriesData = [];
                    if (statisticData.length > 0) {
                        lendData = new Array();
                        myYData = new Array();

                        myYData.push(statisticData[0].date6);
                        myYData.push(statisticData[0].date5);
                        myYData.push(statisticData[0].date4);
                        myYData.push(statisticData[0].date3);
                        myYData.push(statisticData[0].date2);
                        myYData.push(statisticData[0].date1);
                        myYData.push(statisticData[0].today);

                        seriesData = new Array();
                        for (var i = 0; i < statisticData.length; i++) {
                            lendData.push(statisticData[i].typeName);
                            var d =  new Array();
                            d.push(statisticData[i].date6Value);
                            d.push(statisticData[i].date5Value);
                            d.push(statisticData[i].date4Value);
                            d.push(statisticData[i].date3Value);
                            d.push(statisticData[i].date2Value);
                            d.push(statisticData[i].date1Value);
                            d.push(statisticData[i].todayValue);
                            var serieData ={
                                name: statisticData[i].typeName,
                                type: 'line',
                                /* stack: '总量', */
                                data:d,
                                markPoint: {
                                    data: [{
                                        type: 'max',
                                        name: '最大值'
                                    }]
                                },lineStyle: {
                                    normal: {
                                    width: 1,
                                    color: "#fff"
                                    }
                                    }
                            };

                            seriesData.push(serieData);
                        }
                    }

                    var option = {
                        legend: {
                            data: lendData,
                            right: 10
                        },

                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'line'
                            }
                        },
                        grid: {
                            left: 10,
                            right: 40,
                            bottom: 10,
                            containLabel: true
                        },
                        xAxis: {
                            type: 'category',
                            boundaryGap: false,
                            data: myYData
                        },
                        yAxis: {
                            type: 'value',
//                                name:'m',
                            nameTextStyle:{color:'#fff'}
                        },
                        series: seriesData,

                    };
                    myChart.setOption(option);
                }
            });
        }

        function hasClass(ele, cls) {
            return ele.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
        }

        //如果存在(不存在)，就删除(添加)一个样式
        function toggleClass(ele,cls){
            if(hasClass(ele,cls)){
                removeClass(ele, cls);
            }else{
                addClass(ele, cls);
            }
        }

        //为指定的dom元素添加样式
        function addClass(ele, cls) {
            if (!this.hasClass(ele, cls)) ele.className += " " + cls;
        }
        //删除指定dom元素的样式
        function removeClass(ele, cls) {
            if (hasClass(ele, cls)) {
                var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
                ele.className = ele.className.replace(reg, " ");
            }
        }

        //系统时间
        function startTime() {
            var today = new Date();
            var years = today.getFullYear();
            var months = today.getMonth();
            var d = today.getDate();
            var h = today.getHours();
            var m = today.getMinutes();
            var s = today.getSeconds();
            months = months + 1;
            months = checkTime(months);
            d = checkTime(d);
            m = checkTime(m);
            s = checkTime(s);
            var weekday = new Array(7);
            weekday[0] = "星期日";
            weekday[1] = "星期一";
            weekday[2] = "星期二";
            weekday[3] = "星期三";
            weekday[4] = "星期四";
            weekday[5] = "星期五";
            weekday[6] = "星期六";
            var w = weekday[today.getDay()];
            document.getElementById('ShowTime').innerHTML = years + "年" + months + "月" + d + "日 " + w + " " + h + ":" + m + ":" + s;
            t = setTimeout('startTime()', 1000);
        }

        function checkTime(i) {
            if (i < 10) {
                i = "0" + i
            }
            return i
        }

        function search_caseinfo(){
            workCountOf24Hours();

        }
    </script>
</head>
<body>
<div class="wallpaper">
    <!--头部-->
    <div class="left_time" id="ShowTime">2018年1月10日 星期一 09:30:36</div>
    <div class="caption">
        <img src="${ctx}/bigScreen/ldzx/images/logo.png" align="absmiddle" style="padding-right: 50px">姑苏区社会综合治理联动平台
        <img class="top_line" src="${ctx}/bigScreen/ldzx/images/top-line.png"/></div>
    <div class="right_nav">
        <a class="present" href="${ctx}/fore/index/statistic_getPage.action">首页</a>
        <a class="present" href="${ctx}/fore/index/index_manager.action">管理</a>
    </div>
    <!--/头部 end-->
    <!--内容-->
    <div class="bmfw">
        <div class="area area1">
            <!--菜单栏-->
            <div class="nav">
                <ul>
                    <li>
                        <a href="${ctx}/fore/index/statistic_getPage.action?pageFrom=1">联动中心</a>
                    </li>
                    <li>
                        <a href="${ctx}/fore/index/statistic_getPage.action?pageFrom=2">社会治安综合治理</a>
                    </li>
                    <li class="active">
                        <a href="##">12345便民服务</a>
                    </li>
                    <li>
                        <a href="${ctx}/fore/index/statistic_getPage.action?pageFrom=4">事件部件网格化</a>
                    </li>
                </ul>
            </div>
            <!--菜单栏 EDN-->
            <div class="item item1">
                <div class="title">工单类型统计</div>
                <div id="data1" class="echatrs-box"></div>
            </div>

            <div class="item item2">
                <div class="title">处置部门Top5</div>
                <div id="data6" class="echatrs-box"></div>
            </div>
            <div class="item item3">
                <div class="title">工单量统计</div>
                <div class="total">
                    <ul>
                        <li id="syMonthCase">上月：<span>7</span><span>5</span><span>6</span></li>
                        <li id="byMonthCase">本月：<span>3</span><span>1</span><span>3</span></li>
                        <li id="dayCase">今日：<span>3</span><span>0</span><span>0</span></li>
                    </ul>
                </div>
                <div id="data3-1" style="width: 660px; height: 250px; display: inline-block;"></div>
                <div id="data3-2" style="width: 520px ;height: 250px; display: inline-block;"></div>
            </div>

        </div>
        <div class="area area2">
            <div class="item item4">
                <div class="title">舆情信息统计</div>
                <div id="data4-1" class="echatrs-box"></div>
                <div class="item4-item">
                    <div style="width: 100%;height: 60px;background: rgba(15, 39, 108, 0.6);border-top-left-radius: 8px;border-top-right-radius: 8px;font-size: 24px;line-height: 60px;box-sizing: border-box;padding-left: 29px;">舆情信息</div>
                    <div class="box_move" id="demo" style="height:400px;">
                        <table id="demo1" style="position: relative;" class="list-yq" cellpadding="0" cellspacing="0">

                        </table>
                        <table id="demo2" style="position: relative;" class="list-yq" cellpadding="0" cellspacing="0">

                        </table>
                    </div>
                </div>
            </div>

            <div class="item item5">
                <div class="title">指挥坐席监控</div>
                <table>
                    <tr>
                        <td>
                        <div><span id="seat_0" class="state state-ready">01</span></td></div>
                        </td>
                        <td colspan="6" rowspan="2">
                      		<div class="state-box">
                                  <p id="classLeader">值班长：</p>
                                  <p style="margin-left:100px;" id="groupLeader">组长：</p>                                    
                            </div>
                            <div class="state-box">
                                <ul>
                                    <%--0:未在线 1(4):示忙 2:示闲 3:应答--%>
                                    <%--<li><span class="icon state-ready"></span>准备中</li>--%>
                                    <li><span class="icon state-ready"></span>示闲</li>
                                    <li><span class="icon state-busy"></span>示忙</li>
                                    <li><span class="icon state-on"></span>应答</li>
                                    <li><span class="icon state-stop"></span>未在线</li>
                                </ul>
                            </div>
                        </td>
                        <td><span id="seat_1" class="state state-stop">02</span></td>
                    </tr>

                    <tr>
                        <td><span id="seat_2" class="state state-ready">03</span></td>
                        <td><span id="seat_3" class="state state-ready">04</span></td>
                    <tr>
                        <td><span id="seat_4" class="state state-stop">05</span></td>
                        <td><span id="seat_5" class="state state-on">06</span></td>
                        <td><span id="seat_6" class="state state-on">07</span></td>
                        <td colspan="2"></td>
                        <td><span id="seat_7" class="state state-on">08</span></td>
                        <td><span id="seat_8" class="state state-stop">09</span></td>
                        <td><span id="seat_9" class="state state-on">10</span></td>
                    </tr>

                    <tr>
                        <td><span id="seat_10" class="state state-on">11</span></td>
                        <td><span id="seat_11" class="state state-on">12</span></td>
                        <td><span id="seat_12" class="state state-ready">13</span></td>
                        <td colspan="2"></td>
                        <td><span id="seat_13" class="state state-ready">14</span></td>
                        <td><span id="seat_14" class="state state-busy">15</span></td>
                        <td><span id="seat_15" class="state state-on">16</span></td>
                    </tr>
                    <tr>
                        <td><span id="seat_16" class="state state-on">17</span></td>
                        <td><span id="seat_17" class="state state-busy">18</span></td>
                        <td><span id="seat_18" class="state state-stop">19</span></td>
                        <td colspan="2"></td>
                        <td><span id="seat_19" class="state state-busy">20</span></td>
                        <td><span id="seat_20" class="state state-busy">21</span></td>
                        <td><span id="seat_21" class="state state-on">22</span></td>
                    </tr>

                    <tr>
                        <td><span id="seat_22" class="state state-ready">23</span></td>
                        <td><span id="seat_23" class="state state-stop">24</span></td>
                        <td><span id="seat_24" class="state state-on">25</span></td>
                        <td colspan="2"></td>
                        <td><span id="seat_25" class="state state-stop">26</span></td>
                        <td><span id="seat_26" class="state state-ready">27</span></td>
                        <td><span id="seat_27" class="state state-stop">28</span></td>
                    </tr>
 					<tr>
                        <td><span id="seat_28" class="state state-ready">29</span></td>
                        <td><span id="seat_29" class="state state-on">30</span></td>
                        <td><span id="seat_30" class="state state-stop">31</span></td>
                        <td colspan="2"></td>
                        <td></td>
                        <td></td>
                        <td></td>
                   </tr>
                </table>
                <div class="text">
                    <ul>
                        <li>
                            <h6>在岗坐席</h6>
                            <h4 id="zgZx"></h4></li>
                        <li>
                            <h6>实时诉求量</h6>
                            <h4 id="sssq"></h4>
                            <h5></h5></li>
                        <li>
                            <h6>实时接通率</h6>
                            <h4 id="jtl"></h4></li>
                    </ul>
                    <ul>
                        <li>
                            <h6>电话坐席</h6>
                            <h4>31<span>个</span></h4></li>
                        <li>
                            <h6>未在线</h6>
                            <h4 id="wZx"></h4></li>
                        <li>
                            <h6>来电总量</h6>
                            <h4 id="lds"></h4></li>
                        <li>
                            <h6>接通总量</h6>
                            <h4 id="jts"></h4></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="area area3">

            <div class="item item6">
                <div class="title">24小时电话峰谷图 <input id="selectTime" style="color:gray"
                                                    value="<fmt:formatDate  value='${selectTime}' pattern="yyyy-MM-dd"/>"
                                                    type="text" class="Wdate" onfocus="WdatePicker({dateFmt:'yyyy-MM-dd'})">
                    <a href="###" class="btn_01" onclick="search_caseinfo()" >查询<b></b></a>&nbsp;
                </div>
                <div id="data2" class="echatrs-box box2"></div>
            </div>

            <div class="item item7">
                <div class="title">电话统计</div>
                <div id="data7-1" class="echatrs-box box2"></div>
            </div>

            <div class="item item8">
                <div class="title">归口类型统计</div>
                <div id="data8" class="echatrs-box box3"></div>
            </div>

            <div class="item item9">
                <div class="title">受理渠道</div>
                <div id="data9" class="echatrs-box box3"></div>
            </div>
        </div>

    </div>
    <!--内容 END-->
    <!-- 舆情详情窗口start -->
    <div class="modal-x">
        <div class="close">×</div>
        <table id="yuqingDetail" style="position: relative;" cellpadding="0" cellspacing="0">
    	</table>
    </div>
    
    <!-- 舆情详情窗口end -->
</div>
<script>
    demo2.innerHTML = demo1.innerHTML;
    function Marquee() {
        if (demo2.offsetTop - demo.scrollTop <= 0)
            demo.scrollTop -= demo1.offsetHeight;
        else {
            demo.scrollTop++;
        }
    }
</script>
<script>
$('.state').bind("click", function(){
	var seatNum=$(this).attr("id");
	
layer.open({
        type : 2,
		title: false,
        area : [ '420px', '240px' ],
		offset: ['160px', '2060px'],
        content : '${ctx}/fore/index/statistic_alertInfo.action?seatNum='+seatNum 
        //content : 'popup_kf.jsp' 
    });
});
</script>
</body>
</html>
