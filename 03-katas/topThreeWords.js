function topThreeWords(text) {
    let textArray = text.split(" ");
    let wordCount = {};
    
    for (let i = 0; i < textArray.length; i++) {
        if (textArray[i].length > 0) {
            if (wordCount[textArray[i]]) {
                wordCount[textArray[i]]++;
            } else {
                wordCount[textArray[i]] = 1;
            }
        }
    }
    
    let sorted = Object.keys(wordCount).sort(function(a, b) {
        return wordCount[b] - wordCount[a];
    });
    
    let FirstThree = sorted.slice(0, 3);
    
    return FirstThree;
}

console.log(topThreeWords("In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income."))