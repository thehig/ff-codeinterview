request = require('supertest')
url = 'http://localhost:1337'

describe '020.api-exists (at ' + url + ')', ->
  it '"/" responds with 200', ->
    request(url)
      .get('/')
      .expect(200)

