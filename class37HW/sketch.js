var monkey,monkey_running,invisibleground;
var bananagroup, rockgroup, bananaImg, rockImg;
var gameState;
var score;
var END=1;
var PLAY=0;
var background,backgroundimg;

function preload(){
  backgroundimg=loadImage('jungle2.jpg');
 
  monkey_running=loadAnimation('Monkey_01.png','Monkey_02.png','Monkey_03.png','Monkey_04.png','Monkey_05.png','Monkey_06.png','Monkey_07.png','Monkey_08.png','Monkey_09.png','Monkey_10.png');
  
  bananaImg=loadImage('Banana.png');
  rockImg=loadImage('stone.png');
    } 


function setup() {
  createCanvas(600,300);
  
  background1=createSprite(300,150,1000,600);
  background1.addImage('background',backgroundimg);
  background1.velocityX= -6 ;
  background1.x=background1.width/2
 
  
  
  
  monkey=createSprite(50,250,20,20);
  monkey.addAnimation('running',monkey_running)
  monkey.scale= 0.1;
  
  invisibleground=createSprite(0,270,1000,10)
  invisibleground.visible=false 
  
  bananagroup=new Group();
  rockgroup=new Group();
  
  edges=createEdgeSprites();
  score=0
}


function draw(){
 
  background(255);
  
  if (keyDown("space")) {
      monkey.velocityY = -12.5;
    }
    
    monkey.velocityY = monkey.velocityY+0.5;
  
if(background1.x<0){
  background1.x=background1.width/2
}
  
  monkey.collide(invisibleground);
  monkey.bounceOff(edges);
  
  if(bananagroup.isTouching(monkey)){
     score=score+2
    monkey.scale=monkey.scale+0.001
    
     }
  if(rockgroup.isTouching(monkey)){
     score=0
     monkey.scale=0.1
     }
  
  obstacle1();
  food();

  camera.position.x=mouseX;
  camera.position.y=mouseY;
   
  
  drawSprites();
  fill(0);
  text(score,500,50);
}


    
    function food(){
      if (frameCount%80===0) { 
  var banana = createSprite(400, random(120,200));      banana.addImage(bananaImg);
  banana.scale = 0.05; 
  banana.velocityX = -4; 
  banana.lifetime = 150; 
  bananagroup.add(banana);
     
  }
  
}
function obstacle1(){

  if (frameCount%120===0) 
{ 
  var rock = createSprite(600,320); 
  rock.scale = 0.5; 
  rock.addImage(rockImg); 
  rock.velocityX = -4; 
  rockgroup.add(rock); 
  rock.lifetime = 150; 
}
}








  
