var movingRect, stillRect;
var distance1, distance2;

function setup() {
  createCanvas(800,400);
  stillRect = createSprite(400, 200, 50, 30);
  movingRect = createSprite(200, 300, 80, 50);
  
}
  

function draw() {
  background(255,255,255);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  distance1 = movingRect.x - stillRect.x;
  distance2 = movingRect.y - stillRect.y;

  console.log(distance1);

  if(distance1 < movingRect.width/2 + stillRect.width/2 &&
     distance1 > -(movingRect.width/2 + stillRect.width/2) &&
     distance2 < movingRect.height/2 + stillRect.height/2 &&
     distance2 > -(movingRect.height/2 + stillRect.height/2))
  {

    movingRect.shapeColor = "yellow";
    stillRect.shapeColor = "yellow";
  }
  else{
    movingRect.shapeColor = "grey";
    stillRect.shapeColor = "grey";
  }

  drawSprites();
}