const L = require('./index');
const LinkedList = L.LinkedList;
const Node = L.Node;


test('Node is a class', () => {
    expect(typeof Node.prototype.constructor).toEqual('function');
});

test('LinkedList is a class', () => {
    expect(typeof LinkedList.prototype.constructor).toEqual('function');
});

describe('Node', () => {
    test('has next and data properties', () => {
        const node = new Node('data', 'next');
        expect(node.data).toEqual('data');
        expect(node.next).toEqual('next');
    })
});

describe('Insert first', () => {
    test('add a node into the start of the list', () => {
        const list = new LinkedList();
        list.insertFirst(1);
        expect(list.head.data).toEqual(1);
        list.insertFirst(2);
        expect(list.head.data).toEqual(2);
    })
});

describe('Size list', () => {
    test('Get the number of nodes in the list', () => {
        const list = new LinkedList();
        list.insertFirst(1);
        expect(list.size()).toEqual(1);
        list.insertFirst(2);
        list.insertFirst(3);
        list.insertFirst(4);
        list.insertFirst(5);
        list.insertFirst(6);
        list.insertFirst(7);
        list.insertFirst(8);
        list.insertFirst(9);
        list.insertFirst(10);
        list.insertFirst(11);
        list.insertFirst(12);
        expect(list.size()).toEqual(12);
        
    })
});

describe('Get first', () => {
    test('retrieve the first node of the list', () => {
        const list = new LinkedList();
        list.insertFirst(1);
        list.insertFirst(2);
        expect(list.getFirst().data).toEqual(2);
    })
});


describe('Get last', () => {
    test('retrieve the last node of the list', () => {
        const list = new LinkedList();
        list.insertFirst(1);
        list.insertFirst(2);
        list.insertFirst(3);
        list.insertFirst(4);
        list.insertFirst(5);
        expect(list.getLast().data).toEqual(1);
    })
});


describe('Clear list', () => {
    test('clear every each last node of the list', () => {
        const list = new LinkedList();
        list.insertFirst(1);
        list.insertFirst(2);
        list.insertFirst(3);
        list.insertFirst(4);
        list.insertFirst(5);
        expect(list.size()).toEqual(5);
        list.clear();
        expect(list.size()).toEqual(0);
    })
});


describe('Remove first', () => {
    test('clear the first node of the list', () => {
        const list = new LinkedList();
        list.insertFirst(1);
        list.insertFirst(2);
        list.insertFirst(3);
        list.insertFirst(4);
        list.insertFirst(5);
        list.removeFirst();
        expect(list.getFirst().data).toEqual(4);
    })
});



describe('remove last', () => {
    test('retrieve the last node of the list', () => {
        const list = new LinkedList();
        list.insertFirst(1);
        list.insertFirst(2);
        list.insertFirst(3);
        list.insertFirst(4);
        list.insertFirst(5);
        expect(list.getLast().data).toEqual(1);
        list.removeLast()
        expect(list.getLast().data).toEqual(2);
    })
});

describe('remove last', () => {
    test('not throw error when list is empty or has just one node', () => {
        const list = new LinkedList();
        expect(() => {
            list.removeLast();
        }).not.toThrow;

        list.insertFirst(1);
        expect(() => {
            list.removeLast();
        }).not.toThrow;
        list.removeLast();
        expect(list.size()).toEqual(0);
    })
});


describe('remove last', () => {
    test('return 0 when list has just one node', () => {
        const list = new LinkedList();
        list.insertFirst(1);
        list.removeLast()
        expect(list.size()).toEqual(0);
    })
});



describe('insert last', () => {
    test('insert on the last node of the list', () => {
        const list = new LinkedList();
        list.insertFirst(1);
        list.insertFirst(2);
        list.insertFirst(3);
        list.insertFirst(4);
        list.insertFirst(5);
        expect(list.getLast().data).toEqual(1);
        list.insertLast(100)
        expect(list.getLast().data).toEqual(100);
    })
});



describe('get at', () => {
    test('get node at position 4 of the list', () => {
        const list = new LinkedList();
        list.insertFirst(1);
        list.insertFirst(2);
        list.insertFirst(3);
        list.insertFirst(4);
        list.insertFirst(5);
        list.insertFirst(6);
        list.insertFirst(7);
        expect(list.getAt(4).data).toEqual(3);
    })
});


