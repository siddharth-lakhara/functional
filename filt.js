function getShortMessages(messageObjArray){
	return messageObjArray.filter(function(messageObj) {
		return messageObj.message.length < 5;  // length changed to 5 for test cases
	}).map(function(messageObj){
		return messageObj.message;
	});
}

msg = [{message: "Si"},{message: "Lakh"},{message: "asdfggh"}];
test0 = getShortMessages(msg);
function verifyOutput(outputArray, testArray){
	for (let i=0; i<outputArray.length; i++){
		if (outputArray[i] != testArray[i])
			return false;
	}
	return true;

}

console.log("Returns messages with length less than 5: ", verifyOutput(test0, ["Si", "Lakh"]));

module.exports = getShortMessages;
