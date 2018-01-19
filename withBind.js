module.exports = function(namespace) {
// function fn(namespace){
	/*function binderFn(){
		// console.log(null,namespace.concat(arguments));
		String.prototype.concat(arguments);
	}

	let retObject = binderFn.bind(null, namespace);
	let argArray = Array.prototype.slice.call(arguments);
	console.log.bind(retObject, argArray);

	//return retObject(argArray);
	*/
	return console.log.bind(console, namespace);
};
/*

test:

Returns concated two strings: ("siddharth", "Lakhara");
If one string is empty: ("","siddharth");
If both string is empty: ("","");


*/
