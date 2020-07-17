var car,wall;
var speed,weight;




function setup() {

  var speed=random(5,30);
var weight=random(400,1500);

car=createSprite(50, 200, 50, 50);
car.velocityX=speed;
car.weight=weight;

wall=createSprite(1500,200,60,height/2);
  createCanvas(1600,400);

  car.debug=true;
  wall.debug=true;
  
  

  
  
}

function draw() {
  background(80,80,80);  
  drawSprites();

  if(car.isTouching(wall)){
    car.bounceOff(wall);
     car.velocityX=0
   
  }
  if(0.5*car.weight*car.speed*car.speed/22500<100){
    car.color="green";
  }

  if(100<0.5*car.weight*car.speed*car.speed/22500<180){
    car.color="yellow";
  }
  
  if(0.5*weight*car.speed*car.speed/22500>180){
   car.color="red";
  }
}