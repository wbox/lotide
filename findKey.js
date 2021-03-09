const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\uD83D\uDE00 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\uD83D\uDE1E Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(obj, callback) {

  const objKeys = Object.keys(obj);
  for (let i = 0; i < objKeys.length; i++) {
    if (callback(obj[objKeys[i]])) {
      return objKeys[i];
    };
  };
  
};

results = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }

}, x => x.stars === 2); // => "noma" 

assertEqual(results, "noma");
