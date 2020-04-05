const anagramCharMap = require('./anagramCharMap');
const anagramSort = require('./anagramSort');

test('anagramCharMap function exists', () => {
    expect(typeof anagramCharMap).toEqual('function');
  });

test('anagramSort function exists', () => {
    expect(typeof anagramSort).toEqual('function');
});

test('"hello" is an anagram of "llohe" - anagramCharMap', () => {
    expect(anagramCharMap('hello', 'llohe')).toBeTruthy();
});

test('"hello" is an anagram of "llohe" - anagramSort', () => {
    expect(anagramSort('hello', 'llohe')).toBeTruthy();
});
  
test('"olirum" is an anagram of "murilo" - anagramCharMap', () => {
    expect(anagramCharMap('olirum', 'murilo')).toBeTruthy();
});

test('"olirum" is an anagram of "murilo" - anagramSort', () => {
    expect(anagramSort('olirum', 'murilo')).toBeTruthy();
});


test('"this is not an anagram" is an anagram of "well maybe this is an anagram" - anagramCharMap', () => {
    expect(anagramCharMap('this is not an anagram', 'well maybe this is an anagram')).toBeFalsy()
});

test('"this is not an anagram" is an anagram of "well maybe this is an anagram" - anagramSort', () => {
    expect(anagramSort('this is not an anagram', 'well maybe this is an anagram')).toBeFalsy()
});

