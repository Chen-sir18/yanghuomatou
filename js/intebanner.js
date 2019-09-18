//轮播图部分  juqery

 //定义位置：由于图片个数与下侧顺序按钮数量一致，可通过位置进行关联
var index=0;

$(".banner-dot li").mousemove(function () {  //当鼠标放到顺序按钮上时
        $(this).addClass("on").siblings().removeClass("on"); //添加和移除兄弟的on类名
        index=$(this).index();  //获取当前顺序按钮的index
        //通过index获取该位置图片  eq(index)
		//一秒钟渐入该图片  fadeIn(1000)
		//一秒钟渐出其他相邻图片   fadeOut(1000)
		//防止移动过快导致的效果闪现，使用stop停止运动   stop()
        $(".banner-slide img").eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
});

var time=setInterval(move,2000);  //设置定时器自动轮播
function move() {
    index++;
    if (index==3){   //获取当前位置序号：自加操作；当超过图片最大序号时序号设置为0
        index=0
    }
    //设置下侧顺序按钮及轮播图显示   stop()停止动画
    $(".banner-dot li").eq(index).addClass("on").siblings().removeClass("on");
    $(".banner-slide img").eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
};

//当鼠标划入、划出轮播图区域时
$(".outer").hover(function () {  //划入时停止自动轮播
    clearInterval(time);
},
function () {  //划出时继续自动轮播
    time=setInterval(move,1000);
});







//按钮点击部分  jquery
//获取签到按钮的类名
var qBtn = $('.qiandao')
var exBtn = $('.exchangeBtn')
var liBtn = $('.limited-list-btn')
//添加点击事件
//签到点击
 qBtn.click(function(){
 	//点击时添加新的类名给签到按钮
 	$(this).addClass("btactiv");
 })
 //限时兑换50积分处点击
 exBtn.click(function(){
	//点击时添加新的类名给签到按钮
 	$(this).addClass("bclick");	
})
 //优惠卷1000积分点击
liBtn.click(function(){
	if (false) {  //判断是否点击   点击过为true  没点为false
		//就是当前为false   不改变	
	}else{
		//点击时添加新的类名给签到按钮
 		$(this).addClass("bclick");
 		//点击后改变文字
		$(this).html("已兑完")
		return true;
	}
})
