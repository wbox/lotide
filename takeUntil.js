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

const takeUntil = function(array, callback) {
  const newArray = [];

  for (let i = 0; !callback(array[i]); i++) {
    newArray.push(array[i]);
  }
  return newArray;
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]);