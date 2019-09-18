

//tab切换推荐商品部分  jquery方法
		$(".tab-title").mouseenter(function(){
			//.removeClass('on')移除类名
			$('.tab-title').removeClass('active')
			//addClass(类名)添加类名
			$(this).addClass("active");
			$(this).siblings().removeClass('active')
			//index（）获取当前元素的下标
			var index=$(this).index()
			//找到当前元素的祖先  tab-box
			var parent = $(this).parents('.tab-box')
			//从祖先中查找某个元素
			var ele = parent.find(".tab-lists")
			ele.eq(index).addClass('active');
			
			ele.eq(index).siblings().removeClass('active');
			
		})
		
		
		
//tab切换楼层商品部分  jquery方法
		$(".tab-title1").mouseenter(function(){
			//.removeClass('active')移除类名
			$('.tab-title1').removeClass('active')
			//addClass(类名)添加类名
			$(this).addClass("active");
			$(this).siblings().removeClass('active')
			//index（）获取当前元素的下标
			var index=$(this).index()
			//找到当前元素的祖先  tab-box
			var parent = $(this).parents('.tab-box1')
			//从祖先中查找某个元素
			var ele = parent.find(".tab-lists1")
			ele.eq(index).addClass('active');
			
			ele.eq(index).siblings().removeClass('active');
			
		})