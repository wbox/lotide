const assertArraysEqual = function(actuals, expected) {
  if (eqArrays(middle(actuals),expected)) {
    console.log(`\uD83D\uDE00 Assertion Passed: ${actuals} == ${expected}`);
  } else {
    console.log(`\uD83D\uDE1E Assertion Failed: ${actuals} != ${expected}`);
  }
};

const eqArrays = function(arrayA, arrayB) {
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

const middle = function(array) {
  const newArray = [];

  if (array.length <= 2) {
    return newArray;
  }

  if (array.length % 2 !== 0 ) {
    let i = Math.floor(array.length / 2);
    newArray.push(array[i]);
    return newArray;
  } else {
    let i = Math.floor(array.length / 2);
    newArray.push(i);
    newArray.push(i+1);
    return newArray;
  }

};

//console.log(middle([1,2,3,4,5]));
assertArraysEqual([1, 2, 3, 4, 5],[3]);
assertArraysEqual([1, 2, 3],[2]);
assertArraysEqual([1, 2, 3, 4, 5, 6],[3, 4]);