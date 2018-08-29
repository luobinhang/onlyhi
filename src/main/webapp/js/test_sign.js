$(function(){
    $(".sign_btn").click(function(){
        var t = $(this);
        var mobileReg = /^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/;//手机号码验证
        var nameReg = /^([\u4e00-\u9fa5]{1,20}|[a-zA-Z\.\s]{1,20})$/;//名字验证
        var formData = {
            name : $(".sign_name").val(),
            phone : $(".sign_phone").val(),
            grade : $(".sign_grade").val(),
            weaknessSubject : $(".sign_subject").val(),
        }
        $.ajax({
            type: 'get',
            url: CMSAPI + "/NewNameList/createNewNameList",
            data: formData,
            dataType: "jsonp",
            jsonp: "jsoncallback",
            timeout: 5000,
            // 发起请求前就调用
            beforeSend: function (data) {
                if (!$(".sign_name").val()) {
                    $(".sign_name").attr({placeholder: "名字不能为空"}).focus().val("");
                    return false;
                }
                if (!nameReg.test($(".sign_name").val())) {
                    $(".sign_name").val("");
                    $(".sign_name").attr({placeholder: "请输入正确姓名"}).focus().val("");
                    return false;
                }
                if (!mobileReg.test($(".sign_phone").val())) {
                    $(this).attr("input::-webkit-input-placeholder", "color", "#f40009");
                    $(".sign_phone").attr({placeholder: "手机号不正确"}).focus().val("");
                    return false;
                } 
                t.html("正在提交...");
            },
            success: function (data) {
                if (data.code == 100) {
                    sessionStorage.setItem("name", formData.name);
                    sessionStorage.setItem("phone", formData.phone);
                    sessionStorage.setItem("subject", formData.weaknessSubject);
                    sessionStorage.setItem("grade", formData.grade);
                    location.href = "question.html";
                } else if (data.code == 101) {
                    console.log(data);
                    window.location.href = "/error.html";
                    return false;
                }
                else {
                    window.location.href = "/error.html";
                }
                
            },
            complete: function () { // 请求完成时会调用
                // 还原状态
                console.log(2);
                t.html("立即测评");
            },
            error: function () {
                console.log("error");
                t.html("立即测评")
                 window.location.href = "/error.html";
            }
        });
    })
})



	
