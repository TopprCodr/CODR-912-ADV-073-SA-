const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Composite = Matter.Composite;

var engine, world;
var ground,platform,box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
 

    ground = new Ground(200,390,400,20);
    platform = new Ground(120,320,170,120);
    box1 = new Box(200,20,50,50);
   
    // add ball objects
  
}

function draw(){
    background(0);
    Engine.update(engine);
    // to display the object
    box1.display();
    ground.display();
    platform.display();
}
