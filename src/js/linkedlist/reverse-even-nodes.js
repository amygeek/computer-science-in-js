/**
 * Given a singly linked list, reverse nodes at even indices.
 * @param list1
 * @param list2
 * @returns {*}
 */
let merge_alternating = function(list1, list2) {
    if (!list1) {
        return list2;
    }

    if (!list2) {
        return list1;
    }

    let head = list1;

    while (list1.next && list2) {
        let temp = list2;
        list2 = list2.next;

        temp.next = list1.next;
        list1.next = temp;
        list1 = temp.next;
    }

    if (!list1.next) {
        list1.next = list2;
    }

    return head;
};

let reverse_even_nodes = function(head) {

    // Let's extract even nodes from the existing
    // list and create a new list consisting of
    // even nodes. We will push the even nodes at
    // head since we want them to be in reverse order.

    let curr = head;
    let list_even = null;

    while (curr && curr.next) {
        let even = curr.next;
        curr.next = even.next;

        // Push at the head of new list.
        even.next = list_even;
        list_even = even;

        curr = curr.next;
    }

    // Now, merge the two lists
    // Original: 1,2,3,4,5
    // Modified original: 1,3,5
    // List_even: 4,2
    // Merged: 1,4,3,2,5

    return merge_alternating(head, list_even);
};