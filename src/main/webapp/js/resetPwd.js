/**
 * Created by ShenBo on 2017/12/7.
 */

$(function () {
    function GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null)return unescape(r[2]);
        return "";
    }
    var code = '';
//        手机号检测
    $(".phone").keyup(function () {
        var mobileReg = /^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/;
        var $phone = $(".phone").val();
        if (!mobileReg.test($phone)) {
            $("#phone span").show();
        }else {
            $("#phone span").hide();
        }
    })
//        密码检测
    $(".pwd").keyup(function () {
        var pwdReg = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/;
        var $pwd = $(".pwd").val();
        if (!pwdReg.test($pwd)) {
            $("#pwd .icon-pwd").hide();
        }else {
            $("#pwd .icon-pwd").css("display","inline-block");
        }
    })
//        验证码
    $(".code").keyup(function () {
        var codeReg = /^\d{4}$/;
        var $code = $(".code").val();
        if (!codeReg.test($code) || $code != code) {
            $("#code span").show();
        }else {
            $("#code span").hide();
        }
    })
//        发送验证码
    $(".code-btn").on("click", function () {
        var $this = $(this);
        var $phone = $(".phone").val();
        var mobileReg = /^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/;

        // 时间戳
//            var timestamp=new Date().getTime();
//            var token = sha512($phone+timestamp+'onlyhi');

        if (!mobileReg.test($phone)) {
            $(".phone").attr({placeholder: "请输入正确手机号码"}).focus().val("");
            $("#phone span").show();
            return false;
        }else{
            $("#phone span").hide();
            $this.addClass("wait").attr("disabled", true);
            $.ajax({
                url: CLIENTAPI+'/client/user/getAuthCode',
                type: 'post',
                // //本地环境
                data: {phone: $phone},
                dataType: 'json',
                timeout:5000,
                // 发起请求前就调用
                beforeSend: function (data) {
                    var second = 60;
                    $this.attr("value",second-- + "s后重新获取")
                    timerId = setInterval(function () {
                        $this.attr("value",second-- + "s后重新获取")
                        if (second <= 0) {
                            clearInterval(timerId);
                            $this.attr("value","重新发送").removeClass("wait").attr("disabled", false);
                        }
                    }, 1000);
                },
                success: function (data) {
                    if (data.code == 0) {
                        var data = data.data;
                        code = data.authCode;
                    } else if (data.result == 101) {
                        $this.attr("value","重新发送").removeClass("wait").attr("disabled", false);
                    }
                    console.log(1);
                },
                error: function () {
                }
            });
        }
    })

//        确认修改密码

    $("#btn").on("click", function () {
        var pwdReg = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/;
        var mobileReg = /^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/;
        var codeReg = /^\d{4}$/;
        var $name = $(".phone").val();
        var $code = $(".code").val();
        var $pwd = $(".pwd").val();
        $.ajax({
            type: 'post',
            url: CLIENTAPI + '/client/user/retrievePassword',
            data: {
                phone:$name,
                password: sha512($name + "&" + $pwd + ":onlyhi"),
                authCode: $code,
                deviceType: GetQueryString("deviceType") || 'PC',
                userType: GetQueryString("userType") || 'teacher',
                deviceId: GetQueryString("deviceId") || '123456',
            },
            dataType: "json",
            timeout:5000,
            jsonp: "jsoncallback",
            // 发起请求前就调用
            beforeSend: function (data) {
                if (!mobileReg.test($name)) {
                    $(".phone").attr({placeholder: "请输入正确手机号码"}).focus().val("");
                    $("#phone span").show();
                    return false;
                }else if (!codeReg.test($code) ||$code != code) {
                    $("#code span").show();
                    $(".code").attr({placeholder: "请输入正确验证码"}).focus().val("");
                    return false
                }else if (!pwdReg.test($pwd)) {
                    $(".pwd").val("").focus();
                    return false;
                } else {
                    $("#code span").hide();

                    $("#phone span").hide();
                }
            },
            success: function (data) {
                if (data.code == 0) {
                    $(".form").hide();
                    $(".succeed").css("display","inline-block");
                }else {
                    alert(data.message)
                }
            },
            error: function () {
                alert("接口错误！！！")
            }
        });
    });
})
