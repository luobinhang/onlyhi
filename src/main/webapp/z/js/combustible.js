/**
 * Created by Hang on 2017/9/9 0009.
 */



$(function(){
  $.ajax({
    url: CRMAPI + "/onlyhi-admin/BestTeacher/getAllBestTeacher",
    type: "get",
    dataType: "json",
    success: function(res){
      //----------------------- 教师资料
      var teacherData = res.data.bestTeacherVos,
          teacherLength = teacherData.length,
          barDetailName = $(".bar2-detail h3"),
          barDetailTicket = $(".bar2-detail p");
      for(var i = 0;i < teacherLength;i++){
        var teacherName = teacherData[i].teacherName,
            teacherNumber = teacherData[i].teacherNo,
            teacherDetail = teacherNumber + "号 " + teacherName,
            teacherTicket = teacherData[i].number,
            teacherRate = teacherData[i].rate || 0,
            teacherTickerTotal = teacherTicket + "票 （" + teacherRate + "%）";
        barDetailName.eq(i).text(teacherDetail);
        barDetailTicket.eq(i).text(teacherTickerTotal);
      }
      //----------------------- TOP5
      var topData = res.data.topFiveBestTeacherVos,
          topLength = topData.length,
          topImg = $(".aside-img>img"),
          topName = $(".aside-detail label"),
          topTicker = $(".aside-detail span"),
          topUp = $(".aside-detail i img");

      for(var i = 0;i<topLength;i++){
        var topDataName = topData[i].teacherName,
            topDataNumber = topData[i].teacherNo,
            topDataUp = topData[i].isUp,
            topDetail = topDataNumber + " 号" + topDataName,
            topTicket = topData[i].number + "票";
        topImg.eq(i).attr ("src","images/combustible/"+ topDataNumber +".jpg");
        topName.eq(i).text(topDetail);
        topTicker.eq(i).text(topTicket);
        if(topDataUp == 0){
          topUp.eq(i).hide();
        }else if(topDataUp == 1){
          topUp.eq(i).attr("src","images/combustible/rise.png");
        }else{
          topUp.eq(i).attr("src","images/combustible/drop.png");
        }
      }
    }
  });

  //----------------------- 视频播放
  $(".bar2-play-btn").on("click",function(){
    var id = $(this).data("file");
    var option ={
      "auto_play":"0",
      "file_id":id,
      "app_id":"1253729545",
      "width":816,
      "height":544,
      "https":1,
      "autoplay":0,
    };
    new qcVideo.Player("id_video_container", option );
    $(".video-window").show();
  });

  //----------------------- 视频关闭
  $(".video-bg").on("click",function(){
    $("video").remove();
    $(".video-window").hide();
  });



})