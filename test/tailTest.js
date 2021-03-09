const assert = require('chai').assert;
const lotide = require('../index');

const arrayTest = ["Hello", "Lighthouse", "Labs"];
const result = lotide.tail(["Hello", "Lighthouse", "Labs"]);

describe("#tail", () => {

  it("returns ['Lighthouse', 'Labs'] for [\"Hello\", \"Lighthouse\", \"Labs\"]", () => {
    assert.deepEqual(lotide.tail(arrayTest), ["Lighthouse", "Labs"]);
  });

  it("return ['5] for ['5']", () => {
    assert.deepEqual(lotide.tail(['5']), ['5']);
  });

});