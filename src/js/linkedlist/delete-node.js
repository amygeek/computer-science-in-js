/**
 * Given head of a linked list and a key, delete node with this given key from the linked list.
 * @param head
 * @param key
 * @returns {*}
 */
let delete_node = function(head, key) {
    let prev = null;
    let current = head;

    while (current) {
        if (current.data === key) {
            break;
        }

        prev = current;
        current = current.next;
    }

    //  key not found in list
    if (!current) {
        return head;
    }

    //  if node to be deleted is head node
    if (current === head) {
        return head.next;
    }

    //  for all other cases
    prev.next = current.next;
    return head;
};