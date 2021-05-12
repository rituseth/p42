
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var drop =[]
var maxDrops = 100
var engine, world;
var m

function preload(){
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    m = new Man(150,200)

   for (var i=0; i<maxDrops; i++){
     drop.push(new Drops(random(0,500) , random(0,500)))
   }
  
   
   
}

function draw(){
    Engine.update(engine);
background(0);


m.display()
    for (var i=0; i<maxDrops; i++){
      drop[i].display();
      drop[i].update();
    }

   

}

