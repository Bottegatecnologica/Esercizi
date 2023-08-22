let Z;
let H;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cursor(CROSS);
  background(0);

}

function draw() {
  if (mouseIsPressed) {

    Z = random(0, 100);
    H = random(80, 120);
    line(0, mouseY, width, mouseY, );
    line(mouseX, 0, mouseX, height);

    fill(255, 255, 255, H);
    circle(mouseX, mouseY, Z);

  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}