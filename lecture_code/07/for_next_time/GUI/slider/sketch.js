// Simple Slider
// Daniel Shiffman <http://www.shiffman.net>

let dragging = false; // Is the slider being dragged?
let rollover = false; // Is the mouse over the slider?

// Rectangle variables for slider
let x = 100;
let y = 25;
let w = 10;
let h = 50;
// Start and end of slider
let sliderStart = 100;
let sliderEnd = 400;
// Offset for dragging slider
let offsetX = 0;

function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(255);


  // Is it being dragged?
  if (dragging) {
    x = mouseX + offsetX;
  }
  // Keep rectangle within limits of slider
  x = constrain(x, sliderStart, sliderEnd-w);

  // Draw a line for slider
  stroke(0);
  line(sliderStart, y+h/2, sliderEnd, y+h/2);

  stroke(0);
  // Fill according to state
  if (dragging) {
    fill (50);
  } else {
    fill(175);
  }
  // Draw rectangle for slider
  rect(x, y, w, h);

  // Map is an amazing function that will map one range to another!
  // Here we take the slider's range and map it to a value between 0 and 255
  let b = map(x,sliderStart,sliderEnd-w,0,255);
  fill(b);
  rect(sliderStart, 100, sliderEnd-sliderStart, 150);
}

function mousePressed() {
  // Did I click on slider?
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    dragging = true;
    // If so, keep track of relative location of click to corner of rectangle
    offsetX = x-mouseX;
  }
}

function mouseReleased() {
  // Stop dragging
  dragging = false;
}