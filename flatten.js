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

const flatten = function(arrays) {
  let newArray = [];
  if (!arrays) {
    return "This function needs an argument. flatten(argument)."
  }
  for (let o = 0; o < arrays.length; o++) {
    if (Array.isArray(arrays[o])) {
      for ( let i = 0; i < arrays[o].length; i++) {
        newArray.push(arrays[o][i]);
      }
    } else {
      newArray.push(arrays[o]);
    }
  }
  return newArray;
}

// TEST CODE
//assertArrayEqual([1,2,3],[1,2,3]);
//assertArrayEqual([1,2,3],[1,"2",3]);
//assertArrayEqual([1,2,3]);
console.log(flatten([1, 2, [3, 4], 5, [6]]));