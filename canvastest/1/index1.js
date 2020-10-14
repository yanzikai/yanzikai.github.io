// 获取标签
var input  = document.getElementById('myInput');
var btn = document.getElementById('btn');
var canvas = document.getElementById('myCanvas');
// 获取canvas
var ctx = canvas.getContext('2d');
var dotList = [];
// console.log(ctx);
// 获取宽高,设置宽高
var winWidth = window.innerWidth;
var winHeight = 300;
var speed = 10;
canvas.height = winHeight;
canvas.width = winWidth;
// 按钮点击事件
btn.onclick = function(){
	// 执行初始化
	init()
}
// 初始化
function init(){
	var value = input.value?input.value:'子凯';
	console.log(input.value)
	ctx.textBaseline = 'top';
	var fontSize = 200;
	var fontFamily = 'Arial, sans-serif';
	ctx.font = fontSize +'px '+fontFamily;
	
	ctx.fillStyle = '#fff';
	ctx.fillRect(0,0,winWidth,winHeight);
	// 绘制文字
	ctx.fillStyle = 'red';
	ctx.fillText(value,0,0)
	
	// 获取画布置顶区域像素
	var imgData = ctx.getImageData(0,0,winWidth,winHeight);
	console.log(imgData)
	
	// 清空画布
	ctx.clearRect(0,0,winWidth,winHeight);
	
	dotList = [];
	var gap = 5;
	for(var x = 0; x < imgData.width; x += gap){
		for (var y = 0; y < imgData.height; y += gap) {
			var i = (y * imgData.width + x)*4
			// 判断是不是红色
			if(imgData.data[i] == 255 && imgData.data[i+1] == 0 && imgData.data[i+2] == 0 && imgData.data[i+3] == 255){
				// 创建小圆点
				var dot = new Dot(x,y);
				dotList.push(dot);
			}
		}
	}
	
	window.requestAnimationFrame(draw)
}
function draw(){
	// 判断动画是否完成
	var flag = true;
	
	var gradient = ctx.createLinearGradient(0,winWidth/2,winWidth,winHeight/2)
	gradient.addColorStop(0,'#0bc587');
	gradient.addColorStop(0.5,'#4ffec4');
	gradient.addColorStop(1,'#00fe9d');
	ctx.fillStyle = gradient;
	ctx.fillRect(0,0,winWidth,winHeight);
	
	ctx.fillStyle = '#fff';
	for (var i = 0; i < dotList.length; i++) {
		// 判断小圆点 nowX 小于x 属性,说明动画未完成
		if(dotList[i]['x'] > dotList[i]['nowX']){
			dotList[i]['nowX'] += speed;
			flag = false;
		}else{
			dotList[i]['nowX'] = Math.floor(dotList[i]['x']);
		}
		// 开始绘制路径
		ctx.beginPath()
		ctx.arc(dotList[i]['nowX'],dotList[i]['y'], 2, 0, 2*Math.PI)
		ctx.fill()
	}
	if(flag){
		return
	}
	window.requestAnimationFrame(draw)
}
function Dot(x,y){
	this.x = x;
	this.y = y;
	this.nowX = 0;
}

