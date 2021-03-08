const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const middle = function(array) {
  const newArray = [];

  if (array.length <= 2) {
    return newArray;
  }

  if (array.length % 2 !== 0 ) {
    let i = Math.floor(array.length / 2);
    newArray.push(array[i]);
    return newArray;
  } else {
    let i = Math.floor(array.length / 2);
    newArray.push(i);
    newArray.push(i+1);
    return newArray;
  }

};

module.exports = middle;