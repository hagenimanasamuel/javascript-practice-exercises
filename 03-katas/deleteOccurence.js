function deleteNth(arr, n) {
    const counts = {};
    const result = [];
    
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        
        if (counts[num] === undefined) {
            counts[num] = 1;
        } else {
            counts[num]++;
        }
        
        if (counts[num] <= n) {
            result.push(num);
        }
    }
    
    return result;
}

console.log(deleteNth([1,2,3,1,2,1,2,3], 2));
console.log(deleteNth([20,37,20,21], 1));
console.log(deleteNth([1,1,1,1], 2));
console.log(deleteNth([1,2,3,4,5], 3));
console.log(deleteNth([], 5));