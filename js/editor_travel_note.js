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

var E = window.wangEditor;
var editor = new E('#editor');
// 自定义菜单配置
editor.customConfig.menus = [
	'head',  // 标题
    'bold',  // 粗体
    'fontSize',  // 字号
    'fontName',  // 字体
    'italic',  // 斜体
    'underline',  // 下划线
    'foreColor',  // 文字颜色
    'backColor',  // 背景颜色
    'link',  // 插入链接
    'justify',  // 对齐方式
    'image',  // 插入图片
    'undo',  // 撤销
];
editor.customConfig.onchange = function(html) {
	// html 即变化之后的内容
	console.log(html);
}
editor.create();

//表单验证
$('#editor-note').bootstrapValidator({　　
	feedbackIcons: {　　　　　　　　
		valid: 'glyphicon glyphicon-ok',
		invalid: 'glyphicon glyphicon-remove',
		validating: 'glyphicon glyphicon-refresh'　　　　　　　　
	},
	fields: {
		questionTitle: {
			validators: {
				notEmpty: {
					message: '游记标题不能为空'
				},
				stringLength: {
					message: "请将标题长度控制在10到50字",
					min: 10,
					max: 50
				}
			}
		}
	}
});

//文本框获得焦点时,显示省份-城市
$('.site').focus(function() {
	$('.site-show').show();
});
//选择省份
$('.site-show .province>dd').each(function(i) {
	$(this).click(function() {
		$('.site-show .province').hide();
		$('.site-show .city').show();
		//将当前选择的省份——>"current-province"文本
		$('.site-show .city .current-province').text($(this).text());
	});
});
//显示城市之后,点击"国内"之后,显示省份
$('.site-show .city dt span:first-child').click(function() {
	$('.site-show .province').show();
	$('.site-show .city').hide();
});

//选择城市
$('.site-show .city>dd').each(function(i) {
	$(this).click(function() {
		var city = $(this).text();
		//当前选择的省份
		var current_province=$('.site-show .city .current-province').text();
		//选择的城市
		var city = $(this).text();
		//省份+城市
		$('.site').val(current_province+city);
		$('.site-show').hide();
	});
});
$(document).on('click', '.site,.site-show', function() {
	//点击.site,.site-show,阻止冒泡
	return false;
});
//点击空白处隐藏“省份-城市”
$(document).on('click',function() {
	$('.site-show').hide();
});


//标签点击事件
$('.main-editor .tags .tag').click(function() {
	//再次点击取消
	$(this).toggleClass('checked');
});
