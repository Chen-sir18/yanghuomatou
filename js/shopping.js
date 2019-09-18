

//js实现的全选
//var seltall=document.querySelector('.ckall');
//var seltlists = document.querySelectorAll('.rck');
//seltall.onclick = function(){
//	if (seltall.checked==true) {
//		for (var i=0;i<seltlists.length;i++) {
//			seltlists[i].checked=true;
//		}
//		
//	}else{
//		for (var i=0;i<seltlists.length;i++) {
//			seltlists[i].checked=false;
//		}
//	}
//	
//	
//}


//jquery实现全选

//全部选中
var checkAll=$(".check-all");
		var checkList=$(".input-goods input");
		checkAll.change(function(){
			//this当前元素的js对象
			console.log(this);
			//当前元素的jquery对象
			console.log($(this));
			if (this.checked) {
				//prop()改变属性
				checkList.prop('checked',true)
				$(".election-main").css("background","#FFF9F5")
			}else{
				//prop()改变属性
				checkList.prop('checked',false)
				$(".election-main").css("background","none")
			}
		})
//全部选中	删除	
var checkAll=$(".delet-input");
		var checkList=$(".input-goods input");
		checkAll.change(function(){
			//this当前元素的js对象
			console.log(this);
			//当前元素的jquery对象
			console.log($(this));
			if (this.checked) {
				//prop()改变属性
				checkList.prop('checked',true)
				$(".election-main").css("background","#FFF9F5")
			}else{
				//prop()改变属性
				checkList.prop('checked',false)
				$(".election-main").css("background","none")
			}
		})
		
//单独选中时的单选按钮
		checkList.change(function(){
			if (this.checked) {
				$(this).closest(".election-main").css("background","#FFF9F5")
				
			} else{
				$(this).closest(".election-main").css("background","none")
			}
		})