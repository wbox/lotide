const assertEqual = require('./assertEqual');

const tail = function(value) {
  return value.slice(1);
};

module.exports = tail;
