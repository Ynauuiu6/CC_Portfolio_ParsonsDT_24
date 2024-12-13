let dialogStart = "Tell me your idea.";
let reply = ["I think mine works better.",
  "I do not agree.",
  "Why Should I care?",
  "How this relevant?",
  "Who need this?",
  "I do not understand.",
  "what's the connection.",
  "I think speculative design is ART.",
  "You do not care about your project",
  "I'm not interested in that.",
  "Your serious game is not entertaining enough."
];

let messageType = []; // Stores individual Word instances
let messageHistory = []; // Stores Message instances
let replyMessage = []; // Stores reply messages
let wordSpace = 13;
let lineSpace = 14;
let maxCharPerLine = 12;
let messageStartY = 60; 
let typedMessage = ''; // Stores user's typed message
let scrollOffset = 0; 
let score = 0;
let cursorBlink = true;
let cursorBlinkInterval = 300;
let lastBlinkTime = 0;
let replyPos_x = 50;
let dialogSpace = 10; 
let bubbleFrame = 8;
let scores = 0;
let threshold_A = 4;
let threshold_B = 10;
let sentTextWidth = 160;
// let timer; 
// let isFlashing = false; 
// let flashTimer = 0; 
// let showHintImage = false;

let gameState = 0; // 0: firstPage, 1: background, 2: play, 3 popup window
let img = [];
let img1

function preload(){
  for(let i = 0; i < 5; i++){
    let filePath = 'as/cclabfinal-0' + (i + 1) + '.png';
    console.log("Loading image:", filePath);
    img[i] = loadImage(filePath);
  }
}

function setup() {
  let canvas = createCanvas(400, 600);
  canvas.parent('embed-area');
  colorMode(HSB, 360, 100, 100);
  noStroke();
  rectMode(CENTER)
  //timer = millis()
 
  // startButton = createButton('Start Game');
  // startButton.position(width / 2 - 40, height / 2);
  // startButton.mousePressed(startGame);
}

function draw() {
  switch (gameState) {
    case 0: // Start screen
      image(img[0],0,0,400,600)
      textSize(32);
      fill(0);
      textAlign(CENTER, CENTER); 
      break;
    case 1:
      image(img[2],0,0,400,600)
      break;
    case 2: 
      playGame();
      break;
    case 3:
      image(img[1],0,0,400,600)
  }
}

// function startGame() {
//   // Change game state to play and hide the start button
//   gameState = 1;
//   startButton.hide();
// }

class MessageReply {
  constructor(message, isWord) {
    this.message = message;
    this.startPos_x = replyPos_x;
    this.startPos_y = 0;
    this.pos_x = 0;
    this.pos_y = 0;
    this.isWord = isWord;
    this.textContent = '';
    this.bubbleHeight = 0;

    for (const character of this.message) {
      this.textContent += character instanceof Word ? character.character : character;
    }
    this.calculateBubbleHeight();
  }

  calculateBubbleHeight() {
    if (this.isWord) {
      this.bubbleHeight = int(textWidth(this.textContent) / sentTextWidth) * lineSpace + bubbleFrame * 2;
    } else {
      let lines = this.message.length / maxCharPerLine;
      this.bubbleHeight = lines * lineSpace + 20;
    }
  }

  displayShape() {
    let cnt = 0;
    for (const character of this.message) {
      if (character instanceof Word) { // Ensure character is a Word instance
        this.pos_x = this.startPos_x + int(cnt % maxCharPerLine) * wordSpace;
        this.pos_y = int(cnt / maxCharPerLine) * lineSpace + this.startPos_y;
        character.display(this.pos_x, this.pos_y);
        cnt++;
      }
    }
  }

  displayText() {
    this.pos_x = replyPos_x;
    this.pos_y = this.startPos_y;
    push();
    textSize(12)
    text(this.textContent, this.pos_x + 80, this.pos_y - lineSpace, sentTextWidth);
    pop();
  }

