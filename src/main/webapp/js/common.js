/**
 *
 嗨课堂官网v2.0
 *
 2016-11-25
 *
 公共JS文件
 *
 创建人：Bo Shen
 *
 重构：Binhang Luo
 */



/**
 *
 判断导航类名
 *
 @class active
 *
 */

$(".callPhone").hover(function(){
    $(".h-phone").show();
},function(){
    $(".h-phone").hide();
})

  function navActive(){
    var pathName = location.pathname;

    if(pathName.indexOf('index.html') != -1 || pathName.indexOf('html') == -1)
    {
        //首页
      $(".index").addClass("active").siblings('li').removeClass("active");
    }
    else if(pathName.indexOf('primary.html') != -1)
    {
        //小学
      $(".specialCourse,.primary").addClass("active").siblings('li').removeClass("active");
    }
    else if(pathName.indexOf('early.html') != -1)
    {
        //初中
      $(".specialCourse,.early").addClass("active").siblings('li').removeClass("active");
    }
    else if(pathName.indexOf('high.html') != -1)
    {
        //高中
      $(".specialCourse,.high").addClass("active").siblings('li').removeClass("active");
    }
    else if(pathName.indexOf('fine.html') != -1)
    {
        //精品课
      $(".fine").addClass("active").siblings('li').removeClass("active");
    }
    else if(pathName.indexOf('teacher.html') != -1)
    {
        //教研师资
      $(".teacher").addClass("active").siblings('li').removeClass("active");
    }
    else if(pathName.indexOf('system.html') != -1)
    {
        //课程体系
      $(".system").addClass("active").siblings('li').removeClass("active");
    }
    else if(pathName.indexOf('teacher-style.html') != -1)
    {
        //教师风采
      $(".teacher-style").addClass("active").siblings('li').removeClass("active");
    }
    else if(pathName.indexOf('test.html') != -1)
    {
        //学习力测试
      $(".test").addClass("active").siblings('li').removeClass("active");
    }
    else if(pathName.indexOf('flow.html') != -1)
    {
        //入学流程
        $(".flow").addClass("active").siblings('li').removeClass("active");
    }
    else if(pathName.indexOf('about-us.html') != -1)
    {
        //关于我们
      $(".about-us").addClass("active").siblings('li').removeClass("active");
    }
    else if(pathName.indexOf('parents.html') != -1)
    {
        //家长
      $(".parents").addClass("active").siblings('li').removeClass("active");
    }
    else if(pathName.indexOf('advantage.html') != -1){
        //嗨课堂优势
        $(".advantage").addClass("active").siblings('li').removeClass("active");
    }
    else if(pathName.indexOf('teaRecource.html') != -1){
        //教研资源
        $(".teaRecource").addClass("active").siblings('li').removeClass("active");
    }
    else if(pathName.indexOf('news.html') != -1){
        //嗨课堂资讯
        $(".news").addClass("active").siblings('li').removeClass("active");
    }
    else if(pathName.indexOf('news/1.html') != -1){
        //嗨课堂资讯
        $(".news").addClass("active").siblings('li').removeClass("active");
    }
    else if(pathName.indexOf('about-us_new.html') != -1){
        //关于我们
        $(".about-us_new").addClass("active").siblings('li').removeClass("active");
    }
    else if(pathName.indexOf('z/professor.html') != -1){
        //拜托了教授
        $(".professor").addClass("active").siblings('li').removeClass("active");
    }
  }
  navActive();

 //备案
(function(){
  var beian = 'Copyright © 2017 上海济忆网络科技有限公司' +
              '<a href="http://www.miitbeian.gov.cn" target="_blank">' +
              '( 沪ICP备17009480号-5 )</a>';
  $(".footer1>p").html(beian);
})();



//弹框start
$("body").on('click',".btn1", function (event) {
    event.preventDefault();
    $(".box").fadeIn();
    $(".Positive").hide();
    $(".other").fadeIn();
    $("#overlay").show();
});
$(".btn1").on('click', function (event) {
    event.preventDefault();
    $(".box").fadeIn();
    $(".Positive").hide();
    $(".other").fadeIn();
    $("#overlay").show();
});
var time;
var num = 0;
var time1 = setTimeout(function () {
    // $('.box').fadeIn();
    // $("#overlay").show();

}, 15000);
$('.close_1,.close').on('click', function () {
    $('.box').fadeOut();
    $("#overlay").fadeOut();
    time = setTimeout(function () {
        $('.box').fadeIn();
        $("#overlay").show();
    }, 45000);

    if (num > 0) {
        clearTimeout(time);
    }
    num++;
    return false;
})
$('.Audition').on('click', function () {
    $(".Positive").hide();
    $('.other').fadeIn();
});
$('.close_1').on('click', function () {
    $('.box').fadeOut(200);
    return false;
});
// $('option').each(function () {
//     if ($(this).val() == '高一') {
//         $(this).attr("selected", true);
//     }
// });
//弹框end
//    获取url携带参数
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)return unescape(r[2]);
    return "";
}

