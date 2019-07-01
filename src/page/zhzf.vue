<template>
        <div class="zhzf">
                <theader :active="3">
                    <div class="zhzftitle" style="top: 91px;right: -285px;">
                        <router-link to="/zhzf">综合执法</router-link>
                        <!-- <a class="active" href="zhzf.html">综合执法</a> -->
                        <router-link to="/sjfx">数据统计</router-link>
                        <!-- <a href="sjfx.html">数据统计</a> -->
                    </div>
                </theader>
    <!--/head end-->
    <div id="hv-wrapper">
        <div class="box box1">
            <div class="container">
                <i class="icon1"></i>
                <i class="icon2"></i>
                <i class="icon3"></i>
                <i class="icon4"></i>
                <div class="contentWrapper">
                    <div class="mainTitle" onclick="openwin()">双随机</div>
                    <div class="conditionBox">
                        <div id="echart_A1" style="width: 230px;height: 200px;display: inline-block; margin-left: -13px;"></div>
                        <div id="echart_A12" style="width: 297px;height: 200px;display: inline-block;"></div>
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
                        <div class="mainTitle">执法事件数量统计</div>
                        <div class="conditionBox">
                            <div class="box_sjjs">
                                <div>
                                    <p>当天接收<span> / 件</span></p>
                                    <p id="dangtian1">0000</p>
                                    <img src="../img/4.png">
                                </div>
                                <div>
                                    <p>当月接收<span> / 件</span></p>
                                    <p id="dangyue1">00006</p>
                                    <img src="../img/5.png">
                                </div>
                                <div>
                                    <p>当年接收<span> / 件</span></p>
                                    <p id="dangnian1">000167</p>
                                    <img src="../img/6.png">
                                </div>
                            </div>
                            <div class="box_sjjs">
                                <div>
                                    <p>当天处置<span> / 件</span></p>
                                    <p id="dangtian2">0000</p>
                                    <img src="../img/4.png">
                                </div>
                                <div>
                                    <p>当月处置<span> / 件</span></p>
                                    <p id="dangyue2">00005</p>
                                    <img src="../img/5.png">
                                </div>
                                <div>
                                    <p>当年处置<span> / 件</span></p>
                                    <p id="dangnian2">000164</p>
                                    <img src="../img/6.png">
                                </div>
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
                        <div class="mainTitle">年度处罚对象类型统计</div>
                        <div class="conditionBox">
                            <div id="echart_G2" style="width: 100%;height: 240px;"></div>
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
                        <div class="mainTitle">年度案件详情列表</div>
                        <div class="conditionBox">
                            <ul id="aj_ul">
                                <li>
                                    <div class="a3_div_head2first">企业名称</div>
                                    <div class="a3_div_head2">受理日期</div>
                                    <div class="a3_div_head2">案由</div>
                                    <div class="a3_div_head2">处罚结果</div>
                                </li>
                            </ul>
                            <div id="ndaj_div" class="content_div">
                                <ul id="aj_ul_2" style="padding:0 10px">

                                </ul>
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
                        <div class="mainTitle">执法事项权限</div>
                        <div class="conditionBox">
                            <ul id="a33_ul">
                                <li>
                                    <div class="a33_div_head_one">基本编码</div>
                                    <div class="a33_div_head_two">权限类型</div>
                                    <div class="a33_div_head">涉及部门</div>
                                </li>
                            </ul>
                            <div id="gd_div" class="content_div" style="padding:0 10px">
                                <ul id="a33_ul_2">

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="box box7">
                <!-- <div class="container">
					<div class="contentWrapper">
						<div class="mainTitle" id="mapdiv_gk_zhzf">

						</div>
					</div>
				</div> -->
                <div id="mapdiv_gk_zhzf" style="width:100%;height:100%">

                </div>
                <!-- <input type="text" id="lnglatStr" style="color: #000;" value=""/> -->
            </div>

            <div class="box box8">
                <div class="container">
                    <i class="icon1"></i>
                    <i class="icon2"></i>
                    <i class="icon3"></i>
                    <i class="icon4"></i>
                    <div class="contentWrapper">
                        <div class="mainTitle">年度检查及处罚案件数量统计</div>
                        <div class="conditionBox">
                            <div id="echart_G1" style="width: 100%;height: 300px;"></div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
    <!-- 展示详情 -->
    <div id="yearDetail" style="display: none">
        <div class="main">
            <div class="title">详情</div>
            <div class="close"><a onclick="closeYear()">×</a></div>
            <div class="approval" id="yearDThing">

            </div>
        </div>
    </div>
    <!-- xiangqing -->
    <div id="zhifashixiangDetail" style="display: none">
        <div class="main">
            <div class="title">详情</div>
            <div class="close"><a onclick="closeZhiFa()">×</a></div>
            <div class="approval" id="zhifaDhing">

            </div>
        </div>
    </div>
        </div>
