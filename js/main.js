/**
 * Created by hxl on 2015/12/29.
 */
var can;
var ctx;
var canvas;
var ctx;
var w,h;
var stars=[];//存放星星
var num=60;//星星数量
var pic=new Image();
var starPic=new Image();
var lastTime,deltaTime;
var switchy = false;//开关作用
var life = 0;//来管透明度的

function init(){
    canvas=document.querySelector("#canvas");
    ctx=canvas.getContext('2d');
    w=canvas.width;
    h=canvas.height;
    pic.src="img/girl.jpg";
    starPic.src="img/star.png";
    //初始化所有的星星
    for(var i=0;i<num;i++){
        var obj=new starObj();
        stars.push(obj);
        stars[i].init();
    }
    lastTime=Date.now();//获取当前时间
    gameloop();
    //添加鼠标经过事件
    document.addEventListener('mousemove',mousemove,false);
}
function gameloop(){
    //循环调用，绘制背景,此方法类似定时器，但它会根据电脑性能自动的分配调用时间间隔
    //此方法有些兼容问题，已在另一文件中处理
    window.requestAnimationFrame(gameloop);
    var now=Date.now();
    deltaTime=now-lastTime;
    lastTime=now;
    drawBackground();
    drawGirl();
    drawStars();
    aliveUpdate();
}
function drawBackground(){
    ctx.fillStyle="#393550";
    ctx.fillRect(0,0,w,h);
    //ctx.fill();
}
function drawGirl(){
    //绘制图片
    ctx.drawImage(pic,100,150,600,300);
}
function mousemove(e){
    if(e.offsetX || e.layerX){//监测鼠标是否移动
        var px= e.offsetX==undefined ? e.layerX : e.offsetX;
        var py= e.offsetY==undefined ? e.layerY : e.offsetY;
        //如果鼠标在图片内，则……否则……
        if(px>100 && px<700 && py>150 && py<450){
            switchy =true;
        }else{
            switchy=false;
        }
    }
}