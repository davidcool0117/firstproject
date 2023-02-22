let allmenu_btn_open = $('.allmenu_btn_open');
let slide_map = $('#slide_map');
let btn_close = $('.btn_close');
allmenu_btn_open.click(function(){
    slide_map.toggle('slide', {direction: "right"}, 500);
    // slide_map.animate({width:'toggle'});
})
btn_close.click(function(){
    slide_map.toggle('slide', {direction: "right"}, 500);
    // slide_map.animate({width:'toggle'});
})

let btn_toggle = $('#slide_map .inner .binds ul.nav li a.btn_toggle');
let all_open_btn = $('#slide_map .inner .all_open');
btn_toggle.click(function(){
    $(this).toggleClass('on');
    $(this).siblings('ul').slideToggle(400);
})
all_open_btn.click(function(){
    btn_toggle.toggleClass('on')
    btn_toggle.siblings('ul').slideToggle(400);
})