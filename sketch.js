var sprite;
function setup() {
  createCanvas(400,400);
  sprite =  createSprite(200,200,30,30);
}

function draw() 
{
  background(30);
  if(keyIsDown(RIGHT_ARROW)){
  sprite.position.x= sprite.position.x +5; 
  }
  if(keyIsDown(LEFT_ARROW)){
    sprite.position.x= sprite.position.x -5; 
    }
drawSprites();
}




