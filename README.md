# best-sendVerifyCode 是什么?
应用于web开发获取验证码的组件
# 演示
[Demo](https://chenyangdamon.github.io/best-sendVerifyCode/dist/)
# 依赖 
- jquery
# 安装
## script
```html
// import jquery.js
<script type="text/javascript" src="js/jquery.js"></script>
// import best-sendVerifyCode.js
<script type="text/javascript" src="js/best-sendVerifyCode.js"></script>
```
# 使用
index.js
```html
<script type="text/javascript">
$(function(){
  
  // 实例化SendVerifyCode
  var sendVerifyCode=new SendVerifyCode(options);
  
});
</script>
```
# 结构
## 配置项
|属性|说明|默认值|字段类型|
|:---|---|---|---|
| `container`|待处理的DOM元素,是一个jQuery对象.|`$("body")`|`String`|
| `duration`|倒计时持续时长.|`60`|`Number`|
| `disableClass`|倒计时期间的禁用状态样式,用户可自定义.|`"disabled"`|`String`|
| `message`|用户自定义信息展示格式,其中`{$}`是变动的数字，必须的.|`"{$}秒后再次获取"`|`String`|
| `onBeforeSend`|获取验证码的其他的操作，该处理必须要返回一个布尔值，`true`：表示继续获取，`false`：表示取消获取.|`null`|`Function`|
## 方法
#### shutDown()
立即停止倒计时
```javascript
sendVerifyCode.shutDown();
```
