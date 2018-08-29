
//固定导航和底部start
window.onload = function () {
  var viewH = $(window).height();//可见高度
  var navHeight = $(".nav").height();//nav高度
  var bottomTop = $(".form").offset().top;//表单距离顶部
  var formHeight = $(".form").height(); //表单高度
  // 判断表单固定
  if (bottomTop - formHeight - $(document).scrollTop() > viewH) {
    $(".footer .form").addClass("fixedBottom");
    // $(".footer").css("paddingTop", "49px");
  } else {
    $(".footer .form").removeClass("fixedBottom");
    $(".footer").css("paddingTop", "0");
  }
  //判断头部固定
  if ($(document).scrollTop() > navHeight) {
    $(".header").addClass("fixedTop").css({
      backgroundColor: "rgba(255,255,255,.8)",
      borderBottom: "1px solid #f2f2f2"
    });
    $(".nav").css("marginBottom", "85px");
  } else {
    $(".header").removeClass("fixedTop").css("backgroundColor", "#fff").removeAttr("borderBottom");
    $(".nav").css("marginBottom", "0");
  }
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    //滚动时头部固定
    if (scrollTop > navHeight) {
      $(".header").addClass("fixedTop").css({
        backgroundColor: "rgba(255,255,255,.8)",
        borderBottom: "1px solid #f2f2f2"
      });
      $(".nav").css("marginBottom", "85px");
    } else {
      $(".header").removeClass("fixedTop").css("backgroundColor", "#fff").removeAttr("borderBottom");
      $(".nav").css("marginBottom", "0");
    }
    //滚动时表单固定
    if (bottomTop + formHeight - scrollTop > viewH) {
      $(".footer .form").addClass("fixedBottom");
      // $(".footer").css("paddingTop", "49px");
    } else {
      $(".footer .form").removeClass("fixedBottom");
      $(".footer").css("paddingTop", "0");
    }
  });
}


//固定导航和底部end