describe('get at', () => {
    test('get node at position 2 of the list', () => {
        const list = new LinkedList();
        list.insertLast(1);
        list.insertLast(2);
        list.insertLast(3);
        list.insertLast(4);
        list.insertLast(5);
        expect(list.getAt(2).data).toEqual(3);
    })
});


describe('get at', () => {

    beforeEach(() => {
        jest.spyOn(console, 'log');
    });
    
    afterEach(() => {
        console.log.mockRestore();
    });
  
    test('get node at a non existent position of the list', () => {
        const list = new LinkedList();
        list.insertLast(1);
        list.insertLast(2);
        list.insertLast(3);
        list.insertLast(4);
        list.insertLast(5);
        expect(list.getAt(10)).toEqual({});
        expect(console.log.mock.calls[0][0]).toEqual('element not found');

    })
});









describe('remove at', () => {

    beforeEach(() => {
        jest.spyOn(console, 'log');
    });
    
    afterEach(() => {
        console.log.mockRestore();
    });
  


describe('remove at', () => {
    test('remove node at position 2 of the list', () => {
        const list = new LinkedList();
        list.insertLast(1);
        list.insertLast(2);
        list.insertLast(3);
        list.insertLast(4);
        list.insertLast(5);
        expect(list.getAt(2).data).toEqual(3);
        list.removeAt(2);
        expect(list.getAt(2).data).toEqual(4);

    })
});


    test('remove node at non existent position of the list', () => {
        const list = new LinkedList();
        list.insertLast(1);
        list.insertLast(2);
        list.insertLast(3);
        list.insertLast(4);
        list.insertLast(5);
        list.removeAt(10);
        expect(console.log.mock.calls[0][0]).toEqual('element not found');

    })

    test('remove node at non existent position right after the last element', () => {
        const list = new LinkedList();
        list.insertLast(1);
        list.insertLast(2);
        list.insertLast(3);
        list.insertLast(4);
        list.insertLast(5);
        list.removeAt(5);
        expect(console.log.mock.calls[0][0]).toEqual('element not found');

    })
    


    test('remove a node on a list with just 1 element', () => {
        const list = new LinkedList();
        list.insertFirst(5);
        expect(list.getAt(0).data).toEqual(5)
        list.removeAt(0);
        expect(list.getAt(0)).toEqual({})
        expect(console.log.mock.calls[0][0]).toEqual('element not found');

    })

    test('remove node on a empty list', () => {
        const list = new LinkedList();
        list.removeAt(5);
        expect(console.log.mock.calls[0][0]).toEqual('element not found');

    })

    test('remove node doesnt crash on a empty list', () => {
        const list = new LinkedList();
        expect(() => {
            list.removeAt(5);
            list.removeAt(50);
            list.removeAt(500);
        }).not.toThrow();

    })
});


describe('insert at', () => {
    test('insert node at position 2 of the list', () => {
        const list = new LinkedList();
        list.insertLast(1);
        list.insertLast(2);
        list.insertLast(3);
        list.insertLast(4);
        list.insertLast(5);
        expect(list.getAt(2).data).toEqual(3);
        list.insertAt(2, 11);
        expect(list.getAt(2).data).toEqual(11);

    })
});



describe('insert at', () => {
    test('insert node at empty the list', () => {
        const list = new LinkedList();
        list.insertLast(1);
        list.insertLast(2);
        list.insertLast(3);
        list.insertLast(4);
        list.insertLast(5);
        expect(list.getAt(2).data).toEqual(3);
        list.insertAt(2, 11);
        expect(list.getAt(2).data).toEqual(11);

    })
});


describe('insert at', () => {

    beforeEach(() => {
        jest.spyOn(console, 'log');
    });
    
    afterEach(() => {
        console.log.mockRestore();
    });
  
    test('insert node at non existent position of the list', () => {
        const list = new LinkedList();
        list.insertLast(1);
        list.insertLast(2);
        list.insertLast(3);
        list.insertLast(4);
        list.insertLast(5);
        list.insertAt(10, 7);
        expect(console.log.mock.calls[0][0]).toEqual('element not found');

    })
});

