let slice = Array.prototype.slice;

function logger(namespace) {
	return function() {
		let argArray = Array.prototype.slice.call(arguments);
		// console.log(argArray);
		// console.log(namespace);
		//let retObject.apply(null, [namespace].concat(argArray));
		//console.log(retObject);
		console.log.apply(null, [namespace].concat(argArray));
		// let retObject = "";
		// retObject = Function.prototype.apply(retObject, [namespace].concat(argArray));
		// return retObject;
	};
}
//
// let a = logger("sid")("lak awesome");
// console.log(a);
module.exports = logger;
