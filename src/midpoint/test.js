const L = require('../linkedList/index');
const LinkedList =  L.LinkedList;
const midpoint = require('./index');

test('should be a function', () => {
    expect(typeof midpoint).toEqual('function');
});


test('should return the midpoint on a list with odd elements', () => {
    const l = new LinkedList();
    l.insertLast(1);
    l.insertLast(2);
    l.insertLast(3);
    l.insertLast(4);
    l.insertLast(5);
    expect(midpoint(l).data).toEqual(3);
});


test('should return the last element of the fisrt half on a list with even elements', () => {
    const l = new LinkedList();
    l.insertLast(1);
    l.insertLast(2);
    l.insertLast(3);
    l.insertLast(4);
    expect(midpoint(l).data).toEqual(2);
})