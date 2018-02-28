/*
 * @Author: chenyang_pc
 * @Date:   2017-10-28 22:08:02
 * @Last Modified by:   chenyang_pc
 * @Last Modified time: 2017-11-03 16:26:49
 */

$(function() {

	// 实例化SendVerifyCode组件
	var sendVerifyCode1 = new SendVerifyCode({
		container: $(".verifyCode1"),
	});

	var sendVerifyCode2 = new SendVerifyCode({
		container: $(".verifyCode2"),
		duration: 5,
	});

	var sendVerifyCode3 = new SendVerifyCode({
		container: $(".verifyCode3"),
		message: "{$}s后可再次获取"
	});

	var sendVerifyCode4 = new SendVerifyCode({
		container: $(".verifyCode4"),
		onBeforeSend: function() {
			return window.confirm("确定要获取验证码吗？");
		}
	});


});