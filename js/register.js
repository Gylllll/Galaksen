//“返回首页”
$("#return").click(function() {
	location.href = "index.html";
});

//点击“获取验证码”后的事件
$('#acquire').click(function() {
	//“手机号”不为空时
	if($('#telePhone').val() !== "") {
		if($("#register").data('bootstrapValidator').isValid()) { //判断验证是否已经通过						
			var phone = "18250202690";
			if($("#telePhone").val() !== phone) {
				//如果数据库中该手机号不存在,即未注册,允许注册
				//1.显示验证码框
				$('#showCode').removeClass('acquire_before').addClass('acquire_after');
				//2.验证码有效时长，倒计时
				var count = 60;
				var countDown = setInterval(function() {
					if(count === 0) {
						//改变提示内容
						$('#tip').text('验证码已失效，请点击按钮重新获取');
						//移除“获取验证码”按钮的禁用，并修改其值
						$('#acquire').removeAttr('disabled');
						$('#acquire').text('重新获取');
						clearInterval(countDown);
					} else {
						//禁用“获取验证码”按钮
						$('#acquire').attr('disabled', true);
						$('#tip').text('短信验证码已下发，请注意查收，验证码在' + count + 's内有效');
					}
					count--;
				}, 1000);
				//往手机发送验证码的代码
				//code...
			} else {
				//已注册的手机号,显示模态框,不允许注册
				$("#myModal").modal({
					backdrop: 'static',
					keyboard: false
				});
			}
		}
	}
});

//"立即注册"
$('#register_now').click(function() {
	 //验证码没有错时
	if(!$("#error_tip").hasClass('show')) {
		$('#myModal .modal-body').html("恭喜您注册成功，欢迎您成为Galaksen的一份子，<a href='login.html'>点我登录</a>")
		$("#myModal").modal({
			backdrop: 'static',
			keyboard: false
		});
	}
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

//表单验证
$('#register')
	.bootstrapValidator({　　　　　
		message: 'This value is not valid',
		live: 'enabled',
		　feedbackIcons: {　　　　　　　　
			valid: 'glyphicon glyphicon-ok',
			invalid: 'glyphicon glyphicon-remove',
			validating: 'glyphicon glyphicon-refresh'　　　　　　　　
		},
		fields: {
			telePhone: {
				validators: {
					notEmpty: {
						message: '手机号不能为空'
					},
					regexp: {
						regexp: /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/,
						message: '请输入有效的手机号(中国)'
					}
				}
			}
		}
	});