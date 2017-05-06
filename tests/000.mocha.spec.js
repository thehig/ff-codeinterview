/* eslint-disable */
var expect = require('chai').expect;

describe('000.Mocha', function(){
  it("true == true to be true", function(){
    expect(true).to.be.true;
  })

  it("true == false to throw", function(){
    expect(function(){ 
      expect(true).to.be.false;
    }).to.throw();
  });
});
/* eslint-enable */
