let x=1;
let y=1;
let easing=0.05;

function setup(){
createCanvas(750, 400);
noStroke();
}

function draw(){
background(100, 34, 93);
let targetX= mouseX;
x +=(targetX-x)* easing;
let dx = targetX-x;
x +=dx * easing;

let targetY= mouseY;
let dy= targetY- y;
y +=dy* easing;
ellipse(x,y,10,10);
}
