function toNato(words) {
    const arrTxt = words.split(' ');
    let newWord = "";
    
    for (let i = 0; i < arrTxt.length; i++) {
        let currentWord = arrTxt[i];
        
        for (let j = 0; j < currentWord.length; j++) {
            const char = currentWord[j].toUpperCase();
            
            if (char >= 'A' && char <= 'Z') {
                newWord += NATO[char] + " ";
            } else {
                newWord += char + " ";
            }
        }
    }
    
    return newWord.trim();
}

console.log(toNato("go for it!"));