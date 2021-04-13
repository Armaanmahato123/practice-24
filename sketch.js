var ground, ball;
var ballSprite, ballBody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);

	ballSprite=createSprite(width/2, 80, 10,10);
	ballSprite.scale=0.2

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor = "yellow"

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ballBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, ballBody);

	//Create a Ground

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	boxLeft = createSprite(700,600,20,120);
	boxLeft.shapeColor = "white"
	boxLeft = Bodies.rectangle(700,600,20,120,{isStatic:true});
	World.add(world,boxLeft);
	
	boxRight = createSprite(900,600,20,120);
	boxRight.shapeColor = "white"
	boxRight = Bodies.rectangle(900,600,20,120,{isStatic:true});
	World.add(world,boxRight);

	boxBase = createSprite(800,650,200,20);
	boxBase.shapeColor = "white"
	boxBase = Bodies.rectangle(800,650,200,20,{isStatic:true});
	World.add(world,boxBase);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



