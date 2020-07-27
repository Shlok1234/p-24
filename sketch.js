var box1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 200);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1 = Bodies.rectangle(600,160,200,20, {isStatic:true});
	World.add(world,box1);
	paper = new Paper(200,160,20,20);
	ground = new Ground(500,180,1000,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  keyPressed();

  paper.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}



