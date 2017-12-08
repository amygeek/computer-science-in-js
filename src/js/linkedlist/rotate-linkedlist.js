let find_length = function(head) {
    let length = 0;
    while (head) {
        length++;
        head = head.next;
    }

    return length;
};

let adjust_rotations_needed = function(n, length) {
    //  If n is positive then number of rotations performed is from right side
    //  and if n is negative then number of rotations performed from left side
    //  Let's optimize the number of rotations.
    //  Handle case if 'n' is a negative number.
    n = n % length;

    if (n < 0) {
        n = n + length;
    }

    return n;
};

let rotate_list = function(head, n) {

    if (!head || n === 0) {
        return;
    }

    //  find length of the linked list
    let length = find_length(head);

    //  Let's optimize the number of rotations.
    //  Handle case if 'n' is a negative number.

    //  If n (number of rotations required) is bigger than
    //  length of linked list or if n is negative then
    //  we need to adjust total number of rotations needed
    n = adjust_rotations_needed(n, length);

    if (n === 0) {
        return head;
    }

    //  Find the start of rotated list.
    //  If we have 1, 2, 3, 4, 5 where n = 2,
    //  4 is the start of rotated list.
    let rotations_count = length - n - 1;
    let temp = head;

    while (rotations_count > 0) {
        rotations_count--;
        temp = temp.next;
    }

    //  After the above loop temp will be pointing
    //  to one node prior to rotation point
    let new_head = temp.next;

    //  Set new end of list.
    temp.next = null;

    //  Iterate to the end of list and
    //  link that to original head.
    temp = new_head;
    while (temp.next) {
        temp = temp.next;
    }

    temp.next = head;

    return new_head;
};

let display = function (head) {
    let currNode = head;
    let list = '';
    while (currNode != null) {
        list += currNode.data + "->";
        currNode = currNode.next;
    }
    console.log(list + "null");
}

let displayRec = function (head) {

    if (!head) {
        return head;
    }

    displayRec(head.next);
}

//test
class Node {

    constructor (data) {
        this.data = data;
        this.next = null;
    }
}

let a = new Node(1);
a.next = new Node(2);
a.next.next = new Node(3);
a.next.next.next = new Node(4);
a.next.next.next.next = new Node(5);

display(a);
displayRec(a);
let x = rotate_list(a, 2);
console.log("Rotate LinkedList: ");
display(x);



