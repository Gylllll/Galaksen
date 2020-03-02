$('#header').load('nav_head.html', function() {
	$('.nav-left li').removeClass('my-active');
	$('.travel_note').addClass('my-active');
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

//点赞
$('.note-like').click(function() {
	//点赞数
	var like = 123;
	$('.note-like').toggleClass('like');
	if($(this).hasClass('like')) {
		$('.note-like span').text('已点赞(' + (like + 1) + ')');
		$(this).attr('title', '点此取消赞');
	} else {
		$('.note-like span').text('点赞(' + like + ')');
		$(this).attr('title', '点此点赞');
	}
});

//收藏
$('.note-collect').click(function() {
	//收藏数
	var collect = 3;
	$('.note-collect').toggleClass('collect');
	if($(this).hasClass('collect')) {
		$('.note-collect span').text('已收藏(' + (collect + 1) + ')');
		$(this).attr('title', '点此取消收藏');
	} else {
		$('.note-collect span').text('收藏(' + collect + ')');
		$(this).attr('title', '点此收藏');
	}
});

//评论
$('.note-comment').click(function() {
	var top = $('.comment-show').offset().top;
	$('html').animate({
		scrollTop: top
	}, 800);
});

//评论区 评论框 失去获取焦点效果
$('#comment-area').val('友好的评论是良好交流的开端~');
$('#comment-area').css('color', '#828282');
$('#comment-area').focus(function() {
	if($(this).val() == '友好的评论是良好交流的开端~') {
		$(this).val('');
	}
	$(this).css('color', '#363636');
});
$('#comment-area').focusout(function() {
	if($(this).val() == "") {
		$(this).val('友好的评论是良好交流的开端~');
		$(this).css('color', '#828282');
	}
});

//显示-隐藏回复区
$('.comment .comment-header .replay-show-hidden').each(function(i) {
	$(this).click(function() {
		if($(this).text() == '收起回复') {
			$('.comment:nth-child(' + (i + 1) + ') .replay-list').hide();
			$(this).text('展开回复');
		} else {
			$('.comment:nth-child(' + (i + 1) + ') .replay-list').show();
			$(this).text('收起回复');
		}
	});
});

//回复区 显示-隐藏回复框
$('.comment').each(function(i) {
	$('.comment').eq(i).find('.replay').each(function(j) {
		$(this).click(function() {
			$('.comment').eq(i).find('.comment-replay').eq(j).find('.replay-show2').toggleClass('hidden');
			if($(this).text() == '回复') {
				$(this).text('取消回复');
			} else {
				$(this).text('回复');
			}
		});
	});
});
//判断当前登录的用户 是否在本页面有过评论或者回复 显示删除按钮

//删除
//评论——删除
$('.comment .comment-header .delete').each(function(i) {
	$(this).click(function() {
		$('#myModal').modal({
			backdrop: 'static', //点击屏幕灰色背景的时候，模态框不会关闭
			keyboard: false //按esc不能退出
		});
		//将当前的评论的id赋值给隐藏域，以便模态框获取
		$('input[type="hidden"]').val('删除的是评论');
	});
});

//回复-删除
$('.comment').each(function(i) {
	$('.comment').eq(i).find('.replay-list .delete').each(function(j) {
		$(this).click(function() {
			$('#myModal').modal({
				backdrop: 'static', //点击屏幕灰色背景的时候，模态框不会关闭
				keyboard: false //按esc不能退出
			});
			//将当前的回复的id赋值给隐藏域，以便模态框获取
			$('input[type="hidden"]').val('删除的是回复');
		});
	});
});

//确定删除
$('#delete').click(function() {
	console.log($('input[type="hidden"]').val());
	toastr.success('删除成功！');
});

toastr.options = {
	closeButton: true, //关闭按钮
	progressBar: true, //是否显示进度条（设置关闭的超时时间进度条）
	positionClass: "toast-top-right", //消息框在页面显示的位置  
	showDuration: "300", //显示动作时间 
	hideDuration: "1000", //隐藏动作时间 
	timeOut: "5000", //自动关闭超时时间
};

//发表评论
$('#publish-btn').click(function() {
	if($('#comment-area').val() == '友好的评论是良好交流的开端~' || $('#comment-area').val() == '') {
		toastr.warning('评论不能为空！');
	} else {
		toastr.success('评论发表成功！');
	}
});

//发表对评论的回复
$('.comment .replay-btn1').each(function(i) {
	$(this).click(function() {
		if($('.comment:nth-child(' + (i + 1) + ') .replay-area').val() == '') {
			toastr.warning('回复不能为空！');
		} else {
			toastr.success('回复发表成功！');
		}
	});
});

//发表对回复的回复
$('.comment').each(function(i) {
	$('.comment').eq(i).find('.replay-btn2').each(function(j) {
		$(this).click(function() {
			if($('.comment').eq(i).find('.comment-replay').eq(j).find('.replay-area').val() == '') {
				toastr.warning('回复不能为空！');
			} else {
				toastr.success('回复发表成功！');
			}
		});
	});
});