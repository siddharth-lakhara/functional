function doNothing() {
  // empty function for TDD
}

function repeat (operation, num){
  while(num){
    count++;
    num--;
    return repeat(operation, num);
  }

}

// TDD
let count = 0;
repeat(doNothing,2)
console.log("Repeats 2 times: ", count === 2, count);


module.exports = repeat;
