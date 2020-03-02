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

//文本框获得焦点时,显示省份-城市
$('#search-input').focus(function() {
	$('.province-city').show();
});
//选择省份
$('.province-city .province>dd').each(function(i) {
	$(this).click(function() {
		$('.province-city .province').hide();
		$('.province-city .city').show();
		//将当前选择的省份——>"current-province"文本
		$('.province-city .city .current-province').text($(this).text());
	});
});
//显示城市之后,点击"国内"之后,显示省份
$('.province-city .city dt span:first-child').click(function() {
	$('.province-city .province').show();
	$('.province-city .city').hide();
});

//选择城市
$('.province-city .city>dd').each(function(i) {
	$(this).click(function() {
		//当前选择的省份
		var current_province = $('.province-city .city .current-province').text();
		//选择的城市
		var city = $(this).text();
		//省份+城市
		$('#search-input').val(current_province + city);
		$('.province-city').hide();
	});
});
$(document).on('click', '#search-input,.province-city', function() {
	//点击#search-input,.province-city,阻止冒泡
	return false;
});
//点击空白处隐藏“省份-城市”
$(document).on('click', function() {
	$('.province-city').hide();
});

//点击加载更多（点击一次，多加6个）
$('.more').click(function() {
	//克隆最后一个note-list-part，追加到其父元素note-list里
	$('.note-list').append($(".note-list .note-list-part:last-child").clone());
	//显示的值要变：6个为一组
});