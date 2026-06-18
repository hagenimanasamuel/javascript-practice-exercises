function array_clone(arr) {
    let clonedArr = [...arr]
    return clonedArr;
}

console.log(array_clone([2,3,4,5,6,7]))