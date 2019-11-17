var moving,fixed;


function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
   moving = createSprite(100,200,100,100);
}

function draw() {
  background(100,0,200);  
  moving.x = mouseX;
  moving.y = mouseY;
  if(moving.x - fixed.x  < moving.width/2 + fixed.width/2
    && fixed.x - moving.x < moving.width/2 + fixed.width/2
    && moving.y - fixed.y < moving.height/2 + fixed.height/2
    && fixed.y - moving.y < moving.height/2 + fixed.height/2) {
      moving.shapeColor = "red";
      fixed.shapeColor = "green";
  }
else {
  moving.shapeColor = "blue";
  fixed.shapeColor = "blue";
}
 

  
  drawSprites();
}