const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball1,ball2,platform;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    var static_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,400,20,static_options);
    World.add(world,ground);
    platform = Bodies.rectangle(120,320,170,120,static_options);
    World.add(world,platform);
    //create ball objects
    ball1= new Ball(200,100,20)
    ball2 = new Ball(270,50,10)
    ball3= new Ball(120,100,20)
    ball4 = new Ball(100,50,10)
  
}

function draw(){
    background(0);
    Engine.update(engine);
    // to display the objects
    rectMode(CENTER)
    fill("brown");
    rect(ground.position.x,ground.position.y,400,20);
    fill("red");
    rect(platform.position.x,platform.position.y,170,120);
  
   ball1.display();
   ball2.display()
   ball3.display();
   ball4.display();
   
}