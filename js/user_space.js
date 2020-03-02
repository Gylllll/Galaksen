$('#header').load('nav_head.html', function() {
	$('.nav-left li').removeClass('my-active');
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

//关注该用户的按钮
$('#care-btn').click(function(){
	$(this).toggleClass('care');
	if($(this).hasClass('care')) {
			//点击了"关注"
			$(this).text('已关注');
			//+1
		} else {
			$(this).text('关注');
			//-1
		}
});

//如果发表了游记
$('.show-area .user-travel .sent-list').removeClass('hidden');
//如果没有发表游记
//$('.show-area .user-travel .sent-list-null').removeClass('hidden');
//侧边的导航切换
$('.aside-nav li>span').each(function(i) {
	$(this).click(function() {
		$('.aside-nav li>span').removeClass('nav-active');
		$(this).addClass('nav-active');
		$('.show-area>div').addClass('hidden');
		$('.show-area>div:nth-child(' + (i + 5) + ')').removeClass('hidden');
		//TA的游记
		if(i == 0) {
			//有
			$('.show-area .user-travel .travel-list').removeClass('hidden');
			//没有
			//$('.show-area .user-travel .travel-list-null').removeClass('hidden');
		}
		//TA的点评
		if(i == 1) {
			//有
			$('.show-area .user-comment .comment-list').removeClass('hidden');
			//没有
			//$('.show-area .user-comment .comment-list-null').removeClass('hidden');
		}
		//TA的提问
		if(i == 2) {
			//有
			$('.show-area .user-question .question-list').removeClass('hidden');
			//没有
			//$('.show-area .user-question .question-list-null').removeClass('hidden');		
		}
		//TA的回答
		if(i == 3) {
			//有
			$('.show-area .user-answer .answer-list').removeClass('hidden');
			//没有
			//$('.show-area .user-answer .answer-list-null').removeClass('hidden');
		}
	});
});

//粉丝、关注
$('.num>a').each(function(i) {
	$(this).click(function() {
		//隐藏侧边导航的所有样式
		$('.show-area>div').addClass('hidden');
		$('.aside-nav li>span').removeClass('nav-active');
		if(i == 0) {
			//i=0点击的是“粉丝”
			//有粉丝时显示
			$('.show-area .fans-list').removeClass('hidden');
			//没有粉丝时显示
			//$('.show-area .fans-list-null').removeClass('hidden');
		} else {
			//i=1点击的是“关注”
			//有关注的人时显示
			$('.show-area .care-list').removeClass('hidden');
			//没有关注的人时显示
			//$('.show-area .care-list-null').removeClass('hidden');
		}
	});
});