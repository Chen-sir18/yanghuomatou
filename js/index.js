
//首页的逻辑代码

//文档加载完成
window.onload = function(){
	/*
 *轮播
 * 1.计算carosoal-slide 的宽度  图片的宽度*图片的长度
 * 
 * */
	if (autoInterval) {
		clearInterval(autoInterval)
	}
	var index = 1;
	var autoInterval = null;
	var dotIndex = 0;
	var speed = -10;
	var bannerCarosoul = document.querySelector('.banner-cursoal');
	//获取装有图片的盒子,就是img的父级盒子
	var carosoalSlide = document.querySelector('.carosoal-slide');
	//获取轮播盒子中的img图片，就是img父级盒子的父级盒子
	var carosoalImg = document.querySelectorAll('.banner-cursoal img');
	//获取左右按钮
	var aBtn = document.querySelectorAll('.carosoul-btn');
	//获取圆点按钮下的li
	var aDot = document.querySelectorAll('.carosoul-dot li');
	
	// offsetLeft offsetTop   offsetWidth  offsetHeight
	//图片的宽度等于任意一张图片的宽度
	var imgWidth = carosoalImg[0].offsetWidth;
	var imgLength = carosoalImg.length;
	
	//1.计算carosoal-slide 的宽度  图片的宽度*图片的长度
	carosoalSlide.style.width = imgWidth * imgLength + 'px';

	//3.循环轮播
	
	autoAnimate()
	function autoAnimate() {
		autoInterval = setInterval(function(){
			speed = -Math.abs(speed);
			animate();
		}, 2000)
	}
		
		//2. 运动起来
	function animate() {    //点击右按钮
		
		changeDot();
		
		var timer = setInterval(function(){
			var left = carosoalSlide.offsetLeft + speed;
			carosoalSlide.style.left = left + 'px';
			
			var curIndex = 0;   //表示即将要运动到图片的下标
			
			if(speed<0) {
				curIndex = index+1;
			}else{
				curIndex = index-1;
			}
				
				
			//当当前盒子的left值小于等于目标值时 停止动画    
			//(left <= -(curIndex)*imgWidth && speed <0)  往左移
			//(left >= -curIndex*imgWidth && speed > 0)   往右移
			if((left <= -(curIndex)*imgWidth && speed <0) || (left >= -curIndex*imgWidth && speed > 0)) {
				// 合并左右按钮
				clearInterval(timer);
				index = curIndex;
				
				//4. 当图片运动到显示的第一张的时候， 
				//默默将图片换到显示的第一张，排序的第二张
				if(index >= imgLength -1) {
					index = 1;
					carosoalSlide.style.left = -imgWidth + 'px';
				}else if(index<=0) {
					index = imgLength-2;
					carosoalSlide.style.left = -index*imgWidth + 'px';
				}
			
			}
			
		}, 10)		
	}
	//轮播下的圆点按钮
	function changeDot() {
	
		if(speed< 0){  //判断运动传入的position是否等等于left左位置
			dotIndex ++;
		}else {
			dotIndex --;
		}

		if(dotIndex > aDot.length -1 ) {   //判断doIndex的值是否大于获取到的li长度值
			dotIndex = 0;                  //如果大于就将doIndex改为0
		}else if(dotIndex <0) {            //如果doIndex小于0
			dotIndex = aDot.length-1;      //将doIndex改为等于获取到的li长度值
		}
			
		for(var i = 0;i< aDot.length;i++) {//循环获取到的li长度值
			
			aDot[i].classList.remove('on');  //执行移除on类名
		}
		
		aDot[dotIndex].classList.add('on');  //执行添加on类名
		
		
	}

//	function leftAnimate(){   //点击左按钮
//		
//		var timer2 = setInterval(function(){
//			var left = carosoalSlide.offsetLeft + 20;
//			carosoalSlide.style.left = left + 'px';
//			
//			if (left >= -(index-1)*imgWidth ) {
//				clearInterval(timer2);
//				index--;
//				if (index <= 0) {
//					index = imgLength-2;
//					carosoalSlide.style.left = -index*imgWidth + 'px';
//				}
//			}
//		},10)
//	}
	
	//5.移入轮播盒子 停止动画移除开始
	bannerCarosoul.onmouseenter = function(){
		clearInterval(autoInterval);
	}
	bannerCarosoul.onmouseleave = function(){
		autoAnimate();
	}
	
	//6.给左右按钮加点击事件
	for (var i=0;i<aBtn.length;i++) {
		aBtn[i].onclick = function(){
			//获取类名
			var className = this.className
			if (className.indexOf('prev') >= 0 ) {
				//点击左按钮
				speed = Math.abs(speed);
				animate();
			}else{
				//点击右按钮
				speed = -Math.abs(speed);
				animate();
			}
		}

	}
	
	//7.给圆点添加点击事件
	for (var i=0; i<aDot.length;i++) {
		aDot[i].dot = i;
		aDot[i].onclick = function(){
			
			if (this.dot<dotIndex) {
				speed = Math.abs(speed);
				index = this.dot + 2;
				dotIndex = this.dot + 1;
				
			}else{
				speed = -Math.abs(speed);
				index = this.dot;
				dotIndex = this.dot - 1;
			}
			
			animate();
		}
	}
	
	
	//当浏览器最小化  或者切换不同页面时执行的动作  visibilitychange
	//document.addEventListener监听事件
	document.addEventListener('webkitvisibilitychange',function(){
		
		var isHidden = document.webkitVisibilityState;
		console.log(isHidden);
		if (isHidden == 'hidden') {
			clearInterval(autoInterval)  /*缩小浏览器时停止定时器*/
		} else{
			autoAnimate()    /*点开浏览器时开启定时器*/
		}
	});
		
}




//逻辑   与    页面操作   分离

//倒计时
	countDownHtml()
	var countInterval = setInterval(countDownHtml,1000)

	function countDownHtml(){
		
		var countDownTime = countDown('2019-9-1 15:50:00')

		if (parseInt(countDownTime) <= 0) {
			clearInterval(countInterval)
		}
		
		//将字符串转为数组
		var arrTime = countDownTime.split('');
		var html = `<span class="padding-10-lr">本场还剩</span>
			<span class="time">${arrTime[0]}</span>
			<span class="time">${arrTime[1]}</span>
			<span>:</span>
			<span class="time">${arrTime[2]}</span>
			<span class="time">${arrTime[3]}</span>
			<span>:</span>
			<span class="time">${arrTime[4]}</span>
			<span class="time">${arrTime[5]}</span>`
		document.querySelector('.count-down').innerHTML = html;

	}
