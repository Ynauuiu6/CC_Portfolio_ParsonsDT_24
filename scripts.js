document.addEventListener("DOMContentLoaded", () => {
    const listItems = document.querySelectorAll("#link-list li");
    const embedArea = document.getElementById("embed-area");
    const textArea = document.getElementById("text-area");

    listItems.forEach(item => {
        item.addEventListener("click", () => {
            const sketchName = item.getAttribute("data-sketch-name");
            const textContent = item.getAttribute("data-text");

            if (sketchName) {
                clearP5Sketch();
                embedArea.innerHTML = '';
                if (sketchName.match(/\.(jpeg|jpg|gif|png)$/)) {
                    embedArea.innerHTML = `<img src="${sketchName}" alt="Image" style="width:100%; height:auto;">`;
                } else {
                    
                    const script = document.createElement('script');
                    script.src = sketchName; 
                    script.type = 'text/javascript';
                    script.onload = () => {
                        console.log(`✅ ${sketchName} loaded successfully!`);
                        new p5();
                    };
                    script.onerror = () => console.error(`❌ Failed to load ${sketchName}`);
                    embedArea.appendChild(script);
                }
            } else {
                embedArea.innerHTML = "<p>No content available for this item.</p>";
            }

            if (textContent) {
                textArea.textContent = textContent;
            }
        });
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const yuanningElement = document.getElementById("yuanning");
    const messages = [
        { text: "need some sleep🥱", bgColor: "#ff5733" }, 
        { text: "miss her cat🐱", bgColor: "#ff9c33" },    
        { text: "love penguins🐧", bgColor: "#ffd833" } , 
        { text: "is a designer🧑‍🎨", bgColor: "#78e919" } ,
        { text: "is a HCI researcher👩‍💻", bgColor: "#19c9e9"},
        { text: "enjoy cooking🍳", bgColor: "#6359ff"},
        { text: "need a cup of coffee☕️", bgColor: "#ff68ab"}
    ];

    yuanningElement.addEventListener("mouseenter", () => {
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        
        yuanningElement.style.setProperty("--bg-color", randomMessage.bgColor);
        yuanningElement.setAttribute("data-hover-content", randomMessage.text);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const listItems = document.querySelectorAll('ul li');
    const textDisplay = document.getElementById('text-area');
  
    listItems.forEach(item => {
      item.addEventListener('click', function() {
        const textData = this.getAttribute('data-text');
        const paragraphs = textData.split('|');
        textDisplay.innerHTML = ''; // 清空之前的内容
  
        paragraphs.forEach(paragraph => {
          const p = document.createElement('p');
          p.textContent = paragraph.trim(); // 去除段落首尾可能的空白
          textDisplay.appendChild(p);
        });
      });
    });
  });
  
  function clearP5Sketch() {
    console.log("🔄 Clearing previous p5.js sketch...");
    const oldCanvas = document.querySelectorAll('canvas');
    oldCanvas.forEach(canvas => canvas.remove());

    if (window.p5 && window.p5.instance) {
        window.p5.instance.remove();
        console.log("Previous p5.js instance removed.");
    } else {
        console.warn("No active p5.js instance found.");
    }
}

