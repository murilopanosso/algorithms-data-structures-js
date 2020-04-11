const fromLast = require('./index');
const L = require('../linkedList/index');
const LinkedList = L.LinkedList;

test('should be a function', () => {
    expect(typeof fromLast).toEqual('function');
})

test('should return false when the list is not circular', () => {
    const list = new LinkedList();
    list.insertLast(1);
    list.insertLast(2);
    list.insertLast(3);
    list.insertLast(4);
    list.insertLast(5);
    list.insertLast(6);
    expect(fromLast(list, 2).data).toEqual(4);
})