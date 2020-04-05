const matrix = require('./index');
const matrix2 = require('./matrix');

test('matrix is a function', () => {
  expect(typeof matrix).toEqual('function');
});

test('matrix2 is a function', () => {
  expect(typeof matrix2).toEqual('function');
});

test('matrix produces a 2x2 array', () => {
  const m = matrix(2);
  expect(m.length).toEqual(2);
  expect(m[0]).toEqual([1, 2]);
  expect(m[1]).toEqual([4, 3]);
});


test('matrix produces a 3x3 array', () => {
    const m = matrix(3);
    expect(m.length).toEqual(3);
    expect(m[0]).toEqual([1, 2, 3]);
    expect(m[1]).toEqual([8, 9, 4]);
    expect(m[2]).toEqual([7, 6, 5]);
  });


  test('function matrix2 produces an array with all elements of the 3x3 matrix in spiral order ', () => {
    const inMatrix = [
      [ 1, 2, 3 ],
      [ 4, 5, 6 ],
      [ 7, 8, 9 ]
     ];
    const m = matrix2(inMatrix);
    expect(m.length).toEqual(9);
    expect(m[0]).toEqual(1);
    expect(m[1]).toEqual(2);
    expect(m[2]).toEqual(3);
    expect(m[3]).toEqual(6);
    expect(m[4]).toEqual(9);
    expect(m[5]).toEqual(8);
    expect(m[6]).toEqual(7);
    expect(m[7]).toEqual(4);
    expect(m[8]).toEqual(5);
  });



  test('function matrix2 produces an array with all elements of the 3x4 matrix in spiral order ', () => {
    const inMatrix = [
      [ 1, 2, 3 ],
      [ 4, 5, 6 ],
      [ 7, 8, 9 ],
      [ 10, 11, 12 ]
     ];
    const m = matrix2(inMatrix);
    expect(m.length).toEqual(12);
    expect(m[0]).toEqual(1);
    expect(m[1]).toEqual(2);
    expect(m[2]).toEqual(3);
    expect(m[3]).toEqual(6);
    expect(m[4]).toEqual(9);
    expect(m[5]).toEqual(12);
    expect(m[6]).toEqual(11);
    expect(m[7]).toEqual(10);
    expect(m[8]).toEqual(7);
    expect(m[9]).toEqual(4);
    expect(m[10]).toEqual(5);
    expect(m[11]).toEqual(8);
  });
  
  