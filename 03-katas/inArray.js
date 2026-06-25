function inArray(array1, array2) {
    let i = 0;
    let result = [];
    
    while (i < array1.length) {
        for (let j = 0; j < array2.length; j++) {
            if (array2[j].includes(array1[i])) {
                result.push(array1[i]);
                break; 
            }
        }
        
        i++;
    }
    
    return result.sort();
}

console.log(inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]))