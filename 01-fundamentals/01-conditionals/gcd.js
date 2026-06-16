let n1 = 3;
let n2 = 8;
let temp = n1;

while (n1 !== n2) {
    if (n1 > n2) {
        temp = n1 - n2;
        n1 = temp;
    } else {
        temp = n2 - n1;
        n2 = temp;
    }
} 

console.log("The GCD is " + temp);