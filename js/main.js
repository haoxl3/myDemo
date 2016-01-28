/**
 * Created by hxl on 2015/12/29.
 */
var can;
var ctx;
var canvas;
var ctx;
var w,h;
var stars=[];//�������
var num=60;//��������
var pic=new Image();
var starPic=new Image();
var lastTime,deltaTime;
var switchy = false;//��������
var life = 0;//����͸���ȵ�

function init(){
    canvas=document.querySelector("#canvas");
    ctx=canvas.getContext('2d');
    w=canvas.width;
    h=canvas.height;
    pic.src="img/girl.jpg";
    starPic.src="img/star.png";
    //��ʼ�����е�����
    for(var i=0;i<num;i++){
        var obj=new starObj();
        stars.push(obj);
        stars[i].init();
    }
    lastTime=Date.now();//��ȡ��ǰʱ��
    gameloop();
    //�����꾭���¼�
    document.addEventListener('mousemove',mousemove,false);
}
function gameloop(){
    //ѭ�����ã����Ʊ���,�˷������ƶ�ʱ������������ݵ��������Զ��ķ������ʱ����
    //�˷�����Щ�������⣬������һ�ļ��д���
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
    //����ͼƬ
    ctx.drawImage(pic,100,150,600,300);
}
function mousemove(e){
    if(e.offsetX || e.layerX){//�������Ƿ��ƶ�
        var px= e.offsetX==undefined ? e.layerX : e.offsetX;
        var py= e.offsetY==undefined ? e.layerY : e.offsetY;
        //��������ͼƬ�ڣ��򡭡����򡭡�
        if(px>100 && px<700 && py>150 && py<450){
            switchy =true;
        }else{
            switchy=false;
        }
    }
}