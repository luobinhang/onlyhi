/**
 * Created by ShenBo on 2017/11/17.
 */
$(function () {
    function REM() {
        var rem = $(window).width() / 7.5;
        var fs = rem >= 137 ? 137 : rem;
        $("html").css("fontSize", fs);
    }

    REM();
    $(window).on("resize", function () {
        REM();
    });
})
$(function () {
    var msg = 0;//验证码
    var tcName =sessionStorage.getItem("tcName") || '';//老师姓名
    var uuid = sessionStorage.getItem("uuid") || '';//老师uuid
    var trainingQuestionNumber = sessionStorage.getItem("trainingQuestionNumber") || '';//考试编号

    // var Url = 'http://192.168.3.138:8080/onlyhi-admin'//数据请求地址
    // var UrlMsg = 'http://192.168.3.138:8080/onlyhi-admin'//短信数据请求地址
    // if (location.host == "www.onlyhi.cn") {
    //     Url = 'http://crmapi.onlyhi.cn';//正式环境
    //     UrlMsg = 'http://cmsapi.onlyhi.cn';//短信正式环境
    // } else if (location.host == "www.onlyeduhi.cn") {
    //     Url = 'http://api.onlyeduhi.cn';//测试环境
    //     UrlMsg = 'http://cmsapi.onlyeduhi.cn';//短信测试环境
    // } else if (location.host == "192.168.3.65:8080") {
    //     Url = 'http://192.168.3.138:8080/onlyhi-admin'//数据请求地址
    //     UrlMsg = 'http://192.168.3.138:8080/onlyhi-admin'//短信数据请求地址
    // } else if (location.host === 'www.haiketang.net') {//搬迁环境
    //     Url = 'http://crmapi.onlyhi.cn';
    //     UrlMsg = 'http://cmsapi.onlyhi.cn';//短信
    // } else {
    //   Url = 'http://api.onlyeduhi.cn';//测试环境
    //   UrlMsg = 'http://cmsapi.onlyeduhi.cn';//短信测试环境
    // }

    if(sessionStorage.getItem("tcName") && sessionStorage.getItem("uuid")){
      $('.login,.login_pass').addClass("hide");
      $('#load').show()
      setTimeout(function () {
        $('#load').hide()
        $(".header").remove();
      },3000)
      $('#name i').html(sessionStorage.getItem("tcName"));
      $('#phone i').html(sessionStorage.getItem("tcPhone"));
      if (!sessionStorage.getItem("trainingQuestionNumber")  || sessionStorage.getItem("trainingQuestionNumber")  == 0) {//未考试
        topic(CRMAPI + '/webapi/question/getQuestionListByType?questionType=1')//获取题目
      } else {//获取答案
        topic(CRMAPI + '/webapi/question/getAnswerRecordByNumber', "?number=" + sessionStorage.getItem("trainingQuestionNumber"));
      }
      $("body,html").css({"height": "auto", "overflow": "visible"});

    }



//        渲染题目
    function topic(url, answer) {
        if (!answer) {
            answer = ''
        }
        if (answer) {
            $("input,span").attr("disabled", "true")
            $("span").unbind("click");
            $(".btnSpan ").remove();
        }
        $.ajax({
            url: url + answer,
            type: 'get',
          timeout: 600000,
            dataType: 'json',
            success: function (res) {
                var a = '';

                $(res.data.questionList).each(function (i, v) {
                    i = i + 1
                    var youStr = '';
                    var str = '';
                    var numStr = 0;
                    var rNumStr = 0;
                    if (answer) {

                        $('#name i').html(sessionStorage.getItem("tcName"));
                        $('#phone i').html(sessionStorage.getItem("tcPhone"));
                        $("#score").show().find("i").html(res.data.score)
                        youStr = '<span class="youQuestion">答卷人答案：</span>'
                        $(v.answerRecord).each(function (i, v) {
                            if (v.answerContent) {
                                if (v.answerContent == "false") {
                                    youStr += "<span class='youQuestion'>否,</span>"
                                } else if (v.answerContent == "true") {
                                    youStr += "<span class='youQuestion'>是,</span>"
                                } else {
                                    youStr += "<span class='youQuestion'>" + v.answerContent + "</span>" + ","
                                }
                                numStr +=v.score
                            }
                        })

                        str = '<span class="rightQuestion">正确答案：</span>'
                        $(v.answerContent).each(function (i, v) {
                            if (v.content) {
                                if (v.content == "false") {
                                    str += "<span>否,</span>"
                                } else if (v.content == "true") {
                                    str += "<span>是,</span>"
                                } else {
                                    str += "<span>" + v.content + "</span>" + ","
                                }
                                rNumStr +=v.score
                            }
                        })
                    }

                    if (v.itemType == 1) {//填空题
                        a += '<li class="textLi"><p class="textInput">' + i + '，' + v.content+'<span class="rightQuestion">分数（'+ v.score +'）</span>' +'</br>' + youStr + str+'</br>' + '<span class="youQuestion">本题得分：'+numStr+'</span>' + '</p></li>'
                    } else if (v.itemType == 2) {//选择题
                        var b = ''
                        $(v.item).each(function (index, val) {
                            b += '<span class="btnSpan" data-questionNumber="' + val.questionNumber + '" data-itemType="' + val.itemType + '" data-contentCode="' + val.contentCode + '">' + val.content + '</span>'
                        })
                        a += '<li><p>' + i + '，' + v.content+'<span class="rightQuestion">分数（'+ v.score +'）</span>' +'</br>'+ youStr + str+'</br>' +'<span class="youQuestion">本题得分：'+ numStr +'</span>' + '</p><div class="question_tab question_tab_one">' +
                            b +
                            '</div></li>'
//`
                    } else if (v.itemType == 3) {//多选题
                        var b = ''
                        $(v.item).each(function (index, val) {
                            b += '<span class="btnSpan" data-questionNumber="' + val.questionNumber + '" data-contentCode="' + val.contentCode + '">' + val.content + '</span>'
                        })
                        a += '<li><p>' + i + '，' + v.content+'<span class="rightQuestion">分数（'+ v.score +'）</span>' +'</br>' + youStr + str+'</br>' +'<span class="youQuestion">本题得分：'+numStr +'</span>' + '</p><div class="question_tab question_tab_two">' +
                            b +
                            '</div></li>'
                    } else if (v.itemType == 4) {//判断题
                        var b = ''
                        $(v.item).each(function (index, val) {
                            b += '<span class="btnSpan" data-itemType="' + v.itemType + '" data-questionNumber="' + val.questionNumber + '" data-contentCode="' + val.contentCode + '">' + val.content + '</span>'
                        })
                        a += '<li><p>' + i + '，' + v.content+'<span class="rightQuestion">分数（'+ v.score +'）</span>' +'</br>' + youStr + str+'</br>' +'<span class="youQuestion">本题得分：'+numStr+'</span>' + '</p><div class="question_tab question_tab_one">' +
                            b +
                            '</div></li>'
                    }
                })
                $(".question_page ul").html(a)
            },
            error: function (res) {
            },
            complete: function () {
                $(".question_page .textLi").each(function (i, v) {
                    i = i + 1
//                    console.log($($(v).find("input")));
                    $(v).find("input").each(function (index, val) {
                        index = index + 1
                        $(val).data("questionNumber", i)
                        $(val).data("contentCode", index)
//                            console.log($(val).data("contentCode"));

                    })
                })
            }
        })
    }

    // 获取url链接参数
    function GetQueryString(name) {
        // 如果链接没有参数，或者链接中不存在我们要获取的参数，直接返回空
        if (location.href.indexOf("?") == -1 || location.href.indexOf(name + '=') == -1) {
            return '';
        }

        // 获取链接中参数部分
        var queryString = location.href.substring(location.href.indexOf("?") + 1);
        queryString = decodeURI(queryString);

        // 分离参数对 ?key=value&key2=value2
        var parameters = queryString.split("&");

        var pos, paraName, paraValue;
        for (var i = 0; i < parameters.length; i++) {
            // 获取等号位置
            pos = parameters[i].indexOf('=');
            if (pos == -1) {
                continue;
            }

            // 获取name 和 value
            paraName = parameters[i].substring(0, pos);
            paraValue = parameters[i].substring(pos + 1);

            // 如果查询的name等于当前name，就返回当前值，同时，将链接中的+号还原成空格
            if (paraName == name) {
                return unescape(paraValue.replace(/\+/g, " "));
            }
        }
        return '';
    }

    var number = GetQueryString("number");

//        获取题目
//        topic(Url+'/client/question/getQuestionListByType?questionType=1')
//        获取答案
//        topic(Url+'/client/question/getAnswerRecordByNumber', "number=2")
    $("body").on("click", ".question_tab_one span", function () {
        $(this).toggleClass("active").siblings().removeClass("active")
    })
    $("body").on("click", ".question_tab_two span", function () {
        $(this).toggleClass("active")
    })

//        提交答案
    $("body").on("click", ".btn", function () {

        var arr = [];
        var arr1 = [];

//            循环填空题
        $(".textInput input").each(function (i, v) {
            var $this = $(v);
            if ($this.val()) {
                arr1.push({
                    "questionNumber": $this.data("questionNumber"),
                    "itemType": 1,
                    "contentCode": $this.data("contentCode"),
                    "userUuid": uuid,
                    "userName": tcName,
                    "answerContent": $this.val()
                })
            }
        })
//            循环选择题
        $(".question_tab span").each(function (i, v) {

            var $this = $(v);

            if ($this.parent().hasClass("question_tab_one") && $this.hasClass("active")) {//单选
                arr.push({
                    "questionNumber": $this.data("questionnumber"),
                    "itemType": $this.data("itemtype") == '' ? 2 : $this.data("itemtype"),
                    "contentCode": $this.data("contentcode"),
                    "userUuid": uuid,
                    "userName": tcName,
                    "answerContent": $this.data("contentcode")
                })
            }

            if ($this.parent().hasClass("question_tab_two")) {//多选
                if ($this.hasClass("active")) {
                    arr.push({
                        "questionNumber": $this.data("questionnumber"),
                        "itemType": 3,
                        "contentCode": $this.data("contentcode"),
                        "userUuid": uuid,
                        "userName": tcName,
                        "answerContent": $this.data("contentcode")
                    })
                }
            }
        })

        var answerList = JSON.stringify(arr1.concat(arr));
//            answerList = JSON.parse(answerList);
//            console.log(answerList);
        $(".btn").attr('disable','true');
        $.ajax({
            url: CRMAPI + '/webapi/question/addOrUpdateAnswerRecord',
            type: 'post',
          timeout: 600000,
            // //本地环境
            data: {"answerList": answerList},
            dataType: 'json',
          beforeSend:function () {
            $('#load').show();
          },
            success: function (res) {
                if (res.code == 100) {
                    var data = res.data;
                    sessionStorage.setItem("trainingQuestionNumber",data.numberCode)
                    $(".btn").attr('disable','false');
                    window.location.reload();
                } else {
                    alert(res.msg)
                }
            },
            complete: function () {
              $('#load').hide();
            },
            error: function () {
            }
        })
    })

//        获取验证码
    $(".login .code button").on("click", function () {
        var $phone = $(".login .phone").val();
        var mobileReg = /^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/;
        // 时间戳
        var timestamp = new Date().getTime();
        var token = sha512($phone + timestamp + 'onlyhi');

        $.ajax({
            url: CMSAPI + '/msg/sendSms' + '?token=' + token + '&time=' + timestamp,
            type: 'post',
          timeout: 10000,
            // //本地环境
            data: {sendPhone: $phone, sendType: 2},
            dataType: 'json',
            timeout: 5000,
            // 发起请求前就调用
            beforeSend: function (data) {
                if (!mobileReg.test($phone)) {
                    $(".login .phone").attr({placeholder: "请输入正确手机号码"}).focus().val("");
                    return false;
                }
                var second = 60;
                $(".login .code button").html(second-- + "s后重新获取").css("background", "#CCC").attr("disabled", true);
                timerId = setInterval(function () {
                    $(".login .code button").html(second-- + "s后重新获取").css("background", "#CCC").attr("disabled", true);
                    if (second <= 0) {
                        clearInterval(timerId);
                        $(".login .code button").html("获取验证码").css({background: '#f40009'}).attr("disabled", false);
                    }
                }, 1000);
            },
            success: function (data) {
                console.log(data);
                if (data.result == 0) {
                    msg = data.message

                } else if (data.result == 101) {
                    $(".login .code input").attr({placeholder: "请重新获取"}).focus().val("");
                } else {
                    alert(data.msg)
                }
            },
            complete: function (res) {
                $(".login .code button").css("borderColor", "#f40009").attr("disabled", false);
                // 还原状态
                console.log(res);
            },
            error: function (res) {
                console.log(res);
            }
        });
    })

    // 判断是否由Url跳转
    if (number) {
        topic(CRMAPI + '/webapi/question/getAnswerRecordByNumber', "?number=" + number);
      $('.login,.login_pass').addClass("hide");
      $('#load').show()
      setTimeout(function () {
        $('#load').hide()
        $(".header").remove();
      },3000)
        // $(".header").remove();
        $(".btnSpan ").remove();
        $("body,html").css({"height": "auto", "overflow": "visible"});
    }
//        登录
    $(".login .login_btn").on("click", function () {
        var code = $(".login .code input").val();
        var phone = $(".login .phone").val();
        console.log(0);
        $.ajax({
            url: CRMAPI + '/webapi/answerlogin/answerLogin?phone=' + phone + '&code=' + code,
            type: 'get',
          timeout: 10000,
            // //本地环境
            dataType: 'json',
            timeout: 5000,
            // 发起请求前就调用
               beforeSend: function (data) {
                   console.log(1);
               },
            success: function (res) {
                if (res.code == 100) {
                    var data = res.data;
                    tcName = data.tcName;
                    tcPhone = data.phone;
                    uuid = data.uuid;
                    trainingQuestionNumber = data.trainingQuestionNumber;
                    $('#name i').html(tcName);
                    $('#phone i').html(data.phone);

                    //
                    // sessionStorage.setItem("tcName",tcName);
                    // sessionStorage.setItem("uuid",uuid);
                    if(tcName){
                      sessionStorage.setItem("tcName",tcName);
                    }
                    if(tcPhone){
                      sessionStorage.setItem("tcPhone",tcPhone);
                    }
                    if(uuid){
                      sessionStorage.setItem("uuid",uuid);
                    }
                    if(trainingQuestionNumber){
                      sessionStorage.setItem("trainingQuestionNumber",trainingQuestionNumber);
                    }


                    if (!data.trainingQuestionNumber || data.trainingQuestionNumber == 0) {//未考试
                        topic(CRMAPI + '/webapi/question/getQuestionListByType?questionType=1')//获取题目
                    } else {//获取答案
//+data.trainingQuestionNumber
                        topic(CRMAPI + '/webapi/question/getAnswerRecordByNumber', "?number=" + data.trainingQuestionNumber)
                    }
                    $('.login,.login_pass').addClass("hide");
                  $('#load').show()
                  setTimeout(function () {
                    $('#load').hide()
                      $(".header").remove();
                    },3000)
                    // $(".content").show();
                    $("body,html").css({"height": "auto", "overflow": "visible"});
                } else {
                    alert(res.msg)
                }
            },
            complete: function () {
                $(".login .code button").css("borderColor", "#f40009").attr("disabled", false);
            },
            error: function () {
            }
        });
    })
//        登录
    $(".login_pass .login_btn").on("click", function () {

        var phone = $(".login_pass .name").val();
        var pssword = $(".login_pass .pass").val();
        $.ajax({
            url: CRMAPI + '/webapi/answerlogin/teacherLogin?phone=' + phone + '&pssword=' + pssword,
            type: 'get',
          timeout: 10000,
            // //本地环境
            dataType: 'json',
            timeout: 5000,
            // 发起请求前就调用
            success: function (res) {
                if (res.code == 100) {
                    var data = res.data;
                    tcName = data.tcName;
                    tcPhone = data.phone;
                    uuid = data.uuid;
                    trainingQuestionNumber = data.trainingQuestionNumber;
                    $('#name i').html(tcName);
                    $('#phone i').html(data.phone);

                    //
                    // sessionStorage.setItem("tcName",tcName);
                    // sessionStorage.setItem("uuid",uuid);
                    if(tcName){
                      sessionStorage.setItem("tcName",tcName);
                    }
                    if(tcPhone){
                      sessionStorage.setItem("tcPhone",tcPhone);
                    }
                    if(uuid){
                      sessionStorage.setItem("uuid",uuid);
                    }
                    if(trainingQuestionNumber){
                      sessionStorage.setItem("trainingQuestionNumber",trainingQuestionNumber);
                    }


                    if (!data.trainingQuestionNumber || data.trainingQuestionNumber == 0) {//未考试
                        topic(CRMAPI + '/webapi/question/getQuestionListByType?questionType=1')//获取题目
                    } else {//获取答案
//+data.trainingQuestionNumber
                        topic(CRMAPI + '/webapi/question/getAnswerRecordByNumber', "?number=" + data.trainingQuestionNumber)
                    }
                    $('.login,.login_pass').addClass("hide");
                  $('#load').show()
                  setTimeout(function () {
                    $('#load').hide()
                      $(".header").remove();
                    },3000)
                    // $(".content").show();
                    $("body,html").css({"height": "auto", "overflow": "visible"});
                } else {
                    alert(res.msg)
                }
            },
            complete: function () {
                $(".login .code button").css("borderColor", "#f40009").attr("disabled", false);
            },
            error: function () {
            }
        });
    })

})




