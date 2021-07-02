const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,platform;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
 

    ground = new Ground(200,390,400,20);
    platform = new Ground(120,320,170,120);
    //create ball objects
   
  
}

function draw(){
    background(0);
    Engine.update(engine);
    // to display the object
  
    ground.display();
    platform.display();
}
