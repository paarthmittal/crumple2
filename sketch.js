
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const page= this.body


function preload(){

	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.

paper2=new paper(100,600,25,25)
cage1=new cage(600,690,20,80)

ground1=new ground(400,697,900,6)
	
  
}


function draw() {
 
  background(0);
  rectMode(CENTER);
  Engine.update(engine);
  cage1.display()
  paper2.display()
  
  
  ground1.display()
  if(keyWentDown('down')){
	Matter.Body.applyForce(paper2.body,paper2.body.position,{x:28,y:-28})
  }

  drawSprites();
 
}



