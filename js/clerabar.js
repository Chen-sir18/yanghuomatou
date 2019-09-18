//点击删除时 删除当前父节点li
//获取所有a标签
var aList = document.querySelectorAll('.delete');
var listParent = document.querySelectorAll('.aside-slide-lists');
for (var i=0;i<aList.length;i++) {
	aList[i].onclick = function(){
		//找到当前a标签的父级li，
		var aList=document.querySelector('.aList');
		//删除当前的li标签
		aList.parentNode.removeChild(aList);
		
	}
}