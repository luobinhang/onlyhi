
function card(idCard){

    idCard = trim(idCard.replace(/(^\s*)|(\s*$)/g, ""));               //去掉字符串头尾空格
    if (idCard.length == 15) {
        return isValidityBrithBy15IdCard(idCard);       //进行15位身份证的验证
    } else if (idCard.length == 18) {
        var a_idCard = idCard.split("");

        // 得到身份证数组
        if(isValidityBrithBy18IdCard(idCard)&&isTrueValidateCodeBy18IdCard(a_idCard)){   //进行18位身份证的基本验证和第18位的验证
            return true;
        }else {
            return false;
        }
    } else {
        return false;
    }
}

var Wi = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1 ];    // 加权因子
var ValideCode = [ 1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2 ];            // 身份证验证位值.10代表X
/**
 * 判断身份证号码为18位时最后的验证位是否正确
 * @param a_idCard 身份证号码数组
 * @return
 */
function isTrueValidateCodeBy18IdCard(a_idCard) {
    var sum = 0;                             // 声明加权求和变量
    if (a_idCard[17].toLowerCase() == 'x') {
        a_idCard[17] = 10;                    // 将最后位为x的验证码替换为10方便后续操作
    }
    for ( var i = 0; i < 17; i++) {
        sum += Wi[i] * a_idCard[i];            // 加权求和
    }
    valCodePosition = sum % 11;                // 得到验证码所位置
    if (a_idCard[17] == ValideCode[valCodePosition]) {
        return true;
    } else {
        return false;
    }
}
/**
 * 验证18位数身份证号码中的生日是否是有效生日
 * @param idCard 18位书身份证字符串
 * @return
 */
function isValidityBrithBy18IdCard(idCard18){
    var year =  idCard18.substring(6,10);
    var month = idCard18.substring(10,12);
    var day = idCard18.substring(12,14);
    var temp_date = new Date(year,parseFloat(month)-1,parseFloat(day));
    // 这里用getFullYear()获取年份，避免千年虫问题
    if(temp_date.getFullYear()!=parseFloat(year)
        ||temp_date.getMonth()!=parseFloat(month)-1
        ||temp_date.getDate()!=parseFloat(day)){
        return false;
    }else{
        return true;
    }
}
/**
 * 验证15位数身份证号码中的生日是否是有效生日
 * @param idCard15 15位书身份证字符串
 * @return
 */
