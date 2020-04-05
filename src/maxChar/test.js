
const maxChar = require('./index');

test('maxChar function exists', () => {
  expect(typeof maxChar).toEqual('function');
});

test('Finds the most frequently used char', () => {
    expect(maxChar('m')).toEqual('m');
    expect(maxChar('asfertggfddfdsddddfggfhgfgggg')).toEqual('g');
    expect(maxChar('hello world')).toEqual('l');
});


test('Finds the most frequently used char with number', () => {
    expect(maxChar('1')).toEqual('1');
    expect(maxChar('asfe22r2t22g2g22f2d2df2ds2dd2dd2fg2gf2hg2fgggg')).toEqual('2');
    expect(maxChar('he3ll3o wor3l3d3')).toEqual('3');
});