import hello from 'repro-date';

QUnit.module('repro-date tests');

QUnit.test('hello', assert => {
  assert.equal(hello(), 'Hello from repro-date');
});
