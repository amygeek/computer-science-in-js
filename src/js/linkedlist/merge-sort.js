/**
 * Given head pointer of a linked sort, sort linked list (in ascending order) using merge sort
 * and return new head pointer of sorted linked list.
 * Runtime Complexity
     Linearithmic i.e. O(n * log n)

     Memory Complexity
     Logarithmic, O(log n).

 Recursive solution has O(log n) memory complexity as it will consume memory on the stack
 * @param head
 * @param first_second
 */
// this method splits linked list in two halves by iterating over whole list
// It returns head pointers of first and 2nd halves of linked lists in first_second
// Head of 1st half is just the head node of linked list
let split_in_half = function(head, first_second) {
    if (!head) {
        first_second.first = null;
        first_second.second = null;
        return;
    }

    // Only one element in the list
    if (!head.next) {
        first_second.first = head;
        first_second.second = null;
    } else {
        // Let's use the classic technique of moving two pointers:
        // 'fast' and 'slow'. 'fast' will move two steps in each
        // iteration where 'slow' will be pointing to middle element
        // at the end of loop.
        let slow = head;
        let fast = head.next;
        while (fast) {
            fast = fast.next;
            if (fast) {
                fast = fast.next;
                slow = slow.next;
            }

        }

        first_second.first = head;
        first_second.second = slow.next;
        // Terminate first linked list.
        slow.next = null;
    }
};

let merge_sorted_lists = function(head1, head2) {
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


let merge_sort = function(head) {
    // No need to sort a single element.
    if (!head || !head.next) {
        return head;
    }

    let first = null;
    let second = null;
    let first_second = {
        first,
        second
    };

    // Let's split the list in half, sort the sublists
    // and then merge the sorted lists.
    split_in_half(head, first_second);

    first_second.first = merge_sort(first_second.first);
    first_second.second = merge_sort(first_second.second);

    return merge_sorted_lists(first_second.first, first_second.second);
};

//test
let print = (head) => {
    if ( !head ) {
        return;
    }

    let str = '';
    while (head) {
        str += head.data + '->';
        head = head.next;
    }
    console.log(str);


}
class Node {
    constructor( x ) {
        this.data = x;
        this.next = null;
    }
}

let list = new Node(7);
list.next = new Node(14);
list.next.next = new Node(38);
list.next.next.next = new Node(28);
list.next.next.next.next = new Node(15);
list.next.next.next.next.next = new Node(21);
list.next.next.next.next.next.next = new Node(11);

print(list)

merge_sort(list);

print(list)


