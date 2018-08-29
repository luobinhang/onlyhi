$(function () {

    //手动输入框修改
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

    $("input,select").on("focus", function () {
        $(this).css("border", "1px solid #333767")
    });

    $("input,select").on("blur", function () {
        $(this).css("border", "1px solid #CCC");
    });

    //获取省市区
    $.ajax({
        type: "get",
        data: {parentCode: 0},
        url: CRMAPI + "/client/tcTeacher/getAreaByParatCode",
        success: function (data) {
            var data = JSON.parse(data)
            $(data.data).each(function (i, v) {
                if (data.code == 100) {
                    $("#province").find("select").html("");
                    $("#province").append($(" <option value=" + v.areaCode + ">" + v.areaName + "</option>"));
                }
            });
            $.ajax({
                type: "get",
                data: {parentCode: $("#province").val()},
                url: CRMAPI + "/client/tcTeacher/getAreaByParatCode",
                success: function (data) {
                    var data = JSON.parse(data)
                    $(data.data).each(function (i, v) {
                        if (data.code == 100) {
                            $("#city").find("select").html("");
                            $("#city").append($(" <option value=" + v.areaCode + ">" + v.areaName + "</option>"));
                        }
                    });
                    $.ajax({
                        type: "get",
                        data: {parentCode: $("#city").val()},
                        url: CRMAPI + "/client/tcTeacher/getAreaByParatCode",
                        success: function (data) {
                            var data = JSON.parse(data)
                            $(data.data).each(function (i, v) {
                                if (data.code == 100) {
                                    $("#district").find("select").html("");
                                    $("#district").append($(" <option value=" + v.areaCode + ">" + v.areaName + "</option>"));
                                }
                            });
                        },
                        error: function () {
                            alert("获取省市区列表失败");
                        },
                        complete: function () { // 请求完成时会调用

                        },
                    })
                },
                error: function () {
                    alert("获取省市区列表失败");
                }
            })

        },
        error: function () {
            alert("获取科目列表失败");
        }
    })
    //点击更改城市
    $(".college-city select").on("change", function () {
        var $this = $(this);
        var code = $(this).data("code");
        var areaCode = $this.val();
        $.ajax({
            type: "get",
            data: {parentCode: areaCode},
            url: CRMAPI + "/client/tcTeacher/getAreaByParatCode",
            success: function (data) {
                var data = JSON.parse(data)
                $this.next().html("");
                $(data.data).each(function (i, v) {
                    if (data.code == 100) {
                        $this.next().append($(" <option value=" + v.areaCode + ">" + v.areaName + "</option>"));

                        var areaCode1 = $this.next().val();
                        $.ajax({
                            type: "get",
                            data: {parentCode: areaCode1},
                            url: CRMAPI + "/client/tcTeacher/getAreaByParatCode",
                            success: function (data) {
                                var data = JSON.parse(data)
                                $this.next().next().html("");
                                $(data.data).each(function (i, v) {
                                    if (data.code == 100) {
                                        $this.next().next().append($(" <option value=" + v.areaCode + ">" + v.areaName + "</option>"));
                                    }
                                });
                            },
                            error: function () {
                                alert("获取省市区列表失败");
                            }
                        })
                    }
                });
            },
            error: function () {
                alert("获取省市区列表失败");
            }
        })
    })


    //获取所有学校
    $.ajax({
        type: "get",
        url: CRMAPI + "/client/tcTeacher/getAllSchool",
        timeout:5000,
        success: function (data) {
            var data = JSON.parse(data);
            if(data.code == 100){
                $('#editable-select').editableSelect({
                    effects: 'slide',
                    duration:200
                });
                $(data.data).each(function (i, v) {
                    $(".es-list").append(" <li class='es-visible'  value=" + v.schoolName + ">" + v.schoolName + "</li>")
                });
            }
        },
        error: function () {
            alert("获取学校列表失败");
        }

    })

    //联想输入院校
    $('#editable-select').editableSelect({
        effects: 'slide',
        duration:200,
        onblue:function () {
            alert(1);
        }
    });

    // 获取年级
    $.ajax({
        type: "get",
        url: CRMAPI + "/client/tcTeacher/getGrade",
        success: function (data) {
            var data = JSON.parse(data)
            $(data.data).each(function (i, v) {
                $("#grade").append($(" <option value=" + v.enumValue + ">" + v.enumName + "</option>"));
            });
        },
        error: function () {
            alert("获取年级列表失败");
        }
    });

    // 获取年级偏好
    $.ajax({
        type: "get",
        url: CRMAPI + "/client/tcTeacher/getGradePreference",
        success: function (data) {
            var data = JSON.parse(data)
            $(data.data).each(function (i, v) {
                $("#gradePreference").append($(" <option value=" + v.enumValue + ">" + v.enumName + "</option>"));
            });
        },
        error: function () {
            alert("获取年级偏好失败");
        }
    });

    // 获取科目
    $.ajax({
        type: "get",
        url: CRMAPI + "/client/tcTeacher/getAllSubject",
        success: function (data) {
            var data = JSON.parse(data)
            $(data.data).each(function (i, v) {
                $(".subject").append($(" <option value=" + v.uuid + ">" + v.enumName + "</option>"));
            });
        },
        error: function () {
            alert("获取科目列表失败");
        }
    });

    //发送请求Start
    $("#btn").on("click", function () {
        $("#agentType").val(GetQueryString("source"));
        var mobileReg = /^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/;
        var wechatReg=/^[a-zA-Z][a-zA-Z0-9_-]{5,}$|(1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8})/;
        var nameReg = /^([\u4e00-\u9fa5]{1,20}|[a-zA-Z\.\s]{1,20})$/;
        var mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        var formData = $('#Myform').serialize();
        var name = $("#name");
        var sex = $(".sex[name='sex']:checked");
        var mobile = $("#phone");
        var artsOrScience = $("#artsOrScience");//文理科
        var grade = $("#grade");//年级
        var major = $("#major");//专业
        var gradePreference = $("#gradePreference");//年级偏好
        var teachingSubject = $("#teachingSubject");//科目
        var button = $(this);
        var a = 0;
        $(".es-list li").each(function (i,v) {

            if($("#editable-select").val()  ===  $(v).html()){
                a = 1;
            };
        })
        $.ajax({
            type: 'post',
            url: CRMAPI + "/webapi/fullTimeTeacher/addFullTimeTeacher",
            data: formData,
            dataType: "json",
            timeout: 5000,
            // 发起请求前就调用
            beforeSend: function (data) {
                if (!name.val()) {
                    name.attr({placeholder: "名字不能为空"}).focus().val("");
                    return false;
                }
                if (!mobileReg.test(mobile.val())) {
                    button.attr("input::-webkit-input-placeholder", "color", "#FF0000");
                    mobile.attr({placeholder: "手机号不正确"}).focus().val("");
                    return false;
                }
                if (!sex.val()) {
                    alert("请选择性别")
                    return false;
                }
                if (!wechatReg.test($("#wechat").val())) {
                    $("#wechat").attr({placeholder: "请输入正确微信号"}).focus().val("");
                    return false;
                }
                if (!$("#qq").val()) {
                    $("#qq").focus().val("");
                }
                if (!mailReg.test($("#mail").val())) {
                    $("#mail").attr({placeholder: "请输入正确邮箱"}).focus().val("");
                    return false;
                }
                if (!artsOrScience.val()) {
                    artsOrScience.attr({placeholder: "请选择文理科"}).focus().val("");
                    return false;
                }
                if(a != 1){
                    alert("请重新在下拉框内勾择院校");
                    $("#editable-select").focus();
                    return false;
                }
                if (!nameReg.test($("#editable-select").val())) {
                    $("#editable-select").attr({placeholder: "请输入正确的院校"}).focus().val("");
                    return false;
                }
                if (!grade.val()) {
                    grade.attr({placeholder: "请选择年级"}).focus().val("");
                    return false;
                }
                if (!major.val()) {
                    major.attr({placeholder: "请填写专业"}).focus().val("");
                    return false;
                }
                if (!gradePreference.val()) {
                    gradePreference.attr({placeholder: "请选择年级偏好"}).focus().val("");
                    return false;
                }
                if (!teachingSubject.val()) {
                    teachingSubject.attr({placeholder: "请选择科目"}).focus().val("");
                    return false;
                }



                // if (!$('#teachingSubject option:selected').val()) {
                //     $("#teachingSubject").focus();
                //     return false;
                // }
                // if(!$("#wechat").val() || !$("#qq").val()){
                //     alert("微信或qq不能为空");
                //     return false;
                // }
                button.html('正在提交...').addClass("disabled").attr("disabled", true);
            },
            success: function (data) {
                //var data = JSON.parse(data);
                if (data.code == 100) {
                    button.html('提交').removeClass('disabled').attr("disabled", false);
                    $(".first").hide();
                    // $("#qqLink").attr("href", data.data.qqLink)
                    // $("#QQgroup").html("QQ群" + data.data.qqGroup);
                    $(".seccess").show();
                } else {
                    if (data.code.msg == "该手机号码已经存在") {
                        alert("由于您手机号重复无法报名，如您想再次报名预约试讲，或联系微信公众号“昂立在线讲师平台”。");
                    } else {
                        alert(data.msg);
                    }
                }
                console.log(1);
            },
            complete: function () { // 请求完成时会调用
                // 还原状态
                button.html('提交').removeClass('disabled').attr("disabled", false);
            },
            error: function () {
                console.log(3);
                alert("提交失败  请重新提交");
                // window.location.href = "./error.html";
            }
        });
    });
    //发送请求End
    $("#res").on("click",function () {
        window.location.reload();
    })
})
// 分享