  bubbleReplyText() {
    let bubbleHeight = int(textWidth(this.textContent) / sentTextWidth) * 16 + bubbleFrame * 3;
    let bubbleWidth = (textWidth(this.textContent) >= sentTextWidth ? sentTextWidth : textWidth(this.textContent)) + 20;
    let bubbleCtrPos_x = this.startPos_x + bubbleWidth / 2 - 16;
    let bubbleCtrPos_y = this.startPos_y  + (int(textWidth(this.textContent) / sentTextWidth)) * 16/2 -10;

    push();
    fill(98, 63, 42);
    rect(bubbleCtrPos_x, bubbleCtrPos_y, bubbleWidth, bubbleHeight, 10);
    pop();
  }

  bubbleReplyShape() {
    let lines = this.message.length / maxCharPerLine;
    let bubbleHeight = lines * lineSpace + 20;
    let bubbleCtr_y = this.startPos_y + (lines * lineSpace) / 2 - 4;

    let bubble_Ctr_x;
    let messageWidth;

    if (this.message.length < maxCharPerLine) {
      bubble_Ctr_x = this.startPos_x + (int(this.message.length % maxCharPerLine) * wordSpace) / 2;
      messageWidth = int(this.message.length % maxCharPerLine - 1) * wordSpace;
    } else {
      bubble_Ctr_x = this.startPos_x + 12 * (wordSpace) / 2;
      messageWidth = (maxCharPerLine - 1) * wordSpace;
    }

    let bubbleWidth = messageWidth + 44;

    push();
    fill(98, 63, 42);
    rect(bubble_Ctr_x, bubbleCtr_y, bubbleWidth, bubbleHeight, 10);
    pop();
  }
  
  setPosition(previousBubbleBottom) {
    this.startPos_y = previousBubbleBottom + dialogSpace;
  }
}//I construct this class with the help from chatGPT

class Message {
  constructor(message, isWord) {
    this.message = message;
    this.startPos_x = 340;
    this.startPos_y = 0;
    this.pos_x = 0;
    this.pos_y = 0;
    this.isWord = isWord;
    this.textContent='';
    this.bubbleHeight = 0;
    
    for(const Word of this.message){
        this.textContent  += Word.character;
    }
    console.log(this.textContent);
    this.calculateBubbleHeight();
  }

  calculateBubbleHeight() {
    if (this.isWord) {
      this.bubbleHeight = int(textWidth(this.textContent) / sentTextWidth) * lineSpace + bubbleFrame * 3;
    } else {
      let lines = this.message.length / maxCharPerLine;
      this.bubbleHeight = lines * lineSpace + 20;
    }
  }

  displayShape() {
    let cnt = 0;
    for (const Word of this.message){
      this.pos_x = this.startPos_x - int(cnt % maxCharPerLine) * wordSpace;
      this.pos_y = int(cnt / maxCharPerLine) * lineSpace + this.startPos_y;
      Word.display(this.pos_x, this.pos_y);
      cnt++;
    }   
  }
  
  displayText(){
    this.pos_x = width-replyPos_x- sentTextWidth/2;
    this.pos_y = this.startPos_y;
    push();
    textSize(12);
    textAlign(RIGHT);
    text(this.textContent, this.pos_x , this.pos_y - lineSpace, sentTextWidth);
    pop();
  }
  
  bubbleSentText(){
    let bubbleHeight = int(textWidth(this.textContent) / sentTextWidth) * lineSpace  +  bubbleFrame*3;
    let bubbleWidth = (textWidth(this.textContent) >= sentTextWidth ? sentTextWidth : textWidth(this.textContent)) + 20;
    let bubbleCtrPos_x = this.startPos_x - bubbleWidth / 2 + 16;
    let bubbleCtrPos_y = this.startPos_y  + (int(textWidth(this.textContent) / sentTextWidth)) * 16/2 -10;
    
    push();
    fill(193, 0, 26);
    rect(bubbleCtrPos_x, bubbleCtrPos_y, bubbleWidth, bubbleHeight, 10);
    pop();
  }

