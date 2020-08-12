
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paper,dustbin1, dustbin2, dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600, 480, 1200, 20);
	paper = new Paper(200,200);
	dustbin1 = new Dustbin(790,400, 20, 150);
	dustbin2 = new Dustbin(610,400, 20, 150);
	dustbin3 = new Dustbin(700,450, 160, 20);
	
	
	

	//Create the Bodies Here.

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  
  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
 
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW){
	   Matter.Body.applyForce(paper.body, paper.body.position,{x:400, y:-400});	
	}
}



