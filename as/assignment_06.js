
let data = [
    ["we", 22, [305, 275]],
    ["our", 18, [420, 350]],
    ["design", 15, [200, 430]],
    ["human", 14, [375, 200]],
    ["with", 13, [560, 150]],
    ["mushrooms", 12, [65, 490]],
    ["posthumanism", 11, [310, 360]],
    ["living", 10, [180, 525]],
    ["things", 10, [250, 300]],
    ["thought", 9, [320, 100]],
    ["understanding", 9, [530, 275]],
    ["world", 8, [95, 450]],
    ["creatures", 7, [135, 410]],
    ["share", 7, [475, 220]],
    ["how", 7, [290, 330]],
    ["beings", 6, [360, 480]],
    ["relations", 6, [520, 60]],
    ["processes", 6, [70, 540]],
    ["environmental", 5, [185, 50]],
    ["bound", 5, [455, 395]],
    ["ethically", 5, [335, 270]],
    ["materially", 5, [500, 180]],
    ["exists", 5, [240, 430]],
    ["different", 5, [390, 310]],
    ["anthropology", 4, [520, 220]],
    ["explore", 4, [100, 480]],
    ["concepts", 4, [240, 350]],
    ["change", 4, [60, 390]],
    ["something", 4, [320, 160]],
    ["might", 4, [330, 260]],
    ["consider", 4, [490, 95]],
    ["steps", 4, [115, 530]],
    ["approaches", 4, [455, 310]],
    ["relational", 4, [85, 500]],
    ["solutions", 4, [520, 175]],
    ["human-centered", 4, [250, 410]],
    ["technology", 4, [395, 230]],
    ["matter", 4, [180, 375]],
    ["cohabit", 3, [325, 540]],
    ["how", 3, [60, 455]],
    ["things", 3, [420, 280]],
    ["future", 3, [175, 365]],
    ["questions", 3, [490, 330]],
    ["ethics", 3, [310, 215]],
    ["nonhumans", 3, [235, 440]],
    ["understand", 3, [434, 170]],
    ["knowledge", 3, [125, 515]],
    ["user", 3, [300, 490]],
    ["power", 3, [550, 60]],
    ["agency", 3, [95, 410]],
    ["possibilities", 3, [385, 295]],
    ["represenation", 3, [240, 125]],
    ["representation", 3, [420, 460]],
    ["thinking", 3, [130, 505]],
    ["underlying", 2, [375, 215]],
    ["approach", 2, [200, 480]],
    ["strange", 2, [510, 140]],
    ["collective", 2, [85, 340]],
    ["open", 2, [360, 305]],
    ["ideas", 2, [180, 465]],
    ["conditions", 2, [430, 95]],
    ["mosaic", 2, [295, 520]],
    ["temporal", 2, [125, 350]],
    ["spatial", 2, [520, 275]],
    ["patterns", 2, [90, 220]],
    ["patchiness", 2, [310, 430]],
    ["assemblages", 2, [245, 390]],
    ["entangled", 2, [475, 60]],
    ["ways", 2, [135, 550]],
    ["life", 2, [390, 140]],
    ["grasp", 2, [265, 485]],
    ["curiosity", 2, [505, 320]],
    ["survival", 2, [310, 400]],
    ["times", 2, [150, 275]]];
  
    let x =0
    let y =0
  
  function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent('embed-area');
    textAlign(CENTER);
    //colorMode(HSB)
    //random(-20,20)
    for(let i = 0;i < data.length;i++){
      //data[i][1] +=random(-20,20)
    }
    frameRate(30)
  
  }
  
  function draw() {
    background(255);
    for(let i = 0;i < data.length;i++){
      let posX = data[i][2][0] //map(data[i][2][0],-1,1,50,550);
      let posY = data[i][2][1]  //map(data[i][2][1],-1,1,50,550);
      
  
      for(let j = i+1;j < data.length;j++){
         let posX_ = data[j][2][0] 
         let posY_ = data[j][2][1] 
        push();
        stroke('red')
        strokeWeight(0.6)
        if(dist(posX_, posY_, posX, posY) < 110){
          line(posX_, posY_, posX, posY)
        }
        pop()
      }
      
      
      fill(map(data[i][1],0,30,200,10));
      textSize(16)
      text(data[i][0], posX, posY);
      x += random(-0.5,0.5)
      y += random(-1,1)
    }
    
    
  
  }