$(function(){new SendVerifyCode({container:$(".verifyCode1")}),new SendVerifyCode({container:$(".verifyCode2"),duration:5}),new SendVerifyCode({container:$(".verifyCode3"),message:"{$}s后可再次获取"}),new SendVerifyCode({container:$(".verifyCode4"),onBeforeSend:function(){return window.confirm("确定要获取验证码吗？")}})});