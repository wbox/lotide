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
  for ( let i = 0; i < arrayA.length; i++) {
    if (!(arrayA[i] === arrayB[i])) {
      return false;
    }
  }
  return true;
};

const without = function(source, itemsToRemove) {
  let newArray = [];
  for ( s = 0; s < source.length; s++) {
    //console.log(`Source: ${source[s]}`);
    //console.log(`IndexOf: ${itemsToRemove.indexOf(source[s])}`);
    
    if ( itemsToRemove.indexOf(source[s]) === -1 ) { // && (source[s] === itemsToRemove[itemsToRemove.indexOf(source[s])])) {
      //console.log(`Pushing ${source[s]} to newArray`);
      newArray.push(source[s]);
    }
  }
  return newArray;
}
// TEST CODE

//console.log(without([1, 2, 3], [1]));
//console.log(without(["1", "2", "3"], [1, 2, "3"]));

assertArraysEqual(without([1, 2, 3], [1]),[2,3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),["1", "2"]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),["1", 2]);
//assertArrayEqual([1,2,3]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
