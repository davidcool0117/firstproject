//popup layer
document.querySelector("#layer button").addEventListener("click", function () {
  document.querySelector("#layer").style.display = "none";
});

//header_fade
header_fade();
function header_fade() {
  $(window).scroll(function () {
    if ($(document).scrollTop() > $(window).height() / 2) {
      $("#header_nav").addClass("on");
    } else {
      $("#header_nav").removeClass("on");
    }
  });
}

//visual_slide
const visual = $("#brandVisual>ul>li");
const button = $("#buttonList1>li");
let current = 0;
let btnIdx = 0;
let id;
button.click(function () {
  btnIdx = $(this).index();
  button.removeClass("active");
  $(this).addClass("active");
  fade_change();
});
timer();
function timer() {
  id = setInterval(function () {
    let next = current + 1;
    if (next == visual.length) {
      next = 0;
    }
    button.eq(next).trigger("click");
  }, 4000);
}
function fade_change() {
  if (current == btnIdx) return;
  let cu = visual.eq(current);
  let ne = visual.eq(btnIdx);
  ne.addClass("active")
    .css("opacity", 0)
    .animate({ opacity: 1 }, 1000, function () {
      $(".visual_slide").append(cu);
      cu.removeClass("active");
    });
  current = btnIdx;
}
//main_visual_slide_control_btn
mainvs_btn();
function mainvs_btn() {
  let btn_play = $(".visual .controls .btn_play");
  let btn_stop = $(".visual .controls .btn_stop");
  btn_stop.click(function () {
    btn_stop.css("z-index", 9);
    btn_play.css("z-index", 10);
    clearInterval(id);
  });
  btn_play.click(function () {
    btn_play.css("z-index", 9);
    btn_stop.css("z-index", 10);
    timer();
  });
}

$("#buttonList1 li").click(function () {
  clearInterval(timer);
});

//bodo_news button List2
bodo_button();
function bodo_button() {
  let bodo1 = $("#brandNews .move>ul:first-child");
  let bodo2 = $("#brandNews .move>ul:last-child");
  let button1 = $("#buttonList2>li:first-child");
  let button2 = $("#buttonList2>li:last-child");
  button1.click(function () {
    button1.removeClass("on");
    $(this).addClass("on");
    bodo1.removeClass("on");
    bodo1.addClass("on");
    button2.removeClass("on");
    bodo2.removeClass("on");
  });
  button2.click(function () {
    button2.removeClass("on");
    $(this).addClass("on");
    bodo2.removeClass("on");
    bodo2.addClass("on");
    button1.removeClass("on");
    bodo1.removeClass("on");
  });
}

//business_move
let move_prev = $("#brandBusiness >.slider >a.prev");
let move_next = $("#brandBusiness >.slider >a.next");
let busi_move = $("#brandBusiness >.slider >.move >ul >li");
let move_idx = 0;
let current2 = 0;

business_M();
function business_M() {
  move_prev.click(function (a) {
    move_idx = move_idx - 1;
    if (move_idx == -1) {
      move_idx = busi_move.length - 1;
    }
    let cu2 = busi_move.eq(current2).find("a");
    let pre = busi_move.eq(move_idx).find("a").addClass("on");
    cu2.removeClass("on");
    pre.addClass("on");
    current2 = move_idx;
    return false;
  });
  move_next.click(function (a) {
    move_idx = move_idx + 1;
    if (move_idx == busi_move.length) {
      move_idx = 0;
    }
    let cu2 = busi_move.eq(current2).find("a");
    let pre = busi_move.eq(move_idx).find("a").addClass("on");
    cu2.removeClass("on");
    pre.addClass("on");
    current2 = move_idx;
    return false;
  });
}

//link_banner
let move_banner = $(".js_slide .move #banner");
let btnL = $(".js_slide .control .btn_left");
let btnR = $(".js_slide .control .btn_right");

