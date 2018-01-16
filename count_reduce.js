
function countWords(inputWords) {
  return inputWords.reduce(function (retObject, inputWordsElem){
    if (retObject[inputWordsElem] === undefined)
      retObject[inputWordsElem] = 1;
    else {
      retObject[inputWordsElem]++;
    }

    return retObject;
  }, {});

}

function verifyInput(retOutput, testInput){
  for (let prop in retOutput){
    if (retOutput[prop] != testInput[prop])
      return false;
  }
  return true;
}

test0 = countWords(["apple", "mango", "apple", "banana"]);
console.log("works for base case: ",verifyInput(test0, { apple: 2, mango: 1, banana: 1 }) === true);
/*
test1 = countWords(["apple", "apple", "apple", "apple"]);
console.log("Variation in base case: ",verifyInput(test1, { apple: 4 }) === true);

test2 = countWords([]);
console.log("Empty array: ",verifyInput(test2, { }) === true);

test3 = countWords(["apple", "mango", "banana", "grape"]);
console.log("all different elementsc: ",verifyInput(test2, { apple:1, mango:1, banana:1, grape:1}) === true);
*/
module.exports = countWords;
