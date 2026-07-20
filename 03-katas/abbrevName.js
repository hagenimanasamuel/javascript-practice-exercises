function abbrevName(name){
  let arrName = name.split(" ");
  if(arrName.length === 0) return "";
  let abbrev = `${arrName[0][0].toUpperCase()}.${arrName[1][0].toUpperCase()}`;
  
  return abbrev;
}

console.log(abbrevName("hagenimana samuel"));