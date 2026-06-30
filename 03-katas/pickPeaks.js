function pickPeaks(arr) {
    const result = {pos: [], peaks: []};
    
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i] > arr[i - 1]) {
            let j = i;
            while (j < arr.length - 1 && arr[j] === arr[j + 1]) {
                j++;
            }
            if (j < arr.length - 1 && arr[j] > arr[j + 1]) {
                result.pos.push(i);
                result.peaks.push(arr[i]);
                i = j;
            }
        }
    }
    
    return result;
}

console.log(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1]));