//const assertArraysEqual = require('../assertArraysEqual');
//const eqArrays = require('../eqArrays');

const lotide = require('../index');
const assert = require('chai').assert;

describe("#assertArraysEqual", () => {

  it("return true for [1,2,3],[1,\"2\",3]", () => {
    assert.deepEqual(lotide.assertArraysEqual([1,2,3],[1,"2",3], true));
  });
});


/*
// TEST CODE
assertArraysEqual([1,2,3],[1,"2",3]);
assertArraysEqual([1,2,3],[1,2,3]);
assertArraysEqual([1,2,3]);
*/
