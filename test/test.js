var assert = require('assert');
var add = require('../src/add');

describe('add', function() {
    it('should return 3 when the input are 1 and 2', function() {
      assert.equal(3, add(1, 2));
    });
});