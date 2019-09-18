/*
 * ajaxPackage  封装ajax请求  希望请求多次调用  调用这个请求不同的地方  不同的地方就以参数形式传入
 * @params  options   object
 * datatype json string
 * success  function  回调函数  在参数中传入一个方法  在数据处理完成后调用的 并将数据传入调用的方法
 **/


//自己定义的ajax封装
function ajaxPackage(options){
	console.log(options)
	//1.创建请求
	var request = new XMLHttpRequest();
	//2.打开请求 requset.open(请求类型，请求的地址，同步还是异步)
	request.open(options.type || 'get',options.url,options.async || true)
	//3.发送请求request.send(data)
	request.send(options.data || null)
	//4.请求监听状态
	request.onreadystatechange = function (){
		
		if (request.readyState == 4 && request.status == 200) {
			
			var data = request.responseText
			
			if (options.dataType == 'json') {
				
				data = JSON.parse(data)
				
			}
			//调用传入的方法  传回data数据
			options.success(data)
			
		}
		
		
	}



}

//下面是调用自己定义的封装
var requestUrl = 'http://127.0.0.1:3001/';
		//请求banner的数据
		ajaxPackage({
			
			url:requestUrl + 'getBanner',
			async: true,
			dataType: 'json',
			success: function(res){
				console.log(res)
			}				
		})
		//请求推荐信息
		ajaxPackage({
			url:requestUrl + 'lists',
			async: true,
			dataType: 'json',
			success: function(res){
				console.log(res)
				
				
				
				
			}
		})