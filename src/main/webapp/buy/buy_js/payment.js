$(function () {

    var paymethod_this, sh;
    $("#s_grade").html(sessionStorage.getItem("s_grade"));
    if(sessionStorage.getItem("s_keshi1")){
        $("#s_keshi").html(sessionStorage.getItem("s_keshi1"));

    }
    else {
        $("#s_keshi").html(sessionStorage.getItem("s_keshi"));

    }
    //判断课时包小于120课时，显示“* 小于120课时课程包不支持分期”字样。并隐藏“百度有钱花”和“爱海米分期”按钮。
    if($("#s_keshi").html()<120){
        $("#baiduMoney,#haiMi").hide();
        $("#lessThan120").show();
    }
    else{
        $("#baiduMoney,#haiMi").show();
        $("#lessThan120").hide();
    }

    $("#taobao").attr("href", sessionStorage.getItem("s_taobao"));
    $("#s_new").html(toThousands(sessionStorage.getItem("s_new"))).css("color", "#f40009");

    //银联支付暂不支持Start
    // $("#payment .unionpay").remove();
    //银联支付暂不支持End
    //微信或支付宝支付方法Start
    function weixin() {
        $("#overlay,#weixin").show();
        $("<img class='weixin_img' src=" + sessionStorage.getItem("imgUrl") + ">").prependTo($("#weixin")).show();

        $(".next1").attr("disabled", false);
    }

    function alipay() {
        $("#tool,#overlay").show();
        $("#AliPay_trigger").click();
        $(".next1").attr("disabled", false);
    }

//微信或支付宝支付方法End
//查询支付完成Start
    $(".complete,#complete").on("click", function () {
        $.ajax({
            url: CMSAPI + '/order/checkOrderIspay',
            data: {
                orderInfoNo: sessionStorage.getItem("ordersToken"),
                password: $.cookie("passWord"),//密码
                uuid: $.cookie("userName")//账号
            },
            timeout: 5000,
            type: "post",
            dataType: "json",
            async: false,
            success: function (data) {
                if (data.code == 100) {
                    location.href = "./finished.html";
                    sessionStorage.setItem("pay", 1);
                } else {
                    location.href = "./finished.html";
                    sessionStorage.setItem("pay", 2);
                }
            },
            complete: function () {
            },
            error: function () {
            }
        })
    })

//查询支付完成End
//点击选中支付方式start
    $(function () {
        $("#close").hover(function () {
            $(this).css("cursor", "pointer").on("click", function () {
                $("#tool,#overlay").hide();
                // window.location.href="../personal.html";
            })
        })
        $(".close").hover(function () {
            $(this).css("cursor", "pointer").on("click", function () {
                $("#weixin,#overlay").hide();
            })
        })
        $("#close1").hover(function () {
            $(this).css("cursor", "pointer").on("click", function () {
                $("#BaiduUmoney,#overlay").hide();
                // window.location.href="../personal.html";
            })
        })
        $("#close2").hover(function () {
            $(this).css("cursor", "pointer").on("click", function () {
                $("#MianXi,#overlay").hide();
                // window.location.href="../personal.html";
            })
        })
        $("#payment li").hover(function () {
            $(this).css("cursor", "pointer");
            $(this).on("click", function () {
                $(this).siblings("li").removeClass("pick").css("color", "#BBBBBB");
                $(this).addClass("pick").css("color", "#FFF");
                //现下转账
                if ($("#payment #offline").hasClass("pick")) {
                    console.log(1);
                    $(".paymentBottom").css("display", "block");
                    $(".next1").css("display", "none");
                }
                //ICBC支付
                else if ($("#payment #ICBC_E").hasClass("pick")) {
                    $("#ICBCPayMethod").show();
                    $(".next1").css("display", "none");
                }
                else {
                    $("#ICBCPayMethod").hide();
                    $(".paymentBottom").css("display", "none");
                    $(".next1").css("display", "block");
                }
            })
        })
        $(".closeICBC").click(function(){
            $("#ICBCPayMethod").hide();
        });
        //点击选中支付方式end
        //点击支付订单start
        $(function () {
            //再次付款start
            $("#nextAgain").on("click", function () {
                $("#AliPay_trigger").trigger("click");
            });


            //再次付款end
            //付款Start
            $(".next1").on("click", function () {
                // 联系人信息x
                $(this).attr("disabled", true);
                //支付方式
                var $payment = $(".payment li"), paymethod;
                $payment.each(function (index, item) {
                    var $item = $(item); //
                    if ($item.hasClass("pick")) {
                        paymethod = $item.data('paymethod');
                    }
                });
                if (paymethod) {
                    $.ajax({
                        url: CMSAPI + '/order/checkOrderIspay',
                        data: {
                            orderInfoNo: sessionStorage.getItem("ordersToken"),
                            password: $.cookie("passWord"),//密码
                            uuid: $.cookie("userName")//账号
                        },
                        timeout: 5000,
                        type: "post",
                        dataType: "json",
                        async: false,
                        success: function (data) {
                            if (data.code == 100) {
                                location.href = "./finished.html";
                                sessionStorage.setItem("pay", 1);
                            } else {
                                sessionStorage.setItem("pay", 3);
                                $.ajax({
                                    url: CMSAPI + '/order/goPay',
                                    data: {
                                        payMethod: paymethod,
                                        ordersToken: sessionStorage.getItem("ordersToken"),
                                        password: $.cookie("passWord"),//密码
                                        uuid: $.cookie("userName")//账号
                                    },
                                    timeout: 5000,
                                    type: "post",
                                    dataType: "json",
                                    async: false,
                                    beforeSend: function () {
                                        $(".weixin_img").remove();
                                        if ( paymethod == "BaiduUmoney" ) {
                                            $("#BaiduUmoney,#overlay").show();
                                            return false
                                        }else if( paymethod=="MianXi" ){
                                            $("#MianXi,#overlay").show();
                                            return false
                                        } else if (paymethod == "offline_transfer") {
                                            alert("请转账到线下账户");
                                            return false;
                                        } else if (paymethod_this == paymethod) {
                                            if (paymethod == "wx_pub_qr") {
                                                weixin();

                                            } else {
                                                alipay();
                                            }
                                            return false;
                                        }
                                    },
                                    success: function (data) {
                                        paymethod_this = paymethod;
                                        if (data.code == 100) {
                                            if (data.data) {
                                                var data = data.data;
                                                if (paymethod == "wx_pub_qr") {
                                                    sessionStorage.setItem("time_expire", data.ordersinfo_time);
                                                    sessionStorage.setItem("ordersinfo_no", data.ordersinfo_no);
                                                    sessionStorage.setItem("imgUrl", CMSAPI + data.qr_url);
                                                    weixin();
                                                } else {
                                                    sessionStorage.setItem("ch_json", data.charge);
                                                    sessionStorage.setItem("time_expire", data.ordersinfo_time);
                                                    sessionStorage.setItem("ordersinfo_no", data.ordersinfo_no);
                                                    alipay();
                                                }
                                            }
                                        }

                                    },
                                    complete: function () {
                                        sh = setInterval(fresh, 1000);
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
                }
            });
            //付款End


            // 百度有钱Start
            $(".put").on("click", function () {
                var mobileReg = /^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/;
                var $phone = $("#BaiduUmoney .phone input").val();
                var $name = $("#BaiduUmoney .name input").val();
                $.ajax({
                    url: CMSAPI + '/order/goPayBaidu',
                    data: {
                        name:$name,
                        phone:$phone,
                        ordersToken: sessionStorage.getItem("ordersToken"),
                        password: $.cookie("passWord"),//密码
                        uuid: $.cookie("userName")//账号
                    },
                    timeout: 5000,
                    type: "post",
                    dataType: "json",
                    async: false,
                    beforeSend: function (data) {
                        if (!$name) {
                            $("#BaiduUmoney .name input").attr({placeholder: "姓名不能为空"}).focus().val("")
                            return false;
                        }
                        if (!mobileReg.test($phone)) {
                            $("#BaiduUmoney .phone input").val("");
                            $("#BaiduUmoney .phone input").attr({placeholder: "请输入正确手机号码"}).focus().val("");
                            return false;
                        }
                        if (!$phone) {
                            $("#BaiduUmoney .phone input").attr({placeholder: "手机号码不能为空"}).focus().val("");
                            return false;
                        }
                        if(confirm("请确认贷款人信息\n\n贷款人姓名: "+$name+"\n贷款人手机: "+$phone) == false){
                            return false;
                        }
                    },
                    success: function (data) {
                        if (data.code == 100) {
                            // console.log(data);
                            var data = JSON.parse(data.data);
                            // console.log(data.result);
                            $("#BaiduUmoney_trigger").parent("a").attr("href",data.result);
                            $("#BaiduUmoney").hide();
                            $("#tool").show();
                            $("#BaiduUmoney_trigger").trigger("click");
                        }
                    },
                    complete: function () {
                    },
                    error: function () {
                    }
                })



            });
            // 百度有钱End

            // 海米支付Start
            $("#Mput").on("click", function () {
                var mobileReg = /^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/;
                var $phone = $("#MianXi .phone input").val();
                var $name = $("#MianXi .name input").val();
                var $applyTerm = $("#MianXi .applyTerm select").val();
                $.ajax({
                    url: CRMAPI + '/MemedaiOnlineLoan/onlineOrderPay',
                    // url: 'http://192.168.3.40:8081/MemedaiOnlineLoan/onlineOrderPay',
                    data: {
                        userName:$name,
                        userPhone:$phone,
                        applyTerm:$applyTerm,
                        payMethod:'lovehaimi',
                        ordersToken: sessionStorage.getItem("ordersToken"),
                        password: $.cookie("passWord"),//密码
                        phone: $.cookie("userName")//账号
                    },
                    timeout: 5000,
                    type: "post",
                    dataType: "json",
                    async: false,
                    beforeSend: function (data) {
                        if (!$name) {
                            $("#MianXi .name input").attr({placeholder: "姓名不能为空"}).focus().val("")
                            return false;
                        }
                        if (!mobileReg.test($phone)) {
                            $("#MianXi .phone input").val("");
                            $("#MianXi .phone input").attr({placeholder: "请输入正确手机号码"}).focus().val("");
                            return false;
                        }
                        if (!$phone) {
                            $("#MianXi .phone input").attr({placeholder: "手机号码不能为空"}).focus().val("");
                            return false;
                        }
                        if(confirm("请确认贷款人信息\n\n贷款人姓名: "+$name+"\n贷款人手机: "+$phone+"\n选择期数: "+$applyTerm) == false){
                            return false;
                        }
                    },
                    success: function (data) {
                        if(data.code==100){
                            var data = data.data['resultInfo'];
                            data = JSON.parse(data)
                            if (data.code == 0) {
                                // console.log(data.result);
                                $("#MianXi_trigger").parent("a").attr("href",data.content);
                                $("#MianXi").hide();
                                $("#tool").show();
                                $("#MianXi_trigger").trigger("click");
                            }else {
                                alert(data.desc)
                            }
                        }else {
                            alert(data.msg)
                        }
                    },
                    complete: function () {
                    },
                    error: function () {
                    }
                })



            });
            // 海米支付End

        })
    });
//点击支付订单end
    if (sessionStorage.getItem("ordersinfo_no")) {
        $("#OrderID").html("订单号：" + sessionStorage.getItem("ordersinfo_no")).show();
    } else {
        $("#OrderID").hide();
    }

    if (sessionStorage.getItem("time_expire")) {
        $("#time_expire").html(sessionStorage.getItem("time_expire")).show();
    } else {
        $("#time_expire").hide()
    }

    if (sessionStorage.getItem("time_expire")) {
        sh = setInterval(fresh, 1000);
    }
})