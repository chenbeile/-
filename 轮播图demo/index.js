//原生js

// var flash =document.getElementById("flash");
// var is = flash.getElementsByTagName('img');
// var ls=flash.getElementsByTagName('li');
// var c =0;
// setInterval(function(){
// 	c++;
// 	c = c==5?0:c; //三元表达式
	
// 	//让所有图片隐藏
// 	for (var i=0;i<is.length;i++){
// 		is[i].style.display = 'none';
// 		ls[i].style.background='#DDDDDD'
// 	}
// 	//让c号图片显示
// 	is[c].style.display = 'block';
// 	//让c号li变红
// 	ls[c].style.background='red';
// },2000)



//jQuery

var c =0;
 var timer = setInterval(run,1000)
	 function run (){
	c++;
	c = c==5?0:c;
	//让c号图片显示，兄弟图片隐藏
	$("#flash img").eq(c).fadeIn(500).siblings('img').fadeOut(500);
	//让c号li变红，其他li变灰
	$("#flash ul li").eq(c).css('background','#a10000').siblings('li').css('background','#ddd');
}
$('#flash').hover(function(){
	//清理定时器
clearInterval(timer);

},function(){
	timer = setInterval(run,1000)
})

//鼠标移入小圆点的效果
$("#flash ul li").mouseenter(function(){
	 //获得当前移入的li的序号
  c=$(this).index();
  //让c号图片显示，兄弟图片隐藏
	$("#flash img").eq(c).fadeIn(500).siblings('img').fadeOut(500);
	//让c号li变红，其他li变灰
	$("#flash ul li").eq(c).css('background','#a10000').siblings('li').css('background','#ddd');
})