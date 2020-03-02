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

//侧边的导航切换
$('.aside-nav li>span').each(function(i) {
	$(this).click(function() {
		$('.aside-nav li>span').removeClass('nav-active');
		$(this).addClass('nav-active');
		$('.show-area>div').addClass('hidden');
		$('.show-area>div:nth-child(' + (i + 5) + ')').removeClass('hidden');
		//我的点评
		if(i == 1) {
			//有点评
			$('.show-area .my-comment .comment-list').removeClass('hidden');
			//没有点评
			//$('.show-area .my-comment .comment-list-null').removeClass('hidden');
		}
		//我的提问
		if(i == 3) {
			//有提问
			$('.show-area .my-question .question-list').removeClass('hidden');
			//没有提问
			//$('.show-area .my-question .question-list-null').removeClass('hidden');
		}
		//我的回答
		if(i == 4) {
			//有回答
			$('.show-area .my-answer .answer-list').removeClass('hidden');
			//没有回答
			//$('.show-area .my-answer .answer-list-null').removeClass('hidden');
		}
		//关注的问题
		if(i == 5) {
			//有
			$('.show-area .care-question .care-question-list').removeClass('hidden');
			//没有
			//$('.show-area .care-question .care-question-list-null').removeClass('hidden');
		}
		//点赞的游记
		if(i == 6) {
			//有
			$('.show-area .my-like .like-list').removeClass('hidden');
			//没有
			//$('.show-area .my-like .like-list-null').removeClass('hidden');
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

//我的粉丝   按钮部分
$('.fans button').each(function(i) {
	$(this).click(function() {
		$(this).toggleClass('care');
		if($(this).hasClass('care')) {
			//点击关注
			$(this).text('已关注');
			//数据库对应的关注的人+1
		} else {
			$(this).text('关注');
			//数据库对应的关注的人-1
		}
	});
});

//我关注的人  按钮部分
$('.care button').each(function(i) {
	$(this).click(function() {
		$(this).toggleClass('cancle');
		if($(this).hasClass('cancle')) {
			//点击了"已关注"
			$(this).text('关注');
			//数据库对应的关注的人-1
		} else {
			$(this).text('已关注');
			//数据库对应的关注的人+1
		}
	});
});

//如果发表了游记
//$('.show-area .my-travel .sent-list').removeClass('hidden');
//如果没有发表游记
$('.show-area .my-travel .sent-list-null').removeClass('hidden');
//我的游记 导航
$('.my-travel-nav>li').each(function(i) {
	//切换样式
	$(this).click(function() {
		$('.my-travel-nav>li').removeClass('my-active');
		$(this).addClass('my-active');
		$('.show-area .my-travel >div').addClass('hidden');
		if(i == 0) {
			//i=0 点击的是“已发表”,显示“已发表”
			//有发表
			$('.show-area .my-travel .sent-list').removeClass('hidden');
			//没有发表
			//$('.show-area .my-travel .sent-list-null').removeClass('hidden');
		} else {
			//i=1 点击的是“草稿箱”,显示“草稿箱”
			//有发表
			$('.show-area .my-travel .draft-list').removeClass('hidden');
			//没有发表
			//$('.show-area .my-travel .draft-list-null').removeClass('hidden');
		}
	});
});

//如果有收藏的景点
//$('.show-area .collect-list .scenery-list').removeClass('hidden');
//如果没有收藏的景点
$('.show-area .collect-list .scenery-list-null').removeClass('hidden');
//我的收藏  导航
$('.my-collect-nav>li').each(function(i) {
	//切换样式
	$(this).click(function() {
		$('.my-collect-nav>li').removeClass('my-active');
		$(this).addClass('my-active');
		$('.show-area .collect-list >div').addClass('hidden');
		if(i == 0) {
			//i=0 点击的是“景点”,显示“景点”
			//有收藏
			$('.show-area .collect-list .scenery-list').removeClass('hidden');
			//没有收藏
			//$('.show-area .collect-list .scenery-list-null').removeClass('hidden');
		} else if(i == 1) {
			//i=1 点击的是“美食”,显示“美食”
			//有收藏
			$('.show-area .collect-list .food-list').removeClass('hidden');
			//没有收藏
			//$('.show-area .collect-list .food-list-null').removeClass('hidden');
		} else {
			//i=2 点击的是“游记”,显示“游记”
			//有收藏
			$('.show-area .collect-list .note-list').removeClass('hidden');
			//没有收藏
			//$('.show-area .collect-list .note-list-null').removeClass('hidden');
		}
	});
});

//我的收藏   按钮部分
$('.scenery button').each(function(i) {
	$(this).click(function() {
		$(this).toggleClass('cancle');
		if($(this).hasClass('cancle')) {
			//点击了"已收藏"
			$(this).text('收藏');
			//景点收藏对应的收藏的人-1
		} else {
			$(this).text('已收藏');
			//景点收藏对应的收藏的人+1
		}
	});
});

$('.food button').each(function(i) {
	$(this).click(function() {
		$(this).toggleClass('cancle');
		if($(this).hasClass('cancle')) {
			//点击了"已收藏"
			$(this).text('收藏');
			//景点收藏对应的收藏的人-1
		} else {
			$(this).text('已收藏');
			//景点收藏对应的收藏的人+1
		}
	});
});

$('.note button').each(function(i) {
	$(this).click(function() {
		$(this).toggleClass('cancle');
		if($(this).hasClass('cancle')) {
			//点击了"已收藏"
			$(this).text('收藏');
			//景点收藏对应的收藏的人-1
		} else {
			$(this).text('已收藏');
			//景点收藏对应的收藏的人+1
		}
	});
});

//关注的问题 按钮部分
$('.care-question-list .question button').each(function(i) {
	$(this).click(function() {
		$(this).toggleClass('cancle');
		if($(this).hasClass('cancle')) {
			//点击了"已关注"
			$(this).text('关注');
			//问题关注对应的关注的人-1
		} else {
			$(this).text('已关注');
			//问题关注对应的关注的人+1
		}
	});
});

//点赞的游记  按钮部分
$('.like-list .like button').each(function(i) {
	$(this).click(function() {
		$(this).toggleClass('cancle');
		if($(this).hasClass('cancle')) {
			//点击了"已点赞"
			$(this).text('点赞');
			//游记对应的点赞的人-1
		} else {
			$(this).text('已点赞');
			//游记对应的点赞的人+1
		}
	});
});

//如果有系统消息
//$('.show-area .message-list .system-list').removeClass('hidden');
//如果没有系统消息
$('.show-area .message-list .system-list-null').removeClass('hidden');
//消息  导航
$('.message-nav>li').each(function(i) {
	//切换样式
	$(this).click(function() {
		$('.message-nav>li').removeClass('my-active');
		$(this).addClass('my-active');
		$('.show-area .message-list>div').addClass('hidden');
		if(i == 0) {
			//i=0 点击的是“系统消息”,显示“系统消息”
			//有
			$('.show-area .message-list .system-list').removeClass('hidden');
			//没有
			//$('.show-area .message-list .system-list-null').removeClass('hidden');
		} else if(i == 1) {
			//i=1 点击的是“收到的赞”,显示“收到的赞”
			//有
			$('.show-area .message-list .like-list').removeClass('hidden');
			//没有
			//$('.show-area .message-list .like-list-null').removeClass('hidden');
		} else {
			//i=2 点击的是“收到的回复”,显示“收到的回复”
			//有
			$('.show-area .message-list .replay-list').removeClass('hidden');
			//没有
			//$('.show-area .message-list .replay-list-null').removeClass('hidden');
		}
	});
});

//全部标记为已读与清空所有消息
//系统消息部分
$('.message-list .system-list .read').click(function() {
	//隐藏所有消息左上角的小圆点并更改数据库中系统消息这些信息的状态——>已读
	$('.message-list .system-list .system .new').addClass('hidden');
});
$('.message-list .system-list .clear').click(function() {
	$('.show-area .message-list .system-list').addClass('hidden');
	$('.show-area .message-list .system-list-null').removeClass('hidden');
	//更改数据库中系统消息这些信息的状态——>清空
});
//收到的赞部分
$('.message-list .like-list .read').click(function() {
	//隐藏所有消息左上角的小圆点并更改数据库中系统消息这些信息的状态——>已读
	$('.message-list .like-list .like .new').addClass('hidden');
});
$('.message-list .like-list .clear').click(function() {
	$('.show-area .message-list .like-list').addClass('hidden');
	$('.show-area .message-list .like-list-null').removeClass('hidden');
	//更改数据库中系统消息这些信息的状态——>清空
});
//收到的回复部分
$('.message-list .replay-list .read').click(function() {
	//隐藏所有消息左上角的小圆点并更改数据库中系统消息这些信息的状态——>已读
	$('.message-list .replay-list .replay .new').addClass('hidden');
});
$('.message-list .replay-list .clear').click(function() {
	$('.show-area .message-list .replay-list').addClass('hidden');
	$('.show-area .message-list .replay-list-null').removeClass('hidden');
	//更改数据库中系统消息这些信息的状态——>清空
});

//更换头像
$('.change-img').click(function() {
	$('#myModal1').modal({
		backdrop: 'static', //点击屏幕灰色背景的时候，模态框不会关闭
		keyboard: false //按esc不能退出
	});
});
//文件上传框——选择图片后
$('.img-input').change(function() {
	//将当前图片的路径
	var img=$('.img-input').val();
	console.log(img);
	//设置框框的背景：为当前选择的图片
	/*$('#choice-img').css('background', 'url(./img/2.jpg) no-repeat center center');*/
	$('#choice-img').css('background','url('+img+') no-repeat center center');
});
//更换头像 确定修改
$('#change-img').click(function() {

});
//模态框1关闭后
$('#myModal1').on('hide.bs.modal', function() {
	$('#choice-img').css('background', '#CFCFCF');
});

//修改资料
$('.editor-info').click(function() {
	//设置昵称
	$('#user-name').val($('.person-name>span:nth-of-type(1)').text());
	//设置性别
	if($('.person-sex i').hasClass('icon-nv')) {
		//设置女的单选框被选中
		$('input[name="sex"][value="0"]').attr('checked', true);
	} else {
		//设置女的单选框被选中
		$('input[name="sex"][value="1"]').attr('checked', true);
	}
	//设置个人简介
	$('#intro').val($('.person-intro span').text());
	$('#myModal2').modal({
		backdrop: 'static', //点击屏幕灰色背景的时候，模态框不会关闭
		keyboard: false //按esc不能退出
	});
});
//模态框2关闭后
$('#myModal2').on('hide.bs.modal', function() {
	$('.alert-warning').addClass('hidden');
	$('.alert-success').addClass('hidden');
});

//修改资料 确定修改
$('#change-info').click(function() {
	if($('#user-name').val() !== "") {
		$('.alert-warning').addClass('hidden');
		$('.alert-success').removeClass('hidden');
	} else {
		$('.alert-warning').removeClass('hidden');
	}
});

//删除操作
//已发表
$('.my-travel .sent-list .delete>a').each(function(i) {
	$(this).click(function() {
		$('#myModal3').modal({
			backdrop: 'static', //点击屏幕灰色背景的时候，模态框不会关闭
			keyboard: false //按esc不能退出
		});
		//将当前的游记的id赋值给隐藏域，以便模态框获取
		$('input[type="hidden"]').val('删除的是已发表的游记');
	});
});
//草稿箱
$('.my-travel .draft-list .delete>a').each(function(i) {
	$(this).click(function() {
		$('#myModal3').modal({
			backdrop: 'static', //点击屏幕灰色背景的时候，模态框不会关闭
			keyboard: false //按esc不能退出
		});
		//将当前的草稿的id赋值给隐藏域，以便模态框获取
		$('input[type="hidden"]').val('删除的是草稿');
	});
});
//我的点评
$('.my-comment .comment-content .delete>a').each(function(i) {
	$(this).click(function() {
		$('#myModal3').modal({
			backdrop: 'static', //点击屏幕灰色背景的时候，模态框不会关闭
			keyboard: false //按esc不能退出
		});
		//将当前的点评的id赋值给隐藏域，以便模态框获取
		$('input[type="hidden"]').val('删除的是点评');
	});
});
//我的提问
$('.my-question .question-list .delete>a').each(function(i) {
	$(this).click(function() {
		$('#myModal3').modal({
			backdrop: 'static', //点击屏幕灰色背景的时候，模态框不会关闭
			keyboard: false //按esc不能退出
		});
		//将当前的提问的id赋值给隐藏域，以便模态框获取
		$('input[type="hidden"]').val('删除的是提问');
	});
});
//我的回答
$('.my-answer .answer-list .delete>a').each(function(i) {
	$(this).click(function() {
		$('#myModal3').modal({
			backdrop: 'static', //点击屏幕灰色背景的时候，模态框不会关闭
			keyboard: false //按esc不能退出
		});
		//将当前的回答的id赋值给隐藏域，以便模态框获取
		$('input[type="hidden"]').val('删除的是回答');
	});
});
//确定删除
$('#delete').click(function(){
	console.log($('input[type="hidden"]').val());
	toastr.success('删除成功！');
});


toastr.options = {  
        closeButton: true,//关闭按钮
        progressBar: true, //是否显示进度条（设置关闭的超时时间进度条）
        positionClass: "toast-top-right",//消息框在页面显示的位置  
        showDuration: "300", //显示动作时间 
        hideDuration: "1000", //隐藏动作时间 
        timeOut: "5000",//自动关闭超时时间
};