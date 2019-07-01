<template>
<div class="grid">
    
       <theader :active="4"></theader>
        <!--/head end-->
        <div id="hv-wrapper">
                <div class="box box1">
                        <div class="container">
                                <i class="icon1"></i>
                                <i class="icon2"></i>
                                <i class="icon3"></i>
                                <i class="icon4"></i>
                                <div class="contentWrapper">
                                        <div class="mainTitle">网格工单事项列表</div>
                                        <div class="conditionBox">
                                                <ul id="a3_ul">
                                                        <li>
                                                                <div class="a3_div_head">工单编号</div>
                                                                <div class="a3_div_head">所属网格</div>
                                                                <div class="a3_div_head">职能事项</div>
                                                        </li>
                                                </ul>
                                                <div id="xpsx_div" class="content_div">
                                                        <ul id="a3_ul_2">

                                                        </ul>
                                                </div>
                                        </div>
                                </div>
                        </div>

                        <div class="box box2">
                                <div class="container">
                                        <i class="icon1"></i>
                                        <i class="icon2"></i>
                                        <i class="icon3"></i>
                                        <i class="icon4"></i>
                                        <div class="contentWrapper">
                                                <div class="mainTitle">网格内事项处理占比</div>
                                                <div class="conditionBox">
                                                        <div id="echart_A2" style="width:100%;height: 252px;"></div>
                                                </div>
                                        </div>
                                </div>
                        </div>

                        <div class="box box3">
                                <div class="container">
                                        <i class="icon1"></i>
                                        <i class="icon2"></i>
                                        <i class="icon3"></i>
                                        <i class="icon4"></i>
                                        <div class="contentWrapper">
                                                <div class="mainTitle">网格内工单数排名</div>
                                                <div class="conditionBox">
                                                        <div id="echart_F2" style="width: 100%;height: 252px;">

                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>

                        <div class="box box4">
                                <div class="container">
                                        <i class="icon1"></i>
                                        <i class="icon2"></i>
                                        <i class="icon3"></i>
                                        <i class="icon4"></i>
                                        <div class="contentWrapper">
                                                <div class="mainTitle">网格内工单类型统计</div>
                                                <div class="conditionBox">
                                                        <div id="echart_C1" style="width: 100%;height: 205px;"></div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <div class="box box5">
                                <div class="container">
                                        <i class="icon1"></i>
                                        <i class="icon2"></i>
                                        <i class="icon3"></i>
                                        <i class="icon4"></i>
                                        <div class="contentWrapper">
                                                <div class="mainTitle">网格员上报工单排名</div>
                                                <div class="conditionBox">
                                                        <div id="echart_G2" style="width: 100%;height: 220px;"></div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <div class="box box6">
                                <div class="container">
                                        <i class="icon1"></i>
                                        <i class="icon2"></i>
                                        <i class="icon3"></i>
                                        <i class="icon4"></i>
                                        <div class="contentWrapper">
                                                <div class="mainTitle">工单状态统计</div>
                                                <div class="conditionBox">
                                                        <div id="echart_A1" style="width:100%;height:290px;"></div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <div class="box video">
                                <div id="mapdiv">

                                </div>
                                <!-- <input type="text" id="lnglatStr" style="color: #000;" value="" /> -->
                                <div class="people_box">
                                        <div class="sub-car-box_1">
                                                <div class="tree-1 tree-2" style="overflow:auto;width: 100%;height:85%;">

                                                        <ul id="userDept" class="easyui-tree">
                                                        </ul>
                                                </div>
                                                <div style="width: 100%;height: 16%;position: absolute;bottom: 0;">
                                                        <a class="userDw" onclick="usersLocation()">定位</a>
                                                </div>
                                        </div>

                                </div>
                                <div class="nav_show" id="nav_2l">
                                        <a href="javascript:;" @click="bntClick(1)"></a>
                                        <a href="javascript:;" @click="bntClick(2)"></a>
                                        <a href="javascript:;" @click="bntClick(3)">网格</a>
                                </div>
                        </div>
                </div>
        </div>

        <div id="op_erateCaozuo" style="display: none">
                <!-- 代码 开始 -->
                <div class="main">
                        <div class="title">网格工单事项详情</div>
                        <div class="close"><a onclick="closeTanchu() ">×</a></div>
                        <div class="approval" id="ListDetail">

                        </div>
                </div>
                <!-- 代码 结束 -->
        </div>

        <div id="Caozuo" style="display: none">
                <!-- 代码 开始 -->
                <div class="main">
                        <div class="title" id="cuntitle">村信息详情</div>
                        <div class="close"><a onclick="closeWangGe() ">×</a></div>
                        <div class="approval" id="cunThings">
                                <p><span>网格办主任：</span></p>
                                <p><span>联系方式：</span>无</p>
                                <p><span>网格数量：</span>无</p>
                                <p><span>兼职网格员数量：</span>无</p>
                                <p><span>网格长数量：</span>无</p>
                                <p><span>网格总户数：</span>无</p>
                                <p><span>网格总人数：</span>无</p>
                                <p><span>重点人员数量：</span>无</p>
                                <p><span>出租房数量：</span>无</p>
                                <p><span>关怀对象数量：</span>无</p>
                                <p><span>村面积大小（公顷）：</span>无</p>
                        </div>
                </div>
                <!-- 代码 结束 -->
        </div>
        <div id="wujiaoxing" style="display: none">
                <!-- 代码 开始 -->
                <div class="main">
                        <div class="title">送桥镇详情</div>
                        <div class="close"><a onclick="closeyankouzhen() ">×</a></div>
                        <div class="approval" id="yangkouzhen">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;送桥镇是江苏省如东县西部地区中心集镇，西接204国道。黄海大桥，海防公路、马丰公路、 沿公路、洋兴公路、新洋一路、新洋二路、新洋三路、新洋四路、张埭一路、张埭公路,岔河、栟茶运河、马丰河构成该镇发达的水陆运输网络。全镇人口7.84万人，面积126平方公里。24个村委会（浒路、甜港、古坳、耿庄、新坝、双灶、闸西、池塘头、斜港、同文、潮港、双墩、刘环、楼窑、六份头、三江口、王鸭、香橼树、张埭、油坊口、杨楝园、周新庄、林场、农场）。
                                化学园区是经江苏省环保厅、南通市人民政府依法批准设立并重点发展的“危险化学品生产储存专门区域”。园区集中供热、工业供水、污水处理、特种消防、11万伏变电站等基础设施配套完善，为项目进区落户提供了良好的承载条件。园区得天独厚的自然条件、便捷的交通区位、配套的基础设施为精细化工产业的可持续发展提供了广阔的空间，是江浙沪地区最具竞争力的精细化工园区之一。园区为一个集精细化学工业及配套产业为一体，具备完善配套的物流体系、密切合作的产学研体系、高关联度的产业链体系，以医药、农药、新材料等为主体的“高科技、专业化、生态型、园林式”精细化工产业园区。
                        </div>
                </div>
                <!-- 代码 结束 -->
        </div>
        <div id="vedio_div" style="display: none">
                <!-- 代码 开始 -->
                <div class="main">
                        <div class="title"></div>
                        <div class="close"><a onclick="closevedio() ">×</a></div>
                        <div class="approval">
                                <div class="vediodiv" id="videoBox1">
                                        <video id="my-video1" class="video-js" autoplay="autoplay" width="400px" height="250px" muted controls>
                    <!-- <source src="http://193.112.101.157:8080/hls/test.m3u8" type="application/x-mpegURL" /> -->
                    <source id="v1" src="" >

                    </source>
                </video>
                                </div>
                                <div class="vediodiv" id="videoBox2">
                                        <video id="my-video2" class="video-js" controls width="400px" height="250px" muted controls preload="auto">
                    <source id="v2" src="" > </source>
                </video>
                                </div>
                                <!--   <video class="video" width="400" height="250" poster="images/vediobg.jpg" controls>
                   <source src="rdyhjjkfq043.mp4" type="video/mp4">
                   </source>
                   <source src="rdyhjjkfq043.ogv" type="video/ogg">
                   </source>
                   <source src="rdyhjjkfq043.webm" type="video/webm">
                   </source>
                   <object width="" height="" type="application/x-shockwave-flash" data="rdyhjjkfq043.swf">
                       <param name="movie" value="rdyhjjkfq043.swf" />
                       <param name="flashvars" value="autostart=true&amp;file=rdyhjjkfq043.swf" />
                   </object>
               </video>-->

                        </div>
                </div>
                <!-- 代码 结束 -->
        </div>
