/**
 * Given head pointer of a linked list, sort it in ascending order using insertion sort.
 * given linked list is 29 -> 23 -> 82 -> 11, then sorted list should be 11 -> 23 -> 29 -> 82.
 * Runtime Complexity
   quadratic O(n2).

     Memory complexity
     Constant, O(1)
 * @param head
 * @param node
 * @returns {*}
 */
let sorted_insert = function(sorted, newNode){

    if (!newNode){
        return sorted;
    }

    if (!sorted || sorted.data >= newNode.data){
        newNode.next = sorted;
        return newNode;
    }

    let curr = sorted;
    while (curr.next && curr.next.data < newNode.data){
        curr = curr.next;
    }

    newNode.next = curr.next;
    curr.next = newNode;

    return sorted;
};

let insertion_sort = function(head){

    let sorted = null;
    let curr = head;

    while (curr){
        let temp = curr.next;
        sorted = sorted_insert(sorted, curr);
        curr = temp;
    }

    return sorted;
};

class Node {
    constructor( d ) {
        this.data = d;
        this.next = null;
    }
}

let n = new Node( 2 );
n.next = new Node( 5 );
n.next.next = new Node( 3 );
n.next.next.next = new Node( 1 );
n.next.next.next.next = new Node( 4 );

let print = (node) => {

    if (!node) {
        return;
    }
    let str = "";
    while ( node) {
        str += node.data + " -> ";
        node = node.next;
    }
    str += "null";
    console.log(str);
}

print(n);

let sorted = insertion_sort(n);

print(sorted);