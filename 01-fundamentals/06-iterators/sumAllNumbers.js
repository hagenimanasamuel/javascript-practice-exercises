const nums3 = [5, 10, 15, 20, 25];
let sum = 0;
nums3.forEach(n => {
    sum += n;
})

console.log(sum)

// Alternative solution using reduce method
const total = nums3.reduce((acc, n) => acc + n, 0);
console.log(total)