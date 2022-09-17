// Declare all the variables first
let meteorX = 400; // stores the x-cordinate of the meteor
let meteorY = 0;  // stores the y-cordinate of the meteor
let meteorDiameter = 30; // stores diameter 
let catcherDiameter = 50;
let speed = 1;
let distance;
var bg; // declare variable for background image

function preload(){
  bg = loadImage("space2.jpg");
}
// this function creates the size of the canvas 
function setup() {
createCanvas(900, 750); // (width,height)
}

//this function is the main loop
function draw() {
  background (bg);
  //background(0,0,0);
  noStroke();
 // drawing the meteor
  fill(156, 46, 53); // colors are filled in using  RGB 
  ellipse(meteorX, meteorY, meteorDiameter, meteorDiameter);
  meteorY= meteorY + 1; // or meteorY++
  
  // the catcher
fill(255, 255, 255, 100);
ellipse(mouseX, mouseY,catcherDiameter,catcherDiameter);
distance = dist(meteorX, meteorY, mouseX, mouseY);
print(`Distance = ` + distance); // used this statement to help me debug the code
if(distance < 15){
  meteorY = 0;
  meteorX = random(width);
   speed = random(1,4);
  meteorDiameter = random(10,30);

} //This conditional returns the meteorY to 0 and meteorX to a random position in width when the catcher intersects with the meteor
 
if(meteorY > height){
meteorY = 0; 
meteorX = random(width);
speed = random (1,4);
meteorDiameter = random(10,30);
} // This conditional returnes meteor Y to 0 when it travels a distance > 800; and meteorX to a random position along the width
}


