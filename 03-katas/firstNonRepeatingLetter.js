function firstNonRepeatingLetter(s) {
    lowerS = s.toLowerCase();
  for(let i = 0; i < s.length; i++) {
    if(lowerS.indexOf(lowerS[i]) === lowerS.lastIndexOf(lowerS[i])) {
        return s[i];
    }
  }
    return "";
}

console.log(firstNonRepeatingLetter('Stress'))