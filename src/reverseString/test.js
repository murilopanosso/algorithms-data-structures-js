const reverse = require('./reverse');
const reverseWithReduce = require('./reverseWithReduce');

test('Reverse function exists', () => {
  expect(reverse).toBeDefined();
});

test('reverseWithReduce function exists', () => {
    expect(reverseWithReduce).toBeDefined();
  });
  

test('Reverse reverses a string', () => {
  expect(reverse('abcd')).toEqual('dcba');
});

test('reverseWithReduce reverses a string', () => {
    expect(reverseWithReduce('abcd')).toEqual('dcba');
});
  
test('Reverse reverses a string', () => {
    expect(reverse('hello')).toEqual('olleh');
});
  
test('reverseWithReduce reverses a string', () => {
    expect(reverseWithReduce('hello')).toEqual('olleh');
});
    
  
test('Reverse reverses a string', () => {
    expect(reverse('hello, this reversing strigs')).toEqual('sgirts gnisrever siht ,olleh');
});

test('reverseWithReduce reverses a string', () => {
    expect(reverseWithReduce('hello, this reversing strigs')).toEqual('sgirts gnisrever siht ,olleh');
});
    
