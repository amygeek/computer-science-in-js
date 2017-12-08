/**
 * Remove duplicate nodes from linked list of integers while keeping only the first occurrence of duplicates.
 * turn 7 ->14->28->28->14->21->null  to 7 ->14->28->21->null
 * Runtime Complexity
     Linear, O(n) - where 'n' is length of the linked list.

     Memory Complexity
     Linear, O(n) - to store visited nodes in hashset.

     For O(1) Memory Complexity, we can take following approaches
     1) If we are allowed to change the order of the list, we can just sort the linked list in O(n logn) time.
        After sorting, all duplicates must be adjacent and can be removed in a linear scan.
     2) For each node in the linked list do another scan of the preceding nodes to see if it already exists or not.
        The time complexity of this algorithm is O(n^2) but it does not require any extra space.
 * @param head
 * @returns {*}
 */
let remove_duplicates = function(head) {

    if (!head) {
        return head;
    }

    // Let's track existing values.
    let dup_set = new Set();
    dup_set.add(head.data);
    let curr = head;

    while (curr.next) {
        if (dup_set.has(curr.next.data)) {
            // Duplicate node found. Let's remove it from the list.
            curr.next = curr.next.next;
        } else {
            // Element not found in map, let's add it.
            dup_set.add(curr.next.data);
            curr = curr.next;
        }
    }

    return head;
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

//turn 7 ->14->28->28->14->21->null  to 7 ->14->28->21->null
let list = new Node(7);
list.next = new Node(14);
list.next.next = new Node(28);
list.next.next.next = new Node(28);
list.next.next.next.next = new Node(14);
list.next.next.next.next.next = new Node(21);

print(list)

remove_duplicates(list);

print(list)


