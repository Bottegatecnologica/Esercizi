//click & hold
let font;
let vertici = [];

function preload() {
  font = loadFont('arial.ttf');
}


function setup() {
  createCanvas(800, 600);
  cursor(CROSS);
  let par = {
    sampleFactor: 1,
    simplifyThreshold: 0
  };

  let punti = font.textToPoints('White', 120, 350, 180, par);
  for (let i = 0; i < punti.length; ++i) {
    let punto = punti[i];
    vertici.push(createVector(punto.x, punto.y));
  }
}


function draw() {

  let trasformati = [];

  for (let i = 0; i < vertici.length; ++i) {
    let vertice = vertici[i].copy();

    let tempo = (frameCount + vertice.mag()) / 17;
    vertice.y += map(noise(tempo), -1, 1, -10, 10);
    vertice.x += map(noise(tempo), -1, 1, 0, 50);

    trasformati[i] = vertice;
  }


  background(0);
  noStroke();
  fill(255, 85)


  for (let i = 0; i < trasformati.length; ++i) {
    let vert = trasformati[i];

    square(vert.x, vert.y, 3);

    if (mouseIsPressed) {
      R = random(11, 15.96);
      G = random(11, 15.96);
      B = random(11, 15.96)

      fill(R * R, G * G, B * B);
      translate(width, height)
      rotate(PI / 3)
      square(vert.x, vert.y, 3);



    }
  }
}