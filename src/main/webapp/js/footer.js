$(function () {
    //底部链接管理
    $.ajax({
        url: CMSPCAPI + '/cms/server/systemManager/getFooterColumn',
        type: "get",
        dataType: "json",
        success: function (res) {
            var data = res.data;
            for (var i = 0; i < data.length; i++) {
                var item = '<li class="title">' + data[i].columnName + '</li>';
                var footerChildList=data[i].footerChildList;
                var itemSum='';
                for(var a = 0; a < footerChildList.length; a++){
                    var item2 = '<li><a href="'+
                        footerChildList[a].link+
                        '">'+
                        footerChildList[a].name +
                        '</a></li>';
                    itemSum=itemSum+item2;
                }
                var items='<ul>'+item+itemSum+'</ul>';
                console.log(items);
                $(".netWorkLink .contactNum").before(items);
            }
        },
        error: function (res) {
        }
    });
    //友情链接管理
    $.ajax({
        url: CMSPCAPI + '/cms/server/systemManager/getFriendlyLink',
        type: "get",
        dataType: "json",
        success: function (res) {
            var data = res.data.linkList;
            var linkLenth=res.data.linkList.length;
            if(linkLenth<=24){
                $(".linkArrow").hide();
            }
            else{
                $(".linkArrow").show();
            }
            for (var i = 0; i < data.length; i++) {
                var item = ' <li><a href="' +
                    data[i].websiteUrl +
                    '">'+
                    data[i].websiteName+
                    '</a></li>';
                $(".friendshipLink ul").append(item);
            }
        },
        error: function (res) {
        }
    });

    var arrowTime=0;
    $(".linkArrow").click(function(){
        if(arrowTime==0){
            $(this).addClass("active");
            arrowTime=1;
            $(this).prev("ul").addClass("active");
        }
        else{
            $(this).removeClass("active");
            arrowTime=0;
            $(this).prev("ul").removeClass("active");
        }
    });
});