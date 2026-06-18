function factorial(n) {
    let fact = 1;
    if (n === 0) {
        fact = 1
    }
    for (let i = n; i > 0; i--) {
        fact *= i;
    }

    return fact;
}

console.log(factorial(2));

// Alternative solution using recursion
const findFactorial = (n) => {
    if(n === 1 || n === 0) {
        return 1
    }
    return n * findFactorial(n -1);
}

console.log(findFactorial(5));

// Alternative solution using while loop
function factorial(n) {
    let fact = 1;
    while(n !== 0) {
        fact *= n;
        n--;
    }
    return fact;
}

console.log(factorial(0))