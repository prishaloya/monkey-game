
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {

monkey = createSprite (80,315,20,20);
monkey.addAnimation("running", monkey_running);  
monkey.scale = 0.1; 
  
ground = createSprite (400,350,900,10);
ground.velocityX = -4;
ground.x = ground.width/2
console.log = ground.x
}


function draw() {

  background(255);
  if (ground.x > 0)
  {
    ground.x = ground.width/2
  }
  
  if (keyDown("space"))
    {
      monkey.velocityY = -12;
    }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  if (frameCount % 80 ===0)
    {
      spawnBananas();
    }
  
  if (frameCount % 300 === 0)
  {
 spawnObstacle();
  }
  
  var survivaltime = 0;
  stroke ("white");
  textSize(20);
  fill("white");
  text("score: " + score, 500, 50);
  
  stroke ("black");
  textSize(20);
  fill("black");
  survivaltime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivaltime, 100, 50);
  drawSprites();
}

function spawnObstacle()
{
   var obstacle = createSprite(400,327,10,40);
   obstacle.addImage("obs", obstaceImage)
   obstacle.scale = 0.1
   obstacle.velocityX = -6;
   obstacle.lifetime = 400;
}

function spawnBananas()
{
  var banana = createSprite(400,100,10,10);
  banana.addImage("food",bananaImage); 
  banana.scale = 0.1;
  banana.y = Math.round(random(120,200));
  banana.velocityX = -5

}


