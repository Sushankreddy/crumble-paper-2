
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;
var bin1,bin1,bin3;
var ball1;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(400,675,800,5);
	bin1 = new Bin(550,450,10,100);
	bin2 = new Bin(700,665,100,10);
	bin3 = new Bin(650,450,10,100);
	ball = new Ball(200,350,20);

	//Create the Bodies Here.

	World.add(world,engien);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
	 Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:85})
	 }
	 
   }


