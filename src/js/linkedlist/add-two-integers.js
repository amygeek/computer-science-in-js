/**
 * Given head pointers of two linked lists where each linked list represents an integer number (each node is a digit),
 * add them and return the resulting linked list. Here, the first node in a list represents the least significant digit.
 Head1: 1->0->9->9->null
 Head2: 7->3->2->null
 Result: 8->3->1->0->1->null

 */
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

class Node {

    constructor (data) {
        this.data = data;
        this.next = null;
    }
}

let add_integers = function(node1, node2) {

    let newHead = null;
    let last = null;
    let carry = 0;

    while (node1 || node2 || carry > 0) {
        
        let first = !node1 ? 0 : node1.data;
        let second = !node2 ? 0 : node2.data;
        let sum = first + second + carry;
        
        let newNode = new Node(sum % 10);
        
        carry = Math.floor(sum / 10);
        
        if (!newHead) {
            newHead = newNode;
        } else {
            last.next = newNode;
        }

        last = newNode;
        if (node1) {
            node1 = node1.next;
        }

        if (node2) {
            node2 = node2.next;
        }

        if (carry) {
            newNode.next = new Node(carry);
        }
    }

    return newHead;
};


//test
let list1 = new Node(1);
list1.next = new Node(0);
list1.next.next = new Node(9);
list1.next.next.next = new Node(9);

display(list1);

let list2 = new Node(7);
list2.next = new Node(3);
list2.next.next = new Node(2);
display(list2);

let rs = add_integers(list1, list2);

display(rs);

