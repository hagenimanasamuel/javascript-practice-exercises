const person1 = {
  name: "John",
  age: 30,
  profession: "Developer"
};

function Person(name, age, profession) {
  this.name = name;
  this.age = age;
  this.profession = profession;
}
const person2 = new Person("Samuel", 20, "Developer");