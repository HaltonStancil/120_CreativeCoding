let x = 300;
let y = 200;
let d = 100;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  if (dist(mouseX, mouseY, x, y) < d/2) {
    background(0);
  } else {
    background(255);
  }
  ellipse(x, y, d, d);
}