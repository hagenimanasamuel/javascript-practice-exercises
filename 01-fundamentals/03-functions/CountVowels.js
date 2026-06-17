function CountVowels(str) {
  const vowels = 'aiueoAIUEO';
  let count = 0;
  
  for(let i = 0; i < str.length; i++) {
    if(vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

console.log(CountVowels("sample sentence to capitalise"));

// Smaller way
function CountVowels(str) {
  const matches = str.match(/[aiueo]/gi);
  return matches ? matches.length : 0;
}

console.log(CountVowels("sample sEntence to cApitalise"));