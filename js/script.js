document.querySelector("#layer button").addEventListener("click", function () {
  document.querySelector("#layer").style.display = "none";
});

//header_fade
header_fade ();
function header_fade (){	
	$(window).scroll(function(){
		if($(document).scrollTop() > $(window).height()/2){
			$("#header_nav").addClass("on");		
		} else {
			$("#header_nav").removeClass("on");
		}
	});
}

//visual_slide
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

//relate_site 드롭 업
function js_relate() {
	var t = $("#footer .site_box .relate_site");
	t.btn = t.find(">a");
	t.ul = t.find(">ul");
	t.ul.li = t.ul.find(">li");
}





function js_relate() {
  
	obj.each(function () {
	  var t = $(this);
	  t.btn = t.find(">a");
	  t.ul = t.find(">ul");
	  t.ul.li = t.ul.find(">li");
    
	  t.btn.click( function () {  
		$(this).toggleClass("on").siblings("ul").slideToggle(300);
		if ($(this).hasClass("on")) {
		  $(this).find(">em").text("닫기");
		} else {
		  $(this).find(">em").text("열기");
		}
		return false;
	  });
  
	  t.ul.li.last().find(">a").on("focusout", function () {
		$(this).parent().parent().siblings("a").removeAttr("class");
		$(this).parent().parent().slideUp(300);
		return false;
	  });
	});
  }
  



