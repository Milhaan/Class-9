var box
function setup() {
  createCanvas(600,400);
  box = createSprite(300,200,30,30)
}

function draw() 
{
  background(30);
drawSprites()
if(keyDown(RIGHT_ARROW)) {
  box.position.x = box.position.x + 5
}

}




