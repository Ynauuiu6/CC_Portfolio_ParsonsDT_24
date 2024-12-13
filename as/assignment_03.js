let tide = [
    [243.01, 258.14, 259.58, 250.72, 235.3, 215.12, 190.13, 160.25, 127.93, 98.01, 76.63, 69.45, 76.66, 92.13, 110.01, 128.09, 144.9, 158.44, 167.35, 171.67, 173.8, 177.42, 185.43, 199.52, 218.23],
    [218.23, 235.01, 243.45, 243.15, 237.26, 227.82, 214.73, 196.32, 171.37, 141.21, 109.75, 83.41, 69.37, 69.8, 80.87, 98.44, 120.04, 142.35, 161.63, 175.34, 182.88, 185.99, 187.4, 189.76, 218.23],
    [90.35, 173.99, 273.01, 331.63, 322.23, 270.48, 216.17, 173.61, 139.48, 112.6, 91.1, 70.21, 57.5, 73.86, 122.2, 168.73, 177.22, 151.01, 119.61, 96.95, 76.73, 56.87, 43.93, 40.78, 90.35]
  ]; //tide data 
  
  let tideMinMax = [
    [69.45, 259.58],
    [69.37, 243.45],
    [40.78, 331.63]
  ];
  let index = 0;
  let interfaceIndex = tideMinMax[0];
  let timeIndex = tide[0];
  
  let interfaceSizeMin = 50;
  let interfaceSizeMax = 700;
  
  function setup() {
    let canvas = createCanvas(700, 700);
    canvas.parent('embed-area');
    background(255);
    //translate(width / 2, height / 2);
    drawClockInterface();
    frameRate(10);
  }
  
  function draw() {
    //drawClockInterface()
  }
  
  function drawClockInterface() {
    push();
    translate(width / 2, height / 2);
    noStroke();
    fill(194, 233, 242, 60);
  
    let cInterfaceS = map(interfaceIndex[0], 30, 300, interfaceSizeMin, interfaceSizeMax);
    let cInterfaceL = map(interfaceIndex[1], 30, 300, interfaceSizeMin, interfaceSizeMax);
    circle(0, 0, cInterfaceS);
    circle(0, 0, cInterfaceL);
    pop();
  }
  
  function mousePressed() {
    index = floor(random(3));  // Random integer between 0 and 2
    interfaceIndex = tideMinMax[index];
    timeIndex = tide[index];
    clear();
    
    push();
    
    drawClockInterface();
    translate(width / 2, height / 2);
    noStroke();
  
    fill(62, 175, 250, 40);
    let a = map(timeIndex[hour()], 30, 300, interfaceSizeMin, interfaceSizeMax);
  
    fill(107, 137, 201, 40);
    let b = map(timeIndex[(hour() + 1) % 24], 30, 300, interfaceSizeMin, interfaceSizeMax);  // Ensuring it wraps around within 24 hours
    circle(0, 0, a);
    circle(0, 0, b);
  
    stroke(245, 191, 195);
    strokeWeight(4);
    noFill();
    circle(0, 0, map(minute(), 0, 59, a, b)); 
    pop()
  }
  