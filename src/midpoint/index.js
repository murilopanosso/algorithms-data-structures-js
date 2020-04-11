const midpoint = (linkList) => {
    let slow = linkList.getFirst();
    let fast = linkList.getFirst();

    while(fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

module.exports = midpoint;