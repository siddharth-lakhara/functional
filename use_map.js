
function doubleAll(numbers){
  let result = numbers.map(numbers => numbers*2);
  return result;
}

// TDD
function verify_output(output, test_arr){
  for (let i=0; i<output.length; i++){
    if (output[i] != test_arr[i])
      return false;
  }
  return true;
}

test0 = doubleAll([1,2,3]);
console.log("Returns double of [1,2,3] as [2,4,6]: ", verify_output(test0, [2,4,6]) === true);

module.exports = doubleAll;
