function REM(){
  var vw = $(window).width()/37.5;
  vw = vw>13.3333?13.3333:vw;
  $("html").css("fontSize",vw);

}
REM();
$(window).on("resize",function(){REM();});

var name = sessionStorage.getItem("name"); // 用户姓名
var leadsPhone = sessionStorage.getItem("phone"); // 用户电话
var grade = sessionStorage.getItem("grade"); // 用户年级
var subject = sessionStorage.getItem("subject"); // 薄弱科目
var assessmentResult = sessionStorage.getItem("assessmentResult");// 答案

if(!leadsPhone || !assessmentResult){
  window.location.href = "new-test_sign.html";
}

$(function(){
  function test(){
    var formData = {
      leadsPhone: leadsPhone,
      assessmentResult: assessmentResult,
    };
    $.ajax({
      type: 'get',
      url: CRMAPI + "/LeadsAssessment/leadsAssessment",
      data:formData,
      dataType: "json",
      timeout: 5000,
      success: function (data) {
        if (data.code == 100) {
          var $data = data.data;
          setTimeout(function(){
            $(".loading").fadeOut();
            $("body").removeClass("test_hidden");
            $(".animated").addClass("fadeInRight");
          },3000);
          $(".bar1_p").html($data.firstAssessmentVo.copyWrite);//第一部分话术
          $(".bar2_p").html($data.secondAssessmentVo.copyWrite);//第二部分话术
          $(".bar3_p").html($data.threeAssessmentVo.copyWrite);//第三部分话术
          $(".test_name").html(name);//姓名
          $(".test_score").html($data.leadsVo.totalPoint);//得分
          $(".test_subject").html(subject);//薄弱学科
          $(".test_grade").html(grade);//年级
          $(".bar4_three_1 .bar4_detail p").html($data.fourAssessmentVo.firstAssessment);//第四部分1
          $(".bar4_three_2 .bar4_detail p").html($data.fourAssessmentVo.secondAssessment);//第四部分2
          $(".bar4_three_3 .bar4_detail p").html($data.fourAssessmentVo.threeAssessment);//第四部分3
          $(".bar5_detail p").html($data.fourAssessmentVo.copyWrite);//第五部分话术
          var topData1 = $data.mainRequestFeedBack.firstAssessment;//主要问题1
          var topData2 = $data.mainRequestFeedBack.secondAssessment;//主要问题2
          var topData3 = $data.mainRequestFeedBack.threeAssessment;//主要问题3
          var tv1 = $data.mainRequestFeedBack.firstScore*2;//主要问题分数1
          var tv2 = $data.mainRequestFeedBack.secondScore*2;//主要问题分数2
          var tv3 = $data.mainRequestFeedBack.threeScore*2;//主要问题分数3
          var pn1 = $data.mustPromoteFeedBack.firstMustPromoteFeedBack;//需提高能力1
          var pn2 = $data.mustPromoteFeedBack.secondMustPromoteFeedBack;//需提高能力2
          var pn3 = $data.mustPromoteFeedBack.threeMustPromoteFeedBack;//需提高能力3
          var pn4 = $data.mustPromoteFeedBack.fourMustPromoteFeedBack;//需提高能力4
          var ps1 = Math.floor(($data.mustPromoteFeedBack.firstMustPromoteFeedBackScore/30)*100); //需提高能力分数1
          var ps2 = Math.floor(($data.mustPromoteFeedBack.secondMustPromoteFeedBackScore/30)*100); //需提高能力分数2
          var ps3 = Math.floor(($data.mustPromoteFeedBack.threeMustPromoteFeedBackScore/40)*100); //需提高能力分数3
          var ps4 = Math.floor(($data.mustPromoteFeedBack.fourMustPromoteFeedBackScore/40)*100); //需提高能力分数4
          var rn1 = $data.firstAssessmentVo.firstAssessmentFeedBack;//第一部分类1
          var rn2 = $data.firstAssessmentVo.secondAssessmentFeedBack;//第一部分类2
          var rn3 = $data.firstAssessmentVo.threeAssessmentFeedBack;//第一部分名类3
          var rn4 = $data.firstAssessmentVo.fourAssessmentFeedBack;//第一部分名类4
          var rn5 = $data.firstAssessmentVo.fiveAssessmentFeedBack;//第一部分名类5
          var rs1 = $data.firstAssessmentVo.firstScore;//第一部分值1;
          var rs2 = $data.firstAssessmentVo.secondScore;//第一部分值2;
          var rs3 = $data.firstAssessmentVo.threeScore;//第一部分值3;
          var rs4 = $data.firstAssessmentVo.fourScore;//第一部分值4;
          var rs5 = $data.firstAssessmentVo.fiveScore;//第一部分值5;
          var bn1 = $data.secondAssessmentVo.firstAssessmentFeedBack;//第二部分类1
          var bn2 = $data.secondAssessmentVo.secondAssessmentFeedBack;//第二部分类2
          var bn3 = $data.secondAssessmentVo.threeAssessmentFeedBack;//第二部分类3
          var bn4 = $data.secondAssessmentVo.fourAssessmentFeedBack;//第二部分类4
          var bn5 = $data.secondAssessmentVo.fiveAssessmentFeedBack;//第二部分类5
          var bs1 = $data.secondAssessmentVo.firstScore;//第二部分值1;
          var bs2 = $data.secondAssessmentVo.secondScore;//第二部分值2;
          var bs3 = $data.secondAssessmentVo.threeScore;//第二部分值3;
          var bs4 = $data.secondAssessmentVo.fourScore;//第二部分值4;
          var bs5 = $data.secondAssessmentVo.fiveScore;//第二部分值5;
          var ln1 = $data.threeAssessmentVo.firstAssessmentFeedBack;//第三部分类1
          var ln2 = $data.threeAssessmentVo.secondAssessmentFeedBack;//第三部分类2
          var ln3 = $data.threeAssessmentVo.threeAssessmentFeedBack;//第三部分类3
          var ln4 = $data.threeAssessmentVo.fourAssessmentFeedBack;//第三部分类4
          var ln5 = $data.threeAssessmentVo.fiveAssessmentFeedBack;//第三部分类5
          var ls1 = $data.threeAssessmentVo.firstScore;//第三部分值1;
          var ls2 = $data.threeAssessmentVo.secondScore;//第三部分值2;
          var ls3 = $data.threeAssessmentVo.threeScore;//第三部分值3;
          var ls4 = $data.threeAssessmentVo.fourScore;//第三部分值4;
          var ls5 = $data.threeAssessmentVo.fiveScore;//第三部分值5;

          var bar4Img = "";
          if($data.leadsVo.totalPoint>=0){
            bar4Img = "images/test/cry.png";
            if($data.leadsVo.totalPoint>=50){
              bar4Img = "images/test/nomarl.png";
              if($data.leadsVo.totalPoint>=100){
                bar4Img = "images/test/smile.png";
              }
            }
          }
          topRadar(topData1,topData2,topData3,tv1,tv2,tv3);
          pie(pn1,pn2,pn3,pn4,ps1,ps2,ps3,ps4);
          radar(rn1,rn2,rn3,rn4,rn5,rs1,rs2,rs3,rs4,rs5);
          bar(bn1,bn2,bn3,bn4,bn5,bs1,bs2,bs3,bs4,bs5);
          line(ln1,ln2,ln3,ln4,ln5,ls1,ls2,ls3,ls4,ls5);
          $(".bar4_three_1 .bar4_three_img img").attr("src",bar4Img);
        } else if (data.code == 101) {
          alert("服务器繁忙，请稍后刷新重试");
          return false;
        }
      },
      error: function (data) {
        alert("服务器繁忙，请稍后刷新重试");
      }
    });
  }
  test();
  function topRadar(topData1,topData2,topData3,tv1,tv2,tv3){
    var topRadar = echarts.init(document.getElementById('topRadar'));
    var option = {

      textStyle: {
        fontSize : 12,
      },

      radar: {
        shape: 'circle',
        splitLine :{
          lineStyle: {
            // 使用深浅的间隔色
            color: ['#ddd', 'transparent','transparent','transparent','transparent']
          }
          // show:false
        },
        // axisLine :{
        //   show:false
        // },
        splitArea:{
          // areaStyle:{
          //   color:"transparent",
          // }
          show:false,
        },
        indicator: [
          { name: topData1, max: 100},
          { name: topData2, max: 100},
          { name: topData3, max: 100},
        ],
        center:['50%', '50%'],
        radius: 90,
        name: {
          textStyle: {
            color: "#333",
          }
        },
      },
      series: [{
        type: 'radar',
        itemStyle: {
          normal: {
            color:'#b8e4fe',
          }
        },
        lineStyle: {
          normal: {
            color:'#a6daff',
          }
        },
        areaStyle: {
          normal: {
            color:'#ddf1ff',
          }
        },
        data : [
          {
            value : [tv1,tv2,tv3],

          },

        ],
        label: {
          normal: {

            show: true,

            formatter:function(params) {
              return params.value + "%";
            },

          }
        }
      }]
    };
    topRadar.setOption(option);
  } //主要问题分布图

  function pie(pn1,pn2,pn3,pn4,ps1,ps2,ps3,ps4){
    var pie = echarts.init(document.getElementById('pie'));
    var option = {
      textStyle: {
        fontSize : 10,
      },
      radar: {
        shape: 'rect',
        indicator: [
          { name: pn1, max: 100},
          { name: pn2, max: 100},
          { name: pn3, max: 100},
          { name: pn4, max: 100},
        ],
        center:['50%', '50%'],
        radius: 80,
        splitArea:{
          areaStyle: {
            color: "rgba(236,218,255,0.25)"
          }
        },
        splitLine :{
          lineStyle: {
            color: ["transparent","transparent","transparent","transparent","transparent","#dcc0f9",]
          }
        },
        axisLine :{
          lineStyle: {
            color: "#dcc0f9"
          }
        },
        name: {
          textStyle: {
            color: "#333",
          }
        },
      },
      series : [
        {
          type: 'radar',
          data : [
            {
              value : [ps1,ps2,ps3,ps4],

            },

          ],
          label: {
            normal: {

              show: true,

              formatter:function(params) {
                return params.value + "%";
              },

            }
          },
          itemStyle: {
            normal: {

              color:"#dcc0f9",
            }
          },
          lineStyle: {
            normal: {

              color:"#dcc0f9",
            }
          },
          areaStyle:{
            normal: {

              color:"rgba(191,137,245,0.57)",
            }
          }
        }
      ]
    };
    pie.setOption(option);
  } //需提高能力

  function radar(rn1,rn2,rn3,rn4,rn5,rs1,rs2,rs3,rs4,rs5){
    var radar = echarts.init(document.getElementById('radar'));
    var option = {
      textStyle: {
        fontSize : 10,
      },
      radar: {
        max:10,
        center:['46.6%', '52.5%'],
        radius: 93.5,
        splitArea: {
          show:false,

        },
        axisLine :{
          show:false
        },
        splitLine :{
          show:false,


        },
        indicator: [
          { name: rn1, max: 10},
          { name: rn2, max: 10},
          { name: rn3, max: 10},
          { name: rn4, max: 10},
          { name: rn5, max: 10},
        ],
        name: {
          textStyle: {
            color: "#333"
          }
        },
      },
      series: [{

        type: 'radar',
        itemStyle: {
          normal: {
            color:'#20abb5',
          }
        },
        lineStyle: {
          normal: {
            color:'#4cc3c9',
          }
        },
        areaStyle: {
          normal: {
            color: "rgba(19,166,168,0.18)"
          },

        },
        data : [
          {
            value : [rs1, rs2, rs3, rs4, rs5],

          },
        ],
        label: {
          normal: {
            show: true,
            formatter:function(params) {
              return params.value + "0%";
            }
          }
        }
      }]
    };

    radar.setOption(option);
  } //第一部分

  function line(ln1,ln2,ln3,ln4,ln5,ls1,ls2,ls3,ls4,ls5){
    var line = echarts.init(document.getElementById('line'));
    var option = {
      xAxis : [
        {
          type : 'category',
          boundaryGap : false,
          data : [ln1,ln2,ln3,ln4,ln5],

          axisLabel:{
            textStyle:{
              fontSize:10,
            }
          }
        }
      ],
      yAxis : [
        {
          type: 'value',
          max:10,


          splitLine: {
            lineStyle: {
              color: ["transparent","transparent","transparent","#c5c5c5","transparent","transparent",],
              type:"dashed"
            }
          },
          axisLabel: {
            textStyle:{
              fontSize:10,
            },
            formatter: function(params){
              if(params == 0){
                return "";
              }else if(params == 6){
                return "平均";
              }else{
                return params+"0%";
              }
            }
          }
        }
      ],
      series : [
        {
          name:'评测得分',
          type:'line',
          stack: '总量',
          itemStyle: {
            normal: {
              color:'#beb44a',
            },
          },
          lineStyle: {
            normal: {
              color:'#beb44a',
            }
          },
          areaStyle: {
            normal: {
              color:'#fff696',
            }
          },
          label: {
            normal: {
              show: true,
              position: 'top',
              formatter: '{c}0%',
              textStyle:{
                fontSize:12,
              }
            }
          },
          data:[ls1,ls2,ls3,ls4,ls5]
        },

      ]
    };
    line.setOption(option);
  } //第二部分

  function bar(bn1,bn2,bn3,bn4,bn5,bs1,bs2,bs3,bs4,bs5){
    var bar = echarts.init(document.getElementById('bar'));
    var option = {

      xAxis : [
        {
          type : 'category',
          axisTick: {
            show: false
          },

          axisLabel:{
            textStyle:{
              fontSize:10,
            }
          },

          data : [bn1,bn2,bn3,bn4,bn5],
          axisTick: {
            alignWithLabel: true
          },
        }
      ],
      yAxis : [
        {
          type: 'value',
          max:10,
          splitLine: {
            lineStyle: {
              color: ["transparent","transparent","transparent","#c5c5c5","transparent","transparent",],
              type:"dashed"
            }
          },
          axisLabel: {
            textStyle:{
              fontSize:10,
            },
            formatter: function(params){
              if(params == 0){
                return "";
              }else if(params == 6){
                return "平均";
              }else{
                return params+"0%";
              }
            }
          }
        }
      ],
      series : [
        {

          type:'bar',
          barWidth: '50%',
          center:['90%','90%'],

          label: {
            normal: {
              show: true,
              position: 'top',
              formatter: '{c}0%',
              textStyle:{
                fontSize:10,
              }
            }
          },
          data:[bs1,bs2,bs3,bs4,bs5],
          itemStyle:{
            normal:{
              color: "rgba(53,176,226,0.54)"
            },

          }
        }
      ]
    };
    bar.setOption(option)
  }
})


