function solution(text, markers) {
    const textArr = text.split('');
    let newText = '';
    
    for (let i = 0; i < textArr.length; i++) {
        let shouldStop = false;
        
        for (let j = 0; j < markers.length; j++) {
            if (textArr[i] === markers[j]) {
                shouldStop = true;
                break;
            }
        }
        
        if (shouldStop) {
            while (i < textArr.length && textArr[i] !== '\n') {
                i++;
            }
        } else {
            newText += textArr[i];
        }
    }
    
    return newText;
}

console.log(solution('aa !bb # cc dd', ['#']));