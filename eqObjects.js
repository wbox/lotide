const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\uD83D\uDE00 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\uD83D\uDE1E Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  
  //console.log(Object.entries(object1).length);
  //console.log(Object.entries(object2).length);

  // Test if objects has the same # of properties
  if (Object.entries(object1).length !== Object.entries(object2).length) { return false; }
  // Get the keys from object1 and assign them to obj1Keys
  const obj1Keys = Object.keys(object1);

  // Loop throught the objects to if compare keys and values are the same on both
  for (let key of obj1Keys) {

    // Check if keys from object1 exists on object2
    if ( !Object.keys(object1).includes(key) || !Object.keys(object2).includes(key)) {
      return false;
    }

    //console.log("Object 1 key:value " + key + ":" + object1[key]);
    //console.log("Object 2 key:value " + key + ":" + object2[key]);
    //Check if same keys on both objects have the same value
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
//console.log(eqObjects(ab, abc)); // => false

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);