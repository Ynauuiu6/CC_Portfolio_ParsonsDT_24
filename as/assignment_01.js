function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent('embed-area');
    noStroke();
  
    //angleMode(DEGREES);
  }
  
  function draw() {
    let ctr = width/2;
    background(255,255,255,0);
    
    push()
    blendMode(BLEND);
    fill(50,130,250,80)
    rect(0,0,600,250)
    fill(158, 195, 255,80)
    rect(0,150,600,400)
    fill(164, 255, 158,80);
    rect(0,420,600,400)
    pop()
    
    push()
    stroke('purple');
    strokeWeight(10);
    point(ctr-55,290);
    fill(252,249,237);
    noStroke();
    translate(ctr-55,290)
    rotate(PI*50/360)
    arc(0,140,76,320,PI,0)
    arc(0,140,76,140,0,PI)
    pop()
    //hand_L
    
    push()
    stroke('purple');
    strokeWeight(10);
    point(ctr+55,290);
    fill(252,249,237);
    noStroke();
    translate(ctr+55,290)
    rotate(-PI*50/360)
    arc(0,140,76,320,PI,0)
    arc(0,140,76,140,0,PI)
    pop()
    //hand_R
    
    fill(252,249,237);
    arc(ctr,410,170, 370, PI, 0);
    arc(ctr,410,170, 200, 0, PI);
      push();
      fill(50);
      translate(ctr-30,380);
      rotate(-PI/5);
      ellipse(-20,10,80,100);
      pop();
   //
      push();
      noFill();
      stroke(204,201,188);
      strokeWeight(10);
      arc(ctr,410,170,370,PI,PI/2+PI);
      arc(ctr,410,170,200,PI*4/5,PI);
      pop();
    //body
    
   
    
    
    push();
    stroke('purple');
    strokeWeight(10);
    point(ctr-55,140)
    translate(ctr-55,145);
    fill(50);
    noStroke();
    rotate(PI*5/9)
    arc(10,80, 58, 220, PI, 0);
    arc(10,80, 58, 96, 0, PI);
    pop();
    //ear_L
    
    push();
    stroke('purple');
    strokeWeight(10);
    point(ctr+55,140)
    translate(ctr+40,130);
    fill(50);
    noStroke();
    rotate(-PI*2/3)
    arc(-10,80, 58, 190, PI, 0);
    arc(-10,80, 58, 96, 0, PI);
    pop();
    //ear_R
  
    fill(252,249,237);
    ellipse(300,200,140,160);
    ellipse(300,240,170,100);
      push();
      noFill();
      stroke(204,201,188);
      strokeWeight(8);
      arc(300,240,170,100,PI*1/2-PI*2/6,PI*1/2+PI*2/6);
      pop();
    //head
    
    fill(50);
    arc(300, 240, 60, 30, PI, 0);
    arc(300, 240, 60, 40, 0, PI);
    //nose
    
    fill(50);
    ellipse(ctr-35,200,10,15);
      push();
      fill(40,40,40,180);
      ellipse(ctr+35,200,36,40);
      pop();
    ellipse(ctr+35,200,10,15);
    //eyes
    
    push();
    // stroke('purple');
    // strokeWeight(10);
    // point(ctr+55,480)
    translate(ctr+70,480);
    fill(252,249,237);
    noStroke();
    rotate(PI/5);
    arc(0,0, 90, 100, PI, 0);
    arc(0,0, 90, 80, 0, PI);
    stroke(204,201,188);
    strokeWeight(10);
    noFill();
    arc(0,0, 90, 80, PI*3/5, PI);
    arc(0,0, 90, 100, PI, PI*65/180+PI);
    pop();
    //foot_R
    
    push();
    // stroke('purple');
    // strokeWeight(10);
    // point(ctr+55,480)
    translate(ctr-70,480);
    fill(252,249,237);
    noStroke();
    rotate(-PI/5);
    arc(0,0, 90, 100, PI, 0);
    arc(0,0, 90, 80, 0, PI);
    stroke(204,201,188);
    strokeWeight(10);
    noFill();
    arc(0,0, 90, 80,0,PI*4/9);
    arc(0,0, 90, 100,PI*11/9,0);
    pop();
    //foot_L
    
    push();
    noFill();
    stroke(204,201,188)
    strokeWeight(10)
    translate(ctr+55,290)
    rotate(-PI*50/360)
    arc(0,140,76,320,PI,PI*75/180+PI)
    arc(0,140,76,140,PI*115/180,PI)
    pop();
    //hand_R_shadow
    
    //Sunglass_start
    push();
    blendMode(BLEND);
    translate(ctr-35,195)
    beginShape();
    fill(20,20,20,99)
    stroke(40,40,40)
    strokeWeight(8)
    // Original anchor at top.
    vertex(-35,-18);
    bezierVertex(5, -15, 20, -8, 20,13);
    bezierVertex(-3, 26, -50, 15, -35,-18);
    endShape();
    stroke(255,0,0)
    strokeWeight(10)
    //point(-35,-15);
    //point(20,13);
    //point(0,0);
    pop();
    
    push();
    blendMode(DARKEST);
    translate(ctr+35,195)
    beginShape();
    fill(20,20,20,99)
    stroke(40,40,40)
    strokeWeight(8)
    // Original anchor at top.
    vertex(35,-18);
    bezierVertex(-5, -15, -20,-8,-20,13);
    bezierVertex(-3, 26, 50, 15,35,-18)
    endShape();
    stroke(255,0,0)
    strokeWeight(10)
    //point(35,-15);
    //point(-20,13);
    //point(0,0);
    pop();
    
    stroke(40)
    strokeWeight(8);
    noFill();
    arc(ctr,195+13,30,18,PI,0)
    noStroke()
    
  }