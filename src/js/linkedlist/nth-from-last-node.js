/**
 * Given a singly linked list, return nth from last node. Return null if 'n' is out-of-bounds.
 * Runtime Complexity
     Linear, O(n)

     Memory Complexity
     Constant, O(1)
 * @param head
 * @param n
 * @returns {*}
 */
let find_nth_from_last = function(head, n){

    if (!head || n < 1){
        return null;
    }

    // We will use two pointers head and tail
    // where head and tail are 'n' nodes apart.
    let tail = head;

    while (tail && n > 0){
        tail = tail.next;
        --n;
    }

    // Check out-of-bounds
    if (n != 0){
        return null;
    }

    // When tail pointer reaches the end of
    // list, head is pointing at nth node.
    while (tail){
        tail = tail.next;
        head = head.next;
    }

    return head;
};