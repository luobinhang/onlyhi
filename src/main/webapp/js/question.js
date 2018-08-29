$(function(){

  var name = sessionStorage.getItem("name"); // 用户姓名
  var leadsPhone = sessionStorage.getItem("phone"); // 用户电话
  var grade = sessionStorage.getItem("grade"); // 用户年级
  var subject = sessionStorage.getItem("subject"); // 薄弱科目
  // if(!name || !leadsPhone){
  //   window.location.href = "new-test_sign.html";
  // }

    var pageNum = 0;
    var ml;
    var page = $(".question_page");
    var prev = $(".question_prev");
    var next = $(".question_next");
    var tab = $(".question_tab");
    var confirm = $(".question_confirm");
    var tip = $(".question_tip");

    tab.on("click","span",function(){  // 选择
    	var _t = $(this);
    	_t.addClass("active").siblings("span").removeClass("active");
    	_t.parents("li").find(".question_tip").hide();
    })




    next.on("click",function(){  //下一页，完成
    	var _t = $(this);
    	var allLength = $(".question_tab .active").length; //全部完成题目
    	var activePage = $(".question_page ul").eq(pageNum); // 当前页面
    	var activeLength = activePage.find(".active").length; //本页完成题目
			var activeChild = activePage.children("li").length - 1;
    	if(allLength == 15 && _t.html() == "完成"){
        var selectData = $(".question_tab .active").eq(0).data("html");
        for(var i = 1;i<15;i++){
          selectData += "," + $(".question_tab .active").eq(i).data("html");
        };
        sessionStorage.setItem("assessmentResult",selectData);
        location.href = "test.html";
    	}else if(activeLength == activeChild){
    		pageNum++;	
    		if(pageNum>=2){
	    		pageNum = 2;
	    		_t.html("完成");
	    	}
	    	ml = pageNum * (-100);
    		prev.show();
    		page.stop().animate({marginLeft:ml+"%"},300);
    	}else{
    		addAnimate();
    		activePage.find(".question_tip").show();
    		$(".active").parents("li").find(".question_tip").hide();
    	}
    	
    	
    });
    prev.on("click",function(){   // 上一页
    	var _t = $(this);
    	pageNum--;
    	if(pageNum<=0){
    		pageNum = 0;
    		_t.hide();
    	}
		ml = pageNum * (-100);
		page.stop().animate({marginLeft:ml+"%"},300);
		next.html("下一页");
    	
    	
    });

    function addAnimate(){  // 错误动画
    	$(".content").addClass(" shake")
    	setTimeout(function(){
	    	$(".content").removeClass(" shake");
	    }, 1000);
    }

})