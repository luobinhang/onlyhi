$(function () {

    $(".Myhiketang").unbind("click");

//返回顶部start
    $(function () {
        $(function () {
            $(window).bind('scroll resize', function () {
                $(".backToTop").goToTop({pageHeightJg: 156});
            });
            $(".backToTop").goToTop();
        });
    });
//返回顶部end

    $(".userName_name").html($.cookie("userName_name"));

//时间定时
    function fresh(data) {
        // var date = sessionStorage.getItem("time_expire");
        var date = new Date(data);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        var data_time = year + '-' + month + '-' + day + " " + hour + ':' + minute + ':' + second;

        var endtime = new Date(data_time);
        var nowtime = new Date();
        var leftsecond = parseInt((endtime.getTime() - nowtime.getTime()) / 1000);
        d = parseInt(leftsecond / 3600 / 24);
        h = parseInt((leftsecond / 3600) % 24);
        m = parseInt((leftsecond / 60) % 60);
        s = parseInt(leftsecond % 60);
        var td = d * 24 + h;
        $("#Hour").html(td);
        $("#minute").html(m);
        $("#second").html(s);
        if (leftsecond <= 0) {
            $("#Hour").html("00");
            $("#emM").html("00");
            $("#second").html("00");
            clearInterval(sh);
        }
    }
//时间定时end

//判断有无用户名和密码Start
    function begin(url) {
        if (!$.cookie("userName") || !$.cookie("passWord")) {
            location.href = url;
        } else {
        }
    }
//判断有无用户名和密码End


//格式化金额start
    function toThousands(num) {
        var result = [], counter = 0;
        num = (num || 0).toString().split('');
        for (var i = num.length - 1; i >= 0; i--) {
            counter++;
            result.unshift(num[i]);
            if (!(counter % 3) && i != 0) {
                result.unshift(',');
            }
        }
        return result.join('');
    }
//格式化金额end
//淘宝链接Start
    var taobaoArr = {
        primary: "https://item.taobao.com/item.htm?spm=a230r.1.14.51.QGiY2Q&id=541684206694&ns=1&abbucket=11#detail",
        middle_one: "https://item.taobao.com/item.htm?spm=a230r.1.14.56.QGiY2Q&id=541668444123&ns=1&abbucket=11#detail",
        middle_two: "https://item.taobao.com/item.htm?spm=a230r.1.14.11.QGiY2Q&id=541668208827&ns=1&abbucket=11#detail",
        middle_three: "https://item.taobao.com/item.htm?spm=a230r.1.14.61.QGiY2Q&id=541696547012&ns=1&abbucket=11#detail",
        senior_one: "https://item.taobao.com/item.htm?spm=a230r.1.14.66.QGiY2Q&id=541669172906&ns=1&abbucket=11#detail",
        senior_two: "https://item.taobao.com/item.htm?spm=a230r.1.14.16.QGiY2Q&id=541669496279&ns=1&abbucket=11#detail",
        senior_three: "https://item.taobao.com/item.htm?spm=a230r.1.14.71.QGiY2Q&id=541690650586&ns=1&abbucket=11#detail",
        north: "https://item.taobao.com/item.htm?spm=a230r.1.14.76.QGiY2Q&id=541682221705&ns=1&abbucket=11#detail"
    }
//淘宝链接End







//价格数据Start
    var SummerObj = {
        // primary: [
        //     {courseid:"3106011",lend:"288",zaoniao:'',zaoniao2:'',zaoniao3:'3532',coupon:"2668",Scholarship:"1889",Give:"金牌班主任服务",period: 120, old: 20520,discount:"12", new: 18560,},
        //     {courseid:"3106011",lend:"288",zaoniao:'',zaoniao2:'',zaoniao3:'4565',coupon:"3536",Scholarship:"2489",Give:"金牌班主任服务",period: 160, old: 27200,discount:"16", new: 24800,},
        //     {courseid:"3106011",lend:"288",zaoniao:'',zaoniao2:'',zaoniao3:'5756',coupon:"4420",Scholarship:"2489",Give:"金牌班主任服务",period: 200, old: 34000,discount:"20", new: 30700,},
        //     {courseid:"3106011",lend:"288",zaoniao:'',zaoniao2:'',zaoniao3:'6887',coupon:"5242",Scholarship:"4289",Give:"金牌班主任服务",period: 240, old: 40320,discount:"24", new: 36740,},
        //     {courseid:"3106011",lend:"288",zaoniao:'',zaoniao2:'',zaoniao3:'9042',coupon:"6864",Scholarship:"5489",Give:"金牌班主任服务",period: 320, old: 52800,discount:"32", new: 48440,},
        //     {courseid:"3106011",lend:"288",zaoniao:'',zaoniao2:'',zaoniao3:'11226',coupon:"6864",Scholarship:"5489",Give:"金牌班主任服务",period: 400, old: 52800,discount:"40", new: 60060,},
        //     {courseid:"3106011",lend:"288",zaoniao:'',zaoniao2:'',zaoniao3:'15384',coupon:"11794",Scholarship:"9178",Give:"金牌班主任服务",period: 560, old:90720,discount:"56", new: 81940,},
        // ],
        middle_one:  [
            {courseid:"KAHKTZ3101015",lend:"288",zaoniao:'1290',zaoniao2:'2375',zaoniao3:'3532',coupon:"2668",Scholarship:"1889",Give:"金牌班主任服务",period: 120,  old:25800,discount:"12", new: 25800,},
            {courseid:"KAHKTZ3101015",lend:"288",zaoniao:'1770',zaoniao2:'3069',zaoniao3:'4565',coupon:"3536",Scholarship:"2489",Give:"金牌班主任服务",period: 160,  old:35400,discount:"16", new: 35400,},
            {courseid:"KAHKTZ3101015",lend:"288",zaoniao:'2224',zaoniao2:'3871',zaoniao3:'5756',coupon:"4420",Scholarship:"2489",Give:"金牌班主任服务",period: 200,  old:44480,discount:"20", new: 44480,},
            {courseid:"KAHKTZ3101015",lend:"288",zaoniao:'2686',zaoniao2:'4631',zaoniao3:'6887',coupon:"5242",Scholarship:"4289",Give:"金牌班主任服务",period: 240,  old:53720,discount:"24", new: 53720,},
            {courseid:"KAHKTZ3101015",lend:"288",zaoniao:'3548',zaoniao2:'6080',zaoniao3:'9042',coupon:"6864",Scholarship:"5489",Give:"金牌班主任服务",period: 320,  old:70960,discount:"32", new: 70960,},
            {courseid:"KAHKTZ3101015",lend:"288",zaoniao:'4420',zaoniao2:'7548',zaoniao3:'11226',coupon:"6864",Scholarship:"5489",Give:"金牌班主任服务",period: 400, old:88400,discount:"40", new: 88400,},
            {courseid:"KAHKTZ3101015",lend:"288",zaoniao:'6092',zaoniao2:'10345',zaoniao3:'15384',coupon:"11794",Scholarship:"9178",Give:"金牌班主任服务",period:560,old:121840,discount:"56", new:121840,},
        ],
        middle_two: [
            {courseid:"KAHKTZ3101020",lend:"288",zaoniao:'1340',zaoniao2:'2473',zaoniao3:'3677',coupon:"2761",Scholarship:"1889",Give:"金牌班主任服务",period: 120,   old: 26800,discount:"12", new: 26800,},
            {courseid:"KAHKTZ3101020",lend:"288",zaoniao:'1834',zaoniao2:'3243',zaoniao3:'4823',coupon:"3661",Scholarship:"2489",Give:"金牌班主任服务",period: 160,   old: 36680,discount:"16", new: 36680,},
            {courseid:"KAHKTZ3101020",lend:"288",zaoniao:'2310',zaoniao2:'4027',zaoniao3:'5988',coupon:"4576",Scholarship:"2489",Give:"金牌班主任服务",period: 200,   old: 46200,discount:"20", new: 46200,},
            {courseid:"KAHKTZ3101020",lend:"288",zaoniao:'2782',zaoniao2:'4803',zaoniao3:'7143',coupon:"5398",Scholarship:"4289",Give:"金牌班主任服务",period: 240,   old: 55640,discount:"24", new: 55640,},
            {courseid:"KAHKTZ3101020",lend:"288",zaoniao:'3676',zaoniao2:'6306',zaoniao3:'9379',coupon:"7072",Scholarship:"5489",Give:"金牌班主任服务",period: 320,   old: 73520,discount:"32", new: 73520,},
            {courseid:"KAHKTZ3101020",lend:"288",zaoniao:'4564',zaoniao2:'7780',zaoniao3:'11571',coupon:"7072",Scholarship:"5489",Give:"金牌班主任服务",period: 320,  old: 91280,discount:"32", new: 91280,},
            {courseid:"KAHKTZ3101020",lend:"288",zaoniao:'6292',zaoniao2:'10686',zaoniao3:'15892',coupon:"7072",Scholarship:"5489",Give:"金牌班主任服务",period: 320, old: 125840,discount:"32", new:125840,},
        ],
        middle_three: [
            {courseid:"KAHKTZ3101025",lend:"288",zaoniao:'1438',zaoniao2:'2652',zaoniao3:'3944',coupon:"2933",Scholarship:"2289 ",Give:"金牌班主任服务",period: 120, old: 28760,discount:"12",new: 28760,},
            {courseid:"KAHKTZ3101025",lend:"288",zaoniao:'1962',zaoniao2:'3428',zaoniao3:'5098',coupon:"3890",Scholarship:"2889 ",Give:"金牌班主任服务",period: 160, old: 39240,discount:"16",new: 39240,},
            {courseid:"KAHKTZ3101025",lend:"288",zaoniao:'2464',zaoniao2:'4308',zaoniao3:'6406',coupon:"4862",Scholarship:"2889 ",Give:"金牌班主任服务",period: 200, old: 49280,discount:"20",new: 49280,},
            {courseid:"KAHKTZ3101025",lend:"288",zaoniao:'2900',zaoniao2:'5025',zaoniao3:'7473',coupon:"5834",Scholarship:"4889 ",Give:"金牌班主任服务",period: 240, old: 58000,discount:"24",new: 58000,},
            {courseid:"KAHKTZ3101025",lend:"288",zaoniao:'3884',zaoniao2:'6607',zaoniao3:'9825',coupon:"7571",Scholarship:"6289 ",Give:"金牌班主任服务",period: 320, old: 77680,discount:"32",new: 77680,},
        ],
        senior_one: [
            {courseid:"KAHKTZ3101030",lend:"288",zaoniao:'1474',zaoniao2:'2718',zaoniao3:'4043',coupon:"3026",Scholarship:"2289 ",Give:"金牌班主任服务",period: 120,   old:29480,discount:"12", new: 29480,},
            {courseid:"KAHKTZ3101030",lend:"288",zaoniao:'2008',zaoniao2:'3518',zaoniao3:'5232',coupon:"3994",Scholarship:"2889 ",Give:"金牌班主任服务",period: 160,   old:40160,discount:"16", new: 40160,},
            {courseid:"KAHKTZ3101030",lend:"288",zaoniao:'2505',zaoniao2:'4339',zaoniao3:'6452',coupon:"4992",Scholarship:"2889 ",Give:"金牌班主任服务",period: 200,   old:50100,discount:"20", new: 50100,},
            {courseid:"KAHKTZ3101030",lend:"288",zaoniao:'3015',zaoniao2:'5185',zaoniao3:'7711',coupon:"5928",Scholarship:"4889 ",Give:"金牌班主任服务",period: 240,   old:60300,discount:"24", new: 60300,},
            {courseid:"KAHKTZ3101030",lend:"288",zaoniao:'4047',zaoniao2:'6901',zaoniao3:'10263',coupon:"7779",Scholarship:"6289 ",Give:"金牌班主任服务",period: 320,  old:80940,discount:"32", new: 80940,},
            {courseid:"KAHKTZ3101030",lend:"288",zaoniao:'5039',zaoniao2:'8619',zaoniao3:'12818',coupon:"7779",Scholarship:"6289 ",Give:"金牌班主任服务",period: 400,  old:100780,discount:"40", new:100780,},
            {courseid:"KAHKTZ3101030",lend:"288",zaoniao:'6951',zaoniao2:'11819',zaoniao3:'17577',coupon:"13395",Scholarship:"10378",Give:"金牌班主任服务",period: 560,old:139020,discount:"56", new:139020,},
        ],
        senior_two: [
            {courseid:"KAHKTZ3101035",lend:"288",zaoniao:'1566',zaoniao2:'2886',zaoniao3:'4292',coupon:"3276",Scholarship:"2289 ",Give:"金牌班主任服务",period: 120,   old: 31320,discount:"12", new: 31320,},
            {courseid:"KAHKTZ3101035",lend:"288",zaoniao:'2150',zaoniao2:'3779',zaoniao3:'5620',coupon:"4347",Scholarship:"2889 ",Give:"金牌班主任服务",period: 160,   old: 43000,discount:"16", new: 43000,},
            {courseid:"KAHKTZ3101035",lend:"288",zaoniao:'2714',zaoniao2:'4727',zaoniao3:'7030',coupon:"5434",Scholarship:"2889 ",Give:"金牌班主任服务",period: 200,   old: 54280,discount:"20", new: 54280,},
            {courseid:"KAHKTZ3101035",lend:"288",zaoniao:'3270',zaoniao2:'5610',zaoniao3:'8343',coupon:"6427",Scholarship:"4889 ",Give:"金牌班主任服务",period: 240,   old: 65400,discount:"24", new: 65400,},
            {courseid:"KAHKTZ3101035",lend:"288",zaoniao:'4394',zaoniao2:'7498',zaoniao3:'11150',coupon:"8486",Scholarship:"6289 ",Give:"金牌班主任服务",period: 320,  old: 87880,discount:"32", new: 87880,},
            {courseid:"KAHKTZ3101035",lend:"288",zaoniao:'5494',zaoniao2:'9339',zaoniao3:'13888',coupon:"8486",Scholarship:"6289 ",Give:"金牌班主任服务",period: 400,  old: 109880,discount:"40", new:109880,},
            {courseid:"KAHKTZ3101035",lend:"288",zaoniao:'7574',zaoniao2:'12882',zaoniao3:'19157',coupon:"14560",Scholarship:"10378",Give:"金牌班主任服务",period: 560,old: 151480,discount:"56", new:151480,},
        ],
        senior_three: [
            {courseid:"KAHKTZ3101040",lend:"288",zaoniao:'1794',zaoniao2:'3307',zaoniao3:'4918',coupon:"3713",Scholarship:"2889 ",Give:"金牌班主任服务",period: 120, old: 35880,discount:"12", new: 35880,},
            {courseid:"KAHKTZ3101040",lend:"288",zaoniao:'2471',zaoniao2:'4325',zaoniao3:'6432',coupon:"4909",Scholarship:"3889 ",Give:"金牌班主任服务",period: 160, old: 49420,discount:"16", new: 49420,},
            {courseid:"KAHKTZ3101040",lend:"288",zaoniao:'3090',zaoniao2:'5372',zaoniao3:'7989',coupon:"6136",Scholarship:"3889 ",Give:"金牌班主任服务",period: 200, old: 61800,discount:"20", new: 61800,},
            {courseid:"KAHKTZ3101040",lend:"288",zaoniao:'3747',zaoniao2:'6445',zaoniao3:'9584',coupon:"7270",Scholarship:"5889 ",Give:"金牌班主任服务",period: 240, old: 74940,discount:"24", new: 74940,},
            {courseid:"KAHKTZ3101040",lend:"288",zaoniao:'4986',zaoniao2:'8564',zaoniao3:'12737',coupon:"9610",Scholarship:"7889 ",Give:"金牌班主任服务",period: 320,old: 99720,discount:"32", new: 99720,},
        ],
        // north: [
        //     {courseid:"3106046",lend:"288",coupon:"3962",Scholarship:"0",Give:"金牌班主任服务",period: 120, old: 30480,discount:"8 ", new: 30480,},
        //     {courseid:"3106046",lend:"288",coupon:"5262",Scholarship:"0",Give:"金牌班主任服务",period: 160, old: 40480,discount:"16", new: 40480,},
        //     {courseid:"3106046",lend:"288",coupon:"6578",Scholarship:"0",Give:"金牌班主任服务",period: 200, old: 50600,discount:"20", new: 50600,},
        //     {courseid:"3106046",lend:"288",coupon:"7800",Scholarship:"0",Give:"金牌班主任服务",period: 240, old: 60000,discount:"24", new: 60000,},
        //     {courseid:"3106046",lend:"288",coupon:"10317",Scholarship:"0",Give:"金牌班主任服务",period: 320, old: 79360,discount:"28", new: 79360,},
        //     {courseid:"3106046",lend:"288",coupon:"10317",Scholarship:"0",Give:"金牌班主任服务",period: 400, old: 79360,discount:"28", new: 79360,},
        //     {courseid:"3106046",lend:"288",coupon:"17763",Scholarship:"0",Give:"金牌班主任服务",period: 560, old: 136640,discount:"38", new:136640,},
        // ],
    }
//价格数据End

//优惠信息Start
    function privilege($this) {
        sessionStorage.setItem("s_keshi",$this.parent().siblings("p").find(".period").html())//课程时长
        sessionStorage.setItem("s_keshi1",$this.parent().siblings(".keshi").text())//课程时长
        sessionStorage.setItem("s_new",$this.parent().siblings("p").find(".new").html());//应付款价格
        sessionStorage.setItem("s_old",$this.parent().siblings("p").find(".old").html());//实付款价格
        sessionStorage.setItem("s_taobao",$this.data("taobao"));//淘宝链接
        sessionStorage.setItem("courseId",$this.data("course"));//课程id
        sessionStorage.setItem("scholarship",$this.data("scholarship"));//优惠价
        sessionStorage.setItem("zaoniao",$this.data("zaoniao"));//活动优惠价
        sessionStorage.setItem("zaoniao2",$this.data("zaoniao2"));//活动优惠价
        sessionStorage.setItem("zaoniao3",$this.data("zaoniao3"));//活动优惠价
        sessionStorage.setItem("lend",$this.data("lend"));//288活动优惠价
        $("#overlay1,#overlay").show();
        packetText = $(".Discount input").focus();
        $("#subtotalTotal").html(sessionStorage.getItem("s_new"));
        var oldNew = sessionStorage.getItem("s_old")-sessionStorage.getItem("s_new");
        $("#subtotalFavorable").html(oldNew);
        var discount = 0,discountText;
        $(".packet input,.Discount input").keyup(function () {
            // packetText = $(".packet input").val();
            discountText = $(".Discount input").val();
            switch(discountText){
                case "早鸟全款":
                    discount = parseInt(sessionStorage.getItem("zaoniao"));
                    break;
                // case "早鸟全款二人团":
                //     discount = parseInt(sessionStorage.getItem("zaoniao2"));
                //     break;
                // case "早鸟全款三人团":
                //     discount = parseInt(sessionStorage.getItem("zaoniao3"));
                //     break;
                default:
                    discount = 0;
            }
            $("#subtotalFavorable").html((discount+oldNew));
            $("#subtotalTotal").html(sessionStorage.getItem("s_new")-(discount));
        })
    }

    Date.prototype.format =function(format)
    {
        var o = {
            "M+" : this.getMonth()+1, //month
            "d+" : this.getDate(), //day
            "h+" : this.getHours(), //hour
            "m+" : this.getMinutes(), //minute
            "s+" : this.getSeconds(), //second
            "q+" : Math.floor((this.getMonth()+3)/3), //quarter
            "S" : this.getMilliseconds() //millisecond
        }
        if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
            (this.getFullYear()+"").substr(4- RegExp.$1.length));
        for(var k in o)if(new RegExp("("+ k +")").test(format))
            format = format.replace(RegExp.$1,
                RegExp.$1.length==1? o[k] :
                    ("00"+ o[k]).substr((""+ o[k]).length));
        return format;
    }
//格式化时间End











    begin("./../index.html");

    template.config("escape", false);
    $("#myTabContent").html(template('Tprimary', SummerObj));
    // console.log(SummerObj);
    $(".shopping a").on("click",function () {
        var $this = $(this);
        var $payment = $("#myTab li"), paymethod;
        $payment.each(function (index, item) {
            var $item = $(item); //
            if ($item.hasClass("active")) {
                sessionStorage.setItem("s_grade",$item.find("a").html()+"暑秋联报");//课程名称
            }
        });
        privilege($this);
        $("#clone").on("click",function () {
            $("#overlay1,#overlay").hide();
            $("#overlay1 .Discount input").val("");
        });
        $("#overlay1 a").on("click",function () {
            sessionStorage.setItem("s_new",$("#subtotalTotal").html());//应付款价格
            $("#overlay1 .Discount input").val("");
            $("#overlay1,#overlay").hide();
            $.ajax({
                url: CMSAPI + '/order/addOrder',
                data: {
                    courseName: sessionStorage.getItem("s_grade")+"课程"+sessionStorage.getItem("s_keshi")+"小时课程包",//课程名称
                    courseId: sessionStorage.getItem("courseId"),//课程Id
                    classHour: sessionStorage.getItem("s_keshi"),//课程时长
                    payMethod: paymethod,
                    stuName: "",//学生姓名
                    parentName:"",//家长姓名
                    relation: "",//关系
                    phone: "",//联系方式
                    province: "",//省
                    city: "",//市
                    district: "",//区
                    town: "",//镇
                    address: "",//详细地址
                    totalPrice:sessionStorage.getItem("s_new"),//合计总价格
                    password: $.cookie("passWord"),//密码
                    uuid: $.cookie("userName")//账号
                },
                timeout:5000,
                type: "post",
                dataType: "json",
                success: function (data) {
                    if(data.code == 100){
                        sessionStorage.setItem("ordersToken",data.data);
                        location.href="power/payment.html";
                        // sessionStorage.setItem("$orderInfoNo",data.data);
                    }else {
                        alert("订单提交失败");
                    }
                },
                complete: function () {
                },
                error: function () {
                }
            })
        })
    })
})



