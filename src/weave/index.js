// Weave receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.
const Queue = require('../queue/index');

const Weave = (qOne, qTwo) => {
    const q = new Queue();
    while(qOne.peek() || qTwo.peek()) {
        if (qOne.peek()){
            q.add(qOne.remove());
        }

        if (qTwo.peek()){
            q.add(qTwo.remove());
        }
    }
    return q;        
}

module.exports = Weave;