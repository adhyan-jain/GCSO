var car, wall;
var speed, weight;
var deformation;

var PLAY;
var END;
var gamestate;

function setup() {
  createCanvas(1600,400);
  
  car = createSprite(50, 200, 50, 50);
  car.shapeColor = color(255,255,255);

  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = color(80,80,80);
  
  speed = Math.round(random(55,90));
  weight = Math.round(random(400,1500));
  deformation = 0.5* weight* speed* speed/22500;

  PLAY = 1;
  END = 0;
  gamestate = PLAY;
}

function draw() {

  background(0,0,0);

  if(gamestate === PLAY){
    car.velocityX = speed;
  }


  if(wall.x - car.x <= wall.width/2 + car.width/2){
   
    gamestate = END;
  }
  
  if(gamestate === END){
    
    car.velocityX = 0;
    car.x = 1445;

    textSize(20);
    fill(color(255,255,255));
    text("speed : "+speed,1400,30);
    text("weight : "+weight,1400,60);

   if(deformation < 100){
     car.shapeColor = color(0,255,0);
     fill(color(0,255,0));
     textSize(35);
     text("GOOD",700,170);
     fill(color(255,255,255));
     textSize(25);
     text("Press Space To Restart",630,220);
    }

   if(deformation < 180 && deformation > 100){
     car.shapeColor = color(230,230,0);
     fill(color(230,230,0));
     textSize(35);
     text("AVERAGE",700,170);
     fill(color(255,255,255));
     textSize(25);
     text("Press Space To Restart",650,220);
    }

   if(deformation > 180){
     car.shapeColor = color(255,0,0);
     fill(color(255,0,0));
     textSize(35);
     text("LETHAL",700,170);
     fill(color(255,255,255));
     textSize(25);
     text("Press Space To Restart",650,220);
    }  

   if(keyDown("space")){
      restart();   
    }
  }

  drawSprites();
}

 function restart(){

   gamestate = PLAY;
   car.shapeColor = color(255,255,255);
   car.x = 50;
   speed = Math.round(random(55,90));
   weight = Math.round(random(400,1500));
   deformation = 0.5* weight* speed* speed/22500;

 }