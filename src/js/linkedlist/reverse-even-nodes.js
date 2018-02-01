/**
 * Given a singly linked list, reverse nodes at even indices.
 * @param head1
 * @param head2
 * @returns {*}
 */
let merge_alternating = function(head1, head2) {
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
//list.next.next.next.next.next = new Node(6);

print(list)

reverse_even_nodes(list);

print(list)


