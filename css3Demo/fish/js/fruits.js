/**
 * Created by 璐 on 2016/8/16.
 */
var fruitObj = function(){
    this.alive = [];
    this.x = [];
    this.y = [];
    this.orange = new Image();
    this.blue = new Image();
};

fruitObj.prototype.num = 30;
fruitObj.prototype.init = function(){
    for(var i =0 ;i<this.num;i++){
        this.alive[i] = true;
        this.x[i] = 0;
        this.y[i] = 0;
    }
    this.orange.src ='./images/fruit.png';
    this.blue.src = './images/blue.png';
};

fruitObj.prototype.draw = function(){

    for(var i = 0;i<this.num;i++){
        ctx2.drawImage(this.orange,this.x[i],this.y[i]);
    }
};

fruitObj.prototype.born = function(){
    var aneID =Math.floor(Math.random()*ane.num) ;
    var x = ane(aneID);
    var y = canHeight - ane.len[aneID];
};
fruitObj.prototype.update = function(){
    var num = 0;
    for(var i = 0;i<this.num;i++){
        this.alive[i]
    }
}
