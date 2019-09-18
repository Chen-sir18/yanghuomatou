
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