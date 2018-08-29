$(function () {
  if(GetQueryString("source")){
        $("#agentName").val(GetQueryString("source")).attr("readonly",true).css("color","#CCC");
        $(".select4").hide();
    }
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
        $(this).css("border", "1px solid #353969")
    });

    $("input,select").on("blur", function () {
        $(this).css("border", "1px solid #CCC");
    });
    //联想输入院校
    $('#editable-select').editableSelect({
        effects: 'slide',
        duration:200,
        onblue:function () {
            alert(1);
        }
    });
    //获取科目Start

    $.ajax({
        type: "get",
        url: CRMAPI + "/client/tcTeacher/getAllSubject",
        success: function (data) {
            var data = JSON.parse(data)
            $(data.data).each(function (i, v) {
                $(".select").append($(" <option value=" + v.uuid + ">" + v.enumValue + "</option>"));
            });
        },
        error: function () {
            console.log("获取志愿列表失败");
        }

    })
    //获取科目End
    //发送请求Start
    $("#btn").on("click", function () {
        $("#agentType").val(GetQueryString("type"));
        var mobileReg = /^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/;
        var wechatReg=/^[a-zA-Z][a-zA-Z0-9_-]{5,}$|(1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8})/;
        var nameReg = /^([\u4e00-\u9fa5]{1,20}|[a-zA-Z\.\s]{1,20})$/;
        var mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        var formData = $('#Myform').serialize();
        var name = $("#name");
        var mobile = $("#phone");
        var button = $(this);
        var a = 0;
        $(".es-list li").each(function (i,v) {

            if($("#editable-select").val()  ===  $(v).html()){
                a = 1;
            };
        })
        $.ajax({
            type: 'post',
            url: CRMAPI + "/client/tcTeacher/addTeacher",
            data: formData,
            dataType: "json",
            timeout: 5000,
            // 发起请求前就调用
            beforeSend: function (data) {
                if(a != 1){
                    alert("请重新在下拉框内勾择院校");
                    $("#editable-select").focus();
                    return false;
                }
                if (!name.val()) {
                    name.attr({placeholder: "名字不能为空"}).focus().val("");
                    return false;
                }
                if (!mobileReg.test(mobile.val())) {
                    button.attr("input::-webkit-input-placeholder", "color", "#FF0000");
                    mobile.attr({placeholder: "手机号不正确"}).focus().val("");
                    return false;
                }
                if (!mailReg.test($("#mail").val())) {
                    $("#mail").attr({placeholder: "请输入正确邮箱"}).focus().val("");
                    return false;
                }
                if (!wechatReg.test($("#wechat").val())) {
                    $("#wechat").attr({placeholder: "请输入正确微信号"}).focus().val("");
                    return false;
                }
                if (!nameReg.test($("#editable-select").val())) {
                    $("#editable-select").attr({placeholder: "请输入正确的院校"}).focus().val("");
                    return false;
                }
                if (!$("#qq").val()) {
                    $("#qq").focus().val("");
                }
                if (!$('#teachingSubject option:selected').val()) {
                    $("#teachingSubject").focus();
                    return false;
                }
                if(!$("#wechat").val() || !$("#qq").val()){
                    alert("微信或qq不能为空");
                    return false;
                }
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
})
