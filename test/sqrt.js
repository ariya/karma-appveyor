if (typeof require === 'function') {
    var assert = require("chai").assert;
}

describe("sqrt", function() {

  it("should compute the square root of 4 as 2", function() {
    assert.equal(Math.sqrt(4), 2);
  });

});
