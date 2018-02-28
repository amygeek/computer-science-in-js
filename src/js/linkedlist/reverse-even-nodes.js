/**
 ** Given a singly linked list, reverse nodes at even indices.
 Runtime Complexity
 Linear, O(n).
 Memory Complexity
 Constant, O(1).
 
 We don't want to copy the data of elements or re-allocate memory for nodes as that is inefficient. We will create two lists comprising of nodes 
 at odd and even indices. While extracting even nodes, we will push them at the head of list_even since we need them in reverse order 
 while merging. Now that the two lists are in the correct order, it's just a matter of merging their nodes alternately.
 */
let mergeAlternating = function(head1, head2) {
    if (!head1) {
        return head2;
    }

    if (!head2) {
        return head1;
    }

    let head = head1;

    while (head1.next && head2) {
        let temp = head2;
        head2 = head2.next;

        temp.next = head1.next;
        head1.next = temp;
        head1 = temp.next;
    }
    //for even number of the list head1.next will be null, we need to get the last even element
    if (!head1.next) {
        head1.next = head2;
    }

    return head;
};

let reverse_even_nodes = function(head) {

    // Let's extract even nodes from the existing
    // list and create a new list consisting of
    // even nodes. We will push the even nodes at
    // head since we want them to be in reverse order.

    let current = head;
    let evenHead = null;

    while (current && current.next) {
        let even = current.next;
        current.next = even.next;

        // Push at the head of new list.
        even.next = evenHead;
        evenHead = even;

        current = current.next;

    }

    // Now, merge the two lists
    // Original: 1,2,3,4,5
    // Modified original: 1,3,5
    // List_even: 4,2
    // Merged: 1,4,3,2,5

    return mergeAlternating(head, evenHead);
};

let print = (head) => {
    if ( !head ) {
        return;
    }

    let str = '';
    while (head) {
        str += head.data + '->';
        head = head.next;
    }
    console.log(str + "null");


}

//test
class Node {
    constructor( x ) {
        this.data = x;
        this.next = null;
    }
}

let list = new Node(1);
list.next = new Node(2);
list.next.next = new Node(3);
list.next.next.next = new Node(4);
list.next.next.next.next = new Node(5);
list.next.next.next.next.next = new Node(6);

print(list)

reverse_even_nodes(list);

print(list)