//检测进入盒子的方向start
function Kissy() {
    KISSY.add('ged', function (S) {
        var D = S.DOM, E = S.Event;

        function GED(cfg) {
            this.eles = S.all(cfg.eles);
            this.ss = cfg.slider;
            this.init();
        }

        GED.prototype = {
            _getData: function (node) {
                var pos = D.offset(node);
                var size = {};
                size.w = D.innerWidth(node);
                size.h = D.innerHeight(node);
                var point = {};
                point.lt = {x: pos.left, y: pos.top};
                point.rt = {x: pos.left + size.w, y: pos.top};
                point.lb = {x: pos.left, y: pos.top + size.h};
                point.rb = {x: pos.left + size.w, y: pos.top + size.h};
                var center = {x: pos.left + size.w / 2, y: pos.top + size.h / 2};
                var corner = {}, deg = 180 / Math.PI;
                corner.clt = Math.atan2(center.y - point.lt.y, point.lt.x - center.x) * deg;
                corner.crt = Math.atan2(center.y - point.rt.y, point.rt.x - center.x) * deg;
                corner.clb = Math.atan2(center.y - point.lb.y, point.lb.x - center.x) * deg;
                corner.crb = Math.atan2(center.y - point.rb.y, point.rb.x - center.x) * deg;

                return {pos: pos, size: size, point: point, center: center, corner: corner};
            },
            _getDir: function (e, data) {
                var dir = "l";
                var enterPoint = {x: e.clientX + D.scrollLeft(window), y: e.clientY + D.scrollTop(window)};
                var cen = Math.atan2(data.center.y - enterPoint.y, enterPoint.x - data.center.x) * 180 / Math.PI;

                if (cen >= data.corner.crb && cen < data.corner.crt) {
                    dir = "r";
                } else if (cen >= data.corner.crt && cen < data.corner.clt) {
                    dir = "t";
                } else if (cen >= data.corner.clb && cen < data.corner.crb) {
                    dir = "b";
                }
                return dir;
            },
            _render: function (node) {
                var _this = this;
                var data = _this._getData(node);
                var ss = D.get(_this.ss, node);
                E.on(node, 'mouseenter', function (e) {
                    var dir = _this._getDir(e, data);
                    var left = -data.size.w, top = 0;
                    switch (dir) {
                        case "l":
                            // D.html(ss, "左方进入");
                            break;
                        case "t":
                            // D.html(ss, "上方进入");
                            left = 0;
                            top = -data.size.h;
                            break;
                        case "r":
                            // D.html(ss, "右方进入");
                            left = data.size.w;
                            top = 0;
                            break;
                        case "b":
                            // D.html(ss, "下方进入");
                            left = 0;
                            top = data.size.h;
                            break;
                        default:
                    }
                    D.css(ss, {"left": left, "top": top});
                    if (node.anim && node.anim.isRunning()) {
                        node.anim.stop();
                    }
                    node.anim = new S.Anim(ss, {"left": 0, "top": 0}, 0.2, "easeIn", function () {
                    });
                    node.anim.run();
                });
                E.on(node, 'mouseleave', function (e) {
                    var dir = _this._getDir(e, data);
                    var left = -data.size.w, top = 0;
                    switch (dir) {
                        case "l":
                            break;
                        case "t":
                            left = 0;
                            top = -data.size.h;
                            break;
                        case "r":
                            left = data.size.w;
                            top = 0;
                            break;
                        case "b":
                            left = 0;
                            top = data.size.h;
                            break;
                        default:
                    }

                    if (node.anim && node.anim.isRunning()) {
                        node.anim.stop();
                    }
                    node.anim = new S.Anim(ss, {"left": left, "top": top}, 0.2, "easeIn", function () {
                    });
                    node.anim.run();
                });
            },
            init: function () {
                var _this = this;
                S.each(_this.eles, function (n) {
                    _this._render(n);
                });
            }
        };

        S.GED = GED;
    });
}
//检测进入盒子的方向end

