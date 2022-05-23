var trex, trex_running, trex_collided;

var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;

var newImage;

function preload(){
  // trex animation
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  //ground image
  groundImage = loadImage("ground2.png");
  
  //cloud image
  cloudImage = loadImage("cloud.png");

  //obstacles
  obstacle1 = loadImage("obstacle1.png")
  obstacle2 = loadImage("obstacle2.png")
  obstacle3 = loadImage("obstacle3.png")
  obstacle4 = loadImage("obstacle4.png")
  obstacle5 = loadImage("obstacle5.png")
  obstacle6 = loadImage("obstacle6.png")
}

function setup() {

  //create canvas
  createCanvas(600, 200);
  
  //trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  // ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //invisible ground sprite
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  //console log
  console.log("Hello"+ 5)
}

function draw() {
  //background
  background(180);
  
  //trex valocity
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  trex.velocityY = trex.velocityY + 0.8
  
  //infinite ground
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //make trex collide with invisible ground
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();

  //spawn obstacles
  spawnObstacles()
  
  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    //assigning lifetime to the variable
    cloud.lifetime = 134
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
  }
function spawnObstacles(){
if(frameCount % 50 === 0)
{
//spawn obstacles
obstacle = createSprite(600,165,10,40)
obstacle.velocityX =-4
obstacle.scale=0.5;
var rand=Math.round(random(1,6))
switch(rand)
{
   case 1:obstacle.addImage(obstacle1)
  break;
  case 2:obstacle.addImage(obstacle2)
  break;
  case 3:obstacle.addImage(obstacle3)
  break;
  case 4:obstacle.addImage(obstacle4)
  break;
  case 5:obstacle.addImage(obstacle5)
  break;
  case 6:obstacle.addImage(obstacle6)
  break;
default:break;
}
//give lifetime to obstacles
obstacle.lifetime=150
}
}

