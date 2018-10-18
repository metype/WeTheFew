function setup() {
createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(58);
  rect(0,0,width,100);
  textSize(25);
  text("We The few", (width/2) - 30, 60);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
