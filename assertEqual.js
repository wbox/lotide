// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("\uD83D\uDE00 Assertion Passed: [actual] === [expected]");
  } else {
    console.log("\uD83D\uDE1E Assertion Failed: [actual] !== [expected]");
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("bla","bla1");
assertEqual(2,2);
assertEqual(234,342);
