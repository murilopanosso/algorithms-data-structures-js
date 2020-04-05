const subArrSum = require('./index');

test('subArrSum is a function', () => {
  expect(typeof subArrSum).toEqual('function');
});
//Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

test('With the array [1,1,1] k = 2 it should find 2 continuous subarrays whose sum equals to k', () => {
    expect(subArrSum([1,1,1], 2)).toEqual(2);
  });

test('With the array [0,0,0,0,0,0,0,0,0,0] and k = 0, it should find 55 continuous subarrays whose sum equals to k', () => {
    expect(subArrSum([0,0,0,0,0,0,0,0,0,0], 0)).toEqual(55);
  });
  