//公共功能start
$(function () {

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

//底部表单提交
    //客户端忘记密码
    if(GetQueryString('fq') == 9527){
      $(".login_f,.login_1,#overlay").fadeIn(300);
      $(".login_1 .name input").focus();
      $(".login").hide();
      $(".login_2").show();
      clearTimeout(time1);
      clearTimeout(time);
    //  客户端注册
    }else if(GetQueryString('register') == 9527){
      clearTimeout(time1);
      clearTimeout(time);
      $(".Register1,#overlay").fadeIn(300);
      $(".login_f").fadeOut();
      $(".Register1 .tel input").focus();
    }


    // 涨价公告
    $(".notice-btn").click(function(){
      clearTimeout(time1);
      clearTimeout(time);
      $(".notice").fadeIn(300);
    })
    $(".notice").click(function(){
      $(".notice").fadeOut(300);
    })



    $(function () {
        $('.submit').on('click', function () {
            $("#myForm .adid").val(GetQueryString("adid"))
            $("#myForm .jh").val(GetQueryString("jh"));
            $("#myForm .dy").val(GetQueryString("dy"));
            $("#myForm .keyNum").val(GetQueryString("keynum"));
            var $this = $(this);
            var mobileReg = /^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/;
            var nameReg = /^([\u4e00-\u9fa5]{1,20}|[a-zA-Z\.\s]{1,20})$/;
            var formData = $('#myForm').serialize();

            // var adid = window.location.href.split("?");
            // // var adid1 = adid.split("&");
            // console.log(adid);
            $.ajax({
                type: 'get',
                url: CMSAPI + '/NewNameList/createNewNameList', //正式环境
                data: formData,
                dataType: "jsonp",
                jsonp: "jsoncallback",
                timeout:5000,
                // 发起请求前就调用
                beforeSend: function (data) {
                    if (!$("#myForm .name").val()) {
                        $("#myForm .name").attr({placeholder: "名字不能为空"}).focus().val("");
                        return false;
                    }
                    if (!nameReg.test($("#myForm .name").val())) {
                        $("#myForm .name").val("");
                        $("#myForm .name").attr({placeholder: "请输入正确姓名"}).focus().val("");
                        return false;
                    }
                    if (!mobileReg.test($("#myForm .mobile").val())) {
                        $(this).attr("input::-webkit-input-placeholder", "color", "#FF0000");
                        $("#myForm .mobile").attr({placeholder: "手机号不正确"}).focus().val("");
                        return false;
                    }
                    $this.html('正在提交...').addClass("disabled").attr("disabled", true);
                },
                success: function (data) {
                    //var data = JSON.parse(data);
                    if (data.code == 100) {
                        // $('.box').hide();
                        console.log(100);
                        clearTimeout(time);
                        clearTimeout(time1);
                        window.location.href = skip + "/succeed.html";
                    } else if (data.code == 101) {
                        $("#myForm .name,#myForm .mobile").focus();
                        $this.html('免费试听').removeClass('disabled').attr("disabled", false);
                        window.location.href = skip+"/succeed.html";
                        return false;
                    }
                    else {
                        window.location.href = skip + "/error.html";

                    }
                    console.log(1);
                },
                complete: function () { // 请求完成时会调用
                    $(".tip").fadeOut(1500);
                    $("#myForm .name,#myForm .mobile").css("border", 0);
                    console.log(2);
                    // 还原状态
                    $("#myForm input").val("");
                    $this.html('免费试听').removeClass('disabled').attr("disabled", false);
                },
                error: function () {
                    console.log(3);
                    window.location.href = skip + "/error.html";
                }
            });
        });
    });
//底部表单提交end
//头部微信显示隐藏start
    $(function () {
        $(".nav .wechat").mouseover("on", function () {
            $(".nav .wechat_1").stop().fadeIn(500);
        });
        $(".nav .wechat").mouseleave("on", function () {
            $(".nav .wechat_1").stop().fadeOut();
        });
    });
//头部微信显示隐藏end
//弹窗表单start
    $(function () {
        $(".myForm select").on("change", function () {
            if ($(".myForm .grade").val() == "请选择") {
                $(".myForm .grade").css("color", "#a8a8a8");
                $(".myForm .grade option").css("color", "#000");
            } else {
                $(".myForm .grade").css("color", "#000");
                $(".myForm .grade option").css("color", "#000");
            }

            if ($(".myForm .kemu").val() == "请选择") {
                $(".myForm .kemu").css("color", "#a8a8a8");
                $(".myForm .kemu option").css("color", "#000");
            } else {
                $(".myForm .kemu").css("color", "#000");
                $(".myForm .kemu option").css("color", "#000");
            }
        })
        $('.submit1').on('click', function () {
            $(".myForm .adid").val(GetQueryString("adid"));
            $(".myForm .jh").val(GetQueryString("jh"));
            $(".myForm .dy").val(GetQueryString("dy"));
            $(".myForm .keyNum").val(GetQueryString("keynum"));
            var $this = $(this);
            var mobileReg = /^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/;
            var nameReg = /^([\u4e00-\u9fa5]{1,20}|[a-zA-Z\.\s]{1,20})$/;
            var formData = $('.myForm').serialize();
            console.log(formData);
            $.ajax({
                type: 'get',
                url: CMSAPI+'/NewNameList/createNewNameList', //正式环境
                data: formData,
                dataType: "jsonp",
                timeout:5000,
                jsonp: "jsoncallback",
                // 发起请求前就调用
                beforeSend: function (data) {
                    if (!$(".myForm .name").val()) {
                        $(".myForm .name").attr({placeholder: "名字不能为空"}).focus().val("").blur(function () {
                            $(this).css("borderColor", "");
                        });
                        return false;
                    }
                    if (!nameReg.test($(".myForm .name").val())) {
                        $(".myForm .name").val("");
                        $(".myForm .name").attr({placeholder: "请输入正确姓名"}).focus().val("").blur(function () {
                            $(this).css("borderColor", "");
                        });
                        return false;
                    }
                    if (!mobileReg.test($(".myForm .mobile").val())) {
                        $(this).attr("input::-webkit-input-placeholder", "color", "#aaa");
                        $(".myForm .mobile").attr({placeholder: "手机号不正确"}).focus().val("").blur(function () {
                            $(this).css("borderColor", "");
                        });
                        return false;
                    }

                    if ($(".myForm .grade").val() == "请选择" || $(".myForm .kemu").val() == "请选择") {
                        alert("请选择年级和科目");
                        return false;
                    }
                    $this.html('正在提交...').addClass("disabled").attr("disabled", true);
                },
                success: function (data) {
                    //var data = JSON.parse(data);
                    if (data.code == 100) {
                        $('.box').fadeOut();
                        $("#overlay").fadeOut();
                        console.log(100);
                        clearTimeout(time);
                        clearTimeout(time1);
                        window.location.href = skip + "/succeed.html";
                    } else if (data.code == 101) {
                        $(".myForm .name,.myForm .mobile");
                        $this.html('免费试听').removeClass('disabled').attr("disabled", false);
                        return false;
                    }else {
                        window.location.href = skip + "/error.html";
                    }
                    console.log(1);
                },
                complete: function () { // 请求完成时会调用
                    $(".tip").fadeOut(1500);
                    $(".myForm .name,.myForm .mobile");
                    console.log(2);
                    // 还原状态
                    $(".myForm input").val("");
                    $this.html('免费试听').removeClass('disabled').attr("disabled", false);
                },
                error: function () {
                    console.log(3);
                    window.location.href = skip + "/error.html";
                }
            });
        });
    });
//弹窗表单end
//表单input获得焦点
    $(".myForm input,#myForm input").focus(function () {
        $(this).css("borderColor", "#aaa")
    }).blur(function () {
        $(this).css("borderColor", "#E1E1E1")
    })
//表单input

  //登录页面start
    $(function () {
        var timerId;
        //登录还原默认值start
        function login() {
            $(".login_1,.login_2,.login_3").hide();
            $(".login_f,#overlay").fadeOut();
            $(".login_1 .name input").attr({placeholder: "请输入手机号码"}).val("");
            $(".login_1 .pwd2 input").attr({placeholder: "请输入密码"}).val("");
            $(".login_1 .login-d button").html("登录").attr("disabled", false);


            $(".login_2 .name input").attr({placeholder: "请输入手机号码"}).val("");
            $(".login_2 .pwd input").attr({placeholder: "请输入密码"}).val("");
            $(".login_2 .login-d button").html("下一步").css({backgroundColor: "#CCC"}).attr("disabled", true);


            $(".login_3 .name input").attr({placeholder: "请输入密码"}).val("");
            $(".login_3 .pwd input").attr({placeholder: "请再次输入密码"}).val("");
            $(".login_3 .login-d button").html("提交").css({backgroundColor: "#aaa"}).attr("disabled", false);


            $(".login_2 .name button").css("backgroundColor", "#aaa").attr("disabled", false).html("获取验证码");
            clearTimeout(timerId);
            $(".Register1 .tel .tel_D").hide();
        }

        //登录还原默认值end
        $(".login_f .login input").focus(function () {
            $(this).css({borderColor: "#aaa"});
        }).blur(function () {
            $(this).css({borderColor: "#CCC"});
        })
        //用户名和密码提交后台验证
        $(".login_1").keydown(function(e){
          if(e.keyCode==13){
            $(".login_1 .login-d button").trigger("click");
          }
        })
        $(".login_1 .login-d button").on("click", function() {
            var time = new Date().getTime();
            var $name = $(".login_1 .name input").val();
            var $pwd = $(".login_1 .pwd input").val();
            var mobileReg = /^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/;
            var pw = sha512($name + "&" + $pwd + ":onlyhi");
            //登录验证start
            $.ajax({
                url:CMSAPI+"/NewNameList/login",
                type: 'get',
                data: {phone: $name, password: sha512(pw + time), timestamp: time},
                dataType: "jsonp",
                timeout:5000,
                jsonp: "jsoncallback",
                // 发起请求前就调用
                beforeSend: function (data) {
                    if (!$name) {
                        $(".login_1 .name input").attr({placeholder: "账号或密码不能为空"}).focus().val("")
                        return false;
                    }
                    if (!mobileReg.test($name)) {
                        $(".login_1 .name input").val("");
                        $(".login_1 .name input").attr({placeholder: "请输入正确手机号码"}).focus().val("");
                        return false;
                    }
                    if (!$pwd) {
                        $(".login_1 .pwd input").attr({placeholder: "账号或密码不能为空"}).focus().val("");
                        return false;
                    }
                    $(".login_1 .login-d button").html('正在提交...').attr("disabled", true);
                },
                success: function (data) {
                    //var data = JSON.parse(data);
                    if (data.code == 100) {
                        $.cookie("userName", $name,{path:'/'});
                        $.cookie("passWord", pw,{path:'/'});
                        $.cookie("userName_name", data.data.name,{path:'/'});
                        $(".tip1 span").html("登录成功");
                        $(".tip1").fadeIn();
                        setTimeout(function () {
                            $(".tip1").fadeOut();
                            window.location.href = skip + "/buy/personal.html";
                        }, 1000);
                        login();
                    } else if
                    (data.code == 101) {
                        $(".tip1 span").html(data.data);
                        $(".tip1").fadeIn();
                        setTimeout(function () {
                            $(".tip1").fadeOut();
                            $(".login_1 .login-d button").html('登录').attr("disabled", false);
                        }, 1000);
                    }

                },
                complete: function () { // 请求完成时会调用
                },
                error: function () {

                }
            });
        })
        //登录验证end
        //修改密码发送验证码start
        $(".login_2 .name button").on("click", function () {

            var $name = $(".login_2 .name input").val();
            var mobileReg = /^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/;
            // 时间戳
            var timestamp=new Date().getTime();
            var token = sha512($name+timestamp+'onlyhi');
          if (!mobileReg.test($name)) {
            $(".login_2 .name input").attr({placeholder: "请输入正确手机号码"}).focus().val("");
            return false;
          }else{
            $(".login_2 .name button").css('background','#ccc').attr("disabled", true);
            $.ajax({
              url: CMSAPI + '/msg/sendSms'+'?token='+token+'&time='+timestamp,
              type: 'post',
              // //本地环境
              data: {sendPhone: $name, sendType: 2},
              dataType: 'json',

              timeout:5000,
              // 发起请求前就调用
              beforeSend: function (data) {
                var second = 60;
                timerId = setInterval(function () {
                  $(".login_2 .name button").html(second-- + "s后重新获取")
                  if (second <= 0) {
                    clearInterval(timerId);
                    $(".login_2 .name button").html("获取验证码").css({background: '#aaa'}).attr("disabled", false);
                  }
                }, 1000);
              },
              success: function (data) {
                if (data.result == 0) {
                  console.log(100);
                  //设置date为当前时间+5 设置修改验证码过期时间start
                  var date0=new Date();
                  $.cookie("login_code",sha512(data.message),{path:'/',expires:date0.setTime(date0.getTime()+5*60*1000)});
                  $.cookie("userName", $name,{path:'/'});
                  //设置date为当前时间+5 设置修改验证码过期时间end

                } else if (data.result == 101) {
                  $(".login_2 .name input").attr({placeholder: "请重新获取"}).focus().val("");
                }
                console.log(1);
              },
              // complete: function () {
              //   $(".login_2 .name button").css("borderColor", "#aaa").attr("disabled", false);
              //   conso le.log(2);
              //   // 还原状态
              // },
              error: function () {
                console.log(3);
                window.location.href = skip + "/error.html";
              }
            });
          }

        })
        //修改密码发送验证码end
        $(".login_2 .pwd input").keyup(function () {
            var $code = $(this).val();
            if (sha512($code) == $.cookie("login_code")) {
                $(".login_2 .login-d button").css("backgroundColor", "#f40009").attr("disabled", false);
                $(".login_2 .pwd .pwd1").attr("src", "images/code_r.png");
            } else {
                $(".login_2 .login-d button").css("backgroundColor", "#CCC").attr("disabled", true);
                $(".login_2 .pwd .pwd1").attr("src", "images/code_s.png");
                $(".login_2 .pwd input").attr({placeholder: "请输入正确验证码"}).focus();
            }
        });
        //修改密码start
        $(".login_3 .login-d button").on("click", function () {

            var pwdReg = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/;

            var oldcode = $(".login_3 .name input").val();

            var newcode = $(".login_3 .pwd input").val();

            var $name = $.cookie("userName");
            $.ajax({
                type: 'get',
                url: CMSAPI + '/NewNameList/changeSecret',
                data: {phone:$name,password: sha512($name + "&" + newcode + ":onlyhi"), sendType: 2},
                dataType: "jsonp",

                timeout:5000,
                jsonp: "jsoncallback",
                // 发起请求前就调用
                beforeSend: function (data) {
                    if (!pwdReg.test(oldcode)) {
                        $(".login_3 .name input").attr("placeholder", "请使用字母、数字和符号两种及以上6-20位密码").val("").focus();
                        return false;
                    }
                    if (oldcode != newcode) {
                        $(".login_3 .pwd input").attr("placeholder", "两次密码不一致").val("").focus();
                        return false;
                    }
                },
                success: function (data) {
                    if (data.code == 100) {
                        // $.cookie("passWord", sha512($name + "&" + newcode + ":onlyhi"),{path:'/'});
                        $.cookie("login_code",null,{path:'/'});
                        $(".tip1 span").html("修改成功");
                        $(".tip1").fadeIn();
                        setTimeout(function () {
                            $(".tip1").fadeOut();
                            $(".login0 a").trigger("click");
                        }, 1000);

                    }
                    if (data.code == 101) {
                        console.log(data);
                    }
                    console.log(1);
                },
                complete: function () {
                    // 请求完成时会调用
                    console.log(2);
                    // 还原状态
                    $(".login_3").hide();
                    login();

                },
                error: function () {
                    console.log(3);
                }
            });
        });
        //修改密码end
        //重新设置密码end
        //登录按钮的显示隐藏start
      $(".login0").on("click",function () {
          $(".login_f,.login_1,#overlay").fadeIn(300);
            $(".login_1 .name input").focus();
            clearTimeout(time1);
            clearTimeout(time);
        });
        $(".first").on('click', function () {
            $(".login_1").show().siblings("div").hide();
        });
        $(".lose1").on("click",function () {
            $(".login").hide();
            $(".login_2").show();
        });
        $(".login_2 .login-d").on("click",function () {
            $(".login_3").show().siblings("div").hide();
        });
        $(".login_f .login-clone").hover(function () {
            $(this).css("cursor", "pointer");
            $(this).on("click",function () {
                clearTimeout(time);
                clearTimeout(time1);
                login();
            });
        });
        $(".pwd1 input").focus(function () {
            $(this).siblings("p").fadeIn();
        }).blur(function () {
            $(this).siblings("p").fadeOut();
        });
        //登录按钮的显示隐藏end
    })
    //登录页面end
    //注册页面start
    $(function () {
        var timerId;
        var sureSend = 0;
        function Register() {
            $(".Register1 .tel input").attr({placeholder: "请输入手机号码"}).val("");
            $(".Register1 .code input").attr({placeholder: "请输入验证码"}).val("");
            $(".Register1 .pwd input").attr({placeholder: "请输入密码"}).val("");
            $(".Register1 .name input").attr({placeholder: "学生姓名"}).val("");

            $(".Register1,#overlay").fadeOut(100);
            clearTimeout(timerId);
            $(".Register1 .tel .tel_D").hide();
        }
        //注册发送验证码start
        $(".Register1 .code button").on("click", function () {
            if(sureSend == 0){
                return;
            }else {
                sureSend =0;
            }
            var $name = $(".Register1 .tel input").val();
            var mobileReg = /^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/;
            var timestamp=new Date().getTime();
            var token = sha512($name+timestamp+'onlyhi');
            $.ajax({
                url: CMSAPI + '/msg/sendSms'+'?token='+token+'&time='+timestamp,
                type: 'post',
                timeout:5000,
                // //本地环境
                data: {sendPhone: $name, sendType: 0},
                dataType: 'json',
                // 发起请求前就调用
                beforeSend: function (data) {
                    if (!mobileReg.test($name)) {
                        $(".Register1 .tel input").attr({placeholder: "请输入正确手机号码"}).focus().val("")
                        return false;
                    }
                    var second = 60;
                    timerId = setInterval(function () {
                        $(".Register1 .code button").html(second-- + "s后重新获取").css("background", "#CCC").attr("disabled", true);
                        if (second <= 0) {
                            clearInterval(timerId);
                            $(".Register1 .code button").html("获取验证码").css({background: '#aaa'}).attr("disabled", false);
                        }
                    }, 1000);
                },
                success: function (data) {
                    if (data.result == 0) {
                        console.log(100);
                        $(".Register1 .code button").css("borderColor", "#aaa").attr("disabled", false);
                        //设置date为当前时间+5 设置修改验证码过期时间start
                        var date0=new Date();
                        $.cookie("Register_code",sha512(data.message),{path:'/',expires:date0.setTime(date0.getTime()+5*60*1000)});
                        //设置date为当前时间+5 设置修改验证码过期时间end
                    } else if (data.result == 101) {
                        $(".Register1 .tel input").attr({placeholder: "请重新获取"}).css("borderColor", "#aaa").focus().val("").blur(function () {
                            $(this).css("borderColor", "#CCC");
                        });
                    }
                    console.log(1);
                },
                complete: function () {
                    $(".Register1 .code button").css("borderColor", "#ccc").attr("disabled", false);
                    console.log(2);
                    // 还原状态
                },
                error: function () {
                    console.log(3);
                    // window.location.href="./error.html";
                }
            });
        })
        //注册验证码end
        // 注册验证手机号是否注册start
        $(".Register1 .tel input").blur(function () {
                var $tel = $(this).val();
                var mobileReg = /^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/;
                $.ajax({
                    url: CMSAPI + '/NewNameList/checkPhone/', //本地环境
                    data: {
                        phone: $tel
                    },
                    type: "get",
                    timeout:5000,
                    dataType: "jsonp",
                    jsonp: "jsoncallback",
                    beforeSend: function () {

                        $(".Register1 .tel .tel_D").hide();
                        if (!mobileReg.test($tel)) {
                            sureSend = 0
                            return false;
                        }
                    },
                    success: function (data) {
                        if (data.code == 100) {
                            $(".Register1 .tel .tel_D").hide();
                            sureSend = 1;
                        }
                        else if (data.code == 101) {
                            $(".Register1 .tel .tel_D").show();
                            sureSend = 0;
                        }
                    },
                    complete: function () {
                    },
                    error: function () {

                    }
                })

        });
        // 注册验证手机号是否注册end
        //点击立即注册跳转登录
        $(".Register1 .tel .tel_D a").on("click",function () {
            $(".Register1").hide();
            $(".login_f").show();
            $(".login_1").show();
            $(".Register1 .tel input").val("");
        })
        //点击立即注册跳转登录
        //点击注册start

        //点击注册发送给后台
        $(".Register1 .login-z button").on("click", function() {
            var adid = GetQueryString("adid"),
                jh = GetQueryString("jh"),
                dy = GetQueryString("dy"),
                keynum = GetQueryString("keynum");
            var pwdReg = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/;
            var mobileReg = /^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/;
            var $tel = $(".Register1 .tel input").val(),
                $code = $(".Register1 .code input").val(),
                $name = $(".Register1 .name input").val(),
                $pwd = $(".Register1 .pwd input").val();
            $.ajax({
                url: CMSAPI + '/NewNameList/createNewNameList', //本地环境
                data: {
                    phone: $tel,
                    name: $name,
                    password: sha512($tel + "&" + $pwd + ":onlyhi"),
                    sendType: 0,
                    adid: adid,
                    jh: jh,
                    dy: dy,
                    keynum: keynum
                },

                timeout:5000,
                type: "get",
                dataType: "jsonp",
                jsonp: "jsoncallback",
                beforeSend: function () {
                    if (!mobileReg.test($tel)) {
                        $(".Register1 .tel input").focus().attr({placeholder: "手机号码不正确"});
                        return false;
                    }
                    else if (sha512($code) != $.cookie("Register_code")) {
                        $(".Register1 .code input").attr({placeholder: "验证码不正确"}).focus().val("");
                        return false;
                    }
                    else if (!$name) {
                        $(".Register1 .name input").attr({placeholder: "请输入学生姓名"}).focus();
                    }
                    else if (!pwdReg.test($pwd)) {
                        $(".Register1 .pwd input").focus().attr({placeholder: "密码格式不正确"});
                        return false;
                    }
                    else if (!$(".Register1 .checked input[type='checkbox']").is(':checked')) {
                        $(".Register1 .checked input").focus();
                        return false
                    }
                },
                success: function (data) {
                    console.log(data);
                    if (data.code == 100) {

                        $.cookie("userName", $tel,{path:'/'});
                        $.cookie("passWord", sha512($tel + "&" + $pwd + ":onlyhi"),{path:'/'});
                        $.cookie("userName_name", $name,{path:'/'});
                        $(".Register1,#overlay").hide();
                        //清除cookie验证码
                        $.cookie("Register_code",null,{path:'/'});

                        $(".tip1").show();
                        $(".tip1 span").html("注册成功!");
                        $(".tip1").show();
                        setTimeout(function () {
                            $(".tip1").hide();
                            // window.location.href = skip + "/buy/personal.html"
                        }, 1000);
                        Register();
                    }
                    else if (data.code == 101) {
                        $(".Register1,#overlay").hide();
                        $(".tip1").show();
                        $(".tip1 span").html(data.data);
                        $(".tip1").show();
                        setTimeout(function () {
                            $(".tip1").hide();
                            $(".login0 a").trigger("click");
                        }, 2000);
                    }
                },
                complete: function () {
                    $(".Register1 .code input").attr({placeholder: "请输入验证码"});
                    $(".Register1 .tel input").attr({placeholder: "请输入手机号码"});
                    $(".Register1 .pwd input").attr({placeholder: "请输入密码"});
                    console.log(2);
                    // 还原状态
                },
                error: function () {

                }
            })
        });
        //点击注册发送给后台end
        $(".Register1 input").focus(function () {
            $(this).css({borderColor: "#aaa"})
        }).blur(function () {
            $(this).css({borderColor: "#CCC"});
        })
        $(".Register,.zhuce").on("click", function () {
            clearTimeout(time1);
            clearTimeout(time);
            $(".Register1,#overlay").fadeIn(300);
            $(".login_f").fadeOut();
            $(".Register1 .tel input").focus();
        })
        $(".Register1 .login-clone").hover(function () {
            $(this).css("cursor", "pointer");
            $(this).on("click", function () {
                clearTimeout(time);
                clearTimeout(time1);
                Register();
            })
        })
        $(".Register1 .pwd input").focus(function () {
            $(this).siblings("p").stop().fadeIn();
        }).blur(function () {
            $(this).siblings("p").stop().fadeOut();
        })

        //点击注册end
    })
    //注册页面end

    //判断弹窗该不该弹出start
    if($.cookie("userName") || $.cookie("passWorld")){
        clearTimeout(time);
        clearTimeout(time1);
    }
    //判断弹窗该不该弹出start
})
//公共功能end

