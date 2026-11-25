function reverseVowels(str) {
    const vowels = new Set(["a", "i", "u", "e", "o", "A", "I", "U", "E", "O"]);
    const arr = str.split("");
    const includedVowels = arr.filter(vow => vowels.has(vow));
    const reversedVowels = includedVowels.reverse();
    let newStr = "";
    for (let i = 0; i < arr.length; i++) {
        if (vowels.has(arr[i])) {
            newStr += reversedVowels[0];
            reversedVowels.shift();
        } else {
            newStr += arr[i];
        }
    }
    return newStr;
}

console.log(reverseVowels("Hello!"));