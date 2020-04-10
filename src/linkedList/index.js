class Node{
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor() {
        this.head = null;
    }

    insertFirst(element) {
        this.head = new Node(element, this.head);
    }

    size() {
        let node = this.head;
        let counter = 0;
        while(node){
            counter++;
            node = node.next;
        }
        return counter;
    }

    getFirst(){
        return this.head;
    }

    getLast(){
        if(!this.head){
            return null;
        }

        let node = this.head;
        while(node.next){
            node = node.next;
        }
        return node;
    }

    clear(){
        this.head = null;
    }

    removeFirst() {
        if(this.head){
            this.head = this.head.next;
        }
    }

    removeLast(){
        if(!this.head){
            return;
        }
        if(!this.head.next){
            this.removeFirst();
            return;
        }

        let node = this.head;
        while(node.next.next){
            node=node.next;    
        }
        node.next = null;
    }

    insertLast(element){
        const last = this.getLast();
        if (last){
            last.next = new Node(element);
        } else{
            this.head = new Node(element);
        }
    }

    getAt(element) {
        let node = this.head;
        let counter = 0;
        while(node) {
            if (counter === element) {
                return node;
            }
            counter ++;
            node = node.next;
        }
        console.log('element not found');
        return {};
    }

    removeAt(element) {
        if(!this.head){
            console.log('element not found');
            return;
        }

        if (element === 0) {
            this.head = this.head.next;
        }

        const prevNode = this.getAt(element-1);
        if (prevNode.next) {
            prevNode.next = prevNode.next.next;
        } else {
            console.log('element not found');
        }
    }

    insertAt(position, element) {
        if (!this.head) {
            this.head = new Node(element);
        }
        if (position === 0) {
            this.head = new Node(element, this.head);
        }

        const prevNode = this.getAt(position-1) || this.getLast();
        const node = new Node(element, prevNode.next);
        prevNode.next = node;
    }

    forEach(callBack) {
        let node = this.head;
        let counter = 0;
        while(node) {
            callBack(node, counter);
            node = node.next;
            counter++;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while(node) {
            yield node;
            node = node.next;
        }
    }


}

module.exports = {Node, LinkedList};