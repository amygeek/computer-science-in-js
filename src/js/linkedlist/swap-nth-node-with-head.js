/**
 * Given the head of a singly linked list and 'N', swap the head with Nth node. Return the head of the new linked list.
 * EX N=4: 7->14->21->28->35->42-null to 28->14->21->7->35->42-null
 * Runtime Complexity
     Linear, O(n).

     Memory Complexity
     Constant, O(1).
 * @param head
 * @param n
 * @returns {*}
 */
let swap_nth_node = function(head, n) {
    let prev = null;
    let current = head;

    if (!head) {
        return head;
    }

    if (n === 1) {
        // No need to swap head with head.
        return head;
    }

    let count = 1;
    while (current && count < n) {
        prev = current;
        current = current.next;
        count++;
    }

    if (!current) {
        return head;
    }

    // current is pointing to nth node.
    // Let's swap nth node with head.

    prev.next = head;
    let temp = head.next;
    head.next = current.next;
    current.next = temp;

    return current;
};