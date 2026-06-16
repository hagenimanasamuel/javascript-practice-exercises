let currentTime = new Date();
let currentHour = currentTime.getHours();
if(currentHour < 12) {
    console.log("Good morning!");
} else if(currentHour < 18) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}