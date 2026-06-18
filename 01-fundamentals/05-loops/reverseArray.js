let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
let reversedArr = [];
for(let i = arr.length; i >= 0; i--) {
    reversedArr.push(arr[i])
}

console.log(reversedArr.join(" "))