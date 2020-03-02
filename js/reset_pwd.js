//禁用插件默认enter键事件
$(document).keypress(
	function(event) {
		if(event.which == '13') {
			event.preventDefault();
		}
	});

//重新获取验证码:定时器
var count = 120;
var countDown = setInterval(function() {
	count--;
	if(count === 0) {
		//修改文本并使其可点击
		$('#acquire').text('验证码已失效，请重新获取').removeAttr('disabled');
		clearInterval(countDown);
	} else {
		//禁用按钮
		$('#acquire').attr('disabled', true);
		//改变文本
		$('#acquire').text('验证码在' + count + 's内有效');
	}
}, 1000);

//点击“验证码已失效，请重新获取”后的事件
$('#acquire').click(function() {
	var count = 120;
	var countDown = setInterval(function() {
		if(count === 0) {
			$('#acquire').text('验证码已失效，点此重新获取').removeAttr('disabled');
			clearInterval(countDown);
		} else {
			$('#acquire').attr('disabled', true);
			$('#acquire').text('验证码在' + count + 's内有效');
		}
		count--;
	}, 1000);
	//往手机发送验证码的代码
	//code...
});

//验证码框每次键盘抬起时
$("#code").keyup(function() {
	//先让错误提示不显示
	$("#error_tip").removeClass('show');
	$(this).css('border-color', '#B0C4DE');
	var phoneCode = "123";
	if($(this).val() !== phoneCode) {
		//验证码错误时，显示错误提示，并设置边框颜色
		$("#error_tip").addClass('show');
		$(this).css('border-color', '#ce8483');
	}
});

//“完成”
$("#complete").click(function() {
	//表单输入框不为空
	if($('#passWord').val() !== "" && $('#confirm').val() !== "" && $("#code").val() !== "") {
		//判断当前验证是否已经通过并且验证码正确时
		if($("#reset_pwd").data('bootstrapValidator').isValid() && !$("#error_tip").hasClass('show')) {
			//显示模态框
			$("#myModal").modal({
				backdrop: 'static',
				keyboard: false
			});
		}
	}
});

//模态框 “我知道了”
$("#know").click(function() {
	location.href = "find_pwd.html";
});

//表单验证
$('#reset_pwd')
	.bootstrapValidator({　　　　　
		message: 'This value is not valid',
		live: 'enabled',
		　feedbackIcons: {　　　　　　　　
			valid: 'glyphicon glyphicon-ok',
			invalid: 'glyphicon glyphicon-remove',
			validating: 'glyphicon glyphicon-refresh'　　　　　　　　
		},
		fields: {
			passWord: {
				validators: {
					notEmpty: {
						message: '密码不能为空'
					},
					stringLength: {
						min: 6,
						max: 18,
						message: '密码长度必须在6到18位之间'
					},
					regexp: {
						regexp: /^[a-zA-Z0-9]+$/,
						message: '密码只能包含字母(区分大小写)和数字'
					}
				}
			},
			confirm: {
				validators: {
					notEmpty: {
						message: '密码不能为空'
					},
					identical: {
						field: 'passWord',
						message: '两次输入的密码不一致'
					}
				}
			}

		}
	});