function isValidityBrithBy15IdCard(idCard15){
    var year =  idCard15.substring(6,8);
    var month = idCard15.substring(8,10);
    var day = idCard15.substring(10,12);
    var temp_date = new Date(year,parseFloat(month)-1,parseFloat(day));
    // 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法
    if(temp_date.getYear()!=parseFloat(year)
        ||temp_date.getMonth()!=parseFloat(month)-1
        ||temp_date.getDate()!=parseFloat(day)){
        return false;
    }else{
        return true;
    }
}
window.onload =function () {
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

    $(document).ready(function () {
        $("#uuid").val(GetQueryString("source"))
//        点击关闭移步官网首页
        $("#clone").on("click", function () {
            window.location.href = skip;
        })
      //input,select 获取焦点颜色
        $("input:not('.readonly'),select").on("focus", function () {
            $(this).css("border", "1px solid #CCC");
        });
        $("input:not('.readonly'),select").on("blur", function () {
            $(this).css("border", "1px solid #CCC");
        });
        //预览是点击放大图片
        $(function () {
            $(document).on("click", ".up-section", function () {
                var $this = $(this).find(".up-img").attr("src");
                $("aside").show();
                $(".mask-content").hide();
                $("#show").attr("src", $this).show();
            })
            $(document).on("click", "#show", function () {
                $(this).hide();
                $(".mask-content").show();
                $("aside").hide();
            })
        });
        //获取所有学校
        $.ajax({
            type: "get",
            url: CRMAPI + "/client/tcTeacher/getAllScholl",
            success: function (data) {
                var data = JSON.parse(data);
                if(data.code == 100){
                    $(data.data).each(function (i, v) {
                        $('#editable-select').append($(" <option value=" + v.enumValue + ">" + v.enumValue + "</option>"));
                    });
                    $('#editable-select').editableSelect({
                        effects: 'slide',
                        duration:200
                    });
                }
            },
            error: function () {
                alert("获取志愿列表失败");
            }

        })

        //获取所有科目
        $.ajax({
            type: "get",
            url: CRMAPI + "/client/tcTeacher/getAllSubject",
            success: function (data) {
                var data = JSON.parse(data)
                $(data.data).each(function (i, v) {
                    $(".subject select").append($(" <option value=" + v.uuid + ">" + v.enumValue + "</option>"));
                });
            },
            error: function () {
                alert("获取科目列表失败");
            }
        });
        //图片提交后台
        $(".file").each(function (i, v) {
            var i = i + 1;
            var value = "fileList[" + i + "]" + ".id";
            var num = "fileList[" + i + "]" + ".purpose";
            var purpose = i + 1;
            $("#file" + i).takungaeImgup({
                formData: {
                    "path": "artScene/",
                    name: value,
                    num: num,
                    purpose: purpose
                },
                url: CRMAPI + "/client/tcTeacher/uploadFile",
                success: function (data) {
                },
                error: function (err) {
                    alert(err);
                }
            });
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
                    $this.parent().next().find("select").html("");
                    $(data.data).each(function (i, v) {
                        if (data.code == 100) {
                            $this.parent().next().find("select").append($(" <option value=" + v.areaCode + ">" + v.areaName + "</option>"));

                            var areaCode1 = $this.parent().next().find("select").val();
                            $.ajax({
                                type: "get",
                                data: {parentCode: areaCode1},
                                url: CRMAPI + "/client/tcTeacher/getAreaByParatCode",
                                success: function (data) {
                                    var data = JSON.parse(data)
                                    $this.parent().next().next().find("select").html("");
                                    $(data.data).each(function (i, v) {
                                        if (data.code == 100) {
                                            $this.parent().next().next().find("select").append($(" <option value=" + v.areaCode + ">" + v.areaName + "</option>"));
                                        }
                                    });
                                },
                                error: function () {
                                    alert("获取科目列表失败");
                                }
                            })
                        }
                    });
                },
                error: function () {
                    alert("获取科目列表失败");
                }
            })

        })
        //获取老师信息
        if(GetQueryString("source")){
            $.ajax({
                type: "get",
                url: CRMAPI + "/client/tcTeacher/getTeacherInfoByUuid",
                data: {uuid: GetQueryString("source") || 0},
                success: function (data) {
                    var data = JSON.parse(data);
                    var dataFlag = data.data;

                    data = data.data.data;
                    $("#id").attr("value",data.id||1);
                    var data0 = data;
                    $(".tcName").val(data.tcName);
                    $(".phone").val(data.phone);
                    $(".qq").val(data.qq);
                    $(".wechat").val(data.wechat);
                    $(".email").val(data.email);
                    $(".province").val(data.province);
                    $(".city").val(data.city);
                    $(".district").val(data.district);
                    $(".artsOrScience").val(data.artsOrScience);
                    $(".es-input").val(data.schoolLocation);
                    $(".education").val(data.education);
                    $(".grade").val(data.grade);
                    $(".major").val(data.major);
                    $(".highestEducation").val(data.highestEducation);
                    $(".teachingSubject").val(data.teachingSubject);
                    $(".secondSubject").val(data.secondSubject);
                    $(".thirdSubject").val(data.thirdSubject);
                    $(".gradePreference").val(data.gradePreference);
                    $(".idNumber").val(data.idNumber);
                    $(".cardNumber").val(data.cardNumber);
                    $(".bankAddress").val(data.bankAddress);
//                根据当前的id获取对应的城市列表
                    $.ajax({
                        type: "get",
                        data: {parentCode: 0},
                        url: CRMAPI + "/client/tcTeacher/getAreaByParatCode",
                        success: function (data) {
                            var data = JSON.parse(data);

                            $(data.data).each(function (i, v) {
                                if (data.code == 100) {
                                    $("#province").find("select").html("");
                                    $("#province").append($(" <option value=" + v.areaCode + ">" + v.areaName + "</option>"));
                                }
                            });
                            $.ajax({
                                type: "get",
                                data: {parentCode: data0.province},
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
                                        data: {parentCode: data0.city},
                                        url: CRMAPI + "/client/tcTeacher/getAreaByParatCode",
                                        success: function (data) {
                                            var data = JSON.parse(data)
                                            $(data.data).each(function (i, v) {
                                                if (data.code == 100) {
                                                    $("#area").find("select").html("");
                                                    $("#area").append($(" <option value=" + v.areaCode + ">" + v.areaName + "</option>"));
                                                }
                                            });
                                        },
                                        error: function () {
                                            alert("获取科目列表失败");
                                        },
                                        complete: function () { // 请求完成时会调用
                                            $(".province").val(data0.province);
                                            $(".city").val(data0.city);
                                            $(".district").val(data0.district);
                                        },
                                    })
                                },
                                error: function () {
                                    alert("获取科目列表失败");
                                }
                            })

                        },
                        error: function () {
                            alert("获取科目列表失败");
                        }
                    })
                    //根据返回的图片显示信息
                    $(data.fileList).each(function (i, v) {
                        var purpose = v.purpose - 1;
                        var $section = "<section class='up-section fl'>" +
                            "<span class='up-span'></span><img class='close-upimg' src='./images/a7.png'>" +
                            "<img class='up-img' src="+ v.fileAddress+"><p class='img-name-p'>" + v.fileOriginalName + "</p>" +
                            "<input id='taglocation' name='taglocation' value='' type='hidden'>" +
                            "<input id='tags' name='tags' value='' type='hidden'>" +
                            "<input type='text' style='display:none;' name='fileList[" + purpose + "].id value=" + v.id + ">" +
                            "<input type='text' style='display:none;' name='fileList[" + purpose + "].purpose value=" + v.purpose + ">" +
                            "</section>";
                        $(".z_file").eq(v.purpose - 2).before($section).css("display", "none");
                    })
                    //判断隐藏显示提交
                    if (dataFlag.flag == "fail") {
                        $(".sub").hide();
                    } else{
                        $(".sub").show();
                    }
                },
                error: function () {
                    alert("获取科目列表失败");
                }
            })

        }else {
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
                                            $("#area").find("select").html("");
                                            $("#area").append($(" <option value=" + v.areaCode + ">" + v.areaName + "</option>"));
                                        }
                                    });
                                },
                                error: function () {
                                    alert("获取科目列表失败");
                                },
                                complete: function () { // 请求完成时会调用

                                },
                            })
                        },
                        error: function () {
                            alert("获取科目列表失败");
                        }
                    })

                },
                error: function () {
                    alert("获取科目列表失败");
                }
            })
        }
        //提交按钮
        $("#btn").on("click", function () {

            var formData = $('#teache-info').serialize();
            $.ajax({
                type: 'get',
                url: CRMAPI + "/client/tcTeacher/perfectTeacher",
                data: formData,
                dataType: "json",
                timeout: 5000,
                // 发起请求前就调用
                beforeSend: function (data) {
                    if(card($(".idNumber").val())){
                        alert(1)
                    }else if($(".up-section").length < 7){
                        alert("请上传全部照片");
                        return false
                    }else if (!$(".qq").val() || !$(".wechat").val() || !$(".email").val() || !$(".es-input").val() || !$(".major").val() || !$(".idNumber").val() || !$(".cardNumber").val() || !$(".bankAddress").val()) {
                        alert("请补全信息！！！");
                        return false;
                    }
                },
                success: function (data) {
                    if(data.code == 100){
                        $(".center").hide();
                        $("html,body,.all").addClass("height");
                        $(".success").show();
                    }else {
                        alert(data.msg);
                    }

                },
                error: function (data) {
                    alert(data.msg);
                }
            });
        });

    })
}