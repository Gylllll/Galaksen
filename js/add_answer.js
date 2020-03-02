$('#header').load('nav_head.html', function() {
	$('.nav-left li').removeClass('my-active');
	$('.question').addClass('my-active');
});

var E = window.wangEditor
var editor = new E('#editor');
// 自定义菜单配置
editor.customConfig.menus = [
	'head', // 标题
	'bold', // 粗体
	'fontSize', // 字号
	'foreColor', // 文字颜色
]
editor.customConfig.onchange = function(html) {
	// html 即变化之后的内容
	console.log(html)
}
editor.create();