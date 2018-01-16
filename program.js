function upperCaser(input){
   return input.toUpperCase();
}


// TDD
console.log("return SIDD for sidd: ", upperCaser("sidd") === "SIDD" );
console.log("return S2DD for s2dd: ", upperCaser("s2dd") === "S2DD" );

module.exports = upperCaser;
