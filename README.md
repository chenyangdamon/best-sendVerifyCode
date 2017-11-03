# What is best-sendVerifyCode ?
This is a sendVerifyCode component that focuses on the PC side of web applications. It's simple, compact, lightweight, efficient, and portable. Helps reduce the amount of development effort.
# Dependence 
- jquery.1.11.x
# Installation
## script
```html
// import jquery.js
<script type="text/javascript" src="js/jquery.js"></script>
// import best-sendVerifyCode.js
<script type="text/javascript" src="js/best-sendVerifyCode.js"></script>
```
# Useage
index.js
```html
<script type="text/javascript">
$(function(){
  
  // instantiation sendVerifyCode
  var sendVerifyCode=new sendVerifyCode(options);
  
});
</script>
```
# Constructor
## Options
|key|description|default|options|
|:---|---|---|---|
| `container`|待处理的DOM元素,是一个jQuery对象.|`$("body")`|`String`|
| `duration`|倒计时持续时长.|`60`|`Number`|
| `disableClass`|倒计时期间的禁用状态样式,用户可自定义.|`"disabled"`|`String`|
| `message`|用户自定义信息展示格式.|`"{$}秒后再次获取"`|`String`|
| `onBeforeSend`|获取验证码的其他的操作，该处理必须要返回一个布尔值，true：表示继续获取，false：表示取消获取.|`null`|`Function`|

