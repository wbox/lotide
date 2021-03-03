
// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\uD83D\uDE00 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\uD83D\uDE1E Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arrayA, arrayB) {
  // Check if the parameters are arrays and have the same size
  if ( (!Array.isArray(arrayA) || !Array.isArray(arrayB)) || (arrayA.length !== arrayB.length) ) {
    return false;
  }
  // Check if the elements are equal
  for ( let i = 0; i < arrayA.length; i++) {
    return arrayA[i] === arrayB[i] ? true : false;
  }
};

// TEST CODE
/*
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("bla","bla1");
assertEqual(2,2);
assertEqual(234,342);
*/

assertEqual(eqArrays([1,2,3],[1,2,3]), true);
assertEqual(eqArrays([1,2,3],[1,2,3]), false);
assertEqual(eqArrays([1,2,3],[1,2]), true);
assertEqual(eqArrays([1,2,3],[1,2]), false);
