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
});

//“关注”按钮
$('#care-btn').click(function(){
	var cares=4;
	//关注,向“关注该问题的人”+1，并追加关注该问题的用户的头像，数据库(用户id,当前问题的id对应...)
	if($(this).hasClass('care-this')){
		//已关注，点击后取消关注
		$(this).removeClass('care-this');
		$(this).text('关注');
		$('.care .care-num').text(cares);
		//事实上，应该去数据库中找到当前用户的头像路径(不能马上移除最后一张，考虑多人同时关注)
		//假设就是关注之后追加的那张图片
		var imgSrc="img/head1.jpg";
		//遍历每张图片
		$('.care .care-user a img').each(function(i){
			if($(this).attr('src')===imgSrc){
				$('.care .care-user a:nth-child('+(i+1)+')').remove();
			}
		});
		
	}else{
		//未关注，点击后关注
		$(this).addClass('care-this');
		$(this).text('已关注');
		$('.care .care-num').text(cares+1);
		//克隆最后一个图片，追加
		$('.care .care-user').append($(".care .care-user a:last-child").clone());
		//再修改最后一个图片，图片路径为刚关注这个问题的用户的头像
		$(".care .care-user a:last-child img").attr('src','img/head1.jpg');
		
	}
	
});

//“回答”按钮
$('#answer-btn').click(function(){
	//跳转时同时传递当前问题的id
	location.href="add_answer.html";
});

//“点赞”按钮
$('.answers-list .answer .support-btn').each(function(){
	$(this).click(function(){
	//对应的是不同的回答
	//点赞数+1，并更新至数据库(当前回答的id对应...)
	var support=100;
	if($(this).hasClass('not-click')){
		$(this).removeClass('not-click');
		$(this).text('已点赞('+(support+1)+')');
	}else{
		$(this).addClass('not-click');
		$(this).text('点赞('+support+')');
	}
});
});