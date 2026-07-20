function isIsogram(str) {
    const arr = str.toLowerCase().split('');
    let result = true;
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                result = false;
                break;
            }
        }
        if (!result) break;
    }
    
    return result;
}


console.log(isIsogram("Dermatoglyphics"));