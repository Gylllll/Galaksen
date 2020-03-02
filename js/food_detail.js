$('#header').load('nav_head.html', function() {
	$('.nav-left li').removeClass('my-active');
	$('.food').addClass('my-active');
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

//轮播
var swiper = new Swiper('#swiper', {
	effect: 'fade', //切换效果
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true, //控制Swiper切换
		renderBullet: function(index, className) {
			return '<span class="' + className + '"></span>';
		}
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	autoplay: {
		delay: 3000, //3秒切换一次
		disableOnInteraction: false, //自动切换不会停止,每次都会重新启动autoplay
	},
});

//收藏
$('.h3-sub-1').click(function() {
	$(this).toggleClass('after');
	if($(this).hasClass('after')) {
		$('.h3-sub-1 .shoucang').text('已收藏');
		$(this).attr('title', '取消收藏');
		//数据库对应的收藏量+1
	} else {
		$('.h3-sub-1 .shoucang').text('收藏');
		$(this).attr('title', '添加收藏');
		//数据库对应的收藏量-1
	}
});

//星星 进入、移出、点击
$('.star>li>i').each(function(i) {
	var index;
	//鼠标进入
	$(this).mouseover(function() {
		//它本身及其之前的都变成黄色
		for(var j = 0; j <= i; j++) {
			$('.star>li:nth-child(' + (j + 1) + ')>i').addClass('yellow');
		}
		//先隐藏提示
		$('.tip>.star-tip').removeClass('show-tip');
		//显示当前星级对应的提示
		$('.tip>.star-tip:nth-child(' + (i + 1) + ')').addClass('show-tip');
	});
	//鼠标移出
	$(this).mouseout(function() {
		//它本身及其之前的都变成原来的颜色
		for(var j = 0; j <= i; j++) {
			$('.star>li:nth-child(' + (j + 1) + ')>i').removeClass('yellow');
		}
		//隐藏所有提示，只显示最后一个提示
		$('.tip>.star-tip').removeClass('show-tip');
		$('.tip>.star-tip:last-child').addClass('show-tip');
	});
	//鼠标点击
	$(this).click(function() {
		//先全部移掉颜色
		$('.star>li>i').css('color', '#696969');
		//它本身及其之前的都变成黄色
		for(var j = 0; j <= i; j++) {
			$('.star>li:nth-child(' + (j + 1) + ')>i').css('color', '#ffa800');
		}
		//先隐藏提示
		$('.tip>.star-tip').css('display', 'none');
		//显示当前星级对应的提示
		$('.tip>.star-tip:nth-child(' + (i + 1) + ')').css('display', 'block');
	});
});

var E = window.wangEditor
var editor = new E('#editor');
// 自定义菜单配置
editor.customConfig.menus = [
	'bold', // 粗体
	'fontSize', // 字号
	'image', // 插入图片
]
// 本地图片上传：关闭外部图片引入
editor.customConfig.showLinkImg = false;
// 本地图片上传：写啥无所谓，反正customUploadImg()方法重写了
editor.customConfig.uploadImgServer = '/upload';
// 本地图片上传：重写方法
editor.customConfig.customUploadImg = function(files, insert) {
	/*// 逐个上传
	files.forEach(item => {
		upload.image({
			url: '${application.imageServerUrl}/upload/cors/single/图片上传接口',
			file: item,
			success: (res) => {
				if(res.status === 200) {
					// 塞进去
					insert(res.data.图片Url);
				}
			},
			error: () => (that.$message.error('上传失败'))
		});
	});*/
};
editor.customConfig.onchange = function(html) {
	// html 即变化之后的内容
	console.log(html);
}
editor.create();

//我要点评
$('#add-comment').click(function() {
	$('#add-comment i').toggleClass('icon-add-fill').toggleClass('icon-jianhao');
	$('.add-comment-area').toggleClass('hidden');
	if($('#add-comment i').hasClass('icon-jianhao')) {
		$('#add-comment span').text('收起点评');
	} else {
		$('#add-comment span').text('我要点评');
	}
});

//点我纠错
$('.h3-sub-2').click(function() {
	$("#myModal").modal({
		backdrop:'static',//点击屏幕灰色背景的时候，模态框不会关闭
		keyboard: false//按esc不能退出
	});
});

//点评
$('.num').click(function(){
	//获取点评显示区
	var top=$('#show-comment').offset().top;
	$('html').animate({
		scrollTop: top
	}, 800);
});