
$(".Myhiketang").unbind("click");


// 涨价公告
$(function () {

})

// 点击banner跳转到活动页Start
// $(".three1").hover(function () {
//     $(this).css("cursor","pointer");
//     $(this).on("click",function () {
//         location.href="../January.html";
//     });
// })
// 点击banner跳转到活动页End
//返回顶部start
$(function () {
    $(function () {
        $(window).bind('scroll resize', function () {
            $(".backToTop").goToTop({pageHeightJg: 156});
        });
        $(".backToTop").goToTop();
    });
});
//返回顶部end

$(".userName_name").html($.cookie("userName_name"));

//时间定时
function fresh(data) {
    // var date = sessionStorage.getItem("time_expire");
    var date = new Date(data);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var data_time = year + '-' + month + '-' + day + " " + hour + ':' + minute + ':' + second;

    var endtime = new Date(data_time);
    var nowtime = new Date();
    var leftsecond = parseInt((endtime.getTime() - nowtime.getTime()) / 1000);
    d = parseInt(leftsecond / 3600 / 24);
    h = parseInt((leftsecond / 3600) % 24);
    m = parseInt((leftsecond / 60) % 60);
    s = parseInt(leftsecond % 60);
    var td = d * 24 + h;
    $("#Hour").html(td);
    $("#minute").html(m);
    $("#second").html(s);
    if (leftsecond <= 0) {
        $("#Hour").html("00");
        $("#emM").html("00");
        $("#second").html("00");
        clearInterval(sh);


    }
}
//时间定时end

//判断有无用户名和密码Start
function begin(url) {
    if (!$.cookie("userName") || !$.cookie("passWord")) {
        location.href = url;
    } else {
    }
}
//判断有无用户名和密码End


//格式化金额start
function toThousands(num) {
    var result = [], counter = 0;
    num = (num || 0).toString().split('');
    for (var i = num.length - 1; i >= 0; i--) {
        counter++;
        result.unshift(num[i]);
        if (!(counter % 3) && i != 0) {
            result.unshift(',');
        }
    }
    return result.join('');
}
//格式化金额end
//淘宝链接Start



//优惠信息Start

Date.prototype.format =function(format)
{
    var o = {
        "M+" : this.getMonth()+1, //month
        "d+" : this.getDate(), //day
        "h+" : this.getHours(), //hour
        "m+" : this.getMinutes(), //minute
        "s+" : this.getSeconds(), //second
        "q+" : Math.floor((this.getMonth()+3)/3), //quarter
        "S" : this.getMilliseconds() //millisecond
    }
    if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
        (this.getFullYear()+"").substr(4- RegExp.$1.length));
    for(var k in o)if(new RegExp("("+ k +")").test(format))
        format = format.replace(RegExp.$1,
            RegExp.$1.length==1? o[k] :
                ("00"+ o[k]).substr((""+ o[k]).length));
    return format;
}
//格式化时间End




