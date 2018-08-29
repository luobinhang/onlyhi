$(function () {
    //        首页bannner轮播图
//返回顶部start
    $(function () {
        $(window).bind('scroll resize', function () {
            $(".backToTop").goToTop({pageHeightJg: 156});
        });
        $(".backToTop").goToTop();
        $(".order-span").html(Math.floor(5000+1000*Math.random()))
    });
//返回顶部end
    // 报名人数轮播
    window.onload = function () {
        var ImgTop = $(".order-img").height();
        var BoxTop = $(".order-center").height();
        var top = ImgTop - BoxTop;
        var Mtop = 0;
        setInterval(function () {
            Mtop++;
            $(".order-img").css("marginTop", -Mtop);
            if (Mtop >= top) {
                Mtop = 0;
            }
        }, 30)
    }


    function GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null)return unescape(r[2]);
        return "";
    }

    // var $code;
    // var UrlAdid = "XWJTAO0IXM";
    // var UrlAdid1 = "LYJRGTV4SE";
    // var UrlAdid2 = "LNVAECDPTT";
    // var UrlAdid3 = "NXJZVSLT1Q";
    // var UrlAdid4 = "3IKLDJWO55";
    // var UrlAdid5 = "FRMMEHDIAF";
    // var UrlAdid6 = "N9YBBU7I1J";
    // var UrlAdid7 = "LFYA5BS4PY";
    // var UrlAdid8 = "6WTQR3NEYY";
    // var UrlAdid9 = "FNYELHG6HY";
    // var UrlAdid10 = "0VCQ0MRF7V";


    // 判断应不应该存在底部start
    var FooterAdid = "FV9T0IQ1VF";
    // 判断应不应该存在底部end

  //signProp渠道增加js代码
      if(location.pathname.indexOf('signProp.html') != -1){
        signProp();
      }
      function signProp(){
        if(GetQueryString("adid") == "YEFTNBPAEL" ){
        //   var scriptProp =
        // "<script type='text/javascript'>" +
        //     "(function(root) {\n" +
        //         "root._tt_config = true;\n" +
        //         "var ta = document.createElement('script');\n " +
        //         "ta.type = 'text/javascript'; \n" +
        //         "ta.async = true;\n" +
        //         "ta.src = document.location.protocol + '//' + 's1.pstatp.com/bytecom/resource/track_log/src/toutiao-track-log.js';\n" +
        //         "ta.onerror = function () {\n" +
        //             "var request = new XMLHttpRequest();\n" +
        //             "var web_url = window.encodeURIComponent(window.location.href);\n" +
        //             "var js_url  = ta.src;\n" +
        //             "var url = '//ad.toutiao.com/link_monitor/cdn_failed?web_url=' + web_url + '&js_url=' + js_url + '&convert_id=80578572678';\n" +
        //             "request.open('GET', url, true);request.send(null);\n" +
        //         "};\n" +
        //         "var s = document.getElementsByTagName('script')[0]; \n" +
        //         "s.parentNode.insertBefore(ta, s);\n" +
        //     "})(window);\n" +
          var scriptProp =
        '<script type="text/javascript">\n' +
        '(function(root) {\n' +
        '   root._tt_config = true;\n' +
        '   var ta = document.createElement("script");\n' +
        '   ta.type = "text/javascript";\n' +
        '   ta.async = true;\n' +
        '   ta.src = document.location.protocol + "//" + "s1.pstatp.com/bytecom/resource/track_log/src/toutiao-track-log.js";\n' +
        '   ta.onerror = function () {\n' +
        '      var request = new XMLHttpRequest();\n' +
        '      var web_url = window.encodeURIComponent(window.location.href);\n' +
        '      var js_url  = ta.src;\n' +
        '      var url = "//ad.toutiao.com/link_monitor/cdn_failed?web_url=" + web_url + "&js_url=" + js_url + "&convert_id=83158586012";\n' +
        '      request.open("GET", url, true);\n' +
        '      request.send(null);\n' +
        '    }\n' +
        '   var s = document.getElementsByTagName("script")[0]; ' +
        '   s.parentNode.insertBefore(ta, s);\n' +
        '})(window);\n' +
        '</script>';
            $("head").append(scriptProp);
            // var btn='<button class=\'submit\' type=\'button\'></button>';
            // $(".F-button").append(btn);
            //若今日头条渠道,展示新图片，奥巴马隐藏
            $("#newImg").show();
            $("#aobama").hide();
        }
        else{
            $("#newImg").hide();
            $("#aobama").show();
            // var btn='<button class=\'submit\' type=\'button\'></button>';
            // $(".F-button").append(btn);
        //    不是今日头条，图片颜色全部变成大红色
            $("nav").css({"background-image":"url(../s/images/weixin/nav-2.jpg)"});
            $(".select1 img").attr({"src":"images/prop/bannerProp-2.jpg"});
            $(".select2>img").attr({"src":"images/prop/sign-info-2.jpg"});
            $(".select2 .myForm p input").css({"border":"1px solid #eb3341"});
            $(".select2 .myForm p select").css({"border":"1px solid #eb3341"});
            $(".select2 .myForm p button").css({"background-image":"url(../s/images/weixin/btn1-2.png)"});
            $(".order span,.warpper h2 span,.bar5 h3").css({"color":"#e50012"});
            $("#aobama").attr({"src":"images/prop/bar1-2.jpg"});
            $(".bar2 a").css({"background-image":"url(../s/images/weixin/btn-2.png)"});
            $(".bar4 img").attr({"src":"images/prop/bar4-2.jpg"});
            $("footer").css({"background-color":"#e60012"});
            $("a.backToTop").css({"background-image":"url(../s/images/weixin/top-2.png)"});
        }
      }



    (function () {
        // 判断验证码应不应该显示start
        // if (GetQueryString("adid") == UrlAdid || GetQueryString("adid") == UrlAdid1 || GetQueryString("adid") == UrlAdid2 || GetQueryString("adid") == UrlAdid3 || GetQueryString("adid") == UrlAdid9 || GetQueryString("adid") == UrlAdid8 || GetQueryString("adid") == FooterAdid) {
        //     $("#code").show();
        // } else {
        //     $("#code").hide();
        // }
      $("#code").hide();
        // 判断验证码应不应该显示end

        if (location.href.indexOf('signCode') != -1){
            $("#code").show();
        }

        //判断adid显示验证码，去除小学start
      // if (GetQueryString("adid") == UrlAdid5 || GetQueryString("adid") == UrlAdid4 || GetQueryString("adid") == UrlAdid7 ) {
      //   $("#code").show();
      //   var grade = ' <option value="请选择" selected style="display: none;">--请选择年级--</option>' +
      //     '<option value="初一">初一</option> ' +
      //     '<option value="初二">初二</option>' +
      //     ' <option value="初三">初三</option>' +
      //     ' <option value="初四">初四</option>' +
      //     ' <option value="高一">高一</option>' +
      //     ' <option value="高二">高二</option> ' +
      //     '<option value="高三">高三</option>'
      //   $(".grade").html(grade);
      // }
        //判断adid显示验证码，去除小学end

        //判断adid隐藏电话号
        // if(GetQueryString("adid") == "ANV4AK0U4G" || GetQueryString("adid") == "1PSQL30LA3" || GetQueryString("adid") == "TJICAWJVZV" || GetQueryString("adid") == "9DWAAX5YHT"){
        //     $(".nav-right").hide();
        //     $("footer a").eq(1).hide();
        // }

        // 如果存在adid就隐藏底部start
        // if (GetQueryString("adid") == FooterAdid) {
        //     $("footer").hide();
        // }
        // if (GetQueryString("adid") == "LNVAECDPTT") {
        //     $("footer").hide();
        //     $(".nav-right").hide();
        //     var grade = ' <option value="请选择" selected style="display: none;">--请选择年级--</option>' +
        //         '<option value="初一">初一</option> ' +
        //         '<option value="初二">初二</option>' +
        //         ' <option value="初三">初三</option>' +
        //         ' <option value="初四">初四</option>' +
        //         ' <option value="高一">高一</option>' +
        //         ' <option value="高二">高二</option> ' +
        //         '<option value="高三">高三</option>'
        //     $(".grade").html(grade);
        //
        // }
        // if (GetQueryString("adid") == UrlAdid) {
        //     var grade = ' <option value="请选择" selected style="display: none;">--请选择年级--</option>' +
        //         '<option value="初一">初一</option> ' +
        //         '<option value="初二">初二</option>' +
        //         ' <option value="初三">初三</option>' +
        //         ' <option value="初四">初四</option>' +
        //         ' <option value="高一">高一</option>' +
        //         ' <option value="高二">高二</option> ' +
        //         '<option value="高三">高三</option>'
        //     $(".grade").html(grade);
        //     // $(".grade option").eq(1).remove();
        //     // $(".grade option").eq(1).remove();
        //     // $(".grade option").eq(1).remove();
        //     // $(".grade option").eq(1).remove();
        //     // $(".grade option").eq(1).remove();
        // }
        // 如果存在adid就隐藏底部end


        //判断ADID切换signStar文案
        //   if (GetQueryString("adid") == 'W34WEI75U3') {
        //     $(".sign_rule li").eq(0).html('<span style="color: rgb(255,64,25);">（1）</span>黄金提分期，现在正当时！为提高教学效果，本课程为在线1对1真人互动辅导。');
        //     $(".sign_rule li").eq(1).html('<span style="color: rgb(255,64,25);">（2）</span>课程由上海交大嗨课堂教研中心提供，试听免费，但名额有限，请珍惜学习机会。');
        //   }


        // 选择年级科目select显示颜色的变化Start
        if ($(".grade").val() == "请选择") {
            $(".grade").css("color", "#CCC");
            $(".grade option").css("color", "#000");
        } else {
            $(".grade").css("color", "#000");
            $(".grade option").css("color", "#000");
        }

        if ($(".kemu").val() == "请选择") {
            $(".kemu").css("color", "#CCC");
            $(".kemu option").css("color", "#000");
        } else {
            $(".kemu").css("color", "#000");
            $(".kemu option").css("color", "#000");
        }
        $("select").on("change", function () {
            if ($(".grade").val() == "请选择") {
                $(".grade").css("color", "#CCC");
                $(".grade option").css("color", "#000");
            } else {
                $(".grade").css("color", "#000");
                $(".grade option").css("color", "#000");
            }

            if ($(".kemu").val() == "请选择") {
                $(".kemu").css("color", "#CCC");
                $(".kemu option").css("color", "#000");
            } else {
                $(".kemu").css("color", "#000");
                $(".kemu option").css("color", "#000");
            }
        })
    })()
    // 选择年级科目select显示颜色的变化End
    function scroll(element, callback) {
        var viewH = $(window).height();//可见高度
        var banner3 = $(element).offset().top;
        var scrollTop;

        $(window).scroll(function () {
            scrollTop = $(window).scrollTop();
            //banner3 显示动画
            if (banner3 - scrollTop < viewH) {
                callback();
                return;
            }
        });
    }

    //滚轮动画
    //
    // scroll(".select7", function () {
    //     $(".select7 p img").css("opacity", "1");
    // });
    // var width = $(".img1").width();
    // var i = 0;
    // var a = 0;
    // var length =  $(".five_two ul li").length;
    // var time = setInterval(function () {
    //     i++;
    //     $(".five_two ul li").eq(i).trigger("click");
    //     if(i >= length-1){
    //         i = -1
    //     }
    // },5000)


    //六大难题轮播图