</div>
</template>

<script>
import cundata from '../module/cun.js';
export default {
        data(){
                return {
                        map:null,
                        d:[]
                }
        },
        methods:{
                bntClick(index) {
                        var map=this.map;
                        map.clearOverLays();
                        if (_CarTrack) {
                                _CarTrack.stop();
                                _CarTrack.clear();
                        }
                        // map.centerAndZoom(new T.LngLat(120.97333757316215, 32.52218043222892), 12);
                        ykArea();
                        //ykArea();
                        if (index == 2) {
                                var icon = new T.Icon({
                                        iconUrl: "img/view.png",
                                        iconSize: new T.Point(22, 22),
                                        iconAnchor: new T.Point(22, 22)
                                });
                                //                var json_data = [[121.078959, 32.549203], [121.097166, 32.544266], [121.054712, 32.542748], [121.058001, 32.549473]];
                                var json_data = findSPDWList();
                                //                alert(json_data);
                                //var iparr = [["http://192.168.11.97", "http://192.168.11.98"], ["http://192.168.12.202", "http://192.168.12.204"], ["http://192.168.40.2", //"http://192.168.40.3"], ["http://192.168.40.9", "http://192.168.40.207"]]

                                //var iparr=[["rtmp://localhost:1935/hls/mystream0","rtmp://localhost:1935/hls/mystream1"],["rtmp://localhost:1935/hls/mystream2","rtmp://localhost:1935/hls/mystream3"],["rtmp://localhost:1935/hls/mystream4","rtmp://localhost:1935/hls/mystream5"],["rtmp://localhost:1935/hls/mystream6","rtmp://localhost:1935/hls/mystream7"]]
                                var iparr = [
                                        ["rtsp://admin:841122@192.168.15.110:554/cam/realmonitor?channel=2&subtype=0", "rtsp://admin:841122@192.168.15.110:554/cam/realmonitor?channel=1&subtype=0"],
                                        ["rtsp://admin:841122@192.168.15.105:554/cam/realmonitor?channel=2&subtype=0", "rtsp://admin:841122@192.168.15.105:554/cam/realmonitor?channel=1&subtype=0"],
                                        ["rtsp://admin:841122@192.168.15.100:554/cam/realmonitor?channel=2&subtype=0", "rtsp://admin:841122@192.168.15.100:554/cam/realmonitor?channel=1&subtype=0"],
                                        ["rtsp://admin:841122@192.168.15.115:554/cam/realmonitor?channel=2&subtype=0", "rtsp://admin:841122@192.168.15.115:554/cam/realmonitor?channel=1&subtype=0"]
                                ];
                                for (var i = 0; i < json_data.length; i++) {

                                        var userJson = json_data[i];
                                        if (userJson.length > 0) {
                                                console.log(userJson.length);

                                                (function (i) {
                                                        var mark = new T.Marker(new T.LngLat(userJson[0], userJson[1]), {
                                                                icon: icon
                                                        });
                                                        map.addOverLay(mark);
                                                        mark.addEventListener("click", function () {
                                                                console.log(iparr[i])
                                                                var iWidth = 610; //弹出窗口的宽度;
                                                                var iHeight = 500; //弹出窗口的高度;
                                                                //window.screen.height获得屏幕的高，window.screen.width获得屏幕的宽
                                                                var iTop = (window.screen.height - 30 - iHeight) / 2; //获得窗口的垂直位置;
                                                                var iLeft = (window.screen.width - 10 - iWidth) / 2; //获得窗口的水平位置;
                                                                //                                findSPDWList(carTitle,carType,locationDeptId);

                                                                window.open("view.html", "视频监控", 'height=' + iHeight + ',,innerHeight=' + iHeight + ',width=' + iWidth + ',innerWidth=' + iWidth + ',top=' + iTop + ',left=' + iLeft + ', toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no')
                                                                window.localStorage.vidio1 = iparr[i][0];
                                                                //window.localStorage.vidio2 = iparr[i][1];

                                                                //window.open("view.html", "视频监控", 'height=' + iHeight + ',,innerHeight=' + iHeight + ',width=' + iWidth + ',innerWidth=' + iWidth + ',top=' + iTop + ',left=' + iLeft + ', toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no')
                                                                //$("#vedio_div").show();

                                                                // window.localStorage.vidio1 = iparr[i][0];
                                                                // window.localStorage.vidio2 = iparr[i][1];

                                                                //$("#v1").attr("src","rdyhjjkfq043.mp4");
                                                                // $("#v2").attr("src",window.localStorage.vidio2);
                                                                // var htmls='';
                                                                // var vidio1=iparr[i][0];
                                                                // var vidio2=iparr[i][1];
                                                                // htmls+=' <video id="v1" class="video-js" autoplay="autoplay" muted controls preload="auto"  width="506px" height="328px" >';
                                                                // htmls+=' <source src="'+vidio1+'" >'
                                                                // htmls+='</video>'
                                                                // $("#videoBox1").html(htmls);
                                                                // var htmls2='';
                                                                // var vidio2="rdyhjjkfq043.mp4"
                                                                // htmls2+=' <video id="v2" class="video-js" autoplay="autoplay" muted controls preload="auto"  width="506px" height="328px" >';
                                                                // htmls2+=' <source src="'+vidio2+'" >'
                                                                // htmls2+='</video>'
                                                                // $("#videoBox2").html(htmls2);
                                                                // var myPlayer = videojs('my-video1');
                                                                // videojs("my-video1").ready(function(){
                                                                //     var myPlayer = this;
                                                                //     myPlayer.play();
                                                                // });
                                                                // var myPlayer2 = videojs('my-video2');
                                                                // videojs("my-video2").ready(function(){
                                                                //     var myPlayer2 = this;
                                                                //     myPlayer2.play();
                                                                // });

                                                        }, this);

                                                })(i);

                                        }
                                }
                                $(".people_box").fadeOut(200)
                        } else {
                                $(".people_box").fadeIn(200)
                        }

                }

        },
        mounted() {
                //        window.urlWGZL = "http://222.93.106.183:8082/";
                window.visualization = "http://58.220.24.15:8081/zhsq/app/";
                //window.visualization="http://192.168.2.5:8020/zhrd/app/";
                //window.urlWGZL = "http://localhost:8080/";
                window.urlWGZL = "http://58.220.24.15:8081/";
                setInterval(nowTime_wgzl, 1000);
                // window.urlWGZL = "/fec"
                var map; //地图对象
                var zoom = 12; //地图级别
                var drivingRoute; //驾车路线规划对象
                var obj; //搜索结果
                var startLngLat; //起点经纬度
                var endLngLat; //终点经纬度
                var startTool; //起点标注工具
                var endTool; //终点标注工具
                var _CarTrack; //轨迹对象
                var startIcon = "http://lbs.tianditu.gov.cn/images/bus/start.png"; //起点图标
                var endIcon = "http://lbs.tianditu.gov.cn/images/bus/end.png"; //终点图标
                var infoWin = null;
                this.$nextTick(() => {
                        onLoad();
                })
                var that=this;
                function onLoad() {
                        that.map = new T.Map('mapdiv');
                        map=that.map;
                        map.centerAndZoom(new T.LngLat(119.294549, 32.66081), zoom);
                        map.setStyle('indigo');
                        document.getElementById("op_erateCaozuo").style.display = "none";
                        document.getElementById("Caozuo").style.display = "none";

                        // 请求工单列表
                        $.ajax({
                                url: window.urlWGZL + "/zhrd/jsp/caseInfo/selectBigScreen_caseinfoList.action",
                                dataType: 'json',
                                type: 'post',
                                async: false,
                                data: {},
                                error: function () {
                                        console.log("网格治理权限获取数据出错");
                                },
                                success: function (data) {
                                        console.log(data)
                                        var arr = data.datas;
                                        for (var i = 0; i < arr.length; i++) {
                                                var html = "";
                                                html += '<li onClick=getXiangQing("' + arr[i].id + '")>'
                                                html += '<div class="a3_div_content">' + arr[i].caseno + '</div>'
                                                html += '<div class="a3_div_content">' + transferSpace(arr[i].deptName) + '</div>'

                                                html += '<div class="a3_div_content">' + transferSpace(arr[i].znsx) + '</div>'
                                                html += '</li>'
                                                var $html = $(html).appendTo("#a3_ul_2");
                                        }
                                }
                        })

                        $('#xpsx_div').myScroll({
                                speed: 40, //数值越大，速度越慢 black indigo
                                rowHeight: 42 //li的高度
                        });

                        userDeptTree();
                        getweater();
                        echartA2();
                        echart_F2();
                        echartA1();
                        echartC1();
                        echartG2();
                        ykArea();

                        var cp = new T.CoordinatePickup(map, {
                                callback: getLngLat
                        })
                        cp.addEvent();
                }

                function getLngLat(lnglat) {
                        document.getElementById("lnglatStr").value = lnglat.lng.toFixed(6) + "," + lnglat.lat.toFixed(6);
                }

                function getXiangQing(id) {
                        $.ajax({
                                url: window.urlWGZL + "/zhrd/jsp/caseInfo/selectBigScreen_getCaseDetail.action",
                                dataType: 'json',
                                type: 'post',
                                async: false,
                                data: {
                                        caseId: id
                                },
                                error: function () {
                                        console.log("网格治理权限获取数据出错");
                                },
                                success: function (data) {
                                        $("#ListDetail").empty();
                                        var arr = data.datas;
                                        var html = "";
                                        html += '<p><span>工单编号：</span>' + arr.caseno + '</p>'
                                        html += '<p><span>上报时间：</span>' + arr.reportTime + '</p>'
                                        html += '<p><span>所处节点：</span>' + arr.deptName + '</p>'
                                        html += '<p><span>工单来源：</span>' + arr.origin + '</p>'
                                        html += '<p><span>职能事项：</span>' + arr.eventComponent + '</p>'
                                        html += '<p><span>上报人：</span>' + arr.reportPerson + '</p>'
                                        html += '<p><span>发生地址：</span>' + arr.location + '</p>'
                                        html += '<p style="line-height:40px"><span>问题描述：</span>' + arr.problem + '</p>'
                                        $("#ListDetail").html(html);
                                }
                        })
                        document.getElementById("op_erateCaozuo").style.display = "block";
                }
                //获取摄像头数据接口--------------------------------------------------------------------
                var Items2 = new Array;

                function findSPDWList() {
                        var locationArr = new Array;
                        $.ajax({
                                url: window.urlWGZL + "/zhrd/fore/index/index_findSPDWList.action",
                                dataType: 'json',
                                type: 'post',
                                async: false,
                                data: {},
                                error: function () {
                                        console.log("摄像头信息获取数据出错");
                                },
                                success: function (data) {
                                        /* console.log("摄像头数据")
                                         console.log(data)*/
                                        debugger;
                                        Items2 = data;
                                        $.each(Items2, function (i2, item2) {
                                                var location = new Array;
                                                location.push(item2.longitude);
                                                location.push(item2.latitude);
                                                locationArr.push(location);
                                        })
                                }
                        })
                        console.log(locationArr);
                        return locationArr;
                }

                /* $(function(){
                     findSPDWList();
                 })*/

                //以下为时间刷新方法----------------------------------------------------------
                function nowTime_wgzl() {
                        //获取年月日
                        var time = new Date();
                        var year = time.getFullYear();
                        var month = time.getMonth();
                        var day = time.getDate();
                        var xingqi = time.getDay(); //获取当前星期X(0-6,0代表星期天)

                        //获取时分秒
                        var h = time.getHours();
                        var m = time.getMinutes();
                        var s = time.getSeconds();

                        //检查是否小于10
                        h = check(h);
                        m = check(m);
                        s = check(s);
                        var y = year;
                        month = check(month + 1);
                        var d = check(day)
                        $("#nowTime_wgzl>span:first-child").text(y + "年" + month + "月" + d + "日");
                        $("#nowTime_wgzl>span:nth-child(3)").text(h + " : " + m + " : " + s);
                        if (xingqi == 0) {
                                $("#nowTime_wgzl>span:nth-child(2)").text("星期日");
                        } else if (xingqi == 1) {
                                $("#nowTime_wgzl>span:nth-child(2)").text("星期一");
                        } else if (xingqi == 2) {
                                $("#nowTime_wgzl>span:nth-child(2)").text("星期二");
                        } else if (xingqi == 3) {
                                $("#nowTime_wgzl>span:nth-child(2)").text("星期三");
                        } else if (xingqi == 4) {
                                $("#nowTime_wgzl>span:nth-child(2)").text("星期四");
                        } else if (xingqi == 5) {
                                $("#nowTime_wgzl>span:nth-child(2)").text("星期五");
                        } else if (xingqi == 6) {
                                $("#nowTime_wgzl>span:nth-child(2)").text("星期六");
                        }
                }
                //时间数字小于10，则在之前加个“0”补位。
                function check(i) {
                        //方法一，用三元运算符
                        var num;
                        i < 10 ? num = "0" + i : num = i;
                        return num;
                }

                //送桥镇区域网格
                function ykArea() {
                        var iconurl0 = 'img/pointOffline.jpg'; //正常节点
                        var iconurl1 = 'http://lbs.tianditu.gov.cn/images/bus/start.png'; //起点
                        var iconurl2 = 'http://lbs.tianditu.gov.cn/images/bus/end.png'; //终点
                        var icon = new T.Icon({
                                iconUrl: "img/view.png",
                                iconSize: new T.Point(20, 34),
                                iconAnchor: new T.Point(10, 25)
                        });

                        var icon0 = new T.Icon({
                                iconUrl: iconurl0,
                                iconSize: new T.Point(1, 1),
                                iconAnchor: new T.Point(1, 3)
                        });
                        var icon1 = new T.Icon({
                                iconUrl: iconurl1,
                                iconSize: new T.Point(44, 34),
                                iconAnchor: new T.Point(12, 31)
                        });
                        var icon2 = new T.Icon({
                                iconUrl: iconurl2,
                                iconSize: new T.Point(44, 34),
                                iconAnchor: new T.Point(12, 31)
                        });

                        var style = {
                                color: "#00fff3",
                                weight: 3,
                                opacity: 0.5,
                                fillOpacity: 0.1,
                                lineStyle: "dashed"
                        };
                      
                        // var dmzxzb = [{
                        //                 xay: [121.019222, 32.476527],
                        //                 name: "甜港村",
                        //                 wgbzr: "王彬",
                        //                 tel: "15371788911",
                        //                 wgnum: "7",
                        //                 jzwgynum: "17",
                        //                 wgznum: "7",
                        //                 hunum: "1412",
                        //                 rennum: "4002",
                        //                 pointrennum: "14",
                        //                 roomnum: "21",
                        //                 carenum: "0",
                        //                 cuisize: "653"
                        //         }

                        // ]
                        var dmzxzb= cundata;
                        var all_areajson=require('../module/geometry.json')
                                for (var k = 0; k < all_areajson.length; k++) {
                                //如果有区域坐标信息，画出此行政区的多边形。
                                        var points = [];
                                        var iconMaker = [];
                                        if (all_areajson[k].length > 0) {
                                                for (var i = 0; i < all_areajson[k].length; i++) {
                                                        var point = all_areajson[k][i];

                                                        iconMaker[i] = new T.Marker(new T.LngLat(all_areajson[k][i][0], all_areajson[k][i][1]), {
                                                                icon: icon0
                                                        });
                                                        map.addOverLay(iconMaker[i]);
                                                        points.push(new T.LngLat(all_areajson[k][i][0], all_areajson[k][i][1]));
                                                }

                                        }
                                        //创建线对象 区域面积画线
                                        var line = new T.Polyline(points, style);
                                        //mapline = line;
                                        //向地图上添加面
                                        map.addOverLay(line);
                                        //创建面对象 区域面积背景 setBorderLine
                                        var polygon = new T.Polygon(points, style);
                                        map.addOverLay(polygon);

                                        (function (k) {
                                                polygon.addEventListener('click', function () {
                                                        var html = "";
                                                        html += '<p><span>网格办主任：</span>' + dmzxzb[k].detail + '</p>'
                                                        
                                                        $("#cunThings").html(html)
                                                        document.getElementById("Caozuo").style.display = "block";
                                                        $("#cuntitle").text(dmzxzb[k].name);

                                                })

                                        })(k)

                                        // 添加
                                        var latlng = new T.LngLat(dmzxzb[k].centralX, dmzxzb[k].centralY);
                                        var label = new T.Label({
                                                text: dmzxzb[k].XZQMC,
                                                position: latlng,
                                                offset: new T.Point(-10, 0)
                                        });
                                        label.setBorderLine(0)
                                        label.setBackgroundColor("#ffffff00");
                                        label.setFontColor("#ffffff");
                                        map.addOverLay(label);
                                        (function (k) {
                                                label.addEventListener('click', function () {
                                                        //alert(dmzxzb[k].name)
                                                        map.clearOverLays();
                                                        if (_CarTrack) {
                                                                _CarTrack.clear();
                                                        }
                                                        getSecondaryGridDetail(dmzxzb[k].XZQMC)

                                                })

                                        })(k)
                                        // 添加小红点
                                        var icon = new T.Icon({
                                                iconUrl: "./img/redPoint.png",
                                                iconSize: new T.Point(15, 15),

                                        });

                                        var weizhi = new T.LngLat(dmzxzb[k].centralX, dmzxzb[k].centralY);
                                        var marker = new T.Marker(weizhi, {
                                                icon: icon
                                        });
                                        map.addOverLay(marker);
                                        //五角星
                                        var icon1 = new T.Icon({
                                                iconUrl: "img/star.png",
                                                iconSize: new T.Point(35, 35)
                                        });
                                        var wujiaoxing = new T.Marker(new T.LngLat(121.013083, 32.539222), {
                                                icon: icon1
                                        });
                                        map.addOverLay(wujiaoxing);
                                        wujiaoxing.addEventListener('click', function () {
                                                $("#wujiaoxing").show();

                                        })

                                }
                        

                }
                //定位人员
                function usersLocation() {
                        map.clearOverLays();

                        if (_CarTrack) {
                                _CarTrack.clear();
                        }
                        //ykArea();
                        var nodes = $('#userDept').tree('getChecked');
                        console.log("-------nodes-------");
                        console.log(nodes);
                        var userId = [];
                        var userText = [];
                        var userPhone = [];
                        var userpic = [];
                        var usergridName = [];

                        for (var i = 0; i < nodes.length; i++) {
                                if (!nodes[i].children) {
                                        userId.push(nodes[i].id);
                                        userText.push(nodes[i].text);
                                        userPhone.push(nodes[i].mobile);
                                        userpic.push(nodes[i].user_pic);
                                        usergridName.push(nodes[i].gridName);
                                }
                        }
                        console.log(userpic);
                        //创建图片对象
                        var icon = new T.Icon({
                                iconUrl: "img/fens.png",
                                iconSize: new T.Point(44, 44),
                                iconAnchor: new T.Point(22, 22)
                        });
                        var icon2 = new T.Icon({
                                iconUrl: "img/green.png",
                                iconSize: new T.Point(44, 44),
                                iconAnchor: new T.Point(22, 22)
                        });
                        var icon3 = new T.Icon({
                                iconUrl: "img/yellow.png",
                                iconSize: new T.Point(44, 44),
                                iconAnchor: new T.Point(22, 22)
                        });
                        var icon4 = new T.Icon({
                                iconUrl: "img/blue.png",
                                iconSize: new T.Point(44, 44),
                                iconAnchor: new T.Point(22, 22)
                        });
                        var icon5 = new T.Icon({
                                iconUrl: "img/zise.png",
                                iconSize: new T.Point(44, 44),
                                iconAnchor: new T.Point(22, 22)
                        });
                        var iconarr = [];
                        iconarr.push(icon);
                        iconarr.push(icon2);
                        iconarr.push(icon3);
                        iconarr.push(icon4);
                        iconarr.push(icon5);
                        // var json_data = [[119.431650,32.486520],[119.419000,32.481720],[119.420790,32.468680],[119.435810,32.473490],[119.442030,32.470120]];
                        var json_data = [];
                        for (var j = 0; j < userId.length; j++) {
                                var userid = userId[j];
                                $.ajax({
                                        url: window.visualization + "getLocationByUserId2.action?para=userId=" + userid,
                                        dataType: "json",
                                        async: false,
                                        type: "post",
                                        data: {},
                                        success: function (data) {
                                                console.log(data)
                                                var style = {
                                                        color: "#00fff3",
                                                        weight: 3,
                                                        opacity: 0.5,
                                                        fillOpacity: 0.1,
                                                        lineStyle: "dashed"
                                                };
                                                var points = [];
                                                var wgpoints = [];
                                                if (data.area.length > 0) {
                                                        var wgarea = data.area;

                                                        for (var j = 0; j < wgarea.length; j++) {
                                                                wgpoints.push(new T.LngLat(wgarea[j][0], wgarea[j][1]));
                                                        }

                                                        //创建线对象 区域面积画线
                                                        var wgline = new T.Polyline(wgpoints, style);

                                                        map.addOverLay(wgline);
                                                }
                                                json_data.push(data.array[0]);
                                                map.centerAndZoom(new T.LngLat(json_data[json_data.length - 1][0], json_data[json_data.length - 1][1]), 13);
                                        }
                                });
                        }
                        console.log(json_data)

                        for (var i = 0; i < json_data.length; i++) {

                                var userJson = json_data[i];
                                if (userJson.length > 0) {
                                        console.log(userJson.length);

                                        (function (i) {
                                                var mark = new T.Marker(new T.LngLat(userJson[0], userJson[1]), {
                                                        icon: iconarr[1]
                                                });
                                                map.addOverLay(mark);
                                                var infoWin1 = new T.InfoWindow();
                                                var img_pic = window.imgUrl + userpic[i];
                                                var sContent =
                                                        "<div style='margin:0px;width: 584px;'>" +
                                                        "<div >" +

                                                        "<div style='color:#000000;height: 200px;'>" +
                                                        "<div style='margin-right: 10px;width:100px;height:155px;display: inline-block;vertical-align: middle;'>" +
                                                        "<img src='" + img_pic + "' height='154' width='99'/>" +
                                                        "</div>" +
                                                        "<div style='display: inline-block;width: 229px;vertical-align: middle;'>" +
                                                        "<div style='line-height: 40px;'>" + usergridName[i] + "</div>" +
                                                        "<div  style='line-height: 40px;'>网格员：" + userText[i] + "</div>" +
                                                        "<div  style='line-height: 40px;'>电话：" + userPhone[i] + "</div>" +
                                                        "</div>" +
                                                        "</div>" +

                                                        "<div style='height: 36px;'><input style='width: 118px;height: 36px; text-align: center; background: #5596de;color: #FFF;border: none;display: inline-block;cursor: pointer;margin-right: 35px;margin-left: 89px;' type='button' value='查看轨迹'  onClick=\"lookup2(\'" + userId[i] + "\')\">" +

                                                        "</div>" +
                                                        "</div>" +
                                                        "</div>";
                                                infoWin1.setContent(sContent);
                                                //注册标注点的点击事件
                                                mark.addEventListener("click", function () {
                                                        mark.openInfoWindow(infoWin1);
                                                }, this);

                                        })(i);

                                }
                        }
                }

                function lookup2(i) {
                        debugger;
                        if (_CarTrack) {
                                _CarTrack.stop();
                                _CarTrack.clear();
                        }
                        var objarr = [];
                        $.ajax({
                                url: window.visualization + "getLocationByUserId2.action?para=userId=" + i,
                                dataType: "json",
                                async: false,
                                type: "post",
                                data: {},
                                success: function (data) {
                                        console.log(data.array)

                                        for (var i = 0; i < data.array.length; i++) {
                                                var obj = {};
                                                obj = {
                                                        lat: data.array[i][1],
                                                        lng: data.array[i][0]
                                                }
                                                objarr.push(obj);
                                        }

                                }
                        });
                        // var obj=[{lat:32.481720, lng:119.419000},{lat:32.481350, lng:119.421770},{lat:32.478450, lng:119.421410},{lat:32.478530, lng:119.419000}, {lat:32.477170, lng:119.418990}, {lat:32.474640, lng:119.422550}, {lat:32.475930, lng:119.422630}]
                        console.log(objarr)
                        var currimgs = "img/green.png";
                        // if(i=="0"){
                        //     currimgs="images/fens.png";
                        // } else if(i=="1"){
                        //     currimgs="images/green.png";
                        // }else if(i=="2"){
                        //     currimgs="images/yellow.png";
                        // }else if(i=="3"){
                        //     currimgs="images/blue.png";
                        // }else if(i=="4"){
                        //     currimgs="images/zise.png";
                        // }
                        _CarTrack = new T.CarTrack(map, {
                                interval: 5,
                                speed: 5,
                                dynamicLine: true,
                                Datas: objarr,
                                polylinestyle: {
                                        color: "#10A71B",
                                        weight: 200,
                                        opacity: 1
                                },
                                carstyle: {
                                        display: true,
                                        iconUrl: currimgs,
                                        width: 44,
                                        height: 44
                                }

                        })
                        _CarTrack.start();
                }
                // 关掉弹出框
                function closeTanchu() {
                        document.getElementById("op_erateCaozuo").style.display = "none";
                }

                window.closeWangGe=function() {
                        document.getElementById("Caozuo").style.display = "none";
                }

                function closeyankouzhen() {
                        document.getElementById("wujiaoxing").style.display = "none";
                }

                function closevedio() {
                        document.getElementById("vedio_div").style.display = "none";
                }

                function transferSpace(contentW) {
                        if (contentW == '' || contentW.trim().length == 0) {
                                return '- - - - -';
                        } else {
                                return contentW;
                        }
                }

                function getweater() {

                        $.ajax({
                                url: "http://wthrcdn.etouch.cn/weather_mini?city=如东",
                                dataType: "jsonp",
                                type: "post",
                                data: {

                                },
                                success: function (data) {
                                        console.log(data.data.forecast[0]);
                                        var forecast = data.data.forecast[0];
                                        var str = forecast.fengli,
                                                fengli = str.slice(9, 13);
                                        console.log(fengli);
                                        $("#nowTime_wgzl>span:nth-child(4)").text("最" + forecast.high);
                                        $("#nowTime_wgzl>span:nth-child(5)").text("最" + forecast.low);
                                        $("#nowTime_wgzl>span:nth-child(6)").text(forecast.fengxiang);
                                        $("#nowTime_wgzl>span:nth-child(7)").text(fengli);
                                        $("#nowTime_wgzl>span:nth-child(8)").text(forecast.type);

                                }
                        })
                }
                //人员数
                function userDeptTree() {
                        $.ajax({
                                url: window.visualization + "gridList2.action",
                                dataType: "json",
                                type: "post",
                                data: {

                                },
                                success: function (data) {
                                        console.log(data)

                                        var arr = data[0].datas;
                                        $('#userDept').tree({
                                                checkbox: true,
                                                data: arr

                                        });
                                }
                        });
                }
                //下级网格
                function getSecondaryGridDetail(deptName) {
                        var deptName = deptName;
                        $.ajax({
                                url: window.visualization + "getSecondaryGridDetail.action?para=deptName=" + deptName,
                                dataType: "json",
                                type: "post",
                                data: {

                                },
                                success: function (data) {
                                        console.log(data)
                                        var all_areajson = [];
                                        var dmzxzb = [];
                                        if (data.grids.length > 0) {
                                                for (var i = 0; i < data.grids.length; i++) {
                                                        all_areajson.push(data.grids[i]);
                                                        dmzxzb.push(data.info[i])
                                                }
                                        }
                                        var iconurl0 = 'img/pointOffline.jpg'; //正常节点
                                        var icon0 = new T.Icon({
                                                iconUrl: iconurl0,
                                                iconSize: new T.Point(1, 1),
                                                iconAnchor: new T.Point(1, 3)
                                        });

                                        var style = {
                                                color: "#00fff3",
                                                weight: 3,
                                                opacity: 0.5,
                                                fillOpacity: 0.1,
                                                lineStyle: "dashed"
                                        };
                                        for (var k = 0; k < all_areajson.length; k++) {
                                                //如果有区域坐标信息，画出此行政区的多边形。
                                                var points = [];
                                                var iconMaker = [];

                                                if (all_areajson[k].length > 0) {
                                                        for (var i = 0; i < all_areajson[k].length; i++) {
                                                                var point = all_areajson[k][i];

                                                                iconMaker[i] = new T.Marker(new T.LngLat(all_areajson[k][i][0], all_areajson[k][i][1]), {
                                                                        icon: icon0
                                                                });
                                                                map.addOverLay(iconMaker[i]);
                                                                points.push(new T.LngLat(all_areajson[k][i][0], all_areajson[k][i][1]));
                                                        }
                                                        // var first=$.parseJSON(all_areajson[0]);
                                                        // map.centerAndZoom(new T.LngLat(first[0][0],first[0][1]), 13);
                                                        map.centerAndZoom(new T.LngLat(all_areajson[0][0][0], all_areajson[0][0][1]), 13);
                                                }
                                                //创建线对象 区域面积画线
                                                var line = new T.Polyline(points, style);
                                                //mapline = line;
                                                //向地图上添加面
                                                map.addOverLay(line);
                                                //创建面对象 区域面积背景 setBorderLine
                                                var polygon = new T.Polygon(points, style);
                                                map.addOverLay(polygon);

                                                (function (k) {
                                                        polygon.addEventListener('click', function () {
                                                                var html = "";
                                                                var gridDirector = dmzxzb[k].gridDirector;
                                                                if (!dmzxzb[k].gridDirector) {
                                                                        gridDirector = "无";
                                                                }
                                                                var gridDirectorPhone = dmzxzb[k].gridDirectorPhone;
                                                                if (!dmzxzb[k].gridDirector) {
                                                                        gridDirectorPhone = "无";
                                                                }
                                                                var gridNo = dmzxzb[k].gridNo;
                                                                if (!dmzxzb[k].gridNo) {
                                                                        gridNo = "无";
                                                                }
                                                                var partTimegridsNames = dmzxzb[k].partTimegridsNames;
                                                                if (!dmzxzb[k].partTimegridsNames) {
                                                                        partTimegridsNames = "无";
                                                                }
                                                                var gridLeaders = dmzxzb[k].gridLeaders;
                                                                if (!dmzxzb[k].gridLeaders) {
                                                                        gridLeaders = "无";
                                                                }
                                                                var gridHouseholds = dmzxzb[k].gridHouseholds;
                                                                if (!dmzxzb[k].gridHouseholds) {
                                                                        gridHouseholds = "无";
                                                                }
                                                                var gridPeople = dmzxzb[k].gridPeople;
                                                                if (!dmzxzb[k].gridPeople) {
                                                                        gridPeople = "无";
                                                                }
                                                                var numberOfKeyPersonnel = dmzxzb[k].numberOfKeyPersonnel;
                                                                if (!dmzxzb[k].numberOfKeyPersonnel) {
                                                                        numberOfKeyPersonnel = "无";
                                                                }
                                                                var numberOfRentedRooms = dmzxzb[k].numberOfRentedRooms;
                                                                if (!dmzxzb[k].numberOfRentedRooms) {
                                                                        numberOfRentedRooms = "无";
                                                                }
                                                                var numberOfCareObjects = dmzxzb[k].numberOfCareObjects;
                                                                if (!dmzxzb[k].numberOfCareObjects) {
                                                                        numberOfCareObjects = "无";
                                                                }
                                                                var gridAreaSize = dmzxzb[k].gridAreaSize;
                                                                if (!dmzxzb[k].gridAreaSize) {
                                                                        gridAreaSize = "无";
                                                                }
                                                                $("#cuntitle").text(dmzxzb[k].deptName);
                                                                html += '<p><span>网格长：</span>' + gridDirector + '</p>'
                                                                html += '<p><span>联系方式：</span>' + gridDirectorPhone + '</p>'
                                                                html += '<p><span>网格编号：</span>' + gridNo + '</p>'
                                                                html += '<p><span>兼职网格员：</span>' + partTimegridsNames + '</p>'
                                                                // html += '<p><span>网格长数量：</span>' + gridLeaders + '</p>'
                                                                html += '<p><span>网格总户数：</span>' + gridHouseholds + '</p>'
                                                                html += '<p><span>网格总人数：</span>' + gridPeople + '</p>'
                                                                html += '<p><span>重点人员数量：</span>' + numberOfKeyPersonnel + '</p>'
                                                                html += '<p><span>出租房数量：</span>' + numberOfRentedRooms + '</p>'
                                                                html += '<p><span>关怀对象数量：</span>' + numberOfCareObjects + '</p>'
                                                                // html += '<p><span>村面积大小（公顷）：</span>' + gridAreaSize + '</p>'
                                                                $("#cunThings").html(html)
                                                                document.getElementById("Caozuo").style.display = "block";

                                                        })

                                                })(k)

                                                // 添加
                                                // var latlng = new T.LngLat(dmzxzb[k].xay[0], dmzxzb[k].xay[1]);
                                                // var label = new T.Label({
                                                //     text: dmzxzb[k].name,
                                                //     position: latlng,
                                                //     offset: new T.Point(-29, 0)
                                                // });
                                                // label.setBorderLine(0)
                                                // label.setBackgroundColor("#ffffff00");
                                                // label.setFontColor("#ffffff");
                                                // map.addOverLay(label);
                                                // (function (k) {
                                                //     label.addEventListener('click', function () {
                                                //         //alert(dmzxzb[k].name)
                                                //         map.clearOverLays();
                                                //         if(_CarTrack){
                                                //             _CarTrack.clear();
                                                //         }
                                                //         getSecondaryGridDetail(dmzxzb[k].name)
                                                //
                                                //
                                                //     })
                                                //
                                                // })(k)

                                        }
                                }
                        });
                }
        }
}
</script>

