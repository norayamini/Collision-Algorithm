var fixedRect, movingRect;

function setup() {
  createCanvas(800,600);
  fixedRect = createSprite(400, 300, 50, 80);
  fixedRect.shapeColor = 'green';
  fixedRect.debug = true;

  movingRect = createSprite (200,200,80,50);
  movingRect.shapeColor = 'green';
  movingRect.debug = true;
}

function draw() {
  background("black");  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  console.log(movingRect.x - fixedRect.x);
  
  //if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && 
   //   fixedRect.x-movingRect.x < fixedRect.width/2 + movingRect.width/2){
  if (abs(movingRect.x - fixedRect.x) <= fixedRect.width/2 + movingRect.width/2
      &&  abs(movingRect.y - fixedRect.y) <= fixedRect.height/2 + movingRect.height/2) {
    fixedRect.shapeColor = 'red';
    movingRect.shapeColor = 'red';
  }
  else{
    fixedRect.shapeColor = 'green';
    movingRect.shapeColor = 'green';
  } 
  
  drawSprites();
}