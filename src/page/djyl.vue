<template>
        <div class="djyl">
                <theader :active="0"></theader>
                 <div id="hv-wrapper">
        <div class="box box1">
            <div class="container">
                <i class="icon1"></i>
                <i class="icon2"></i>
                <i class="icon3"></i>
                <i class="icon4"></i>
                <div class="contentWrapper">
                    <div class="mainTitle">
                        <span class="box1Tab tabSelected">党建概况</span>
                        <span class="box1Tab">基本情况</span>
                    </div>
                    <div class="conditionBox">
                        <div class="box1TabPage">
                            <div id="djgk1">
                                <div class="title">党员
                                    <span class="title_color">4</span>
                                    <span class="title_color">2</span>
                                    <span class="title_color">3</span>
                                    <span class="title_color">7</span>&nbsp;个
                                </div>
                                <div class="title">党组织
                                    <span class="title_color">0</span>
                                    <span class="title_color">1</span>
                                    <span class="title_color">0</span>
                                    <span class="title_color">4</span>&nbsp;个
                                </div>
                            </div>
                            <div id="djgk2">
                                <div class="data">
                                    <div class="count">9个</div>
                                    <div class="sub">党委</div>
                                </div>
                                <div class="data">
                                    <div class="count">19个</div>
                                    <div class="sub">党总支</div>
                                </div>
                                <div class="data">
                                    <div class="count">76个</div>
                                    <div class="sub">党支部</div>
                                </div>
                            </div>
                        </div>
                        <div class="box1TabPage" style="display:none;">送桥镇位于如东县西北部的小送桥地区，区域总面积168平方公里，拥有24公里海岸线和广袤的滩涂。送桥镇与沿海经济开发区、小送桥旅游度假区实行“区镇一体化”管理，总人口约10万人。送桥镇先后荣获“江苏省创新型试点乡镇”“江苏省卫生镇”“江苏省特色景观名镇”和“江苏省信息化与工业化融合试验区”“江苏省新型工业化产业示范基地”“江苏省中小企业创业示范基地” “江苏省功能性高分子材料特色产业基地”“江苏省高分子材料科技产业园”等荣誉称号。2018年完成规模以上应税销售302亿元，同比增长28%；实现地区生产总值75亿元，同比增长7%；实现一般公共预算收入8.71亿元，同比增长10.6%；农村居民人均可支配收入22824元，同比增长9.1%。</div>
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
                    <div class="mainTitle">先进党组织、优秀共产党员展示</div>
                    <div class="conditionBox">
                        <div id="tabBar">
                            <div class="tab tabSelected">优秀共产党员</div>
                            <div class="tab">先进党组织</div>
                        </div>
                        <div class="tabContent" id="tabPerson">
                            <ul class="tabList">

                            </ul>
                        </div>
                        <div class="tabContent" id="tabBranch" style="display: none;">
                            <ul class="tabList">

                            </ul>
                        </div>
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
                    <div class="mainTitle">新时代文明实践活动</div>
                    <div class="conditionBox">
                        <div id="sliderBox1">
                            <div class="slider1">
                                <!--<div class="imgBox"><img src="./img/图片1.png"><div class="imgLabel">红船精神</div></div>-->
                            </div>
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
                    <div class="mainTitle">学习强国积分统计</div>
                    <div class="conditionBox">
                        <div id="jftj">
                            <div class="jftjHeader">
                                <div>组织</div>
                                <div>活跃学员</div>
                                <div>学员总数</div>
                                <div>总获得积分</div>
                                <div>参与度</div>
                                <div>人均积分</div>
                            </div>
                            <div class="jftjBody" id="jftjBody">
                                <ul>
                                </ul>
                            </div>
                        </div>
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
                    <div class="mainTitle">两学一做规定学习材料</div>
                    <div class="conditionBox" id="studyBook">
                        <ul id="lxyz">
                            <!-- <li class="lxyzItem">
                                   <span class="lxyzTitle">学习重要讲话一：中华民族近代以来最伟大的梦想</span>
                               </li>-->
                        </ul>
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
                    <div class="mainTitle">通知公告</div>
                    <div class="conditionBox" id="notice">
                        <ul id="noticeList">
                            <!-- <li class="noticeItem"><span class="noticeTitle">关于建立县委常委县人大常委会县政协党组主要负责同志县政府党员副县长党建工作联系点的通知</span></li> -->
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="box box7">
            <div class="container">
                <i class="icon1"></i>
                <i class="icon2"></i>
                <i class="icon3"></i>
                <i class="icon4"></i>
                <div class="contentWrapper">
                    <div class="mainTitle">党员志愿服务活动</div>
                    <div class="conditionBox">
                        <div id="sliderBox2">
                            <!-- <div>
                                    <img src="./img/96382678229385886.jpg">
                                    <div>党员志愿服务活动</div>
                                </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="box map">
            <div id="mapdiv"></div>
        </div>
    </div>
    <!--新时代文明实践活动弹框-->
    <div class="imgMask">
        <div class="imgModal">
            <div class="modalTitle">
                <div class="modalTitleText"></div>
                <a href="javascript:$('.imgMask').hide();" class="closeBtn">×</a>
            </div>
            <div class="modalContent">
                <!-- <img src="" alt="">
                    <div></div> -->
            </div>
        </div>
    </div>
    <!--两学一做规定学习材料弹框-->
    <div class="lxyzMask" style="display: none;">
        <div class="lxyzModal">
            <div class="modalTitle">
                <div class="modalTitleText"></div>
                <a href="javascript:$('.lxyzMask').hide();" class="closeBtn">×</a>
            </div>
            <div class="modalContent"></div>
        </div>
    </div>
    <!--通知公告弹框-->
    <div class="noticeMask" style="display: none;">
        <div class="noticeModal">
            <div class="modalTitle">
                <div class="modalTitleText"></div>
                <a href="javascript:$('.noticeMask').hide();" class="closeBtn">×</a>
            </div>
            <div class="modalContent"></div>
        </div>
    </div>
        </div>
</template>

