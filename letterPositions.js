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
const letterPositions = function(sentence) {
  const results = {};
  for (let letterIndex in sentence) {
    //console.log("Current Letter: " + newSentence[letterIndex] + " Current Position: " + letterIndex);
    letter = sentence[letterIndex];
    if (letter === " ") continue;
    if (results[letter] === undefined) {
      results[letter] = [ Number(letterIndex) ];
    } else {
      results[letter].push(Number(letterIndex));
    }
  }
  return results;
};

const countLetters = function(sentence) {
  const results = {};
  for (let letter of sentence.replace(/ /g,'')) {
    if (results[letter] === undefined) {
      results[letter] = 1;
    } else {
      results[letter]++;
    }
  }
  return results;
};

//console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").e, [1]);
