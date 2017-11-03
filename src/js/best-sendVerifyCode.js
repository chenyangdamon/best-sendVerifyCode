/*!
 * JavaScript Components best-sendVerifyCode
 * @author : chenyangdamon
 * @email  : 645230634@qq.com
 * @github : https://github.com/chenyangdamon
 * @Date   : 2017-02-28 22:08:02
 */
;
(function(root, factory) {
	if (typeof define === "function" && define.amd) {
		// AMD模式
		define(["jquery"], function() {
			factory.apply(root, arguments)
		});
	} else {
		// 全局模式
		factory.call(root, root.$);
	}
})(window, function($) {
	/**
	 * [SendVerifyCode description]
	 * @return {[type]} [description]
	 */
	var SendVerifyCode = function() {
		/**
		 * [defaultsOption description]
		 * @type {Object}
		 */
		this.defaultsOption = {
			// 触发验证码的容器
			container: "",
			// 倒计时时长，默认60s
			duration: 60,
			// 倒计时期间，按钮处于禁用状态，用户自己指定禁用样式
			disableClass: "disabled",
			// 自定义文本信息
			message: "{$}秒后再次获取",
			// 点击发送验证码前的回调，可以进行其他操作，诸如检测手机号是否填写等等
			// 在这个回调中用户可放回true或false来决定是否继续发送验证码
			onBeforeSend: null
		};

		this.init.apply(this, arguments);
	};

	SendVerifyCode.prototype = {
		constructor: "SendVerifyCode",
		/**
		 * 初始化
		 * @param userOption
		 */
		init: function(userOption) {
			var _this = this;
			_this.option = $.extend({}, _this.defaultsOption, userOption);

			if (!(_this.option.container instanceof jQuery)) return;

			_this._bClick = true;
			_this._tagName = _this.option.container[0].tagName.toLowerCase();
			_this.bindEvent();
		},

		/**
		 * 注册事件
		 */
		bindEvent: function() {
			var _this = this;

			// 注册click事件
			_this.option.container.click(function() {
				// 是否可以点击，防止用户连续点击
				if (!_this._bClick) return;
				// 判断类型是否为function，有则表示要先执行回调函数
				if (typeof _this.option.onBeforeSend === "function") {
					/**
					 * onBeforeSend可以返回true或false
					 * true:继续获取验证码
					 * false:立即取消操作
					 */
					var _ret = _this.option.onBeforeSend();

					if (_ret === true) {
						// 继续获取
						_this._doStart();
					} else if (_ret === false) {
						// 取消
						return;
					}

				} else
				// 默认没有回调函数直接执行
				{
					_this._doStart();
				}

			});
		},
		/**
		 * 开始倒计时
		 */
		_doStart: function() {

			var _this = this,
				_timer = null,
				_iN = _this.option.duration,
				_text = _this._doReplaceMsg(_iN);
			_this._bClick = false;

			_this.option.container.addClass(_this.option.disableClass);
			_this._doGetMsg();
			_this._doSetMsg(_text);

			_timer = setInterval(function() {
				_text = _this._doReplaceMsg(--_iN);
				_this._doSetMsg(_text);
				// 倒计时结束
				if (!_iN) {
					clearInterval(_timer);
					_this._bClick = true;
					_this.option.container.removeClass(_this.option.disableClass);
					_this._doSetMsg(_this.originMsg);
				}
			}, 1000);
		},
		_doReplaceMsg: function(iN) {
			var _this = this;
			return _this.option.message.replace(/\{\$\}/, iN);
		},
		/**
		 * 设置信息
		 * [_doSetMsg description]
		 * @param {[type]} msg [description]
		 */
		_doSetMsg: function(msg) {
			var _this = this;
			_this._tagName === "input" ? _this.option.container.val(msg) : _this.option.container.html(msg);
		},
		/**
		 * 保存原始信息
		 * [_doGetMsg description]
		 * @return {[type]} [description]
		 */
		_doGetMsg: function() {
			var _this = this;
			_this.originMsg = _this._tagName === "input" ? _this.option.container.val() : _this.option.container.html();
		}
	};

	this.SendVerifyCode = SendVerifyCode;

});