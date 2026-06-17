function capitalizeStr(str) {
  let arrStr = str.split(" ");
  let capitalizedStr = [];
  for(let i = 0; i < arrStr.length; i++) {
    capitalizedStr.push(arrStr[i][0].toUpperCase() + arrStr[i].slice(1));
  }
  return capitalizedStr.join(" ")
}

console.log(capitalizeStr("sample sentence to capitalise"))