</template>

<script>
export default {
        mounted(){
            var that=this;
            import('../js/echarts_zhzf_ku.js').then(d=>{
                setInterval(nowTime_zhzF, 1000);
        // window.serverUrlZHZF = "http://192.168.1.252:8086";
        //		window.serverUrlZHZF = "http://222.93.106.183:8082";
        //         window.serverUrlZHZF = "http://localhost:8080/";
        window.serverUrlZHZF = "http://58.220.24.15:8081/";
        document.getElementById("yearDetail").style.display = "none";
        document.getElementById("zhifashixiangDetail").style.display = "none";
        window.map = new T.Map('mapdiv_gk_zhzf');
        //以下为时间刷新方法----------------------------------------------------------
        function nowTime_zhzF() {
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
            $("#nowTime_zhzF>span:first-child").text(y + "年" + month + "月" + d + "日");
            $("#nowTime_zhzF>span:nth-child(3)").text(h + " : " + m + " : " + s);
            if (xingqi == 0) {
                $("#nowTime_zhzF>span:nth-child(2)").text("星期日");
            } else if (xingqi == 1) {
                $("#nowTime_zhzF>span:nth-child(2)").text("星期一");
            } else if (xingqi == 2) {
                $("#nowTime_zhzF>span:nth-child(2)").text("星期二");
            } else if (xingqi == 3) {
                $("#nowTime_zhzF>span:nth-child(2)").text("星期三");
            } else if (xingqi == 4) {
                $("#nowTime_zhzF>span:nth-child(2)").text("星期四");
            } else if (xingqi == 5) {
                $("#nowTime_zhzF>span:nth-child(2)").text("星期五");
            } else if (xingqi == 6) {
                $("#nowTime_zhzF>span:nth-child(2)").text("星期六");
            }
        }
        //时间数字小于10，则在之前加个“0”补位。
        function check(i) {
            //方法一，用三元运算符
            var num;
            i < 10 ? num = "0" + i : num = i;
            return num;
        }

        // 数字滚动效果
        function scrollNum11(num, id) {
            var a = 0;
            var timer = setInterval(function() {
                if (a < num) {
                    a++;
                    var text = '';
                    var b = 4 - a.toString().length;
                    for (var i = 0; i < b; i++) {
                        text += '0';
                    }
                    text += a;
                    $("#" + id).text(text);
                } else {
                    clearInterval(timer);
                }
            }, 10)
        }

        function scrollNum21(num, id) {
            var a = 0;
            var timer = setInterval(function() {
                if (a < num) {
                    a += 10;
                    var text = '';
                    if (a < num) {
                        var b = 5 - a.toString().length;
                        for (var i = 0; i < b; i++) {
                            text += '0';
                        }
                        text += a;
                    } else {
                        var b = 5 - num.toString().length;
                        for (var i = 0; i < b; i++) {
                            text += '0';
                        }
                        text += num;
                    }
                    $("#" + id).text(text);
                } else {
                    clearInterval(timer);
                }
            }, 10)
        }

        function scrollNum31(num, id) {
            var a = 0;
            var timer = setInterval(function() {
                if (a < num) {
                    a += 100;
                    var text = '';
                    if (a < num) {
                        var b = 6 - a.toString().length;
                        for (var i = 0; i < b; i++) {
                            text += '0';
                        }
                        text += a;
                    } else {
                        var b = 6 - num.toString().length;
                        for (var i = 0; i < b; i++) {
                            text += '0';
                        }
                        text += num;
                    }
                    $("#" + id).text(text);
                } else {
                    clearInterval(timer);
                }
            }, 10)
        }
        //每隔5秒数字自动跳跳
        setInterval(function() {
                scrollNum11(0, "dangtian1")
                scrollNum11(0, "dangtian2")
                scrollNum21(6, "dangyue1")
                scrollNum21(5, "dangyue2")
                scrollNum31(167, "dangnian1")
                scrollNum31(164, "dangnian2")
            }, 300000)
            //地图加载企业信息--------------------------------------------------------------------
        function addEnterPrise(index) {
            map.clearOverLays();
            if (_CarTrack) {
                _CarTrack.stop();
                _CarTrack.clear();
            }
            map.centerAndZoom(new T.LngLat(120.97333757316215, 32.52218043222892), 12);
            ykArea();
            var icon = new T.Icon({
                iconUrl: "img/enterprise.jpg",
                iconSize: new T.Point(44, 44),
                iconAnchor: new T.Point(22, 22)
            });
            //                var json_data = [[121.078959, 32.549203], [121.097166, 32.544266], [121.054712, 32.542748], [121.058001, 32.549473]];
            var json_data = findEnterPriseList();
            //                alert(json_data);
            var iparr = [
                ["http://192.168.11.97", "http://192.168.11.98"],
                ["http://192.168.12.202", "http://192.168.12.204"],
                ["http://192.168.40.2", "http://192.168.40.3"],
                ["http://192.168.40.9", "http://192.168.40.207"]
            ]
            for (var i = 0; i < json_data.length; i++) {

                var userJson = json_data[i];
                if (userJson.length > 0) {
                    console.log(userJson.length);

                    (function(i) {
                        var mark = new T.Marker(new T.LngLat(userJson[0], userJson[1]), {
                            icon: icon
                        });
                        map.addOverLay(mark);
                        /* mark.addEventListener("click", function () {
                                console.log(iparr[i])
                                var iWidth = 750;                         //弹出窗口的宽度;
                                var iHeight = 250;                        //弹出窗口的高度;
                                //window.screen.height获得屏幕的高，window.screen.width获得屏幕的宽
                                var iTop = (window.screen.height - 30 - iHeight) / 2;       //获得窗口的垂直位置;
                                var iLeft = (window.screen.width - 10 - iWidth) / 2;        //获得窗口的水平位置;
//                                findSPDWList(carTitle,carType,locationDeptId);
                                window.open("view.html", "视频监控", 'height=' + iHeight + ',,innerHeight=' + iHeight + ',width=' + iWidth + ',innerWidth=' + iWidth + ',top=' + iTop + ',left=' + iLeft + ', toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no')
                                window.localStorage.vidio1 = iparr[i][0];
                                window.localStorage.vidio2 = iparr[i][1];
                            }, this);*/

                    })(i);

                }
            }
        }
        $(function() {
            addEnterPrise();
        })
        var Items2 = new Array;

        function findEnterPriseList() {
            var locationArr = new Array;
            $.ajax({
                url: window.serverUrlZHZF + "/zhrd/fore/index/index_findEnterPriseList.action",
                dataType: 'json',
                type: 'post',
                async: false,
                data: {},
                error: function() {
                    console.log("企业经纬度信息获取数据出错");
                },
                success: function(data) {
                    console.log(data.datas)
                    Items2 = data;
                    $.each(Items2, function(i2, item2) {
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
        // 年度案件详情列表
        $.ajax({
            url: window.serverUrlZHZF + "/zhrd/jsp/caseInfo/selectBigScreen_enforceList.action",
            dataType: "json",
            type: "post",
            // async: false,
            data: {},
            error: function() {
                console.log("年度案件详情列表获取数据出错");
            },
            success: function(data) {
                var arr = data.datas;
                console.log(data)
                for (var i = 0; i < arr.length; i++) {
                    var html = "";
                    html += '<a target="_blank"><li onClick=getYearListDetail("' + arr[i].id + '")>'
                    html += '<div class="a3_div_content2" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">' + arr[i].partyName + '</div>'
                    html += '<div class="a3_div_content2" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">' + arr[i].acceptdate + '</div>'
                    html += '<div class="a3_div_content2" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">' + arr[i].cause + '</div>'
                    html += '<div class="a3_div_content2" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">' + arr[i].penalty + '</div>'
                    html += '</li></a>'
                    $("#aj_ul_2").append(html);
                }
                console.log(data)
            }
        })

        // 年度案件详情列表详情
        function getYearListDetail(id) {
            $.ajax({
                url: window.serverUrlZHZF + "/zhrd/jsp/caseInfo/selectBigScreen_getEnforceDetail.action",
                dataType: "json",
                type: "post",
                async: false,
                data: {
                    enforceLawId: id
                },
                error: function() {
                    console.log("年度案件详情获取数据出错");
                },
                success: function(data) {
                    $("#yearDThing").empty()
                    var arr = data.datas;
                    var html = '';
                    if (arr.caseno) {
                        html += '<p><span>案件编号：</span>' + arr.caseno + '</p>'
                    }
                    if (arr.partyName) {
                        html += '<p><span>企业名称：</span>' + arr.partyName + '</p>'
                    }
                    if (arr.acceptdate) {
                        html += '<p><span>受理日期：</span>' + arr.acceptdate + '</p>'
                    }
                    if (arr.registerdate) {
                        html += '<p><span>立案日期：</span>' + arr.registerdate + '</p>'
                    }
                    if (arr.closedate) {
                        html += '<p><span>结案日期：</span>' + arr.closedate + '</p>'
                    }
                    if (arr.cause) {
                        html += '<p><span>案由：</span>' + arr.cause + '</p>'
                    }
                    if (arr.penalty) {
                        html += '<p><span>处罚结果：</span>' + arr.penalty + '</p>'
                    }

                    $("#yearDThing").append(html)
                    $("#yearDetail").css("display", "block")
                }
            })
        }

        function closeYear() {
            $("#yearDetail").css("display", "none")
        }

        // 执法事项权限列表
        var arr1 = [{
                no: "0203035000",
                name: "对养殖者使用未取得新饲料、新饲料添加剂证书的新饲料、新饲料添加剂或者未取得饲料、饲料添加剂进口登记证的进口饲料、进口饲料添加剂的；使用无产品标签、无生产许可证、无产品质量标准、无产品质量检验合格证的饲料、饲料添加剂的；使用无产品批准文号的饲料添加剂、添加剂预混合饲料的；在饲料或者动物饮用水中添加饲料添加剂，不遵守国务院农业行政主管部门制定的饲料添加剂安全使用规范的；使用自行配制的饲料，不遵守国务院农业行政主管部门制定的自行配制饲料使用规范的；使用限制使用的物质养殖动物，不遵守国务院农业行政主管部门的限制性规定的；在反刍动物饲料中添加乳和乳制品以外的动物源性成分的处罚",
                type: "行政处罚",
                case: "《饲料和饲料添加剂管理条例》（国务院令第266号发布，第609号、第645号、第666号修订）",
                department: "农业农村局"
            }, {
                no: "0203036000",
                name: "对在饲料或者动物饮用水中添加国务院农业行政主管部门公布禁用的物质以及对人体具有直接或者潜在危害的其他物质，或者直接使用上述物质养殖动物的处罚",
                type: "行政处罚",
                case: "《饲料和饲料添加剂管理条例》（国务院令第266号发布，第609号、第645号、第666号修订）",
                department: "农业农村局"
            }, {
                no: "0203037000",
                name: "对养殖者对外提供自行配制的饲料的处罚",
                type: "行政处罚",
                case: "《饲料和饲料添加剂管理条例》（国务院令第266号发布，第609号、第645号、第666号修订）",
                department: "农业农村局"
            }, {
                no: "0202989000",
                name: "对农产品生产企业、农民专业合作经济组织未建立或者未按照规定保存农产品生产记录的，或者伪造农产品生产记录的处罚",
                type: "行政处罚",
                case: "《中华人民共和国农产品质量安全法》",
                department: "农业农村局"
            }, {
                no: "0202990000",
                name: "对农产品生产企业、农民专业合作经济组织以及从事农产品收购的单位或者个人销售的农产品未按照规定包装、标识的处罚",
                type: "行政处罚",
                case: "《中华人民共和国农产品质量安全法》",
                department: "农业农村局"
            }, {
                no: "0203015000",
                name: "对未领取许可证照或需要经过认证未认证而不按照法定条件、要求从事生产经营活动或者生产、销售不符合法定要求产品的处罚",
                type: "行政处罚",
                case: "《国务院关于加强食品等产品安全监督管理的特别规定》（国务院令第503号)",
                department: "农业农村局"
            }, {
                no: "0202991000",
                name: "对销售的农产品使用保鲜剂、防腐剂、添加剂等材料不符合国家有关强制性技术规范的处罚",
                type: "行政处罚",
                case: "《中华人民共和国农产品质量安全法》",
                department: "农业农村局"
            }, {
                no: "0202994000",
                name: "对冒用农产品质量标志的处罚",
                type: "行政处罚",
                case: "《中华人民共和国农产品质量安全法》",
                department: "农业农村局"
            }, {
                no: "0203018000",
                name: "对违法使用原料、辅料、添加剂、农业投入品的处罚",
                type: "行政处罚",
                case: "《国务院关于加强食品等产品安全监督管理的特别规定》（国务院令第503号)",
                department: "农业农村局"
            }, {
                no: "0202993000",
                name: "对农产品批发市场没有设立或者委托农产品质量安全检测机构，对进场销售的农产品质量安全状况进行抽查检测；发现不符合农产品质量安全标准的，没有要求销售者立即停止销售，并向农业行政主管部门报告的处罚",
                type: "行政处罚",
                case: "《中华人民共和国农产品质量安全法》",
                department: "农业农村局"
            }, {
                no: "0202992000",
                name: "对农产品生产企业、农民专业合作经济组织销售含有国家禁止使用的农药、兽药或者其他化学物质的农产品；销售农药、兽药等化学物质残留或者含有的重金属等有毒有害物质不符合农产品质量安全标准的农产品；销售含有的致病性寄生虫、微生物或者生物毒素不符合农产品质量安全标准的农产品；销售其他不符合农产品质量安全标准的农产品处罚",
                type: "行政处罚",
                case: "《中华人民共和国农产品质量安全法》",
                department: "农业农村局"
            },

        ]
        $("#a33_ul_2").empty();
        for (var i = 0; i < arr1.length; i++) {
            var html = "";
            html += '<li onClick=getDetailFunction("' + i + '")>'
            html += '<div class="a33_div_content_one">' + arr1[i].no + '</div>'
            html += '<div class="a33_div_content_two">' + arr1[i].type + '</div>'
            html += '<div class="a33_div_content">' + arr1[i].department + '</div>'
            html += '</li>'
            $("#a33_ul_2").append(html)
        }

        function getDetailFunction(id) {
            $("#zhifaDhing").empty();
            var html = "";
            html += '<p><span>基本编码：</span>' + arr1[id].no + '</p>'
            html += '<p><span>权限名称：</span>' + arr1[id].name + '</p>'
            html += '<p><span>权限类型：</span>' + arr1[id].type + '</p>'
            html += '<p><span>设定依据：</span>' + arr1[id].case+'</p>'
            html += '<p><span>涉及部门：</span>' + arr1[id].department + '</p>'
            $("#zhifaDhing").html(html);
            $("#zhifashixiangDetail").css("display", "block");
        }

        function closeZhiFa() {
            $("#zhifashixiangDetail").css("display", "none")
        }


        getweater();

        echartA1();
        echartA12();

        /*echartA199()
        echartA1299()*/

        echartG1();
        echartG2();
        // echartH2();
        /*echartHHOO();
        echartHHqq()*/
        $('#gd_div').myScroll({
            speed: 50, //数值越大，速度越慢
            rowHeight: 42 //li的高度
        });
        $('#ndaj_div').myScroll({
            speed: 50, //数值越大，速度越慢
            rowHeight: 62 //li的高度
        });

        function getLngLat(lnglat) {
            document.getElementById("lnglatStr").value = lnglat.lng.toFixed(6) + "," + lnglat.lat.toFixed(6);
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
                opacity: 0.8,
                lineStyle: "dashed"
            };
            var dmzxzb=[]
            import('../module/cun.js').then(d=>{
                d.default.forEach(item=>{
                    dmzxzb.push({
                        xay:[item.centralX,item.centralY],
                        name:item.XZQMC
                    })
                })
                    that.$http.post('/api/geometry').then(all_areajson=>{
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

                    var latlng = new T.LngLat(dmzxzb[k].xay[0], dmzxzb[k].xay[1]);
                    var label = new T.Label({
                        text: dmzxzb[k].name,
                        position: latlng,
                        offset: new T.Point(-29, 0)
                    });
                    label.setBorderLine(0)
                    label.setBackgroundColor("#ffffff00");
                    label.setFontColor("#ffffff");

                    map.addOverLay(label);
                }
                })
            })
            


            


        }
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
        
        map.centerAndZoom(new T.LngLat(120.97333757316215, 32.52218043222892), zoom);
        map.setStyle('indigo');
        ykArea();

        var cp = new T.CoordinatePickup(map, {
            callback: getLngLat
        })
        cp.addEvent();

        function openwin() {
            //window.open('dollare.html','newwindow','height=650,width=1354,top=0,left=0,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no, status=no')
            var url = 'http://58.220.24.15:8081/zhsq/userLoginToTask.action?loginId=admin&credential=ySMSP8zng5A='; //转向网页的地址;
            var name = 'add'; //网页名称，可为空;
            var iWidth = 1024; //弹出窗口的宽度;
            var iHeight = 700; //弹出窗口的高度;
            //获得窗口的垂直位置
            var iTop = (window.screen.availHeight - 30 - iHeight) / 2;
            //获得窗口的水平位置
            var iLeft = (window.screen.availWidth - 10 - iWidth) / 2;
            window.open(url, name, 'height=' + iHeight + ',,innerHeight=' + iHeight + ',width=' + iWidth + ',innerWidth=' + iWidth + ',top=' + iTop + ',left=' + iLeft + ',status=no,toolbar=no,menubar=no,location=no,resizable=no,scrollbars=0,titlebar=no');
        }

        function getweater() {

            $.ajax({
                url: "http://wthrcdn.etouch.cn/weather_mini?city=如东",
                dataType: "jsonp",
                type: "post",
                data: {

                },
                success: function(data) {
                    console.log(data.data.forecast[0]);
                    var forecast = data.data.forecast[0];
                    var str = forecast.fengli,
                        fengli = str.slice(9, 13);
                    console.log(fengli);
                    $("#nowTime_zhzF>span:nth-child(4)").text("最" + forecast.high);
                    $("#nowTime_zhzF>span:nth-child(5)").text("最" + forecast.low);
                    $("#nowTime_zhzF>span:nth-child(6)").text(forecast.fengxiang);
                    $("#nowTime_zhzF>span:nth-child(7)").text(fengli);
                    $("#nowTime_zhzF>span:nth-child(8)").text(forecast.type);

                }
            })
        }
            })
                 
        }
}
</script>

<style lang="less">
        @import '../css/main.css';
        @import '../css/history.css';
        body {
                background-color: #0b1956;
        }
        .zhzf{
            #yearDetail,#zhifashixiangDetail{
	width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    z-index: 1000;
}
.approval{
	padding:20px 40px;
	height:480px;
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
.main .title{
	font-size: 22px;	
	text-indent:30px;
	border-bottom: 1px solid #1C318A;
	line-height: 60px;
}

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
	top: 0;
	left: 1351px;
	width: 520px;
	height: 430px;
}

#hv-wrapper .box5 {
	top: 448px;
	left: 1351px;
	width: 520px;
	height: 432px;
}

#hv-wrapper .box6 {
	top: 600px;
	left: 1351px;
	width: 520px;
	height: 280px;
}
#hv-wrapper .box7 {
	top: 0;
	left: 540px;
	width: 790px;
	height:530px;
	background: #999999;
	border-radius:10px;
	
}
#hv-wrapper .box8 {
	top: 550px;
	left: 540px;
	width: 790px;
	height: 330px;
}