//导航动画start
function animate1(name1, name2, left) {
    var cloud = document.getElementById(name1);
    var navBar = document.getElementById(name2);
    //1 给所有li注册事件
    for (var i = 0; i < navBar.children.length; i++) {
        var li = navBar.children[i];
        //
        li.onmouseover = function () {
            //鼠标放到li上，让clound 也到当前li的位置
            animate(cloud, this.offsetLeft);
        };

        li.onmouseout = function () {
            //鼠标离开回到原来的位置
            animate(cloud, left);
        };

        li.onclick = function () {
            left = this.offsetLeft;

        }
    }
    //导航动画
    function animate(element, target) {
        //清除定时器
        if (element.timerId) {
            clearInterval(element.timerId);
        }

        element.timerId = setInterval(function () {
            var current = element.offsetLeft;
            var step = (target - current) / 5;

            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            current += step;
            element.style.left = current + "px";

            if (step === 0) {
                clearInterval(element.timerId);
            }
        }, 15);
    }
}
//导航动画end
//scroll动画Start
function scroll(element,callback) {
    var viewH =$(window).height();//可见高度
    var banner3 = $(element).offset().top;//元素距离顶部的高度
    var banner3Top = $(window).scrollTop();//页面已滚动的高度
    var scrollTop;
    if(banner3-banner3Top<viewH){
        setTimeout(function () {
            callback();
        },100)
        return false;
    }
    $(window).scroll(function(){
       scrollTop = $(window).scrollTop();
       //banner3 显示动画
        if(banner3-scrollTop<viewH){
            callback();
            return;
        }
    });
}
//scroll动画End
//滚动动画
// function () {
//     var viewH =$(window).height();//可见高度
//     var banner3 = $(element).offset().top;
//     //banner3 显示动画
//     // if(banner3-$(document).scrollTop()<viewH){
//     //    $(".banner3 .bottom").css({opacity:1,filter: "alpha(opacity=1)"}).find(".right").css("height","200px");
//     // }else {
//     //    $(".banner3 .bottom").css({opacity:1,filter: "alpha(opacity=1)"});
//     // }
// }

// 导航底部
// $(function () {
//     $(".header .content .left ul li").each(function (i, v) {
//         var $this = $(this);
//         if($this.find("a").hasClass("color_red1")){
//             $this.find("span").css("width","100%");
//         }
//     })
//
// })