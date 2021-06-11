var movingRect, fixedRect;

function setup() {
  createCanvas(1200,800);

  movingRect = createSprite (400,400,70,70);
  movingRect.debug = true
  movingRect.shapeColor = "blue";

  fixedRect = createSprite (200,150,120,120);
  fixedRect.debug = true
  fixedRect.shapeColor = "blue";
}

function draw() {
  background(255,255,255);  
  drawSprites();

  movingRect.x = mouseX
  movingRect.y = mouseY

if (fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2){
 movingRect.shapeColor = "red";
 fixedRect.visible = false
}
else {
  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "blue"
}
}