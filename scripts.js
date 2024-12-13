document.addEventListener("DOMContentLoaded", () => {
    const listItems = document.querySelectorAll("#link-list li");
    const embedArea = document.getElementById("embed-area");
    const textArea = document.getElementById("text-area");

    listItems.forEach(item => {
        item.addEventListener("click", () => {
            const sketchName = item.getAttribute("data-sketch-name");
            const textContent = item.getAttribute("data-text");

            if (sketchName) {
                clearP5Sketch(); // 确保清理旧的 p5 实例
                embedArea.innerHTML = ''; // 清空嵌入区域

                if (sketchName.match(/\.(jpeg|jpg|gif|png)$/)) {
                    // 加载图片
                    embedArea.innerHTML = `<img src="${sketchName}" alt="Image" style="width:100%; height:auto;">`;
                } else {
                    // 加载新的 p5.js 文件
                    const script = document.createElement('script');
                    script.src = sketchName; 
                    script.type = 'text/javascript';
                    script.onload = () => {
                        console.log(`✅ ${sketchName} loaded successfully!`);
                        window.p5.instance = new p5(); // 创建新 p5 实例
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
    return new Promise((resolve) => {
        console.log("🔄 Clearing previous p5.js sketch...");
        
        // 移除旧 canvas
        const oldCanvas = document.querySelectorAll('canvas');
        oldCanvas.forEach(canvas => canvas.remove());
        console.log("✅ Old canvas removed.");
        
        // 移除旧 p5.js 实例
        if (window.p5 && window.p5.instance) {
            window.p5.instance.remove();
            console.log("✅ Previous p5.js instance removed.");
        } else {
            console.warn("⚠️ No active p5.js instance found.");
        }

        // 确保清理完成后 resolve
        resolve();
    });
}


