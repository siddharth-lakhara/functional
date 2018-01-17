function duckCount() {
	let argArray = Object.values(arguments);
	// let argArray = Array.prototype.slice.call(arguments);
	return argArray.filter(function (argArrayObject){
		//return Object.prototype.hasOwnProperty.call(argArrayObject,"quack") === true;
		// return argArrayObject.hasOwnProperty("quack") === true;
		return Object.prototype.hasOwnProperty(argArrayObject, "quack") === true;
	}).length;
}

let notDuck = Object.create({quack: true});
let duck = {quack: true};
console.log("Base case: ", duckCount(duck, notDuck) === 1);

let notDuck0 = Object.create({quack: true});
let notDuck1 = Object.create({quack: false});
let duck0 = {quack: true};
console.log("Variation in base case: ", duckCount(duck0, notDuck0, notDuck1) === 1);

let notDuck10 = Object.create({});
let notDuck11 = Object.create({quack: false});
let duck1 = {quack: true};
console.log("One empty object ", duckCount(duck1, notDuck11, notDuck10) === 1);

let notDuck20 = Object.create({});
let notDuck21 = Object.create({});
let duck2 = {};
console.log("All empty object ", duckCount(duck2, notDuck21, notDuck20) === 0);

module.exports = duckCount;