controls2();
function controls2() {
  btnL.click(function () {
    move_banner
      .css("left", "0")
      .stop()
      .animate({ left: "-230px" }, 2000, function () {
        $(this).css({ left: 0 });
        move_banner.append(move_banner.children("li").eq(0));
      });
    return false;
  });
  btnR.click(function () {
    move_banner
      .css("left", "0")
      .stop()
      .animate({ left: "230px" }, 2000, function () {
        $(this).css({ left: 0 });
        move_banner.prepend(move_banner.children("li").eq(9));
      });
    return false;
  });
}

//relate_site
js_relate();
function js_relate() {
  var t = $("#footer .site_box .relate_site");
  t.btn = t.find(">a");
  t.ul = t.find(">ul");
  t.ul.li = t.ul.find(">li");

  t.btn.click(function () {
    $(this).toggleClass("on").siblings("ul").css("display");;
    if ($(this).hasClass("on")) {
      t.ul.slideDown();
    } else {
      t.ul.slideUp();
    }
    return false;
  });
}

//quick_sm
quick_sm();
function quick_sm() {
  var obj = $("#content");
  obj.box = obj.find(".section");
  obj.tab = obj.find("#section_nav >li >a");

  //click
  obj.tab.click(function () {
    var idx = $(this).parent().index();
    $("body,html").stop().animate({scrollTop:obj.box.eq(idx).offset().top - $("#header").height() + "px",},500);
    return false;
  });

  //scroll
  $(window).scroll(function () {
    main_scroll($(window).scrollTop());
  });
  function main_scroll(num) {
    var topMin = num;
    var topMax = num + parseInt($(window).height());

    for (var i = 0; i < obj.box.length; i++) {
      var tt = parseInt(obj.box.eq(i).position().top) + $(window).height() / 2;
      var bb = tt + parseInt(obj.box.eq(i).innerHeight());

      if (topMax >= tt) {
        if (topMin >= bb) {
          obj.tab.parent().eq(i).find(">a").removeClass("active");
        } else {
          obj.tab
            .parent()
            .parent()
            .removeAttr("class")
            .addClass("sec_" + i);

          if ($("#section_nav").hasClass("sec_0")) {
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
top_btn();
function top_btn() {
  $(window).scroll(function () {
    if ($(document).scrollTop() > $(window).height() / 2) {
      $(".btn_top").fadeIn(300);
    } else {
      $(".btn_top").fadeOut(300);
    }
  });
  $(".btn_top").click(function () {
    $("body,html").stop().animate({ scrollTop: "0" }, 500);
    return false;
  });
}

// var url = "https://api.odcloud.kr/api/15005962/v1/uddi:6619074c-2ac9-465c-b02e-fe53123644dc?page=1&perPage=10&serviceKey=3NVhpSRT0O0siIH2KcrZSpgHjLx5mrRimZu1GnMr6XORd6Oy%2B7AtFpfp3OOYpjtq5WRWfhSrnKNmvhy9ZdnVjQ%3D%3D";


//채용정보 api 당겨오기
// getPosts();
// async function getPosts(){
//     const res = await fetch(`${url}`);
//     const data = await res.json();
//     return data;
// }

// setPosts();
// async function setPosts(){
//     const posts = await getPosts();
//     const datas = posts.data;
//     console.log(datas);
//     datas.forEach(data => {
//         const postEl=document.createElement("div");
//         postEl.classList.add("post");
//         postEl.innerHTML=`
//         <h2 class="post-title">공고명: ${data.공고명}</h2>
//         <div class="number">공고마감일: ${data.공고마감일}</div>
//         <div class="number">근무지: ${data.근무지}</div>
//         `;
//         document.body.appendChild(postEl);
//       });
//     }


let id2;
let current3=0;
timer2();
function timer2() {
  id2 = setInterval(function () {
    slide2();
  }, 5000);
}
function slide2() {
  move_banner.animate({ left: "-230px" }, 2000, function () {
    $(this).css({ left: 0 });
    move_banner.append(move_banner.children("li").eq(0));
  });
  current3++;
  if (current3 == 5) {
    current3 = 0;
  }
}

//allmenu_btn_modal

let allmenu_btn_modal = $('#header_nav .search_map .btns h3 a.allmenu_btn_open')

