

function preload (){
 
boyImg = loadImage("boy.png")
  bg = loadImage ("snow2.jpg")
}


function setup() {
  createCanvas(800,400);
  boy = createSprite(400, 200, 50, 50);
 boy.addImage (boyImg)
 boy.scale= 0.3

}

function draw() {
  background(bg); 
  if (keyDown ("left")) {
    boy.x-=5
  }

  if (keyDown ("right")) {
    boy.x+=5
  }

  drawSprites();
}