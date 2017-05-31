/**
 * Given two sorted linked lists, merge them such that resulting linked list is also sorted.
 * Runtime Complexity
     Linear, O(m + n) where m and n are lengths of both linked lists.

     Memory complexity
     Constant, O(1)
 * @param head1
 * @param head2
 * @returns {*}
 */
let merge_sorted = function(head1, head2) {
    // if both lists are empty then merged list is also empty
    // if one of the lists is empty then other is the merged list
    if (!head1) {
        return head2;
    } else if (!head2) {
        return head1;
    }

    let mergedHead = null;
    if (head1.data <= head2.data) {
        mergedHead = head1;
        head1 = head1.next;
    } else {
        mergedHead = head2;
        head2 = head2.next;
    }

    let mergedTail = mergedHead;

    while (head1 && head2) {
        let temp = null;
        if (head1.data <= head2.data) {
            temp = head1;
            head1 = head1.next;
        } else {
            temp = head2;
            head2 = head2.next;
        }

        mergedTail.next = temp;
        mergedTail = temp;
    }

    if (head1) {
        mergedTail.next = head1;
    } else if (head2) {
        mergedTail.next = head2;
    }

    return mergedHead;
};