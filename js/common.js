
/*
 *countDown   倒计时
 * @param future date 表示倒计时结束时间   IS NOT NUll
 * @param history date 表示倒计时开始时间
 * 将时间转换为相差的时分秒字符串返回
 */

function countDown(future, histry) {
	
	if(!histry) {
		//当前时间距离1970年1月1日毫秒数
		histry = new Date().getTime()
	}else {
		histry = new Date(histry).getTime()
	}
	//倒计时结束时间距离1970年的毫秒数
	future = new Date(future).getTime()
	
	//倒计时相差的毫秒数
	var distance = future - histry
	
	
	if(distance <= 0) {
		return '000000'
	}
	
	//距离毫秒数- 小时毫秒数 =  分钟毫秒数 + 秒的毫秒数
	//1小时  1*60*60*1000
	//向下取整 Math.floor()
	var hours = Math.floor(distance/(60*60*1000))
	
	//1分钟 1*60*1000
	
	var minutes = Math.floor((distance - hours*60*60*1000)/(60*1000))
	
	var seconds = Math.floor((distance - hours*60*60*1000 - minutes*60*1000)/1000)

	return changeLength(hours) + changeLength(minutes) + changeLength(seconds) 
}

/*
 *changeLength   将一位数的时间转换为两位数
 * @param num string|number 表示转换的字符   IS NOT NUll
 */
function changeLength(num) {
	//判断长度
	num = String(num)
	
	if(num.length <=1) {
		num = '0' + num
	}
	
	return num
}




//tab 切换     第一种方法       要注意层级关系
//var tabTitle = document.querySelectorAll('.tab-title')  /*找到所有的tab-title*/
//for (var i = 0;i < tabTitle.length;i++) {
//	//给tabTitle对象添加index属性  属性值为下标
//	tabTitle[i].index = i;
//	tabTitle[i].onmouseenter = function(){
////		如果出错可以在这儿console.log(123)测试
//		
//		//this.parentNode找到父元素
//		//nextElementSibling 查找下一个兄弟元素
//		var parent = this.parentNode.nextElementSibling
//		//找到所有tablists    查找子集children
//		var tabLists = parent.children
//		
////		如果出错可以在这儿console.log(tabLists)测试
//		for (var j = 0;j < tabTitle.length;j++) {
//			tabTitle[j].classList.remove('active')  /*add('active'); 没有加' . '*/
//			tabLists[j].classList.remove('active')   /*add('active'); 没有加' . '*/
//		}
//		this.classList.add('active');    /*add('active'); 没有加' . '*/
//		tabLists[this.index].classList.add('active')    /*add('active'); 没有加' . '*/
//		
//	}
//}

//tab 切换     第二种方法       不用注意层级关系
/*
 *changeTab  模拟tab切换 切换事件mouseenter
 * @param  parentClass string 父级类名
 */

//function changeTab(parentClass){
//	var parent= document.querySelector(parentClass);
//	
//	var tabTitle = parent.querySelectorAll('.tab-title1');
//	var tabLists = parent.querySelectorAll('.tab-lists1');
//	
//	for (var i = 0;i<tabTitle.length;i++) {
//		tabTitle[i].index = i;
//		tabTitle[i].onmouseenter = function(){
//			for (var j = 0;j<tabLists.length;j++) {
//				tabTitle[j].classList.remove('active');
//				tabLists[j].classList.remove('active');
//			}
//			this.classList.add('active');	
//			tabLists[this.index].classList.add('active');
//		}
//	}
//}
//
////调用tab切换
//changeTab('.tab-box1');
//changeTab('.tab-box2');
//changeTab('.tab-box3');