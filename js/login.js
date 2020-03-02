//禁用插件默认enter键事件
$(document).keypress(
	function(event) {
		if(event.which == '13') {
			event.preventDefault();
		}
	});
	
//“清空”
$("#reset").click(function() {
	location.reload();
});

//“返回首页”
$("#return").click(function() {
	location.href = "index.html";
});

//“登录”
$("#signIn").click(function() {
	//记住密码
	//code...(还没写，不知道怎么写，逻辑：登录成功的时候同时判断“记住密码”有无勾选，有勾选，使用localStorage保存手机号和密码)

	//输入框内容不为空
	if($('#telePhone').val() !== "" && $('#passWord').val() !== "") {
		//判断当前验证是否已经通过所有验证
		if($("#login").data('bootstrapValidator').isValid()) {
			//判断与数据库的手机号、密码是否一致
			var phone = "18250202690";
			var pwd = "111111";
			//先判断手机号是否已注册
			if($('#telePhone').val() === phone) {
				//已注册
				//再判断密码是否一致
				if($('#passWord').val() !== pwd) {
					//密码不一致，修改模态框的提示内容并显示模态框
					$("#myModal .modal-body").html("密码错误，请重新输入！");
					$("#myModal").modal({
						backdrop: 'static',
						keyboard: false
					});
				} else {
					//密码一致，则登录成功
					//code...
					//跳转至首页index.html并切换导航栏的样式(根据session，样式还没写...)
					location.href = "index.html";
				}
			} else {
				//未注册
				$("#myModal").modal({
					backdrop: 'static',
					keyboard: false
				});
			}
		}
	}
});

//表单验证
$('#login')
	.bootstrapValidator({　
		//默认的提示消息　　　　　　
		message: 'This value is not valid',
		//默认：字段更改后立即对其进行验证
		live: 'enabled',
		//表单框里右侧的icon
		　feedbackIcons: {　　　　　　　　
			valid: 'glyphicon glyphicon-ok',
			invalid: 'glyphicon glyphicon-remove',
			validating: 'glyphicon glyphicon-refresh'　　　　　　　　
		},
		//表单提交成功时会调用此方法
		submitHandler: function(validator, form, submitButton) {
			// validator: 表单验证实例对象
			// form  jq对象  指定表单对象
			// submitButton  jq对象  指定提交按钮的对象
		},
		// 当表单输入无效时，这些按钮将被禁用(disabled)
		/*	submitButtons: 'button[type="submit"]',*/
		fields: {
			telePhone: {
				//在字段的长度值超过此数字之前，不要对字段进行验证
				//threshold: 5,
				//当用户失去焦点时，字段将被验证 focus blur keyup
				//trigger: 'blur',
				validators: {
					notEmpty: {
						message: '手机号不能为空'
					},
					regexp: { //正则表达式
						regexp: /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/,
						message: '请输入有效的手机号(中国)'
					},
				}
			},
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
			}
		}
	});