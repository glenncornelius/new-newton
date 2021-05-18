var roof1, bob1,bob2,bob3,bob4,bob5;
var c1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof1=new roof(330,200,400,20)

	  bob1=new bobj(400,358,24);
    bob2=new bobj(200,358,24);
    bob3=new bobj(250,358,24);
    bob4=new bobj(300,358,24);
    bob5=new bobj(350,358,24);
    bob6=new bobf(450,358,24);
    
    c1 = new cable(bob1.body,{x:400,y:200})
    c2 = new cable(bob2.body,{x:200,y:200})
    c3 = new cable(bob3.body,{x:250,y:200})
    c4 = new cable(bob4.body,{x:300,y:200})
    c5 = new cable(bob5.body,{x:350,y:200})
    c6 = new cable(bob6.body,{x:450,y:200})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
  c1.display();
  c2.display();
  c3.display();
  c4.display();
  c5.display();
  c6.display();
  drawSprites();
 console.log(mouseX+ " "+mouseY);
}



