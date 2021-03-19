class Ball{

constructor(x,y,radius){
    var options ={
    }
    
    
    this.body = Matter.Bodies.circle(x, y, radius);
    this.radius =radius;
    this.image = loadImage("sprites/paper.png");
    World.add(world,this.body);
}


display(){
    var pos =this.body.position;
   

}
}