//主要放顶部和底部、侧边栏
//document.getElementById  只能获取一个，数据类型 对象{}
//document.getElemenetsByName  获取多个， 数组[]
//document.getElementsByTagName
//document.getElementsByClassName

//document.querySelector()  获取一个 第一个， 对象{}
//document.querySelectorAll() 获取多个  数组[]


var asideLists = document.querySelectorAll(".asidebar-bar-slide")
//侧边栏控件 鼠标移入 给每一个加
//不能整体添加移入时间， 给每一个单独添加移入时间
for (var i = 0;i< asideLists.length;i++) {
	
	asideLists[i].onmouseenter = function(){
		//this  指向当前函数的执行的对象  li ,没有指向window
		
		//获取子节点
		console.log(this.children[1])
		var bar = this.children[1]
		if (!bar) {
			return;
		}
		//需要right的值从45 变到 35
		//定时器  让一个事件延迟执行  事件可以自定义
		//setInterval(延迟执行的动作， 延迟的时间)
		var right = 45;
		var timer = setInterval(function(){
			
			right = right-1;
			if(right<35){
				//clearInterval(定时器名字)
				clearInterval(timer);
			}else{
				bar.style.right = right+'px';
			}
			
		},10)
		
	}
}

//返回顶部

var returnTopElem = document.querySelector('.return-top');
returnTopElem.onclick = function(){
	//scrollTop   滚动条距离顶部的距离
	
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

	//setInterval(function(){},1000)
	//每隔1000毫秒执行函数体一次，不间断一直执行，除非手动关闭
	
	var timer=setInterval(function(){
		scrollTop = scrollTop-50;
		document.body.scrollTop = scrollTop;
		document.documentElement.scrollTop = scrollTop;
		if(scrollTop <=0){
			clearInterval(timer)
		}
	},1)
		
	//针对谷歌浏览器
//	document.body.scrollTop = 0;
	
	//针对IE  火狐浏览器
//	document.documentElement.scrollTop = 0;
	
}



//点击控件滑出购物车及客服

var slideBars = document.querySelectorAll('.aside-slide-bar');
var asideSlide = document.querySelector('.aside-slide');
//console.log(window.slideBars,slideBars)
for (var i=0; i<slideBars.length;i++) {
	slideBars[i].onclick = function(){
		//currentStyle获取css样式属性的 IE OPERA
		//getComputedStyle(要获取属性的元素，false)
		//console.log(asideSlide.currentStyle.right);
		var right = '';
		if(asideSlide.currentStyle){
			right = asideSlide.currentStyle.right;
		}else{
			right = getComputedStyle(asideSlide,false)['right'];
		}
		
		right = parseInt(right);
		var speed = 0;
		// classList  获取元素的类名   数据类型为对象
		//className  也是获取元素的类名   数据类型为字符串
		//.classList.add   往元素上添加一个类型
		//this.classList.remove('on');  往元素上移除一个类
		
//		this.classList.add('on');
		className = this.className
		
		//当滑块要往回走时  当前点的按钮上有on这个类型
		//并且right>-265  表示已经出来或者在出来的状态
		//className.indexOf('on') 查找类名字符串中是否有on这个类名
		//如果没有返回的是-1  有返回下标
		if(right>-265 && className.indexOf('on') >= 0 ){
			//回去   35   -265
			speed = -12;
			this.classList.remove('on');
				
		}else{
			//出来  -265   35
			speed = 12;
			this.classList.add('on');
			
			//判断显示的是购物车还是客服
			
			//判断是否有购物车按钮专有的类名，如果有表示显示的是购物车
			//没有就显示客服
			var cart=document.querySelector('.aside-slide-car')
			var server = document.querySelector('.aside-slide-server')
			console.log(className)
			if (className.indexOf('asidebar-bar-cart') >= 0 ) {
				
				//将当前元素的下一个元素节点的on去掉
				this.nextElementSibling.classList.remove('on');
				cart.style.display = 'block';
				server.style.display = 'none';
			}else{
				//显示客服
				server.style.display = 'block';
				cart.style.display = 'none';
				//将当前元素的上一个元素节点的on去掉
				this.previousElementSibling.classList.remove('on');
			}
			
			
		}
		//运动
		var timer = window.setInterval(function(){
			
			right += speed;
			
			if ((right>35 &&speed>0) || (right<-265 && speed<0)) {
				clearInterval(timer);
//				asideSlide.style.right =35+ 'px';
			}else{
				asideSlide.style.right = right+ 'px';
			}
		},10)
	}
	
}