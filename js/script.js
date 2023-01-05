document.querySelector("#layer button").addEventListener("click", function () {
  document.querySelector("#layer").style.display = "none";
});

let now_img, next_img;
function fade_change() {
  now_img = $(".visual_slide li:eq(0)");
  next_img = $(".visual_slide li:eq(1)");
  next_img.addClass("active").css("opacity", 0).animate({ "opacity": 1 }, 1000, function () {
    $(".visual_slide").append(now_img);
    now_img.removeClass("active");
  });
}
let timer = setInterval("fade_change()", 4000);

$("#buttonList1 li").click(function () {
  clearInterval(timer);
});

const visual = $("#brandVisual>ul>li");
const button = $("#buttonList1>li");
let btnIdx = 0; //클릭한 페이지 버튼의 인덱스
let viIdx = $(visual).index(); //메인 비주얼 이미지 인덱스


//stop,play 버튼 클릭
let btn_stop = $(".visual .controls .btn_stop")
let btn_play = $(".visual .controls .btn_play")
btn_stop.click(function () {
  btn_stop.css("z-index", 9);
  btn_play.css("z-index", 10);
  clearInterval(timer);
})
btn_play.click(function () {
  btn_play.css("z-index", 9);
  btn_stop.css("z-index", 10);
  setInterval("fade_change()", 4000);
})

//business 슬라이드
function js_business() {
  var obj = $("#brandBusiness >.slider");
  obj.prev = obj.find(">.prev");
  obj.next = obj.find(">.next");
  obj.move = obj.find(">.move >ul");
  obj.move.li = obj.move.find(">li");
  obj.move.li.a = obj.move.li.find("a");

  obj.move.li.width($(window).width());
  $(window).resize(function () {
    obj.move.li.width($(window).width());
  });

  //이전
  obj.prev.click(function () {
    if (obj.move.is(":animated")) return false;

    obj.move.find(">li:last").prependTo(obj.move).fadeIn(100);
    obj.move.find(">li:eq(1)").fadeIn(0);
    obj.move.css({ "left": -obj.move.li.width() });
    obj.move.stop().animate({ "left": 0 }, 700, function () {
      obj.move.find(">li:eq(1)").fadeOut(100);
    });
    obj.move.li.a.removeAttr("class");
    obj.move.find(">li:first a").addClass("on");

    return false;
  });

  //다음	
  obj.next.click(function () {
    if (obj.move.is(":animated")) return false;

    obj.move.stop().animate({ "left": -obj.move.li.width() }, 700, function () {
      obj.move.find(">li:first").appendTo(obj.move).fadeOut(100);
      obj.move.css({ "left": 0 });
    });
    obj.move.li.a.removeAttr("class");
    obj.move.find(">li:eq(1)").fadeIn(100).find("a").addClass("on");

    return false;
  });
}

//relate_site 드롭 업

function js_relate() {
  var obj = $("#footer .relate_site");

  obj.each(function () {
    var t = $(this);
    t.btn = t.find(">a");
    t.ul = t.find(">ul");
    t.ul.li = t.ul.find(">li");

    $("<em class='hidden'>열기</em>").appendTo(t.btn);

    t.btn.on("click", function () {
      if (t.ul.is(":animated")) return false;

      $(this).toggleClass("on").siblings("ul").slideToggle(300);
      if ($(this).hasClass("on")) {
        $(this).find(">em").text("닫기");
      } else {
        $(this).find(">em").text("열기");
      }
      return false;
    });

    t.on("mouseleave", function () {
      $(this).find(">a").removeAttr("class");
      $(this).find(">ul").slideUp(300);
      t.btn.find(">em").text("열기");
      return false;
    });

    t.ul.li.last().find(">a").on("focusout", function () {
      $(this).parent().parent().siblings("a").removeAttr("class");
      $(this).parent().parent().slideUp(300);
      t.btn.find(">em").text("열기");
      return false;
    });
  });
}


//quick_sm
quick_sm ();
function quick_sm (){
	var obj = $("#content");
		obj.box = obj.find(".section");
		obj.tab = obj.find("#section_nav >li >a");
    console.log(obj.box);
	
	//click
	obj.tab.click(function() {
		var idx = $(this).parent().index();

		$("body,html").stop().animate({"scrollTop":(obj.box.eq(idx).offset().top - $("#header").height()) +"px"},500);
		return false;
	});

	//scroll
	$(window).scroll(function(){
		main_scroll($(window).scrollTop());
	});
	function main_scroll(num){
		var topMin = num;
		var topMax = num+parseInt($(window).height());
		
		for(var i=0; i<obj.box.length; i++){
			var tt = parseInt(obj.box.eq(i).position().top) + $(window).height()/2;
			var bb = tt + parseInt(obj.box.eq(i).innerHeight());
		
			if(topMax >= tt){
				if(topMin >= bb){
					obj.tab.parent().eq(i).find(">a").removeClass("active");
				} else {
					obj.tab.parent().parent().removeAttr("class").addClass("sec_"+i);
					
					if($("#section_nav").hasClass("sec_0")){
						$("#section_nav").removeClass("on");
					} else if ($("#section_nav").hasClass("sec_1")) {
						$("#section_nav").addClass("on");
					} else if ($("#section_nav").hasClass("sec_2")) {
						$("#section_nav").addClass("on");
					} else if ($("#section_nav").hasClass("sec_3")) {
						$("#section_nav").addClass("on");
					} else if ($("#section_nav").hasClass("sec_4")) {
						$("#section_nav").addClass("on");
					}
					
					obj.tab.removeClass("active");
					obj.tab.parent().eq(i).find(">a").addClass("active");
				}
			} else {
				obj.tab.parent().eq(i).find(">a").removeClass("active");
			}
		}
	}
}

// top_btn
top_btn ();
function top_btn (){	
	$(window).scroll(function(){
		if($(document).scrollTop() > $(window).height()/2){
			$(".btn_top").fadeIn(300);		
		} else {
			$(".btn_top").fadeOut(300);		
		}
	});
	$(".btn_top").click(function(){
		$("body,html").stop().animate({"scrollTop":"0"},500);
		return false;
	});
}