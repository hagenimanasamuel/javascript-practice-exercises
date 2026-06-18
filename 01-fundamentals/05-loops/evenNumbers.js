let n1 = 22; 
let evenNumbers = [];
for(let i = 1; i  <= 22; i++) {
    if(i % 2 === 0) {
        evenNumbers.push(i);
    } 
}

console.log("Even Numbers between 1 and " + n1 + " are: " + evenNumbers.join() )