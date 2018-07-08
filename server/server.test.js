const request = require('supertest');
const app = require('./server').app;
const expect = require('expect');

it('should return hello world response', (done) => {
  request(app)
    .get('/')
    .expect(404)
    .expect((res) => {
      expect(res.body).toInclude({
        error: 'Page not found.'
      });
    })
    .end(done);
});

it('should return my user in response', (done) => {
  request(app)
    .get('/users')
    .expect(200)
    .expect((res) => {
      expect(res.body).toInclude({
        name: 'Kevin DA ROCHA',
        age: 23
      })
    })
    .end(done)
});
