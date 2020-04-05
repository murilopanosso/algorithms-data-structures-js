const Stack = require("../stack/index");

class Queue {
    constructor(){
        this.sOne = new Stack();
        this.sTwo = new Stack();
    }

    add(element) {
        this.sOne.push(element);
    }
    remove() {
        while(this.sOne.peek()) {
            this.sTwo.push(this.sOne.pop());
        }
        const el = this.sTwo.pop();
        
        while(this.sTwo.peek()) {
            this.sOne.push(this.sTwo.pop());
        }

        return el;
    }

    peek() {
        while(this.sOne.peek()) {
            this.sTwo.push(this.sOne.pop());
        }
        const el = this.sTwo.peek();
        
        while(this.sTwo.peek()) {
            this.sOne.push(this.sTwo.pop());
        }
        return el;
    }

}

module.exports = Queue;