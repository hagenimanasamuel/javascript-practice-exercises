let str = "javascript"; 
let arrStr = str.split("");
for(let i = 0; i < arrStr.length; i++) {
    if(i % 2 === 1) {
        arrStr[i] = arrStr[i].toUpperCase()
    }
}

console.log(arrStr.join(""))