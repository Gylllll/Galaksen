//禁用插件默认enter键事件
$(document).keypress(
	function(event) {
		if(event.which == '13') {
			event.preventDefault();
		}
	});
	
//“立即找回”
$('#find_now').click(function() {
	if($('#telePhone').val() !== "") {
		 //判断当前表单的验证是否已经通过
		if($("#find").data('bootstrapValidator').isValid()) {
			//如果数据库中该手机号不存在,即未注册
			var phone = "18250202690";
			if($("#telePhone").val() !== phone) {
				$("#myModal").modal({
					backdrop: 'static',
					keyboard: false
				});
			} else {
				//已注册的手机号
				//向该手机发送验证码并跳转至重置密码界面reset_pwd.html
				location.href = "reset_pwd.html";
			}
		}
	}
});

//bootstrapValidator jQuery表单验证控件
$('#find')
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