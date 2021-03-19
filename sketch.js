
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1 ,box2 ,box3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground =  new Ground (400,height,1000,30);
    ball = new Ball(100,100,50)
	//Create the Bodies Here.
 box1 = new Box (600,680,200,20);
 box2 =  new Box (510,620,20,100);
 box3 =  new Box (690,620,20,100);
	Engine.run(engine);
  
}


function draw() {
  
  rectMode(CENTER);
  background(0);

 




  ground.display();
  ball.display();
  box1.display();
  box2.display();
  box3.display();

  drawSprites();
 
}

function keyPressed (){

  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body, ball.body.position ,{x:.2,y:-.2})
  }

}



