const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\uD83D\uDE00 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\uD83D\uDE1E Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (arrayA, arrayB) {
  // Check if the parameters are arrays and have the same size
  if ( (!Array.isArray(arrayA) || !Array.isArray(arrayB)) || (arrayA.length !== arrayB.length) ) {
    return false;
  }
  // Check if the elements are equal
  for ( let i = 0; i < arrayA.length; i++) {
    return arrayA[i] === arrayB[i] ? true : false;
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  //console.log(Object.entries(object1).length);
  //console.log(Object.entries(object2).length);

  // Test if objects has the same # of properties
  // Get the keys from object1 and assign them to obj1Keys
  // Loop throught the objects to if compare keys and values are the same on both
  // Check if keys from object1 exists on object2
  // Check if same keys on both objects have the same value
  //if (Object.entries(object1).length !== Object.entries(object2).length) { return false; }

  if (Object.keys(object1).length !== Object.keys(object2).length) { return false; }
  const obj1Keys = Object.keys(object1);

  for (let key of obj1Keys) {
    if ( !Object.keys(object1).includes(key) || !Object.keys(object2).includes(key)) {
      return false;
    }

    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      eqArrays(object1[key],object2[key]);
    } else if (object1[key] !== object2[key]) {
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

//assertEqual(eqObjects(ab, ba), true);
//assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);
