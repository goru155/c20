var movingrect,fixedrect;

function setup() {
  createCanvas(800,400);
  movingrect=createSprite(600, 200, 50, 80);
  fixedrect=createSprite(400, 200, 80, 50);

  movingrect.shapeColor="green";
  fixedrect.shapeColor="green";

}

function draw() {
  background("black");

  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;

  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2 
    && fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2 
    && movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2 
    && fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){
   movingrect.shapeColor="orange";
   fixedrect.shapeColor="orange";
  }else{
    movingrect.shapeColor="green";
    fixedrect.shapeColor="green";
  }

  drawSprites();
}