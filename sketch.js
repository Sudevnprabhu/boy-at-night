const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const World = Matter.World;
var engine, world, maxDrops, thunder, thunder1, thunder2, thunder3, thunder4, thunderGrp, walking;

var umbrellaMan, drops = [];

function preload(){
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");
    
}

function setup(){
   createCanvas(500, 650);
   engine = Engine.create();
   world = engine.world;
   thunderGrp = new Group();
   umbrellaMan = new Umbrella(250, 525);
  
   maxDrops = 200;
   for(var i = 0; i < maxDrops; i++) {
    drops.push(new Rain(random(100, 400), random(0, 500)));
}
}

function draw(){
    background(0);
    Engine.update(engine);
   
    spawnThunder();
    
    for(var j = 0; j < drops.length; j++){
        drops[j].display();
        drops[j].update();
    }

    umbrellaMan.display();
    drawSprites();
}   
function spawnThunder() {
    if(frameCount % 60 === 0){
        thunder = createSprite(250, 0);
    var  rand = Math.round(random(1, 4));
    switch (rand) {
        case 1:
            thunder.addImage(thunder1);
            break;
    
        case 2:
            thunder.addImage(thunder2)
            break;
 
        case 3:
            thunder.addImage(thunder3);
            break;
            
        case 4:
            thunder.addImage(thunder4);
            break;
 
        default:
            break;
    }
    thunder.scale = 0.5;
    thunderGrp.add(thunder);
    thunderGrp.setLifetimeEach(12);
    }
    
}





/*const Engine = Matter.Engine;
const World= Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var engine, world;
var boy;
var maxDrops;
var thunder,thunder1,thunder2,thunder3,thunder4;
var thundergroup;
var drops=[];
var rains;

function preload(){
  thunder1 = loadImage("images/thunderbolt/1.png");
  thunder2 = loadImage("images/thunderbolt/2.png");
  thunder3 = loadImage("images/thunderbolt/3.png");
  thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
    var canvas = createCanvas(500,650);
    engine = Engine.create();
    world = engine.world;
    
    thundergroup = new Group();
    boy=new Umbrella(250,525);
    
   lightinggroup=new Group();
 
  maxDrops=200;
  for(var i = 0; i<maxDrops; i++) {
    drops.push(new Rain(random(100, 400), random(0, 500)));
  }
}

function draw(){
    background("black");
    Engine.update(engine);

    spawnThunder();

    /*if(frameCount%1===0){
        drops.push(new Drops(random(0,400), 0,5))
    }*/
 
   /*  for(var j=0; j<drops.length;j++){
         drops[j].display();
         drops[j].update();
     }
 

    boy.display();
    drawSprite();
}   


function spawnThunder(){
    if(frameCount % 60 === 0){
          thunder = createSprite(250,0);

        var rand=Math.round(random(1,4));
          switch(rand) {
              case 1: 
              thunder.addImage(thunder1);
              break;

              case 2: 
              thunder.addImage(thunder2);
              break;

              case 3: 
              thunder.addImage(thunder3);
              break;

              case 4: 
              thunder.addImage(thunder4);
              break;

              default: break;
          }

          thunder.scale=0.5;
          thundergroup.add(thunder);
          thundergroup.setLifetimeEach(12);
    }
}*/
