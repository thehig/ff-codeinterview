expect = require('chai').expect

describe '010.Mocha Coffee', ->
  it 'true == true to be true', -> expect(true).to.be.true
  it 'true == false to throw', -> expect(-> expect(true).to.be.false).to.throw()