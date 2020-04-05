const capitalize = require('./index');

test('Capitalize is a function', () => {
  expect(typeof capitalize).toEqual('function');
});

test('capitalizes the first letter of every word in a sentence', () => {
  expect(capitalize('hi there, how is it going?')).toEqual(
    'Hi There, How Is It Going?'
  );
});


test('capitalizes the first letter of every word', () => {
    expect(capitalize('ola, eu sou murilo')).toEqual(
      'Ola, Eu Sou Murilo'
    );
  });
  
  
