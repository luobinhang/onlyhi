/**
 * Created by Hang on 2017/8/29 0029.
 */
function REM(){
  var vw = $(window).width()/37.5;
  $("html").css("fontSize",vw);
}
REM();
$(window).on("resize",function(){REM();});


var name = sessionStorage.getItem("name"); // 用户姓名
var leadsPhone = sessionStorage.getItem("phone"); // 用户电话
var grade = sessionStorage.getItem("grade"); // 用户年级
var subject = sessionStorage.getItem("subject"); // 薄弱科目
if(!name || !leadsPhone){
  window.location.href = "new-test_sign.html";
}



var ai = 0;
var prev = $(".swiper-prev");
var next = $(".swiper-next");
var mySwiper = new Swiper('.swiper-container',{
  prevButton:'.swiper-prev',
  nextButton:'.swiper-next',
  speed:0,
  onlyExternal : true,
  onSlideChangeStart: function(swiper){
    ai = swiper.activeIndex;
    $("body,html").animate({scrollTop:0});
    next.hide();
    if(ai==0){
      prev.hide();
    }else{
      prev.show();
    }

    if($(".swiper-slide").eq(ai).find(".active").length == 3){
      next.show();
    }
  },
  onInit: function(swiper){
    var qt = $(".question_tab");
    qt.on("click","span",function(){
      var _t = $(this);
      _t.addClass("active").siblings("span").removeClass("active");
      if($(".swiper-slide").eq(ai).find(".active").length == 3){
        next.show();
      }
      if(ai==4){
        next.html("完成");
      }else{
        next.html("下一页");
      }
    });
    prev.click(function(){
      next.html("下一页").show();
    });
    next.click(function(){
      if($(this).html() == "完成"){
        var selectData = $(".question_tab .active").eq(0).data("html");
        for(var i = 1;i<15;i++){
          selectData += "," + $(".question_tab .active").eq(i).data("html");
        };
        sessionStorage.setItem("assessmentResult",selectData);
        location.href = "test.html";
      }
      if($(".active").length == 15){
        $(this).html("完成");
      }
    })
  },

});

