const palindromeWithReverse = require('./palindromeWithReverse');
const palindromeWithEvery = require('./palindromeWithEvery');


test('palindromeWithReverse function is defined', () => {
  expect(typeof palindromeWithReverse).toEqual('function');
});

test('palindromeWithEvery function is defined', () => {
    expect(typeof palindromeWithEvery).toEqual('function');
});

test('"ovo" is a palindrome - palindromeWithReverse', () => {
    expect(palindromeWithReverse('ovo')).toBeTruthy();
  });

  
  test('"ovo" is a palindrome - palindromeWithEvery', () => {
    expect(palindromeWithEvery('ovo')).toBeTruthy();
  });
  


  test('"reviver" is a palindrome - palindromeWithReverse', () => {
    expect(palindromeWithReverse('reviver')).toBeTruthy();
  });

  
  test('"reviver" is a palindrome - palindromeWithEvery', () => {
    expect(palindromeWithEvery('reviver')).toBeTruthy();
  });
  

  test('"rodador" is a palindrome - palindromeWithReverse', () => {
    expect(palindromeWithReverse('rodador')).toBeTruthy();
  });

  
  test('"rodador" is a palindrome - palindromeWithEvery', () => {
    expect(palindromeWithEvery('rodador')).toBeTruthy();
  });
  



  test('"hello" is not a palindrome - palindromeWithReverse', () => {
    expect(palindromeWithReverse('hello')).toBeFalsy();
  });

  
  test('"hello" is not a palindrome - palindromeWithEvery', () => {
    expect(palindromeWithEvery('hello')).toBeFalsy();
  });
  
