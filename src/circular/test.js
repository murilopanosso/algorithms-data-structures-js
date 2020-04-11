const circular = require('./index');
const L = require('../linkedList/index');
const LinkedList = L.LinkedList;

test('should be a function', () => {
    expect(typeof circular).toEqual('function');
})

test('should return false when the list is not circular', () => {
    const list = new LinkedList();
    list.insertLast(1);
    list.insertLast(2);
    list.insertLast(3);
    list.insertLast(4);
    expect(circular(list)).toBeFalsey;
})

test('should return true when the list is circular', () => {
    const list = new LinkedList();
    list.insertLast(1);
    list.insertLast(2);
    list.insertLast(3);
    list.insertLast(4);
    let lastNode = list.getLast();
    let node = list.getAt(1);
    lastNode.next = node;
    expect(circular(list)).toBeTruthy;
})