#hv-wrapper .box9 {
	top: 0;
	left: 0;
	width: 520px;
	height: 264px;
}
#hv-wrapper .box10 {
	top: 282px;
	left: 0;
	width: 520px;
	height: 280px;
}
#hv-wrapper .box11 {
	top: 580px;
	left: 0;
	width: 520px;
	height: 300px;
}
#hv-wrapper .box12 {
	top: 580px;
	left: 0;
	width: 520px;
	height: 300px;
}
#hv-wrapper .box13 {
	top: 0;
	left: 1351px;
	width: 520px;
	height: 264px;
}

#hv-wrapper .box14 {
	top: 282px;
	left: 1351px;
	width: 520px;
	height: 280px;
}
#hv-wrapper .box15 {
	top: 580px;
	left: 1351px;
	width: 520px;
	height: 300px;
}


#hv-wrapper .middle {
	top: 0;
	left: 580px;
	width: 750px;
	height: 100%;
	position: absolute;
	border-radius: 16px;
}

.mainTitle {
	line-height: 70px;
	font-size: 24px;
	color: #00f5fe;
	box-sizing: border-box;
	text-align: center;
	letter-spacing: 1px;
}
.mainTitle span{
	font-size: 24px;
	color: #00f5fe;
	box-sizing: border-box;
	text-align: center;
	letter-spacing: 1px;
}

