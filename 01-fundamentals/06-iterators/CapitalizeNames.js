const names = ["john", "jane", "bob", "alice"];
console.log(names.map(name => name.split("")[0].toUpperCase() + name.slice(1)))