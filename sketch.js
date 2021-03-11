var path, pathImage;
var jakeImage, jake;
var wallright;
var wallleft;

function preload(){
  //pre-load images
  pathImage = loadImage("path.png")
  
  jakeImage = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");

}


function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage("pathImage", pathImage);
  path.velocityY = 10
  
  jake = createSprite(180,340,30,30);
jake.addAnimation("JakeRunning",jakeImage);

  wallright = createSprite(66,200,10,400)
  wallright.shapeColor = ("white")
  
  wallleft = createSprite(340,200,10,400)
  wallleft.shapeColor = ("white")
}


function draw() {
  background(0);
if (path.y > 300 ){
  path.y = 200;
  
}
  
jake.x = mouseX;
  
  jake.collide(wallright)
  jake.collide(wallleft)
  
  
  
  drawSprites();
}
