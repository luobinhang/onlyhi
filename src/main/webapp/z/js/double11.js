
$(function(){

  function timeout(date2){
    var date1=new Date();  //开始时间
    var date2 = date2;    //结束时间
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


function ulScroll(list){
  $(".winners-main ul").append(list);

  var ul = $(".winners-main ul");
  var h = $(".winners-main ul li").height();
  var scrollList = function(){
    ul.animate({"margin-top":-h},function(){
      ul.children("li").eq(0).appendTo(ul);
      ul.css({"margin-top":"0px"});
    });
  }
  var setScroll = setInterval(scrollList,2000);
}

  function prize(data){
     var d,s1,s2,s3,s4,l,t;
    if(data.code ==1){
      s1 = 'kindle';
      s2 = '11.1—11.3';
      s3 = 'images/double11/kindle.png';
      l = 656;
      t = 198;
      d = new Date(2017,10,4,0,0,0);
    }else if(data.code == 2){
      s1 = '智能按摩护眼仪';
      s2 = '11.4—11.5';
      s3 = 'images/double11/eyes.jpg';
      s4 = '11.1—11.3';
      l = 677;
      t = 239;
      d = new Date(2017,10,6,0,0,0);
    }else if(data.code == 3){
      s1 = 'kindle';
      s2 = '11.6—11.9';
      s3 = 'images/double11/kindle.png';
      s4 = '11.4—11.5';
      l = 656;
      t = 198;
      d = new Date(2017,10,10,0,0,0);
    }else if(data.code == 4){
      s1 = 'ipad';
      s2 = '11.10—11.11';
      s3 = 'images/double11/computer.jpg';
      s4 = '11.6—11.9';
      l = 700;
      t = 250;
      d = new Date(2017,10,12,0,0,0);
    }
    var prizeHtml = '<span class="s1">'+ s1 +'</span>'+
      '<span class="s2">>>><label>'+ s2 +'</label><<<</span>'+
      '<div class="prize" style="left: '+ l +'px;top:'+ t +'px;">'+
      '<img src="'+ s3 +'">'+
      '</div>';
    $(".bar1-border").append(prizeHtml);
    $(".winners-main>a").html(s4);
    timeout(d);
  }



  $.ajax({
    type:'get',
    url:CRMAPI+'/WebSiteShow/activityDate',
    dataType:'json',
    success:function(res){
      // var data = (res.data==0)?1:res.data;
      prize(res.data);
      // prize(2);
      var list='';
      var award = res.data.awardsNumberVos;
      for(var i=0;i<award.length;i++){
        list += '<li><span>'+award[i].name+'</span><label>'+ award[i].phone +'</label></li>';
      }
      ulScroll(list);
    },
    error:function(res){
      console.log('服务器出现一点小问题')
    },
  })
})