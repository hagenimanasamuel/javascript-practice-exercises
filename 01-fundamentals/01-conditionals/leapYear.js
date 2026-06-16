let yr = 2026;
if(yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0) {
    console.log(yr + " is a leap year");
} else {
    console.log(yr + " is not a leap year");
}