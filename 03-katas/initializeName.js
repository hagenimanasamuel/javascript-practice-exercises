function initializeNames(name){
  let arrName = name.split(" ");
  if(arrName.length < 3) return name;
  let newName = [];
  for(let i = 0; i < arrName.length; i++) {
    if(i >= 1 && i < arrName.length - 1) {
      newName.push(`${arrName[i][0].toUpperCase()}.`)
    } else {
      newName.push(arrName[i]);
    }
  }
  
  return newName.join(" ");
}

console.log(initializeNames('Mutoni Betty Catherine Elina'))