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
    this.xSpd=Math.random()*3-1.5;//����ˮƽ��������[-1.5,1.5)
    this.ySpd=Math.random()*3-1.5;
}
starObj.prototype.update=function(){
    this.x+=this.xSpd*deltaTime*0.004;//���º��ˮƽ���꣬���ʼ����һ���������Ͳ������ƶ�
    this.y+=this.ySpd*deltaTime*0.004;
    //����ͼƬ�����������³�ʼ��
    if(this.x<100 || this.x>700){
        this.init();
        return;
    }
    if(this.y<150 || this.y>450){
        this.init();
        return;
    }
    this.timer +=deltaTime;//deltaTimeʱ����
    if(this.timer>50){//50s���ٻ�����һ������
        this.picNo +=1;
        this.picNo %=7;//��7����
        this.timer=0;
    }
}
starObj.prototype.draw=function(){//����ԭ���о��л���
    ctx.save();
    ctx.globalAlpha=life;//����ȫ��͸���ȣ���Ϊ����������save()restore()֮�䣬���Զ���֮�ⲻ������
    ctx.drawImage(starPic,this.picNo*7,0,7,7,this.x,this.y,7,7);//����ͼƬ��һ������Ϊ7*7
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