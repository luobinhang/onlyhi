$(function () {
    if($.cookie("userName") && $.cookie("passWord")){
        $(".login0").removeClass("login0").addClass("Myhiketang").find("a").html("我的嗨课堂");
        $(".Register").removeClass("Register").addClass("Register_over").find("a").html("退出");
        $(".Myhiketang").on("click",function () {
            window.location.href = skip + "/buy/personal.html";
        })
        $(".Register_over").hover(function () {
            // $(this).find(".Register_over0").stop().slideDown(200);
            $(".Register2 a").on("click",function () {
                sessionStorage.removeItem("s_grade");//课程名称
                sessionStorage.removeItem("s_keshi")//课程时长
                sessionStorage.removeItem("s_new");//应付款价格
                sessionStorage.removeItem("s_old");//实付款价格
                sessionStorage.removeItem("parent_name");//家长姓名
                sessionStorage.removeItem("relation");//关系
                sessionStorage.removeItem("phone");//联系方式
                sessionStorage.removeItem("province");//省
                sessionStorage.removeItem("city");//市
                sessionStorage.removeItem("district");//区
                sessionStorage.removeItem("town");//镇
                sessionStorage.removeItem("address");//详细住址

                $.cookie("userName", "",{path:'/',expires: -1});
                $.cookie("passWord", "",{path:'/',expires: -1});
                location.reload();
            })
        },function () {
            $(this).find(".Register_over0").stop().slideUp(200);
        })


    }else {
        $(".login0").addClass("login0").find("a").html("登录");

        $(".Register").addClass("Register").find("a").html("注册");
        $(".Register .Register_over0").stop().hide();
    }
})