  bubbleSentShape() {
    let lines = this.message.length / maxCharPerLine;
    let bubbleHeight = lines * lineSpace + 20;
    let bubbleCtr_y = this.startPos_y + (lines * lineSpace) / 2 - 4;
    
    let bubble_Ctr_x;
    let messageWidth;
    
    if (this.message.length < maxCharPerLine){
      bubble_Ctr_x = this.startPos_x - (int(this.message.length % maxCharPerLine) * (wordSpace-0))/2 ;
      messageWidth = int(this.message.length % maxCharPerLine-1)* wordSpace;
    }else{
      bubble_Ctr_x = this.startPos_x - 12 * (wordSpace - 0)/2;
      messageWidth = (maxCharPerLine-1) * wordSpace;
    }
    
    let bubbleWidth = messageWidth + 44;
    
    push();
    fill(193, 0, 26);
    rect(bubble_Ctr_x, bubbleCtr_y, bubbleWidth, bubbleHeight, 10);
    pop();
  }

  setPosition(previousBubbleBottom) {
    this.startPos_y = previousBubbleBottom + dialogSpace;
  }
}

class Word {
  constructor(character) {
    this.shape = int(random(0, 3));
    this.shapeColor = color(random(360), random(10, 80), 100);
    this.shapeSize = 12;
    this.character = character;
  }

  display(x, y) {
    push();
    fill(this.shapeColor);
    switch (this.shape) {
      case 0:
        rect(x, y, this.shapeSize, this.shapeSize);
        break;
      case 1:
        circle(x, y, this.shapeSize);
        break;
      case 2:
        triangleShape(x, y, this.shapeSize);
        break;
    }
    pop();
  }
}

function keyTyped() {
  if (keyCode !== ENTER) {
    typedMessage += key;
  }
}

function keyPressed() {
  if (keyCode === ENTER) { // send message
    scores++;
    for (let i = 0; i < typedMessage.trim().length; i++) {
      messageType.push(new Word(typedMessage.trim()[i])); // 建立输入数组
    }

    let newMessage;
    if (scores <= threshold_A) {
      newMessage = new Message([...messageType], true); 
      let replyText = reply[int(random(0, reply.length))];
      let replyMessageInstance = new MessageReply(replyText.split('').map(char => new Word(char)), true); // Convert reply text to Word instances
      replyMessage.push(replyMessageInstance);
    } 
    else if(scores > threshold_B) {
      newMessage = new Message([...messageType], true); 
      let replyText = reply[int(random(0, reply.length))];
      let replyMessageInstance = new MessageReply(replyText.split('').map(char => new Word(char)), false); // Convert reply text to Word instances
      replyMessage.push(replyMessageInstance);
      console.log("win");
    }
    else{
      newMessage = new Message([...messageType], false); 
      let replyText = reply[int(random(0, reply.length))];
      let replyMessageInstance = new MessageReply(replyText.split('').map(char => new Word(char)), true); // Convert reply text to Word instances
      replyMessage.push(replyMessageInstance);
    }

    if (messageHistory.length > 0) {
      let lastMessage = messageHistory[messageHistory.length - 1];
      newMessage.setPosition(lastMessage.startPos_y + lastMessage.bubbleHeight + dialogSpace);
      let lastReply = replyMessage.length > messageHistory.length - 1 ? replyMessage[messageHistory.length - 1] : null;
      if (lastReply) {
        newMessage.setPosition(lastReply.startPos_y + lastReply.bubbleHeight + dialogSpace);
      }
    } else {
      newMessage.setPosition(messageStartY);
    }
    messageHistory.push(newMessage);

    if (replyMessage.length > 0) {
      let lastMessage = messageHistory[messageHistory.length - 1];
      let replyMessageInstance = replyMessage[replyMessage.length - 1];
      replyMessageInstance.setPosition(lastMessage.startPos_y + lastMessage.bubbleHeight + dialogSpace);
    }

    messageType = []; 
    typedMessage = "";
    scrollOffset = -((messageHistory[messageHistory.length - 1].startPos_y + messageHistory[messageHistory.length - 1].bubbleHeight) - 400); 
  }
  if (keyCode === BACKSPACE) { // delete last character
    if (typedMessage.length > 0) {
      typedMessage = typedMessage.slice(0, -1);
    }
  }
}

