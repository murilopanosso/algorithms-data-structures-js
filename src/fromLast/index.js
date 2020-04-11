const fromLast = (list, n) => {
    let slow = list.getFirst();
    let fast = list.getFirst();
    for(let i=0; i<n; i++) {
        fast = fast.next;
    }
    while(fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    return slow;

}

module.exports = fromLast;