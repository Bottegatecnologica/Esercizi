//R 237 G 27 B 36 
//R 249 G 237 B 15 
//R 19 G 74 B 156 

function setup() {
  createCanvas(800, 600);
  background(255, 0)

  let l;
  let x = 0;
  let H = 0


  while (x < 10) {
    l = random(20, 165);

    fill(237, 27, 36);
    noStroke();
    square(random(800), random(600), l);

    fill(249, 237, 15);
    noStroke();
    square(random(800), random(600), l);

    fill(19, 74, 156);
    noStroke();
    square(random(800), random(600), l);
    x = x + 1
    H = random(0, 3);
    if (H > 2) {
      fill(0);
      square(random(800), random(600), l / 2);
      H = 0
    } else {
      H = 0
    };

  }
}