<script>
export default {
        mounted(){
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

                function onLoad() {
                        $(".box1Tab").on("click", function() {
                        $(this).addClass("tabSelected").siblings().removeClass("tabSelected");
                        var i = $(this).index();
                        $(".box1TabPage:eq(" + i + ")").show();
                        if (i == 0) {
                                $(".box1TabPage:eq(" + i + ")").next().hide();
                        } else {
                                $(".box1TabPage:eq(" + i + ")").prev().hide();
                        }
                        });
                        $(".tab").on("click", function() {
                        $(this).addClass("tabSelected").siblings().removeClass("tabSelected");
                        var i = $(this).index();
                        $(".tabPage:eq(" + i + ")").show();
                        if (i == 0) {
                                $(".tabContent:eq(" + i + ")").next().hide();
                        } else {
                                $(".tabContent:eq(" + i + ")").prev().hide();
                        }
                        });
                        getweater();
                        getGoodPerson();
                        getGoodGroup();
                        getJftjList();
                        getLxyzList();
                        getNoticeList();
                        getNewEraList();
                        getVolunteer();
                        setInterval(NowTime, 1000);
                        slider2();
                        map = new T.Map('mapdiv');
                        map.centerAndZoom(new T.LngLat(120.97333757316215, 32.52218043222892), zoom);
                        map.setStyle('indigo');
                        companyLocation();
                        companyLocation1();
                        ykArea();
                }

                //以下为时间刷新方法
                function NowTime() {
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
                        y = year;
                        month = check(month + 1);
                        d = check(day)
                        $("#nowTime>span:first-child").text(y + "年" + month + "月" + d + "日");
                        $("#nowTime>span:nth-child(3)").text(h + " : " + m + " : " + s);
                        if (xingqi == 0) {
                        $("#nowTime>span:nth-child(2)").text("星期日");
                        } else if (xingqi == 1) {
                        $("#nowTime>span:nth-child(2)").text("星期一");
                        } else if (xingqi == 2) {
                        $("#nowTime>span:nth-child(2)").text("星期二");
                        } else if (xingqi == 3) {
                        $("#nowTime>span:nth-child(2)").text("星期三");
                        } else if (xingqi == 4) {
                        $("#nowTime>span:nth-child(2)").text("星期四");
                        } else if (xingqi == 5) {
                        $("#nowTime>span:nth-child(2)").text("星期五");
                        } else if (xingqi == 6) {
                        $("#nowTime>span:nth-child(2)").text("星期六");
                        }
                }
                //时间数字小于10，则在之前加个“0”补位。
                function check(i) {
                        //方法一，用三元运算符
                        var num;
                        i < 10 ? num = "0" + i : num = i;
                        return num;
                }

                var ip = 'http://222.93.104.21:18080/';
                // var ip = 'http://192.168.1.109:8080/ntrdyk/';

                // 保存优秀共产党员数据
                var goodPerson = [];
                // 获取优秀共产党员
                function getGoodPerson() {
                        $.ajax({
                        url: ip + 'jsp/excellentpartym/excellentPartyMListForApp.action',
                        type: 'get',
                        dataType: 'json',
                        success: function(res) {
                                // console.log(res);
                                if (res.code == "0") {
                                goodPerson = res.data;
                                var html = "";
                                for (var i = 0; i < res.data.length; i++) {
                                        html += `<li class="tabItem"><span class="branch">${res.data[i].groupname}</span><span class="name">${res.data[i].partymember}</span></li>`;
                                }
                                $("#tabPerson .tabList").append(html);
                                //优秀共产党员滚动
                                $('#tabPerson').myScroll({
                                        speed: 40, //数值越大，速度越慢
                                        rowHeight: 42 //li的高度
                                });
                                }
                        },
                        fail: function() {
                                console.log("获取优秀共产党员失败");
                        }
                        })
                }

                // 保存先进党组织数据
                var goodGroup = [];
                // 获取先进党组织
                function getGoodGroup() {
                        $.ajax({
                        url: ip + 'jsp/advancedgroup/advancedGroupListForApp.action',
                        type: 'get',
                        dataType: 'json',
                        success: function(res) {
                                // console.log(res);
                                if (res.code == "0") {
                                goodGroup = res.data;
                                var html = "";
                                for (var i = 0; i < res.data.length; i++) {
                                        html += `<li class="tabItem"><span>${res.data[i].advancedgroup}</span></li>`;
                                }
                                $("#tabBranch .tabList").append(html);
                                //先进党组织滚动
                                $('#tabBranch').myScroll({
                                        speed: 40, //数值越大，速度越慢
                                        rowHeight: 42 //li的高度
                                });
                                }
                        },
                        fail: function() {
                                console.log("获取先进党组织失败");
                        }
                        })
                }

                // 保存强国积分统计数据
                var point = [];
                // 获取积分统计
                function getJftjList() {
                        $.ajax({
                        url: ip + 'jsp/learningpower/learningPowerListForApp.action',
                        type: "get",
                        dataType: "json",
                        success: function(res) {
                                // console.log(res);
                                if (res.code == "0") {
                                point = res.data;
                                var html = "";
                                for (var i = 0; i < res.data.length; i++) {
                                        html += `<li class="jftjLine">
                                                        <div>${res.data[i].organization}</div>
                                                        <div>${res.data[i].activestudent}</div>
                                                        <div>${res.data[i].countofstudent}</div>
                                                        <div>${res.data[i].countpoint}</div>
                                                        <div>${res.data[i].joinpower}</div>
                                                        <div>${res.data[i].avgpoint}</div>
                                                        </li>`
                                }
                                $(".jftjBody ul").append(html);
                                // 积分统计滚动
                                $('#jftjBody').myScroll({
                                        speed: 40,
                                        rowHeight: 42
                                });
                                }
                        },
                        fail: function() {
                                console.log("获取积分统计失败");
                        }
                        })
                }

                // 获取两学一做学习材料列表
                function getLxyzList() {
                        $.ajax({
                        url: ip + 'jsp/twolonedo/twoLOneDoListForApp.action',
                        type: 'get',
                        dataType: 'json',
                        success: function(res) {
                                // console.log(res);
                                if (res.code == "0") {
                                var html = "";
                                for (var i = 0; i < res.data.length; i++) {
                                        html += `<li class="lxyzItem"><span class="lxyzTitle" onclick="lxyzClick('${res.data[i].id}')">${res.data[i].learnname}</span></li>`;
                                }
                                $("#lxyz").append(html);
                                //两学一做学习材料滚动
                                $('#studyBook').myScroll({
                                        speed: 40, //数值越大，速度越慢
                                        rowHeight: 42 //li的高度
                                });
                                }
                        },
                        fail: function() {
                                console.log("获取两学一做规定学习材料列表失败");
                        }
                        })
                }
                // 两学一做规定学习材料点击详情
                function lxyzClick(id) {
                        $.ajax({
                        url: ip + 'jsp/twolonedo/twoLOneDoDetailForApp.action',
                        type: 'get',
                        data: {
                                "twolonedo.id": id
                        },
                        dataType: 'json',
                        success: function(res) {
                                // console.log(res);
                                if (res.code == "0") {
                                $(".lxyzModal .modalTitleText").text(res.learnname);
                                $(".lxyzModal .modalContent").html(decodeURIComponent(res.context));
                                $(".lxyzMask").show();
                                }
                        },
                        fail: function() {
                                console.log("获取两学一做规定学习材料详情失败")
                        }
                        })
                }

                // 获取通知公告列表
                function getNoticeList() {
                        $.ajax({
                        url: ip + 'jsp/information/noticeOutListForApp.action',
                        type: 'get',
                        dataType: 'json',
                        success: function(res) {
                                // console.log(res);
                                if (res.code == "0") {
                                var html = "";
                                for (var i = 0; i < res.data.length; i++) {
                                        html += `<li class="noticeItem"><span class="noticeTitle" onclick="noticeClick('${res.data[i].id}')">${res.data[i].infotitle}</span></li>`;
                                }
                                $("#noticeList").append(html);
                                //通知公告滚动
                                $('#notice').myScroll({
                                        speed: 40, //数值越大，速度越慢
                                        rowHeight: 42 //li的高度
                                });
                                }
                        },
                        fail: function(res) {
                                console.log("获取通知公告列表失败")
                        }
                        })
                }
                // 通知公告点击详情
                function noticeClick(id) {
                        $.ajax({
                        url: ip + 'jsp/information/noticeOutDetailForApp.action',
                        type: 'get',
                        data: {
                                "contentInformations.id": id
                        },
                        dataType: 'json',
                        success: function(res) {
                                // console.log(res);
                                if (res.code == "0") {
                                $(".noticeModal .modalTitleText").text(res.infoTitle);
                                $(".noticeModal .modalContent").html(decodeURIComponent(res.infoContent));
                                $(".noticeMask").show();
                                }
                        },
                        fail: function() {
                                console.log("获取两学一做规定学习材料详情失败")
                        }
                        })
                }

                // 获取新时代文明实践活动数据
                function getNewEraList() {
                        $.ajax({
                        url: ip + 'jsp/newCultureActive/newCultureActiveListForApp.action',
                        type: 'get',
                        dataType: 'json',
                        success: function(res) {
                                // console.log(res);
                                if (res.code == "0") {
                                var temp = res.data.concat(res.data.slice(0, 2));
                                var html = '';
                                var videoArr = ['mp4', 'rmvb', 'avi', 'wma'];
                                for (var i = 0; i < temp.length; i++) {
                                        var index = temp[i].infopic.lastIndexOf(".");
                                        var suffix = temp[i].infopic.substring(index + 1);
                                        if (videoArr.indexOf(suffix) >= 0) {
                                        html += `<div class="imgBox"><video src="${ip + 'upload/' + temp[i].infopic}" onclick="newEraClick('${temp[i].id}','video')"></video><div class="imgLabel">${temp[i].learnname}</div></div>`;
                                        } else {
                                        html += `<div class="imgBox"><img src="${ip + 'upload/' + temp[i].infopic}" onclick="newEraClick('${temp[i].id}')",'image'><div class="imgLabel">${temp[i].learnname}</div></div>`;
                                        }
                                }
                                $(".slider1").append(html);
                                slider1(temp.length);
                                }
                        },
                        fail: function() {
                                console.log("获取新时代文明实践活动数据失败");
                        }
                        })
                }

                // 新时代文明实践活动点击详情
                function newEraClick(id, type) {
                        $(".imgModal .modalContent").empty();
                        $.ajax({
                        url: ip + 'jsp/newCultureActive/newCultureActiveDetailForApp.action',
                        type: 'get',
                        data: {
                                "newCultureActive.id": id
                        },
                        dataType: 'json',
                        success: function(res) {
                                console.log(res);
                                if (res.code == "0") {
                                $(".imgModal .modalTitleText").text(res.learnname);
                                var html = '';
                                if (type == "video") {
                                        html += `<video src="${ip + 'upload/' + res.infoPic}" controls="controls" autoplay="autoplay"></video>`;
                                } else {
                                        html += `<img src="${ip + 'upload/' + res.infoPic}">`;
                                }
                                html += `<div>${decodeURIComponent(res.infoContent)}</div>`
                                $(".imgModal .modalContent").append(html);
                                $(".imgMask").show();
                                }
                        },
                        fail: function() {
                                console.log("详情获取失败");
                        }
                        })
                }

                // 获取志愿服务图片
                function getVolunteer() {
                        $.ajax({
                        url: ip + 'jsp/activity/newCultureActPicForApp.action',
                        type: 'get',
                        dataType: 'json',
                        data: {
                                'tbActivitiInfo.publicCity': ''
                        },
                        success: function(res) {
                                // console.log(res);
                                if (res.code == '0') {
                                var html = '';
                                for (var i = 0; i < res.data.length; i++) {
                                        if (i == 0) {
                                        html += `<div><img src="${ip + 'upload/' + res.data[i].attachs}"><div>${res.data[i].title}</div></div>`;
                                        } else {
                                        html += `<div style="display: none;"><img src="${ip + 'upload/' + res.data[i].attachs}"><div>${res.data[i].title}</div></div>`;
                                        }
                                }
                                $("#sliderBox2").append(html);
                                }
                        },
                        fail: function() {
                                console.log("获取志愿服务图片失败");
                        }
                        })
                }

                //定时器存储
                var slider;
                // 新时代文明实践活动轮播
                function slider1(len) {
                        var width = 260 * parseInt(len);
                        $(".slider1").css("width", width + 'px');
                        $(".slider1").css("transition", 'none');
                        $(".slider1").css("left", '0px');
                        var limit = 260 - width;
                        var left = 0;
                        if (slider) {
                        clearInterval(slider);
                        }
                        slider = setInterval(function() {
                        left -= 260;
                        if (left == limit) {
                                $(".slider1").css("transition", 'none');
                                $(".slider1").css("left", "0px");
                                left = 0;
                        } else {
                                $(".slider1").css("transition", 'all 1s linear');
                                $(".slider1").css("left", left + 'px');
                        }
                        }, 5000);
                }

                //志愿服务轮播
                function slider2() {
                        var i = 1;
                        setInterval(function() {
                        $('#sliderBox2 > div').eq(i).show().siblings().hide();
                        var length = $('#sliderBox2 > div').length;
                        if (i == length - 1) {
                                i = 0;
                        } else {
                                i++;
                        }
                        }, 3000);
                }

                //村党组织党建概况数据
                var basicData = [{
                        name: '楼窑村',
                        code: '3',
                        dy: '0125',
                        dorg: '0003',
                        dw: '0',
                        dzz: '1',
                        dzb: '2',
                        detail: '楼窑村位于送桥镇西南首，东与丰利镇相连，以岔洋河为界，西邻王鸭村和杨楝园村，以中心河和跃进河为界，南与岔河镇接壤，以江岔河为界，北与杨楝园和油坊口毗邻，以幸福河和立新河为界，占地面积5.76平方公里，拥有人口数3377人'
                }, {
                        name: '三江口村',
                        code: '8',
                        dy: '0128',
                        dorg: '0004',
                        dw: '0',
                        dzz: '1',
                        dzb: '3',
                        detail: '送桥镇三江口村位于镇西南侧，与拼茶镇相邻，占地面积6.5平方公里，拥有人口数3851人。本村以农业为主，二、三产业全面发展，以工补农的生产格局，近几年来，在党的改革开放方针政策的指引下，工农业生产取得了全面发展，本村大力发展传统的种养业，在相关部门的指导和支持下，人民的生活水平有了很大的提高，在党支部的领导下，全体党员干部、人民群众正在各自的岗位上为建设社会主义新农村而努力奋斗。'
                }, {
                        name: '六份头村',
                        code: '11',
                        dy: '0132',
                        dorg: '0004',
                        dw: '0',
                        dzz: '1',
                        dzb: '3',
                        detail: '六份头村，所属原新林区域，2001年由原新林镇坳西村、戴园村和六份头村合并，于2003年化并送桥镇，东临古坳村，南至油坊口村，西至周新庄村，北与张埭村相邻，占地面积5.9平方公里，拥有人口数3521人。'
                }, {
                        name: '新坝村',
                        code: '6',
                        dy: '0181',
                        dorg: '0004',
                        dw: '0',
                        dzz: '1',
                        dzb: '3',
                        detail: '新坝村位于送桥镇西首，东和池塘头村交界，南至栟茶运河，西和栟茶镇洋堡村接壤，北边是221线省道海防公路，占地面积6.33平方公里，拥有人口数4611人。送桥小学、送桥中学都位于该村，以革命先烈命名的原德贵小学也位于该村。历经400多年的三官殿位于该村5组。全村半工半农现象居多，民富、村美、风气好。2009年获得江苏省民主法治村的称号。'
                }, {
                        name: '古坳村',
                        code: '4',
                        dy: '0119',
                        dorg: '0004',
                        dw: '0',
                        dzz: '1',
                        dzb: '3',
                        detail: '送桥镇古坳村位于洋兴公路东侧，南临丰利，北与送桥镇耿庄村搭界，东与送桥镇甜港村相依。古坳村是以种植业为主的农业村，占地面积5.2平方公里，拥有人口数3265人。'
                }, {
                        name: '香橼树村',
                        code: '16',
                        dy: '0079',
                        dorg: '0004',
                        dw: '0',
                        dzz: '1',
                        dzb: '3',
                        detail: '香橼树村位于送桥镇西部，与栟茶镇隔河相望。全村占地面积4.2平方公里，拥有人口数2337人。共11个村民小组，该村于2007年12月建成村级公共服务中心。'
                }, {
                        name: '张埭村',
                        code: '14',
                        dy: '0106',
                        dorg: '0003',
                        dw: '0',
                        dzz: '1',
                        dzb: '2',
                        detail: '张埭村地处送桥镇中部，与老送桥闸隔河相望，全村东西长5.5公里，南北长约2公里，最东沿为男凌河与栟茶运河到送桥闸的交汇点，全村由西向东呈三角形占地面积4.6平方公里，拥有人口数2612人。'
                }, {
                        name: '浒路村',
                        code: '15',
                        dy: '0150',
                        dorg: '0006',
                        dw: '0',
                        dzz: '1',
                        dzb: '5',
                        detail: '浒路村是由潘庄村、滩口村、路村、於荡村四村合并而成，组成现在的浒路村，是送桥镇的东南角，与丰利镇隔河相望，东至马丰公路，北至范公堤，西与耿庄村相连，占地面积5.20平方公里。村现有26个村民小组，全村现有总拥有人口数3968人，农户1278户，农业人口4080户，外来从业人口300人，社会面积8000亩，现有村定编干部8名，全村现有党员134名，4个党小组，村已建村级公共服务中心并交付。'
                }, {
                        name: '耿庄村',
                        code: '2',
                        dy: '0124',
                        dorg: '0005',
                        dw: '1',
                        dzz: '0',
                        dzb: '4',
                        detail: '耿庄村位于送桥镇政府南首，西临洋兴公路，北临海防路，海洋铁路穿村而过，交通便利，过往车辆多，外来人口多，属送桥镇镇区开发范围，占地面积5平方公里，拥有人口数3390人。闻名遐迩的千里海堤第一树蓬蓬树就位于我村，村民思想活跃，有经济头脑，赚钱门路广，全村半工半农现象居多，民富、村美、风气好。'
                }, {
                        name: '送桥村',
                        code: '12',
                        dy: '0183',
                        dorg: '0007',
                        dw: '1',
                        dzz: '0',
                        dzb: '6',
                        detail: '送桥村由原来的三村一场合并而来，占地面积43平方公里，拥有人口数5268人。近年来，送桥村各项事业飞跃发展，在全镇综合考核排名中持续名列前茅，获得全国第一批绿色村庄、江苏省水美乡村、江苏省标准化居民学校、南通市五星级基层党组织、南通市最美老干部等诸多殊荣。'
                }, {
                        name: '池塘头村',
                        code: '20',
                        dy: '0135',
                        dorg: '0004',
                        dw: '0',
                        dzz: '1',
                        dzb: '3',
                        detail: '池塘头村位于送桥老闸西南，南起岔洋河，西至三忠河，南临栟岔河，北至海防路。全村占地面积6.14平方公里，共有人口数3610人。池塘头村主要以农业种植为基础，近年来，畜牧业得到大力发展。相应涌出了一批经纪人。他们不断带动了本村三黄鸡和商品猪养殖业的发展，还影响周边地区。本村的草鸡蛋已有一定的知名度，注册了新商标，在各大小超市畅销。'
                }, {
                        name: '闸西村',
                        code: '10',
                        dy: '0189',
                        dorg: '0005',
                        dw: '0',
                        dzz: '1',
                        dzb: '4',
                        detail: '闸西村是由原来的送桥乡闸西村、周干村、洋窑村和五原村合并而成的，下设17个村民小组，北邻范公堤，东边与送桥闸接壤，南到许洋河，西邻送桥镇同文村，是如东有名的渔船只数最多的村，占地面积8.5平方公里，拥有人口数4620人。'
                }, {
                        name: '甜港村',
                        code: '7',
                        dy: '0187',
                        dorg: '0005',
                        dw: '0',
                        dzz: '1',
                        dzb: '4',
                        detail: '甜港村位于送桥镇东南部，南隔斜港河，与丰利镇花园桥村隔河相望，东邻丰利及送桥镇浒路村，北部与浒路村毗邻，西与古坳村接壤。本村占地面积6.8平方公里，拥有人口数4003人。本村村部即公共服务中心位于原光荣农民街，这里人流量较多，商业较为繁荣。现在村内私营企业近三十家，个体工商户达百余户。'
                }, {
                        name: '油坊口村',
                        code: '18',
                        dy: '0075',
                        dorg: '0003',
                        dw: '0',
                        dzz: '1',
                        dzb: '2',
                        detail: '油坊口村地处送桥镇偏西南，东至九江河，南邻楼窑村、杨澜园村，西邻如东林场、港口中学，中心河为界，北与六分头寸相毗，红卫河为界，四面环水占地面积9平方公里，拥有人口数2360人。我村农业以生产粮食为主，粮食的征收促进了本地养猪、养羊业的发展，传统的绘画工艺与工艺旅游扇的制作成为我村手工业一大亮点。该村有专业绘画的个体户5家，吸纳本地中老残等劳力，制扇工艺与绘画工艺的有机结合，使得工艺旅游扇畅销于国内外各大旅游景点，有的还远销日本、韩国、新加坡等国。'
                }, {
                        name: '杨楝园村',
                        code: '5',
                        dy: '0156',
                        dorg: '0004',
                        dw: '0',
                        dzz: '1',
                        dzb: '3',
                        detail: '杨楝园村位于送桥镇西南首，南昨幸福河，西与河口镇荷园村交界。全村区域面积8.47平方公里，耕地面积6500亩。19个村民小组，拥有人口数3978人。全村发展特色畜禽养殖业。'
                }, {
                        name: '周新庄村',
                        code: '17',
                        dy: '0191',
                        dorg: '0005',
                        dw: '1',
                        dzz: '0',
                        dzb: '3',
                        detail: '周新庄村位于送桥镇中西部，为原新林乡政府所在地。东与张埭村、六份头村相望，西至栟茶镇交界，南与林场、杨楝园村相邻，北与三江口村、香橼树村接壤，占地面积7.8平方公里，拥有人口数3600人。本村为老集镇，已经有数十年历史，有着优越的地理位置，辖区内文教、卫生、商品零售、金融服务等初具规模。近年来在各级党委政府的正确领导下，村两委一班人，同心同德、齐心协力抓经济发展，积极稳妥推进公益事业，集体经济收入稳步提高，村内环境不断改善。'
                }, {
                        name: '同文村',
                        code: '9',
                        dy: '0085',
                        dorg: '0003',
                        dw: '0',
                        dzz: '1',
                        dzb: '2',
                        detail: '同文村位于送桥镇西北部，东与送桥镇闸西村接壤，南侧为202省道（即海防公路），西与栟茶镇毗邻，北接范公堤，占地面积3.23平方公里，拥有人口数2384人。'
                }, {
                        name: '王鸭村',
                        code: '19',
                        dy: '0084',
                        dorg: '0004',
                        dw: '0',
                        dzz: '1',
                        dzb: '3',
                        detail: '王鸭村地处送桥镇西南角，东与本镇楼窑村交界，西与河口镇荷园村相邻，南与岔河镇玉林村接壤，北与本镇杨澜园相连。所处地理位置独特，为三镇交界，占地面积5平方公里，拥有人口数2070人。'
                }, {
                        name: '南渔村',
                        code: '13',
                        dy: '0306',
                        dorg: '0007',
                        dw: '1',
                        dzz: '0',
                        dzb: '6',
                        detail: '南渔村坐落于美丽富饶的南黄海边，拥有食品加工、海洋捕捞、渔船修造等多个特色产业，占地面积12平方公里，拥有人口数6046人。近年来，旅游资源的不断开发，乡村旅游业大力发展，荣获“全国休闲农业与乡村旅游四星级示范企业”、“江苏省生态村”、“江苏省最美乡村”等称号。'
                }, {
                        name: '镇政府',
                        code: '1',
                        dy: '4237',
                        dorg: '0104',
                        dw: '9',
                        dzz: '19',
                        dzb: '76',
                        detail: '送桥镇位于如东县西北部的小送桥地区，区域总面积168平方公里，拥有24公里海岸线和广袤的滩涂。送桥镇与沿海经济开发区、小送桥旅游度假区实行“区镇一体化”管理，总人口约10万人。送桥镇先后荣获“江苏省创新型试点乡镇”“江苏省卫生镇”“江苏省特色景观名镇”和“江苏省信息化与工业化融合试验区”“江苏省新型工业化产业示范基地”“江苏省中小企业创业示范基地” “江苏省功能性高分子材料特色产业基地”“江苏省高分子材料科技产业园”等荣誉称号。\n' +
                        '2018年完成规模以上应税销售302亿元，同比增长28%；实现地区生产总值75亿元，同比增长7%；实现一般公共预算收入8.71亿元，同比增长10.6%；农村居民人均可支配收入22824元，同比增长9.1%。'
                }];


                //点击村党组织信息替换
                function changeInfo(i) {
                        //党建概况
                        $("#djgk1 .title_color:eq(0)").text(basicData[i].dy.substring(0, 1));
                        $("#djgk1 .title_color:eq(1)").text(basicData[i].dy.substring(1, 2));
                        $("#djgk1 .title_color:eq(2)").text(basicData[i].dy.substring(2, 3));
                        $("#djgk1 .title_color:eq(3)").text(basicData[i].dy.substring(3, 4));
                        $("#djgk1 .title_color:eq(4)").text(basicData[i].dorg.substring(0, 1));
                        $("#djgk1 .title_color:eq(5)").text(basicData[i].dorg.substring(1, 2));
                        $("#djgk1 .title_color:eq(6)").text(basicData[i].dorg.substring(2, 3));
                        $("#djgk1 .title_color:eq(7)").text(basicData[i].dorg.substring(3, 4));
                        $("#djgk2 .count:eq(0)").text(basicData[i].dw + '个');
                        $("#djgk2 .count:eq(1)").text(basicData[i].dzz + '个');
                        $("#djgk2 .count:eq(2)").text(basicData[i].dzb + '个');
                        $(".box1TabPage:eq(1)").text(basicData[i].detail);

                        //优秀共产党员筛选
                        var person = [];
                        if (i < 19) {
                        person = goodPerson.filter(item => item.groupname == basicData[i].name);
                        } else {
                        person = goodPerson;
                        }
                        var goodPerHtml = '';
                        for (var j = 0; j < person.length; j++) {
                        goodPerHtml += `<li class="tabItem"><span class="branch">${person[j].groupname}</span><span class="name">${person[j].partymember}</span></li>`
                        }
                        $("#tabPerson .tabList").html(goodPerHtml);

                        //先进党组织筛选
                        var group = [];
                        if (i < 19) {
                        group = goodGroup.filter(item => item.advancedgroup.indexOf(basicData[i].name) >= 0);
                        } else {
                        group = goodGroup;
                        }
                        var goodGroupHtml = '';
                        for (var j = 0; j < group.length; j++) {
                        goodGroupHtml += `<li class="tabItem"><span>${group[j].advancedgroup}</span></li>`;
                        }
                        $("#tabBranch .tabList").html(goodGroupHtml);
                        // 优秀共产党员、先进党组织滚动列表还原            
                        $(".tabList").css("margin-top", "0");

                        // 学习强国积分统计筛选
                        var jftj = [];
                        if (i < 19) {
                        jftj = point.filter(item => item.organization.indexOf(basicData[i].name) >= 0);
                        } else {
                        jftj = point;
                        }
                        var jftjHtml = '';
                        for (var j = 0; j < jftj.length; j++) {
                        jftjHtml += `<li class="jftjLine">
                                                <div>${jftj[j].organization}</div>
                                                <div>${jftj[j].activestudent}</div>
                                                <div>${jftj[j].countofstudent}</div>
                                                <div>${jftj[j].countpoint}</div>
                                                <div>${jftj[j].joinpower}</div>
                                                <div>${jftj[j].avgpoint}</div>
                                        </li>`;
                        }
                        $("#jftjBody ul").html(jftjHtml);
                        $("#jftjBody ul").css("margin-top", "0");

                        // 新时代文明实践活动筛选
                        $.ajax({
                                url: ip + 'jsp/newCultureActive/newCultureActiveListForApp.action',
                                type: 'get',
                                data: {
                                "newCultureActive.publishCity": basicData[i].code
                                },
                                dataType: 'json',
                                success: function(res) {
                                // console.log(res);
                                if (res.code == "0") {
                                        if (res.data.length != 0) {
                                        var temp = res.data.concat(res.data.slice(0, 2));
                                        var html = '';
                                        var videoArr = ['mp4', 'rmvb', 'avi', 'wma'];
                                        for (var i = 0; i < temp.length; i++) {
                                                var index = temp[i].infopic.lastIndexOf(".");
                                                var suffix = temp[i].infopic.substring(index + 1);
                                                if (videoArr.indexOf(suffix) >= 0) {
                                                html += `<div class="imgBox"><video src="${ip + 'upload/' + temp[i].infopic}" onclick="newEraClick('${temp[i].id}','video')"></video><div class="imgLabel">${temp[i].learnname}</div></div>`;
                                                } else {
                                                html += `<div class="imgBox"><img src="${ip + 'upload/' + temp[i].infopic}" onclick="newEraClick('${temp[i].id}','image')"><div class="imgLabel">${temp[i].learnname}</div></div>`;
                                                }
                                        }
                                        $(".slider1").html(html);
                                        slider1(temp.length);
                                        } else {
                                        $(".slider1").empty();
                                        }

                                }
                                },
                                fail: function() {
                                console.log("获取新时代村级信息失败");
                                }
                        })
                        // 志愿服务活动
                        $.ajax({
                        url: ip + 'jsp/activity/newCultureActPicForApp.action',
                        type: 'get',
                        data: {
                                'tbActivitiInfo.publicCity': basicData[i].code
                        },
                        dataType: 'json',
                        success: function(res) {
                                // console.log(res);
                                if (res.code == "0") {
                                var html = '';
                                for (var i = 0; i < res.data.length; i++) {
                                        if (i == 0) {
                                        html += `<div><img src="${ip + 'upload/' + res.data[i].attachs}"><div>${res.data[i].title}</div></div>`;
                                        } else {
                                        html += `<div style="display: none;"><img src="${ip + 'upload/' + res.data[i].attachs}"><div>${res.data[i].title}</div></div>`;
                                        }

                                }
                                $("#sliderBox2").html(html);
                                }
                        },
                        fail: function(res) {
                                console.log("获取志愿服务村级图片失败");
                        }
                        })
                }

                // 企业党组织党建概况数据
                var basicBusinessData = [{
                        name: '江苏九九久科技有限公司党委',
                        dy: '0257',
                        dorg: '0012',
                        dw: '1',
                        dzz: '0',
                        dzb: '11',
                        detail: '江苏九九久科技有限公司是前身为江苏九九久科技股份有限公司，是由原如东化肥厂改制而来。原如东化肥厂1971年6月成立党总支，1976年5月建立中共如东县化肥厂委员会，2002年企业改制，沿用党委建制。目前公司党委设书记一名、副书记三名，委员5名，党委下设党群工作部和10个基层党支部，共有正式党员290名。近年来，公司党委坚持以习近平新时代中国特色社会主义思想指导，努力践行社会主义核心价值观，团结和带领广大干部职工，艰苦创业，励精图治，锐意改革，开拓创新，充分发挥党委的领导核心作用、支部的战斗堡垒作用和党员的先锋模范作用，以服务于企业发展作为党委工作的出发点和检验标准，以改革创新精神扎实推进党的思想、组织、作风和制度建设，有力推进了企业健康、快速发展。公司党委被评为县先进基层党组织、县非公企业党建“四心工程”示范企业。'
                        }, {
                        name: '海正药业南通有限公司党总支',
                        dy: '0041',
                        dorg: '0004',
                        dw: '0',
                        dzz: '1',
                        dzb: '3',
                        detail: '海正药业南通有限公司成立于2011年8月，位于江苏省南通市如东沿海经济技术开发区，为浙江海正药业股份有限公司的全资子公司。公司着眼于高端特色原料药产品，包括抗感染、心血管降脂、驱虫、兽药和抗结核系列特色原料药的生产；注册资金4.1亿元，总投资约15亿元，占地421亩，公司以“呵护环境，绿色制造”为使命，以GMP、EHS、绿色化学理念设计开发先进产品工艺，并配备与工艺流程相契合的厂房设计及设备设施，将致力于打造中国一流化学原料药基地和化学药物生产的样板性工厂。'
                        }, {
                        name: '如东振丰奕洋化工有限公司党支部',
                        dy: '0014',
                        dorg: '0001',
                        dw: '0',
                        dzz: '0',
                        dzb: '1',
                        detail: '如东振丰奕洋化工有限公司前身为如东县合成化工厂（南通振丰合成化工有限公司），1992年在如东县合成化工厂的基础上，创办了如东县振丰精细化工厂，2006年企业更名为有限责任公司，2013年5月整体搬迁至化工园区。经过多年发展，公司现具有10000吨亚磷酸、5000吨亚磷酸盐和1000吨四甲基氢氧化铵的生产能力。'
                        }, {
                        name: '江苏快达农化股份有限公司党委',
                        dy: '0214',
                        dorg: '0013',
                        dw: '1',
                        dzz: '0',
                        dzb: '12',
                        detail: '江苏快达农化股份有限公司是以生产农药原药、制剂、精细化工产品的综合性农药化工企业，系国家光气生产定点企业、江苏省高新技术企业。“快达”商标为中国驰名商标。公司为国家级“守合同重信用”企业、江苏省信用管理示范企业、江苏省文明单位，2016年荣获江苏省五一劳动奖状。2017年实现销售收入9.55亿元、净利润5882万元。'
                        }, {
                        name: '江苏禾本生化有限公司党支部',
                        dy: '0006',
                        dorg: '0001',
                        dw: '0',
                        dzz: '0',
                        dzb: '1',
                        detail: '江苏禾本生化有限公司系国家农药原药定点企业，占地约200亩，成立于2007年。公司注册资本13690万元；现有员工300多人，各类专业技术型人才50多人；主要生产杀虫剂、杀菌剂、除草剂等三大类农药产品，20多个种类。主要产品有：噻螨酮原药，辛酰溴苯腈原药，恶醚唑原药，环丙唑原药等及制剂。公司连续多年被如东县政府评为“县50强工业企业”，“安全生产先进单位”，“3A”级重合同守信用单位，并荣获“规模企业运行质量二等奖”等荣誉称号。'
                        }, {
                        name: '江苏利田科技股份有限公司党总支',
                        dy: '0027',
                        dorg: '0002',
                        dw: '0',
                        dzz: '1',
                        dzb: '1',
                        detail: '江苏利田科技股份有限公司创办于1976年，2000年改制，2011年成立股份有限公司，注册资金7500万元。公司本部位于江苏省如东沿海经济开发区黄海四路6号，占地面积10万平方米；并在如东县丰利镇辖区内拥有厂区面积3.5万平方米。公司经过四十多年的创业发展，目前已成为国内UV光固化新材料集研制、开发、生产及销售的龙头企业，中国感光学会辐射固化专业委员会副理事长单位。主要产品有：UV光固化新材料（UV单体系列、UV树脂、聚醚等）、饲料抗氧化剂（乙氧基喹啉）和弹性树脂乳液等。'
                        }, {
                        name: '江苏优普生物化学科技股份有限公司党支部',
                        dy: '0016',
                        dorg: '0001',
                        dw: '0',
                        dzz: '0',
                        dzb: '1',
                        detail: '江苏优普生物化学科技股份有限公司是一家融研发、生产和销售于一体，以专业从事精细化工生产为核心的江苏省高新技术企业。主要生产甘氨酸衍生物类等系列产品。'
                        }, {
                        name: '江苏三美化工有限公司党支部',
                        dy: '0003',
                        dorg: '0001',
                        dw: '0',
                        dzz: '0',
                        dzb: '1',
                        detail: '江苏三美化工有限公司始创于2010年11月，占地面积450亩，注册资金45000万元，总资产6亿元，在册员工300余人。企业投资主体为浙江三美化工股份有限公司，是一家专业从事含氟化学品生产与销售的民营高新技术企业'
                        }, {
                        name: '南通华宇化工科技有限公司党支部',
                        dy: '0006',
                        dorg: '0001',
                        dw: '0',
                        dzz: '0',
                        dzb: '1',
                        detail: '南通华宇化工科技有限公司是浙江华海药业股份有限公司的全资子公司，成立于2011年9月，现有员工53人。公司目前已建成年产1500吨沙坦类抗高血压药物关键中间体联苯溴化物生产车间，具有良好的市场前景。'
                        }, {
                        name: '南通施壮化工有限公司党支部',
                        dy: '0005',
                        dorg: '0001',
                        dw: '0',
                        dzz: '0',
                        dzb: '1',
                        detail: '南通施壮化工有限公司是南通市化工研究所及试验工厂改制组建的股份制企业，是国家发展和改革委员会批准的定点农药生产企业。公司通过ISO9001:2000质量管理体系认证，拥有进出口自营权。公司占地面积46690平方米，现有员工218人，技术管理人员占1/4。公司主要从事杀虫剂、杀菌剂、除草剂、植物生长调节剂原药及制剂的生产和销售，以及精细化学品开发、咨询、生产、检测等服务。主要产品有棉隆、吡丙醚、霜脲氰、甲哌鎓、吡蚜酮等原料及制剂。'
                        }, {
                        name: '南通市纳百园化工有限公司党支部',
                        dy: '0007',
                        dorg: '0001',
                        dw: '0',
                        dzz: '0',
                        dzb: '1',
                        detail: '南通市纳百园化工有限公司成立于成立于2007年9月，位于南通市如东沿海经济开发区高科技产业园内，占地面积为108亩2011年8月，苏州天马精细化学品股份有限公司全资整体收购了纳百园公司。作为天马精化的全资子公司。厂区内现有建有一套1000t/a氰基乙酰胺、600t/a丙二腈、300t/a氰基频哪酮、400t/a乙酰胺基丙二酸二乙酯生产装置项目及其配套设施。'
                        }, {
                        name: '南通腾龙化工科技有限公司党支部',
                        dy: '0003',
                        dorg: '0001',
                        dw: '0',
                        dzz: '0',
                        dzb: '1',
                        detail: '南通腾龙化工科技有限公司，是由香港国际造纸化学品科技有限公司设立的一家港资企业。公司集科技、研发、生产、销售及技术服务造纸化学品为一体的现代化高新技术企业。公司地处经济发达的长江三角洲腹地、位于江苏省国家沿海经济开发区、南通市如东县送桥化工科技园区；公司距离南通港码头仅60公里，地理位置优越，交通便利，运输便捷。公司的主要产品有：造纸AKD中碱性施胶剂、表面施胶剂、造纸干强剂、羧基丁苯胶乳、保留助剂、涂布助剂、污水处理剂等产品系列。公司的所有产品生产线均采用国内及国际最先进的自动化控制生产线，生产设备精良，生产工艺技术国际领先，产品品质卓越，性能稳定，值得信赖。公司总生产规模为28万吨/年，其中AKD中碱性施胶剂5.0万吨/年，表面施胶剂3.0万吨/年，干强剂5.0万吨/年，羧基丁苯胶乳15.0万吨/年等；公司注册资本为2000万美元，投资总额为8000万美元，完全达产后可实现年总产值为3.0亿美元，可实现利税4000万美元。'
                        }, {
                        name: '江苏兴盛化工有限公司党支部',
                        dy: '0004',
                        dorg: '0001',
                        dw: '0',
                        dzz: '0',
                        dzb: '1',
                        detail: '江苏兴盛化工有限公司成立于2004年，是一家从事阻燃剂、染料中间体、涂料、树脂等产品研发、生产、销售、技术服务的综合型化工企业。公司具备专业的精细化工管理的生产团队，拥有多项国家专利。目前主要有阻燃剂、涂料及树脂和染料中间体三大系列产品，其中阻燃剂生产能力6000吨/年、涂料生产能力3000吨/年、树脂生产能力3000吨/年、染料及医药中间体生产能力5000吨/年。'
                        }, {
                        name: '迈克斯（如东）化工有限公司党支部',
                        dy: '0009',
                        dorg: '0001',
                        dw: '0',
                        dzz: '0',
                        dzb: '1',
                        detail: '迈克斯（如东）化工有限公司，美商独资企业。公司成立于2005年，注册资金2396.758万美元，总投资2398万美元，占地面积为192249平方米。年实现销售收入2亿元人民币。公司系国家农药定点生产企业，集产品研发、生产和贸易为一体。拥有先进的农药原药及制剂生产线，形成了除草剂、杀菌剂、植物生长调节剂及化工中间体四大系列产品。公司拥有自营进出口权，主要产品出口欧美等国家和地区。公司以科技为支撑、市场为导向，建有省级企业技术中心（在如东、杭州、泸州建有研发基地），拥有享受国务院特殊津贴的专家、博士后等一批高层次研发人员，自主研发生产高效、安全、环境友好的高技术含量、高附加值的化工农药产品，拥有自主知识产权的主产品，氨氟乐灵原药工艺技术国内领先，全球市场份额达到80%以上。公司利用产品技术优势，稳健发展壮大，不断拓展国内国际市场。'
                        }, {
                        name: '南通青华纳米材料有限公司党支部',
                        dy: '0004',
                        dorg: '0001',
                        dw: '0',
                        dzz: '0',
                        dzb: '1',
                        detail: '南通青华纳米材料有限公司成立于2004年8月，是专业从事酒石酸钾钠、酒石酸，锂、铷、铯系列产品生产、研发、经营与一体的综合性企业。公司位于如东沿海经济开发区，占地30亩，拥有一支专业技术人员组成的高水平科研队伍，与国内医药化工领域的科研院所合作密切，建立了一整套严格管理的质量保证体系,产品在国际市场上具有优秀的竞争力, 其中溴化锂，氯化锂，醋酸锂等系列产品在生产和技术上处于国内领先地位。公司产品广泛应用于能源，冶金，医药，化纤，陶瓷等多个领域，产品出口至欧美亚60多个国家，与多家世界500强企业有着长期合作，并在多个国家有分销代理商。'
                        }, {
                        name: '江苏功成生物科技有限公司党支部',
                        dy: '0008',
                        dorg: '0001',
                        dw: '0',
                        dzz: '0',
                        dzb: '1',
                        detail: '南通功成精细化工有限公司始建于1999年，占地面积达34000平方米，公司注册资本5000万元，是国家工业和信息化部（原发改委）定点的农药生产企业。主要从事农药原药及制剂，特别是卫生杀虫剂的研发、生产、销售、技术服务和进出口贸易，是国内最优秀的公共卫生杀虫制剂生产企业之一，也是同行业较早通过ISO9001认证的企业。'
                        }, {
                        name: '南通沃兰化工有限公司党支部',
                        dy: '0003',
                        dorg: '0001',
                        dw: '0',
                        dzz: '0',
                        dzb: '1',
                        detail: '南通沃兰化工有限公司系香港爱维化学有限公司于2004年12月在如东送桥化工园投资设立的港澳台独资企业，是一家专业生产化学品及医药中间体的公司。企业占地面积76.4亩，注册资金551万美元，总投资901万美元，设有生产车间七座，实验楼一座，仓库罐区占地面积6000M2，污水处理设施占地面积3000M2。公司集科研开发、生产制造和销售服务为一体，主要业务集中在新特药化学原料、医药中间体、特种增塑剂和苯磺酰系列等几大类产品的研究开发、中试、生产及销售服务，并且已与欧美、日本等国数十家生产型和开发型客户具有常年稳定的业务合同。'
                        }, {
                        name: '南通永盛化工有限公司党支部',
                        dy: '0003',
                        dorg: '0001',
                        dw: '0',
                        dzz: '0',
                        dzb: '1',
                        detail: '南通永盛化工有限公司位于国家农药定点生产基地——江苏如东县化工园内，固定资产投资2000万元，占地面积40000m2 主要从事精细化学品，医药中间体的开发与生产，现有主导产品：亚氨基二乙酸、双甘膦、永固紫。永盛公司现有员工156人，中高级技术人员28人，其中高级工程师9人，公司拥有产品的生产设备，水、电、气、冷配套 齐全，计量检测器具完备，“三废”治理达标，产品生产工艺先进。与高等院校、科研机构，国内外知名企业建立起长期密切的互利合作伙伴关系。    '
                        }, {
                        name: '南通泰禾化工股份有限公司党支部',
                        dy: '0009',
                        dorg: '0001',
                        dw: '0',
                        dzz: '0',
                        dzb: '1',
                        detail: '泰禾集团（CAC Group）主要从事农用化学品、精细化学品及医药中间体的研发、生产及销售，产品包括除草剂、杀菌剂、杀虫剂以及光引发剂、水处理剂和医药中间体等多个系列几十个品种。泰禾是一家专注于农用化学品及特殊化学品领域发展并在核心产品上拥有领先地位的中国企业。目前拥有4个生产基地，1个制剂研发和加工分装中心，1个GLP实验室，是集科、工、贸及投资于一体的综合性集团公司。泰禾始终以全球市场为发展目标，近年来积极采取新的举措，已先后在德国、美国等国家和地区成立了分公司。与此同时，多年来泰禾一直致力于提高与国际企业合作的能力，迄今已在多个产品领域成为众多跨国企业长期、稳定的供应商和合作伙伴。公司先后荣获中国化工500强、中国农药行业责任关怀十佳企业、上海化工名优产品、中国民营化工十大明星企业等荣誉称号。'
                        }, {
                        name: '江苏琦衡农化科技有限公司党支部',
                        dy: '0004',
                        dorg: '0001',
                        dw: '0',
                        dzz: '0',
                        dzb: '1',
                        detail: '江苏琦衡农化科技有限公司成立于2012年10月，厂区面积140余亩，一期投资8000万元建成的80000立方米储罐区，二期总投资16000余万元建设“年产2万吨三氯乙酰氯及副产盐酸项目”。公司产品三氯乙酰氯产品为优良的酰化剂和有机合成中间体，广泛应用于农药、医药、有机中间体和精细化工产品的合成。'
                        }, {
                        name: '江苏中渊化学品有限公司党支部',
                        dy: '0004',
                        dorg: '0001',
                        dw: '0',
                        dzz: '0',
                        dzb: '1',
                        detail: '中渊化学主要生产嘧啶类中间体，产品涉及医药、农药领域。目前已发展成为了国内领先的研发和生产优质抗艾滋病、抗肿瘤和抗乙肝中间体和原料药的企业之一。目前，公司总占地面积达60000平方米，员工255人，与20多个国家和地区的采购企业保持着密切的业务联系。工厂设有独立的研发中心，并与高校展开密切合作，拥有杂环类、核苷类及心血管类中间体和原料药的研发团队。'
                        }, {
                        name: '南通常佑药业科技有限公司党支部',
                        dy: '0013',
                        dorg: '0001',
                        dw: '0',
                        dzz: '0',
                        dzb: '1',
                        detail: '南通常佑药业科技有限公司是由上海医药集团下属核心企业常州制药厂有限公司投资5.7亿人民币建成的全资子公司，是专门从事生产医药原料药及医药中间体的专业企业。公司总占地面积132670平方米，现拥有员工170人，具有年产20吨瑞舒伐他汀钙和10吨阿利吉仑的生产能力。此外，公司建设了占地超过5000平方的环保车间，配备了价值2000万的环保设备，具有处理能力1000吨/天的污水处理池，3000m³/h的废气处理设备，为绿色生产提供了强有力保障。公司现有研发人员超过30人，大专学历以上人员比例超过90%，研发场所超过300㎡，研发设备总价值超过350万元，拥有合成，分析和中试方面的专业设备和人员。分析检验设备拥有高效液相色谱仪、气相相色谱仪、紫外分光光度计等设备。公司坚持自主开发研究，积极开展产学研合作，已与江南大学、南京工业大学、北京化工大学等高校进行合作研究。'
                        }, {
                        name: '南通雅本化学有限公司党支部',
                        dy: '0005',
                        dorg: '0001',
                        dw: '0',
                        dzz: '0',
                        dzb: '1',
                        detail: '雅本化学是一家生命科学领域中集研发，生产，销售为一体的高科技企业，创建于 2006年1月，2010年2月改制成股份有限公司，2011年9月，公司发行A股股票，成功登陆中国创业板市场。公司旗下下辖上海雅本化学（行政总部及研发实验室）、雅本化学（太仓）工厂、南通雅本化学有限公、江苏滨海建农植物保护有限公司。公司已通过了多个跨国公司（杜邦、罗氏、先正达、拜耳等）的考察和选择，并与他们结成了长期、稳定的战略伙伴关系，拥有一支年轻、稳定而经验丰富的核心团队。目前公司职工超过60%的职工为大专以上学历。各部门工程师、主管及以上管理人员均为大专及以上学历，技术部员工均为硕士研究生以上学历。EHS部拥有四位注册安全工程师。而高层管理人员中的正副总经理拥有十年以上医药制造行业世界五百强企业同等职位工作资历。'
                        }, {
                        name: '南通博亿化工有限公司党支部',
                        dy: '0003',
                        dorg: '0001',
                        dw: '0',
                        dzz: '0',
                        dzb: '1',
                        detail: '南通博亿化工有限公司是由江苏富淼科技股份有限公司投资新建，建设工程项目总投资1.2亿元，占地面积43332.8 m2 ，总建筑面积30333.1 m2。具备4万吨丙烯酰胺年产能力，年销售可达10亿元人民币，利税2700万元。主要产品丙烯酰胺，主要用于制造水溶性聚合物-聚丙烯酰胺。聚丙烯酰胺有“百业助剂”之称，用途广泛，具有很好的发展前景。'
                        }, {
                        name: '东瑞（南通）医药科技有限公司党支部',
                        dy: '0006',
                        dorg: '0001',
                        dw: '0',
                        dzz: '0',
                        dzb: '1',
                        detail: '东瑞制药（ 控股 ) 有限公司始创于1995年，下辖苏州东瑞制药有限公司、苏州东瑞化工有限公司、上海东瑞化工有限公司，及东瑞医药 ( 香港 ) 有限公司四家子公司。2003 年 7 月 11 日在香港联交所主板上市。东瑞制药主要从事头孢类抗生素以及系统专科药物的开发、制造及销售。'
                        }, {
                        name: '江苏中润氟化学科技有限公司党支部',
                        dy: '0006',
                        dorg: '0001',
                        dw: '0',
                        dzz: '0',
                        dzb: '1',
                        detail: '江苏中润坐落于江苏省南通市如东沿海经济开发区，占地496亩，注册资本3亿元。江苏中润原产品规划主要涉及新型制冷剂、混配工质、含氟高分子材料、太阳能光伏新材料制品等。公司建立了PSM工艺安全管理和STOP安全巡检制度，实现了人员、技术、设施管理的现代化，确保了紧急应变规划、人员变动管理、工艺技术、工艺变更管理、设备微小变更管理、质量保证等方面的先进性和可持续发展性。'
                        }, {
                        name: '江苏万年长药业有限公司党支部',
                        dy: '0006',
                        dorg: '0001',
                        dw: '0',
                        dzz: '0',
                        dzb: '1',
                        detail: '江苏万年长药业有限公司坐落于江苏省如东县送桥化工园区内，公司成立于2006年12月，占地面积105亩。公司为专业生产医药中间体的股份制企业，紧紧依托南开大学、上海沃斯得医药研究所、上海医药工业研究院等国内知名研究单位，先后开发了(S)-4-苄基-2-恶唑烷酮、(R)-4-苄基-2-恶唑烷酮、反式-1,4-二溴-2-丁烯、异戊酰氯、(S)-4-苯基-2-恶唑烷酮、4-(4-氟苯甲酰)丁酸、(4S)-3-[5-(4-氟苯基)-1,5-二氧代戊基]-4-苯基-2-恶唑烷酮、4-[[(4-氟苯)亚胺]甲基]-苯酚、吲哚 、氯乙酰胺、3-(2.2-二甲基)丙酸乙酯、3-(2.2-二甲基)丙酸甲酯、丙二酸二乙酯 等产品。'
                        }, {
                        name: '南通众益鑫化工有限公司党支部',
                        dy: '0005',
                        dorg: '0001',
                        dw: '0',
                        dzz: '0',
                        dzb: '1',
                        detail: '南通众益鑫化工有限公司成立于2004年6月，是由广东佛山市海纳化工有限公司全额投资的企业。公司注册资金1100万元，经营范围从初期的涂料中间体系列产品生产销售基础上，增加了水性环保染料的生产和销售。公司占地面积35000㎡，建筑面积11000多㎡；现有员工50余人，其中工程技术人员10人；2014年实现销售收入3000余万元。'
                        }, {
                        name: '南通联膦化工有限公司党支部',
                        dy: '0007',
                        dorg: '0001',
                        dw: '0',
                        dzz: '0',
                        dzb: '1',
                        detail: '南通联膦化工有限公司，于2011年03月03日成立，经营范围包括1-羟基亚乙基-1,1二膦酸、氨基三甲叉膦酸、2-膦酸丁烷-1,2,4-三羧酸、咔吧肼、聚丙烯酸、聚异丙烯膦酸、水解聚马来酸酐、丙烯酸/2-丙烯酰胺-2-甲基丙磺酸二元共聚物、二乙烯三胺五甲叉膦酸、多氨基多醚基亚甲基膦酸、六亚甲基二胺四亚甲基膦酸钾盐、乙二胺四甲叉膦酸酯盐、乙酰氯、亚磷酸、副产品盐酸及甲醇生产等。'
                        }, {
                        name: '南通高盟新材料有限公司党支部',
                        dy: '0003',
                        dorg: '0001',
                        dw: '0',
                        dzz: '0',
                        dzb: '1',
                        detail: '南通高盟新材料有限公司是北京高盟新材料股份有限公司子公司，是目前国内高性能复合聚氨酯胶粘剂行业龙头企业，是软包装复合聚氨酯胶粘剂领域品种最多、规模最大、市场占有率最高的专业厂家。公司系“国家高新技术企业”、“中国包装优秀企业”。公司一直专注于高性能复合聚氨酯胶粘剂的研发和生产，目前产品种类包括塑料软包装用复合聚氨酯胶粘剂、油墨粘结料、高铁用聚氨酯胶粘剂、反光材料复合用胶粘剂、复膜铁专用胶等几大类一百多种，产品广泛应用于包装、印刷、交通运输、安全防护、家用电器、建筑材料等重要行业或领域。'
                        }, {
                        name: '南通德发生物化工有限公司党支部',
                        dy: '0003',
                        dorg: '0001',
                        dw: '0',
                        dzz: '0',
                        dzb: '1',
                        detail: '南通德发生物化工有限公司位于江苏如东县送桥镇，主营抛光膏等产品。公司秉承"顾客第一，勇攀高峰"的经营理念，坚持"诚实守信"的原则为广大客户提供优质的服务'
                        }, {
                        name: '江苏新农化工有限公司党支部',
                        dy: '0004',
                        dorg: '0001',
                        dw: '0',
                        dzz: '0',
                        dzb: '1',
                        detail: '新农化工股份有限公司是集科研、开发、生产和经营为一体的国家级重点高新技术企业，致力发展高效、广谱、安全、环保型绿色农药和具有高技术含量的精细化工产品系列，并已形成仙居为基地的行政、制造、技术、检测中心，以杭州为基地的管理、市场营销、研发和信息中心，以椒江为基地的农药、医药、染料中间体等精细化工产品制造中心。公司现有总资产5个多亿，已成长为国家火炬计划重点高新技术企业、中国自主创新能力行业十强、国家科学技术进步二等奖荣誉单位。'
                        }, {
                        name: '南通利华农化有限公司党支部',
                        dy: '0004',
                        dorg: '0001',
                        dw: '0',
                        dzz: '0',
                        dzb: '1',
                        detail: '南通利华农化有限公司创建于1984年，一直从事农药、农药中间体、制剂等化工产品的生产和加工复配业务，是属国家农药定点生产企业、市县化工农药协会理事单位、安全协会理事单位。公司产品有除草剂、杀菌剂、杀虫剂等四大类组成：主要系列产品有草甘膦原药，50%草甘膦可溶性粉剂，62%、41%、10%草甘膦水剂，50%二氯喹啉酸可湿性粉剂，36%二·氯苄可湿性粉剂，30%异丙苄可湿性粉剂，30%毒·三唑乳油，10%苯磺隆可湿性粉剂，25%甲萘威可湿性粉剂，25%绿麦隆可湿性粉剂，52.5%井·杀单可湿性粉剂，10%吡虫啉可湿性粉剂，3%阿维高氯乳油等其它化工产品的生产经营。产品销往国内外五十多个国家和地区。'
                        }, {
                        name: '江苏湘园化工有限公司党支部',
                        dy: '0004',
                        dorg: '0001',
                        dw: '0',
                        dzz: '0',
                        dzb: '1',
                        detail: '湘园化工于2007年04成立，主要经营邻氯苯胺及中间产品氢（压缩的）、4，4＇-二氨基二苯基甲烷与氯化钠络合物（311）、聚四亚甲基醚二醇双（双—氨基苯甲酸）酯（P1000）、1，3-丙二醇-双（对-氨基苯甲酸）...自营和代理各类商品及技术的进出口业务。'
                        }, {
                        name: '江苏莱科化学有限公司党支部',
                        dy: '0003',
                        dorg: '0001',
                        dw: '0',
                        dzz: '0',
                        dzb: '1',
                        detail: '江苏莱科化学有限公司成立于2010年，注册资本1200万美元，主营范围为农药原药、精细化学品研发生产，新型农药制剂的研发与生产。目前除工厂自身的试验室外，还在国内著名高校建立了前端的研发试验室。'
                        }, {
                        name: '如东众意化工有限公司党支部',
                        dy: '0013',
                        dorg: '0001',
                        dw: '0',
                        dzz: '0',
                        dzb: '1',
                        detail: '众意化工有限公司是一家专业开发、生产精细有机化学品的现代化高科技企业。公司创办于2000年，占地160亩，建筑面积2万平方米，固定资产800万元。专业工程技术人员60人，年销售额达5000万元。公司下设的技术开发部与国内外十多家科研院所保持密切的合作关系，为公司产品的研制开发、更新换代提供了强有力的技术保障。应各类客户要求，已先后开发、生产了小吨位产品八大系列五十余个品种。'
                        }
                        // {name: '化工园区企业党委', dy: '0000', dorg: '0000', dw: '1', dzz: '0', dzb: '0',detail: '送桥化学工业园企业党群服务中心，建筑面积约3000平方米，设置了党员接待中心、党委活动室、业务辅导室、党性教育室等，还拥有音乐茶吧、棋牌室、健身中心、歌厅、舞厅，并开设了图书室、影视中心、新时代文明实践所等教育阵地，定期组织开展十九大精神宣讲、职工演讲比赛等活动；同时，以党建带动群团建设，定期组织开展全民阅读、法律知识、就业创业政策等培训活动；及时协调解决职工与企业的矛盾纠纷，维护职工合法权益；组织开展周末青课堂，为职工子女提供美术、舞蹈、手工等兴趣班，打造广大企业党员职工的“精神家园”，有效提升了党员职工的归属感、责任感和荣誉感。'}
                ];

                // 点击企业党组织信息替换
                function changeBusinessInfo(i) {
                        //党建概况
                        $("#djgk1 .title_color:eq(0)").text(basicBusinessData[i].dy.substring(0, 1));
                        $("#djgk1 .title_color:eq(1)").text(basicBusinessData[i].dy.substring(1, 2));
                        $("#djgk1 .title_color:eq(2)").text(basicBusinessData[i].dy.substring(2, 3));
                        $("#djgk1 .title_color:eq(3)").text(basicBusinessData[i].dy.substring(3, 4));
                        $("#djgk1 .title_color:eq(4)").text(basicBusinessData[i].dorg.substring(0, 1));
                        $("#djgk1 .title_color:eq(5)").text(basicBusinessData[i].dorg.substring(1, 2));
                        $("#djgk1 .title_color:eq(6)").text(basicBusinessData[i].dorg.substring(2, 3));
                        $("#djgk1 .title_color:eq(7)").text(basicBusinessData[i].dorg.substring(3, 4));
                        $("#djgk2 .count:eq(0)").text(basicBusinessData[i].dw + '个');
                        $("#djgk2 .count:eq(1)").text(basicBusinessData[i].dzz + '个');
                        $("#djgk2 .count:eq(2)").text(basicBusinessData[i].dzb + '个');
                        $(".box1TabPage:eq(1)").text(basicBusinessData[i].detail);
                }

                // 村镇定点弹框
                function companyLocation() {
                        //创建图片对象
                        var icon = new T.Icon({
                        iconUrl: require("../img/dh.png"),
                        iconSize: new T.Point(20, 20)
                        });
                        var icon1 = new T.Icon({
                        iconUrl:  require("../img/star.png"),
                        iconSize: new T.Point(35, 35)
                        });
                        var content1 = ["楼窑村党总支", "平桥支部", "楼严支部"];
                        var content2 = ["三江口村党总支", "第一支部", "第二支部", "第三支部"];
                        var content3 = ["六份头村党总支", "南荡支部", "村坳西支部"];
                        var content4 = ["新坝村党总支", "五尖支部", "涵港支部", "童桥支部"];
                        var content5 = ["古坳村党总支", "工业支部", "农业支部", "社区支部"];
                        var content6 = ["香橼树村党总支", "第一支部", "第二支部", "第三支部"];
                        var content7 = ["张埭村党总支", "第一支部", "第二支部"];
                        var content8 = ["浒路村党总支", "第一支部", "第二支部", "第三支部", "第四支部", "滩口建材支部"];
                        var content9 = ["耿庄村党委", "第一支部", "第二支部", "第三支部", "第四支部"];
                        var content10 = ["送桥村党委", "通洋支部", "振洋支部", "双墩支部", "潮港支部", "刘环支部", "新环支部"];
                        var content11 = ["池塘头村党总支", "池塘支部", "范园支部", "斗安支部"];
                        var content12 = ["闸西村党总支", "五原支部", "周于支部", "洋窑支部", "洋西支部"];
                        var content13 = ["甜港村党总支", "第一支部", "第二支部", "第三支部", "第四支部"];
                        var content14 = ["油坊口村党总支", "缪庄支部", "陆舍支部"];
                        var content15 = ["杨楝园村党总支", "顾新庄支部", "秀贞支部", "高码头支部"];
                        var content16 = ["周新庄村党委", "凌北支部", "新港支部", "宏连支部"];
                        var content17 = ["同文村党总支", "涵北支部", "老同文支部"];
                        var content18 = ["王鸭村党总支", "第一支部", "第二支部", "第三支部"];
                        var content19 = ["南渔村党委", "双灶支部", "万龙支部", "南渔网厂支部", "委员会前进石机厂支部", "先锋支部", "海生路支部"];
                        var content20 = ["镇党委", "104个", "沿海经济开发区机关党委、化工园区企业党委、送桥村党委、南渔村党委、周新庄村党委、耿庄村党委、快达农化公司党委、九九久科技公司党委、洋通公司党委、楼窑村党总支、杨楝园村党总支、六份头村党总支、三江口村党总支、香橼树村党总支、王鸭村党总支、张埭村党总支、油坊口村党总支、浒路村党总支、甜港村党总支、古坳村党总支、池塘头村党总支、新坝村党总支、同文村党总支、闸西村党总支、送桥公安党总支、送桥镇教育党总支、送桥镇老干部党总支、海正药业党总支、农场党支部、林场党支部、党群办党支部、财政局党支部、建设和生态保护局党支部、经济发展局党支部、政法和社会管理办公室党支部、应急管理局党支部、社会事业和农村工作局党支部、小送桥旅游度假区机关党支部、行政审批局党支部、人力资源和社会保障党支部、敬老院党支部、兽医站党支部、卫生所党支部、送桥医院党支部、新林医院党支部、送桥教育老干部党支部、古坳初中党支部、送桥初中党支部、送桥小学党支部、新林小学党支部、光荣小学党支部、新林老干部党支部、送桥老干部党支部、送桥社区老干部支部、光荣老干部党支部、南渔老干部党支部、农场老干部党支部、市场监管送桥分局党支部、闸管所党支部、化工园区企业联合党支部、送桥建筑公司党支部、新通安公司党支部、新天地供水公司党支部、立洋化学公司党支部、高盟新材料公司党支部、常佑药业公司党支部、东力化工公司党支部、众益鑫公司党支部、泰禾化工公司党支部、禾本生化公司党支部、利田科技公司党支部、迈克斯化工公司党支部、纳百园化工公司党支部、利华农化公司党支部、维立科化工公司党支部、兴盛化工公司党支部、东瑞医药公司党支部、众意化工公司党支部、雅本化工公司党支部、湘园化工公司党支部、缔威化工公司党支部、永盛化工公司党支部、德发生物公司党支部、青华纳米公司党支部、宝叶化工公司党支部、优普生物公司党支部、振丰奕洋公司党支部、万年长药业公司党支部、琦衡农化公司党支部、中润氟化学公司党支部、施壮化工公司党支部、沃兰化工公司党支部、腾龙化工公司党支部、华晟链条公司党支部、环保热电党支部、金盛昌公司党支部、博亿化工公司党支部、功成精细公司党支部、新农化工公司党支部、三美化工公司党支部、莱科化学公司党支部、中渊化学品公司党支部、百海环保公司党支部、华宇化工公司党支部"];

                        var detail1 = ['江苏省南通市如东县送桥镇楼窑路12号', '书记：许葛华（13962794878）$副书记：陈鹏飞、姚红卫$支委成员：缪建山、缪爱华'];
                        var detail2 = ['江苏省南通市如东县送桥镇洋香路7号', '书记：唐文忠（13405735011）$副书记：肖瑜、徐希林$支委成员：刘继红'];
                        var detail3 = ['江苏省南通市如东县送桥镇送桥戴园路16号', '书记：刘建（13773692351）$副书记：孙锡宏$支委成员：张小燕、缪小卫、王美红'];
                        var detail4 = ['江苏省南通市如东县送桥镇送桥西路52号', '书记：缪林（13656296508）$副书记：缪勤$支委成员：翟向前、沈卫卫'];
                        var detail5 = ['江苏省南通市如东县送桥镇光荣线48号', '书记：顾爱明（13912413134）$副书记：尤海建、缪鹏飞$支委成员：刘先德、杨晓庆'];
                        var detail6 = ['江苏省南通市如东县送桥镇香三路76号', '书记：张学进（13806272715）$副书记：曹建$支委成员：蔡雨、顾建红'];
                        var detail7 = ['江苏省南通市如东县送桥镇洋香路25号', '书记：张德凤（18762476903）$副书记：于卫春、马俊杰$支委成员：符晓云、叶德平'];
                        var detail8 = ['江苏省南通市如东县送桥镇丰北路17号', '书记：刘晓建（13186530798）$支委成员：唐新莲、袁春燕'];
                        var detail9 = ['江苏省南通市如东县送桥镇东力路31号', '书记：孙志军（18921693039）$副书记：陆如萍$支委成员：於先耘、沈露露、徐卫华、於维明'];
                        var detail10 = ['江苏省南通市如东县送桥镇洋刘线46号', '书记：傅国华（13003569618）$副书记：罗建兰、季从亮$支委成员：黄卫东、刘海龙、李建兰、於望成'];
                        var detail11 = ['江苏省南通市如东县送桥镇送桥东路50号', '书记：张慧剑（13951325622）$副书记：缪小娟、缪秀红$支委成员：周春山、缪海兵'];
                        var detail12 = ['江苏省南通市如东县送桥镇八总路31号', '书记：林云（13222137685）$副书记：缪志红、缪亚平$支委成员：缪四鹏、于毓泉、张亮亮'];
                        var detail13 = ['江苏省南通市如东县送桥镇中心北路110号', '书记：王彬（13584628444）$副书记：徐丛明、缪春琴$支委成员：幸玉兰、张维池'];
                        var detail14 = ['江苏省南通市如东县送桥镇楼六路6号', '书记：石捍东（13806270004）$副书记：陆亚芳、李信华$支委成员：姜海平、郑拥军'];
                        var detail15 = ['江苏省南通市如东县送桥镇苴沿线20号', '书记：于绍银（15050624118）$副书记：沈浩、邵爱徐$支委成员：唐慧鹏、虞小红'];
                        var detail16 = ['江苏省南通市如东县送桥镇苴沿线11号', '书记：陈建军（13862772399）$副书记：沈凤琴、姜德梅、裴金余$支委成员：陆爱平'];
                        var detail17 = ['江苏省南通市如东县送桥镇五原路24号', '书记：於海峰（13921471386）$副书记：缪美红、缪宇星$支委成员：周贤芳'];
                        var detail18 = ['江苏省南通市如东县送桥镇洋场二路13号', '书记：王登禾（13901472801）$副书记：马永前$支委成员：陆海生、缪梅'];
                        var detail19 = ['江苏省南通市如东县送桥镇南渔线21号', '书记：许信荣（13511594529）$副书记：张大林、董晓敏$支委成员：刘莉莉、陈小亮、缪　华、赵培培'];
                        var detail20 = ['江苏省南通市如东县送桥渔港大道一号', '镇党委书记：吴劲松$副书记：张树林、范于松、丛爱杨$党委委员：蔡小燕、周建春、彭海惠、潘香香、马小强、冯美华'];
                        var json_data = [
                        [120.949778, 32.448222, content1, detail1],
                        [120.919083, 32.511416, content2, detail2],
                        [120.963666, 32.492277, content3, detail3],
                        [120.930388, 32.530861, content4, detail4],
                        [120.986111, 32.493527, content5, detail5],
                        [120.907027, 32.497805, content6, detail6],
                        [120.95975, 32.506861, content7, detail7],
                        [121.041805, 32.486722, content8, detail8],
                        [120.991055, 32.513527, content9, detail9],
                        [121.005583, 32.521916, content10, detail10],
                        [120.95475, 32.519583, content11, detail11],
                        [120.963555, 32.533388, content12, detail12],
                        [121.019222, 32.476527, content13, detail13],
                        [120.958305, 32.480888, content14, detail14],
                        [120.930861, 32.462638, content15, detail15],
                        [120.927777, 32.489527, content16, detail16],
                        [120.931805, 32.545277, content17, detail17],
                        [120.93075, 32.444583, content18, detail18],
                        [120.973472, 32.544305, content19, detail19],
                        [121.013083, 32.539222, content20, detail20]
                        ];
                        for (var i = 0; i < json_data.length; i++) {
                        var userJson = json_data[i];
                        if (userJson.length > 0) {
                                // console.log(userJson.length);

                                (function(i) {
                                var curricon = icon;
                                // var height=300;
                                // if(i==0){
                                //     height=425;
                                // }
                                var len = userJson[2].length;
                                if (i == 19) {
                                        var mark = new T.Marker(new T.LngLat(userJson[0], userJson[1]), {
                                        icon: icon1
                                        });
                                } else {
                                        var mark = new T.Marker(new T.LngLat(userJson[0], userJson[1]), {
                                        icon: icon
                                        });
                                }
                                map.addOverLay(mark);
                                var infoWin1 = new T.InfoWindow();
                                var sContent = "";
                                sContent += "<div style='margin:0;'>";
                                sContent += "<div style='margin:10px 10px; '>";

                                // sContent+="<div style='color:#000000;height: "+height+"px;'>";
                                if (i == 19) {
                                        sContent += "<div style='color:#000000;height: 310px;overflow-y:scroll;' class='town'>";
                                } else {
                                        sContent += "<div style='color:#000000;'>";
                                }
                                sContent += "<div>";
                                sContent += "<div style='line-height: 30px;'><img style='margin-right: 10px;vertical-align: middle;' src='"+require('../img/location.png')+"' height='28' width='22'/>" + userJson[2][0] + "</div>";
                                var temp = userJson[3][1].split("$");
                                for (var j = 0; j < temp.length; j++) {
                                        sContent += "<div style='line-height: 30px;white-space: nowrap;font-size: 16px;'>" + temp[j] + "</div>";
                                }
                                sContent += "<div style='line-height: 30px;white-space: nowrap;font-size: 16px;'>" + "详细地址：" + userJson[3][0] + "</div>";
                                if (i == 19) {
                                        sContent += "<div style='line-height: 30px;font-size: 16px;'>" + "下属支部：" + userJson[2][1] + "</div>";
                                        var group = userJson[2][2].split("、");
                                        for (var l = 0; l < group.length; l++) {
                                        sContent += "<div>" + group[l] + "</div>";
                                        }
                                } else {
                                        sContent += "<div style='line-height: 30px;font-size: 16px;'>" + "下属支部：" + "</div>";
                                        for (var k = 1; k < len; k++) {
                                        sContent += "<div style='font-size: 16px;padding-left: 33px;'>" + userJson[2][k] + "</div>";
                                        }
                                }

                                sContent += "</div>";
                                sContent += "</div>";
                                sContent += "</div>";
                                sContent += "</div>";
                                infoWin1.setContent(sContent);
                                //注册标注点的点击事件
                                mark.addEventListener("click", function() {
                                        mark.openInfoWindow(infoWin1);
                                        map.panTo(new T.LngLat(json_data[i][0], json_data[i][1] + 0.02), 13);
                                        changeInfo(i);
                                }, this);

                                })(i);
                        }
                        }
                }

                // 企业定点弹框
                function companyLocation1() {
                        //创建图片对象
                        var icon = new T.Icon({
                        iconUrl: require("../img/dh.png"),
                        iconSize: new T.Point(20, 20)
                        });
                        var content1 = ["江苏九九久科技有限公司党委", "九九久科技生产支部", "九九久科技行政支部", "九九久科技综管支部委员会", "九九久科技一车间支部", "九九久科技经营支部", "九九久科技技术支部", "九九久科技新材料支部", "九九久科技特纤医养支部", "九九久科技二车间支部", "九九久科技天时支部", "九九久科技离退休支部"];
                        var content2 = ["海正药业南通有限公司党总支", "海正药业南通有限公司第一支部", "海正药业南通有限公司第二支部", "海正药业南通有限公司第三支部"];
                        var content3 = ["如东振丰奕洋化工有限公司党支部"];
                        var content4 = ["江苏快达农化股份有限公司党委", "快达农化股份有限公司第一支部", "快达农化股份有限公司第二支部", "快达农化股份有限公司第三支部", "快达农化股份有限公司第四支部", "快达农化股份有限公司第五支部", "快达农化股份有限公司第六支部", "快达农化股份有限公司第七支部", "快达农化股份有限公司第八支部", "快达农化股份有限公司第九支部", "快达农化股份有限公司第十支部", "快达农化股份有限公司第十一支部", "快达农化股份有限公司第十二支部"];
                        var content5 = ["江苏禾本生化有公司党支部"];
                        var content6 = ["江苏利田科技股份有限公司党总支", "江苏利田科技股份有限公司支部"];
                        var content7 = ["江苏优普生物化学科技股份有限公司党支部"];
                        var content8 = ["江苏三美化工有限公司党支部"];
                        var content9 = ["南通华宇化工科技有限公司党支部"];
                        var content10 = ["南通施壮化工有限公司党支部"];
                        var content11 = ["南通市纳百园化工有限公司党支部"];
                        var content12 = ["南通腾龙化工科技有限公司党支部"];
                        var content13 = ["江苏兴盛化工有限公司党支部"];
                        var content14 = ["迈克斯（如东）化工有限公司党支部"];
                        var content15 = ["南通青华纳米材料有限公司党支部"];
                        var content16 = ["江苏功成生物科技有限公司党支部"];
                        var content17 = ["南通沃兰化工有限公司党支部"];
                        var content18 = ["南通永盛化工有限公司党支部"];
                        var content19 = ["南通泰禾化工股份有限公司党支部"];
                        var content20 = ["江苏琦衡农化科技有限公司党支部"];
                        var content21 = ["江苏中渊化学品有限公司党支部"];
                        var content22 = ["南通常佑药业科技有限公司党支部"];
                        var content23 = ["南通雅本化学有限公司党支部"];
                        var content24 = ["南通博亿化工有限公司党支部"];
                        var content25 = ["东瑞（南通）医药科技有限公司党支部"];
                        var content26 = ["江苏中润氟化学科技有限公司党支部"];
                        var content27 = ["江苏万年长药业有限公司党支部"];
                        var content28 = ["南通众益鑫化工有限公司党支部"];
                        var content29 = ["南通联膦化工有限公司党支部"];
                        var content30 = ["南通高盟新材料有限公司党支部"];
                        var content31 = ["南通德发生物化工有限公司党支部"];
                        var content32 = ["江苏新农化工有限公司党支部"];
                        var content33 = ["南通利华农化有限公司党支部"];
                        var content34 = ["江苏湘园化工有限公司党支部"];
                        var content35 = ["江苏莱科化学有限公司党支部"];
                        var content36 = ["如东众意化工有限公司党支部"];
                        // var content37 = ["化工园区企业党委"];

                        var detail1 = ['江苏省南通市如东县送桥镇黄海三路28号', '书记：周新基（ 13906271129）$副书记：邵海泉'];
                        var detail2 = ['江苏省南通市如东县送桥镇黄海二路118号', '书记：包如胜（80863931）$副书记：吴友水$支委成员：周慧慧'];
                        var detail3 = ['江苏省南通市如东县送桥镇送桥二路53号', '书记：赵津华（13906272131）$副书记：唐海建$支委成员：汪秀萍、王银华'];
                        var detail4 = ['江苏省南通市如东县送桥镇黄海三路28号', '书记：施永平（13906271632）$副书记：吴理梅$支委成员：张红梅、杨小建'];
                        var detail5 = ['江苏省南通市如东县送桥镇黄海二路121号', '书记：邓桂元（15851311889）$副书记：蔡缪申$支委成员：童晓晴'];
                        var detail6 = ['江苏省南通市如东县送桥镇送桥二路25号', '书记：张本田（13906270168）$副书记：朱小彬$支委成员：徐新华、 何俊'];
                        var detail7 = ['江苏省南通市如东县送桥镇黄海二路113号', '书记：徐守华（13862797668）$副书记：徐长泉$支委成员：傅小飞'];
                        var detail8 = ['江苏省南通市如东县送桥镇通海四路52号', '书记：陈朝阳（15862755070）$副书记：沈九兵$支委成员：严军'];
                        var detail9 = ['江苏省南通市如东县送桥镇送桥四路29号 ', '书记：缪云（13382377015）$副书记：缪春燕$支委成员：吴清源'];
                        var detail10 = ['江苏省南通市如东县送桥镇黄海五路32号', '书记：周彬（13962712688）$副书记：周彬$支委成员：刘文华、 沈建'];
                        var detail11 = ['江苏省南通市如东县送桥镇海滨二路173号', '书记：瞿建（15950884933）$副书记：葛金星$支委成员：朱志平'];
                        var detail12 = ['江苏省南通市如东县送桥镇通海一路13号', '书记：张婕妤（15262702806）$副书记：臧传亮$支委成员：丁林琳'];
                        var detail13 = ['江苏省南通市如东县送桥镇黄海三路129号', '书记：余振泉（13901482293）$副书记：尤建华$支委成员：孔令华、蒋建红'];
                        var detail14 = ['江苏省南通市如东县送桥镇黄海四路39号', '书记：马发亮（13862779688）$副书记：濮文均$支委成员：姚尤华、王林'];
                        var detail15 = ['江苏省南通市如东县送桥镇黄海三路126号', '书记：姚育江（13601494896）$副书记：季晓明$支委成员：马友群、刘亚兵'];
                        var detail16 = ['江苏省南通市如东县送桥镇黄海三路160号', '书记：蔡伯林（13805185110）$副书记：张萌$支委成员：马友群、刘亚兵'];
                        var detail17 = ['江苏省南通市如东县送桥镇送桥三路133号', '书记：张国兵（13773795955）$副书记：江芳$支委成员：周德磊'];
                        var detail18 = ['江苏省南通市如东县送桥镇黄海四路113号', '书记：赵春华（84810888）$副书记：周平$支委成员：汪秀萍'];
                        var detail19 = ['江苏省南通市如东县送桥镇送桥四路43号', '书记：卞进平（13773680389）$副书记：丛远建$支委成员：张大俊、张建兵'];
                        var detail20 = ['江苏省南通市如东县送桥镇送桥四路33号', '书记：徐进东（13606271375）$副书记：姜信明$支委成员：陆如庆'];
                        var detail21 = ['江苏省南通市如东县送桥镇送桥三路99号', '书记：顾霖（13813726628）$副书记：刘爱峰$支委成员：沈兵'];
                        var detail22 = ['江苏省南通市如东县送桥镇黄海三路167号', '书记：严军（13961127429）$副书记：徐昊$支委成员：胡小军、孙骏'];
                        var detail23 = ['江苏省南通市如东县送桥镇海滨二路115号', '书记：徐小锋（15862757888）$副书记：韦权$支委成员：张志峰、孙梅娟'];
                        var detail24 = ['江苏省南通市如东县送桥镇振洋二路236号', '书记：季新宇（18862788190）$副书记：郁宏娟$支委成员：傅小飞'];
                        var detail25 = ['江苏省南通市如东县送桥镇送桥二路73号', '书记：张楚天（13646247926）$副书记：朱冬冬$支委成员：董金华'];
                        var detail26 = ['江苏省南通市如东县送桥镇黄海三路205号', '书记：詹红斌（13777210488）$副书记：顾金凤$支委成员：叶亚平'];
                        var detail27 = ['江苏省南通市如东县送桥镇黄海四路19号', '书记：许陈兵（13951385330）$副书记：陈华$支委成员：韦士峰'];
                        var detail28 = ['江苏省南通市如东县送桥镇黄海三路61号', '书记：叶春红（13773687099)$副书记：陈鸿飞$支委成员：常宏伟'];
                        var detail29 = ['江苏省南通市如东县送桥镇黄海五路132号', '书记：申建（13405730010）$副书记：高磐龙$支委成员：钱学成、盛建军'];
                        var detail30 = ['江苏省南通市如东县送桥镇黄海三路119号', '书记：陈勤楼（13776918978）$副书记：王彦波$支委成员：于敬涛'];
                        var detail31 = ['江苏省南通市如东县送桥镇送桥二路160号', '书记：张赛义（13951327075）$副书记：张赛义$支委成员：郑祥生、丁孟贤'];
                        var detail32 = ['江苏省南通市如东县送桥镇送桥四路162号', '书记：毛旭鹏（15262705653）$副书记：陈欣欣$支委成员：王志刚、马文慧'];
                        var detail33 = ['江苏省南通市如东县送桥镇黄海一路43号', '书记：沈民强（15862868600）$副书记：徐玲玲$支委成员：徐建国'];
                        var detail34 = ['江苏省南通市如东县送桥镇送桥三路48号', '书记：何红军（18752829830）$副书记：陆林钧$支委成员：镇亮亮'];
                        var detail35 = ['江苏省南通市如东县送桥镇黄海二路136号', '书记：宦旭东（13806102305）$副书记：张磊$支委成员：冯玲'];
                        var detail36 = ['江苏省南通市如东县送桥镇通海二路124号', '书记：朱峰（13951327189）$副书记：张进$支委成员：郭建发'];
                        // var detail37 = ['江苏省南通市如东县送桥镇通海二路124号','党委书记：缪涛$副书记：周新基、施永平$党委委员：张德军、钱宏彬、倪小华'];

                        var json_data = [
                        [121.04069, 32.54001, content1, detail1],
                        [121.07701, 32.53832, content2, detail2],
                        [121.03585, 32.53269, content3, detail3],
                        [121.03696, 32.54008, content4, detail4],
                        [121.04335, 32.53484, content5, detail5],
                        [121.04172, 32.54551, content6, detail6],
                        [121.03194, 32.53888, content7, detail7],
                        [121.08203, 32.53301, content8, detail8],
                        [121.04475, 32.53018, content9, detail9],
                        [121.06252, 32.54189, content10, detail10],
                        [121.06904, 32.53647, content11, detail11],
                        [121.05952, 32.53544, content12, detail12],
                        [121.05147, 32.53722, content13, detail13],
                        [121.04789, 32.5416, content14, detail14],
                        [121.05128, 32.53726, content15, detail15],
                        [121.04003, 32.53841, content16, detail16],
                        [121.04115, 32.53111, content17, detail17],
                        [121.04592, 32.54159, content18, detail18],
                        [121.04776, 32.53567, content19, detail19],
                        [121.0457, 32.53339, content20, detail20],
                        [121.04072, 32.53103, content21, detail21],
                        [121.0366, 32.53943, content22, detail22],
                        [121.06072, 32.53661, content23, detail23],
                        [121.03181, 32.54023, content24, detail24],
                        [121.03703, 32.53783, content25, detail25],
                        [121.04475, 32.53617, content26, detail26],
                        [121.03959, 32.54514, content27, detail27],
                        [121.04447, 32.53886, content28, detail28],
                        [121.06512, 32.54265, content29, detail29],
                        [121.04132, 32.53835, content30, detail30],
                        [121.03632, 32.53838, content31, detail31],
                        [121.04862, 32.53466, content32, detail32],
                        [121.02323, 32.53647, content33, detail33],
                        [121.04738, 32.54482, content34, detail34],
                        [121.04278, 32.53255, content35, detail35],
                        [121.06417, 32.53411, content36, detail36]
                        // [121.017983, 32.541722,content37, detail37]
                        ];
                        for (var i = 0; i < json_data.length; i++) {
                        var userJson = json_data[i];
                        if (userJson.length > 0) {
                                // console.log(userJson.length);

                                (function(i) {
                                var curricon = icon;
                                // var height=300;
                                // if(i==0){
                                //     height=425;
                                // }
                                var len = userJson[2].length;
                                var mark = new T.Marker(new T.LngLat(userJson[0], userJson[1]), {
                                        icon: icon
                                });
                                map.addOverLay(mark);
                                var infoWin1 = new T.InfoWindow();
                                var sContent = "";
                                sContent += "<div style='margin:0;'>";
                                sContent += "<div style='margin:10px 10px; '>";

                                // sContent+="<div style='color:#000000;height: "+height+"px;'>";
                                sContent += "<div style='color:#000000;'>";
                                sContent += "<div style=''>";
                                sContent += "<div style='line-height: 30px;'><img style='margin-right: 10px;vertical-align: middle;' src='"+require('../img/location.png')+"' height='28' width='22'/>" + userJson[2][0] + "</div>";
                                var temp = userJson[3][1].split("$");
                                for (var j = 0; j < temp.length; j++) {
                                        sContent += "<div style='line-height: 30px;white-space: nowrap;font-size: 16px;'>" + temp[j] + "</div>";
                                }
                                sContent += "<div style='line-height: 30px;white-space: nowrap;font-size: 16px;'>" + "详细地址：" + userJson[3][0] + "</div>";
                                if (len != 1) {
                                        sContent += "<div style='line-height: 30px;font-size: 16px;'>" + "下属支部：" + "</div>";
                                        for (var k = 1; k < len; k++) {
                                        sContent += "<div style='font-size: 16px;padding-left: 33px;'>" + userJson[2][k] + "</div>";
                                        }
                                }
                                sContent += "</div>";
                                sContent += "</div>";
                                sContent += "</div>";
                                sContent += "</div>";
                                infoWin1.setContent(sContent);
                                //注册标注点的点击事件
                                mark.addEventListener("click", function() {
                                        mark.openInfoWindow(infoWin1);
                                        map.panTo(new T.LngLat(json_data[i][0], json_data[i][1] + 0.03), 13);
                                        changeBusinessInfo(i);
                                }, this);

                                })(i);
                        }
                        }
                }

                //送桥镇区域网格
                function ykArea() {
                        var iconurl0 = require('../img/pointOffline.jpg'); //正常节点
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
                        opacity: 0.8,
                        lineStyle: "dashed"
                        };
                        //许璐村
                        var areaJson = [
                        [121.030540, 32.470960],
                        [121.044530, 32.467990],
                        [121.046500, 32.483630],
                        [121.048310, 32.497890],
                        [121.024020, 32.505270],
                        [121.014830, 32.489850],
                        [121.019850, 32.487790],
                        [121.026270, 32.485290],
                        [121.033520, 32.486610],
                        [121.036400, 32.485570],
                        [121.034420, 32.482800],
                        [121.031700, 32.478760],
                        [121.031400, 32.476770],
                        [121.030730, 32.472280],
                        [121.030540, 32.470900]
                        ];

                        var cy_areaJson = [
                                [121.036380, 32.485580],
                                [121.033540, 32.486600],
                                [121.026250, 32.485290],
                                [121.014960, 32.489780],
                                [121.013890, 32.488080],
                                [121.011010, 32.489530],
                                [121.010160, 32.487610],
                                [121.007880, 32.488880],
                                [121.005520, 32.486420],
                                [121.003330, 32.482580],
                                [121.002770, 32.478050],
                                [120.998910, 32.473740],
                                [121.004920, 32.468930],
                                [121.011060, 32.465020],
                                [121.015860, 32.462740],
                                [121.021100, 32.460280],
                                [121.027110, 32.458650],
                                [121.029980, 32.458250],
                                [121.032600, 32.457230],
                                [121.029850, 32.460420],
                                [121.030150, 32.465670],
                                [121.030540, 32.470700],
                                [121.031610, 32.478230],
                                [121.031700, 32.478780],
                                [121.036380, 32.485580]
                        ]
                        //古坳村
                        var fl_areaJson = [
                        [120.998910, 32.473740],
                        [121.002770, 32.478050],
                        [121.003290, 32.482610],
                        [121.005500, 32.486380],
                        [121.007070, 32.488010],
                        [121.002900, 32.490520],
                        [121.003050, 32.490980],
                        [121.001830, 32.491280],
                        [121.003460, 32.493820],
                        [121.001270, 32.497200],
                        [121.003010, 32.497440],
                        [121.003030, 32.497930],
                        [121.003680, 32.498290],
                        [121.001810, 32.499070],
                        [121.002580, 32.500150],
                        [121.002320, 32.501560],
                        [121.003590, 32.502030],
                        [121.002190, 32.503140],
                        [120.999020, 32.500260],
                        [120.993030, 32.503320],
                        [120.991550, 32.504010],
                        [120.992020, 32.506360],
                        [120.989860, 32.506250],
                        [120.989790, 32.504820],
                        [120.984920, 32.507250],
                        [120.983400, 32.502780],
                        [120.982220, 32.499340],
                        [120.980630, 32.494510],
                        [120.978510, 32.488420],
                        [120.979170, 32.487660],
                        [120.982650, 32.485190],
                        [120.985840, 32.482920],
                        [120.992220, 32.478200],
                        [120.996850, 32.475950],
                        [120.998870, 32.473820]
                        ];
                        var zl_areaJson = [
                        [120.987630, 32.516090],
                        [120.984410, 32.514000],
                        [120.978400, 32.509270],
                        [120.971960, 32.505980],
                        [120.961550, 32.502160],
                        [120.953310, 32.499100],
                        [120.944950, 32.494960],
                        [120.938770, 32.490270],
                        [120.938620, 32.496860],
                        [120.938530, 32.502810],
                        [120.938490, 32.511060],
                        [120.948830, 32.509110],
                        [120.951080, 32.509270],
                        [120.954840, 32.511390],
                        [120.957090, 32.512710],
                        [120.959820, 32.513780],
                        [120.964210, 32.513360],
                        [120.982410, 32.514360],
                        [120.987650, 32.516090]
                        ]
                        var hz_areaJson = [
                        [121.024010, 32.505270],
                        [121.021730, 32.501440],
                        [121.021030, 32.500230],
                        [121.019850, 32.498260],
                        [121.016140, 32.492030],
                        [121.014830, 32.489860],
                        [121.014960, 32.489780],
                        [121.013890, 32.488080],
                        [121.011010, 32.489520],
                        [121.010140, 32.487610],
                        [121.007890, 32.488880],
                        [121.007060, 32.488000],
                        [121.002910, 32.490540],
                        [121.003040, 32.490980],
                        [121.001820, 32.491280],
                        [121.003470, 32.493820],
                        [121.001260, 32.497210],
                        [121.003010, 32.497450],
                        [121.003030, 32.497920],
                        [121.003680, 32.498290],
                        [121.001810, 32.499080],
                        [121.002580, 32.500160],
                        [121.002330, 32.501560],
                        [121.003600, 32.502030],
                        [121.002940, 32.502540],
                        [121.002210, 32.503150],
                        [120.999010, 32.500260],
                        [120.992690, 32.503500],
                        [120.991550, 32.504000],
                        [120.992020, 32.506370],
                        [120.989860, 32.506250],
                        [120.989780, 32.504840],
                        [120.984920, 32.507260],
                        [120.986420, 32.511600],
                        [120.987640, 32.516120],
                        [120.991220, 32.519260],
                        [120.994430, 32.517900],
                        [120.998270, 32.516310],
                        [120.999900, 32.515640],
                        [121.002440, 32.514570],
                        [121.007180, 32.512610],
                        [121.008700, 32.511980],
                        [121.013950, 32.510070],
                        [121.022520, 32.506020],
                        [121.024060, 32.505290]
                        ]

                        var jdc_areaJson = [
                        [120.917760, 32.542550],
                        [120.915380, 32.535820],
                        [120.910010, 32.520800],
                        [120.933340, 32.512080],
                        [120.938470, 32.511050],
                        [120.938980, 32.511680],
                        [120.940200, 32.515210],
                        [120.945610, 32.530860],
                        [120.936860, 32.534550],
                        [120.924880, 32.539650],
                        [120.918790, 32.542110],
                        [120.918360, 32.542290]
                        ];

                        var jdsq_areaJson = [
                        [120.995690, 32.523530],
                        [120.991230, 32.519230],
                        [120.989150, 32.520460],
                        [120.986870, 32.520310],
                        [120.945570, 32.530890],
                        [120.936860, 32.534510],
                        [120.940630, 32.550210],
                        [120.954540, 32.542250],
                        [120.969210, 32.536210],
                        [120.983010, 32.531020],
                        [120.982050, 32.536320],
                        [120.981680, 32.538040],
                        [120.985220, 32.536920],
                        [120.990240, 32.535240],
                        [120.989920, 32.531170],
                        [120.989750, 32.529450],
                        [120.991720, 32.527480],
                        [120.995690, 32.523530]
                        ]

                        var jfsq_areaJson = [
                        [120.94556640002997, 32.53053200087449],
                        [120.93895743701728, 32.51164924940964],
                        [120.94844172809394, 32.5092459901323],
                        [120.95483611438544, 32.510104297017065],
                        [120.95921347949775, 32.51353752455613],
                        [120.96011470172675, 32.513322947834936],
                        [120.96659491870673, 32.51293670973679],
                        [120.98436187122138, 32.51431000075242],
                        [120.99079917285712, 32.5196744187822],
                        [120.9892113051203, 32.52044689497849],
                        [120.98702262256415, 32.52018940291306],
                        [120.97689460132392, 32.521820185994116],
                        [120.9723884901789, 32.522335170124975],
                        [120.9659941038874, 32.524352191304175],
                        [120.9608442625788, 32.52525341353318],
                        [120.95234702441962, 32.528600810383764],
                        [120.94556640002997, 32.53053200087449]
                        ]
                        var lw_areaJson = [
                        [120.940620, 32.550200],
                        [120.939070, 32.551090],
                        [120.934110, 32.554030],
                        [120.930270, 32.556310],
                        [120.926160, 32.558750],
                        [120.924070, 32.559580],
                        [120.922970, 32.557480],
                        [120.921270, 32.552580],
                        [120.919110, 32.546490],
                        [120.917760, 32.542540],
                        [120.925030, 32.539690],
                        [120.930830, 32.537050],
                        [120.936870, 32.534510],
                        [120.937260, 32.536150],
                        [120.937940, 32.539040]
                        ]

                        var sy_areaJson = [
                        [120.973440, 32.472890],
                        [120.966510, 32.452270],
                        [120.962730, 32.440610],
                        [120.939650, 32.438730],
                        [120.939470, 32.454520],
                        [120.956730, 32.455080],
                        [120.956060, 32.472130]
                        ]

                        var tj_areaJson = [
                        [120.987650, 32.516090],
                        [120.984430, 32.514010],
                        [120.978400, 32.509260],
                        [120.971940, 32.505960],
                        [120.961280, 32.502070],
                        [120.958930, 32.501170],
                        [120.953300, 32.499100],
                        [120.944960, 32.494970],
                        [120.938770, 32.490290],
                        [120.939060, 32.481530],
                        [120.978510, 32.488420],
                        [120.979050, 32.490070],
                        [120.984910, 32.507260],
                        [120.986440, 32.511650],
                        [120.986690, 32.512640],
                        [120.987410, 32.515250]
                        ]

                        var xx_areaJson = [
                        [120.938590, 32.498610],
                        [120.918750, 32.494430],
                        [120.917670, 32.509200],
                        [120.895250, 32.505090],
                        [120.892760, 32.518750],
                        [120.893730, 32.521870],
                        [120.899330, 32.523840],
                        [120.903250, 32.523590],
                        [120.910010, 32.520800],
                        [120.927410, 32.514290],
                        [120.933380, 32.512060],
                        [120.938490, 32.511060],
                        [120.938510, 32.509180]
                        ]

                        var yh_areaJson = [
                        [120.939650, 32.438730],
                        [120.925270, 32.437420],
                        [120.925180, 32.438840],
                        [120.917370, 32.438910],
                        [120.912870, 32.437930],
                        [120.911920, 32.439130],
                        [120.912740, 32.444200],
                        [120.915780, 32.449090],
                        [120.917030, 32.450530],
                        [120.917370, 32.451770],
                        [120.915780, 32.453780],
                        [120.939470, 32.454540]
                        ]


                        var bj_areaJson = [
                        [120.917690, 32.509200],
                        [120.918750, 32.494380],
                        [120.919050, 32.489490],
                        [120.898960, 32.485260],
                        [120.895270, 32.505110],
                        [120.905530, 32.506940],
                        [120.915030, 32.508690],
                        [120.917030, 32.509070]
                        ]

                        var xh_areaJson = [
                        [120.991230, 32.519260],
                        [120.987630, 32.516090],
                        [120.982370, 32.514380],
                        [120.964170, 32.513380],
                        [120.959790, 32.513760],
                        [120.957030, 32.512660],
                        [120.951150, 32.509270],
                        [120.948850, 32.509110],
                        [120.938490, 32.511060],
                        [120.939000, 32.511680],
                        [120.945610, 32.530930],
                        [120.955520, 32.528360],
                        [120.986980, 32.520290],
                        [120.989150, 32.520460],
                        [120.991250, 32.519240]
                        ]

                        var lq_areaJson = [
                        [120.978510, 32.488420],
                        [120.973440, 32.472890],
                        [120.956100, 32.472130],
                        [120.955980, 32.476420],
                        [120.950700, 32.475520],
                        [120.947410, 32.475050],
                        [120.944620, 32.473440],
                        [120.942520, 32.471160],
                        [120.939580, 32.470990],
                        [120.938780, 32.481480]
                        ]

                        var zxz_areaJson = [
                        [120.939580, 32.470990],
                        [120.939320, 32.463820],
                        [120.929950, 32.470720],
                        [120.901730, 32.469870],
                        [120.898960, 32.485280],
                        [120.909910, 32.487570],
                        [120.919070, 32.489490],
                        [120.918720, 32.494430],
                        [120.938590, 32.498610],
                        [120.938680, 32.494000],
                        [120.938810, 32.490340],
                        [120.939170, 32.481600],
                        [120.938830, 32.481490],
                        [120.939170, 32.476750],
                        [120.939520, 32.472350]
                        ]

                        var yjy_areaJson = [
                        [120.901900, 32.469870],
                        [120.903690, 32.469880],
                        [120.905360, 32.465130],
                        [120.906020, 32.464370],
                        [120.906210, 32.463210],
                        [120.915780, 32.453780],
                        [120.956730, 32.455100],
                        [120.956110, 32.472130],
                        [120.955990, 32.476420],
                        [120.950990, 32.475560],
                        [120.947430, 32.475050],
                        [120.944580, 32.473420],
                        [120.942520, 32.471140],
                        [120.939580, 32.470980],
                        [120.939300, 32.463860],
                        [120.929970, 32.470720]
                        ]
                        var yk_areaJson = [
                        [121.084440, 32.518230],
                        [121.081010, 32.510850],
                        [121.079460, 32.509690],
                        [121.065900, 32.505930],
                        [121.060920, 32.504480],
                        [121.059120, 32.502380],
                        [121.055860, 32.495360],
                        [121.048050, 32.497890],
                        [121.023930, 32.505350],
                        [121.013980, 32.510050],
                        [121.008650, 32.512010],
                        [120.991230, 32.519240],
                        [120.995690, 32.523510],
                        [121.004190, 32.531980],
                        [121.010630, 32.538560],
                        [121.020500, 32.532920],
                        [121.026850, 32.529450],
                        [121.032340, 32.526190],
                        [121.037490, 32.523220],
                        [121.045820, 32.520470],
                        [121.057490, 32.517650],
                        [121.062130, 32.526050],
                        [121.082640, 32.519530],
                        [121.084360, 32.518300]
                        ]
                        var ny_areaJson = [
                        [120.981660, 32.538090],
                        [120.983010, 32.531020],
                        [120.969710, 32.536070],
                        [120.954620, 32.542270],
                        [120.939450, 32.550860],
                        [120.926170, 32.558750],
                        [120.924070, 32.559580],
                        [120.928530, 32.565440],
                        [120.934020, 32.572960],
                        [120.936290, 32.575320],
                        [120.938980, 32.574030],
                        [120.945610, 32.570860],
                        [120.949540, 32.569000],
                        [120.953540, 32.567080],
                        [120.978380, 32.555210],
                        [120.980540, 32.544240],
                        [120.981700, 32.538020]
                        ]

                        var sh_areaJson = [
                        [121.092850, 32.544930],
                        [121.087790, 32.530610],
                        [121.087360, 32.529370],
                        [121.083930, 32.523730],
                        [121.085130, 32.522140],
                        [121.084360, 32.518160],
                        [121.082640, 32.519530],
                        [121.062130, 32.525970],
                        [121.057580, 32.517720],
                        [121.046420, 32.520400],
                        [121.037580, 32.523300],
                        [121.010710, 32.538560],
                        [120.995690, 32.523510],
                        [120.989770, 32.529450],
                        [120.990290, 32.535240],
                        [120.981700, 32.538060],
                        [120.978360, 32.555210],
                        [120.936300, 32.575320],
                        [120.939390, 32.580810],
                        [120.933040, 32.585300],
                        [120.932520, 32.596290],
                        [120.933720, 32.596940],
                        [120.933810, 32.599180],
                        [120.934410, 32.597440],
                        [120.935270, 32.597230],
                        [120.935870, 32.598670],
                        [120.937160, 32.599540],
                        [120.937500, 32.602000],
                        [120.939300, 32.600770],
                        [120.942390, 32.603590],
                        [120.942050, 32.605540],
                        [120.943080, 32.604390],
                        [120.944450, 32.605470],
                        [120.945400, 32.604750],
                        [120.944110, 32.601640],
                        [120.946250, 32.603880],
                        [120.947970, 32.602140],
                        [120.946940, 32.600190],
                        [120.966340, 32.600480],
                        [120.989600, 32.587030],
                        [121.000160, 32.580960],
                        [121.004790, 32.577770],
                        [121.012430, 32.573940],
                        [121.018350, 32.570900],
                        [121.023760, 32.568300],
                        [121.028390, 32.565980],
                        [121.032770, 32.564250],
                        [121.039040, 32.563090],
                        [121.043070, 32.560700],
                        [121.044790, 32.557950],
                        [121.053630, 32.554550],
                        [121.092680, 32.545080],
                        [121.092850, 32.544930]
                        ]
                        var xl_1_areaJson = [
                        [121.02359349496217, 32.50469099258302],
                        [121.0163408017859, 32.491902220000014],
                        [121.0227351880774, 32.490915167082534],
                        [121.02531268618871, 32.496514485957825],
                        [121.02779362477548, 32.49600909711522],
                        [121.03074405469187, 32.50281117917699],
                        [121.0307333258558, 32.502864823357285],
                        [121.02370593823679, 32.50479601384801],
                        [121.02359349496217, 32.50469099258302]
                        ]
                        var xl_2_areaJson = [
                        [121.02532940795483, 32.49638181237588],
                        [121.03903528651692, 32.4936115055769],
                        [121.03768345317341, 32.48846166426831],
                        [121.02272745570637, 32.49086492354565],
                        [121.02270599803425, 32.49086492354565],
                        [121.02279182872273, 32.49092929656201],
                        [121.02532940795483, 32.49638181237588]
                        ]
                        var xl_3_areaJson = [
                        [121.0344591236815, 32.48333524440645],
                        [121.03351498610826, 32.48097490047334],
                        [121.03169108397813, 32.47848581050752],
                        [121.03156233794542, 32.47702668880342],
                        [121.04484463698716, 32.474880921591506],
                        [121.045896062921, 32.481146561850295],
                        [121.04516650206895, 32.48127530788301],
                        [121.0344591236815, 32.48333524440645]
                        ]
                        var xl_4_areaJson = [
                        [121.03073674132885, 32.50276278762231],
                        [121.02779704024853, 32.49596070556054],
                        [121.04736643722119, 32.491905205530024],
                        [121.0481603710896, 32.497870438379145],
                        [121.03073674132885, 32.50276278762231]
                        ]
                        var xl_5_areaJson = [
                        [121.03903528651692, 32.49345057303601],
                        [121.04731794795491, 32.49186270529919],
                        [121.04592319926716, 32.48115532691174],
                        [121.03444334468342, 32.48334400946789],
                        [121.03631016215779, 32.4855970650404],
                        [121.0366534849117, 32.48587601477795],
                        [121.03768345317341, 32.48836510474377],
                        [121.03766157649328, 32.48845713007709],
                        [121.03903528651692, 32.49345057303601]
                        ]
                        var xl_6_areaJson = [
                        [121.03165952598198, 32.47673308268058],
                        [121.04522077476128, 32.4748448075341],
                        [121.04436246787651, 32.46797835245597],
                        [121.03045789634331, 32.47098242655265],
                        [121.03061067750515, 32.471539192479945],
                        [121.03165952598198, 32.47673308268058]
                        ]
                        var xl_7_areaJson = [
                        [121.01633585637589, 32.49181824129374],
                        [121.0142115468361, 32.48782711427958],
                        [121.01704395955582, 32.4868400613621],
                        [121.0175804013588, 32.487548164542034],
                        [121.018696200309, 32.48716192644389],
                        [121.01916826909562, 32.48789148729594],
                        [121.02062739079972, 32.487247757132366],
                        [121.02088488286515, 32.48731213014872],
                        [121.02247275060196, 32.48666839998515],
                        [121.02097071355362, 32.48668985765727],
                        [121.02103508656998, 32.486046127493694],
                        [121.02069176381607, 32.48596029680522],
                        [121.02082050984879, 32.48568134706767],
                        [121.02455414479752, 32.48486595552714],
                        [121.02502621358414, 32.48523073595317],
                        [121.02534807866593, 32.48589592378886],
                        [121.0284594411232, 32.48439388674052],
                        [121.02903879827042, 32.48563843172343],
                        [121.02843798345108, 32.485981754477336],
                        [121.0291246289589, 32.48641090791972],
                        [121.03094853108902, 32.48613195818217],
                        [121.0311416501381, 32.48666839998515],
                        [121.0336092824318, 32.48660402696879],
                        [121.03633440679093, 32.48563843172343],
                        [121.03665627187272, 32.48587446611674],
                        [121.03760040944596, 32.48847084444316],
                        [121.0376433247902, 32.48847084444316],
                        [121.01633585637589, 32.49181824129374]
                        ]
                        var xl_8_areaJson = [
                        [121.02185862948956, 32.49202858714471],
                        [121.02316754748882, 32.49177109507928],
                        [121.0226954787022, 32.49084841517816],
                        [121.02149384906353, 32.491148822587824],
                        [121.0216869681126, 32.49157797603021],
                        [121.02185862948956, 32.49202858714471]
                        ]
                        var xl_9_areaJson = [
                        [121.032199173754, 32.45716935344695],
                        [121.02953842241122, 32.45819932170867],
                        [121.02765014726474, 32.45862847515105],
                        [121.02533271867587, 32.459057628593435],
                        [121.02224281389071, 32.46000176616668],
                        [121.01786544877841, 32.46189004131316],
                        [121.01486137468173, 32.463263332328786],
                        [121.0105698402579, 32.465323268852224],
                        [121.00670745927646, 32.46746903606414],
                        [121.00413253862216, 32.46961480327605],
                        [121.00147178727939, 32.472018062553396],
                        [120.9984677131827, 32.47442132183074],
                        [120.99906037662299, 32.47550380072495],
                        [121.00026200626166, 32.47520339331528],
                        [121.00081990573676, 32.47606170020005],
                        [120.99961827609809, 32.476662515019385],
                        [120.99991868350776, 32.477649567936865],
                        [121.00112031314643, 32.47730624518296],
                        [121.00193570468696, 32.47850787482163],
                        [121.00266526553901, 32.478164552067724],
                        [121.00300858829291, 32.48043906531235],
                        [121.00348065707954, 32.4802674039354],
                        [121.00309441898139, 32.482370255803076],
                        [121.00395272586616, 32.48348605475327],
                        [121.00547879804363, 32.48590963815493],
                        [121.0055646287321, 32.48640316461367],
                        [121.00792497266521, 32.48865622018618],
                        [121.01009219754924, 32.48771208261294],
                        [121.0109852683992, 32.4895241223592],
                        [121.0139035118074, 32.487861152769966],
                        [121.01720799331375, 32.48674535381977],
                        [121.01757266898777, 32.48755961181249],
                        [121.01882794280674, 32.4870929074439],
                        [121.01921139394386, 32.48773013964164],
                        [121.02067051564796, 32.48720442667472],
                        [121.02059541379555, 32.48702203646171],
                        [121.02086363469704, 32.48694693460929],
                        [121.02094946538551, 32.487354630379556],
                        [121.02247296010597, 32.4867323578881],
                        [121.02241931592567, 32.48653923883903],
                        [121.02126060163124, 32.48680745974052],
                        [121.02107821141823, 32.48604571238029],
                        [121.02072415982826, 32.486120814232706],
                        [121.02063832913979, 32.48578822031486],
                        [121.02067051564796, 32.485659474282144],
                        [121.02252660428627, 32.48531615152824],
                        [121.02394281064613, 32.48504793062675],
                        [121.02472601567848, 32.48483335390556],
                        [121.02523027097328, 32.485670203118204],
                        [121.02729020749672, 32.484886998085855],
                        [121.02865276967628, 32.484361285118936],
                        [121.02916775380714, 32.48554145708549],
                        [121.02864204084023, 32.48570238962638],
                        [121.02886734639748, 32.4862817467736],
                        [121.02963982259377, 32.48629247560966],
                        [121.0308521810685, 32.48624956026542],
                        [121.03104530011757, 32.486614340691446],
                        [121.03348074590309, 32.48652851000297],
                        [121.03349105573113, 32.4863523144348],
                        [121.03505746579583, 32.48595534750059],
                        [121.03641445405336, 32.48553465579866],
                        [121.03542740113588, 32.484622704733596],
                        [121.03468711144777, 32.48377512668489],
                        [121.03448326356263, 32.483421075094924],
                        [121.03426868684144, 32.48326014255403],
                        [121.03410775430055, 32.482884633291945],
                        [121.03401119477601, 32.48227308963655],
                        [121.03345329530092, 32.4809856293094],
                        [121.03320653207155, 32.48061012004732],
                        [121.03253061539979, 32.47984837268709],
                        [121.03223020799012, 32.479429948080764],
                        [121.03195125825258, 32.47876476024507],
                        [121.0317044950232, 32.47870038722871],
                        [121.03122169740053, 32.475867974508986],
                        [121.03051317521258, 32.47105692176308],
                        [121.03002480366786, 32.46423111493358],
                        [121.02988233233405, 32.46125582670167],
                        [121.03020677487285, 32.46077189553118],
                        [121.03032479206951, 32.460396386269096],
                        [121.03031406323345, 32.46008525002337],
                        [121.03033552090557, 32.45976338494158],
                        [121.03197145890064, 32.457905029207666],
                        [121.03215384911366, 32.4575509776177],
                        [121.03221822213001, 32.45727202788015],
                        [121.03220749329395, 32.457422231584985],
                        [121.032199173754, 32.45716935344695]
                        ]

                        var tx_1_areaJson = [
                        [121.01476930021609, 32.46334415000458],
                        [121.0120870912012, 32.46467452567597],
                        [121.00979112028445, 32.46585469764252],
                        [121.00803159117068, 32.46677737754364],
                        [121.00657246946658, 32.467742972789004],
                        [121.00831054090823, 32.47033935111542],
                        [121.01049107208533, 32.47314917261522],
                        [121.0111721436711, 32.47417687378133],
                        [121.01314624950606, 32.47326492271627],
                        [121.01578554317672, 32.47219203911031],
                        [121.01615032360274, 32.47279285392965],
                        [121.01684769794662, 32.4724602600118],
                        [121.01656874820907, 32.47179507217611],
                        [121.0201414506169, 32.47015356025899],
                        [121.02209409877975, 32.46929525337423],
                        [121.02379998371322, 32.468587150194296],
                        [121.0228236596318, 32.467385520555624],
                        [121.02251252338607, 32.46720313034261],
                        [121.02137526676376, 32.46578692398275],
                        [121.01971229717452, 32.4664628406545],
                        [121.01959427997787, 32.46639846763814],
                        [121.01917585537154, 32.46668814621175],
                        [121.01784547970016, 32.466355552293905],
                        [121.01703008815963, 32.466591586687215],
                        [121.01639708683211, 32.46574400863851],
                        [121.01490577861983, 32.46331929168905],
                        [121.01476930021609, 32.46334415000458]
                        ]
                        var tx_2_areaJson = [
                        [121.0065777291326, 32.467706970524006],
                        [121.00327324762625, 32.470453552555256],
                        [121.00838275104762, 32.47920714923206],
                        [121.01039977222682, 32.47875653811756],
                        [121.01100058704615, 32.4797006756908],
                        [121.01147265583278, 32.479614845002324],
                        [121.01276011615992, 32.48167478152576],
                        [121.01354248317624, 32.48154769594667],
                        [121.01427204402829, 32.484079701256725],
                        [121.01216919216061, 32.48498092348573],
                        [121.01191170009518, 32.48446593935487],
                        [121.01036932515962, 32.48532311269183],
                        [121.00996162938935, 32.48555914708514],
                        [121.01081993627412, 32.48680369206805],
                        [121.00974705266816, 32.48734013387103],
                        [121.01103451299531, 32.4895502740993],
                        [121.01401712941987, 32.48787657567401],
                        [121.01717140722138, 32.486717861379574],
                        [121.01753618764741, 32.48755471059222],
                        [121.01890947866303, 32.48710409947772],
                        [121.01850178289277, 32.48626725026507],
                        [121.01749327230317, 32.486696403707455],
                        [121.01654913472993, 32.484722297872494],
                        [121.01468231725556, 32.481203239644955],
                        [121.01365492645085, 32.479120711901594],
                        [121.01361201110662, 32.47869155845921],
                        [121.0134296208936, 32.4785091682462],
                        [121.01327941718877, 32.478080014803815],
                        [121.01291463676274, 32.476824740984846],
                        [121.01318285766423, 32.47652433357518],
                        [121.0123674661237, 32.475569467165876],
                        [121.01169154945195, 32.4744751258878],
                        [121.01148770156682, 32.474110345461774],
                        [121.01113364997686, 32.47417471847813],
                        [121.00833342376531, 32.47041962585728],
                        [121.00659535232366, 32.46770523033421],
                        [121.0065777291326, 32.467706970524006]
                        ]
                        var tx_3_areaJson = [
                        [121.02283470272387, 32.46905189078827],
                        [121.02307073711718, 32.469491773066714],
                        [121.02338187336291, 32.47006040137787],
                        [121.02369300960864, 32.47091870826264],
                        [121.02381102680529, 32.47113328498383],
                        [121.02388612865771, 32.47165899795075],
                        [121.02422945141161, 32.47217398208161],
                        [121.02357499241198, 32.47243147414704],
                        [121.02230898975695, 32.47302156013031],
                        [121.02111808895434, 32.47341852706452],
                        [121.0200130188402, 32.47377257865448],
                        [121.01853243946398, 32.474223189768985],
                        [121.01837150692309, 32.47426610511322],
                        [121.01904742359484, 32.47537117522736],
                        [121.01931564449633, 32.47584324401398],
                        [121.02039089605529, 32.47541068992818],
                        [121.02097561762054, 32.47641920051778],
                        [121.01992955610473, 32.4768912693044],
                        [121.02046063348968, 32.47772275409902],
                        [121.01926436826903, 32.47829138241018],
                        [121.01915171549041, 32.478334297754415],
                        [121.01951649591643, 32.47903703651632],
                        [121.01984908983428, 32.47947691879476],
                        [121.01917317316253, 32.479809512712606],
                        [121.01926973268706, 32.480093826868185],
                        [121.01958086893279, 32.47997580967153],
                        [121.01965060636718, 32.48017429313863],
                        [121.02007975980956, 32.48000799617971],
                        [121.02049529270286, 32.48078356969842],
                        [121.01988374904747, 32.481051790599906],
                        [121.01940631584282, 32.48118053663262],
                        [121.01927962350709, 32.48122067400355],
                        [121.01947810697419, 32.48197705694575],
                        [121.01802971410615, 32.482406210388135],
                        [121.01776685762269, 32.48247058340449],
                        [121.01832991201181, 32.483610937349226],
                        [121.01860886174936, 32.48343927597227],
                        [121.01882343847055, 32.48376114105406],
                        [121.01857667524118, 32.483889887086775],
                        [121.01943745483095, 32.485883183498245],
                        [121.02050497401888, 32.48575443746553],
                        [121.02080538142854, 32.48695070268617],
                        [121.02062835563356, 32.48702580453859],
                        [121.02064981330568, 32.48722428800569],
                        [121.01922824252779, 32.48771781446443],
                        [121.01849868167574, 32.48626942159639],
                        [121.01749017108614, 32.48668248178468],
                        [121.01458223750598, 32.48105067308022],
                        [121.01370247294909, 32.47920531327797],
                        [121.01365955760485, 32.47875470216347],
                        [121.01344498088366, 32.478432837081684],
                        [121.0129299967528, 32.47686642701699],
                        [121.01325186183459, 32.47645873124672],
                        [121.01267250468737, 32.4759866624601],
                        [121.01226480891711, 32.47545022065712],
                        [121.01149233272082, 32.4740769296415],
                        [121.01578097543162, 32.47220248065349],
                        [121.01615112027568, 32.47281402430889],
                        [121.01685385903758, 32.47245997271892],
                        [121.01659636697215, 32.47181624255535],
                        [121.02283470272387, 32.46905189078827]
                        ]
                        var tx_4_areaJson = [
                        [121.01426137860113, 32.483886406707185],
                        [121.0122014420777, 32.48500220565738],
                        [121.01181520397955, 32.48474471359195],
                        [121.00992692883307, 32.48556010513248],
                        [121.01087106640631, 32.486675904082674],
                        [121.00971235211188, 32.487362549590486],
                        [121.00992692883307, 32.487877533721345],
                        [121.00799573834234, 32.48869292526187],
                        [121.00550664837652, 32.48633258132877],
                        [121.00533498699957, 32.48568885116519],
                        [121.0041333573609, 32.48384349136295],
                        [121.00314630444342, 32.48247020034732],
                        [121.0035754578858, 32.48023860244693],
                        [121.00310338909918, 32.48023860244693],
                        [121.00254548962408, 32.47804991989078],
                        [121.00194467480475, 32.47847907333316],
                        [121.00128206442606, 32.477297767818804],
                        [120.99999460409892, 32.47759817522847],
                        [120.99962982367289, 32.47667549532735],
                        [121.00078853796732, 32.47607468050801],
                        [121.00035938452494, 32.47515200060689],
                        [120.99907192419779, 32.47543095034444],
                        [120.99849256705058, 32.4744868127712],
                        [121.00321325491679, 32.4704527704128],
                        [121.00832018088114, 32.47914312762105],
                        [121.01078781317484, 32.47912166994893],
                        [121.01093801687968, 32.47967956942403],
                        [121.01153883169901, 32.47965811175191],
                        [121.01267608832133, 32.48161075991475],
                        [121.01357731055033, 32.48161075991475],
                        [121.0142210407139, 32.4839067308315],
                        [121.01426137860113, 32.483886406707185]
                        ]
                        var tx_5_areaJson = [
                        [121.01846001982058, 32.474370711264804],
                        [121.01927541136111, 32.47578691762467],
                        [121.02030537962283, 32.475486510215],
                        [121.02103494047488, 32.47643064778824],
                        [121.01996205686892, 32.47690271657486],
                        [121.0203912103113, 32.47771810811539],
                        [121.02210782408083, 32.47720312398453],
                        [121.02343819975222, 32.47964929860611],
                        [121.02382443785037, 32.479348891196445],
                        [121.02468274473513, 32.47943472188492],
                        [121.02519772886599, 32.47913431447525],
                        [121.02562688230837, 32.47917722981949],
                        [121.02541230558718, 32.478318922934726],
                        [121.02661393522585, 32.477846854148105],
                        [121.02738641142214, 32.47793268483658],
                        [121.02725766538943, 32.476559393820956],
                        [121.02828763365115, 32.4760444096901],
                        [121.02983258604372, 32.47887682240982],
                        [121.0315921151575, 32.47801851552506],
                        [121.03050292879344, 32.47092448779407],
                        [121.02665127664805, 32.472619643891484],
                        [121.0263723269105, 32.472115388596684],
                        [121.02599681764842, 32.47127853938404],
                        [121.02616847902537, 32.4711819798595],
                        [121.02556766420604, 32.47015201159778],
                        [121.02845372110606, 32.46896111079517],
                        [121.02757395654918, 32.466826072419316],
                        [121.02689803987742, 32.465828290665776],
                        [121.02643669992686, 32.46581756182972],
                        [121.02505268007518, 32.467577090943486],
                        [121.02409781366588, 32.46593557902637],
                        [121.02364720255137, 32.46628963061634],
                        [121.02270306497813, 32.46726595469776],
                        [121.02381886392833, 32.46853195735279],
                        [121.02282108217479, 32.46901475497547],
                        [121.02341632307208, 32.470063913813696],
                        [121.02367381513751, 32.470825661173926],
                        [121.02375964582599, 32.47104023789512],
                        [121.02387766302265, 32.47165178155051],
                        [121.02423171461261, 32.47219895218955],
                        [121.02379183233417, 32.472370613566504],
                        [121.0229335254494, 32.47278903817283],
                        [121.02162460745014, 32.47328256463157],
                        [121.0203586047951, 32.47366880272971],
                        [121.01909260214008, 32.474076498499976],
                        [121.01847032964862, 32.47430180405723],
                        [121.01846001982058, 32.474370711264804]
                        ]
                        var tx_6_areaJson = [
                        [121.03630764810968, 32.48550414577222],
                        [121.03362543909479, 32.48627662196851],
                        [121.0335181507342, 32.48644828334546],
                        [121.03107197611261, 32.48666286006665],
                        [121.03090031473566, 32.48627662196851],
                        [121.02888329355646, 32.486298079640626],
                        [121.02856142847467, 32.48567580714917],
                        [121.02914078562189, 32.48550414577222],
                        [121.02866871683527, 32.484345431477784],
                        [121.02529986231256, 32.48567580714917],
                        [121.0247848781817, 32.484817500264406],
                        [121.02270348398615, 32.48526811137891],
                        [121.02077229349543, 32.485568518788575],
                        [121.02083666651178, 32.48597621455884],
                        [121.02102978556086, 32.48599767223096],
                        [121.02128727762629, 32.48666286006665],
                        [121.02255328028131, 32.486598487050294],
                        [121.0225318226092, 32.48674869075513],
                        [121.02102978556086, 32.48737096324658],
                        [121.02053625910212, 32.48576163783765],
                        [121.01952774851252, 32.485847468526124],
                        [121.01862652628351, 32.48389482036328],
                        [121.01886256067682, 32.48372315898633],
                        [121.01866944162775, 32.483551497609376],
                        [121.01841194956232, 32.483572955281495],
                        [121.01770384638239, 32.48243569865918],
                        [121.01952774851252, 32.48198508754468],
                        [121.0192917141192, 32.48123406902051],
                        [121.02045042841364, 32.48078345790601],
                        [121.02010710565973, 32.48013972774243],
                        [121.01967795221735, 32.48016118541455],
                        [121.01959212152887, 32.48003243938184],
                        [121.01931317179132, 32.480075354726075],
                        [121.01918442575861, 32.47990369334912],
                        [121.01978524057795, 32.47949599757886],
                        [121.01920020475669, 32.4784036200754],
                        [121.02046620741172, 32.47763114387911],
                        [121.02198970213217, 32.47711615974825],
                        [121.02338445081992, 32.47951941902559],
                        [121.0238136042623, 32.4793048423044],
                        [121.02465045347495, 32.479412130665],
                        [121.0249294032125, 32.479197553943806],
                        [121.02563750639243, 32.47915463859957],
                        [121.02535855665488, 32.47836070473116],
                        [121.02658164396567, 32.47788863594454],
                        [121.0273970355062, 32.47788863594454],
                        [121.02720391645713, 32.476429514240436],
                        [121.02737557783408, 32.47630076820772],
                        [121.02825534239096, 32.476000360798054],
                        [121.02980029478354, 32.4788542311899],
                        [121.03153836622519, 32.47810321266573],
                        [121.0319726745816, 32.4785300990125],
                        [121.03243659198917, 32.47978423928367],
                        [121.03312323749698, 32.480342138758765],
                        [121.03393862903751, 32.481801260462866],
                        [121.0341532057587, 32.48300289010154],
                        [121.03441069782413, 32.48326038216697],
                        [121.03578398883975, 32.484848249903784],
                        [121.03621314228214, 32.48527740334617],
                        [121.03630764810968, 32.48550414577222]
                        ]
                        var tx_7_areaJson = [
                        [121.01939795495976, 32.47821195392324],
                        [121.02040646554936, 32.477675512120264],
                        [121.0198914814185, 32.47682793407156],
                        [121.01960180284489, 32.47699959544851],
                        [121.01950524332035, 32.47682793407156],
                        [121.01923702241886, 32.47699959544851],
                        [121.01909754755009, 32.47675283221914],
                        [121.0186683941077, 32.476903035923975],
                        [121.01907608987797, 32.4777720716448],
                        [121.01850746156681, 32.47804029254629],
                        [121.01863620759953, 32.47857673434927],
                        [121.01925848009098, 32.47828705577566],
                        [121.01939795495976, 32.47821195392324]
                        ]
                        var tx_8_areaJson = [
                        [120.97860863763644, 32.48814350315093],
                        [120.98208478051974, 32.48569732852935],
                        [120.98347952920749, 32.486298143348684],
                        [120.98388722497775, 32.48593336292266],
                        [120.98457387048556, 32.4854183787918],
                        [120.98536780435397, 32.4853110904312],
                        [120.98684838373019, 32.48533254810332],
                        [120.98807147104098, 32.48509651371001],
                        [120.98850062448336, 32.48443132587432],
                        [120.98858645517184, 32.48370176502227],
                        [120.98759940225436, 32.48342281528472],
                        [120.98695567209079, 32.482993661842336],
                        [120.98656943399264, 32.48288637348174],
                        [120.98676255304171, 32.48219972797393],
                        [120.987535029238, 32.481749116859426],
                        [120.98792126733615, 32.48123413272857],
                        [120.98802855569674, 32.48061186023711],
                        [120.98845770913913, 32.480053960762014],
                        [120.98886540490939, 32.47889524646758],
                        [120.98940184671237, 32.4784660930252],
                        [120.99023869592502, 32.47814422794341],
                        [120.99090388376071, 32.47844463535308],
                        [120.9914617832358, 32.478745042762746],
                        [120.9917836483176, 32.47861629673003],
                        [120.99189093667819, 32.47762924381255],
                        [120.99186947900607, 32.47537618824004],
                        [120.99186947900607, 32.47481828876494],
                        [120.99238446313693, 32.474517881355276],
                        [120.99262049753024, 32.4738741511917],
                        [120.99292090493991, 32.47338062473296],
                        [120.99354317743136, 32.475526391944875],
                        [120.9954958255942, 32.47494703479766],
                        [120.99577477533175, 32.4749899501419],
                        [120.9965043361838, 32.476019918403615],
                        [120.99697640497043, 32.47586971469878],
                        [120.99753430444552, 32.4753332728958],
                        [120.9986286457236, 32.47423893161773],
                        [120.99914362985446, 32.47539764591216],
                        [121.00025942880465, 32.475032865486135],
                        [121.00081732827975, 32.47608429141997],
                        [120.99970152932956, 32.47657781787871],
                        [120.9999804790671, 32.477543413124074],
                        [121.00122502405002, 32.477264463386526],
                        [121.00163271982028, 32.478015481910695],
                        [121.00182541986133, 32.47838645698156],
                        [121.00270518441822, 32.478021676555535],
                        [121.00300559182789, 32.480489308849236],
                        [121.0032416262212, 32.48244195701208],
                        [121.00532507411374, 32.485798645829924],
                        [121.00558256617917, 32.48646383366562],
                        [121.00626921168698, 32.48715047917343],
                        [121.00618338099851, 32.487493801927336],
                        [121.00656961909665, 32.48747234425522],
                        [121.00710606089963, 32.48792295536972],
                        [121.00442385188474, 32.48910312733627],
                        [121.00227808467282, 32.49056224904037],
                        [121.00249266139402, 32.49120597920395],
                        [121.00174164286985, 32.49163513264633],
                        [121.00309347621335, 32.49382381520248],
                        [121.00277161113156, 32.49459629139877],
                        [121.00184893123044, 32.49667768559433],
                        [121.00131248942746, 32.49714975438095],
                        [121.00328659526242, 32.497729111528166],
                        [121.00290035716428, 32.498029518937834],
                        [121.00317930690183, 32.498523045396574],
                        [121.00165581218137, 32.499231148576506],
                        [121.00268578044309, 32.50038986287094],
                        [121.00221371165647, 32.501248169755705],
                        [121.00320076457395, 32.50195627293564],
                        [121.00300764552487, 32.502492714738615],
                        [121.00251411906613, 32.50287895283676],
                        [121.00167726985349, 32.50262146077133],
                        [121.00103353968991, 32.501999188279875],
                        [121.0004541825427, 32.50105505070663],
                        [121.0002396058215, 32.50069027028061],
                        [120.99959587565793, 32.50038986287094],
                        [120.99925255290403, 32.50019674382187],
                        [120.99320148936643, 32.50330810627914],
                        [120.99330877772702, 32.503715802049406],
                        [120.99307274333371, 32.503715802049406],
                        [120.99298691264524, 32.50335102162338],
                        [120.99144196025266, 32.504230786180266],
                        [120.99174236766233, 32.50457410893417],
                        [120.99206423274411, 32.505475331163176],
                        [120.9919354867114, 32.50609760365463],
                        [120.9914848755969, 32.50620489201523],
                        [120.99084114543332, 32.506247807359465],
                        [120.99021887294187, 32.5062907227037],
                        [120.98993992320432, 32.50586156926132],
                        [120.98993992320432, 32.5052822121141],
                        [120.98989700786008, 32.50485305867172],
                        [120.98500465861692, 32.506977368211516],
                        [120.98496174327268, 32.50693445286728],
                        [120.9849832009448, 32.50689153752304],
                        [120.98436092845334, 32.50478868565536],
                        [120.98067020884885, 32.493995476579435],
                        [120.97865318766965, 32.48815898976303],
                        [120.97867464534177, 32.48818044743515],
                        [120.97860863763644, 32.48814350315093]
                        ]
                        var ga_1_areaJson = [
                        [120.98963878253062, 32.5047217422224],
                        [120.98989627459605, 32.50519381100902],
                        [120.98993918994029, 32.506137948582264],
                        [120.99079749682505, 32.506352525303456],
                        [120.99195621111949, 32.50626669461498],
                        [120.99191329577525, 32.50523672635326],
                        [120.99139831164439, 32.50429258878002],
                        [120.99281451800425, 32.503391366551014],
                        [120.99324367144663, 32.503648858616444],
                        [120.99358699420054, 32.50321970517406],
                        [120.99431655505259, 32.5027047210432],
                        [120.99543235400279, 32.50218973691234],
                        [120.99654815295298, 32.50171766812572],
                        [120.99929473498423, 32.50030146176586],
                        [121.00028178790171, 32.50073061520824],
                        [121.0007109413441, 32.501588922093006],
                        [121.00169799426158, 32.50253305966625],
                        [121.00225589373667, 32.50283346707592],
                        [121.0030712852772, 32.50244722897777],
                        [121.00281379321177, 32.501631837437245],
                        [121.0021700630482, 32.501116853306385],
                        [121.0025133858021, 32.500344377110096],
                        [121.00212714770396, 32.499872308323475],
                        [121.00182674029429, 32.4992285781599],
                        [121.00247047045787, 32.498885255405995],
                        [121.00320003130992, 32.49854193265209],
                        [121.00298545458872, 32.49794111783275],
                        [121.00199840167124, 32.497383218357655],
                        [121.00144050219615, 32.49695406491527],
                        [121.00028178790171, 32.49678240353832],
                        [120.99963805773814, 32.496095758030506],
                        [120.99882266619761, 32.495409112522694],
                        [120.99912307360728, 32.49497995908031],
                        [120.99770686724742, 32.49352083737621],
                        [120.99693439105113, 32.4937354140974],
                        [120.99663398364146, 32.49330626065502],
                        [120.9946598778065, 32.491417985508534],
                        [120.9944453010853, 32.49094591672191],
                        [120.99229953387339, 32.49184713895092],
                        [120.9926428566273, 32.49274836117992],
                        [120.99259994128306, 32.49343500668773],
                        [120.99212787249644, 32.49356375272045],
                        [120.99315784075816, 32.494121652195545],
                        [120.99225661852915, 32.49528036648998],
                        [120.98835132220347, 32.49729738766918],
                        [120.9874930153187, 32.497898202488514],
                        [120.98813674548228, 32.499099832127186],
                        [120.98869464495738, 32.49991522366771],
                        [120.98899505236704, 32.50081644589672],
                        [120.98929545977671, 32.5018034988142],
                        [120.98959586718638, 32.5027047210432],
                        [120.9897246132191, 32.50446425015697],
                        [120.98981044390757, 32.50480757291088],
                        [120.9897246132191, 32.504893403599354],
                        [120.98963878253062, 32.5047217422224]
                        ]
                        var ga_2_areaJson = [
                        [120.9946762853166, 32.491040512471834],
                        [120.9946762853166, 32.4913409198815],
                        [120.99587791495527, 32.492542549520174],
                        [120.99665039115156, 32.4933579410607],
                        [120.99707954459394, 32.49365834847037],
                        [120.99823825888838, 32.493744179158845],
                        [120.99879615836348, 32.49438790932242],
                        [120.99888198905195, 32.49516038551871],
                        [120.99948280387129, 32.49606160774771],
                        [121.00029819541182, 32.49679116859976],
                        [121.00141399436201, 32.497005745320955],
                        [121.00201480918135, 32.49614743843619],
                        [121.00261562400068, 32.49494580879752],
                        [121.00295894675459, 32.494001671224275],
                        [121.00227230124678, 32.492757126241365],
                        [121.00192897849287, 32.49168424263541],
                        [121.00248687796797, 32.490997597127595],
                        [121.00283020072187, 32.49005345955435],
                        [121.00489013724531, 32.48863725319449],
                        [121.00557936021013, 32.48858247546639],
                        [121.00546134301348, 32.48817477969612],
                        [121.00504291840716, 32.48823915271248],
                        [121.00459488474966, 32.487487000640506],
                        [121.00382240855338, 32.48787323873865],
                        [121.00313576304556, 32.48697201650965],
                        [121.00266369425894, 32.486242455657596],
                        [121.00103291117789, 32.48705784719812],
                        [121.00090416514517, 32.48710076254236],
                        [121.00133331858756, 32.488001984771365],
                        [121.00017460429312, 32.48791615408289],
                        [120.99815758311392, 32.48813073080408],
                        [120.99682720744254, 32.48817364614832],
                        [120.99562557780386, 32.4877015773617],
                        [120.99584015452506, 32.486800355132694],
                        [120.99506767832877, 32.486757439788455],
                        [120.993308149215, 32.48761574667322],
                        [120.99287899577261, 32.48791615408289],
                        [120.99382313334586, 32.48890320700037],
                        [120.99356564128043, 32.48920361441004],
                        [120.99425228678824, 32.49010483663904],
                        [120.99450977885367, 32.491006058868045],
                        [120.99459560954215, 32.49134938162195],
                        [120.99468144023062, 32.49130646627771],
                        [120.9946762853166, 32.491040512471834]
                        ]
                        var ga_3_areaJson = [
                        [121.00561617787231, 32.48857990504978],
                        [121.00696801121582, 32.488000547902566],
                        [121.00692509587158, 32.487743055837136],
                        [121.00641011174072, 32.487485563771706],
                        [121.006281365708, 32.48735681773899],
                        [121.00595950062622, 32.48692766429661],
                        [121.00546597416748, 32.48634830714939],
                        [121.00542305882324, 32.485983526723366],
                        [121.00462912495483, 32.48469606639622],
                        [121.0042643445288, 32.48413816692112],
                        [121.00383519108642, 32.48343006374119],
                        [121.00334166462768, 32.482485926167946],
                        [121.00314854557861, 32.48139158488987],
                        [121.0030197995459, 32.480254328267556],
                        [121.00271939213623, 32.47810856105564],
                        [121.00186108525146, 32.47836605312107],
                        [121.0013461011206, 32.47740045787571],
                        [120.99709748204101, 32.477808153645974],
                        [120.99729060109009, 32.47870937587498],
                        [120.99587439473022, 32.479288733022194],
                        [120.99578856404175, 32.47969642879246],
                        [120.99544524128784, 32.479782259480935],
                        [120.99527357991089, 32.4801899552512],
                        [120.9932780164038, 32.48042598964451],
                        [120.99334238942016, 32.48081222774265],
                        [120.99329947407593, 32.481026804463845],
                        [120.99347113545288, 32.48113409282444],
                        [120.99355696614136, 32.48132721187351],
                        [120.99379300053467, 32.481305754201394],
                        [120.99688290531982, 32.48347297908543],
                        [120.99701165135254, 32.4835588097739],
                        [120.99664687092651, 32.484266912953835],
                        [120.99593876774658, 32.48435274364231],
                        [120.99583147938598, 32.486777460591775],
                        [120.99563836033691, 32.48757139446018],
                        [120.9958529370581, 32.48782888652561],
                        [120.99653958256592, 32.48806492091892],
                        [120.99692582066406, 32.48821512462376],
                        [120.9977626698767, 32.48810783626316],
                        [120.99812745030273, 32.48810783626316],
                        [120.99879263813843, 32.488022005574685],
                        [120.99950074131836, 32.48795763255833],
                        [121.00053070958008, 32.48795763255833],
                        [121.00113152439941, 32.48795763255833],
                        [121.00128172810425, 32.48795763255833],
                        [121.00093840535034, 32.48712078334568],
                        [121.00183962757934, 32.48664871455906],
                        [121.00261210377563, 32.48630539180515],
                        [121.00323437626709, 32.48705641032932],
                        [121.00370644505371, 32.487785971181374],
                        [121.00385664875854, 32.48791471721409],
                        [121.00424288685669, 32.4877001404929],
                        [121.00460766728271, 32.487485563771706],
                        [121.00499390538086, 32.48810783626316],
                        [121.00531577046264, 32.48819366695164],
                        [121.00542305882324, 32.48821512462376],
                        [121.00561617787231, 32.48857990504978]
                        ]
                        var ga_4_areaJson = [
                        [120.98344319396223, 32.48632787123267],
                        [120.98400109343733, 32.485641225724855],
                        [120.985202723076, 32.48534081831519],
                        [120.98670476012434, 32.485126241593996],
                        [120.98734849028791, 32.48529790297095],
                        [120.9877776437303, 32.487400754838625],
                        [120.98906510405745, 32.4889457072312],
                        [120.98940842681135, 32.487658246904054],
                        [120.99039547972883, 32.487615331559816],
                        [120.98992341094221, 32.48722909346167],
                        [120.99018090300764, 32.48679994001929],
                        [120.99082463317121, 32.48632787123267],
                        [120.99095337920393, 32.486671193986574],
                        [120.99206917815413, 32.48679994001929],
                        [120.99228375487532, 32.486671193986574],
                        [120.99245541625227, 32.486628278642335],
                        [120.99404328398909, 32.48675702467505],
                        [120.9938287072679, 32.48722909346167],
                        [120.9930562310716, 32.48782990828101],
                        [120.9936141305467, 32.488602384477296],
                        [120.99378579192366, 32.48920319929663],
                        [120.99438660674299, 32.490404828935304],
                        [120.99442952208723, 32.490919813066164],
                        [120.99241250090803, 32.49169228926245],
                        [120.99249833159651, 32.492893918901125],
                        [120.9921550088426, 32.49358056440894],
                        [120.9930562310716, 32.49422429457251],
                        [120.99258416228498, 32.495125516801515],
                        [120.99099629454817, 32.49602673903052],
                        [120.98936551146711, 32.49679921522681],
                        [120.98799222045149, 32.49752877607886],
                        [120.98734849028791, 32.497915014177],
                        [120.98460190825666, 32.49667046919409],
                        [120.9840869241258, 32.49628423109595],
                        [120.98365777068342, 32.49508260145728],
                        [120.98382943206038, 32.493666395097414],
                        [120.98400109343733, 32.49220727339331],
                        [120.984301500847, 32.49143479719702],
                        [120.9848594003221, 32.49057649031226],
                        [120.98541729979719, 32.489632352739015],
                        [120.98524563842024, 32.48898862257544],
                        [120.98395817809309, 32.48701451674048],
                        [120.98344319396223, 32.48632787123267]
                        ]
                        var ga_5_areaJson = [
                        [120.98742811854233, 32.48531565667866],
                        [120.98822205241073, 32.48501524926899],
                        [120.98850100214828, 32.48402819635151],
                        [120.9885224598204, 32.483620500581246],
                        [120.98779289896835, 32.48347029687641],
                        [120.98719208414902, 32.48327717782734],
                        [120.98669855769027, 32.482869482057076],
                        [120.98659126932968, 32.48246178628681],
                        [120.98719208414902, 32.48181805612324],
                        [120.98785727198471, 32.48158202172993],
                        [120.98800747568954, 32.48072371484516],
                        [120.98828642542709, 32.480165815370064],
                        [120.98865120585312, 32.479629373567086],
                        [120.9889730709349, 32.47872815133808],
                        [120.98948805506576, 32.47836337091206],
                        [120.99004595454086, 32.4781917095351],
                        [120.99051802332748, 32.47825608255146],
                        [120.99114029581894, 32.478620862977486],
                        [120.99150507624496, 32.47877106668232],
                        [120.99184839899887, 32.47844920160053],
                        [120.99182694132675, 32.47778401376484],
                        [120.99184839899887, 32.47720465661762],
                        [120.99193422968735, 32.47611031533955],
                        [120.99182694132675, 32.47557387353657],
                        [120.99184839899887, 32.475144720094185],
                        [120.99184839899887, 32.474930143372994],
                        [120.99247067149032, 32.474393701570015],
                        [120.99268524821152, 32.47383580209492],
                        [120.99285690958847, 32.47357831002949],
                        [120.99313585932602, 32.47396454812763],
                        [120.99317877467026, 32.47432932855366],
                        [120.99337189371933, 32.47501597406147],
                        [120.99352209742416, 32.475423669831734],
                        [120.99377958948959, 32.47553095819233],
                        [120.994573523358, 32.47523055078266],
                        [120.99556057627548, 32.47497305871723],
                        [120.99586098368515, 32.47505888940571],
                        [120.99605410273422, 32.47559533120869],
                        [120.99652617152084, 32.475895738618355],
                        [120.99695532496322, 32.475938653962594],
                        [120.9973844784056, 32.475402212159615],
                        [120.99841444666733, 32.47447953225849],
                        [120.99865048106064, 32.47422204019306],
                        [120.99912254984726, 32.475402212159615],
                        [121.00023834879745, 32.475166177766305],
                        [121.00019543345321, 32.47501597406147],
                        [121.00049584086288, 32.475402212159615],
                        [121.00073187525619, 32.47604594232319],
                        [121.00060312922348, 32.47630343438862],
                        [120.99993794138778, 32.47649655343769],
                        [120.9997233646666, 32.476646757142525],
                        [120.99993794138778, 32.477419233338814],
                        [120.9970411556517, 32.4778483867812],
                        [120.99725573237289, 32.478663778321724],
                        [120.99676220591415, 32.478899812715035],
                        [120.99624722178329, 32.479114389436226],
                        [120.99586098368515, 32.4792002201247],
                        [120.99573223765243, 32.47960791589497],
                        [120.99538891489853, 32.47977957727192],
                        [120.99530308421005, 32.48018727304218],
                        [120.99341480906357, 32.48044476510761],
                        [120.99326460535873, 32.48104557992695],
                        [120.9934577244078, 32.48134598733662],
                        [120.9940156238829, 32.48156056405781],
                        [120.99470226939071, 32.48201117517231],
                        [120.99622576411117, 32.48310551645039],
                        [120.99684803660263, 32.483641958253365],
                        [120.99646179850448, 32.48430714608906],
                        [120.99607556040634, 32.484371519105416],
                        [120.99579661066879, 32.48475775720356],
                        [120.99588244135727, 32.48621687890766],
                        [120.99510996516098, 32.48675332071064],
                        [120.99386542017807, 32.48728976251362],
                        [120.9940156238829, 32.48673186303852],
                        [120.9928998249327, 32.486624574677926],
                        [120.99214880640854, 32.4867104053664],
                        [120.99169819529403, 32.48675332071064],
                        [120.99094717676986, 32.48668894769428],
                        [120.99079697306503, 32.48632416726826],
                        [120.9901961582457, 32.4867104053664],
                        [120.9899815815245, 32.487118101136666],
                        [120.99038927729477, 32.48759016992329],
                        [120.98950951273788, 32.48767600061176],
                        [120.98903744395126, 32.488920545594674],
                        [120.98783581431259, 32.48748288156269],
                        [120.98768561060776, 32.4867104053664],
                        [120.9876212375914, 32.48649582864521],
                        [120.98742811854233, 32.48531565667866]
                        ]
                        var ga_6_areaJson = [
                        [120.99141987406851, 32.518976134475345],
                        [120.98867329203726, 32.51661579054224],
                        [120.98824413859488, 32.515671652969],
                        [120.9852400644982, 32.507217330154056],
                        [120.98893078410269, 32.50541488569605],
                        [120.98991783702017, 32.50489990156519],
                        [120.98991783702017, 32.506230277236575],
                        [120.9907332285607, 32.50640193861353],
                        [120.99202068888785, 32.50635902326929],
                        [120.99176319682242, 32.50429908674585],
                        [120.99292191111685, 32.50335494917261],
                        [120.99304250577052, 32.50394390160808],
                        [120.99364332058985, 32.503343086788746],
                        [120.99518827298243, 32.50231311852703],
                        [120.99905065396388, 32.50025318200359],
                        [121.00068143704493, 32.50145481164226],
                        [121.00222638943751, 32.503085594723316],
                        [121.00351384976466, 32.5020556264616],
                        [121.00231222012599, 32.50154064233074],
                        [121.00256971219142, 32.50008152062664],
                        [121.00179723599513, 32.49905155236492],
                        [121.00282720425685, 32.49879406029949],
                        [121.00368551114161, 32.49827907616863],
                        [121.0029988656338, 32.497849922726246],
                        [121.0029988656338, 32.49742076928386],
                        [121.00128225186427, 32.497163277218434],
                        [121.00359968045314, 32.493644218990895],
                        [121.00325635769923, 32.49355838830242],
                        [121.00179723599513, 32.49124095971355],
                        [121.0029988656338, 32.49098346764812],
                        [121.00291303494532, 32.49046848351726],
                        [121.00668958523829, 32.488151054928395],
                        [121.00806287625392, 32.48875186974773],
                        [121.01020864346583, 32.487636070797535],
                        [121.01098111966212, 32.48952434594402],
                        [121.01389936307032, 32.488151054928395],
                        [121.02402738431056, 32.50523136193523],
                        [121.02376989224513, 32.50548885400066],
                        [120.99141987406851, 32.518976134475345]
                        ]
                        var gz_1_areaJson = [
                        [120.991153392608, 32.51042309683267],
                        [120.98991957646115, 32.506249579605495],
                        [120.99078861218197, 32.50645342749063],
                        [120.99192586880429, 32.50635686796609],
                        [120.99181042906464, 32.504381628583324],
                        [120.99301205870331, 32.50348040635432],
                        [120.9931541110291, 32.5038547820686],
                        [120.9942699099793, 32.502996475183835],
                        [120.99543377918775, 32.50512924646408],
                        [121.00043599424852, 32.50300380337648],
                        [121.0021816933092, 32.50606235188027],
                        [121.00226752399767, 32.506105267224505],
                        [121.00735173526586, 32.50369913420956],
                        [121.0092507392484, 32.50726110778134],
                        [121.0103691156556, 32.506959566823866],
                        [121.01184969503183, 32.510500082723524],
                        [121.00119853828168, 32.51477975476349],
                        [120.99557662818647, 32.51722592938507],
                        [120.99480415199018, 32.5154664002713],
                        [120.99403167579389, 32.51340646374786],
                        [120.99364543769575, 32.5125481568631],
                        [120.99845195625043, 32.510831543093566],
                        [120.99613452766157, 32.50692624676788],
                        [120.99561954353071, 32.50718373883331],
                        [120.991153392608, 32.51042309683267]
                        ]
                        var gz_2_areaJson = [
                        [120.99541820969368, 32.50494984178108],
                        [120.99425949539925, 32.503018651290354],
                        [120.99885143723274, 32.50040081529182],
                        [121.00241341080452, 32.50306156663459],
                        [121.003400463722, 32.50216034440559],
                        [121.00237049546028, 32.50143078355354],
                        [121.002499241493, 32.50018623857063],
                        [121.00176968064095, 32.49911335496467],
                        [121.00378670182015, 32.498512540145335],
                        [121.00292839493538, 32.497267995162424],
                        [121.00923695053841, 32.49885586289924],
                        [121.01022400345589, 32.498727116866526],
                        [121.01545967545296, 32.50881222276252],
                        [121.01176895584847, 32.51044300584358],
                        [121.01039566483284, 32.506966862960276],
                        [121.00919403519417, 32.50709560899299],
                        [121.0074345060804, 32.50383404283088],
                        [121.00245632614876, 32.505979810042795],
                        [121.00043930496956, 32.50288990525764],
                        [120.99541820969368, 32.50494984178108]
                        ]
                        var gz_3_areaJson = [
                        [121.00160864334805, 32.496743830856715],
                        [121.00896862488491, 32.49856773298684],
                        [121.0091832016061, 32.498975428757106],
                        [121.01014879685147, 32.49869647901956],
                        [121.01089981537564, 32.498267325577174],
                        [121.01014879685147, 32.496722373184596],
                        [121.01107147675259, 32.49620738905374],
                        [121.00989130478604, 32.49507013243142],
                        [121.0161702513379, 32.49209711129512],
                        [121.01385282274903, 32.48827764565791],
                        [121.0110204100293, 32.48935052926387],
                        [121.01016210314454, 32.48776266152705],
                        [121.00797342058839, 32.48870679910029],
                        [121.00694345232667, 32.48827764565791],
                        [121.0029523253125, 32.4905092435583],
                        [121.00290940996827, 32.49102422768916],
                        [121.00200818773926, 32.49149629647578],
                        [121.00346730944337, 32.493599148343456],
                        [121.0035102247876, 32.493642063687695],
                        [121.00160864334805, 32.496743830856715]
                        ]
                        var gz_4_areaJson = [
                        [121.02398899536831, 32.505224975761806],
                        [121.01527718048794, 32.50878694933358],
                        [121.01009215620614, 32.498634069777815],
                        [121.01099337843515, 32.49818345866331],
                        [121.01017798689462, 32.49672433695921],
                        [121.0110577514515, 32.49627372584471],
                        [121.00981320646859, 32.495115011550276],
                        [121.01622905043222, 32.49208947978148],
                        [121.01622905043222, 32.492110937453596],
                        [121.02398899536831, 32.505224975761806]
                        ]
                        var gz_5_areaJson = [
                        [120.9178186335149, 32.54252343894567],
                        [120.94538616826596, 32.53066580800424],
                        [120.94239434797399, 32.52258698685167],
                        [120.94240755448337, 32.522582987165976],
                        [120.94188086511379, 32.52120042757084],
                        [120.93799915513493, 32.510718634673886],
                        [120.93091741717966, 32.51315419977006],
                        [120.93091129238952, 32.51312211753605],
                        [120.92893638463705, 32.5138355203365],
                        [120.90968018285169, 32.520458150720366],
                        [120.9178186335149, 32.54252343894567]
                        ]
                        var xb_1_areaJson = [
                        [120.92049132937468, 32.51680127807767],
                        [120.92600852856631, 32.514868954039144],
                        [120.92766076931949, 32.52079127154403],
                        [120.93274623761172, 32.51903174243026],
                        [120.9347418011188, 32.524868229246664],
                        [120.9238627613544, 32.528065422392416],
                        [120.92062265286441, 32.51868841967635],
                        [120.92049132937468, 32.51680127807767]
                        ]
                        var xb_2_areaJson = [
                        [120.93482979025627, 32.52481562284988],
                        [120.9327269383886, 32.518678728623804],
                        [120.92774875845696, 32.52082449583572],
                        [120.9263325520971, 32.5157604852156],
                        [120.92594631399895, 32.51481634764236],
                        [120.93774803366448, 32.51086813597244],
                        [120.9425974675634, 32.52254110960525],
                        [120.93852050986077, 32.523656908555445],
                        [120.93482979025627, 32.52481562284988]
                        ]
                        var xb_3_areaJson = [
                        [120.91789442728825, 32.542350356728036],
                        [120.91557699869938, 32.53608471646925],
                        [120.92845160197086, 32.53170735135694],
                        [120.92750746439762, 32.52681500211378],
                        [120.93428808878727, 32.52501255765577],
                        [120.9348889036066, 32.52973324552198],
                        [120.92922407816715, 32.53205067411085],
                        [120.93059736918278, 32.537114684730966],
                        [120.91789442728825, 32.542350356728036]
                        ]
                        var xb_4_areaJson = [
                        [120.94236732134814, 32.522593716002035],
                        [120.94535251522971, 32.53066066717103],
                        [120.93080421353294, 32.536947765101935],
                        [120.93035360241844, 32.53711942647889],
                        [120.92898031140281, 32.53181938146546],
                        [120.93528886700584, 32.52988819097474],
                        [120.93391557599021, 32.52514604543641],
                        [120.94236732134814, 32.522593716002035]
                        ]
                        var xb_5_areaJson = [
                        [120.915509943474, 32.53631538644453],
                        [120.92894244622059, 32.53159469857832],
                        [120.92756915520496, 32.52678818002363],
                        [120.91357875298328, 32.53125137582441],
                        [120.91490912865467, 32.534169619232614],
                        [120.915509943474, 32.53631538644453]
                        ]
                        var xb_6_areaJson = [
                        [120.93933074648727, 32.52802447082279],
                        [120.9398028152739, 32.527970826642495],
                        [120.9394809501921, 32.52691940070866],
                        [120.93907325442184, 32.52705887557743],
                        [120.93933074648727, 32.52802447082279]
                        ]
                        var xb_7_areaJson = [
                        [120.9359648884296, 32.525691667414236],
                        [120.936758822298, 32.52558974347167],
                        [120.93660325417514, 32.52510694584899],
                        [120.93595415959354, 32.525214234209585],
                        [120.9359648884296, 32.525691667414236]
                        ]
                        var xb_8_areaJson = [
                        [120.98209467133977, 32.53785186106854],
                        [120.98926153382756, 32.53613524729901],
                        [120.99059190949895, 32.5348907023161],
                        [120.98977651795842, 32.529483368942074],
                        [120.99471178254582, 32.52463393504315],
                        [120.99518385133244, 32.52407603556805],
                        [120.99139914966042, 32.52028762289122],
                        [120.98770843005593, 32.52080260702208],
                        [120.97577796435769, 32.52243339010313],
                        [120.97114310717996, 32.52320586629942],
                        [120.96341834521706, 32.52517997213438],
                        [120.95818267322, 32.52672492452696],
                        [120.94565139270242, 32.53101645895079],
                        [120.93672500110085, 32.53444968648985],
                        [120.9405873820823, 32.54989921041563],
                        [120.95457778430398, 32.54226027914122],
                        [120.97028480029519, 32.535822977505475],
                        [120.98324523425515, 32.53093062826231],
                        [120.9830735728782, 32.530844797573835],
                        [120.98324523425515, 32.53118812032774],
                        [120.98209467133977, 32.53785186106854]
                        ]
                        var zx_1_areaJson = [
                        [120.97048833392431, 32.523481415393555],
                        [120.97096040271093, 32.52727942335864],
                        [120.97147538684179, 32.52901749480029],
                        [120.97196891330053, 32.53180699217578],
                        [120.9722693207102, 32.533223198535644],
                        [120.97269847415258, 32.53489689696094],
                        [120.97812726519872, 32.5328369604375],
                        [120.97874953769018, 32.53260092604419],
                        [120.97681834719945, 32.52212958205005],
                        [120.97679688952734, 32.52212958205005],
                        [120.97048833392431, 32.523481415393555]
                        ]
                        var zx_2_areaJson = [
                        [120.9667412879305, 32.53728406298419],
                        [120.96588298104574, 32.53653304446002],
                        [120.96513196252157, 32.53541724550983],
                        [120.9643809439974, 32.53076093065997],
                        [120.96317931435873, 32.52526776659747],
                        [120.97041054986288, 32.52333657610675],
                        [120.97096844933797, 32.52730624544879],
                        [120.97139760278036, 32.52891557085773],
                        [120.97259923241903, 32.53481643069049],
                        [120.96918746255209, 32.536232637050354],
                        [120.9667412879305, 32.53728406298419]
                        ]
                        var zx_3_areaJson = [
                        [120.96111669562627, 32.539550529601776],
                        [120.96062316916753, 32.53753350842258],
                        [120.95813407920171, 32.52674029934665],
                        [120.96321954749395, 32.52528117764255],
                        [120.96437826178838, 32.53077434170505],
                        [120.96508636496831, 32.535602317931854],
                        [120.96673860572149, 32.53725455868503],
                        [120.96111669562627, 32.539550529601776]
                        ]
                        var zx_4_areaJson = [
                        [120.95167511038984, 32.52916811361853],
                        [120.95802658133711, 32.526850685029665],
                        [120.96105211310591, 32.53953216925208],
                        [120.95442169242109, 32.54199980154578],
                        [120.9527479939958, 32.53391025915686],
                        [120.95167511038984, 32.52916811361853]
                        ]
                        var zx_5_areaJson = [
                        [120.94936862014104, 32.54501955378314],
                        [120.94563498519231, 32.53102915156146],
                        [120.9515573026972, 32.52909796107074],
                        [120.95443263076116, 32.54227297175189],
                        [120.94936862014104, 32.54501955378314]
                        ]
                        var zx_6_areaJson = [
                        [120.94063224637152, 32.54975180071222],
                        [120.94934406125189, 32.54507402819025],
                        [120.94552459561469, 32.53104071062433],
                        [120.93672695004584, 32.534473938163394],
                        [120.94063224637152, 32.54975180071222]
                        ]
                        var zx_7_areaJson = [
                        [120.94097215365238, 32.53373107805868],
                        [120.94154078196354, 32.53368816271444],
                        [120.94125110338993, 32.53343067064901],
                        [120.94095069598026, 32.533248280436],
                        [120.94097215365238, 32.53373107805868]
                        ]
                        var zx_8_areaJson = [
                        [120.94847397801102, 32.53075847203578],
                        [120.94950394627274, 32.53052243764247],
                        [120.94943957325638, 32.530071826527966],
                        [120.94858126637162, 32.52996453816737],
                        [120.94847397801102, 32.53075847203578]
                        ]
                        var zx_9_areaJson = [
                        [120.94556640002997, 32.53053200087449],
                        [120.93895743701728, 32.51164924940964],
                        [120.94844172809394, 32.5092459901323],
                        [120.95483611438544, 32.510104297017065],
                        [120.95921347949775, 32.51353752455613],
                        [120.96011470172675, 32.513322947834936],
                        [120.96659491870673, 32.51293670973679],
                        [120.98436187122138, 32.51431000075242],
                        [120.99079917285712, 32.5196744187822],
                        [120.9892113051203, 32.52044689497849],
                        [120.98702262256415, 32.52018940291306],
                        [120.97689460132392, 32.521820185994116],
                        [120.9723884901789, 32.522335170124975],
                        [120.9659941038874, 32.524352191304175],
                        [120.9608442625788, 32.52525341353318],
                        [120.95234702441962, 32.528600810383764],
                        [120.94556640002997, 32.53053200087449]
                        ]
                        var ctt_1_areaJson = [
                        [120.97333757316215, 32.52218043222892],
                        [120.97076265250786, 32.51303946390617],
                        [120.96644966041191, 32.51297509088981],
                        [120.96876708900078, 32.51999174967277],
                        [120.96267311011894, 32.520614022164224],
                        [120.9621795836602, 32.52142941370475],
                        [120.96254436408623, 32.52245938196647],
                        [120.96024839316948, 32.52318894281852],
                        [120.95587102805717, 32.52441203012931],
                        [120.95717994605644, 32.5266436280297],
                        [120.96108524238213, 32.52520596399772],
                        [120.96567718421562, 32.524369114785074],
                        [120.9722646895562, 32.52239500895011],
                        [120.97333757316215, 32.52218043222892]
                        ]
                        var ctt_2_areaJson = [
                        [120.9600364986573, 32.5231487096833],
                        [120.95844863092049, 32.517955953030466],
                        [120.95879195367439, 32.5191146673249],
                        [120.95664618646248, 32.51962965145576],
                        [120.95462916528328, 32.50980203762519],
                        [120.9591352764283, 32.51357858791816],
                        [120.96119521295174, 32.51327818050849],
                        [120.96625922357185, 32.51293485775459],
                        [120.96861956750496, 32.519758397488474],
                        [120.96681712304695, 32.5200158895539],
                        [120.96282599603279, 32.520445042996286],
                        [120.96209643518074, 32.52151792660224],
                        [120.96256850396736, 32.52241914883125],
                        [120.9600364986573, 32.5231487096833]
                        ]
                        var ctt_3_areaJson = [
                        [120.95001029660763, 32.529179864209986],
                        [120.95730590512814, 32.526690774244166],
                        [120.95588969876827, 32.52441626099954],
                        [120.9598379104382, 32.523214631360865],
                        [120.95893668820919, 32.519223504346705],
                        [120.95666217496456, 32.519738488477564],
                        [120.95464515378536, 32.509996705335475],
                        [120.94842242887081, 32.509481721204615],
                        [120.94837951352658, 32.51390200166116],
                        [120.94687747647824, 32.51437407044778],
                        [120.94610500028195, 32.515704446119166],
                        [120.9473924606091, 32.51737814454446],
                        [120.94820785214962, 32.5194380810679],
                        [120.95048236539425, 32.52261381654153],
                        [120.94859409024777, 32.52342920808206],
                        [120.95001029660763, 32.529179864209986]
                        ]
                        var ctt_4_areaJson = [
                        [120.9499510785053, 32.5292714744299],
                        [120.94844047106989, 32.52336494685811],
                        [120.95054332293756, 32.52284996272725],
                        [120.94869796313532, 32.520704195515336],
                        [120.94642344989069, 32.51589767696065],
                        [120.9445351747442, 32.51452438594502],
                        [120.94324771441705, 32.51413814784688],
                        [120.94170276202448, 32.51409523250264],
                        [120.93990031756647, 32.51392357112569],
                        [120.94324771441705, 32.52366535426778],
                        [120.94560805835016, 32.5305318093459],
                        [120.9499510785053, 32.5292714744299]
                        ]
                        var ctt_5_areaJson = [
                        [120.94613729154213, 32.51549100294578],
                        [120.94639478360756, 32.51493310347068],
                        [120.94695268308266, 32.514117711930155],
                        [120.94836888944252, 32.51398896589744],
                        [120.94815431272133, 32.50965451612937],
                        [120.93918500577553, 32.51154279127586],
                        [120.93965707456215, 32.51381730452049],
                        [120.94399152433022, 32.51428937330711],
                        [120.94613729154213, 32.51549100294578]
                        ]
                        var ctt_6_areaJson = [
                        [120.92426966045173, 32.55940329871079],
                        [120.91770361278327, 32.542151330327],
                        [120.93654344890388, 32.534340737675635],
                        [120.94040582988532, 32.54897487006089],
                        [120.92426966045173, 32.55940329871079]
                        ]
                        var tw_1_areaJson = [
                        [120.93186226090886, 32.55374126727276],
                        [120.92983708835061, 32.54702388235167],
                        [120.9276913211387, 32.54766761251524],
                        [120.9271334216636, 32.546101202450544],
                        [120.93189702487405, 32.54395543523863],
                        [120.93292699313577, 32.54794656225279],
                        [120.9331844852012, 32.5477319855316],
                        [120.9346436069053, 32.55264579244688],
                        [120.93186226090886, 32.55374126727276]
                        ]
                        var tw_2_areaJson = [
                        [120.92769699981274, 32.54554670361886],
                        [120.92687087943615, 32.54240315465341],
                        [120.92923380082627, 32.54141496818812],
                        [120.92820383256455, 32.53815340202601],
                        [120.93496299928208, 32.53542827766688],
                        [120.93672252839585, 32.541586629565074],
                        [120.92769699981274, 32.54554670361886]
                        ]
                        var tw_3_areaJson = [
                        [120.92010613879658, 32.54837953145199],
                        [120.92029925784566, 32.548325887271695],
                        [120.92041727504231, 32.548594108173184],
                        [120.92053529223897, 32.54875504071408],
                        [120.92181202373006, 32.54819714123898],
                        [120.92160817584492, 32.548347344943814],
                        [120.92183348140217, 32.548561921665005],
                        [120.92217680415608, 32.54919492299252],
                        [120.92229482135274, 32.54944168622189],
                        [120.92344280681111, 32.54889451558285],
                        [120.92342134913899, 32.54864775235348],
                        [120.92739101848103, 32.54693113858395],
                        [120.92710133990742, 32.54587971265011],
                        [120.92736956080891, 32.54695259625607],
                        [120.92969771823384, 32.55424820477658],
                        [120.92760817265923, 32.54764883705214],
                        [120.9298183128875, 32.54702656456068],
                        [120.9320499107879, 32.55432217308119],
                        [120.92426077580865, 32.559407641373426],
                        [120.92010613879658, 32.54837953145199]
                        ]
                        var tw_4_areaJson = [
                        [120.92008231317146, 32.548321241288065],
                        [120.91770051156624, 32.542291635422586],
                        [120.92821477090462, 32.53778552427757],
                        [120.92922328149422, 32.54145478620994],
                        [120.92688439523323, 32.54239892378318],
                        [120.92780707513435, 32.545789235978006],
                        [120.9270775142823, 32.54602527037132],
                        [120.92735646401985, 32.54694795027244],
                        [120.92342971002205, 32.54860019102561],
                        [120.92338679467781, 32.54890059843528],
                        [120.92239974176033, 32.54943704023826],
                        [120.92164872323616, 32.54840707197654],
                        [120.921798926941, 32.54819249525535],
                        [120.9205758396302, 32.548793310074686],
                        [120.92027543222054, 32.548321241288065],
                        [120.92008231317146, 32.548321241288065]
                        ]
                        var tw_5_areaJson = [
                        [120.9608653012429, 32.43932163134086],
                        [120.97308802297177, 32.47289102582345],
                        [120.95613646199764, 32.4721614649714],
                        [120.95644717923535, 32.46271555504776],
                        [120.9567261289729, 32.45501225075699],
                        [120.95643056222124, 32.46273670939888],
                        [120.95667175152857, 32.45496676499614],
                        [120.95164219061763, 32.45475301850176],
                        [120.95162073294551, 32.45447943318224],
                        [120.95121303717525, 32.45448479760027],
                        [120.95118085066707, 32.45476374733782],
                        [120.94950715224178, 32.454715467575554],
                        [120.93956646662457, 32.454458805736934],
                        [120.93983984244008, 32.43880316683041],
                        [120.94565487158437, 32.439167947256436],
                        [120.94700670492787, 32.43805214830624],
                        [120.94773626577992, 32.43835255571591],
                        [120.948830607058, 32.439468354666104],
                        [120.95737076056142, 32.44026228853451],
                        [120.96086836111684, 32.43931815096127],
                        [120.96104218094278, 32.43975236550069],
                        [120.9608653012429, 32.43932163134086]
                        ]
                        var ly_1_areaJson = [
                        [120.94815075115318, 32.4444356142331],
                        [120.94945966915245, 32.439607638006294],
                        [120.94875156597251, 32.43943597662934],
                        [120.94759285167808, 32.438320177679145],
                        [120.9470564098751, 32.438084143285835],
                        [120.94572603420372, 32.43915702689179],
                        [120.93995392040367, 32.43877078879365],
                        [120.93978225902671, 32.444092291479194],
                        [120.9395462246334, 32.4544134317685],
                        [120.9444814892208, 32.454563635473335],
                        [120.9444814892208, 32.45314742911347],
                        [120.94478189663047, 32.45288993704804],
                        [120.94343006328697, 32.44952108252534],
                        [120.9454899998104, 32.44943525183686],
                        [120.94340860561485, 32.44413520682343],
                        [120.94812929348106, 32.44452144492158],
                        [120.94810783580894, 32.44452144492158],
                        [120.94815075115318, 32.4444356142331]
                        ]
                        var ly_2_areaJson = [
                        [120.94819387600143, 32.4444003304025],
                        [120.95639070675094, 32.444829483844885],
                        [120.95637182653583, 32.445171673050986],
                        [120.96130709112323, 32.4453004190837],
                        [120.96137146413959, 32.44587977623092],
                        [120.96138477043266, 32.447294849042976],
                        [120.96357345298881, 32.446779864912116],
                        [120.96089382143093, 32.43931146146685],
                        [120.9577180859573, 32.44025559904009],
                        [120.94960708589626, 32.43956895353228],
                        [120.94952125520778, 32.439697699564995],
                        [120.94819387600143, 32.4444003304025]
                        ]
                        var ly_3_areaJson = [
                        [120.95675033226294, 32.45497050101679],
                        [120.96657794609351, 32.4552065354101],
                        [120.96361678734107, 32.44670929725092],
                        [120.96136373176856, 32.447331569742374],
                        [120.9612993587522, 32.44527163321894],
                        [120.95621389045996, 32.44518580253046],
                        [120.95632117882056, 32.448554657053165],
                        [120.94971221580786, 32.44911255652826],
                        [120.94949763908667, 32.452567241739445],
                        [120.95153611793799, 32.452073715280704],
                        [120.95644992485327, 32.4517303925268],
                        [120.95675033226294, 32.45314659888666],
                        [120.95675033226294, 32.45497050101679]
                        ]
                        var ly_4_areaJson = [
                        [120.95655968591888, 32.46771677336896],
                        [120.9568171779843, 32.45522840819562],
                        [120.9663443844052, 32.4553142388841],
                        [120.96934845850188, 32.46299608550275],
                        [120.96394112512786, 32.46308191619123],
                        [120.96355488702972, 32.467673858024725],
                        [120.96042206690032, 32.467630942680486],
                        [120.95655968591888, 32.46771677336896]
                        ]
                        var ly_5_areaJson = [
                        [120.95617087036372, 32.4722079248077],
                        [120.95629961639644, 32.46765889831844],
                        [120.95840246826411, 32.467272660220296],
                        [120.95934660583735, 32.46770181366268],
                        [120.96359780237395, 32.467636307098516],
                        [120.96383383676726, 32.46306582293714],
                        [120.96941283151824, 32.46308728060926],
                        [120.97303917810638, 32.47285052142347],
                        [120.95617087036372, 32.4722079248077]
                        ]
                        var ly_6_areaJson = [
                        [120.9389299864151, 32.4899916569546],
                        [120.93983120864411, 32.49067830246241],
                        [120.94000287002106, 32.490656844790294],
                        [120.94021744674225, 32.490849963839366],
                        [120.9401530737259, 32.49097870987208],
                        [120.94465918487091, 32.49449776809962],
                        [120.95201101502873, 32.49830537135296],
                        [120.96488561830022, 32.50319772059613],
                        [120.9719237347553, 32.50560097987347],
                        [120.97724523744084, 32.50809006983929],
                        [120.98428335389592, 32.51358323390179],
                        [120.98694410523869, 32.5153856783598],
                        [120.9861716290424, 32.51143746668988],
                        [120.97822114251424, 32.48845176565906],
                        [120.9392239818867, 32.481880050251576],
                        [120.9389299864151, 32.4899916569546]
                        ]
                        var lft_1_areaJson = [
                        [120.93931475798519, 32.4820270608697],
                        [120.95553675810726, 32.48468781221247],
                        [120.95579425017269, 32.490824706438545],
                        [120.95489302794368, 32.49061012971735],
                        [120.95437804381282, 32.49215508210993],
                        [120.9495286099139, 32.491296775225166],
                        [120.94497958342464, 32.49442959535456],
                        [120.9388856045428, 32.49000931489802],
                        [120.93931475798519, 32.4820270608697]
                        ]
                        var lft_2_areaJson = [
                        [120.94496606762756, 32.494449919478875],
                        [120.9525191682135, 32.498441046493035],
                        [120.95736860211242, 32.50032932163952],
                        [120.95766900952209, 32.4888709247279],
                        [120.95582364971985, 32.48861343266247],
                        [120.95586656506408, 32.490673369185906],
                        [120.95479368145813, 32.49058753849743],
                        [120.95436452801574, 32.49226123692272],
                        [120.94955800946106, 32.49136001469372],
                        [120.94496606762756, 32.494449919478875]
                        ]
                        var lft_3_areaJson = [
                        [120.95742440474172, 32.50024855204808],
                        [120.96720910322804, 32.50393927165257],
                        [120.96737519068296, 32.50315379952461],
                        [120.96836224360044, 32.50199508523018],
                        [120.9686626510101, 32.5004501328376],
                        [120.96986428064878, 32.49993514870674],
                        [120.97136631769712, 32.49122333382637],
                        [120.96510067743833, 32.490064619531935],
                        [120.96424237055356, 32.49173831795723],
                        [120.9576763228851, 32.49100875710518],
                        [120.95742440474172, 32.50024855204808]
                        ]
                        var lft_4_areaJson = [
                        [120.97008216809101, 32.498936121612985],
                        [120.9823988718874, 32.5009746004643],
                        [120.97819316815205, 32.488464777618844],
                        [120.9719704432375, 32.48737043634077],
                        [120.97008216809101, 32.498936121612985]
                        ]
                        var lft_5_areaJson = [
                        [120.96742420370926, 32.503676718490105],
                        [120.97574978049148, 32.50710994602917],
                        [120.98270206625808, 32.51200229527233],
                        [120.98716526205887, 32.51586467625378],
                        [120.98270206625808, 32.500930136458855],
                        [120.9701707857405, 32.4992993533778],
                        [120.9687116640364, 32.50084430577038],
                        [120.96793918784012, 32.50299007298229],
                        [120.96742420370926, 32.503676718490105]
                        ]
                        var lft_6_areaJson = [
                        [120.89389837915527, 32.51446945503658],
                        [120.89389332910206, 32.51450776578512],
                        [120.89882859368946, 32.515881056800744],
                        [120.8988376536076, 32.51586642154835],
                        [120.90221117351325, 32.516820548390356],
                        [120.9023828348902, 32.5177646859636],
                        [120.90564440105231, 32.519567130421606],
                        [120.90470026347907, 32.520082114552466],
                        [120.9049577555445, 32.52119791350266],
                        [120.90555857036384, 32.52222788176438],
                        [120.90547273967536, 32.52145540556809],
                        [120.90573023174079, 32.52205622038743],
                        [120.91783235881599, 32.517335532521216],
                        [120.93285272929938, 32.51201402983567],
                        [120.93800257060798, 32.51072656950852],
                        [120.93800257060798, 32.49853861174485],
                        [120.91869066570075, 32.49459040007493],
                        [120.91791818950446, 32.50892412505051],
                        [120.89525888774665, 32.50497591338059],
                        [120.89524117013357, 32.50508418768269],
                        [120.89513787408497, 32.5050663900527],
                        [120.89469786790583, 32.508404367963344],
                        [120.89371393535407, 32.51441728911301],
                        [120.89389837915527, 32.51446945503658]
                        ]
                        var sjk_1_areaJson = [
                        [120.92876956916268, 32.513356794796735],
                        [120.92919872260507, 32.51146851965025],
                        [120.92842624640878, 32.51103936620787],
                        [120.92705295539315, 32.5112968582733],
                        [120.92619464850839, 32.51121102758482],
                        [120.92439220405038, 32.50975190588072],
                        [120.92705295539315, 32.50897942968443],
                        [120.92902706122811, 32.50906526037291],
                        [120.92971370673592, 32.50700532384947],
                        [120.9312586591285, 32.50219880529478],
                        [120.9327177808326, 32.50305711217955],
                        [120.93306110358651, 32.501340498410016],
                        [120.93340442634042, 32.499366392575055],
                        [120.93426273322518, 32.49747811742857],
                        [120.93812511420663, 32.49842225500181],
                        [120.93838260627206, 32.510352720700055],
                        [120.9294562146705, 32.51301347204283],
                        [120.92876956916268, 32.513356794796735]
                        ]
                        var sjk_2_areaJson = [
                        [120.89389837915527, 32.51446945503658],
                        [120.89389332910206, 32.51450776578512],
                        [120.89882859368946, 32.515881056800744],
                        [120.8988376536076, 32.51586642154835],
                        [120.90221117351325, 32.516820548390356],
                        [120.9023828348902, 32.5177646859636],
                        [120.90564440105231, 32.519567130421606],
                        [120.90470026347907, 32.520082114552466],
                        [120.9049577555445, 32.52119791350266],
                        [120.90555857036384, 32.52222788176438],
                        [120.90547273967536, 32.52145540556809],
                        [120.90573023174079, 32.52205622038743],
                        [120.91783235881599, 32.517335532521216],
                        [120.93285272929938, 32.51201402983567],
                        [120.93800257060798, 32.51072656950852],
                        [120.93800257060798, 32.49853861174485],
                        [120.91869066570075, 32.49459040007493],
                        [120.91791818950446, 32.50892412505051],
                        [120.89525888774665, 32.50497591338059],
                        [120.89524117013357, 32.50508418768269],
                        [120.89513787408497, 32.5050663900527],
                        [120.89469786790583, 32.508404367963344],
                        [120.89371393535407, 32.51441728911301],
                        [120.89389837915527, 32.51446945503658]
                        ]
                        var sjk_3_areaJson = [
                        [120.91786959548618, 32.509226496234795],
                        [120.91864207168247, 32.50881880046453],
                        [120.91922142882969, 32.5085613083991],
                        [120.91992953200962, 32.50858276607122],
                        [120.92016556640293, 32.508024866596124],
                        [120.92085221191074, 32.50817507030096],
                        [120.92211821456577, 32.50884025813665],
                        [120.92385628600742, 32.50929086925115],
                        [120.92465021987583, 32.50959127666082],
                        [120.92445710082676, 32.509720022693536],
                        [120.92510083099033, 32.51042812587347],
                        [120.92572310348179, 32.51083582164373],
                        [120.92598059554722, 32.51111477138128],
                        [120.92673161407139, 32.511264975086114],
                        [120.92782595534946, 32.511200602069756],
                        [120.92829802413608, 32.511200602069756],
                        [120.92883446593906, 32.51139372111883],
                        [120.92907050033237, 32.511951620593926],
                        [120.92855551620151, 32.513453657642266],
                        [120.92743971725132, 32.51386135341253],
                        [120.92353442092563, 32.51540630580511],
                        [120.91845668500443, 32.51718389194758],
                        [120.91731942838211, 32.51769887607844],
                        [120.91714776700516, 32.51778470676692],
                        [120.91714776700516, 32.51767741840632],
                        [120.91786959548618, 32.509226496234795]
                        ]
                        var sjk_4_areaJson = [
                        [120.89389837915527, 32.51446945503658],
                        [120.89389332910206, 32.51450776578512],
                        [120.89882859368946, 32.515881056800744],
                        [120.8988376536076, 32.51586642154835],
                        [120.90221117351325, 32.516820548390356],
                        [120.9023828348902, 32.5177646859636],
                        [120.90564440105231, 32.519567130421606],
                        [120.90470026347907, 32.520082114552466],
                        [120.9049577555445, 32.52119791350266],
                        [120.90555857036384, 32.52222788176438],
                        [120.90547273967536, 32.52145540556809],
                        [120.90573023174079, 32.52205622038743],
                        [120.91783235881599, 32.517335532521216],
                        [120.93285272929938, 32.51201402983567],
                        [120.93800257060798, 32.51072656950852],
                        [120.93800257060798, 32.49853861174485],
                        [120.91869066570075, 32.49459040007493],
                        [120.91791818950446, 32.50892412505051],
                        [120.89525888774665, 32.50497591338059],
                        [120.89524117013357, 32.50508418768269],
                        [120.89513787408497, 32.5050663900527],
                        [120.89469786790583, 32.508404367963344],
                        [120.89371393535407, 32.51441728911301],
                        [120.89389837915527, 32.51446945503658]
                        ]
                        var sjk_5_areaJson = [
                        [120.89385988556982, 32.5141226772629],
                        [120.89883806550147, 32.515667629655475],
                        [120.89995386445166, 32.51373643916475],
                        [120.900554679271, 32.5115477566086],
                        [120.90102674805762, 32.51171941798555],
                        [120.90188505494238, 32.51197691005098],
                        [120.90647699677588, 32.512706470903034],
                        [120.90815069520117, 32.51309270900118],
                        [120.90827944123389, 32.51201982539522],
                        [120.90827944123389, 32.51163358729708],
                        [120.91746332490088, 32.51296396296846],
                        [120.91780664765479, 32.508929920610065],
                        [120.89527609192969, 32.504938793595905],
                        [120.89385988556982, 32.5141226772629]
                        ]
                        var sjk_6_areaJson = [
                        [120.9158016123357, 32.45373159171667],
                        [120.93919047494556, 32.454332406536004],
                        [120.93953379769947, 32.43875413657751],
                        [120.93004950662281, 32.437809999004266],
                        [120.93009242196705, 32.43918329001989],
                        [120.92923411508228, 32.438797051921746],
                        [120.92717417855884, 32.438582475200555],
                        [120.92597254892017, 32.438582475200555],
                        [120.92618712564136, 32.43768125297155],
                        [120.92537173410084, 32.437552506938836],
                        [120.92502841134693, 32.438797051921746],
                        [120.92095145364429, 32.43948369742956],
                        [120.92047938485767, 32.43836789847936],
                        [120.91794737954761, 32.438539559856316],
                        [120.91696032663013, 32.4389687132987],
                        [120.91387042184498, 32.438582475200555],
                        [120.91271170755054, 32.43849664451208],
                        [120.9123254694524, 32.440556581035516],
                        [120.91254004617359, 32.44167237998571],
                        [120.91292628427173, 32.44235902549352],
                        [120.91292628427173, 32.44351773978796],
                        [120.91296919961597, 32.44416146995153],
                        [120.91399916787769, 32.445062692180535],
                        [120.91498622079517, 32.44695096732702],
                        [120.91515788217212, 32.448066766277215],
                        [120.91584452767994, 32.44888215781774],
                        [120.91700324197437, 32.449826295390984],
                        [120.91678866525318, 32.450341279521844],
                        [120.91721781869556, 32.45115667106237],
                        [120.91730364938404, 32.45171457053747],
                        [120.9158016123357, 32.45373159171667]
                        ]
                        var wy_1_areaJson = [
                        [120.92515405616261, 32.44257711465054],
                        [120.92532571753956, 32.438671818324856],
                        [120.92523988685109, 32.437684765407376],
                        [120.92614110908009, 32.4375989347189],
                        [120.92596944770314, 32.43862890298062],
                        [120.92832979163624, 32.438671818324856],
                        [120.93000349006154, 32.43910097176724],
                        [120.93008932075001, 32.43785642678433],
                        [120.93961652717091, 32.43880056435757],
                        [120.9394877811382, 32.44313501412564],
                        [120.9308617969463, 32.4430920987814],
                        [120.92511114081837, 32.442920437404446],
                        [120.92515405616261, 32.44257711465054]
                        ]
                        var wy_2_areaJson = [
                        [120.92455303183927, 32.45382403216339],
                        [120.9251538466586, 32.44305228075958],
                        [120.93099033347501, 32.44309519610382],
                        [120.93081867209806, 32.453909862851866],
                        [120.93081867209806, 32.454167354917296],
                        [120.92455303183927, 32.45382403216339]
                        ]
                        var wy_3_areaJson = [
                        [120.91591910577233, 32.45375006385878],
                        [120.92450217461999, 32.45392172523573],
                        [120.92536048150475, 32.43842928596571],
                        [120.92390135980065, 32.43924467750624],
                        [120.92119769311364, 32.43945925422743],
                        [120.9205968782943, 32.43847220130995],
                        [120.91840819573815, 32.438558031998426],
                        [120.91699198937829, 32.43890135475233],
                        [120.91291503167565, 32.43851511665419],
                        [120.91248587823327, 32.439201762162],
                        [120.91252879357751, 32.441047121964246],
                        [120.91295794701989, 32.442334582291394],
                        [120.91312960839684, 32.4441370267494],
                        [120.91488913751061, 32.44649737068251],
                        [120.91553286767419, 32.44860022255018],
                        [120.917120735411, 32.44975893684462],
                        [120.91690615868981, 32.45066015907362],
                        [120.9173353121322, 32.451775958023816],
                        [120.91591910577233, 32.45375006385878]
                        ]
                        var wy_4_areaJson = [
                        [120.89543828149463, 32.505015428081414],
                        [120.91758259912159, 32.508963639751336],
                        [120.91904172082569, 32.489737565532586],
                        [120.89895733972217, 32.48544603110876],
                        [120.89543828149463, 32.505015428081414]
                        ]
                        var xys_1_areaJson = [
                        [120.90816752171929, 32.49668954797819],
                        [120.91825262761529, 32.49930738397673],
                        [120.9189392731231, 32.48982309290007],
                        [120.90966955876763, 32.48780607172087],
                        [120.90816752171929, 32.49668954797819]
                        ]
                        var xys_2_areaJson = [
                        [120.90822395286061, 32.50717543656521],
                        [120.91015514335133, 32.49745511109524],
                        [120.91839488944508, 32.49951504761868],
                        [120.9175151248882, 32.508870592662625],
                        [120.90822395286061, 32.50717543656521]
                        ]
                        var xys_3_areaJson = [
                        [120.89754071435429, 32.49417745167904],
                        [120.90794768533208, 32.496645083972744],
                        [120.90964284142949, 32.48780452305966],
                        [120.89908566674687, 32.48548709447079],
                        [120.89754071435429, 32.49417745167904]
                        ]
                        var xys_4_areaJson = [
                        [120.89547530866082, 32.504881014309674],
                        [120.90814038537313, 32.50728891957065],
                        [120.90871974252035, 32.50467108357211],
                        [120.90910598061849, 32.50256823170444],
                        [120.89654819226678, 32.49955951162413],
                        [120.89547530866082, 32.504881014309674]
                        ]
                        var xys_5_areaJson = [
                        [120.93898404960342, 32.511625524641914],
                        [120.94851125602432, 32.509136434676094],
                        [120.95494855766006, 32.51016640293781],
                        [120.95906843070694, 32.51325630772297],
                        [120.96576322440811, 32.51291298496906],
                        [120.98430265311904, 32.51420044529621],
                        [120.97880948905654, 32.509136434676094],
                        [120.96988309745498, 32.504844900252266],
                        [120.95537771110244, 32.4999525510091],
                        [120.95142949943252, 32.49823593723957],
                        [120.94524968986221, 32.4944593869466],
                        [120.93881238822647, 32.490167852522774],
                        [120.93898404960342, 32.511625524641914]
                        ]
                        var zy_1_areaJson = [
                        [120.93894597491719, 32.49695890242749],
                        [120.94010468921162, 32.49683015639477],
                        [120.93997594317891, 32.502752473899655],
                        [120.94104882678486, 32.50292413527661],
                        [120.94070550403096, 32.506014040061764],
                        [120.94160672625996, 32.50318162734204],
                        [120.94370957812764, 32.503524950095944],
                        [120.9451069042724, 32.50382422395781],
                        [120.94431297040398, 32.50367402025297],
                        [120.94377910605802, 32.50678424916244],
                        [120.94516570336671, 32.50680457328676],
                        [120.94544465310426, 32.50995885108827],
                        [120.93902880914064, 32.51156817649721],
                        [120.93894597491719, 32.49695890242749]
                        ]
                        var zy_2_areaJson = [
                        [120.94550118899758, 32.50993161388472],
                        [120.94837651706155, 32.50915913768843],
                        [120.9505651996177, 32.509459545098096],
                        [120.9525822207969, 32.509802867852],
                        [120.95301137423928, 32.50838666149214],
                        [120.95193849063332, 32.50791459270552],
                        [120.95193849063332, 32.506755878411084],
                        [120.9529255435508, 32.50679879375532],
                        [120.9529255435508, 32.506240894280225],
                        [120.954041342501, 32.5063267249687],
                        [120.95524297213967, 32.503022243462354],
                        [120.95592961764748, 32.502764751396924],
                        [120.95614419436868, 32.50143437572554],
                        [120.95537171817239, 32.50044732280806],
                        [120.9447287128013, 32.494997074089795],
                        [120.94387040591653, 32.49688534923628],
                        [120.94399915194924, 32.503279735527784],
                        [120.94494328952248, 32.50366597362593],
                        [120.94434247470315, 32.50392346569136],
                        [120.94369874453957, 32.506712963066846],
                        [120.94528661227639, 32.506712963066846],
                        [120.94550118899758, 32.50993161388472]
                        ]
                        var zy_3_areaJson = [
                        [120.960169561588, 32.513130052370684],
                        [120.96077037640734, 32.5106838777491],
                        [120.96119952984972, 32.51102720050301],
                        [120.96149993725939, 32.51055513171639],
                        [120.96102786847277, 32.51029763965096],
                        [120.9618432600133, 32.507336480898516],
                        [120.96227241345568, 32.506864412111895],
                        [120.96227241345568, 32.50604902057137],
                        [120.96321655102892, 32.50544820575203],
                        [120.96343112775011, 32.50351701526131],
                        [120.96291614361925, 32.503602845949786],
                        [120.96300197430773, 32.50300203113045],
                        [120.95542999350668, 32.500232857879276],
                        [120.95594497763754, 32.5010482494198],
                        [120.95620246970297, 32.50156323355066],
                        [120.95577331626059, 32.50304381292688],
                        [120.95525833212973, 32.50304381292688],
                        [120.95495792472006, 32.50443856161463],
                        [120.95472189032675, 32.504502934630985],
                        [120.95450731360556, 32.505468529876346],
                        [120.95446439826132, 32.50568310659754],
                        [120.95418544852377, 32.50641266744959],
                        [120.9528765305245, 32.50628392141687],
                        [120.95283361518027, 32.50677744787561],
                        [120.95191093527914, 32.506734532531375],
                        [120.95184656226279, 32.50787178915369],
                        [120.95306964957358, 32.50819365423548],
                        [120.95259758078696, 32.509738606628055],
                        [120.95259758078696, 32.50980297964441],
                        [120.960169561588, 32.513130052370684]
                        ]
                        var zy_4_areaJson = [
                        [120.96025612554051, 32.51317285592251],
                        [120.96083548268773, 32.51066230828457],
                        [120.9610286017368, 32.51096271569424],
                        [120.96132900914647, 32.51079105431729],
                        [120.96135046681859, 32.510597935268216],
                        [120.96098568639256, 32.51049064690762],
                        [120.96143629750706, 32.50924610192471],
                        [120.9615865012119, 32.50830196435147],
                        [120.96190836629368, 32.507143250057034],
                        [120.96223023137547, 32.50675701195889],
                        [120.96212294301488, 32.506349316188626],
                        [120.96263792714574, 32.505877247402005],
                        [120.96255209645726, 32.50546955163174],
                        [120.96310999593236, 32.505641213008694],
                        [120.96343186101414, 32.503624191829495],
                        [120.96287396153905, 32.5035169034689],
                        [120.96302416524388, 32.5029590039938],
                        [120.9692601964515, 32.50466375537947],
                        [120.97488210654672, 32.50719576068953],
                        [120.97938821769174, 32.509470273934156],
                        [120.98436639762338, 32.51414804645613],
                        [120.97063348746713, 32.513203908882886],
                        [120.96617029166634, 32.512989332161695],
                        [120.96025612554051, 32.51317285592251]
                        ]
                        var zy_5_areaJson = [
                        [120.9391097991711, 32.481795959752894],
                        [120.97850608518185, 32.48840492276559],
                        [120.97335624387325, 32.47286956815133],
                        [120.95627593686642, 32.472268753331996],
                        [120.95593261411251, 32.47690361050973],
                        [120.95095443418087, 32.47570198087106],
                        [120.94528960874142, 32.473813705724574],
                        [120.94237136533322, 32.47141044644723],
                        [120.93953895261349, 32.47089546231637],
                        [120.9391097991711, 32.481795959752894]
                        ]
                        var yfk_1_areaJson = [
                        [120.97468609578462, 32.47739415143846],
                        [120.97846264607759, 32.488294648874984],
                        [120.96122398398687, 32.485664950492584],
                        [120.96208229087163, 32.48347626793643],
                        [120.9625972750025, 32.47978554833194],
                        [120.96603050254156, 32.47948514092227],
                        [120.96645965598394, 32.477167712333404],
                        [120.97468609578462, 32.47739415143846]
                        ]
                        var yfk_2_areaJson = [
                        [120.94643375971873, 32.48296634490261],
                        [120.94632904881514, 32.48152754732282],
                        [120.94424765461959, 32.48120568224103],
                        [120.94435494298018, 32.480154256307195],
                        [120.94323914402999, 32.479918221913884],
                        [120.94345372075118, 32.47749350496442],
                        [120.95027726048507, 32.47905991502912],
                        [120.95218699330367, 32.479682187520574],
                        [120.95407526845015, 32.48075507112653],
                        [120.95577042454757, 32.480926732503484],
                        [120.95609228962935, 32.480905274831365],
                        [120.95613520497359, 32.479167203389714],
                        [120.9599546706108, 32.47921011873395],
                        [120.96257250660933, 32.479639272176335],
                        [120.9620789801506, 32.483608941518376],
                        [120.96122067326583, 32.48551867433698],
                        [120.94643375971873, 32.48296634490261]
                        ]
                        var yfk_3_areaJson = [
                        [120.94335810399468, 32.479872097454816],
                        [120.94443098760064, 32.480172504864484],
                        [120.94430224156793, 32.481374134503156],
                        [120.94649092412408, 32.48171745725706],
                        [120.94644800877984, 32.482919086895734],
                        [120.9391094849151, 32.48171745725706],
                        [120.93962446904595, 32.470945705853254],
                        [120.9423710510772, 32.4713319439514],
                        [120.94490305638726, 32.47352062650755],
                        [120.95138327336724, 32.475880970440656],
                        [120.95597521520074, 32.476868023358136],
                        [120.95601813054498, 32.480902065716535],
                        [120.95421568608697, 32.48077331968382],
                        [120.95215574956353, 32.47952877470091],
                        [120.9434868500274, 32.47746883817747],
                        [120.94335810399468, 32.479872097454816]
                        ]
                        var yfk_4_areaJson = [
                                [120.89918354670436, 32.48530337918139],
                                [120.91901301319946, 32.48957232238529],
                                [120.91879843647827, 32.49442175628422],
                                [120.9382738513834, 32.498401020914514],
                                [120.93956131171055, 32.470634793192346],
                                [120.93930381964512, 32.4638541688027],
                                [120.92999118994541, 32.4702485550942],
                                [120.90192455481358, 32.46986231699606],
                                [120.89918354670436, 32.48530337918139]
                        ]
                        //周新庄村
                        var zxz_1_areaJson = [
                        [120.90469443870992, 32.47060426713779],
                        [120.90681874824972, 32.47236379625156],
                        [120.91032965509821, 32.47647180691457],
                        [120.9131191524737, 32.47887506619191],
                        [120.91646654932428, 32.48123541012502],
                        [120.91678252622802, 32.48154624304975],
                        [120.91795196935851, 32.48225434622968],
                        [120.91871371671874, 32.482383092262396],
                        [120.91949692175109, 32.48294099173749],
                        [120.91963639661986, 32.48247965178693],
                        [120.91957686426151, 32.475505605027216],
                        [120.92161534311283, 32.47546268968298],
                        [120.91959832193363, 32.47016264466955],
                        [120.9129464435767, 32.47074200181677],
                        [120.90469443870992, 32.47060426713779]
                        ]
                        var zxz_2_areaJson = [
                        [120.92651152683706, 32.48528131486728],
                        [120.9267715963595, 32.481986428649186],
                        [120.9376854000891, 32.482178414150454],
                        [120.9375781117285, 32.48194237975714],
                        [120.93875828369505, 32.481920922085024],
                        [120.93867245300657, 32.48973151473639],
                        [120.9310764370764, 32.486663067623354],
                        [120.92651152683706, 32.48528131486728]
                        ]
                        var zxz_3_areaJson = [
                        [120.92955510080493, 32.49651988243209],
                        [120.92936198175586, 32.48952468132125],
                        [120.92852513254321, 32.489417392960654],
                        [120.92856804788745, 32.48652060722457],
                        [120.93498389185108, 32.48828013633834],
                        [120.93861023843921, 32.48973925804244],
                        [120.93824545801318, 32.498343784562216],
                        [120.92955510080493, 32.49651988243209]
                        ]
                        var zxz_4_areaJson = [
                        [120.91902701141346, 32.49430252580358],
                        [120.91954199554432, 32.483487859055536],
                        [120.92846838714588, 32.48640610246374],
                        [120.92842547180165, 32.489538922593134],
                        [120.92919794799793, 32.489496007248896],
                        [120.92954127075184, 32.496534123703974],
                        [120.92846838714588, 32.49636246232702],
                        [120.91902701141346, 32.49430252580358]
                        ]
                        var zxz_5_areaJson = [
                        [120.89924161253465, 32.48523685086183],
                        [120.9001857501079, 32.47972222912721],
                        [120.91934745131029, 32.48444291699342],
                        [120.91917578993333, 32.48952838528566],
                        [120.89924161253465, 32.48523685086183]
                        ]
                        var zxz_6_areaJson = [
                        [120.9020955876785, 32.47015324090988],
                        [120.90269640249784, 32.47011032556564],
                        [120.90488508505399, 32.47148361658127],
                        [120.91024950308378, 32.47693386529953],
                        [120.91372564596708, 32.47993793939621],
                        [120.9180171803909, 32.482770352115935],
                        [120.91939047140653, 32.48337116693527],
                        [120.91951921743924, 32.48457279657394],
                        [120.90025022787626, 32.4795946166423],
                        [120.9020955876785, 32.47015324090988]
                        ]
                        var zxz_7_areaJson = [
                        [120.92664048237378, 32.481903998604125],
                        [120.93878552479322, 32.481861083259886],
                        [120.93934342426832, 32.47083183979065],
                        [120.93925759357984, 32.464179961433715],
                        [120.92998787922437, 32.47027394031555],
                        [120.92561051411207, 32.47031685565979],
                        [120.92634007496412, 32.47426506732971],
                        [120.92930123371656, 32.47430798267395],
                        [120.92951581043775, 32.47585293506653],
                        [120.92694088978345, 32.47611042713196],
                        [120.92664048237378, 32.481903998604125]
                        ]
                        var zxz_8_areaJson = [
                        [120.93662529901619, 32.48184974778184],
                        [120.93873887971992, 32.48184974778184],
                        [120.93880325273628, 32.47944648850449],
                        [120.9379234881794, 32.479124623422706],
                        [120.93795567468757, 32.479124623422706],
                        [120.93662529901619, 32.48184974778184]
                        ]
                        var zxz_9_areaJson = [
                        [120.92668576567102, 32.48519703284001],
                        [120.92871351568628, 32.48577638998723],
                        [120.9287886175387, 32.484113420397996],
                        [120.92684669821192, 32.48408123388982],
                        [120.92668576567102, 32.48519703284001]
                        ]
                        var zxz_10_areaJson = [
                        [120.92254701240904, 32.48359730271933],
                        [120.92337313278563, 32.48362948922751],
                        [120.92299762352354, 32.48258879212973],
                        [120.92237535103209, 32.482502961441256],
                        [120.92254701240904, 32.48359730271933]
                        ]
                        var zxz_11_areaJson = [
                        [120.93049366445614, 32.48759390594393],
                        [120.93152363271786, 32.48766900779635],
                        [120.93152363271786, 32.48740078689486],
                        [120.93065459699703, 32.48707892181307],
                        [120.93065459699703, 32.48718621017367],
                        [120.93061168165279, 32.487046735304894],
                        [120.93049366445614, 32.48759390594393]
                        ]
                        var zxz_12_areaJson = [
                                [120.90209531476559, 32.46973674802194],
                                [120.9038977592236, 32.46982257871041],
                                [120.9059147804028, 32.46458690671334],
                                [120.90630101850094, 32.46299903897653],
                                [120.91608571698727, 32.45368640927682],
                                [120.93913125684323, 32.45450180081735],
                                [120.95119046857418, 32.454802208227015],
                                [120.95121450370331, 32.45448993843348],
                                [120.9515900129654, 32.45447920959742],
                                [120.95165438598175, 32.45473670166285],
                                [120.95665402358551, 32.454962007220104],
                                [120.95601287087895, 32.47211628253155],
                                [120.95586266717412, 32.47640781695538],
                                [120.95086302957036, 32.47565679843121],
                                [120.94466176232793, 32.47338228518658],
                                [120.9423872490833, 32.47119360263043],
                                [120.93964066705205, 32.470936110565],
                                [120.93933210826333, 32.46377884336546],
                                [120.93027697062905, 32.470173229656965],
                                [120.90317293427755, 32.47018055784961],
                                [120.90209531476559, 32.46973674802194]
                        ]
                        //杨楝园村
                        var yly_1_areaJson = [
                        [120.92398335600807, 32.47063685273125],
                        [120.9234683718772, 32.46943522309258],
                        [120.92415501738502, 32.463126667489554],
                        [120.93509843016578, 32.46342707489922],
                        [120.93505551482154, 32.46428538178399],
                        [120.93548466826392, 32.46505785798028],
                        [120.93325307036353, 32.46655989502862],
                        [120.93054940367652, 32.46664572571709],
                        [120.92977692748023, 32.47089434479668],
                        [120.92398335600807, 32.47063685273125]
                        ]
                        var yly_2_areaJson = [
                        [120.91536810065223, 32.46229786490395],
                        [120.92932889382274, 32.46301556337214],
                        [120.92937438662399, 32.45442063214062],
                        [120.91598479922165, 32.45390564800976],
                        [120.91598479922165, 32.453948563354],
                        [120.91611354525436, 32.453948563354],
                        [120.91536810065223, 32.46229786490395]
                        ]
                        var yly_3_areaJson = [
                        [120.93902166393853, 32.470689475156156],
                        [120.9481652097183, 32.4714179024604],
                        [120.94932392401273, 32.45892953728706],
                        [120.93951776785428, 32.458865164270705],
                        [120.93902166393853, 32.470689475156156]
                        ]
                        var yly_4_areaJson = [
                                [121.01047328073336, 32.53884798236846],
                                [121.02454951364352, 32.53189569660186],
                                [121.03536418039157, 32.524685918769826],
                                [121.04085734445407, 32.52202516742705],
                                [121.05742266733004, 32.517733633003225],
                                [121.05871012765719, 32.5244284267044],
                                [121.06231501657321, 32.52580171772002],
                                [121.0824852283652, 32.51987940021514],
                                [121.08368685800387, 32.51756197162627],
                                [121.0810261066611, 32.510953008613576],
                                [121.059396773165, 32.50314241596221],
                                [121.05622103769137, 32.495503484687795],
                                [121.02635195810153, 32.5053740138626],
                                [121.01210406381442, 32.51181131549834],
                                [120.99304965097262, 32.51859193988799],
                                [121.01047328073336, 32.53884798236846]
                        ]
                        //送桥村
                        var yk_1_areaJson = [
                        [121.0581733715982, 32.51707845556919],
                        [121.04873199586578, 32.49845319616978],
                        [121.05619926576324, 32.495792444827],
                        [121.06632728700347, 32.502229746462746],
                        [121.07945938234039, 32.51029783117954],
                        [121.07945938234039, 32.51004033911411],
                        [121.07945938234039, 32.51029783117954],
                        [121.0581733715982, 32.51707845556919]
                        ]
                        var yk_2_areaJson = [
                        [121.03590556760456, 32.52442121030416],
                        [121.0449177898946, 32.52073049069967],
                        [121.05049678464557, 32.51922845365133],
                        [121.05749198575641, 32.51755475522604],
                        [121.05418750425007, 32.510130400672814],
                        [121.03242942472126, 32.51789807797994],
                        [121.03264400144245, 32.517855162635705],
                        [121.03590556760456, 32.52442121030416]
                        ]
                        var yk_3_areaJson = [
                        [121.03249658469863, 32.517349358679695],
                        [121.05395425681778, 32.509839173437996],
                        [121.0515080821962, 32.50516140091602],
                        [121.03000749473281, 32.51267158615772],
                        [121.03000749473281, 32.51271450150196],
                        [121.03249658469863, 32.517349358679695]
                        ]
                        var yk_4_areaJson = [
                        [121.03002884765293, 32.51201331140127],
                        [121.05131485839512, 32.50467478753652],
                        [121.0482678689542, 32.49866663934316],
                        [121.02715351958896, 32.506648893371484],
                        [121.0271964349332, 32.506863470092675],
                        [121.03002884765293, 32.51201331140127]
                        ]
                        var yk_5_areaJson = [
                        [121.01064988752033, 32.538540358558556],
                        [121.02618524213459, 32.53090142728414],
                        [121.0352832951131, 32.5244641256484],
                        [121.03458849822624, 32.52327209129798],
                        [121.00643603240593, 32.53340011253822],
                        [121.00656477843864, 32.53340011253822],
                        [121.01064988752033, 32.538540358558556]
                        ]
                        var yk_6_areaJson = [
                        [121.00613851670929, 32.53311270106022],
                        [121.00210447435089, 32.52864950525944],
                        [121.00935716752716, 32.526246245982094],
                        [121.0121037495584, 32.53113859522526],
                        [121.01180334214874, 32.53113859522526],
                        [121.00613851670929, 32.53311270106022]
                        ]
                        var yk_7_areaJson = [
                        [121.01224580188419, 32.53088131071653],
                        [121.03439011951114, 32.52315654875364],
                        [121.02992692371036, 32.51225605131712],
                        [121.00640931506778, 32.52015247465696],
                        [121.00640931506778, 32.52015247465696],
                        [121.01224580188419, 32.53088131071653]
                        ]
                        var yk_8_areaJson = [
                        [121.00168594499256, 32.52869799257841],
                        [121.00949653764393, 32.52612307192411],
                        [121.00537666459705, 32.51809790255155],
                        [121.02850803514148, 32.50998690249052],
                        [121.02631935258533, 32.5054807913455],
                        [120.99932560105945, 32.5164671194705],
                        [120.99323162217762, 32.51861288668241],
                        [121.00168594499256, 32.52869799257841]
                        ]
                        var yk_9_areaJson = [
                        [120.99826302728154, 32.52351813609295],
                        [120.99873509606816, 32.52313189799481],
                        [120.99815573892094, 32.52308898265057],
                        [120.9978767891834, 32.52313189799481],
                        [120.99809136590459, 32.52338939006024],
                        [120.99826302728154, 32.52351813609295]
                        ]
                        var yk_10_areaJson = [
                        [121.02752366443302, 32.5139820528182],
                        [121.0276631393018, 32.513847942367455],
                        [121.02747002025272, 32.513874764457604],
                        [121.0274485625806, 32.513842577949426],
                        [121.02748611350681, 32.51391767980184],
                        [121.02752366443302, 32.5139820528182]
                        ]
                        var yk_11_areaJson = [
                        [121.02818348785068, 32.512131328597924],
                        [121.02788308044101, 32.51200258256521],
                        [121.02846243758823, 32.51168071748342],
                        [121.02846243758823, 32.5116592598113],
                        [121.02818348785068, 32.512131328597924]
                        ]
                        var yk_12_areaJson = [
                                [120.93619754869296, 32.574939786872854],
                                [120.94890049058749, 32.573394834480276],
                                [120.95920017320468, 32.56996160694121],
                                [120.97258976060702, 32.5608635539627],
                                [120.97799709398105, 32.55657201953887],
                                [120.98337739576091, 32.53078835939211],
                                [120.95531076062908, 32.54175322984499],
                                [120.94990342725505, 32.54473584626955],
                                [120.94097703565349, 32.550164637315696],
                                [120.93119233716716, 32.55582946275515],
                                [120.92503398526897, 32.55952018235964],
                                [120.92434733976116, 32.55952018235964],
                                [120.92436879743327, 32.55954164003176],
                                [120.93619754869296, 32.574939786872854]
                        ]
                        //南渔村
                        var ny_1_areaJson = [
                        [120.97710555306806, 32.55725537619568],
                        [120.97045367471112, 32.5487581380365],
                        [120.9696382831706, 32.54596864066101],
                        [120.97487395516767, 32.543350804662474],
                        [120.97036784402265, 32.535797704076536],
                        [120.97504561654462, 32.53416692099548],
                        [120.97856467477216, 32.54493867239929],
                        [120.9786075901164, 32.54489575705505],
                        [120.97710555306806, 32.55725537619568]
                        ]
                        var ny_2_areaJson = [
                        [120.96545682406838, 32.547554959736615],
                        [120.96047864413674, 32.53974436708525],
                        [120.97026334262307, 32.53596781679228],
                        [120.97472653842385, 32.543306340657026],
                        [120.97481236911233, 32.5433921713455],
                        [120.96545682406838, 32.547554959736615]
                        ]
                        var ny_3_areaJson = [
                        [120.96938100060918, 32.56040789777928],
                        [120.9762474556873, 32.5562880247324],
                        [120.96989598474003, 32.54813410932713],
                        [120.96955266198613, 32.54590251142674],
                        [120.96569028100468, 32.54736163313084],
                        [120.96045460900761, 32.53963687116795],
                        [120.95779385766484, 32.54083850080662],
                        [120.95702138146855, 32.541010162183575],
                        [120.96938100060918, 32.56040789777928]
                        ]
                        var ny_4_areaJson = [
                        [120.93627459949036, 32.574817858155086],
                        [120.94721801227112, 32.573616228516414],
                        [120.9473038429596, 32.57314415972979],
                        [120.93335635608216, 32.55451890033038],
                        [120.92563159411927, 32.55906792681964],
                        [120.92451579516907, 32.559582910950496],
                        [120.93030936664124, 32.56722184222491],
                        [120.93030936664124, 32.56722184222491],
                        [120.9363175148346, 32.574860773499324],
                        [120.93627459949036, 32.574817858155086]
                        ]
                        var ny_5_areaJson = [
                        [120.96253021977712, 32.565042244079315],
                        [120.9695683362322, 32.56062196362277],
                        [120.95716580174734, 32.54100965130588],
                        [120.94823941014577, 32.54573033917209],
                        [120.94819649480154, 32.54594491589328],
                        [120.95175846837331, 32.550579773071014],
                        [120.96253021977712, 32.565042244079315]
                        ]
                        var ny_6_areaJson = [
                        [120.95469322404362, 32.568753591129116],
                        [120.96216049394108, 32.564547887393765],
                        [120.94765510758855, 32.545836797305874],
                        [120.94104614457585, 32.55021416241818],
                        [120.94619598588444, 32.557080617496304],
                        [120.95469322404362, 32.568753591129116]
                        ]
                        var ny_7_areaJson = [
                        [120.94744053086735, 32.57335894400769],
                        [120.95439281663396, 32.56880991751843],
                        [120.94083156785466, 32.55035631949597],
                        [120.93345012864567, 32.55481951529675],
                        [120.9403165837238, 32.56408922965222],
                        [120.94744053086735, 32.57335894400769]
                        ]
                        var ny_8_areaJson = [
                        [120.97012665471532, 32.546724608489804],
                        [120.9701051970432, 32.546209624358944],
                        [120.9706630965183, 32.5463812857359],
                        [120.97012665471532, 32.546724608489804]
                        ]
                        var ny_9_areaJson = [
                                [120.93626449916633, 32.575314162587134],
                                [120.93961189601691, 32.58063566527268],
                                [120.93326042506965, 32.585270522450415],
                                [120.93248794887336, 32.595999358509985],
                                [120.93394707057746, 32.59720098814866],
                                [120.93368957851203, 32.59908926329514],
                                [120.93437622401984, 32.597286818837134],
                                [120.93514870021613, 32.597286818837134],
                                [120.93583534572394, 32.598745940541235],
                                [120.93686531398566, 32.599604247426],
                                [120.9385819277552, 32.60029089293381],
                                [120.93755195949348, 32.6021791680803],
                                [120.93918274257453, 32.600720046376196],
                                [120.94235847804816, 32.6036382897844],
                                [120.94192932460578, 32.60561239561936],
                                [120.94304512355598, 32.60432493529221],
                                [120.94398926112922, 32.6050974114885],
                                [120.94536255214484, 32.604754088734595],
                                [120.94450424526008, 32.60312330565354],
                                [120.94304512355598, 32.602264998768774],
                                [120.94338844630988, 32.601235030507056],
                                [120.94433258388312, 32.601235030507056],
                                [120.94510506007941, 32.60235082945725],
                                [120.94630668971809, 32.603724120472876],
                                [120.94785164211066, 32.602007506703345],
                                [120.9455342135218, 32.59994757017991],
                                [120.9663910708216, 32.60046255431077],
                                [120.99840591762336, 32.58209478697678],
                                [121.00501488063605, 32.577545760487524],
                                [121.02630089137824, 32.56698858580491],
                                [121.03328794111003, 32.5640155646686],
                                [121.03912442792644, 32.563157257783836],
                                [121.04324430097331, 32.56058233712954],
                                [121.04478925336589, 32.55749243234438],
                                [121.05251401532878, 32.554917511690086],
                                [121.05526059736003, 32.553715882051414],
                                [121.09285443891277, 32.54478949044985],
                                [121.08718961347331, 32.528996643770164],
                                [121.0839280473112, 32.52367514108462],
                                [121.08512967694988, 32.52213018869204],
                                [121.08427137006511, 32.518010315645164],
                                [121.08289807904949, 32.51955526803774],
                                [121.06298535932292, 32.5255634162311],
                                [121.05835050214519, 32.52453344796938],
                                [121.05749219526042, 32.51766699289126],
                                [121.03775113691081, 32.52333181833071],
                                [121.01045697797527, 32.53878134225649],
                                [120.99655240644206, 32.522988495576804],
                                [120.9902009354948, 32.52933996652407],
                                [120.99002927411784, 32.53534811471743],
                                [120.98161786664714, 32.53809469674868],
                                [120.97835630048503, 32.555432495820945],
                                [120.96136182416667, 32.568650421846336],
                                [120.9488305436491, 32.572941956270164],
                                [120.94865888227214, 32.572941956270164],
                                [120.93626449916633, 32.575314162587134]
                        ]
                        //四海社区
                        var shsq_1_areaJson = [
                        [121.03180721563871, 32.55529728387863],
                        [121.03614166540677, 32.55147781824142],
                        [121.0448105649429, 32.5576147124675],
                        [121.04343727392728, 32.560189633121794],
                        [121.04069069189603, 32.56224956964523],
                        [121.0384161786514, 32.56336536859543],
                        [121.03330925268705, 32.563923268070525],
                        [121.00295995293153, 32.579275098923965],
                        [120.96588109550966, 32.60107609379701],
                        [120.94579671440614, 32.60090443242006],
                        [120.94408010063661, 32.60141941655092],
                        [120.94665502129091, 32.603479353074356],
                        [120.94442342339052, 32.60313603032045],
                        [120.94511006889833, 32.60468098271303],
                        [120.94184850273622, 32.605024305466934],
                        [120.93326543388856, 32.59644123661928],
                        [120.93343709526552, 32.58493992436342],
                        [120.94013188896669, 32.57996174443178],
                        [120.93635533867372, 32.574811903123184],
                        [120.94733351541967, 32.573190715330384],
                        [120.95651739908666, 32.57031538726642],
                        [120.97826732723642, 32.555540646464586],
                        [120.98178638546396, 32.53820284739232],
                        [120.98976863949228, 32.53519877329564],
                        [120.99036945431162, 32.52901896372533],
                        [120.99689258663584, 32.52301081553197],
                        [121.01122631161142, 32.53949030771947],
                        [121.03180721563871, 32.55529728387863]
                        ]
                        var shsq_2_areaJson = [
                        [121.01106542041363, 32.538817041200495],
                        [121.03183644702496, 32.555296533387995],
                        [121.03621381213726, 32.5516058137835],
                        [121.0151852934605, 32.536070459169245],
                        [121.01106542041363, 32.538817041200495]
                        ]
                        var shsq_3_areaJson = [
                        [121.01333073475917, 32.540860485384556],
                        [121.01719311574061, 32.53817827636966],
                        [121.01519755223353, 32.53656895096073],
                        [121.01122788289149, 32.53884346420536],
                        [121.01333073475917, 32.540860485384556]
                        ]
                        var shsq_4_areaJson = [
                        [120.97889959529991, 32.56545688498505],
                        [120.98465025142784, 32.56206657279023],
                        [120.98134576992149, 32.558161276464546],
                        [120.97602426723594, 32.561937826757514],
                        [120.97889959529991, 32.56545688498505]
                        ]
                        var shsq_5_areaJson = [
                        [121.04494624667372, 32.557315215020814],
                        [121.05533175997938, 32.55448280230109],
                        [121.05292850070204, 32.53474174395148],
                        [121.02700763278212, 32.54469810381476],
                        [121.04494624667372, 32.557315215020814]
                        ]
                        var shsq_6_areaJson = [
                        [121.02701609841718, 32.54453365883804],
                        [121.05285113564862, 32.53474896035171],
                        [121.0529369663371, 32.52865498146988],
                        [121.04332392922772, 32.52685253701187],
                        [121.01585810891522, 32.5366372354982],
                        [121.02701609841718, 32.54453365883804]
                        ]
                        var shsq_7_areaJson = [
                        [121.05613374047483, 32.554217263608614],
                        [121.09304093651976, 32.54451839581076],
                        [121.08832024865355, 32.53258793011252],
                        [121.05433129601683, 32.54477588787619],
                        [121.05613374047483, 32.554217263608614]
                        ]
                        var shsq_8_areaJson = [
                        [121.05419140214003, 32.54421077200086],
                        [121.08809452408828, 32.53296695181043],
                        [121.08448963517226, 32.5246413750282],
                        [121.05298977250136, 32.53476939626844],
                        [121.05419140214003, 32.54421077200086]
                        ]
                        var shsq_9_areaJson = [
                        [120.98543949073334, 32.55348490875514],
                        [120.98000212930013, 32.54712777006885],
                        [120.98068877480794, 32.54523949492236],
                        [120.98678275368978, 32.54523949492236],
                        [120.99390670083334, 32.53682808745166],
                        [120.99668804682977, 32.52613030435246],
                        [121.00101434521879, 32.53626792088095],
                        [121.00414716534819, 32.54154650822226],
                        [121.00837948166968, 32.54098634165155],
                        [121.01925552496905, 32.54912612757735],
                        [121.01500690588946, 32.55285976252608],
                        [121.02316082129474, 32.559039572096395],
                        [121.02904022345538, 32.55620715937667],
                        [121.03685081610675, 32.562558630323934],
                        [121.0315293134212, 32.56444690547042],
                        [121.00466430792804, 32.57745025477462],
                        [120.98543949073334, 32.55348490875514]
                        ]
                        var shsq_10_areaJson = [
                        [120.98223414620854, 32.58274667555981],
                        [120.99558081826665, 32.574635675498776],
                        [120.99141802987553, 32.570172479697995],
                        [120.97854342660405, 32.57871263320141],
                        [120.98223414620854, 32.58274667555981]
                        ]
                        var shsq_11_areaJson = [
                        [120.97522295659562, 32.57491575878413],
                        [120.97170389836808, 32.57045256298335],
                        [120.98543680852433, 32.56242739361079],
                        [120.98874129003067, 32.566547266657665],
                        [120.97522295659562, 32.57491575878413]
                        ]





                        var all_areajson = [];
                        all_areajson.push(areaJson);
                        all_areajson.push(cy_areaJson);
                        all_areajson.push(fl_areaJson);
                        all_areajson.push(hz_areaJson);
                        all_areajson.push(jdc_areaJson);
                        all_areajson.push(jdsq_areaJson);
                        all_areajson.push(lw_areaJson);
                        all_areajson.push(sy_areaJson);
                        all_areajson.push(tj_areaJson);
                        all_areajson.push(xx_areaJson);
                        all_areajson.push(yh_areaJson);
                        all_areajson.push(bj_areaJson);
                        all_areajson.push(areaJson);
                        all_areajson.push(xh_areaJson);
                        all_areajson.push(lq_areaJson);
                        all_areajson.push(zxz_areaJson);
                        all_areajson.push(yjy_areaJson);
                        all_areajson.push(cy_areaJson);
                        all_areajson.push(yk_areaJson);
                        all_areajson.push(ny_areaJson);
                        all_areajson.push(sh_areaJson);
                        //张埭村
                        all_areajson.push(zl_areaJson);
                        // all_areajson.push(xl_1_areaJson);
                        // all_areajson.push(xl_2_areaJson);
                        // all_areajson.push(xl_3_areaJson);
                        // all_areajson.push(xl_4_areaJson);
                        // all_areajson.push(xl_5_areaJson);
                        // all_areajson.push(xl_6_areaJson);
                        // all_areajson.push(xl_7_areaJson);
                        // all_areajson.push(xl_8_areaJson);
                        // all_areajson.push(xl_9_areaJson);
                        // all_areajson.push(tx_1_areaJson);
                        // all_areajson.push(tx_2_areaJson);
                        // all_areajson.push(tx_3_areaJson);
                        // all_areajson.push(tx_4_areaJson);
                        // all_areajson.push(tx_5_areaJson);
                        // all_areajson.push(tx_6_areaJson);
                        // all_areajson.push(tx_7_areaJson);
                        // all_areajson.push(tx_8_areaJson);
                        // all_areajson.push(ga_1_areaJson);
                        // all_areajson.push(ga_2_areaJson);
                        // all_areajson.push(ga_3_areaJson);
                        // all_areajson.push(ga_4_areaJson);
                        // all_areajson.push(ga_5_areaJson);
                        // all_areajson.push(ga_6_areaJson);
                        // all_areajson.push(gz_1_areaJson);
                        // all_areajson.push(gz_2_areaJson);
                        // all_areajson.push(gz_3_areaJson);
                        // all_areajson.push(gz_4_areaJson);
                        // all_areajson.push(gz_5_areaJson);
                        // all_areajson.push(xb_1_areaJson);
                        // all_areajson.push(xb_2_areaJson);
                        // all_areajson.push(xb_3_areaJson);
                        // all_areajson.push(xb_4_areaJson);
                        // all_areajson.push(xb_5_areaJson);
                        // all_areajson.push(xb_6_areaJson);
                        // all_areajson.push(xb_7_areaJson);
                        // all_areajson.push(xb_8_areaJson);
                        // all_areajson.push(zx_1_areaJson);
                        // all_areajson.push(zx_2_areaJson);
                        // all_areajson.push(zx_3_areaJson);
                        // all_areajson.push(zx_4_areaJson);
                        // all_areajson.push(zx_5_areaJson);
                        // all_areajson.push(zx_6_areaJson);
                        // all_areajson.push(zx_7_areaJson);
                        // all_areajson.push(zx_8_areaJson);
                        // all_areajson.push(zx_9_areaJson);
                        // all_areajson.push(ctt_1_areaJson);
                        // all_areajson.push(ctt_2_areaJson);
                        // all_areajson.push(ctt_3_areaJson);
                        // all_areajson.push(ctt_4_areaJson);
                        // all_areajson.push(ctt_5_areaJson);
                        // all_areajson.push(ctt_6_areaJson);
                        // all_areajson.push(tw_1_areaJson);
                        // all_areajson.push(tw_2_areaJson);
                        // all_areajson.push(tw_3_areaJson);
                        // all_areajson.push(tw_4_areaJson);
                        // all_areajson.push(tw_5_areaJson);
                        // all_areajson.push(ly_1_areaJson);
                        // all_areajson.push(ly_2_areaJson);
                        // all_areajson.push(ly_3_areaJson);
                        // all_areajson.push(ly_4_areaJson);
                        // all_areajson.push(ly_5_areaJson);
                        // all_areajson.push(ly_6_areaJson);
                        // all_areajson.push(lft_1_areaJson);
                        // all_areajson.push(lft_2_areaJson);
                        // all_areajson.push(lft_3_areaJson);
                        // all_areajson.push(lft_4_areaJson);
                        // all_areajson.push(lft_5_areaJson);
                        // all_areajson.push(lft_6_areaJson);
                        // all_areajson.push(sjk_1_areaJson);
                        // all_areajson.push(sjk_2_areaJson);
                        // all_areajson.push(sjk_3_areaJson);
                        // all_areajson.push(sjk_4_areaJson);
                        // all_areajson.push(sjk_5_areaJson);
                        // all_areajson.push(sjk_6_areaJson);
                        // all_areajson.push(wy_1_areaJson);
                        // all_areajson.push(wy_2_areaJson);
                        // all_areajson.push(wy_3_areaJson);
                        // all_areajson.push(wy_4_areaJson);
                        // all_areajson.push(xys_1_areaJson);
                        // all_areajson.push(xys_2_areaJson);
                        // all_areajson.push(xys_3_areaJson);
                        // all_areajson.push(xys_4_areaJson);
                        // all_areajson.push(xys_5_areaJson);
                        // all_areajson.push(zy_1_areaJson);
                        // all_areajson.push(zy_2_areaJson);
                        // all_areajson.push(zy_3_areaJson);
                        // all_areajson.push(zy_4_areaJson);
                        // all_areajson.push(zy_5_areaJson);
                        // all_areajson.push(yfk_1_areaJson);
                        // all_areajson.push(yfk_2_areaJson);
                        // all_areajson.push(yfk_3_areaJson);
                        // all_areajson.push(yfk_4_areaJson);
                        // all_areajson.push(zxz_1_areaJson);
                        // all_areajson.push(zxz_2_areaJson);
                        // all_areajson.push(zxz_3_areaJson);
                        // all_areajson.push(zxz_4_areaJson);
                        // all_areajson.push(zxz_5_areaJson);
                        // all_areajson.push(zxz_6_areaJson);
                        // all_areajson.push(zxz_7_areaJson);
                        // all_areajson.push(zxz_8_areaJson);
                        // all_areajson.push(zxz_9_areaJson);
                        // all_areajson.push(zxz_10_areaJson);
                        // all_areajson.push(zxz_11_areaJson);
                        // all_areajson.push(zxz_12_areaJson);
                        // all_areajson.push(yly_1_areaJson);
                        // all_areajson.push(yly_2_areaJson);
                        // all_areajson.push(yly_3_areaJson);
                        // all_areajson.push(yly_4_areaJson);
                        // all_areajson.push(yk_1_areaJson);
                        // all_areajson.push(yk_2_areaJson);
                        // all_areajson.push(yk_3_areaJson);
                        // all_areajson.push(yk_4_areaJson);
                        // all_areajson.push(yk_5_areaJson);
                        // all_areajson.push(yk_6_areaJson);
                        // all_areajson.push(yk_7_areaJson);
                        // all_areajson.push(yk_8_areaJson);
                        // all_areajson.push(yk_9_areaJson);
                        // all_areajson.push(yk_10_areaJson);
                        // all_areajson.push(yk_11_areaJson);
                        // all_areajson.push(yk_12_areaJson);
                        // all_areajson.push(ny_1_areaJson);
                        // all_areajson.push(ny_2_areaJson);
                        // all_areajson.push(ny_3_areaJson);
                        // all_areajson.push(ny_4_areaJson);
                        // all_areajson.push(ny_5_areaJson);
                        // all_areajson.push(ny_6_areaJson);
                        // all_areajson.push(ny_7_areaJson);
                        // all_areajson.push(ny_8_areaJson);
                        // all_areajson.push(ny_9_areaJson);
                        // all_areajson.push(shsq_1_areaJson);
                        // all_areajson.push(shsq_2_areaJson);
                        // all_areajson.push(shsq_3_areaJson);
                        // all_areajson.push(shsq_4_areaJson);
                        // all_areajson.push(shsq_5_areaJson);
                        // all_areajson.push(shsq_6_areaJson);
                        // all_areajson.push(shsq_7_areaJson);
                        // all_areajson.push(shsq_8_areaJson);
                        // all_areajson.push(shsq_9_areaJson);
                        // all_areajson.push(shsq_10_areaJson);
                        // all_areajson.push(shsq_11_areaJson);










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
                        //创建面对象 区域面积背景
                        var polygon = new T.Polygon(points, style);
                        map.addOverLay(polygon);
                        }
                }

                function getweater() {

                        $.ajax({
                        url: "http://wthrcdn.etouch.cn/weather_mini?city=如东",
                        dataType: "jsonp",
                        type: "post",
                        data: {

                        },
                        success: function(data) {
                                // console.log(data.data.forecast[0]);
                                var forecast = data.data.forecast[0];
                                var str = forecast.fengli,
                                fengli = str.slice(9, 13);
                                // console.log(fengli);
                                $("#nowTime>span:nth-child(4)").text("最" + forecast.high);
                                $("#nowTime>span:nth-child(5)").text("最" + forecast.low);
                                $("#nowTime>span:nth-child(6)").text(forecast.fengxiang);
                                $("#nowTime>span:nth-child(7)").text(fengli);
                                $("#nowTime>span:nth-child(8)").text(forecast.type);

                        }
                        })
                }
                this.$nextTick(()=>{
                        onLoad();
                        $('.tdt-control-copyright.tdt-control').css('display','none');
                })
        }
}
</script>