//     var mySwiper1 = new Swiper('.swiper-six', {
//         autoplay: 5000,//可选选项，自动滑动
// //            effect : 'coverflow',//切换效果
//         loop: true,
// //            initialSlide: 1,//默认第二个
// //            slidesPerView: 1,//默认显示2个
//         centeredSlides: true,
//         pagination: '.swiper-pagination',//添加点
//     })


    // $(".five_two li").on("click", function () {
    //     i = $(this).index();
    //     $(this).siblings().removeClass("active");
    //     $(this).addClass("active");
    //     var $index = $(this).index();
    //     $(".five_three img").eq($index).stop().slideDown(200).siblings().slideUp(200);
    // })
    //
    //
    // $("input,select").on("focus", function () {
    //     $("footer").css("position", "initial");
    // }).on("blur", function () {
    //     $("footer").css("position", "fixed");
    // })


    $("#code .send").on("click", function () {
        var $phone = $("#phone").val();
        var mobileReg = /^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/;
        var timestamp = new Date().getTime();
        var token = sha512($phone + timestamp + 'onlyhi');
        $.ajax({
            url: CMSAPI + '/msg/sendSms' + '?token=' + token + '&time=' + timestamp,
            type: 'post',
            // //本地环境
            data: {sendPhone: $phone, sendType: 3},
            dataType: 'json',
            timeout: 5000,
            // 发起请求前就调用
            beforeSend: function (data) {
                if (!mobileReg.test($phone)) {
                    $("#phone").attr({placeholder: "请输入正确手机号码"}).focus().val("");
                    return false;
                }
                var second = 60;
                timerId = setInterval(function () {
                    $("#code .send").val(second-- + "s后重新获取").css("background", "#CCC").attr("disabled", true);
                    if (second <= 0) {
                        clearInterval(timerId);
                        $("#code .send").val("获取验证码").css({background: '#FFF',}).attr("disabled", false);
                    }
                }, 1000);
            },
            success: function (data) {
                if (data.result == 0) {
                    $code = data.message;
                } else if (data.result == 101) {
                    $("#code .send").attr({placeholder: "请重新获取"}).focus().val("");
                }
            },
            complete: function () {
                $("#code .send").css("borderColor", "#FFF").attr("disabled", false);
                // 还原状态
            },
            error: function () {
                alert('服务器繁忙，请稍后重试')
            }
        });
    })
    $(".submit").on("click", function () {
        // if (location.href.indexOf('sign1') != -1){
        //     $(".myForm .adid").val("FBQYMG4GWP");
        // }
        // else if(location.href.indexOf('sign2') != -1){
        //     $(".myForm .adid").val("C3HKUITRFT");
        // }
        // else if(location.href.indexOf('sign3') != -1){
        //     $(".myForm .adid").val("S087QM13LH");
        // }
        // else if(location.href.indexOf('signStar1.html') != -1){
        //     $(".myForm .adid").val("ELSXZKIHRI");
        // }
        // else if(location.href.indexOf('signStar2.html') != -1){
        //     $(".myForm .adid").val("LFNSWINQCS");
        // }
        // else if(location.href.indexOf('signStar3.html') != -1){
        //     $(".myForm .adid").val("OV2D6PBULU");
        // }
        // else{
        //     $(".myForm .adid").val(GetQueryString("adid"));
        // }
        // alert($(".myForm .adid").val());
        $(".myForm .jh").val(GetQueryString("jh"));
        $(".myForm .dy").val(GetQueryString("dy"));
        $(".myForm .keyNum").val(GetQueryString("keynum"));
        var mobileReg = /^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/;//手机号码验证
        var nameReg = /^([\u4e00-\u9fa5]{1,20}|[a-zA-Z\.\s]{1,20})$/;//名字验证
        var mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;//邮箱验证
        var formData = $('.myForm').serialize();
        var name = $("#name");
        var mobile = $("#phone");
        $.ajax({
            type: 'get',
            url: CMSAPI + "/NewNameList/createNewNameList",
            data: formData,
            dataType: "jsonp",
            jsonp: "jsoncallback",
            timeout: 5000,
            // 发起请求前就调用
            beforeSend: function (data) {
                // if ($(".myForm .adid").val() == UrlAdid || $(".myForm .adid").val() == UrlAdid1) {
                //     if ($("#code .code").val() !== $code) {
                //         $("#code .code").val("");
                //         $("#code .code").attr({placeholder: "请输入正确验证码"}).focus().val("").blur(function () {
                //             $(this).css("borderColor", "");
                //         });
                //         return false
                //     }
                // }
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
                    $(this).attr("input::-webkit-input-placeholder", "color", "#f40009");
                    $(".myForm .mobile").attr({placeholder: "手机号不正确"}).focus().val("").blur(function () {
                        $(this).css("borderColor", "");
                    });
                    return false;
                }
                if ($(".grade").val() == "请选择" || $(".kemu").val() == "请选择") {
                    alert("请选择年级和科目");
                    return false;
                }
            },
            success: function (data) {
                //var data = JSON.parse(data);
                if (data.code == 100) {

                  $(".myForm .name").val("");
                    $(".myForm .mobile").val("");
                    $(".grade").val("请选择");
                    $(".kemu").val("请选择");
                  location.href = "./sign_success.html";

                  // if(GetQueryString("adid") == UrlAdid6){
                  //   location.href = "./sign_success2.html";
                  // }else if(GetQueryString("adid") == UrlAdid10){
                  //     location.href = "./sign_success3.html";
                  // }else{
                  //     // if(GetQueryString("adid") == "YEFTNBPAEL"){
                  //     //     _taq.push({convert_id:"83158586012", event_type:"form"})
                  //     // }
                  // }

                } else if (data.code == 101) {
                    alert("预约失败！");
                    name.val("");
                    mobile.val("");
                    return false;
                }
                else {
                }
                console.log(1);
            },
            complete: function () { // 请求完成时会调用
                // 还原状态
                console.log(2);
            },
            error: function () {
                console.log(3);
              alert('服务器繁忙，请稍后重试')
                // window.location.href = "./error.html";
            }
        });
    });
})
