/**
 * Given head pointer of a linked list, sort it in ascending order using insertion sort.
 * given linked list is 29 -> 23 -> 82 -> 11, then sorted list should be 11 -> 23 -> 29 -> 82.
 * Runtime Complexity
     Polynomial, O(n2).

     Memory complexity
     Constant, O(1)
 * @param head
 * @param node
 * @returns {*}
 */
let sorted_insert = function(head, node){

    if (!node){
        return head;
    }

    if (!head || node.data <= head.data){
        node.next = head;
        return node;
    }

    let curr = head;
    while (curr.next && curr.next.data < node.data){
        curr = curr.next;
    }

    node.next = curr.next;
    curr.next = node;

    return head;
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