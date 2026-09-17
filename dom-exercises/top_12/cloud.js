let p = document.getElementById("myParagraph").innerText;
let displayer = document.getElementById("myWordCloud");

function checkMost(text) {
    const arrText = text.match(/[a-zA-Z']+/g) || [];
    const wordCount = {};
    
    for (let i = 0; i < arrText.length; i++) {
        const word = arrText[i].toLowerCase();
        if (wordCount[word]) {
            wordCount[word]++;
        } else {
            wordCount[word] = 1;
        }
    }
    
    const sortedWords = Object.keys(wordCount).sort((a, b) => {
        return wordCount[b] - wordCount[a];
    });
    
    const top12 = sortedWords.slice(0, 12);
    
    let div = '<div">';
    
    for (let i = 0; i < top12.length; i++) {
        const word = top12[i];
        const fontSize = 64 - (i * 4);
        const colors = ["blue", "black", 'brown', 'gray', 'green', 'violet', 'indigo', 'red', 'purple', 'pink', 'orange', "olive"]
        
        div += `<span style="font-size: ${fontSize}px; color: ${colors[i]}; padding: 5px 10px; font-weight: bold;">${word}</span>`;
    }
    
    div += '</div>';
    return div;
}

displayer.innerHTML = checkMost(p);