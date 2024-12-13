let img;
let pressState = false
let pressState_pre = false

function preload() {
  img = loadImage('as/imges_ccl.png');
}

function setup() {
  let canvas = createCanvas(400, 600);
  canvas.parent('embed-area');
  angleMode(DEGREES);
  background(255)
  noStroke();
  drawUpperPart();
  drawBody()
  drawScarf();
}

function draw() {


}
function drawBody(press){
  
  fill(230)
  ellipse(130,545,120,40)
  ellipse(270,545,120,40)
  
  push()
  // stroke(0);
  // strokeWeight(4);
  // point(75,440)
  // point(100,540)
  // point(190,540)
  // point(200,440)
  beginShape()
  vertex(75, 440);
  bezierVertex(100, 480, 100, 500, 100, 540)
  bezierVertex(100, 540, 190, 540, 190, 540)
  bezierVertex(205, 500, 200, 460,200,440)
  endShape(CLOSE);
  pop()
  
  push()
  // stroke(0);
  // strokeWeight(4);
  // point(325,440)
  // point(300,540)
  // point(210,540)
  // point(200,440)
  beginShape()
  vertex(325, 440);
  bezierVertex(300, 480, 300, 500, 300, 540)
  bezierVertex(210, 540, 210, 540, 210, 540)
  bezierVertex(195, 500, 200, 460, 200,440)
  endShape(CLOSE);
  pop()
  
  fill(200);
  // push()
  // rectMode(CENTER)
  // rect(200,350,260,240,20)
  // pop()
  push()
  beginShape();
  // stroke(0);
  // strokeWeight(4)
  // point(75,220);
  // point(75,440);
  // point(325,220);
  // point(325,440);
  vertex(75,230);
  bezierVertex(50, 240, 50, 420, 75, 440);
  bezierVertex(100, 460, 300, 460, 325, 440);
  bezierVertex(350, 420, 350, 240, 325,230)
  endShape(CLOSE)
  pop()
  
  fill(130)
  push();
  translate(75,240)
  rotate(5)
  ellipse(0,90,50,180)
  pop();
  push();
  translate(325,240)
  rotate(-5)
  ellipse(0,90,50,180)
  pop();//arm
  
  if(press){
    image(img, 70, 100, 260, 150);
    fill(255)
    textSize(24);
    textFont('NexaBold')
    text("BALENCIAGA",120,320)
    rect(284,348,20,5);
     rect(284,355,20,5);
  }
}

function drawScarf(){
  //stroke(0)
  //strokeWeight(2)
  fill(243,82,82)
  beginShape();
  vertex(60,200)
  bezierVertex(120,230,280,230,340,200);
  bezierVertex(340,210,335,220,340,200 + 50);
  bezierVertex(280, 230+50, 120,230+50,60,200+50);
  bezierVertex(65,210,60,220,60,200)
  // bezier(70,200,120,230,280,230,330,200);
  // bezier(330,200,320,210,320,220,330,200 + 30);
  // bezier(330,200+30, 280, 230+30, 120,230+30,70,200+30);
  // bezier(70, 200+30, 80,220,80,210,70,200)
  endShape(CLOSE);//scarf
  
  rect(270,240,46,130)//scarf
  for(let i = 0; i < 6; i++){
    rect(270+i*8,360,6,30);
  }
  fill(255)
  textSize(30);
  textFont('NexaBold')
  text("N",284,345)
  rect(284,348,20,5);
  rect(284,355,20,5);
}

function drawUpperPart(){
  push()
  fill(100);
  arc(200,200,300,340,175,5);
  pop();
  
  fill(150)
  arc(200,200,260,300,175,5); //head
  
  fill(255)
  arc(130,    210,100,130,180,0);
  arc(400-130,210,100,130,180,0);//head
  
  fill(2555,233,130);
  ellipse(200,200,50,30);//mouse
  
  fill(50);
  ellipse(    140,180,10,20);
  ellipse(400-140,180,10,20);//eyes
  
  
  push();
  fill(100);
  translate(170,70)
  rotate(-35)
  ellipse(-30,0,160,80)
  pop();
  push();
  fill(100);
  translate(230,70)
  rotate(35)
  ellipse(30,0,160,80) 
  pop();//hair

}

function mousePressed(){
  noStroke();
  drawUpperPart();
  drawBody(true)
  drawScarf();
  
  // fill(100);
  // push();
  // translate(170,70)
  // rotate(-35)
  // ellipse(-30,0,160,80)
  // pop();
  
  // push();
  // translate(230,70)
  // rotate(35)
  // ellipse(30,0,160,80) 
  // pop();//hair
  
  
}

function mouseReleased(){
  background(255)
  noStroke();
  drawUpperPart();
  drawBody(false)
  drawScarf();
}