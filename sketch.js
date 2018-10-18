function setup() {
createCanvas(windowWidth,windowHeight * 2);
}

function draw() {
  background(58);
  noStroke();
  rectMode(CORNER);
  rect(0,0,width,100);
  textSize(25);
  text("We The few", (width/2) - 40, 40);
   textSize(15);
  text("Home", (width/2) - 30, 60);
  rectMode(CENTER);
  stroke(0);
  rect(width/2, 400, width/2, 500, 20);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
