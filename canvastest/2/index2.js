// 获取canvas
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
// 绘制棋盘 15*15
for (var i = 0; i <= 15; i++) {
	ctx.beginPath();
	ctx.moveTo(25 * i, 25);
	ctx.lineTo(25 * i, 375);
	ctx.stroke();
	ctx.beginPath();
	ctx.moveTo(25, 25 * i);
	ctx.lineTo(375, 25 * i);
	ctx.stroke();
}
// 初始化游戏
var fiveChess = [{
	'name': '黑色',
	'color': '#111'
}, {
	'name': '白色',
	'color': '#eee'
}];
// 0代表黑色, 1代表白色
var chess = 0;
// 下棋路径
var chess_rec = [];
// 画棋子
function setChess(x, y, c) {
	ctx.save();
	ctx.beginPath();
	ctx.fillStyle = c;
	ctx.arc(x, y, 10, 0, 2 * Math.PI)
	ctx.fill()
}
// canvas 点击事件
canvas.addEventListener('click', function(e) {
	// 获取点击事件坐标 screenX/Y clientX/Y pageX/Y layerX/Y offextX/Y
	let x = Math.round(e.offsetX / 25);
	let y = Math.round(e.offsetY / 25);
	if (x < 16 && x * y > 0 && y < 16 && !chess_rec.includes(x + '-' + y)) {
		setChess(x * 25, y * 25, fiveChess[chess].color)
		chess_rec.push(x + '-' + y)
		if(chess_rec.length>8){
			checkOver(x,y,chess)
		}
		chess ^= 1;
	}
})
// 判断游戏输赢
function getWins_9(x,y){
	var wins = [[],[],[],[]];
	for(let i=-4;i<=4;i++){
		// 横向九子
		let rg1 = (x+i)>0 && (x+i)<16;
		let rg2 = (y+i)>0 && (y+i)<16;
		let rg3 = (y-i)>0 && (y-i)<16;
		if(rg1){
			wins[0].push((x+i)+'-'+y)
		}
		// 横向九子
		if(rg2){
			wins[1].push(x+'-'+(y+i))
		}
		// 左上右下
		if(rg1 && rg2){
			wins[2].push((x+i)+'-'+(y+i))
		}
		// 左下右上
		if(rg1 && rg3){
			wins[3].push((x+i)+'-'+(y-i))
		}
	}
	console.log(wins)
	return wins.filter(arr=>arr.length>=5)
}
function getWins_5(x,y){
	var wins = [];
	getWins_9(x,y).forEach(arr=>{
		for(let i=0; i<arr.length-4; i++){
			wins.push(arr.slice(i,i+5))
		}
	})
	return wins;
}
function checkOver(x,y,chess){
	let chs = chess_rec.filter((n,i)=>i%2==chess)
	let win = getWins_5(x,y).some(arr=>arr.every(n=>chs.includes(n)))
	console.log(win)
	if(win){
		setTimeout(()=>{
			alert('恭喜'+(chess?'白子':'黑子')+'胜利')
		},300)
	}
}