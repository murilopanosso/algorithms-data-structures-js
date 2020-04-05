
const fib = require('./index');
const recursive = require('./recursive');

test('Fib function is defined', () => {
  expect(typeof fib).toEqual('function');
});

test('Fib function is defined', () => {
  expect(typeof recursive).toEqual('function');
});

test('calculates correct fib value for 1', () => {
  expect(fib(1)).toEqual(1);
});


test('calculates correct fib value for 15', () => {
    expect(fib(39)).toEqual(63245986);
  });


  test('calculates correct fib recursive value for 1', () => {
    expect(recursive(1)).toEqual(1);
  });
  
  
  test('calculates correct fib recursive value for 15', () => {
      expect(recursive(39)).toEqual(63245986);
    });