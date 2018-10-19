var button;

function setup() {
createCanvas(windowWidth,1950);
    button = createButton(' <-- Back to Home');
  button.position(19, 19);
  button.mousePressed(backToHome);
}

function draw() {
    button.position(19, 19);
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
  rect(width/2-10, 1050, width-30, 1750, 20);
    image("WTFLogo.png",10,10);
}

function windowResized() {
  resizeCanvas(windowWidth, 1950);
}

function backToHome() {
    document.location = 'home.html'
}
