/**
 * Created by hxl on 2015/12/29.
 */
var starObj=function(){
    this.x;
    this.y;
    this.picNo=0;
    this.timer=0;
    this.xSpd;
    this.ySpd;
}
starObj.prototype.init=function(){
    this.x=Math.random()*600+100;
    this.y=Math.random()*300+150;
    this.picNo=0;
    this.xSpd=Math.random()*3-1.5;//定义水平方向坐标[-1.5,1.5)
    this.ySpd=Math.random()*3-1.5;
}
starObj.prototype.update=function(){
    this.x+=this.xSpd*deltaTime*0.004;//更新后的水平坐标，与初始化不一样，这样就产生了移动
    this.y+=this.ySpd*deltaTime*0.004;
    //超出图片的星星则重新初始化
    if(this.x<100 || this.x>700){
        this.init();
        return;
    }
    if(this.y<150 || this.y>450){
        this.init();
        return;
    }
    this.timer +=deltaTime;//deltaTime时间间隔
    if(this.timer>50){//50s后再绘制下一个星星
        this.picNo +=1;
        this.picNo %=7;//有7个贞
        this.timer=0;
    }
}
starObj.prototype.draw=function(){//星星原型中具有绘制
    ctx.save();
    ctx.globalAlpha=life;//设置全局透明度，因为它被包裹在save()restore()之间，所以对其之外不起作用
    ctx.drawImage(starPic,this.picNo*7,0,7,7,this.x,this.y,7,7);//星星图片上一个星星为7*7
    ctx.restore();
}
function drawStars(){
    for(var i=0;i<num;i++){
        stars[i].update();
        stars[i].draw();
    }
}
function aliveUpdate(){
    if(switchy){
        life+=0.03*deltaTime*0.05;
        if(life>1){
            life=1;
        }
    }else{
        life-=0.03*deltaTime*0.05;
        if(life<0){
            life=0;
        }
    }
}