//注册页面的验证
$.extend($.validator,{
		messages: {
			required: "该字段不能为空.", //字段必须的
			remote: "Please fix this field.",  //远程  发送请求判读
			email: "请输入正确的邮箱.", //邮箱字段
			url: "请输入正确的地址.",  
			date: "Please enter a valid date.", 
			dateISO: "Please enter a valid date (ISO).", //全球时间标准
			number: "Please enter a valid number.",
			digits: "Please enter only digits.",
			equalTo: "请输入相同的密码.", //等于   两次密码要相等
			maxlength: $.validator.format( "Please enter no more than {0} characters." ),  //最大长度
			minlength: $.validator.format( "Please enter at least {0} characters." ),  //最小长度
			rangelength: $.validator.format( "请输入6-18位字符." ),
			range: $.validator.format( "Please enter a value between {0} and {1}." ),
			max: $.validator.format( "Please enter a value less than or equal to {0}." ),
			min: $.validator.format( "Please enter a value greater than or equal to {0}." ),
			step: $.validator.format( "Please enter a multiple of {0}." )
		}
	})
	//添加验证规则
	//rules中的属性名为如： passeord  为验证标签name 或者 id 的值
	//如  ：password   为验证密码的输入框   该名字为输入密码input的name值或者id
	$(".validateform").validate({
		//验证规则
		rules:{
			password:{
				required: true,
				rangelength: [6,18]
			},
			repassword:{
				equalTo: $('[name=password]')	
			},
			mobile:{
				required: true,
				tel: true
			}
				
		},
		//定义错误信息
		messages:{
			
		}
	
	})
	//3.添加自定义验证
	//$.validator.addMethod(验证名字，验证的方法，验证错误信息)     自定义验证
	$.validator.addMethod('tel',function(value, element){
		var reg = /^1[356789]\d{9}$/
		
		return reg.test(value)
		
	},'请输入手机号')
	
	//4.更改错误提示的样式




//获取验证码

//4.获取cookie   存在继续倒计时
var cookia = $.cookie('cookia')
if (cookia) {
	countDown(cookia)
}


//获取验证码

$('.get-code').click(function(){
	
	var _this = this
	
	if ($(this).hasClass('disabled'))
		return;
	countDown(30)

	
})

function countDown(count){
	$('.get-code').addClass('disabled')
	
	$('.get-code').html(count+'s后获取')
		//1.开启倒计时
	var timer = setInterval(function(){
		count--
		$('.get-code').html(count+'s后获取')
		//3.设置cookie
		$.cookie('cookia',count)
		//取
		console.log($.cookie('cookia'))
		//2.结束倒计时
		if (count<=0) {
			
			clearInterval(timer)
			$('.get-code').removeClass('disabled').html('重新获取')
			$.removeCookie('cookia')
		}
	},1000)
}



















//点击注册时
$('.zhuce').click(function(){
	 $('.cinfo').css({
	 	display: 'none'
	 });
	 $('.register').css({
	 	display: 'block'
	 })
})
//点击登录时
$('.denglu').click(function(){
	 $('.cinfo').css({
	 	display: 'block'
	 });
	 $('.register').css({
	 	display: 'none'
	 })
})

$('.borderf').focus(function(){
	$(this).parent().css({
		border: '1px solid #ff2d52'
	})
})

$('.borderf').blur(function(){
	$(this).parent().css({
		border: '1px solid #e2e2e2'
	})
})