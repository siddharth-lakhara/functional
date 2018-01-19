let count = 0;
function repeat(operation, num) {
	if (num <= 0)
		return;

	operation();
	count++;

	if (count === 5){
		count = 0;
		setTimeout(function() {
			repeat(operation, --num);
		});
	}
	else{
		repeat(operation, --num);
	}
}

module.exports = repeat;
