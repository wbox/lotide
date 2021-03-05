// FUNCTION IMPLEMENTATION
const assertArrayEqual = function(arrayA, arrayB) {
  if (eqArrays(arrayA,arrayB)) {
    console.log(`\uD83D\uDE00 Assertion Passed: ${arrayA} == ${arrayB}`);
  } else {
    console.log(`\uD83D\uDE1E Assertion Failed: ${arrayA} != ${arrayB}`);
  }
};

const eqArrays = function (arrayA, arrayB) {
  // Check if the parameters are arrays and have the same size
  if ( (!Array.isArray(arrayA) || !Array.isArray(arrayB)) || (arrayA.length !== arrayB.length) ) {
    return false;
  }
  // Check if the elements are equal
  for ( let i = 0; i < arrayA.length; i++) {
    if (!(arrayA[i] === arrayB[i])) {
      return false;
    }
  }
  return true;
};

// TEST CODE


assertArrayEqual([1,2,3],[1,"2",3]);
assertArrayEqual([1,2,3],[1,2,3]);
assertArrayEqual([1,2,3]);

