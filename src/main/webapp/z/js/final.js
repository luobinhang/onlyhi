/**
 * Created by Hang on 2017/9/9 0009.
 */



$(function(){

  $.ajax({
    url: CRMAPI + "/BestTeacher/getAllFinalTeacher",
    type: "get",
    dataType: "json",
    success: function(res){
      //----------------------- 教师资料
      var teacherData = res.data,
          teacherLength = teacherData.length,
          barDetailName = $(".bar2-detail h3"),
          barDetailTicket = $(".bar2-detail p"),
          barDeclaration = $(".bar2-main-right p");
      for(var i = 0;i < teacherLength;i++){
        var teacherName = teacherData[i].teacherName,
            teacherNumber = teacherData[i].teacherNo,
            teacherDetail = teacherNumber + "号 " + teacherName,
            teacherTicket = teacherData[i].number,
            teacherRate = teacherData[i].rate,
            teacherDeclaration = teacherData[i].declaration,
            teacherTickerTotal = teacherTicket + "票 （" + teacherRate + "%）";
        barDetailName.eq(i).text(teacherDetail);
        barDetailTicket.eq(i).text(teacherTickerTotal);
        barDeclaration.eq(i).text(teacherDeclaration);
      }
    }
  });


})