<style lang="less">
        body {
                position: relative;
        }
        .djyl{
                #hv-wrapper .box1 {
                top: 0;
                left: 0;
                width: 520px;
                height: 264px;
        }

        #hv-wrapper .box2 {
        top: 282px;
        left: 0;
        width: 520px;
        height: 280px;
        }

        #hv-wrapper .box3 {
        top: 580px;
        left: 0;
        width: 520px;
        height: 300px;
        }

        #hv-wrapper .box4 {
        top: 580px;
        left: 538px;
        width: 835px;
        height: 300px;
        }

        #hv-wrapper .box5 {
        top: 0;
        left: 1391px;
        width: 480px;
        height: 264px;
        }

        #hv-wrapper .box6 {
        top: 282px;
        left: 1391px;
        width: 480px;
        height: 280px;
        }

        #hv-wrapper .box7 {
        top: 580px;
        left: 1391px;
        width: 480px;
        height: 300px;
        }
        .tdt-infowindow-content-wrapper {
        background-color: #1274d2;
        }
        #hv-wrapper .map {
        top: 0;
        left: 538px;
        width: 835px;
        height: 562px;
        background: #F4EFFF;
        border-radius: 16px;
        }


        /*.conditionBox::after{*/


        /*content: '';*/


        /*display: block;*/


        /*clear: both;*/


        /*}*/


        /*党建概况*/

        #djgk1,
        #djgk2 {
        width: 100%;
        float: left;
        }

        .title {
        text-align: center;
        float: left;
        width: 50%;
        }

        .title_color {
        color: #fff;
        font-weight: bold;
        display: inline-block;
        width: 22px;
        height: 32px;
        background-color: #224fc2;
        line-height: 32px;
        font-size: 20px;
        text-align: center;
        }

        .title .title_color:first-child {
        margin-left: 20px;
        }

        #djgk2 .data {
        width: 120px;
        height: 170px;
        margin-left: 40px;
        position: relative;
        float: left;
        }

        #djgk2 .data:first-child {
        background: url("../img/yh.png") no-repeat -103px 30px;
        }

        #djgk2 .data:nth-child(2) {
        background: url("../img/yh.png") no-repeat -228px 30px;
        }

        #djgk2 .data:last-child {
        background: url("../img/yh.png") no-repeat -353px 30px;
        }

        #djgk2 .count {
        width: 100%;
        text-align: center;
        }

        #djgk2 .data:first-child .sub {
        position: absolute;
        top: 115px;
        left: 40px;
        }

        #djgk2 .data:first-child .count {
        position: absolute;
        top: 53px;
        }

        #djgk2 .data:nth-child(2) .sub {
        position: absolute;
        top: 115px;
        left: 32px;
        }

        #djgk2 .data:nth-child(2) .count {
        position: absolute;
        top: 53px;
        }

        #djgk2 .data:last-child .sub {
        position: absolute;
        top: 115px;
        left: 33px;
        }

        #djgk2 .data:last-child .count {
        position: absolute;
        top: 53px;
        }

        .box1Tab {
        display: inline-block;
        height: 40px;
        width: 100px;
        cursor: pointer;
        }

        .box1TabPage {
        height: 216px;
        overflow-y: auto;
        }

        .box1TabPage:last-child {
        padding: 0 10px;
        }

        .box1TabPage::-webkit-scrollbar {
        display: none;
        }


        /*先进党组织、优秀共产党员展示*/

        #tabBar {
        width: 100%;
        text-align: center;
        }

        .tab {
        display: inline-block;
        width: 25%;
        font-size: 17px;
        line-height: 30px;
        cursor: pointer;
        }

        .tabSelected {
        color: #00e4ff;
        border-bottom: 1px solid #00e4ff;
        }

        .tabContent {
        width: 100%;
        height: 180px;
        margin-top: 10px;
        overflow: hidden;
        }

        .tabList {
        width: 100%;
        /*height: 100%;*/
        padding: 0 30px;
        box-sizing: border-box;
        }

        .tabItem {
        padding: 0 30px;
        height: 42px;
        line-height: 42px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        }

        .branch {
        float: left;
        width: 75%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        }

        .name {
        float: right;
        }


        /*两学一做规定学习材料*/

        #studyBook {
        height: 204px;
        }

        #lxyz {
        width: 100%;
        /*height: 233px;*/
        padding: 0 30px;
        box-sizing: border-box;
        }

        .lxyzItem {
        height: 42px;
        line-height: 42px;
        }

        .lxyzTitle {
        float: left;
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        /*font-size: 16px;*/
        cursor: pointer;
        }

        .lxyzTitle:hover {
        background: #1c318a;
        }

        .lxyzTime {
        float: right;
        font-size: 16px;
        }


        /*党组织积分统计*/

        #jftj {
        width: 100%;
        height: 252px;
        padding: 0 30px;
        box-sizing: border-box;
        }

        .jftjHeader {
        width: 100%;
        line-height: 40px;
        }

        .jftjHeader::after {
        content: '';
        display: block;
        clear: both;
        }

        .jftjHeader>div {
        float: left;
        width: 12%;
        text-align: center;
        color: #00e4ff;
        }

        .jftjHeader>div:first-child {
        width: 40%;
        }

        .jftjBody {
        text-align: center;
        height: 200px;
        overflow: hidden;
        }

        .jftjLine {
        line-height: 42px;
        }

        .jftjLine::after {
        content: '';
        display: block;
        clear: both;
        }

        .jftjLine>div {
        float: left;
        width: 12%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        }

        .jftjLine>div:first-child {
        width: 40%;
        }


        /*新时代文明实践活动*/

        #sliderBox1 {
        width: 100%;
        height: 254px;
        position: relative;
        }

        .slider1 {
        /*width: 4160px;*/
        height: 100%;
        position: absolute;
        left: 0;
        transition: all 2s linear;
        }

        .imgBox {
        float: left;
        width: 240px;
        margin: 32px 10px;
        }

        .imgBox>img,
        .imgBox>video {
        /*float: left;*/
        width: 240px;
        height: 160px;
        cursor: pointer;
        }

        .imgLabel {
        text-align: center;
        }


        /*党员志愿服务等活动*/

        #sliderBox2 {
        width: 100%;
        height: 252px;
        position: relative;
        }

        #sliderBox2>div {
        position: absolute;
        width: 80%;
        height: 252px;
        margin: 0 10%;
        text-align: center;
        }

        #sliderBox2 img {
        width: 100%;
        height: 85%;
        }

        #mapdiv {
        width: 835px;
        height: 562px;
        background: #fff;
        border-radius: 16px;
        overflow: hidden;
        }


        /*新时代文明实践活动弹框*/

        .imgMask,
        .lxyzMask,
        .noticeMask {
        background: rgba(0, 0, 0, 0.5);
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 2000;
        display: none;
        }

        .imgModal,
        .lxyzModal,
        .noticeModal {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -282.5px;
        margin-left: -440px;
        width: 880px;
        height: 565px;
        background: #04236d;
        border-radius: 13px;
        }

        .modalTitle {
        height: 65px;
        position: relative;
        padding: 0 20px;
        }

        .modalTitleText {
        line-height: 65px;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin: 0 20px;
        }

        .closeBtn {
        font-size: 30px;
        position: absolute;
        top: 12px;
        right: 20px;
        }

        .closeBtn:hover {
        color: #00f5fe;
        }

        .modalContent {
        height: 500px;
        padding: 20px;
        box-sizing: border-box;
        overflow-y: auto;
        }

        .modalContent span {
        background: none !important;
        color: #fff !important;
        }

        .modalContent p {
        background: none !important;
        color: #fff !important;
        }

        .modalContent::-webkit-scrollbar,
        .town::-webkit-scrollbar {
        display: none;
        }

        .modalContent img,
        .modalContent video {
        width: 80%;
        height: 360px;
        display: block;
        margin: 0 auto;
        }

        .modalContent div {
        text-align: left;
        }


        /*通知公告*/

        #notice {
        height: 220px;
        }

        #noticeList {
        padding: 0 30px;
        }

        .noticeItem {
        height: 42px;
        line-height: 42px;
        }

        .noticeTitle {
        float: left;
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        /*font-size: 16px;*/
        cursor: pointer;
        }

        .noticeTitle:hover {
        background: #1c318a;
        }
        }
        
</style>
