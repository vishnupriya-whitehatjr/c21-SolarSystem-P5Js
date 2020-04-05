
var sun;



var click =false;

var angle= 0;
var anglespeed = 0.2;

function setup() {
  createCanvas(1200,1000);
  sun = new Sun(0,0,120,250,200,0);
  mercury = new Planet(70, 50, 20, 150, 150, 150);
  venus =	new Planet(-110, -60, 30, 250, 80, 0);
  earth =	new Planet(0, -180, 35, 0, 160, 255);
  mars =	new Planet(30, 220, 25, 255, 130, 0);
  jupiter =	new Planet(-180, 210, 45, 255, 170, 0);
  saturn =	new Planet(340, -30, 50, 180, 120, 100);
  uranus =	new Planet(220, 350, 35, 0, 200, 255);
  neptune =	new Planet(-340, -320, 45, 0, 50, 255);
  pluto = new Planet(-100,180,35,47,44,89);
 
}

function draw() {
  background(0);
  text(mouseX +" , "+mouseY,40,40);
  translate(width / 2, height / 2);
  angleMode(DEGREES);
	rotate(angle);
	
  
  mercury.display();
  venus.display();
  earth.display();
  mars.display();
  jupiter.display();
  saturn.display();
  uranus.display();
  neptune.display();
  pluto.display();
  sun.display();
	angle = angle + anglespeed;
	
	if(keyCode === 32) {
		anglespeed = 0;
  } 
  else if(keyCode === ENTER){
		anglespeed = 0.2;
  }
  if(frameCount%2 === 0){
    sun.radius= sun.radius+0.3;
  }
}

