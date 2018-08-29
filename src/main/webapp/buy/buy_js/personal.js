$(function () {
    var $that;
    begin("../index.html");
    // order();
    if(sessionStorage.getItem("pay")==1 || sessionStorage.getItem("pay")==3){
        $("#order #prepaidOrder a").trigger("click",demand($("#prepaidOrder")));
        window.location.href="#prepaidOrder";
    }else if(sessionStorage.getItem("pay")==2){
        $("#order #waitOrder a").trigger("click",demand($("#waitOrder")));
        window.location.href="#waitOrder";
    } else {
        $("#order #allOrder a").trigger("click",demand($("#allOrder")));
        window.location.href="#";
    }

//所有订单订单详情Start
    $("#order li").bind("click", function () {
        $that = $(this);
        window.location.href="#"+ $that.attr("id");
        // $curpage = 1;
        demand($that);
    });
    $("body").on("click",".split",function () {
        $that = $(this);
        // $curpage = 1;
        var ClassList = $that.parent().parent(".orderNo");
        // console.log(ClassList);
        demand($that,1);
        return false
    })
    //取消订单Start
    $("body").on("click", ".unpay", function () {
        var $orderInfoNo = $(this).data("orderinfono"), $that,
            $this = $(this);
        //查询
        $.ajax({
            url: CRMAPI + '/ordernew/checkOrderIspay',
            data: {
                orderInfoNo: $(this).data("orderinfono"),
                password: $.cookie("passWord"),//密码
                uuid: $.cookie("userName")//账号
            },
            timeout:5000,
            type: "post",
            dataType: "json",
            async: false,
            success: function (data) {
                if (data.code == 100) {
                    alert("该订单已"+data.data);
                    $this.parent().html("已支付");
                }else {
                    $.ajax({
                        url: CRMAPI + '/ordernew/cancelOrdersInfo',
                        data: {
                            ordersToken: $orderInfoNo,
                            password: $.cookie("passWord"),//密码
                            uuid: $.cookie("userName")//账号
                        },
                        type: "post",
                        dataType: "json",
                        beforeSend: function () {
                            var a = confirm("确定取消此订单吗？");
                            if (a !== true) {
                                return false;
                            }
                        },
                        success: function (data) {
                            if (data.code == 100) {
                                $this.parent().html("已取消");
                            }
                        },
                        complete: function (data) {
                        },
                        error: function () {
                        }
                    })
                }
            },
            complete: function () {
            },
            error: function () {
            }
        })
    });
    //取消订单End
    //订单支付Start
    $("body").on("click", ".pay", function () {
        var $this = $(this);
            $.ajax({
                url: CRMAPI + '/ordernew/checkOrderIspay',
                data: {
                    orderInfoNo: $(this).data("orderinfono"),
                    password: $.cookie("passWord"),//密码
                    uuid: $.cookie("userName")//账号
                },
                timeout:5000,
                type: "post",
                dataType: "json",
                async: false,
                success: function (data) {
                    if (data.code == 101) {
                        sessionStorage.setItem("ordersToken",$this.data("orderinfono"));
                        var grade = $this.parent().siblings().find(".grade").html();
                        var grade = $this.parent().siblings().find(".grade").html();
                        sessionStorage.setItem("s_new", $this.parent().siblings().find(".new").html());
                        switch (grade) {
                            case "小学":
                                sessionStorage.setItem("s_taobao", taobaoArr.primary);//课程名称
                                sessionStorage.setItem("s_grade", grade);//应付款价格
                                break;
                            case "初一":
                                sessionStorage.setItem("s_taobao", taobaoArr.middle_one);//课程名称
                                sessionStorage.setItem("s_grade", grade);//应付款价格
                                break;
                            case "初二":
                                sessionStorage.setItem("s_taobao", taobaoArr.middle_two);//课程名称
                                sessionStorage.setItem("s_grade", grade);//应付款价格
                                break;
                            case "初三":
                                sessionStorage.setItem("s_taobao", taobaoArr.middle_three);//课程名称
                                sessionStorage.setItem("s_grade", grade);//应付款价格
                                break;
                            case "高一":
                                sessionStorage.setItem("s_taobao", taobaoArr.senior_one);//课程名称
                                sessionStorage.setItem("s_grade", grade);//应付款价格
                                break;
                            case "高二":
                                sessionStorage.setItem("s_taobao", taobaoArr.senior_two);//课程名称
                                sessionStorage.setItem("s_grade", grade);//应付款价格
                                break;
                            case "高三":
                                sessionStorage.setItem("s_taobao", taobaoArr.senior_three);//课程名称
                                sessionStorage.setItem("s_grade", grade);//应付款价格
                                break;
                            case "清北":
                                sessionStorage.setItem("s_taobao", taobaoArr.north);//课程名称
                                sessionStorage.setItem("s_grade", grade);//应付款价格
                                break;
                            default:
                                sessionStorage.setItem("s_taobao", "");//课程名称
                                sessionStorage.setItem("s_grade", grade);//应付款价格
                        }
                        sessionStorage.setItem("s_new", $this.parent().siblings().find(".new").html());//应付款价格
                        sessionStorage.setItem("s_keshi", $this.parent().siblings().find(".hour").html());//课时
                        location.href = "power/payment.html"
                    }else if (data.code == 102){
                        alert(data.data);
                        $this.parent().html("已关闭");
                    }else if (data.code == 100){
                        alert(data.data);
                        $this.parent().html("已支付");
                    }
                },
                complete: function () {
                },
                error: function () {
                }
            })
    })
    //订单支付End
    //查询数据成功数据处理Start
    function order(data) {
        $.each(data.list, function (i, v) {
            if (v.checkTime) {
                v.checkTime = new Date(v.checkTime).format('yyyy-MM-dd hh:mm:ss');
            }
            if (v.payTime) {
                v.payTime = new Date(v.payTime).format('yyyy-MM-dd hh:mm:ss');
            }
            if(v.isSplit == 1){
                v.split ="订单已拆分";
            }
            if (v.status == 1 && v.isPay == 0) {
                //待支付
                v.F = 1;
                v.pay = "支付";
                v.undo = "取消支付";
            } else if (v.status == 1 && v.isPay == 1) {
                //已支付.
                //  if(v.payMethod == "wx_pub_qr")
                v.payMethod = "已支付";
            } else if (v.status == 0) {
                //已关闭
                v.payMethod = "已关闭"
            }

            template.config("escape", false);
            $("#OrderL").html(template("Torder", data));
        })
    }
    //查询数据成功数据处理End
    //查询已拆分订单数据处理
    function splitOrder(data) {
        $.each(data.list, function (i, v) {
            if(v.payChannel ==4){
                v.payMethod ="已提交线下支付"
            }else if (v.splitTime) {
                v.splitTime = new Date(v.splitTime).format('yyyy-MM-dd hh:mm:ss');
            }else if (v.payTime) {
                v.payTime = new Date(v.payTime).format('yyyy-MM-dd hh:mm:ss');
            }
            if(v.isSplit == 1){
                v.split ="订单已拆分"
            }
            if (v.status == 1 && v.isPay == 0 &&v.payChannel ==3) {
                //待支付
                v.F = 1;
                v.pay = "支付";
                v.undo = "取消支付";
            } else if (v.status == 1 && v.isPay == 1) {
                //已支付.
                //  if(v.payMethod == "wx_pub_qr")
                v.payMethod = "已支付";
            } else if (v.status == 0) {
                //已关闭
                v.payMethod = "已关闭";
            }
        });
        $that.parent().parent().after(template("Torder", data));
    }
    //查询已拆分订单数据处理
    // 点击显示隐藏子订单
    $("body").on("click",".split0",function () {
        var thisClass = $(this).data("orderno");
        $("."+thisClass).toggleClass("toggle");
        $("."+thisClass).next().toggleClass("toggle");
        //
        // $(this).parent().parent().next().next().hasClass(".split-list");


    })
    // 点击显示隐藏子订单
    //订单详情Start
    function demand(that,that0) {
        if(!that0){
            $("tbody").html("");
        }else if($that.parent().parent().next().next().hasClass("split-list")){
            return false;
        }
        $("#OrderL").show().css("visibility","visible");
        var $status = that.data('status');
        var $payStatus = that.data('paystatu');
        var $orderNo = that.data("orderno");
        // console.log($orderNo);
        $.ajax({
            url: CRMAPI + '/ordernew/getOrdersInfoList',
            data: {
                curpage: 1,
                pageSize: 100,
                status: $status,
                isPay: $payStatus,
                orderNo:$orderNo,
                payChannel: 2,
                password: $.cookie("passWord"),//密码
                uuid: $.cookie("userName")//账号
            },
            timeout:5000,
            type: "post",
            dataType: "text",
            success: function (data) {
                data = JSON.parse(data).data;
                $(data.list).each(function (i,v) {
                    v.ClassList = $orderNo;
                })
                // console.log(data);
                sessionStorage.setItem('totalPage', data.totalPage);
                if(that.data("orderno")){
                    that.addClass("split0")
                    splitOrder(data);
                    // console.log(data);
                }else {
                    order(data);
                }
            },
            complete: function (data) {
                // $("#orderList").html(template('Torder', data));
            },
            error: function () {
            }
        })
    }
    //订单详情End
});