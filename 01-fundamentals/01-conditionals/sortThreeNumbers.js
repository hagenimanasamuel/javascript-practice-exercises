let n1 = 4;
let n2 = 2;
let n3 = -1;

if(n1 > n2) {
    if(n2 > n3) {
        console.log(n3 + " " + n2 + " " + n1);
    } else if(n1 > n3) {
        console.log(n2 + " " + n3 + " " + n1);
    } else {
        console.log(n2 + " " + n1 + " " + n3);
    }
} else {
    if(n1 > n3) {
        console.log(n2 + " " + n1 + " " + n3);
    } else if(n2 > n3) {
        console.log(n2 + " " + n3 + " " + n1);
    } else {
        console.log(n3 + " " + n2 + " " + n1);
    }
}