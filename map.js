
// Our map function will take in two arguments:
// An array to map
// A callback function
// The map function will return a new array based on the results of the callback function.

const words = ["ground", "control", "to", "major", "tom"];

const assertArraysEqual = function(arrayA, arrayB) {
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
  for (let index of arrayA) {
    if (arrayA[index] !== arrayB[index]) {
      return false;
    }
  }

  return true;
};


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(words,[ 'g', 'c', 't', 'm', 't' ]);

