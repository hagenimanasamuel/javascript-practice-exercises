var maxSequence = function (arr) {
    if (arr.length === 0) {
        return 0
    } else {
        let max = 0;
        for (let i = 0; i < arr.length; i++) {
            let currentArr = [];
            for (let j = i; j < arr.length; j++) {
                currentArr.push(arr[j]);
                let currentSum = currentArr.reduce((acc, curr) => {
                    return acc + curr;
                })
                if (currentSum > max) {
                    max = currentSum;
                }
            }
        }
        return max
    }
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))