
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var block1;

var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    block1= new Block(200, 200, 50, 50);
	block2= new Block(250, 200, 50, 50);
	block3= new Block(300, 200, 50, 50);
	block4= new Block(350, 200, 50, 50);
	block5= new Block(400, 200, 50, 50);
	block6= new Block(450, 200, 50, 50);
	block7= new Block(310, 150, 50, 50);
	block8= new Block(360, 150, 50, 50);
	block9= new Block(440, 150, 50, 50);
	block10= new Block(450, 100, 50, 50);
    ground= new Ground(0,700, 1800, 100);
	Engine.run(engine);
     
}


function draw() {
  rectMode(CENTER);
  background(0);

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  ground.display();
  drawSprites();
 
}



