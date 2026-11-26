function uniqueInOrder(iterable) {
  let prev = "";
  let updated = [];
  for(let i = 0; i < iterable.length; i++) {
    if(iterable[i] === prev) {
      continue;
    } else {
      prev = iterable[i];
      updated.push(prev);
      prev = iterable[i];
    }
  }
    return updated;
}

console.log(uniqueInOrder('A'));