<style lang="less">
// @import '../css/main.css';
// @import '../css/wgzl.less';
@import '../js/easyui-1.4.4/themes/default/easyuiTree.css';
@import '../js/easyui-1.4.4/themes/icon.css';

/* .tdt-infowindow-content-wrapper {
    background-color: #1274d2;
} */
.grid{
        #a3_ul li{
		    line-height: 56px;
		    font-size: 18px;
		}
		.a3_div_head{
		
		    color: #00f5fe;
		    text-align: center;
		    display: inline-block;
		    width: 32%;
		}
		#a3_ul_2 li{
		    line-height: 42px;
		    font-size: 18px;
		}
		#a3_ul_2 li:hover{
			background: #1c318a;
			cursor: pointer;
		}
		.a3_div_content{
		
		    color: #ffffff;
		    text-align: center;
		    display: inline-block;
		    width: 32%;
		}
		.content_div{
		    height: 442px;
		    overflow: hidden;
			padding:0 25px;
		}
		.c2_div_head{
		
		    color: #00f5fe;
		    text-align: center;
		    display: inline-block;
		    width: 32%;
		}
		#c2_ul_2 li{
		    line-height: 53px;
		    font-size: 24px;
		}
		#h2_ul_2 li{
		    line-height: 53px;
		    font-size: 24px;
		}
		.c2_div_content{
		
		    color: #ffffff;
		    text-align: center;
		    display: inline-block;
		    width: 32%;
		}