// $(function () {
//     var df = new FormData();
//     df.append('sourceURL',window.location);
//     df.append('activityNo','teachBM');
//     $.ajax({
//         url:'http://mkt.hicourses.pw/activity/activityPage',
//         data:df,
//         type:'post',
//         contentType: false,
//         dataType:'json',
//         processData: false,
//         success:function(data){
//             //页面加载 返回以下信息
//             wx.config({
//                 debug: false,
//                 appId: data.token,
//                 timestamp: data.timestamp,
//                 nonceStr: data.nonceStr,
//                 signature: data.signature,
//                 jsApiList: [
//                     // 所有要调用的 API 都要加到这个列表中
//                     "onMenuShareTimeline",
//                     "onMenuShareAppMessage"
//                 ]
//             });
//
//             wx.ready(function(){
//                 wx.onMenuShareTimeline({
//                     title: '嗨课堂兼职老师报名', // 分享标题
//                     link: "http://"+ url +"/t/teacher-sign.html", // 分享链接
//                     imgUrl: 'http://'+ url +'/t/img/teacher-sign/teacher-wx.jpg', // 分享图标
//                     success: function () {
//                         alert("分享成功");
//                     },
//                     cancel: function () {
//                         // 用户取消分享后执行的回调函数
//                     }
//                 });
//
//                 wx.onMenuShareAppMessage({
//                     title: '嗨课堂兼职老师报名', // 分享标题
//                     desc: '做老师，其实未必要出门上班。足不出户，月薪5000+。', // 分享描述
//                     link:  'http://'+url+'/t/teacher-sign.html', // 分享链接
//                     imgUrl: 'http://'+url+'/t/img/teacher-sign/teacher-wx.jpg', // 分享图标
//                     type: 'link', // 分享类型,music、video或link，不填默认为link
//                     dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
//                     success: function () {
//                         alert("分享成功");
//                     },
//                     cancel: function () {
//                         // 用户取消分享后执行的回调函数
//                     }
//                 });
//             });
//         }
//     });
//
// })