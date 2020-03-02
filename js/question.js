//头部导航的切换
$('#header').load('nav_head.html', function() {
	$('.nav-left li').removeClass('my-active');
	$('.question').addClass('my-active');
});

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

//二级导航的切换
$('.question-nav li').click(function() {
	$('.question-nav li').removeClass('current');
	$(this).addClass('current');
});

//二级导航——问答首页
$('.question-nav .index').click(function() {
	//先都隐藏
	$.each($('.show-hidden div'), function(i, n) {
		if($(this).hasClass('show')) {
			$(this).removeClass('show').addClass('hidden');
		}
	});
	//再显示需要的
	$('.index-hot').removeClass('hidden').addClass('show');
	$('.question-search span:nth-child(1)').text('全部问答');
});

//二级导航——热门问答
$('.question-nav .hot').click(function() {
	$.each($('.show-hidden div'), function(i, n) {
		if($(this).hasClass('show')) {
			$(this).removeClass('show').addClass('hidden');
		}
	});
	$('.index-hot').removeClass('hidden').addClass('show');
	$('.question-search span:nth-child(1)').text('热门问答');
});

//二级导航——我的提问
$('.question-nav .my-qust').click(function() {
	$.each($('.show-hidden div'), function(i, n) {
		if($(this).hasClass('show')) {
			$(this).removeClass('show').addClass('hidden');
		}
	});
	//有提问时显示
	$('.my-question').removeClass('hidden').addClass('show');
	//无提问时显示
	//$('.my-question-null').removeClass('hidden').addClass('show');
});

//二级导航——我的问题
$('.question-nav .my-anw').click(function() {
	$.each($('.show-hidden div'), function(i, n) {
		if($(this).hasClass('show')) {
			$(this).removeClass('show').addClass('hidden');
		}
	});
	//有提问时显示
	$('.my-answer').removeClass('hidden').addClass('show');
	//无提问时显示
	//$('.my-question-null').removeClass('hidden').addClass('show');
});

//"我要提问"
$('#add-question').click(function() {
	location.href = 'add_question.html';
});