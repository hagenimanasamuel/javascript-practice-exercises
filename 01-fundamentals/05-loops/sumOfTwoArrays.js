let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];
let sum1 = 0;
let sum2 = 0;

for(let i = 0; i < arr_1.length; i++) {
    sum1 += arr_1[i];
    sum2 += arr_2[i];
}

console.log("Sum of arr_1:", sum1);
console.log("Sum of arr_2:", sum2);
console.log("Total combined sum:", sum1 + sum2);
