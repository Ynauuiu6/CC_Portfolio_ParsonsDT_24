document.addEventListener("DOMContentLoaded", () => {
    const listItems = document.querySelectorAll("#link-list li");
    const embedArea = document.getElementById("embed-area");
    const textArea = document.getElementById("text-area");

    listItems.forEach(item => {
        item.addEventListener("click", () => {
            const sketchUrl = item.getAttribute("data-sketch-url");
            const textContent = item.getAttribute("data-text");

            if (sketchUrl && textContent) {
                embedArea.innerHTML = `
                    <iframe 
                        src="${sketchUrl}" 
                        width="100%" 
                        height="100%" 
                        style="border: none;" 
                        allowfullscreen>
                    </iframe>`;
                textArea.textContent = textContent;
            } else {
                embedArea.innerHTML = "<p>No content available for this item.</p>";
                textArea.textContent = "";
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

