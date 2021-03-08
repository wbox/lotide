const assertEqual = require('./assertEqual');

const tail = function(value) {
  if (value.length === 1) {
    return value;
  } else {
    return value.slice(1);
  }
};

module.exports = tail;
