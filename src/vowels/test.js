const vowels = require('./vowels');
const vowelsRegex = require('./vowelsRegex');

test('Vowels is a function', () => {
  expect(typeof vowels).toEqual('function');
});

test('vowelsRegex is a function', () => {
    expect(typeof vowelsRegex).toEqual('function');
  });
  
test('returns the number of vowels used', () => {
  expect(vowels('aeiou')).toEqual(5);
});

test('returns the number of vowels used with regex', () => {
    expect(vowelsRegex('aeiou')).toEqual(5);
});


test('returns the number of vowels used', () => {
    expect(vowels('murilo panosso')).toEqual(6);
  });
  
  test('returns the number of vowels used with regex', () => {
      expect(vowelsRegex('murilo panosso')).toEqual(6);
  });
  

  
