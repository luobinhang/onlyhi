$(function(){

  $('.firework').fireworks({
    sound: false, // sound effect
    opacity: 0.5,
    width: '100%',
    height: '100%',
  });

  $(".bar2-btn").click(function(){
    $(".bar2-detail").hide();
    $($(this).data("target")).show();
  });

  $(".bar2-window-btn").click(function(){
    $(this).parent("div").hide();
  });



  function timeout(){
    var date1=new Date();  //开始时间
    var date2 = new Date(2018,9,1,0,0,0);    //结束时间
    var date3=date2.getTime()-date1.getTime();  //时间差的毫秒数
//计算出相差天数
    var days=Math.floor(date3/(24*3600*1000));
    days = days>9?days:"0"+days;
//计算出小时数
    var leave1=date3%(24*3600*1000);    //计算天数后剩余的毫秒数
    var hours=Math.floor(leave1/(3600*1000));
    hours = hours>9?hours:"0"+hours;
//计算相差分钟数
    var leave2=leave1%(3600*1000)   ;     //计算小时数后剩余的毫秒数
    var minutes=Math.floor(leave2/(60*1000));
    minutes = minutes>9?minutes:"0"+minutes;
//计算相差秒数
    var leave3=leave2%(60*1000)  ;    //计算分钟数后剩余的毫秒数
    var seconds=Math.round(leave3/1000);
    seconds = seconds>9?seconds:"0"+seconds;

    var timeover = days+":"+hours+":"+minutes+":"+seconds;
    $(".digits").countdown({
      format: "dd:hh:mm:ss",
      startTime: timeover,
    });
    $(".cntSeparator").eq(0).text("天");
    $(".cntSeparator").eq(1).text("时");
    $(".cntSeparator").eq(2).text("分");
  }
  timeout();
  var wh = $("body").height() - 139;
  var ww = $(window).width() - 113;
  var ribbon1 = setInterval(function(){
    var temp = Math.random();
    var left = temp*ww+"px";
    var ribbon1 = "<img src='images/Anniversary/ribbon1.png' class='ribbon' style='width:72px;left:"+ left +"'/>";
    $("body").append(ribbon1);
    $(".ribbon").animate({top:wh},20000,"linear",function(){
      $(this).remove();
    });

  },4000);

  var ribbon2 = setInterval(function(){
    var temp = Math.random();
    var left = temp*ww+"px";
    var ribbon2 = "<img src='images/Anniversary/ribbon2.png' class='ribbon' style='left:"+ left +"'/>";
    $("body").append(ribbon2);
    $(".ribbon").animate({top:wh},25000,"linear",function(){
      $(this).remove();
    });

  },6000);

  var ribbon3 = setInterval(function(){
    var temp = Math.random();
    var left = temp*ww+"px";
    var ribbon3 = "<img src='images/Anniversary/ribbon3.png' class='ribbon' style='width:46px;left:"+ left +"'/>";
    $("body").append(ribbon3);
    $(".ribbon").animate({top:wh},30000,"linear",function(){
      $(this).remove();
    });

  },5000);

})