#hv-wrapper .box1 {
	top: 0;
	left: 0;
	width: 520px;
	height: 562px;
}

#hv-wrapper .box2 {
	top: 580px;
	left: 0;
	width: 520px;
	height: 300px;
}

#hv-wrapper .box3 {
	top: 580px;
	left: 538px;
	width: 835px;
	height: 300px;
}
#hv-wrapper .box4 {
	top: 0;
	left: 1391px;
	width: 480px;
	height: 264px;
}

#hv-wrapper .box5 {
	top: 282px;
	left: 1391px;
	width: 480px;
	height: 280px;
}

#hv-wrapper .box6 {
	top: 580px;
	left: 1391px;
	width: 480px;
	height: 300px;
}
#hv-wrapper .video{
	top: 0;
	left: 538px;
	width: 835px;
	height: 562px;

	border-radius: 16px;
}

#mapdiv {
	width: 835px;
	height: 562px;
	background: #fff;
	border-radius: 16px;
	overflow: hidden;
}
#xpsx_div{
	width: 100%;
	height: 442px;
	margin: 0 auto;
	line-height: 56px; font-size: 28px; overflow: hidden;
}
#xpsx_div li{ height: 42px;}
.people_box {
	position: absolute;
	width: 160px;
	height: 420px;
	top: 60px;
	right: 24px;
	border-radius: 18px;
	z-index: 70000;
	background: #1274d2;
}
.userDw {
	position: absolute;
	bottom: 10px;
	background: #d6b506;
	padding: 5px 42px;
	border-radius: 44px;
	left: 12%;
	font-size: 14px;
	font-weight: bold;
}
.sub-car-box_1 {
	position: absolute;
	width: 90%;
	top: 20px;
	bottom: 0;
	left: 5%;
}
.tree-1::-webkit-scrollbar {/*滚动条整体样式*/
	width: 10px;     /*高宽分别对应横竖滚动条的尺寸*/
	height: 1px;
}
.tree-1::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
	background: #276eef;
}
.tree-1::-webkit-scrollbar-track {/*滚动条里面轨道*/
	-webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
	border-radius: 10px;
	background: #EDEDED;
}
.tree-2::-webkit-scrollbar {/*滚动条整体样式*/
	width: 1px;     /*高宽分别对应横竖滚动条的尺寸*/
	height: 10px;
}
.tree-2::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
	background: #276eef;
}
.tree-2::-webkit-scrollbar-track {/*滚动条里面轨道*/
	-webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
	border-radius: 10px;
	background: #EDEDED;
}
.nav_show{
	visibility: visible;
	position: absolute;
	width: 250px;
	bottom: 32px;
	left: 26px;
	overflow: visible;
	z-index: 70000;
}
.nav_show a {
	opacity: 1;
	transition: all .2s;
	font-weight: bold;
	color: #ccc;
	display: block;
	float: left;
	font-size: 18px;
	width:  46px;
	height: 67px;
	text-align: center;

	line-height: 60px;
	margin-left: 10px;

	/*border-radius: 50px;*/
}
.nav_show a:hover {
	color: #fff;
	font-size: 22px;
}
.nav_show a:nth-child(1){
	animation: nav_in .2s 0.15s forwards;
	/*background: #a72f2f;*/
	background: url("../img/grid.png") no-repeat;
	}
