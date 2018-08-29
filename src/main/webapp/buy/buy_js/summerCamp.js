$(function () {

    $(".Myhiketang").unbind("click");

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
    var taobaoArr = {
        primary: "https://item.taobao.com/item.htm?spm=a230r.1.14.51.QGiY2Q&id=541684206694&ns=1&abbucket=11#detail",
        middle_one: "https://item.taobao.com/item.htm?spm=a230r.1.14.56.QGiY2Q&id=541668444123&ns=1&abbucket=11#detail",
        middle_two: "https://item.taobao.com/item.htm?spm=a230r.1.14.11.QGiY2Q&id=541668208827&ns=1&abbucket=11#detail",
        middle_three: "https://item.taobao.com/item.htm?spm=a230r.1.14.61.QGiY2Q&id=541696547012&ns=1&abbucket=11#detail",
        senior_one: "https://item.taobao.com/item.htm?spm=a230r.1.14.66.QGiY2Q&id=541669172906&ns=1&abbucket=11#detail",
        senior_two: "https://item.taobao.com/item.htm?spm=a230r.1.14.16.QGiY2Q&id=541669496279&ns=1&abbucket=11#detail",
        senior_three: "https://item.taobao.com/item.htm?spm=a230r.1.14.71.QGiY2Q&id=541690650586&ns=1&abbucket=11#detail",
        north: "https://item.taobao.com/item.htm?spm=a230r.1.14.76.QGiY2Q&id=541682221705&ns=1&abbucket=11#detail"
    }
//淘宝链接End







//价格数据Start
    var SummerObj = {
        // primary: [
        //     {courseid:"KAHKTZ3101010",lend:"288",zaoniao:'956',zaoniao2:'1810',zaoniao3:'2691',coupon:"2668",Scholarship:"1889",Give:"金牌班主任服务",period: 20,  old:  3980,discount:"12", new: 3980,},
        // ],
        middle_one:  [
            {courseid:"KAHKTZ3101015",lend:"288",zaoniao:'982',zaoniao2:'1810',zaoniao3:'2691',coupon:"2668",Scholarship:"1889",Give:"金牌班主任服务",period: 20, old:   3980,discount:"12", new:  3980,},
        ],
        middle_two: [
            {courseid:"KAHKTZ3101020",lend:"288",zaoniao:'1022',zaoniao2:'1876',zaoniao3:'2790',coupon:"2761",Scholarship:"1889",Give:"金牌班主任服务",period: 19, old:   3980,discount:"12", new:   3980,},
        ],
        middle_three: [
            {courseid:"KAHKTZ3101025",lend:"288",zaoniao:'1160',zaoniao2:'2024',zaoniao3:'3010',coupon:"2933",Scholarship:"2289 ",Give:"金牌班主任服务",period: 17, old:  3980,discount:"12",new: 3980,},
        ],
        senior_one: [
            {courseid:"KAHKTZ3101030",lend:"288",zaoniao:'1112',zaoniao2:'2047',zaoniao3:'3045',coupon:"3026",Scholarship:"2289 ",Give:"金牌班主任服务",period: 18, old: 3980,discount:"12", new: 3980,},
        ],
        senior_two: [
            {courseid:"KAHKTZ3101035",lend:"288",zaoniao:'1224',zaoniao2:'2254',zaoniao3:'3352',coupon:"3276",Scholarship:"2289 ",Give:"金牌班主任服务",period: 16, old: 3980,discount:"12", new: 3980,},
        ],
        senior_three: [
            {courseid:"KAHKTZ3101040",lend:"288",zaoniao:'1458',zaoniao2:'2547',zaoniao3:'3787',coupon:"3713",Scholarship:"2889 ",Give:"金牌班主任服务",period: 14, old:  3980,discount:"12", new:  3980,},
        ],
        // north: [
        //     {courseid:"3106046",lend:"288",coupon:"3962",Scholarship:"0",Give:"金牌班主任服务",period: 120, old: 30480,discount:"8 ", new: 30480,},
        //     {courseid:"3106046",lend:"288",coupon:"5262",Scholarship:"0",Give:"金牌班主任服务",period: 160, old: 40480,discount:"16", new: 40480,},
        //     {courseid:"3106046",lend:"288",coupon:"6578",Scholarship:"0",Give:"金牌班主任服务",period: 200, old: 50600,discount:"20", new: 50600,},
        //     {courseid:"3106046",lend:"288",coupon:"7800",Scholarship:"0",Give:"金牌班主任服务",period: 240, old: 60000,discount:"24", new: 60000,},
        //     {courseid:"3106046",lend:"288",coupon:"10317",Scholarship:"0",Give:"金牌班主任服务",period: 320, old: 79360,discount:"28", new: 79360,},
        //     {courseid:"3106046",lend:"288",coupon:"10317",Scholarship:"0",Give:"金牌班主任服务",period: 400, old: 79360,discount:"28", new: 79360,},
        //     {courseid:"3106046",lend:"288",coupon:"17763",Scholarship:"0",Give:"金牌班主任服务",period: 560, old: 136640,discount:"38", new:136640,},
        // ],
    }
//价格数据End

//优惠信息Start
    function privilege($this) {
        sessionStorage.setItem("s_keshi",$this.parent().siblings("p").find(".period").html())//课程时长
        sessionStorage.setItem("s_keshi1",$this.parent().siblings(".keshi").text())//课程时长
        sessionStorage.setItem("s_new",$this.parent().siblings("p").find(".new").html());//应付款价格
        sessionStorage.setItem("s_old",$this.parent().siblings("p").find(".old").html());//实付款价格
        sessionStorage.setItem("s_taobao",$this.data("taobao"));//淘宝链接
        sessionStorage.setItem("courseId",$this.data("course"));//课程id
        sessionStorage.setItem("scholarship",$this.data("scholarship"));//优惠价
        sessionStorage.setItem("zaoniao",$this.data("zaoniao"));//活动优惠价
        sessionStorage.setItem("zaoniao2",$this.data("zaoniao2"));//活动优惠价
        sessionStorage.setItem("zaoniao3",$this.data("zaoniao3"));//活动优惠价
        sessionStorage.setItem("lend",$this.data("lend"));//288活动优惠价
        $("#overlay1,#overlay").show();
        packetText = $(".Discount input").focus();
        $("#subtotalTotal").html(sessionStorage.getItem("s_new"));
        var oldNew = sessionStorage.getItem("s_old")-sessionStorage.getItem("s_new");
        $("#subtotalFavorable").html(oldNew);
        var discount = 0,discountText;
        $(".packet input,.Discount input").keyup(function () {
            // packetText = $(".packet input").val();
            discountText = $(".Discount input").val();
            switch(discountText){
                case "早鸟全款":
                    discount = parseInt(sessionStorage.getItem("zaoniao"));
                    break;
                // case "早鸟全款二人团":
                //     discount = parseInt(sessionStorage.getItem("zaoniao2"));
                //     break;
                // case "早鸟全款三人团":
                //     discount = parseInt(sessionStorage.getItem("zaoniao3"));
                //     break;
                default:
                    discount = 0;
            }
            $("#subtotalFavorable").html((discount+oldNew));
            $("#subtotalTotal").html(sessionStorage.getItem("s_new")-(discount));
        })
    }

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











    begin("./../index.html");

    template.config("escape", false);
    $("#myTabContent").html(template('Tprimary', SummerObj));
    // console.log(SummerObj);
    $(".shopping a").on("click",function () {
        var $this = $(this);
      $("#overlay1,#overlay").show();
        var $payment = $("#myTab li"), paymethod;
        $payment.each(function (index, item) {
            var $item = $(item); //
            if ($item.hasClass("active")) {
                sessionStorage.setItem("s_grade",$item.find("a").html()+"暑秋联报");//课程名称
            }
        });
        privilege($this);
        $("#clone").on("click",function () {
            $("#overlay1,#overlay").hide();
            $("#overlay1 .Discount input").val("");
        });
        $("#overlay1 a").on("click",function () {
            sessionStorage.setItem("s_new",$("#subtotalTotal").html());//应付款价格
            $("#overlay1 .Discount input").val("");
            $("#overlay1,#overlay").hide();
            $.ajax({
                url: CMSAPI + '/order/addOrder',
                data: {
                    courseName: sessionStorage.getItem("s_grade")+"课程"+sessionStorage.getItem("s_keshi")+"小时课程包",//课程名称
                    courseId: sessionStorage.getItem("courseId"),//课程Id
                    classHour: sessionStorage.getItem("s_keshi"),//课程时长
                    payMethod: paymethod,
                    stuName: "",//学生姓名
                    parentName:"",//家长姓名
                    relation: "",//关系
                    phone: "",//联系方式
                    province: "",//省
                    city: "",//市
                    district: "",//区
                    town: "",//镇
                    address: "",//详细地址
                    totalPrice:sessionStorage.getItem("s_new"),//合计总价格
                    password: $.cookie("passWord"),//密码
                    uuid: $.cookie("userName")//账号
                },
                timeout:5000,
                type: "post",
                dataType: "json",
                success: function (data) {
                    if(data.code == 100){
                        sessionStorage.setItem("ordersToken",data.data);
                        location.href="power/payment.html";
                        // sessionStorage.setItem("$orderInfoNo",data.data);
                    }else {
                        alert("订单提交失败");
                    }
                },
                complete: function () {
                },
                error: function () {
                }
            })
        })
    })
})



