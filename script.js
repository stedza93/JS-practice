//function constructor
var john = {
  name: "John",
  yearOfBirth: 1990,
  job: "teacher"
};
var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};
Person.prototype.calculateAge = function() {
  console.log(this.name,'is',2016 - this.yearOfBirth, 'years old');
};
Person.prototype.lastName = "Smith";
// "new" kreira novi prazan objekat i this upucuje ka tom praznom objektu
var Marie = new Person("Marie", 1988, "student");
var Jane = new Person("Jane", 1983, "teacher");
console.log("Person", Person);
console.log("Marie", Marie);
Marie.calculateAge();
Jane.calculateAge();
console.log(Marie.lastName);
console.log(Jane.lastName);

