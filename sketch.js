var balloon,balloonAnimation;
var ground,groundImage;

function preload(){
groundImage=loadAnimation("Image/Hot Air Ballon-01.png");
balloonAnimation=loadAnimation("Image/Hot Air Ballon-02.png","Image/Hot Air Ballon-03.png","Image/Hot Air Ballon-04.png");
}

function setup() {
  createCanvas(800,400);
    
  balloon=createSprite(400, 200, 50, 50);
  balloon.addAnimation("ballon",balloonAnimation);

  ground.addAnimation("ground",groundImage);
}

function draw() {
  
  
  drawSprites();
}