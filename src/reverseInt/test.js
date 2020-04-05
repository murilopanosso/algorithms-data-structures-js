const reverseInt = require('./index');

test('ReverseInt function exists', () => {
  expect(reverseInt).toBeDefined();
});

test('ReverseInt handles 0 as an input', () => {
  expect(reverseInt(0)).toEqual(0);
});

test('ReverseInt on a positive number', () => {
  expect(reverseInt(2)).toEqual(2);
  expect(reverseInt(31)).toEqual(13);
  expect(reverseInt(400)).toEqual(4);
  expect(reverseInt(18524)).toEqual(42581);
});


test('ReverseInt on a negative number', () => {
    expect(reverseInt(-60)).toEqual(-6);
    expect(reverseInt(-81)).toEqual(-18);
    expect(reverseInt(-2548)).toEqual(-8452);
    expect(reverseInt(-63214)).toEqual(-41236);
  });
