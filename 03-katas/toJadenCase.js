function toJadenCase(str) {
    if (str === "") return "";
    
    const words = str.split(' ');
    let result = [];
    
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const capitalized = word[0].toUpperCase() + word.slice(1);
        result.push(capitalized);
    }
    
    return result.join(' ');
}

console.log(toJadenCase("How can mirrors be real if our eyes aren't real"));
console.log(toJadenCase("hello world"));
console.log(toJadenCase("jaden smith is awesome"));
console.log(toJadenCase(""));
console.log(toJadenCase("a"));