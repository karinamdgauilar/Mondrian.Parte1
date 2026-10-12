function setup() {
  createCanvas(800, 800);
  noLoop();
}

function draw() {
  background(242, 240, 233);

  let xMain = width * 0.46;       
  let xYellow = width * 0.10;      
  let xBlueRight = width * 0.77;    

  let yTop = height * 0.40;         
  let yMid = height * 0.64;         
  let yBottom = height * 0.95;      
  
  noStroke();

  fill(225, 38, 18);
  rect(0, 0, xMain, yTop);


  fill(245, 208, 32);
  rect(0, yMid, xYellow, height - yMid);


  fill(26, 35, 126);
  rect(xMain, yMid, xBlueRight - xMain, yBottom - yMid);

  // PainÃ©is de Fundo (Creme / Branco)
  fill(244, 243, 238); rect(xMain, 0, width - xMain, yTop);               
  fill(238, 237, 232); rect(0, yTop, xMain, yMid - yTop);                 
  fill(240, 239, 235); rect(xMain, yTop, width - xMain, yMid - yTop);    
  fill(235, 234, 230); rect(xYellow, yMid, xMain - xYellow, height - yMid);
  fill(239, 238, 234); rect(xBlueRight, yMid, width - xBlueRight, height - yMid); 

  
  stroke(15, 15, 15);
  strokeCap(SQUARE);

  // Horizontais
  strokeWeight(18); line(0, yTop, width, yTop);
  strokeWeight(16); line(0, yMid, width, yMid);
  strokeWeight(14); line(xMain, yBottom, xBlueRight, yBottom); 

  // Verticais
  strokeWeight(17); line(xMain, 0, xMain, height);
  strokeWeight(15); line(xYellow, yMid, xYellow, height);
  strokeWeight(14); line(xBlueRight, yMid, xBlueRight, height);

  
  loadPixels();
  for (let i = 0; i < pixels.length; i += 4) {
    let noiseVal = random(-7, 7);
    pixels[i]     = constrain(pixels[i] + noiseVal, 0, 255);
    pixels[i + 1] = constrain(pixels[i + 1] + noiseVal, 0, 255);
    pixels[i + 2] = constrain(pixels[i + 2] + noiseVal, 0, 255);
  }
  updatePixels();
}