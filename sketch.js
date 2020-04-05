var sun, mercury;

function setup() {
  createCanvas(1000, 800);
  sun = new Sun(470,370,140);
}

function draw() {
  background(0);
  text(mouseX +" , "+mouseY,40,40);
  sun.display();
}