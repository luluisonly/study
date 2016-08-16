
/**
 * Created by 璐 on 2016/8/16.
 */

var can1;
var can2;

var ctx1;
var ctx2;

var lastTime;
var deltaTime;

var canWidth;
var canHeifht;

var bgPic = new Image();

var ane ;
var fruit;

document.body.onload=game;
function game(){
    init();
    lastTime = Date.now();
    deltaTime = 0;
    gameloop()
}
function init(){
    can1 = document.getElementById('canvas1');// fishes,dust,UI,circle
    ctx1 = can1.getContext('2d');
    can2 = document.getElementById('canvas2');//background  ane  fruits
    ctx2 = can2.getContext('2d');

    bgPic.src = './images/background.jpg';

    canWidth = can1.width;
    canHeight= can1.height;

    ane = new aneObj();
    ane.init();
    fruit = new fruitObj()
}

function gameloop() {
    requestAnimationFrame(gameloop); //相对 setInterval,setTimeout 更科学，但是fps（frame pre second）
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;

    drawBackground();
    ane.draw();
    fruit.draw();
}