function playGame() {
  //background(0, 0, 20, 30);
 image(img[3],0,0,400,600)
  if (millis() - lastBlinkTime > cursorBlinkInterval) {
    cursorBlink = !cursorBlink;
    lastBlinkTime = millis();
  }
  colorMode(HSB, 360, 100, 100, 100);

  push();
  translate(0, scrollOffset);
  for (let i = 0; i < messageHistory.length; i++) {
    if (!messageHistory[i].isWord) {
      messageHistory[i].bubbleSentShape();
      messageHistory[i].displayShape();
    } else {
      messageHistory[i].bubbleSentText();
      messageHistory[i].displayText();
    }

    if (replyMessage[i]) {
      if (!replyMessage[i].isWord) {
        replyMessage[i].bubbleReplyShape();
        replyMessage[i].displayShape();
      } else {
        replyMessage[i].bubbleReplyText();
        replyMessage[i].displayText();
      }
    }
  }
  pop();

  cursorDisplay();
  //playHint();
}

function cursorDisplay(){
   fill(255);
  textSize(18);
  textAlign(LEFT, BASELINE)
  textWrap(CHAR);
  text(typedMessage, 160, height - 50, 200, 150);
  if (cursorBlink) {
    //let cursorX = textWidth(typedMessage) 
    //+ 80;
    push()
    strokeWeight(4);
    stroke(30, 100, 100)
    let cursorX_ = 60 + textWidth(typedMessage) % 200;
    let cursorY_ = height - 110 + Math.floor(textWidth(typedMessage) / 200) * 24;
    line(cursorX_, cursorY_ - 15, cursorX_, cursorY_);
    pop()
  } 
}

function mouseWheel(event) {
    if (messageHistory.length > 0) {
      // 获取最后一条消息
      const lastMessage = messageHistory[messageHistory.length - 1];
  
      // 检查最后一条消息是否有有效的属性
      if (lastMessage && lastMessage.startPos_y !== undefined && lastMessage.bubbleHeight !== undefined) {
        scrollOffset += event.delta;
        scrollOffset = constrain(
          scrollOffset,
          -((lastMessage.startPos_y + lastMessage.bubbleHeight) - 400), // 限制滚动范围
          0
        );
      } else {
        console.error("Last message is missing required properties.");
      }
    } else {
      console.error("messageHistory is empty.");
    }
  }
  

function triangleShape(x, y, size) {
  let radius = size / Math.sqrt(3);

  let x1 = x + radius * cos(PI / 6);
  let y1 = y - radius * sin(PI / 6);

  let x2 = x - radius * cos(PI / 6);
  let y2 = y - radius * sin(PI / 6);

  let x3 = x;
  let y3 = y + radius;

  triangle(x1, y1, x2, y2, x3, y3);
}

function mouseClicked() {
  console.log(mouseX, mouseY);
  if(gameState == 0 && (mouseX > 130 && mouseX<480)&&(mouseY>480 && mouseY<540)){
    gameState = 1
  }
  
  if (gameState == 1 && (mouseX > 100 && mouseX<180)&&(mouseY>445 && mouseY<485)){
    gameState = 2;
  }
  else if (gameState == 1 && (mouseX > 220 && mouseX<300) && (mouseY>445 && mouseY<485)){
    gameState = 0;
  }
  
  if (gameState == 2 && (mouseX > 300 && mouseX<510)&&(mouseY>360 && mouseY<565)){
    gameState = 3;
  }
  
  if (gameState == 3 && (mouseX > 100 && mouseX<300)&&(mouseY>284 && mouseY<344)){
    clearChatHistory();
    gameState = 0;
    
  }
  
  if (gameState == 3 && (mouseX > 100 && mouseX<300)&&(mouseY>370 && mouseY<430)){
    gameState = 2;
  }
}

function clearChatHistory(){
  messageType = []; 
  messageHistory = [];
  replyMessage = [];
  scores = 0;
}
