var runner, runner_running;
var path;
var pathImage;
var invisibleRail;
var invisibleRail2;

function preload(){
  //pre-load images
  runner_running = loadAnimation("Runner-1.png", "Runner-2.png");
  pathImage = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImage);
  path.velocityY = 4;
  path.scale = 1.2;

  runner = createSprite(70, 340);
  runner.addAnimation("running", runner_running);
  runner.scale = 0.08;

  invisibleRail = createSprite(30,200,10,400);
  invisibleRail.visible = false;

  invisibleRail2 = createSprite(365,200,10,400);
  invisibleRail2.visible = false;

}

function draw() {
  background("black");

  if (path.y > 400){
    path.y = height/2;
  }

  if (keyIsDown(RIGHT_ARROW))
  {
  runner.position.x = runner.position.x +3;
  runner.velocityX = 10;
  }

  if (keyIsDown(LEFT_ARROW))
  {
    runner.position.x = runner.position.x -3;
    runner.velocityX = -10;
  }


  runner.collide(invisibleRail);
  runner.collide(invisibleRail2);

  drawSprites();
}
