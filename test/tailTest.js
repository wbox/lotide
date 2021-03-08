// const tail = require('../tail');
// const assertEqual = require('../assertEqual');
// arrayTest = ["Hello", "Lighthouse", "Labs"];
//console.log(tail(["Hello", "Lighthouse", "Labs"]));
//console.log(arrayTest);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"
// assertEqual(result, "Labs");

const assert = require('chai').assert;
const tail   = require('../tail');

const arrayTest = ["Hello", "Lighthouse", "Labs"];
const result = tail(["Hello", "Lighthouse", "Labs"]);

describe("#tail", () => {

  it("returns ['Lighthouse', 'Labs'] for [\"Hello\", \"Lighthouse\", \"Labs\"]", () => {
    assert.strictEqual(tail(arrayTest), ["Lighthouse", "Labs"]);
  });

})