.title_color {
	color: #fbc166;
	font-size: 24px;
	font-weight: bold;
	display: inline-block;
	width: 36px;
	height: 46px;
	background-color: #7323aa;
	line-height: 46px;
	border-radius: 10px;
	margin-right: 10px;
}

.conditionBox {
	width: 100%;
	box-sizing: border-box;
	overflow: hidden;
}

.conditionBox p {
	text-align: center
}
#aj_ul_2 li{
	height: 42px;
	padding: 10px 0;
	font-size: 18px;

}
#aj_ul_2 li:hover{
	background: #1c318a;
	cursor: pointer;
}


#a3_ul li {
	line-height: 70px;
	font-size: 24px;
}

#h2_ul_2 li {
	line-height: 53px;
	font-size: 24px;
}

.a3_div_head {
	color: #00f5fe;
	text-align: center;
	display: inline-block;
	width: 24%;
}

.a3_div_head2first {
	color: #00f5fe;
	text-align: center;
	display: inline-block;
	width: 30%;
}

.a3_div_head2 {
	color: #00f5fe;
	text-align: center;
	display: inline-block;
	width: 22%;
}

#a3_ul_2 li {
	line-height: 70px;
	font-size: 24px;
}

.a3_div_content {
	color: #ffffff;
	text-align: center;
	display: inline-block;
	width: 24%;
}

