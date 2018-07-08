const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
  expect(utils.add(33, 11))
    .toBe(44)
    .toBeA('number');
});

it('should square a number', () => {
  expect(utils.square(4))
    .toBe(16)
    .toBeA('number')
});

it('should expect some values', () => {
  // expect(12).toNotBe(26);
  // expect({name: 'Kevin'}).toEqual({name: 'Kevin'});
  // expect([2,3,4]).toInclude(3);
});

it('should set firstName and lastName', () => {
  const user = utils.setName({age: 23}, 'Kevin DA-ROCHA');

  expect(user).toInclude({
    firstName: 'Kevin',
    lastName: 'DA-ROCHA'
  }).toBeA('object');
});

it('should async add two numbers', (done) => {
  utils.asyncAdd(4, 3, (sum) => {
    expect(sum).toBe(7).toBeA('number');
    done();
  });
});

it('should async square a number', (done) => {
  utils.asyncSquare(4, (sum) => {
    expect(sum).toBe(16).toBeA('number');
    done();
  });
});
