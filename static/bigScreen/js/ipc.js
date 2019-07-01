var pageIndex = 0; //页面索引初始值
var pageSize = 10; //每页显示条数初始化，修改显示条数，修改这里即可
var topicId='';
var deptCode='';

//获取url中的参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}

function NowTime(){
    //获取年月日
    var time=new Date();
    var year=time.getFullYear();
    var month=time.getMonth();
    var day=time.getDate();
    var xingqi=time.getDay();         //获取当前星期X(0-6,0代表星期天)

    //获取时分秒
    var h=time.getHours();
    var m=time.getMinutes();
    var s=time.getSeconds();

    //检查是否小于10
    h=check(h);
    m=check(m);
    s=check(s);
    y=year;
    month=check(month+1);
    d=check(day)
    $("#nowTime>p:first-child").text(y+"年"+month+"月"+d+"日");
    $("#nowTime>p:nth-child(2)").text(h+" : "+m+" : "+s);
    if(xingqi == 0){ $("#nowTime>p:nth-child(3)").text("星期日"); }
    else if(xingqi == 1){ $("#nowTime>p:nth-child(3)").text("星期一"); }
    else if(xingqi == 2){ $("#nowTime>p:nth-child(3)").text("星期二"); }
    else if(xingqi == 3){ $("#nowTime>p:nth-child(3)").text("星期三"); }
    else if(xingqi == 4){ $("#nowTime>p:nth-child(3)").text("星期四"); }
    else if(xingqi == 5){ $("#nowTime>p:nth-child(3)").text("星期五"); }
    else if(xingqi == 6){ $("#nowTime>p:nth-child(3)").text("星期六"); }
}
//时间数字小于10，则在之前加个“0”补位。
function check(i){
    //方法一，用三元运算符
    var num;
    i<10?num="0"+i:num=i;
    return num;
}