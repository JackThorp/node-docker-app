var assert = require("assert");
var request = require("supertest");
var app = require("../index.js");

describe('Array', function(){
  describe('indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('About Page', function(){
  it('should be available', function() {
    request(app)
      .get('/about')
      .expect(200)
      .end(function(err, res) {
        if (err) throw err;
      });
  });
});
