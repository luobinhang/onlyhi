$(function () {
    //        首页bannner轮播图
    var mySwiper = new Swiper('.swiper-container', {
//            autoplay: 5000,//可选选项，自动滑动
//            direction: 'vertical',
//            loop: true,
//            pagination: '.swiper-pagination',
//            // 如果需要前进后退按钮
//            nextButton: '.swiper-button-next',
//            prevButton: '.swiper-button-prev',
//            spaceBetween: 40
    })
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

    var $code;
    var UrlAdid = "XWJTAO0IXM";
    var UrlAdid1 = "LYJRGTV4SE";
    var UrlAdid2 = "LNVAECDPTT";
    var UrlAdid3 = "NXJZVSLT1Q";
    var UrlAdid4 = "3IKLDJWO55";

    // 判断应不应该存在底部start
    var FooterAdid = "FV9T0IQ1VF";
    // 判断应不应该存在底部end

    (function () {
        // 判断验证码应不应该显示start
        if (GetQueryString("adid") == UrlAdid || GetQueryString("adid") == UrlAdid1 || GetQueryString("adid") == UrlAdid2 ||GetQueryString("adid") == UrlAdid3 || GetQueryString("adid") == UrlAdid4 || GetQueryString("adid") == FooterAdid) {
            $("#code").show();
        } else {
            $("#code").hide();
        }

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
            }
        });
    })
    $(".submit").on("click", function () {
        // $(".myForm .adid").val(GetQueryString("adid"));
        // $(".myForm .jh").val(GetQueryString("jh"));
        // $(".myForm .dy").val(GetQueryString("dy"));
        // $(".myForm .keyNum").val(GetQueryString("keynum"));
        var mobileReg = /^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/;//手机号码验证
        var nameReg = /^([\u4e00-\u9fa5]{1,20}|[a-zA-Z\.\s]{1,20})$/;//名字验证
        var mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;//邮箱验证
        var box1 =  $("#box1 .active");
        var box2 =  $("#box2 .active");
        var box3 =  $("#box3 .active");
        var provinceId = box1.data("id");
        var cityId = box2.data("id");
        var countyId = box3.data("id");
        // var formData = $('.myForm').serialize();
        var formData = {
            name : $(".name").val(),
            phone : $(".mobile").val(),
            city : box2.html(),
            cityId : cityId,
            province : box1.html(),
            provinceId : provinceId,
            count : box3.html(),
            countId : countyId,
            grade : $(".grade").val(),
            school : $(".school").val(),
            gradeRank : $(".ranking").val(),
            adid: "UTIVE2PEKB",
        }
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
                if ($(".myForm .adid").val() == UrlAdid || $(".myForm .adid").val() == UrlAdid1) {
                    if ($("#code .code").val() !== $code) {
                        $("#code .code").val("");
                        $("#code .code").attr({placeholder: "请输入正确验证码"}).focus().val("").blur(function () {
                            $(this).css("borderColor", "");
                        });
                        return false
                    }
                }
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
                if ($(".grade").val() == "请选择") {
                    alert("请选择年级");
                    return false;
                }
                if( $(".ranking").val() == "请选择"){
                  alert("请选择排名");
                  return false;
                }
                if( $(".school").val() == "请选择"){
                  alert("请选择学校");
                  return false;
                }
                if( $(".addressL").val() == "--请选择地区-- "){
                  alert("请选择地区");
                  return false;
                }
            },
            success: function (data) {
                //var data = JSON.parse(data);
                if (data.code == 100) {
                    location.href = "./sign_success.html";
                  console.log(data)
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
                // window.location.href = "./error.html";
            }
        });
    });


    // 07-14 luo
    GetDistrict(1,"#box1");
    $(".addressL").click(function(){ //选择地址
        $("body").addClass("open");
        $("#box2,#box3").hide();
        GetDistrict(1,"#box1");
    })
    $(".fixedL-bg,.cancelL").click(function(){ //取消地址选择
        $("body").removeClass("open");
        $(".confirmL").css("display","none");
    })
    $(".confirmL").click(function(){ //完成地址选择
        $(".confirmL").css("display","none");
        $("body").removeClass("open");
        var box1 =  $("#box1 .active");
        var box2 =  $("#box2 .active");
        var box3 =  $("#box3 .active");
        var provinceL = box1.html() || "";
        var cityL = box2.html() || "";
        var areaL = box3.html() || "";
        var totalL = provinceL+"-"+ cityL + "-" + areaL;
        $(".addressL").val(totalL);
        if(totalL!=""){
            $(".grade").html('<option value="请选择" selected="" style="display: none;color:#000">--请选择年级--</option><option value="小四">小四</option><option value="小五">小五</option><option value="小六">小六</option><option value="预初">预初</option><option value="初一">初一</option><option value="初二">初二</option><option value="初三">初三</option><option value="初四">初四</option><option value="高一">高一</option><option value="高二">高二</option><option value="高三">高三</option> ')
            $(".school").empty().html('<option value="请选择" selected="" style="display: none;color:#000">--请选择学校--</option>');
        }


    })
    $("#box1").on("click","li",function(){ //省份选择
        var t = $(this);
        var parentid = $(this).data("id");
        var box = "#box2";
        $("#box3").hide();
        citySelect(parentid,box,t);
    })
    $("#box2").on("click","li",function(){ //市区选择
        var t = $(this);
        var parentid = $(this).data("id");
        var box = "#box3";
        citySelect(parentid,box,t);
    })
      $("#box3").on("click","li",function(){ // 县城选择
        var t = $(this);
        t.addClass("active").siblings("li").removeClass("active");
        $(".confirmL").show();
      })
    function citySelect(parentid,box,t){
        t.addClass("active").siblings("li").removeClass("active");
        GetDistrict(parentid,box);
    }



    function GetDistrict(parentid,box){ //获取地址
      var url = CRMAPI+'/webapi/school/getAreaByParatCode';
      $.get(url,{'parentid':parentid},function(data){
        if(data.code==100){
          $(box).show();
          $(box).find("ul").empty();
          var city = "";
          var obj = data.data;
          for(var i=0;i<obj.length;i++){
            city += '<li data-id='+obj[i].id+'>'+obj[i].name+'</li>'
          }
          $(box).find("ul").html(city);
          var myScroll = new IScroll(box,{click:true }); //滚动
        }else{
          city = "";
          return false;
        }
      },'json');
    }
    $(".grade").on("change",function(){ //选择年级后创建学校选项
      schoolSearch();
    })


    function schoolSearch(){    //学校创建
      var box1 =  $("#box1 .active");
      var box2 =  $("#box2 .active");
      var box3 =  $("#box3 .active");
      var provinceId = box1.data("id");
      var cityId = box2.data("id");
      var countyId = box3.data("id");
      var gradeId;
      var url = CRMAPI+"webapi/school/getSchoolByAreaCode";
      $.get(url,{"cityId":cityId,"provinceId":provinceId,"countyId":countyId},function(data){
        var gval =  $(".grade").val();
        if(gval=="预初"||gval=="小四"||gval=="小五"||gval=="小六"){
          gradeId = 1;
        }else if(gval=="高三"||gval=="初一"||gval=="初二"||gval=="初三"||gval=="初四"||gval=="高一"||gval=="高二"){
          gradeId = 2;
        }else{
            return false;
        }
        if(data.code == 100){
            var school = "";
            $(".school").empty();
            var obj = data.data;
            for(var i = 0;i<obj.length;i++){
              if(obj[i].sctype==gradeId){
                school += "<option value="+obj[i].schoolname+">"+obj[i].schoolname+"</option>"
              }
          }
        }else{
            console.log(data.msg)
        }
        $(".school").html(school)
      },'json')
    }

})
