function FindLongestWord(str) {
  let arrStr = str.split(" ");
  let longestWord = arrStr[0];
  for(let i = 0; i < arrStr.length; i++) {
    if(i !== 0 && arrStr[i].length > longestWord.length) {
      longestWord = arrStr[i]
    }
  }
  return longestWord;
}

console.log(FindLongestWord("this is the best totototototto tatataa project"))