$(function () {
    (function(){
        var option ={"auto_play":"0","file_id":"9031868222938336340","app_id":"1253729545","width":640,"height":320,"https":1};
        /*调用播放器进行播放*/
        new qcVideo.Player(
            /*代码中的id_video_container将会作为播放器放置的容器使用,可自行替换*/
            "id_video_container_9031868222995681094",
            option
        );
        var $thisId;
        $(".video-loading li").on("click",function () {
            clearTimeout(time);
            clearTimeout(time1);
            var $this = $(this);
            $thisId = $(this).data("id");
            $(".video-loading li").removeClass("active");
            $this.addClass("active");
            var option ={"auto_play":"0","file_id":$thisId,"app_id":"1253729545","width":640,"height":320,"https":1};
            /*调用播放器进行播放*/
            new qcVideo.Player(
                /*代码中的id_video_container将会作为播放器放置的容器使用,可自行替换*/
                "id_video_container_9031868222995681094",
                option
            );
            $("#overlay").show();
            $(".video").show();
        })
        $("#video-clone,#overlay").on("click",function () {
            if($(".video").css("display") == "block"){
                $("#overlay").hide();
                $(".video").hide();
                var option ={"auto_play":"0","file_id":$thisId,"app_id":"1253729545","width":640,"height":320,"https":1,"playStatus":"playEnd"};
                new qcVideo.Player(
                    /*代码中的id_video_container将会作为播放器放置的容器使用,可自行替换*/
                    "id_video_container_9031868222995681094",
                    option
                );
            }
        })
    })()
})