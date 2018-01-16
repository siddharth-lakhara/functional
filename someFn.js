
function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function (submittedUsersElem){
      return goodUsers.some(function (goodUsersElem){
        return submittedUsersElem.id === goodUsersElem.id;
      });
    });
  };
}

let goodUsersArray = [{id:1},{id:2}];
let submittedUsersArray1 = [{id:1}];
let submittedUsersArray2 = [{id:1},{id:2},{id:3}];

console.log("Correct array, returns true: ", checkUsersValid(goodUsersArray)(submittedUsersArray1) === true);
console.log("failing case, returns false: ", checkUsersValid(goodUsersArray)(submittedUsersArray2) === false);
module.exports = checkUsersValid;
