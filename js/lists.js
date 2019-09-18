////ajax//XMLHttpRequest网络数据请求
//
//var relistsUrl = 'http://127.0.0.1:3001/';
//
////1.定义网络请求实例
//var relists =new XMLHttpRequest();
////2.打开请求
////requst.open("请求的类型",请求的路径地址，是否异步)
////请求类型  时后台人员规定的
////请求的路径地址  时后台人员给的
////异步：浏览器执行js代码从上到下执行，当遇到ajax请求时，会开出新的线路，但不会影响会面的代码执行的时间
//relists.open("get",relistsUrl+'lists?id=1',true)
//relists.open("get",relistsUrl+'lists?id=2',true)
//relists.open("get",relistsUrl+'lists?id=3',true)
////3.发送请求到后台
////后台会规定是否需要数据
////relists.send(后台需要的数据);
//relists.send();
////请求发送的状态  4个
////0   初始化XMLHttpRequest
////1   打开
////23  请求发送成功   后台接收成功
// 
////请求完成  后台返回前端数据成功了
////请求监听状态码
//relists.onreadystatechange = function(){
//	//就是执行过程中状态码
////	console.log(relists.readyState);
//	if(relists.readyState == 4){		
//		//请求成功后的数据relists.responseText
//		var result = JSON.parse(relists.responseText);
//		//后台返回一份字段   判断返回的数据是否正确  如果为true 就正确
//		//后台规定字段名以及字段形式
//		if (result.success == true) {
//			//lists的个数  是数组
//			var lists = result.list;
////			console.log(lists)
//			//将lists往slide里添加
//			var slide=document.querySelector('.cailike-main');	
//			var html= '';
//				for (var i=0;i<lists.length;i++) {
//					html+= `<div class="cailike-main-list fl padding-10">
//							<img class="margin-20-b" src="${relistsUrl+lists[i].img}"/>
//							<div class="overflow title">${lists[i].title}</div>
//							<div class="margin-5-t">
//								<span class="text-main font-14">${lists[i].price}</span>
//								<span class="line-through margin-15-l">￥1999.00</span>
//							</div>
//						</div>`
////					console.log(html)
//				
//				}
//
//			slide.innerHTML = html
//			
//		}
//		
//	}
//}



///$.ajax封装请求

//请求推荐信息
//访问其他端口  网络请求
//		var requestUrl = 'http://192.168.97.250:3002/'
//访问本地端口  网络请求
var requestUrl = 'http://127.0.0.1:3001/'

for (var j=0;j<3;j++) {
	sendAjax(j)
}

function sendAjax(id){
	
		$.ajax({
			url:requestUrl + 'lists?id=' + id,
			type:'get',
			//请求是同步还是异步
			async:true,
			//请求页面的类型 json  string xml html script jsonp
			dataType:'json',
			//请求成功回调
			success:function(res){
				
				if (res.success) {
					var lists = res.list;
					
					var html='';
					for (var i = 0;i<lists.length;i++) {
						html+= `<div class="cailike-main-list fl padding-10">
									<img class="margin-20-b" src="${requestUrl+lists[i].img}"/>
									<div class="overflow title">${lists[i].title}</div>
									<div class="margin-5-t">
										<span class="text-main font-14">￥${lists[i].price}</span>
									<span class="line-through margin-15-l">￥1999.00</span>
									</div>
								</div>`
						
					}
					$(".tab-lists").eq(id).html(html)
				}
				
			}
			
	});
	
}


	//请求banner的数据
//$.ajax({
//	type:'get',
//	url:requestUrl + 'getBanner',
//	async: true,
//	dataType: 'json',
//	success: function(res){
//		
//		if (res.success) {
//			var lists = res.list;
//			
//			var html=`<img src="${requestUrl+lists[lists.length-1].img}"/>`
//			for (var i=0;i<lists.length;i++) {
//				html+= `<img src="${requestUrl+lists[i].img}"/>`
//			}
//			html+= `<img src="${requestUrl+lists[0].img}"/>`
//			
//		}
//		
//	}				
//})