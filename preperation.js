function sayHi() {
	console.log(name);
	console.log(age);
	var name = "Lydia";
	const age = 21;
}

// sayHi();

function bark() {
	console.log("Woof!");
}

bark.animal = "dog";
function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

const member = new Person("Lydia", "Hallie");
Person.getFullName = function () {
	return `${this.firstName} ${this.lastName}`;
};

// console.log(member.Person.getFullName());
function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

const lydia = new Person("Lydia", "Hallie");
const sarah = Person("Sarah", "Smith");

console.log(lydia);
console.log(sarah);

function sum(a, b) {
	console.log(a + b);
}

sum(1, "2");
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);

function getAge(...args) {
	console.log(typeof args);
}

// getAge(21);

console.log(`o/p of [...'Lydia'] will be `, [..."Lydia"]);

console.log(parseInt("7*6", 8));

const person = {
	name: "Lydia",
	age: 21,
};

for (const item of Object.values(person)) {
	console.log(item);
}

(() => {
	let x = (y = 10);
	console.log(typeof x);
})();
console.log(typeof y);
