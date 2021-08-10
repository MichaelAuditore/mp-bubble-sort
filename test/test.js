"use strict";
var expect = require("chai").expect;
var index = require("../dist/index.js");
describe("bubbleSort function test", () => {
  it("should return Sorted Number List", () => {
    var result = index.bubbleSort([4, 2, 3, 5, 1, 8, 9, 6, 7]);
    expect(result).deep.to.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  it("should return Sorted String List", () => {
    var result = index.bubbleSort([
      "Miguel",
      "Javier",
      "Andrea",
      "Ana",
      "Julieta",
    ]);
    expect(result).deep.to.equal([
      "Ana",
      "Andrea",
      "Javier",
      "Julieta",
      "Miguel",
    ]);
  });
});
