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

//버튼을 클릭 했을 때
// $(function () {
//   button.click(function () {
//     btnIdx = $(this).index();
//     button.removeClass("active");
//     $(this).addClass("active");
//     visual.removeClass("active");
//     $(this).addClass("active");
//     move();
//   });
//   function move() {
//     if (viIdx == btnIdx) return;
//     let cu = visual.eq(viIdx);
//     let ne = visual.eq(btnIdx);
//     cu.css("opacity", 0).animate({ "opacity": 1 });
//     ne.css("opacity", 1).animate({ "opacity": 0 });
//     viIdx = btnIdx;
//   }
// });

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

