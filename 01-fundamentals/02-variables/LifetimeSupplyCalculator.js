const age = 27;
const maxAge = 100;
const amountPerDay = 3;
const yearsRemaining = maxAge - age;
const daysRemaining = yearsRemaining * 365;
const totalAmount = daysRemaining * amountPerDay;
console.log(`You will need ${totalAmount} snacks to last you until the ripe age of ${maxAge}.`);