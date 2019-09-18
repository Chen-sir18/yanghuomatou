//打开列表页   获取列表页数据  只要求页码和页数当前页面显示的列表数量
//获取页码以及数量



//存储地址
var requestUrl = 'http://192.168.97.231:3003/'
//		var requestUrl = 'http://127.0.0.1:3001/'

//1.从当前地址上获取页码以及数量
var page = getQueryParam('page')
var count = getQueryParam('count') 

var total = 0
//2.发送请求
$.ajax({
	type:"get",
	url: requestUrl+"list",
	async:true,
	data:{
		page:page,
		count:count
	},
	//请求页面的类型 json  string xml html script jsonp
	dataType:'json',
	success: function(res){
		var pageHtml = ''
		//找到页码总数
		total = res.total
		for(var i = 0;i<res.total;i++){
			pageHtml += `
			<li><a href="yamian5.html?page=${i+1}&count=${count}><button class="page page-btn next">${i+1}</button></a></li>`
		}
		//在页码第一个a标签后面插入  放入的页码数
		$(".good-lists-pe ul li:first").after(pageHtml)
		
	}
});


//3.点击上一页和下一页
$(".page-btn").click(function(){
	console.log(count)
	if (page<=1 && $(this).hasClass('prev')) {
		return;
	}
	if (page>=total && $(this).hasClass('next')) {
		return;
	}
	
	
	if ($(this).hasClass('prev')) {
		page --
	}else{
		page ++	
	}
	//点击后跳转的页面
	
	window.location.href = 'yamian5.html?page='+page+'&count='+count
	
})


function getQueryParam(name){
	//1）获取请求的参数
	var search = window.location.search
	//2)截取字符串   不要  ‘？’
	search = search.substr(1)
	
	
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	//match 从一个字符串中匹配与正则相符的字符
	//返回的第一个参数为匹配的字符串   
	//后面的参数以小括号包起来的字符
	var match = search.match(reg)
	console.log(match)
	if (match) {
		
		return match[2];
	}
	return ''

}