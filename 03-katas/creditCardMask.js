function maskify(cc) {
    const arr = cc.split('');
    let newStr = '';
    
    for (let i = 0; i < arr.length; i++) {
        if (i < arr.length - 4) {
            newStr += '#';
        } else {
            newStr += arr[i];
        }
    }
    
    return newStr;
}