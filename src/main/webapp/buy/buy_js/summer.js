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
        primary: [
            {courseid:"KAHKTZ3101010",lend:"288",zaoniao:'956',zaoniao2:'1810',zaoniao3:'2691',coupon:"2668",Scholarship:"1889",Give:"金牌班主任服务",period: 120,  old:  19120,discount:"12", new: 19120,},
            {courseid:"KAHKTZ3101010",lend:"288",zaoniao:'1272',zaoniao2:'2418',zaoniao3:'3596',coupon:"3536",Scholarship:"2489",Give:"金牌班主任服务",period: 160, old:  25440,discount:"16", new: 25440,},
            {courseid:"KAHKTZ3101010",lend:"288",zaoniao:'1575',zaoniao2:'2993',zaoniao3:'4451',coupon:"4420",Scholarship:"2489",Give:"金牌班主任服务",period: 200, old:  31500,discount:"20", new: 31500,},
            {courseid:"KAHKTZ3101010",lend:"288",zaoniao:'1885',zaoniao2:'3582',zaoniao3:'5327',coupon:"5242",Scholarship:"4289",Give:"金牌班主任服务",period: 240, old:  37700,discount:"24", new: 37700,},
            {courseid:"KAHKTZ3101010",lend:"288",zaoniao:'2486',zaoniao2:'4723',zaoniao3:'7024',coupon:"6864",Scholarship:"5489",Give:"金牌班主任服务",period: 320, old:  49720,discount:"32", new: 49720,},
            {courseid:"KAHKTZ3101010",lend:"288",zaoniao:'3067',zaoniao2:'5856',zaoniao3:'8709',coupon:"6864",Scholarship:"5489",Give:"金牌班主任服务",period: 400, old:  61340,discount:"40", new: 61340,},
            {courseid:"KAHKTZ3101010",lend:"288",zaoniao:'4209',zaoniao2:'7989',zaoniao3:'11881',coupon:"11794",Scholarship:"9178",Give:"金牌班主任服务",period: 560, old:84180,discount:"56", new: 84180,},
        ],
        middle_one:  [
            {courseid:"KAHKTZ3101015",lend:"288",zaoniao:'982',zaoniao2:'1810',zaoniao3:'2691',coupon:"2668",Scholarship:"1889",Give:"金牌班主任服务",period: 120, old:   19640,discount:"12", new:  19640,},
            {courseid:"KAHKTZ3101015",lend:"288",zaoniao:'1312',zaoniao2:'2418',zaoniao3:'3596',coupon:"3536",Scholarship:"2489",Give:"金牌班主任服务",period: 160, old:  26240,discount:"16", new:  26240,},
            {courseid:"KAHKTZ3101015",lend:"288",zaoniao:'1625',zaoniao2:'2993',zaoniao3:'4451',coupon:"4420",Scholarship:"2489",Give:"金牌班主任服务",period: 200, old:  32500,discount:"20", new:  32500,},
            {courseid:"KAHKTZ3101015",lend:"288",zaoniao:'1945',zaoniao2:'3582',zaoniao3:'5327',coupon:"5242",Scholarship:"4289",Give:"金牌班主任服务",period: 240, old:  38900,discount:"24", new:  38900,},
            {courseid:"KAHKTZ3101015",lend:"288",zaoniao:'2566',zaoniao2:'4723',zaoniao3:'7024',coupon:"6864",Scholarship:"5489",Give:"金牌班主任服务",period: 320, old:  51320,discount:"32", new:  51320,},
            {courseid:"KAHKTZ3101015",lend:"288",zaoniao:'3183',zaoniao2:'5856',zaoniao3:'8709',coupon:"6864",Scholarship:"5489",Give:"金牌班主任服务",period: 400, old:  63660,discount:"40", new:  63660,},
            {courseid:"KAHKTZ3101015",lend:"288",zaoniao:'4325',zaoniao2:'7989',zaoniao3:'11881',coupon:"11794",Scholarship:"9178",Give:"金牌班主任服务",period: 560, old:86500,discount:"56", new:  86500,},
        ],
        middle_two: [
            {courseid:"KAHKTZ3101020",lend:"288",zaoniao:'1022',zaoniao2:'1876',zaoniao3:'2790',coupon:"2761",Scholarship:"1889",Give:"金牌班主任服务",period: 120, old:   20440,discount:"12", new:   20440,},
            {courseid:"KAHKTZ3101020",lend:"288",zaoniao:'1365',zaoniao2:'2506',zaoniao3:'3726',coupon:"3661",Scholarship:"2489",Give:"金牌班主任服务",period: 160, old:  27300,discount:"16", new:  27300,},
            {courseid:"KAHKTZ3101020",lend:"288",zaoniao:'1685',zaoniao2:'3102',zaoniao3:'4614',coupon:"4576",Scholarship:"2489",Give:"金牌班主任服务",period: 200, old:  33700,discount:"20", new:  33700,},
            {courseid:"KAHKTZ3101020",lend:"288",zaoniao:'2009',zaoniao2:'3699',zaoniao3:'5501',coupon:"5398",Scholarship:"4289",Give:"金牌班主任服务",period: 240, old:  40180,discount:"24", new:  40180,},
            {courseid:"KAHKTZ3101020",lend:"288",zaoniao:'2642',zaoniao2:'4863',zaoniao3:'7233',coupon:"7072",Scholarship:"5489",Give:"金牌班主任服务",period: 320, old:  52840,discount:"32", new:  52840,},
            {courseid:"KAHKTZ3101020",lend:"288",zaoniao:'3278',zaoniao2:'6033',zaoniao3:'8973',coupon:"7072",Scholarship:"5489",Give:"金牌班主任服务",period: 400, old:  65560,discount:"40", new:  65560,},
            {courseid:"KAHKTZ3101020",lend:"288",zaoniao:'4468',zaoniao2:'8213',zaoniao3:'12215',coupon:"12156",Scholarship:"9178",Give:"金牌班主任服务",period: 560, old:89360,discount:"56", new: 89360,},
        ],
        middle_three: [
            {courseid:"KAHKTZ3101025",lend:"288",zaoniao:'1160',zaoniao2:'2024',zaoniao3:'3010',coupon:"2933",Scholarship:"2289 ",Give:"金牌班主任服务",period: 120, old:  23200,discount:"12",new: 23200,},
            {courseid:"KAHKTZ3101025",lend:"288",zaoniao:'1524',zaoniao2:'2660',zaoniao3:'3956',coupon:"3890",Scholarship:"2889 ",Give:"金牌班主任服务",period: 160, old:  30480,discount:"16",new: 30480,},
            {courseid:"KAHKTZ3101025",lend:"288",zaoniao:'1909',zaoniao2:'3333',zaoniao3:'4956',coupon:"4862",Scholarship:"2889 ",Give:"金牌班主任服务",period: 200, old:  38180,discount:"20",new: 38180,},
            {courseid:"KAHKTZ3101025",lend:"288",zaoniao:'2221',zaoniao2:'3879',zaoniao3:'5768',coupon:"5834",Scholarship:"4889 ",Give:"金牌班主任服务",period: 240, old:  44420,discount:"24",new: 44420,},
            {courseid:"KAHKTZ3101025",lend:"288",zaoniao:'2924',zaoniao2:'5101',zaoniao3:'7586',coupon:"7571",Scholarship:"6289 ",Give:"金牌班主任服务",period: 320, old:  58480,discount:"32",new: 58480,},
            {courseid:"KAHKTZ3101025",lend:"288",zaoniao:'3656',zaoniao2:'6380',zaoniao3:'9489',coupon:"7571",Scholarship:"6289 ",Give:"金牌班主任服务",period: 400, old:  73120,discount:"40",new: 73120,},
            {courseid:"KAHKTZ3101025",lend:"288",zaoniao:'5088',zaoniao2:'8876',zaoniao3:'13201',coupon:"12958",Scholarship:"10378",Give:"金牌班主任服务",period: 560, old:101760,discount:"56",new:101760,},
        ],
        senior_one: [
            {courseid:"KAHKTZ3101030",lend:"288",zaoniao:'1112',zaoniao2:'2047',zaoniao3:'3045',coupon:"3026",Scholarship:"2289 ",Give:"金牌班主任服务",period: 120, old: 22240,discount:"12", new: 22240,},
            {courseid:"KAHKTZ3101030",lend:"288",zaoniao:'1464',zaoniao2:'2699',zaoniao3:'4014',coupon:"3994",Scholarship:"2889 ",Give:"金牌班主任服务",period: 160, old: 29280,discount:"16", new: 29280,},
            {courseid:"KAHKTZ3101030",lend:"288",zaoniao:'1826',zaoniao2:'3366',zaoniao3:'5005',coupon:"4992",Scholarship:"2889 ",Give:"金牌班主任服务",period: 200, old: 36520,discount:"20", new: 36520,},
            {courseid:"KAHKTZ3101030",lend:"288",zaoniao:'2180',zaoniao2:'4017',zaoniao3:'5974',coupon:"5928",Scholarship:"4889 ",Give:"金牌班主任服务",period: 240, old: 43600,discount:"24", new: 43600,},
            {courseid:"KAHKTZ3101030",lend:"288",zaoniao:'2880',zaoniao2:'5304',zaoniao3:'7888',coupon:"7779",Scholarship:"6289 ",Give:"金牌班主任服务",period: 320, old: 57600,discount:"32", new: 57600,},
            {courseid:"KAHKTZ3101030",lend:"288",zaoniao:'3593',zaoniao2:'6616',zaoniao3:'9840',coupon:"7779",Scholarship:"6289 ",Give:"金牌班主任服务",period: 400, old: 71860,discount:"40", new: 71860,},
            {courseid:"KAHKTZ3101030",lend:"288",zaoniao:'4926',zaoniao2:'9060',zaoniao3:'13473',coupon:"13395",Scholarship:"10378",Give:"金牌班主任服务",period: 560,old:98520,discount:"56", new: 98520,},
        ],
        senior_two: [
            {courseid:"KAHKTZ3101035",lend:"288",zaoniao:'1224',zaoniao2:'2254',zaoniao3:'3352',coupon:"3276",Scholarship:"2289 ",Give:"金牌班主任服务",period: 120, old: 24480,discount:"12", new: 24480,},
            {courseid:"KAHKTZ3101035",lend:"288",zaoniao:'1596',zaoniao2:'2941',zaoniao3:'4373',coupon:"4347",Scholarship:"2889 ",Give:"金牌班主任服务",period: 160, old: 31920,discount:"16", new: 31920,},
            {courseid:"KAHKTZ3101035",lend:"288",zaoniao:'2010',zaoniao2:'3705',zaoniao3:'5510',coupon:"5434",Scholarship:"2889 ",Give:"金牌班主任服务",period: 200, old: 40200,discount:"20", new: 40200,},
            {courseid:"KAHKTZ3101035",lend:"288",zaoniao:'2383',zaoniao2:'4389',zaoniao3:'6528',coupon:"6427",Scholarship:"4889 ",Give:"金牌班主任服务",period: 240, old: 47660,discount:"24", new: 47660,},
            {courseid:"KAHKTZ3101035",lend:"288",zaoniao:'3147',zaoniao2:'5793',zaoniao3:'8616',coupon:"8486",Scholarship:"6289 ",Give:"金牌班主任服务",period: 320, old: 62940,discount:"32", new: 62940,},
            {courseid:"KAHKTZ3101035",lend:"288",zaoniao:'3923',zaoniao2:'7221',zaoniao3:'10739',coupon:"8486",Scholarship:"6289 ",Give:"金牌班主任服务",period: 400, old:78460,discount:"40", new: 78460,},
            {courseid:"KAHKTZ3101035",lend:"288",zaoniao:'5360',zaoniao2:'9898',zaoniao3:'14720',coupon:"14560",Scholarship:"10378",Give:"金牌班主任服务",period: 560,old:107200,discount:"56", new:107200,},
        ],
        senior_three: [
            {courseid:"KAHKTZ3101040",lend:"288",zaoniao:'1458',zaoniao2:'2547',zaoniao3:'3787',coupon:"3713",Scholarship:"2889 ",Give:"金牌班主任服务",period: 120, old:  29160,discount:"12", new:  29160,},
            {courseid:"KAHKTZ3101040",lend:"288",zaoniao:'1907',zaoniao2:'3329',zaoniao3:'4950',coupon:"4909",Scholarship:"3889 ",Give:"金牌班主任服务",period: 160, old:  38140,discount:"16", new:  38140,},
            {courseid:"KAHKTZ3101040",lend:"288",zaoniao:'2411',zaoniao2:'4214',zaoniao3:'6267',coupon:"6136",Scholarship:"3889 ",Give:"金牌班主任服务",period: 200, old:  48220,discount:"20", new:  48220,},
            {courseid:"KAHKTZ3101040",lend:"288",zaoniao:'2862',zaoniao2:'4996',zaoniao3:'7430',coupon:"7270",Scholarship:"5889 ",Give:"金牌班主任服务",period: 240, old:  57240,discount:"24", new:  57240,},
            {courseid:"KAHKTZ3101040",lend:"288",zaoniao:'3786',zaoniao2:'6603',zaoniao3:'9819',coupon:"9610",Scholarship:"7889 ",Give:"金牌班主任服务",period: 320, old:  75720,discount:"32", new:  75720,},
            {courseid:"KAHKTZ3101040",lend:"288",zaoniao:'4697',zaoniao2:'8215',zaoniao3:'12218',coupon:"9610",Scholarship:"7889 ",Give:"金牌班主任服务",period: 400, old: 93940,discount:"40", new:  93940,},
            {courseid:"KAHKTZ3101040",lend:"288",zaoniao:'6342',zaoniao2:'11095',zaoniao3:'16501',coupon:"16162",Scholarship:"13788",Give:"金牌班主任服务",period: 560,old:126840,discount:"56", new: 126840,},
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



