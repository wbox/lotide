// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\uD83D\uDE00 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\uD83D\uDE1E Assertion Failed: ${actual} !== ${expected}`);
  }
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


console.log(countLetters("Karla Rocha my wonderful wife!"));
