
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(400,50,500,20);

	bob = new Bob(260,460,30);
	bob1 = new Bob(320,460,30);
	bob2 = new Bob(380,460,30);
	bob3 = new Bob(440,460,30);
	bob4 = new Bob(500,460,30);

	chain1 = new Chain(bob.body,roof.body,-40*2, 0);
	chain2 = new Chain(bob1.body,roof.body,-20*2, 0);
	chain3 = new Chain(bob2.body,roof.body, 0*2, 0);
	chain4 = new Chain(bob3.body,roof.body, 20*2, 0);
	chain5 = new Chain(bob4.body,roof.body, 40*2, 0);

}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  roof.display();

  bob.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  drawSprites();
  text("X"+mouseX+","+"Y"+mouseY,mouseX,mouseY);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(bob.body,bob.body.position,{x:-50,y:-45});

  }
}



