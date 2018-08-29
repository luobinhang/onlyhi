function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)return unescape(r[2]);
    return "";
}
var nowTime = Date.parse(new Date());


// 

var startTime = Date.parse(new Date("2017-05-17 20:00:00"));
var endTime = Date.parse(new Date("2017-05-30 21:00:00"));
console.log(startTime);
console.log(endTime);
startTime =1495022400000;
endTime = 1496149200000;
// 控制窗口谈出
$(function () {
    console.log(GetQueryString("video"));
    if (GetQueryString("video")) {
        $(".success,#select,#layer").show();
        $("body").css("overflow", "hidden");
    }
    $("#select").on("click", function () {
        $(".success,.code,#select,#layer").hide(50);
        $("body ").css("overflow", "visible");
    });
    $(".fenxiang").on("click", function () {
        return false
    });
    $(".select3-1 a,#vadio-opacity").on("click", function () {
        $(".fenxiang,#select").show(50);
        $("body ").css("overflow", "hidden");
    });

    $(".clone").on("click", function () {
        $(".success,.code,#select,#layer").hide(50);
        $("body ").css("overflow", "visible");
    });
    $(".success,.code").on("click", function () {
        return false;
    });
    $(".select9 button").on("click", function () {
        $(".code,#select,#layer").show(50);
        $("body ").css("overflow", "hidden");
    });


    var num = 0;
    var stop = 0;
    var time2;

    function top() {
        var father = $(".select4 .center").offset().top
        var centerHight = $(".select4 .center").height();
        var ulHight = $(".select4 .center ul").height();
        var lilength = $(".select4 .center ul li").length;
        var liHight = $(".select4 .center ul li:eq(lilength)").height();
        $(".select4 .center ul li").each(function (i, v) {
            var son = $(v).offset().top
            // console.log(son);
            if (son - father < 0.5 && son - father > -0.5) {
                stop = 1;
                clearInterval(time2);
                setTimeout(function () {
                    time2 = setInterval(top, 30)
                }, 2000)
            } else {
                return
            }
        })

        num -= 1;
        $(".select4 .center ul").css("top", num);
        var ulTop = Math.abs($(".select4 .center ul").position().top);
        if (ulHight - ulTop == centerHight - liHight) {
            num = 0;
            $(".select4 .center ul").css("top", num);
        }
    }

    time2 = setInterval(top, 30);
    //数字更改
    // select4提问人数修改数字
    var s4_t = Math.floor(Math.random() * 800 + 200);
    $(".select4 .title").html(s4_t + "人参与提问");
    // select4提问人数修改数字
    var s2_t = Math.floor(Math.random() * 10000 + 20000);
    $(".select2 .num").html("已有" + s2_t + "人一起观看")


    $(".select4 ul li .p1").each(function (index, value) {
        var tt = Math.floor(Math.random() * 90 + 10);
        $(value).html("家长126" + tt);
    })

    $(".select4 .bottom button").on("click", function () {
        var a = $(".select4 .bottom input").val();
        if (!a) {
            alert("请输入内容！！！")
            return false
        } else {
            var tt = Math.floor(Math.random() * 90 + 10);
            var str = '<li> ' +
                '<p class= "p1" >家长126' + tt + '</p> ' +
                '<p class= "p2" >' + a + '</p>' +
                ' </li> '
            $(".select4 .center ul").append(str);
            $(".select4 .bottom input").val("");
        }
    })
    $("input,select").on("focus", function () {
        $(this).css("border", "1px solid #364FBC");
    }).on("blur", function () {
        $(this).css("border", "1px solid #CCC");
    })

    $(".submit").on("click", function () {
        // $(".myForm .adid").val(GetQueryString("adid"));
        $(".myForm .jh").val(GetQueryString("jh"));
        $(".myForm .dy").val(GetQueryString("dy"));
        $(".myForm .keyNum").val(GetQueryString("keynum"));
        var mobileReg = /^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/;
        var nameReg = /^([\u4e00-\u9fa5]{1,20}|[a-zA-Z\.\s]{1,20})$/;
        var mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        var formData = $('.myForm').serialize();
        var name = $("#name");
        var mobile = $("#phone");
        console.log(formData);
        $.ajax({
            type: 'get',
            url: CMSAPI + "/NewNameList/createNewNameList",
            data: formData,
            dataType: "jsonp",
            jsonp: "jsoncallback",
            timeout: 5000,
            // 发起请求前就调用
            beforeSend: function (data) {
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
            },
            success: function (data) {
                //var data = JSON.parse(data);
                if (data.code == 100) {
                    $(".success,#select,#layer").show(50);
                    $("body ").css("overflow", "hidden");

                } else if (data.code == 101) {
                    alert("预约失败！");
                    name.val("");
                    mobile.val("");
                    return false;
                }
                else {
                }
            },
            complete: function () { // 请求完成时会调用
                // 还原状态
                $(".myForm input").val("");
            },
            error: function () {
                // window.location.href = "./error.html";
            }
        });
    });
});
// 控制视屏播放
$(function () {
    var option = {
        "auto_play": "1",
        "file_id": "9031868222938650132",
        "app_id": "1253729545",
        "width": 640,
        "height": 360,
        "https": 1
    };
    /*调用播放器进行播放*/
    new qcVideo.Player(
        /*代码中的id_video_container将会作为播放器放置的容器使用,可自行替换*/
        "id_video_container_9031868222938650132",
        option
    );
    // setTimeout(function () {
    //     $(".trump-button").click()
    // },3000)
    if (nowTime > startTime && nowTime < endTime && GetQueryString("video") == 1) {
        $(".select3 ul li").on("click", function () {
            $(".select3 ul li").css("border", "")
            $(this).css("border", "2px solid #364fbc");
            var id = $(this).data("id");
            var idnum = $(this).data("idnum");
            console.log(id);
            $("#video .video").attr("id", id);
            var option = {
                "auto_play": "1",
                "file_id": idnum,
                "app_id": "1253729545",
                "width": "100%",
                "height": "100%",
                "https": 1
            };
            /*调用播放器进行播放*/
            new qcVideo.Player(
                /*代码中的id_video_container将会作为播放器放置的容器使用,可自行替换*/
                id,
                option
            );
            // setTimeout(function () {
            //     $(".trump-play-controller").click()
            // },3000)
        });
    } else {
        $("#vadio-opacity").show();
    }
});
//微信分享
$(function () {
    $(function () {
        var df = new FormData();
        df.append('sourceURL', window.location);
        df.append('activityNo', "zhonggaokao");
        $.ajax({
            url: 'http://wechat.onlyeduhi.cn/activity/activityPage',
            data: df,
            type: 'post',
            contentType: false,
            dataType: 'json',
            processData: false,
            success: function (data) {
                //页面加载 返回以下信息
                wx.config({
                    debug: false,
                    appId: data.token,
                    timestamp: data.timestamp,
                    nonceStr: data.nonceStr,
                    signature: data.signature,
                    jsApiList: [
                        // 所有要调用的 API 都要加到这个列表中
                        "onMenuShareTimeline",
                        "onMenuShareAppMessage"
                    ]
                });

                wx.ready(function () {
                    var share_link = "http://www.onlyeduhi.cn/z/hitExamination.html";
                    wx.onMenuShareTimeline({
                        title: '我正在参与中高考专家访谈直播，一起来学习吧！', // 分享标题
                        desc: '直击中高考描述', // 分享描述
                        link: share_link, // 分享链接
                        imgUrl: "http://www.onlyeduhi.cn/z/images/hitExamination/link.jpg", // 分享图标
                        success: function () {
                            window.location.href = "http://www.onlyeduhi.cn/z/examination.html?video=1"
                            // 用户确认分享后执行的回调函数
                        },
                        cancel: function () {
                            // 用户取消分享后执行的回调函数
                        }
                    });

                    wx.onMenuShareAppMessage({
                        title: '我正在参与中高考专家访谈直播，一起来学习吧！', // 分享标题
                        desc: '中高考专家访谈直播，限时免费参与！', // 分享描述
                        link: share_link, // 分享链接
                        imgUrl: 'http://www.onlyeduhi.cn/z/images/hitExamination/link.jpg', // 分享图标
                        type: 'link', // 分享类型,music、video或link，不填默认为link
                        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                        success: function () {
                            window.location.href = "http://www.onlyeduhi.cn/z/examination.html?video=1"
                        },
                        cancel: function () {
                            // 用户取消分享后执行的回调函数
                        }
                    });
                });
            }
        });

    })

})


