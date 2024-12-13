//this project is insired by:
//https://openprocessing.org/sketch/2146220
//https://openprocessing.org/sketch/2286716
//I reference some of their code :)


const cellArray = [];
const snakesNum = 3; // Number of snakes in a single cell
const snakeLength = 8;
const turnProbability = 0.225;
const step = 15;
//const cellSize = 95;
//const cellCount = 5;
const cellCnt = 5


let mouseIsClicked = false;
let mouseClickCnt = 0;


class Cell {
  constructor(x, y, cellSize) {
    this.x = x;
    this.y = y;
    this.cellSize = cellSize;
    this.snakes = [];
    this.angle = random(TWO_PI);
    //this.shapeNum = int(random(3))
    //console.log(this.shapeNum)
  }

  update() {
    while (this.snakes.length < snakesNum) {
      this.snakes.push(new Snake(this.x, this.y, this.cellSize));
    }
    for (const snake of this.snakes) {
      // const distance = dist(mouseX, mouseY, this.x, this.y);
      // this.angle += 1 / max(0.1, distance); 
      this.angle += 1 / 500;
    }
    for (const snake of this.snakes) {
      snake.update();
    }
    this.snakes = this.snakes.filter((snake) => snake.isDead === false);
  }

  show() {
    push();
    translate(this.x, this.y);
    for (const snake of this.snakes) {
      snake.show(this.angle);
    }
    pop();
  }
}

class Snake {
  constructor(ctrX, ctrY, cellSize) {
    this.cellSize = cellSize;
    this.shapeNum = int(random(4))
    this.ctrX = ctrX;
    this.ctrY = ctrY;
    const x = int(random(-cellSize/2, cellSize/2));
    const y = int(random(-cellSize/2, cellSize/2));
    const pos = createVector(x, y);
    this.list = [];
    this.list.push(pos);
    this.color = color(random(360), random(10, 70), 100);
    this.dir = createVector(1, 0).rotate(random(PI * 2));
    this.isDead = false;
  }

  update() {
    if (random(1) < turnProbability) {
      this.dir.rotate(PI / 2);
    }
    const head = this.list[0].copy();
    head.add(this.dir.copy().mult(step));
    //console.log(dist(head.x, head.y, this.ctrX, this.ctrY));
    if (abs(head.x) > this.cellSize / 2 || abs(head.y) > this.cellSize / 2) {
      this.isDead = true;
      //console.log(1)
      return;
    }
    this.list.unshift(head);
    if (this.list.length > snakeLength) {
      this.list.pop();
    }
  }

  show(angle) {
    //stroke(this.color);
    fill(this.color)
    //strokeCap(ROUND);
    //noFill();

    const symmetry6 = [
      pos=> pos.copy(),
      pos=> pos.copy().rotate(TWO_PI / 3),
      pos=> pos.copy().rotate((TWO_PI / 3) * 2),
      pos=>createVector(pos.x, -pos.y),
      pos=>createVector(pos.x, -pos.y).rotate(TWO_PI / 3),
      pos=>createVector(pos.x, -pos.y).rotate((TWO_PI / 3) * 2),
    ];
    
    for (const func of symmetry6) {
      beginShape();
      let i = 0;
      for (const part of this.list) {
        const { x, y } = func(part).rotate(angle);
        //vertex(x, y);
        switch(this.shapeNum){
          case 0:
            fill(this.color, map(i,0,this.list.length,0,100))
            circle(x,y,10);
            break;
          case 1:
            fill(this.color, map(i,0,this.list.length,0,255))
            let radius = 10 / Math.sqrt(3);
  
            let x1 = x + radius * cos(PI / 6);
            let y1 = y - radius * sin(PI / 6);
  
            let x2 = x - radius * cos(PI / 6);
            let y2 = y - radius * sin(PI / 6);

            let x3 = x;
            let y3 = y + radius;

            triangle(x1, y1, x2, y2, x3, y3);
            break;
          
          case 2:
            fill(this.color, map(i,0,this.list.length,250,100))
            rect(x,y,10);
            break;
          
          case 3:
            noFill();
            strokeCap(ROUND);
            stroke(this.color);
            strokeWeight(4);
            vertex(x, y);
            
            break;
            
        }
         i++
         //console.log(i)
      }
      endShape();
      noStroke();
     
     
    }
  }
}

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent('embed-area');
  //textMode(CENTER);
  textSize(32);
  text('Click',300,400);
  //frameRate(10)
}

function draw() {
  if(mouseIsClicked){
    colorMode(HSB, 360, 100, 100);
    noStroke();
    fill(0, 0, 20, 30);
    background(0, 0, 20, 30)
    //rect(0, 0, width, height, 30);

    for (const cell of cellArray) {
      cell.update();
      cell.show();
    }
  }
}

function mousePressed(){
  if(!mouseIsClicked){
    mouseIsClicked = true;
  }
  else if (mouseIsClicked && mouseClickCnt < cellCnt){
    mouseClickCnt ++;
    cellArray.push(new Cell(mouseX, mouseY, random(100,300)));
    //console.log(mouseClickCnt);
  }
  else{
    mouseClickCnt = 0;
    cellArray.splice(0,cellCnt)
  }
}
