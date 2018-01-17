function reduce(arr, fn, initial, index) {
	if (index === undefined)
		index = 0;
	if (arr.length === index)
		return initial;
	//initial = fn(initial, arr[0]);
	else{
		let modInitial = fn(initial, arr[index], index, arr);
		return reduce(arr, fn, modInitial, ++index);
	}
}

function fn(prev, curr, index, arr){
	return prev+curr;
}

let test0 = reduce([1,2,3], fn, 0);
console.log("passed basic case: ", test0 === 6 );

let test1 = reduce([], fn, 0);
console.log("Empty array: ", test1 === 0 );

let test2 = reduce([0,0,0], fn, 0);
console.log("All zeroes: ", test2 === 0 );

module.exports = reduce;
