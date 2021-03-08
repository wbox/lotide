const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

// TEST CODE
assertArraysEqual([1,2,3],[1,"2",3]);
assertArraysEqual([1,2,3],[1,2,3]);
assertArraysEqual([1,2,3]);
