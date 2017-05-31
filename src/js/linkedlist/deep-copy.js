/**
 * We are given a linked list where the node has two pointers.
 * First one is the regular 'next' pointer. The second pointer is called 'arbitrary_pointer'
 * that can point to any node in the linked list. Write code to make a deep copy of the given linked list.
 * Here, deep copy means that any operations on the original list (inserting, modifying and removing)
 * should not affect the copied list.
 * Runtime Complexity
     Linear, O(n).

     Memory Complexity
     Constant, O(1).

     We will create deep copy of the linked list in three passes.

     1) Create copy of each node such that the original node's next pointer is pointing to it's copy.
     2) Fix the arbitrary pointers in the copied nodes.
     3) Separate copied linked list from the original linked list.
 * @param head
 * @returns {*}
 */
let deep_copy_arbitrary_pointer_opt = function(head) {
    if (!head) {
        return null;
    }

    let current = head;

    // inserting new nodes within the existing linkedlist
    while (current) {
        let new_node = new LinkedListNode(current.data);

        new_node.next = current.next;
        current.next = new_node;
        current = new_node.next;
    }
    // setting correct arbitrary pointers
    current = head;
    while (current) {
        if (current.arbitrary) {
            current.next.arbitrary = current.arbitrary.next;
        }

        current = current.next.next;
    }

    // separating lists
    current = head;
    let new_head = head.next;
    let copied_current = new_head;

    while (current) {
        copied_current = current.next;
        current.next = copied_current.next;

        if (copied_current.next) {
            copied_current.next = copied_current.next.next;
        }

        current = current.next;
    }

    return new_head;
};