.a3_div_content2first {
	color: #ffffff;
	text-align: center;
	display: inline-block;
	width: 30%;
	float: left;
}

.a3_div_content2 {
	color: #ffffff;
	text-align: center;
	display: inline-block;
	width: 24%;
	line-height: 42px;
}
.content_div{
	overflow: hidden;
	height: 320px;
}


#a33_ul li {
	line-height: 36px;
	font-size: 24px;
	position: relative;
	height: 36px;
}
#a33_ul_2 li {
	line-height: 42px;
	position: relative;
	height: 42px;
}
#a33_ul_2 li:hover{
	background: #1C318A;
	cursor: pointer;
}
.a33_div_head_one{
	color: #00f5fe;
	text-align: center;
	width: 20%;
	position: absolute;
}
.a33_div_head_two{
	color: #00f5fe;
	text-align: center;
	width: 60%;
	position: absolute;
	left:20%;
}
.a33_div_head {
	color: #00f5fe;
	text-align: center;
	width: 20%;
	position: absolute;
	left:80%;
}

.a33_div_content {
	color: #ffffff;
	text-align: center;
	position: absolute;
	width: 20%;
	left:80%;
}
.a33_div_content_one{
	color: #ffffff;
	text-align: center;
	position: absolute;
	width: 20%;
	
}
.a33_div_content_two{
	color: #ffffff;
	text-align: center;
	position: absolute;
	width: 60%;
	left:20%;
}

