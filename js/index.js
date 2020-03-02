$('#header').load('nav_head.html');

//返回顶部
$(window).scroll(function() {
	var top = $(this).scrollTop();
	if(top >= 800) {
		$(".top").removeClass('hidden');
	} else {
		$(".top").addClass('hidden');
	}
});

//点击：返回顶部
$("#top-btn").click(function() {
	$('html').animate({
		scrollTop: '0px'
	}, 800);
	//$(window).scrollTop(0);
});

//设置页面的图片为响应式图片，但有些图片不需要
$("img").addClass("img-responsive");
$(".travel-note .note-left img").removeClass("img-responsive");
$(".nav-container .nav-right.login-after img").removeClass("img-responsive");

//轮播图（3个）
var swiper1 = new Swiper('#swiper1', {
	effect: 'fade', //切换效果
	pagination: {
		el: '.swiper-pagination1',
		clickable: true, //控制Swiper切换
		renderBullet: function(index, className) {
			return '<span class="' + className + '"> <img src="' + $("#swiper1 .swiper-wrapper .swiper-slide:nth-child(" + (index + 1) + ")>img").attr("src") + '"/></span>';
		}
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	autoplay: {
		delay: 5000, //5秒切换一次
		disableOnInteraction: false, //自动切换不会停止,每次都会重新启动autoplay
	},
});
var swiper2 = new Swiper('#swiper2', {
	effect: 'fade', //切换效果
	loop: true,
	pagination: {
		el: '.swiper-pagination2',
		clickable: true, //控制Swiper切换
		renderBullet: function(index, className) {
			return '<span class="' + className + '"></span>';
		}
	},
	autoplay: {
		delay: 3000, //3秒切换一次
		disableOnInteraction: false, //自动切换不会停止,每次都会重新启动autoplay
	},
});
var swiper3 = new Swiper('#swiper3', {
	effect: 'fade', //切换效果
	loop: true,
	pagination: {
		el: '.swiper-pagination3',
		clickable: true, //控制Swiper切换
		renderBullet: function(index, className) {
			return '<span class="' + className + '"></span>';
		}
	},
	autoplay: {
		delay: 3000, //3秒切换一次
		disableOnInteraction: false, //自动切换不会停止,每次都会重新启动autoplay
	},
});

//热门游记、最新发布
$(".main-travelnotes .travel-nav-left li").each(function(i) {
	/*鼠标悬停：切换样式*/
	$(this).mouseover(function() {
		if(i!==2){
		$(".main-travelnotes .travel-nav-left li").removeClass("current");
		$(".main-travelnotes .travel-nav-left li:nth-child(1) a").css("color", "#000000");
		$(".main-travelnotes .travel-nav-left li:nth-child(2) a").css("color", "#000000");
		$(".main-travelnotes .travel-nav-left li:nth-child(" + (i + 1) + ")").toggleClass("current");
		$(".main-travelnotes .travel-nav-left li:nth-child(" + (i + 1) + ") a").css("color", "#8B636C");
		}
	});
});

/*var $travel_note=$('.travel-note .thumbnail');
$travel_note.each(function(i,n){
	console.log($('.travel-note .thumbnail:nth-child('+(i+1)+') .note-right .note-title').text());
});*/