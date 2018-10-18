var button;

function setup() {
createCanvas(windowWidth,4000);
    button = createButton(' <-- Back to Home');
  button.position(19, 19);
  button.mousePressed(backToHome);
}

function draw() {
      button.position(650, 300);
  background(58);
  noStroke();
  rectMode(CORNER);
  rect(0,0,width,100);
  textSize(25);
  text("We The few", (width/2) - (textWidth("We The Few") / 2), 40);
   textSize(15);
  text("Image", (width/2) - 30, 60);
  rectMode(CENTER);
  stroke(0);
  strokeWeight(5);
   rect((width / 2) + (width/4), 650, 300, 1000, 20);
  rect(width/4, 400, width/2, 500, 20);
    rect(width/4, 1000, width/2, 500, 20);
}

function windowResized() {
  resizeCanvas(windowWidth, 4000);
}

function backToHome() {
    document.location = 'home.html'
}
