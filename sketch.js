var artbutton;
var gamebutton;
var infobutton;

function setup() {
createCanvas(windowWidth,4000);
   artbutton = createButton('Gallary');
  artbutton.position(19, 19);
  artbutton.mousePressed(showImages);
       gamebutton = createButton('Join The Community');
  gamebutton.position(19, 39);
  gamebutton.mousePressed(showImages);
       infobutton = createButton('Information');
  infobutton.position(19, 59);
  infobutton.mousePressed(showImages);
}

function draw() {
  background(58);
  noStroke();
  rectMode(CORNER);
  rect(0,0,width,100);
  textSize(25);
  text("We The few", (width/2) - (textWidth("We The Few") / 2), 40);
   textSize(15);
  text("Home", (width/2) - 30, 60);
  rectMode(CENTER);
  stroke(0);
  strokeWeight(5);
     rect((width / 2) + (width/4), 700, width/4, 1100, 20);
  rect(width/4, 400, width/2, 500, 20);
    rect(width/4, 1000, width/2, 500, 20);
}

function windowResized() {
  resizeCanvas(windowWidth, 4000);
}

function showImages() {
    document.location = 'images.html'
}
