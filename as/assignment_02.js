


let scaleFactor = 1.5; 
let textPositions = []; 

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent('embed-area');
  background(255);
}

function draw() {
  clear();
  background(255)
  noStroke();
  drawAppleShape(scaleFactor);
  drawLeafShape(scaleFactor);
  drawEyesShape();
  drawMouthShape();
  drawBlushShape()
  if(mouseY < 300){
    drawTearShape(scaleFactor);
  }
  
  for (let i = 0; i < textPositions.length; i++) {
    let pos = textPositions[i];
    fill(210, 100, 100); 
    textSize(pos.s);
    textFont('AvenirBold');
    text('JellyApple', pos.x, pos.y);
  }
}
function drawBlushShape(){
  push();
  translate(width / 2 + 54 ,height / 2 + 26);
  fill(255,200,200);
  ellipse(0,10,
          9 * map(mouseY,300,600,0,4,true), 6 * map(mouseY, 300, 600, 0, 4, true))
  pop();
  
  push();
  translate(width / 2 - 54 ,height / 2 + 26);
  fill(255,200,200);
  ellipse(0,10,
          9 * map(mouseY,300,600,0,4,true), 6 * map(mouseY, 300, 600, 0, 4, true))
  pop();
}

function drawTearShape(s){
  push();
  translate(width / 2 + 30, height / 2 + 18 + map(mouseY, 0, 300, -4, 12, true));
  fill(200,240,255)
  rotate(PI * map(mouseX, 0, 600, -30, 30) / 180)
  beginShape();
  bezier(0, 0,
         -3 * map(mouseY,0,300,1,0.5,true), 2* map(mouseY,0,300,1,0.5,true),
         -15* map(mouseY,0,300,1,0.5,true), 23* map(mouseY,0,300,1,0.5,true),
         0, 25* map(mouseY,0,300,1,0.5,true));
 
  bezier(-1, 0,
         3* map(mouseY,0,300,1,0.5,true), 2* map(mouseY,0,300,1,0.5,true),
         15* map(mouseY,0,300,1,0.5,true), 23* map(mouseY,0,300,1,0.5,true),
         -1, 25* map(mouseY,0,300,1,0.5,true));
  endShape(CLOSE);
  pop();
}

function drawEyesShape(){
  push();
  translate(width / 2, height / 2 +10)
  fill(85,73,70)
  ellipse(-30,0,16,24);
  ellipse(30,0,16,24);
  pop();
}

function drawMouthShape(){
  push();
  translate(width / 2, height / 2 + 50);
  stroke(85,73,70);
  strokeWeight(2);
  noFill();
  beginShape();
  //console.log(mouseX);
  //console.log(map(mouseX,-200,200,-30,-2))
  bezier(-26, -0, 
         map(mouseX, 0, 600, -40, -2,), map(mouseY,0,600,-30,20, true), 
         map(mouseX, 0, 600, 2, 40,), map(mouseY,0,600,-30,20,true), 
         26, 0);
  endShape();
  pop();
}

function drawLeafShape(s){
  push();
  translate(width / 2, height / 2 - 46*s);
  noStroke();
  fill(117,223,104);
  rotate(PI * map(mouseX,0,600,60,-10)/180);
  //map(mouseX,0,600,40,-40)
  beginShape();
  bezier(-0 * s, -0 * s, 15 * s, -20 * s, 10 * s, -40 * s, -0 * s, -50 * s);
  bezier(-0 * s, -0 * s, -15 * s, -20 * s, -10 * s, -40 * s, -0 * s, -50 * s);
  endShape(CLOSE);
  pop();
}

function drawAppleShape(s) {
  push();
  translate(width / 2, height / 2);
  fill(239,110,100)
  noStroke();
  beginShape();
  bezier(-0 * s, -50 * s, -100 * s, -100 * s, -150 * s, 100 * s, -0 * s, 100 * s);
  bezier(-0 * s, -50 * s, 100 * s, -100 * s, 150 * s, 100 * s, -0 * s, 100 * s)
  endShape(CLOSE);
  pop();
}


function mouseClicked() {
  textPositions.push({ x: mouseX, y: mouseY, s: random(5,30) }); 
}

function keyPressed() {
  if (key === 'w') {
    scaleFactor += 0.1; 
  } else if (key === 's') {
    scaleFactor -= 0.1; 
  }
}
