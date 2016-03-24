var person ={
	name:'chandan',
	age:24
};
var personJson=JSON.stringify(person);
console.log(personJson);
console.log(typeof personJson);
var personObject=JSON.parse(personJson);
console.log(personObject.name);
console.log(typeof personObject);
console.log("CHALANGE AREA");
var animal='{"name":"cahndan"}';
var animalObject=JSON.parse(animal);
console.log(typeof animalObject);
animalObject.age=24;
console.log(animalObject.age);
var animal=JSON.stringify(animalObject);
console.log(animal);
console.log(typeof animal);
