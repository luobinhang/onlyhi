$(function () {
   begin("./../index.html");
    //获取课程名称导航
    $.ajax({
        type: 'get',
        url: CRMAPI + '/WebSiteCoursePrice/getAllCoursePriceType', //正式环境
        dataType: "json",
        timeout:5000,
        success: function (data) {
            var data = data.data;
            var a = '';
            var b = '';
            $(data.coursePriceTypes).each(function (i, v) {
                a +="<li><a>" + v + "</a></li>"
            })
            $("#myTab").append(a);
            $("#myTab li").eq(0).addClass('active');
            $(data.coursePriceVos).each(function (i, v) {
                b += '<div class="systemList">' +
                    '<div class="discount" style="width:94px;height: 98px;background: url(' + 'buy_images/personal/title1.png' + ') no-repeat center">' + v.specialDiscount +'<br>折</div>' +
                    '<p class="F20"><span class="period">'+ v.length +'</span><span class="period0 none">'+ v.length +'</span></p>' +
                    '<p class="F16">现价：<span class="new F30 color_red">' + v.nowPrice + '</span><span class="new0 none">' + v.nowPrice + '</span> 元</p>' +
                    '<p class="F14 UnLine">原价：<span class="old">' + v.originalPrice + '</span><span class="old0 none"> ' + v.originalPrice + ' </span>元</p>' +
                    '<p class="zhengsong">' +
                    '<span class="give">赠送</span>' +
                    '<span>' +
                    '<i>' + v.giveServe + '</i>' +
                    '</span>' +
                    '</p>' +
                    '<hr>' +
                    '<div class="shopping"><a data-nowPrice=' + v.nowPrice + ' data-specialPrice= ' + v.specialPrice + ' data-course=' + v.baiduCourseCode + ' data-coursePriceId=' + v.coursePriceId + ' data-taobao ="javascript:;" href="javascript:;">立即购买</a></div>' +
                    '</div>'
            })
            $('#myTabContent').append(b);
        },
        complete: function () { // 请求完成时会调用
        },
        error: function (data) {
            alert(data.msg)
        }
    });

    //点击课程名称导航获取列表
    $('body').on('click','#myTab li a',function () {
        var type = $(this).html();
        $(this).parent().addClass("active")
        $(this).parent().siblings().removeClass("active")
        console.log(1);
        $('#myTabContent').html('');
        $.ajax({
            type: 'get',
            url: CRMAPI + '/WebSiteCoursePrice/getAllCoursePrice',
            dataType: "json",
            data:{type:type},
            timeout:5000,
            success: function (data) {
                console.log(data);
                var data = data.data;
                var b = ''

                $(data).each(function (i, v) {
                    b += '<div class="systemList">' +
                        '<div class="discount" style="width:94px;height: 98px;background: url(' + 'buy_images/personal/title1.png' + ') no-repeat center">' + v.specialDiscount +'<br>折</div>' +
                        '<p class="F20"><span class="period">'+ v.length +'</span><span class="period0 none">'+ v.length +'</span></p>' +
                        '<p class="F16">现价：<span class="new F30 color_red">' + v.nowPrice + '</span><span class="new0 none">' + v.nowPrice + '</span> 元</p>' +
                        '<p class="F14 UnLine">原价：<span class="old">' + v.originalPrice + '</span><span class="old0 none"> ' + v.originalPrice + ' </span>元</p>' +
                        '<p class="zhengsong">' +
                        '<span class="give">赠送</span>' +
                        '<span>' +
                        '<i>' + v.giveServe + '</i>' +
                        '</span>' +
                        '</p>' +
                        '<hr>' +
                        '<div class="shopping"><a data-nowPrice=' + v.nowPrice + ' data-specialPrice= ' + v.specialPrice + ' data-course=' + v.baiduCourseCode + ' data-coursePriceId=' + v.coursePriceId + ' data-taobao ="javascript:;" href="javascript:;">立即购买</a></div>' +
                        '</div>'
                })
                $('#myTabContent').append(b);
            },
            complete: function () { // 请求完成时会调用

            },
            error: function () {
            }
        });
    })
    //点击课程名称导航获取列表

    //点击课程弹出确认订单
    $("body").on("click",'.shopping a',function () {
    var $this = $(this);
    var $payment = $("#myTab li"), paymethod;
    $payment.each(function (index, item) {
        var $item = $(item); //
        if ($item.hasClass("active")) {
            sessionStorage.setItem("s_grade",$item.find("a").html());//课程名称
        }
    });
    privilege($this);
    $("#clone").on("click",function () {
        $("#overlay1,#overlay").hide();
        $("#overlay1 .Discount input").val("");
        $(".giveCourse").html("");
    });
    $("#overlay1 a").on("click",function () {
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
                    $("#overlay1 .Discount input").val("");
                    $("#overlay1,#overlay").hide();
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









    function privilege($this) {
        var s_keshi = parseInt($this.parent().siblings("p").find(".period").html());
        sessionStorage.setItem("s_keshi",s_keshi)//课程时长
        sessionStorage.setItem("s_taobao",$this.data("taobao"));//淘宝链接
        sessionStorage.setItem("courseId",$this.data("course"));//课程百度id
        sessionStorage.setItem("coursePriceId",$this.data("coursepriceid"));//课程编号
        $("#overlay1,#overlay").show();
        $(".Discount input").focus();

        $("#subtotalTotal").html($this.data("nowprice"));
        $("#subtotalFavorable").html($this.data("specialprice"));

        var discount = 0,discountText;
        var giveCourse = "";
        sessionStorage.setItem("s_new",$this.data("nowprice"));//应付款价格
        $(".packet input,.Discount input").keyup(function () {
            discountText = $(".Discount input").val();
                $.ajax({
                    type: 'get',
                    url: CRMAPI + '/WebSiteCoursePrice/getPayMoney',
                    dataType: "json",
                    data:{
                        coursePriceId:sessionStorage.getItem("coursePriceId"),
                        promotionCode:discountText,
                    },
                    timeout:5000,
                    success: function (data) {
                        if(data.code == 100){
                            var data = data.data;
                            console.log(data);
                            console.log(data.accountPayableMoney);
                            $("#subtotalTotal").html(data.accountPayableMoney);
                            $("#subtotalFavorable").html(data.specialTotalPrice);
                            sessionStorage.setItem("s_new",data.accountPayableMoney);//应付款价格
                        } else {
                            console.log(data.msg);
                        }
                    },
                    error:function (data) {
                        console.log(data.msg);
                    }
                });
        })
    }


})



