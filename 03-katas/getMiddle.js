function getMiddle(s) {
    let length = s.length;
    let middle = Math.floor(length / 2);
    
    if (length % 2 === 0) {
        return s[middle - 1] + s[middle];
    } else {
        return s[middle];
    }
}

console.log(getMiddle("test"));
// console.log(getMiddle("testing"));