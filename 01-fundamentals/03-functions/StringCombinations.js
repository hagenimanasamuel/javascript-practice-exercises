function stringCombinations(str) {
  const arrStr = str.split('');
  let combined = [];
  
  for(let i = 0; i < arrStr.length; i++) {
    let subCombined = '';
    for(let j = i; j < arrStr.length; j++) {
      subCombined += arrStr[j];
      combined.push(subCombined);
    }
  }
  
  return combined;
}

console.log(stringCombinations("dog"));