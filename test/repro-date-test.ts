import date from 'repro-date';

QUnit.module('repro-date tests');

QUnit.test('date from string', assert => {
  assert.ok(date('2018-01-01') instanceof Date);
});

QUnit.test('date from number', assert => {
  assert.ok(date(0) instanceof Date);
});
