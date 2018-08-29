function REM(){
  var rem = $(window).width()/7.5;
  var fs = rem>=137?137:rem;
  $("html").css("fontSize",fs);

}
REM();
$(window).on("resize",function(){REM();})


$(function () {

    //表单提交Start
    function GetQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null)return unescape(r[2]);
        return "";
    }
    $(".myForm input").focus(function () {
        $(this).css("borderColor", "#f40009")
    }).blur(function () {
        $(this).css("borderColor", "#E1E1E1")
    })
    $(function () {
        $('.submit').on('click', function () {
            var $this = $($(this).parent());
            $this.find(".adid").val(GetQueryString("adid"));
            $this.find(".jh").val(GetQueryString("adid"));
            $this.find(".dy").val(GetQueryString("adid"));
            $this.find(".keyNum").val(GetQueryString("adid"));

            // $("#myForm .adid").val(GetQueryString("adid"))
            // $("#myForm .jh").val(GetQueryString("jh"));
            // $("#myForm .dy").val(GetQueryString("dy"));
            // $("#myForm .keyNum").val(GetQueryString("keynum"));
            var mobileReg = /^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/;
            var nameReg = /^([\u4e00-\u9fa5]{1,20}|[a-zA-Z\.\s]{1,20})$/;
            var formData = $('.myForm').serialize();
            var name = $this.find(".name")
            var mobile = $this.find(".mobile");
            var button = $this.find("button");
            // var adid = window.location.href.split("?");
            // // var adid1 = adid.split("&");
            // console.log(adid);
            $.ajax({
                type: 'get',
                url: CMSAPI + '/NewNameList/createNewNameList',
                data: formData,
                dataType: "jsonp",
                jsonp: "jsoncallback",
                timeout: 5000,
                // 发起请求前就调用
                beforeSend: function (data) {
                    if (!name.val()) {
                        name.attr({placeholder: "名字不能为空"}).focus().val("");
                        return false;
                    }
                    if (!nameReg.test(name.val())) {
                        name.val("");
                        name.attr({placeholder: "请输入正确姓名"}).focus().val("");
                        return false;
                    }
                    if (!mobileReg.test(mobile.val())) {
                        button.attr("input::-webkit-input-placeholder", "color", "#FF0000");
                        mobile.attr({placeholder: "手机号不正确"}).focus().val("");
                        return false;
                    }
                    if ($(".grade").val() == "请选择" || $(".kemu").val() == "请选择") {
                        alert("请选择年级和科目");
                        return false;
                    }
                    button.html('正在提交...').addClass("disabled").attr("disabled", true);
                },
                success: function (data) {
                    //var data = JSON.parse(data);
                    console.log(data);
                    if (data.code == 100) {
                        $(name, mobile).focus();
                        window.location.href = "./success.html";
                        button.html('免费试听').removeClass('disabled').attr("disabled", false);
                    } else if (data.code == 101) {
                        alert("预约失败！");
                        button.css({background:"#e32d1f"}).attr("disabled",false);
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
                    $(".myForm input").val("");
                    button.html('免费试听').removeClass('disabled').attr("disabled", false);
                },
                error: function () {
                    console.log(3);
                    // window.location.href = "./error.html";
                }
            });
        });
    });
    //表单提交End

})


