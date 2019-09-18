//倒计时




countDownHtml()
var countInterval = setInterval(countDownHtml,1000)
function countDownHtml(){
	
	var countDownTime = countDown('2019-9-3 21:58:00')

	if (parseInt(countDownTime) <= 0) {
		clearInterval(countInterval)
	}
	
	//将字符串转为数组
	var arrTime = countDownTime.split('');
	var html = `<i class="iconfont icon-shizhong font-28 margin-5-r"></i>
		<span class="font-28 font-wt">今日限时购</span>
		<span class="font-14">本场还剩</span>
		<span class="font-24 font-wt">${arrTime[0]}</span>
		<span class="font-24 font-wt">${arrTime[1]}</span>
		<span class="font-24 font-wt">:</span>
		<span class="font-24 font-wt">${arrTime[2]}</span>
		<span class="font-24 font-wt">${arrTime[3]}</span>
		<span class="font-24 font-wt">:</span>
		<span class="font-24 font-wt">${arrTime[4]}</span>
		<span class="font-24 font-wt">${arrTime[5]}</span>`
	document.querySelector('.seckill-head').innerHTML = html;

}

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
