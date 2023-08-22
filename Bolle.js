class Bolla {
  constructor() {
    this.x = random(width)
    this.y = random(height)
    this.diameter = random(3, 110);
    this.speedX = this.diameter / 33;
    this.speedY = this.diameter / 99;
    this.direc = 1;
    this.c = random(40, 80);

  }

  move() {
    this.y -= this.speedY
    this.x += this.speedX * this.direc
    if (this.y + this.diameter * 2 < 1) {
      this.y = height + this.diameter * 2
    }
    if (this.x - this.diameter * 2 > width) {
      this.direc = -1
    }
    if (this.x + this.diameter * 2 < 1) {
      this.direc = 1
    }
  }

  display() {
    circle(this.x, this.y, this.diameter);
    fill(255, this.c);
    stroke(255);
  }
}

let bolle = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 175; i++) {
    bolle.push(new Bolla());
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}


function draw() {
  background(10, 10, 60);
  for (let i = 0; i < bolle.length; i++) {
    bolle[i].display();
    bolle[i].move();
  }

}