.nav_show a:nth-child(2) {
	animation: nav_in .2s 0.025s forwards;
	/*background: #a7219d;*/
	background: url("../img/viedo.png") no-repeat;
}
.nav_show a:nth-child(3) {
	animation: nav_in .2s 0.025s forwards;
	background: #10a71b;

}
#op_erateCaozuo,#Caozuo {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right:0;
    bottom:0;
    background: rgba(0,0,0,0.5);
    z-index: 99999;
}
.main {
	padding:20px 0;
	height:565px;
	background:#04236d;
	border-radius:20px;
	position:absolute;
	top:20%;
	left:25%;
	width:55%;
}
.main2 {
	padding: 20px 0;
	height: 615px;
	background: #04236d;
	border-radius: 20px;
	position: absolute;
	top: 20%;
	left: 25%;
	width: 72%;
}
.main .title{
	font-size: 22px;	
	text-indent:30px;
	border-bottom: 1px solid #1C318A;
	line-height: 60px;
}
.close a {
	position:absolute;
	top:14px;
	right:20px;
	font-size:40px;
	color:#fff;
	z-index:70003;
	cursor:pointer;
}
.close a:hover {
	color:#00f5fe
}
.approval{
	padding:20px 40px;
	height:450px;
	overflow: auto;
}
.approval::-webkit-scrollbar {
	display: none;
}
.approval p{
	line-height:40px;
	font-size: 18px;
}
.approval p span{
	line-height: 40px;
	font-size: 18px;
	color: #00f5fe;
}


}
body {
        background-color: #0b1956;
        position:relative;
}

.tdt-control-copyright {
        display: none
}

#wujiaoxing {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 99999;
}

#vedio_div {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 99999;
}

.vediodiv {
        display: inline-block;
        vertical-align: middle;
}

.video-js {
        width: 506px;
        height: 328px;
        margin-top: 98px;
}
</style>