.box_sjjs{
	width: 92%;
	margin: 0 auto;
	display: flex;
	justify-content : space-around;

}
.box_sjjs div{
	width: 35%;
	height:100px;/*
	border: 1px solid #0A2052; */
}
.box_sjjs div p:first-child{
	font-size: 18px;
	padding-top: 15px;
}
.box_sjjs div p:nth-child(2){
	font-size: 23px;
	padding-top: 15px;
	/* letter-spacing: 10px; */
	position: relative;
	z-index: 9;
}
.box_sjjs div:first-child p:nth-child(2){
	letter-spacing: 12.5px;
	padding-left: 10.5px;
}
.box_sjjs div:nth-child(2) p:nth-child(2){
	letter-spacing: 12.5px;
	/*padding-left: 10.5px;*/
}
.box_sjjs div:nth-child(3) p:nth-child(2){
	letter-spacing: 12.5px;
	padding-left: 13.5px;
}
.box_sjjs div img {
	position: relative;
	z-index: 2;
	top: -33px;
}
.box_sjjs div:first-child img {
	left: 24px;
}
.box_sjjs div:nth-child(2) img {
	left: 8px;
}
.box_sjjs div:nth-child(3) img {
	left: 8px;
}
.title_color{
	color: #fbc166;font-size: 24px;font-weight: bold;display: inline-block;
	width: 36px;
	height: 46px;
	background-color: #7323aa;
	line-height: 46px;
	border-radius: 10px;
}

        }
        .tdt-control-copyright {
                display: none
        }
</style>
