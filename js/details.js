


//点击发表评论时显示评论输入框   第一种方法
//var aBttn = $(".bttn");
//aBttn.click(function(){
//	$('.fill').css({
//		display:'block'
//	})
//})

//点击发表评论时显示评论输入框    第二种方法
$(".bttn").click(function(){
  $(".fill2").toggle(500);
});

$(".bttn2").click(function(){
  $(".fill3").toggle(500);
});


//点击提交按钮时提交评论的内容到评价内容模块中
//发表评论
var send = $(".send2")
send.click(function(){
	var value = $(".fill2 [name=content]").val()
	if (value) {
		
		if (confirm('是否确定提交')) {
			var html =`<li>
				<div class="lists-ulists-img margin-20-r">
					<img src="img/eg.jpg"/>
					<span>h***o</span>
				</div>
				<div class="lists-ulists-txt ">
					<span class="">好评 |</span>
					<sapn>2016-11-29  16:10:45</sapn>
					<div class="margin-20-tb lists-ulists-txts">
							${value}		
					</div>
				</div>
			</li>`
			
			//append向标签中后面添加标签
//					$(".lists-ulists-txts").append(html)
			//appendTo向标签中父级后面添加标签
//					$(html).appendTo($(".lists-ulists-txts"))
			//向标签中添加元素  添加到前面
//					$(".lists-ulists-txts").prepend(html)
//					//向标签中添加元素  添加到父级前面
			$(html).prependTo($(".lists-ulists-to"))
			
			$("[name=content]").val('')
			
			//判断  如果确定提交将输入评论的文本框隐藏
				if(true){
					$('.fill').css({
					display:'none'
				})
			}
		}
		
	}
		
})

//温馨提示
var sends = $(".send")
sends.click(function(){
	var value = $(".fill3 [name=content]").val()
	if (value) {
		
		if (confirm('是否确定提交')) {
			var html =`<li>
				<div class="lists-ulists-img margin-20-r">
					<img src="img/eg.jpg"/>
					<span>h***o</span>
				</div>
				<div class="lists-ulists-txt ">
					<sapn>2016-11-29  16:10:45</sapn>
					<div class="margin-20-tb lists-ulists-txts">
							${value}		
					</div>
				</div>
			</li>`
			
			//append向标签中后面添加标签
//					$(".lists-ulists-txts").append(html)
			//appendTo向标签中父级后面添加标签
//					$(html).appendTo($(".lists-ulists-txts"))
			//向标签中添加元素  添加到前面
//					$(".lists-ulists-txts").prepend(html)
//					//向标签中添加元素  添加到父级前面
			$(html).prependTo($(".lists-ulists-too"))
			
			$("[name=content]").val('')
			
			//判断  如果确定提交将输入评论的文本框隐藏
				if(true){
					$('.fill').css({
					display:'none'
				})
			}
		}
		
	}
		
})


//购物车的加减
$(document).ready(function(){   //ready 在Dom文档加载完成时就执行
		 //加的效果
		 $(".add").click(function(){
		   var n=$(this).prev().val();   //取当前元素的前一个兄弟元素的value值
		   var num=parseInt(n)+1;   //将取到的value值取整+1，赋值给num
		   if(num==0){ 
		   	return;//判断num等于0返回一个return
		   }
		      $(this).prev().val(num); //取当前元素的前一个兄弟元素赋值num的value值
		 });
		 //减的效果
		 $(".jian").click(function(){
		   var n=$(this).next().val();
		   var num=parseInt(n)-1;
		   if(num==0){ return}
		   $(this).next().val(num);
		  })
		})


//大图下的商品选择
//var leftBtn = $('.leftBtn');
//var rightBtn = $('.rightBtn');
//var sport = $('.sport');
//var sportWidth = sport.width()
//
//leftBtn.click(function(){
//		sport.css({
//			width:sportWidth
//		})
//})
