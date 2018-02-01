/**
 * Given a singly linked list and an integer 'k', reverse every 'k' elements. If k <= 1, then input list is unchanged.
 * If k >= n (n is the length of linked list), then reverse the whole linked list.
 * @param head
 * @param k
 * @returns {*}
 */
let reverse_k_nodes = function(head, k) {
    //  if k is 0 or 1, then list is not changed
    if (k <= 1 || !head) {
        return head;
    }

    let reversed = null;
    let prev_tail = null;

    let current = head;
    while (current && k > 0) {
        
        let previous = null;
        let current_tail = current;

        let n = k;

        while (current && n > 0) {

            let next = current.next;
            current.next = previous;
            previous = current;
            current = next;

            n--;
        }

        if (!reversed) {
            reversed = previous;
        }

        if (prev_tail) {
            prev_tail.next = previous;
        }

        prev_tail = current_tail;
    }

    return reversed;
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
a.next.next.next.next.next = new Node(6);

display(a);
let x = reverse_k_nodes(a, 3);  //reversing every 3 elements.
console.log("Reverse LinkedList: ");
display(x);

