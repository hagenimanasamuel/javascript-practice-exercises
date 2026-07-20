function lottery(str) {
    const arr = str.split('');
    let numbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (!isNaN(arr[i])) {
            numbers.push(arr[i]);
        }
    }
    return [...new Set(numbers)].join('');
}

console.log(lottery("abc123def4kjhgytuy5666"));