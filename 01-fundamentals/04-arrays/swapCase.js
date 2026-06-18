function swapCase(str) {
    let arrStr = str.split("")
    for(let i = 0; i < arrStr.length; i++) {
        if(arrStr[i] === arrStr[i].toUpperCase()) {
            arrStr[i] = arrStr[i].toLowerCase();
        } else {
            arrStr[i] = arrStr[i].toUpperCase();
        }
    }
    return arrStr.join("");
}

console.log(swapCase("this is The THE STiNG"))