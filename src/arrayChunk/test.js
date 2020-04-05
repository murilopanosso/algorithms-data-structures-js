const chunkArray = require('./index');

test('function chunk exists', () => {
  expect(typeof chunkArray).toEqual('function');
});

test('divides array of 15 elements with chunks of size 3', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const chunked = chunkArray(arr, 3);

  expect(chunked).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], [13, 14, 15]]);
});


test('divides array of 17 elements with chunks of size 4', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
    const chunked = chunkArray(arr, 4);
  
    expect(chunked).toEqual([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16], [17]]);
});

test('chunk divides an array of 3 elements with chunk size 1', () => {
    const arr = [1, 2, 3];
    const chunked = chunkArray(arr, 1);
  
    expect(chunked).toEqual([[1], [2], [3]]);
});
  
test('chunk divides an array of 5 elements with chunk size 3', () => {
    const arr = [1, 2, 3, 4, 5];
    const chunked = chunkArray(arr, 3);
  
    expect(chunked).toEqual([[1, 2, 3], [4, 5]]);
});