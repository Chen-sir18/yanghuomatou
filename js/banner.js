//ajax//XMLHttpRequest网络数据请求

var requestUrl = 'http://127.0.0.1:3001/';

//1.定义网络请求实例
var request =new XMLHttpRequest();
//2.打开请求
//requst.open("请求的类型",请求的路径地址，是否异步)
//请求类型  时后台人员规定的
//请求的路径地址  时后台人员给的
//异步：浏览器执行js代码从上到下执行，当遇到ajax请求时，会开出新的线路，但不会影响会面的代码执行的时间
request.open("get",requestUrl+'getBanner',true)


//3.发送请求到后台
//后台会规定是否需要数据   post
//request.send(后台需要的数据);
request.send();
//请求发送的状态  4个
//0   初始化XMLHttpRequest
//1   打开
//23  请求发送成功   后台接收成功

//请求完成  后台返回前端数据成功了
//请求监听状态码
request.onreadystatechange = function(){
	//就是执行过程中状态码
//	console.log(request.readyState);
	if(request.readyState == 4){		
		//请求成功后的数据request.responseText
		var result = JSON.parse(request.responseText);
		//后台返回一份字段   判断返回的数据是否正确  如果为true 就正确
		//后台规定字段名以及字段形式
		if (result.success == true) {
			//banner的个数  是数组
			var lists = result.list;
			
			//将banner往slide里添加
			var slide=document.querySelector('.carosoal-slide');
			
			var html=`<img src="${requestUrl+lists[lists.length-1].img}"/>`
			for (var i=0;i<lists.length;i++) {
				html+= `<img src="${requestUrl+lists[i].img}"/>`
			}
			html+= `<img src="${requestUrl+lists[0].img}"/>`
			slide.innerHTML = html
			
		}
		
	}
}


request.open("get",requestUrl+'lists',true)

request.send();

request.onreadystatechange = function(){
	
	if (request.readyState==4) {
		
	}
	
}
