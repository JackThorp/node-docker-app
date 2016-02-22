var assert = require("assert");
//var request = require("supertest");
//var app = require("../index.js");

describe('Array', function(){
  describe('indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('Silly Test', function(){
  it('should not fail', function() {
    assert.equal(1,2);
  });
});