//business 슬라이드
function js_business() {
	var obj = $("#brandBusiness >.slider");
	obj.prev = obj.find(">.prev");
	obj.next = obj.find(">.next");
	obj.move = obj.find(">.move >ul");
	obj.move.li = obj.move.find(">li");
	obj.move.li.a = obj.move.li.find("a");
  
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
  
  $(document).ready(function(){
	  js_visual();
	  
	  function js_visual(){
		  var slide = $(".visual");
		  slide.titles = slide.find(">.title");
		  slide.controls = slide.find(">.control");
		  slide.counts = slide.controls.find(">.count");
		  slide.btn_left = slide.controls.find(">.btn_left");
		  slide.btn_right = slide.controls.find(">.btn_right");
		  slide.btn_play = slide.controls.find(">.btn_play");
		  slide.btn_stop = slide.controls.find(">.btn_stop");
		  slide.moves = slide.find(">.move");
		  slide.ul = slide.moves.find(">ul");
		  slide.li = slide.ul.find(">li");
		  slide.a = slide.ul.find(">li>a");
		  slide.speeds = 500;
		  slide.autos = "N";
		  slide.times = "";
		  slide.times_speeds = 4000;
		  slide.nums = 1;
		  
		  if(slide.parent().hasClass("bodo")){
			  slide.li.hide();
			  slide.li.first().show();
		  }
	  
		  //제어
		  if(slide.li.size() < 2){
			  slide.controls.remove();
			  return false;
		  }
	  
		  //심볼
		  $("<ul></ul>").prependTo(slide.controls);
		  for(var i=0; i<slide.li.size(); i++){
			  $('<li><a href="#">'+(i+1)+'번</a></li>').appendTo(slide.controls.find(">ul"));
		  }
		  slide.simbols = slide.controls.find(">ul>li");
		  slide.simbols.eq(0).find(">a").addClass("on");
	  
		  //넘버링
		  for(var i=0; i<slide.li.size(); i++){
			  slide.li.eq(i).attr("data-count",(i+1));
		  }
	  
		  //총 카운트 적용
		  slide.counts.html(slide.nums+"/<span>"+slide.li.size()+"</span>");
	  
	  
		  //버튼 : 다음
		  slide.btn_right.click(function(){
			  slide.btn_stop.click();
			  movement("right");
			  return false;
		  });
	  
		  //버튼 : 이전
		  slide.btn_left.click(function(){
			  slide.btn_stop.click();
			  movement("left");
			  return false;
		  });
	  
		  //버튼 : 재생
		  slide.btn_play.click(function(){
			  slide.btn_play.hide();
			  slide.btn_stop.css("display","inline-block");
			  slide.autos = "Y";
			  slide.times = setTimeout(function(){
				  movement("right");
			  },slide.times_speeds);
			  return false;
		  });
	  
		  //버튼 : 정지
		  slide.btn_stop.click(function(){
			  slide.btn_stop.hide();
			  slide.btn_play.css("display","inline-block");
			  slide.autos = "N";
			  clearTimeout(slide.times);
			  return false;
		  });
	  
		  //버튼 : 심볼
		  slide.simbols.find(">a").click(function(){
			  if($(this).hasClass("on")) return false;
			  var idx = slide.simbols.index($(this).parent());
			  slide.btn_stop.click();
			  movement(idx);
			  return false;
		  });
	  
		  //자동재생
		  slide.btn_play.click();
	  
		  //animate
		  function movement(ty){
			  slide.li = slide.ul.find(">li");
	  
			  var olds = 0;
			  var news = 0;
	  
			  if(ty == "right"){
				  //다음
				  olds = slide.nums;
				  news = slide.nums + 1;
				  
				  
				  //alert(news);
	  
				  //if(news >= slide.li.size()) news = 0;
				  if(news < slide.li.size()) {
					  news = news;
				  } else if (news > slide.li.size()) {
					  news = 1;
				  }
			  } else if(ty == "left"){
				  //이전
				  olds = slide.nums;
				  news = slide.nums - 1;
	  
				  if(news < 1) news = slide.li.size();
			  } else {
				  //심볼클릭
				  olds = slide.nums;
				  news = ty+1;
				  if(news >= slide.li.size()) news = 0;
			  }
	  
			  if(slide.li.eq(news-1).is(":animated")) return false;
	  
			  slide.li.eq(olds-1).stop().css({"opacity":"1","left":"0","z-index":"10"}).animate({"opacity":"0"},slide.speeds,function(){
				  slide.li.eq(olds-1).css({"left":"100%","display":"none"});
				  if(slide.autos == "Y"){
					  slide.times = setTimeout(function(){
						  movement("right");
					  },slide.times_speeds);
				  }
			  });
	  
			  slide.li.eq(news-1).css({"display":"block"}).stop().css({"opacity":"1","left":"0","z-index":"9"}).animate({"opacity":"1"},slide.speeds,function(){
			  });
	  
			  slide.nums = news;
	  
			  //총 카운트 적용
			  slide.counts.html(slide.nums+"/<span>"+slide.li.size()+"</span>");
	  
			  //심볼
			  slide.simbols.find(">a.on").removeClass("on");
			  slide.simbols.eq(slide.nums-1).find(">a").addClass("on");
		  }
	  }	
  });
  
  
  /* ///////////////////////////////////////////////////////////////////////////////////////////////////////////
	  
	  Slide Script
  
  /////////////////////////////////////////////////////////////////////////////////////////////////////////// */
  $(window).load(function(){
	  if($(".js_slide").size() != 0){
		  setTimeout(function(){
			  //slide_AC();	
		  },0);
	  }
  });
  function slide_AC(){
	  var slide = $(".js_slide");
  
	  for(var i=0; i<slide.size(); i++){
		  if(slide.eq(i).hasClass("type_03")) slide_type_02(slide.eq(i));
		  else slide_type_01(slide.eq(i));
	  }
  
	  //$('<div class="mob_bodo"></div>').insertAfter($(".news >.layout >.title"));
	  //$(".news .bodo .move >ul >li:first >ul").clone(false).appendTo($(".mob_bodo"));
	  $('<div class="mob_bodo"><ul></ul></div>').insertAfter($(".news >.layout >.title"));
	  $(".news .bodo .move >ul >li >ul>li").clone(false).appendTo($(".mob_bodo>ul"));
	  $(".news .bodo .btn_more").clone(false).insertAfter($(".mob_bodo"));
	  $('<div class="swiper-pagination"></div>').appendTo($(".mob_bodo"));
	  $(".mob_bodo").addClass("swiper-container");
	  $(".mob_bodo ul").addClass("swiper-wrapper");
	  $(".mob_bodo ul >li").addClass("swiper-slide");
	  
	  js_slider ();	
	  function js_slider (){
		  var swiper = new Swiper('.swiper-container', {
			  slidesPerView: 3,
			  loop: true,
			  pagination: {
			  el: '.swiper-pagination'
			},
			  //autoplay: {
			  //delay: 4000,
			  //disableOnInteraction: false,
		  //},
		  breakpoints: {
			  840: {
				  slidesPerView: 3
			  },
			  640: {
				  slidesPerView: 3
			  },
			  480: {
				  slidesPerView: 2
			  },
			  320: {
				  slidesPerView: 1
			  }
			  }
		  });
	  }
	  
  }
  function slide_type_01(slide){
	  var slide = slide;
	  slide.controls = slide.find(">.control");
	  slide.counts = slide.controls.find(">.count");
	  slide.btn_left = slide.controls.find(">.btn_left");
	  slide.btn_right = slide.controls.find(">.btn_right");
	  slide.btn_play = slide.controls.find(">.btn_play");
	  slide.btn_stop = slide.controls.find(">.btn_stop");
	  slide.moves = slide.find(">.move");
	  slide.ul = slide.moves.find(">ul");
	  slide.li = slide.ul.find(">li");
	  slide.a = slide.ul.find(">li>a");
	  slide.speeds = 500;
	  slide.autos = "N";
	  slide.times = "";
	  slide.times_speeds = 4000;
	  slide.nums = 1;
  
	  //제어
	  if(slide.li.size() < 2){
		  slide.controls.remove();
		  return false;
	  }
  
	  //넘버링
	  for(var i=0; i<slide.li.size(); i++){
		  slide.li.eq(i).attr("data-count",(i+1));
	  }
  
	  //총 카운트 적용
	  slide.counts.html(slide.nums+"/<span>"+slide.li.size()+"</span>");
  
	  //버튼 : 다음
	  slide.btn_right.click(function(){
		  slide.btn_stop.click();
		  movement("right");
		  return false;
	  });
  
	  //버튼 : 이전
	  slide.btn_left.click(function(){
		  slide.btn_stop.click();
		  movement("left");
		  return false;
	  });
  
	  //버튼 : 재생
	  slide.btn_play.click(function(){
		  slide.btn_play.hide();
		  slide.btn_stop.css("display","inline-block");
		  slide.autos = "Y";
		  slide.times = setTimeout(function(){
			  movement("right");
		  },slide.times_speeds);
		  return false;
	  });
  
	  //버튼 : 정지
	  slide.btn_stop.click(function(){
		  slide.btn_stop.hide();
		  slide.btn_play.css("display","inline-block");
		  slide.autos = "N";
		  clearTimeout(slide.times);
		  return false;
	  });
  
	  //자동재생
	  slide.btn_play.click();
  
	  //animate
	  function movement(ty){
		  if(slide.ul.is(":animated")) return false;
  
		  slide.li = slide.ul.find(">li");
		  var w = slide.li.eq(0).innerWidth() * -1;
  
		  if(ty == "left"){
			  slide.li.last().prependTo(slide.ul);
			  slide.ul.css("left",w+"px");
  
			  w = 0;
			  slide.nums = slide.li.last().attr("data-count");
		  } else {
			  slide.nums = slide.li.eq(0).attr("data-count");
		  }
  
		  slide.ul.stop().animate({"left":w+"px"},slide.speeds,function(){
			  if(ty == "right"){
				  slide.li.eq(0).appendTo(slide.ul);
				  slide.ul.css("left","0");
  
				  if(slide.autos == "Y"){
					  slide.times = setTimeout(function(){
						  movement("right");
					  },slide.times_speeds);
				  }
			  }
		  });
  
		  //총 카운트 적용
		  slide.counts.html(slide.nums+"/<span>"+slide.li.size()+"</span>");
	  }
  }
  function slide_type_02(slide){
	  var slide = slide;
	  slide.titles = slide.find(">.title");
	  slide.controls = slide.find(">.control");
	  slide.counts = slide.controls.find(">.count");
	  slide.btn_left = slide.controls.find(">.btn_left");
	  slide.btn_right = slide.controls.find(">.btn_right");
	  slide.btn_play = slide.controls.find(">.btn_play");
	  slide.btn_stop = slide.controls.find(">.btn_stop");
	  slide.moves = slide.find(">.move");
	  slide.ul = slide.moves.find(">ul");
	  slide.li = slide.ul.find(">li");
	  slide.a = slide.ul.find(">li>a");
	  slide.speeds = 500;
	  slide.autos = "N";
	  slide.times = "";
	  slide.times_speeds = 4000;
	  slide.nums = 1;
	  
	  if(slide.parent().hasClass("bodo")){
		  slide.li.hide();
		  slide.li.first().show();
	  }
  
	  //제어
	  if(slide.li.size() < 2){
		  slide.controls.remove();
		  return false;
	  }
  
	  //심볼
	  $("<ul></ul>").prependTo(slide.controls);
	  for(var i=0; i<slide.li.size(); i++){
		  $('<li><a href="#">'+(i+1)+'번</a></li>').appendTo(slide.controls.find(">ul"));
	  }
	  slide.simbols = slide.controls.find(">ul>li");
	  slide.simbols.eq(0).find(">a").addClass("on");
  
	  //넘버링
	  for(var i=0; i<slide.li.size(); i++){
		  slide.li.eq(i).attr("data-count",(i+1));
	  }
  
	  //총 카운트 적용
	  slide.counts.html(slide.nums+"/<span>"+slide.li.size()+"</span>");
  
  
	  //버튼 : 다음
	  slide.btn_right.click(function(){
		  slide.btn_stop.click();
		  movement("right");
		  return false;
	  });
  
	  //버튼 : 이전
	  slide.btn_left.click(function(){
		  slide.btn_stop.click();
		  movement("left");
		  return false;
	  });
  
	  //버튼 : 재생
	  slide.btn_play.click(function(){
		  slide.btn_play.hide();
		  slide.btn_stop.css("display","inline-block");
		  slide.autos = "Y";
		  slide.times = setTimeout(function(){
			  movement("right");
		  },slide.times_speeds);
		  return false;
	  });
  
	  //버튼 : 정지
	  slide.btn_stop.click(function(){
		  slide.btn_stop.hide();
		  slide.btn_play.css("display","inline-block");
		  slide.autos = "N";
		  clearTimeout(slide.times);
		  return false;
	  });
  
	  //버튼 : 심볼
	  slide.simbols.find(">a").click(function(){
		  if($(this).hasClass("on")) return false;
		  var idx = slide.simbols.index($(this).parent());
		  slide.btn_stop.click();
		  movement(idx);
		  return false;
	  });
  
	  //자동재생
	  slide.btn_play.click();
  
	  //animate
	  function movement(ty){
		  slide.li = slide.ul.find(">li");
  
		  var olds = 0;
		  var news = 0;
  
		  if(ty == "right"){
			  //다음
			  olds = slide.nums;
			  news = slide.nums + 1;
			  
			  
			  //alert(news);
  
			  //if(news >= slide.li.size()) news = 0;
			  if(news < slide.li.size()) {
				  news = news;
			  } else if (news > slide.li.size()) {
				  news = 1;
			  }
		  } else if(ty == "left"){
			  //이전
			  olds = slide.nums;
			  news = slide.nums - 1;
  
			  if(news < 1) news = slide.li.size();
		  } else {
			  //심볼클릭
			  olds = slide.nums;
			  news = ty+1;
			  if(news >= slide.li.size()) news = 0;
		  }
  
		  if(slide.li.eq(news-1).is(":animated")) return false;
  
		  slide.li.eq(olds-1).stop().css({"opacity":"1","left":"0","z-index":"10"}).animate({"opacity":"0"},slide.speeds,function(){
			  slide.li.eq(olds-1).css({"left":"100%","display":"none"});
			  if(slide.autos == "Y"){
				  slide.times = setTimeout(function(){
					  movement("right");
				  },slide.times_speeds);
			  }
		  });
  
		  slide.li.eq(news-1).css({"display":"block"}).stop().css({"opacity":"1","left":"0","z-index":"9"}).animate({"opacity":"1"},slide.speeds,function(){
		  });
  
		  slide.nums = news;
  
		  //총 카운트 적용
		  slide.counts.html(slide.nums+"/<span>"+slide.li.size()+"</span>");
  
		  //심볼
		  slide.simbols.find(">a.on").removeClass("on");
		  slide.simbols.eq(slide.nums-1).find(">a").addClass("on");
	  }
  }
