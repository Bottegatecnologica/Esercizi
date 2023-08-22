 let stepY = 20;
 let stepX = 20;
 let y = 0
 let x = 0
 let intensità = 0
 let blu = 0
 let sqre = 0
 let R = 0

 function setup() {
   createCanvas(800, 600);


   for (y = 0; y <= height; y += stepY) {
     for (x = -40; x <= width; x += stepX) {

       intensità = random(1, 15.97);
       blu = random(50, 200);
       sqre = random(10, 40);
       R = random(0, 1);
       stroke(0, 0, 0, R * 255);
       fill(x / 1.7, y / 1.3, blu, intensità * intensità);
       square(x, y, sqre);


     }
   }
 }