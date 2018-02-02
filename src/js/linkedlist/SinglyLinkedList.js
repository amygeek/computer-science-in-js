class Node {
    constructor( d ) {
        this.data = d;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    length() {
        let len = 0;
        let current = this.head;
        while (current) {
            current = current.next;
            len++;
        }
        return len;
    }
    insert(data) {
        if ( this.head === null ) {
            this.head = new Node(data);
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = new Node(data);
        }
    }
    print() {
        let current = this.head;
        let str = ''
        while( current ) {
            str += current.data + " -> ";
            current = current.next;
        }
        str += 'null';
        console.log( str );
    }
    reverseIteratively() {

        if ( !this.head ) {
            return;
        }

        let current = this.head;
        let previous = null;
        let next = null;

        while(current) {
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        this.head = previous;
        return this.head;
    }

    reverseRecursively( head ) {
        if (!head || !head.next) {
            return head;
        }
        let temp = this.reverseRecursively(head.next);
        head.next.next = head;
        head.next = undefined;
        return temp;
    }

    deleteNode( head, d ) {

        let prev = null;
        let current = head;

        while (current) {
            if (current.data === d) {
                break;
            }

            prev = current;
            current = current.next;
        }

        //  key not found in list
        if (!current) {
            return head;
        }

        //  if node to be deleted is head node
        if (current === head) {
            return head.next;
        }

        //  for all other cases
        prev.next = current.next;
        return head;
    }


    removeByVal( v ) {
        let current = this.head;
        let previous = null;

        if ( current.data === v ) {
            this.head = current.next;
            return current.data;
        } else {
            while(current && current.data !== v) {
                previous = current;
                current = current.next;
            }
            //skip current item that is being removed
            if (current) {
                previous.next = current.next;
                return current.data;
            } else {
                return -1;
            }
        }
    }

    removeByIndex( index ) {

        let len = this.length();

        if (index >= 0 && index < len ) {
            let current = this.head;
            let previous = null;
            if ( index === 0 ) {
                this.head = current.next;
            } else {
                let i = 0;
                while( i < index) {
                    previous = current;
                    current = current.next;
                    i++;
                }
                previous.next = current.next;

            }
            return current.data;
        } else {
            return -1;
        }

    }

    //time O(n), space O(1)
    findNthFromlastNode(head, n) {
        if (!head || n < 1){
            return null;
        }

        // We will use two pointers head and tail
        // where head and tail are 'n' nodes apart.
        let tail = head;

        while (tail && n > 0){
            tail = tail.next;
            --n;
        }

        // Check out-of-bounds
        if (n != 0){
            return null;
        }

        // When tail pointer reaches the end of
        // list, head is pointing at nth node.
        while (tail){
            tail = tail.next;
            head = head.next;
        }

        return head;

    }

    addIntegers( node1, node2 ) {

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
    }
}

//export default SinglyLinkedList;

//test

let linkedList = new SinglyLinkedList();
linkedList.insert(3);
linkedList.insert(2);
linkedList.insert(8);
linkedList.insert(7);
linkedList.insert(1);
linkedList.insert(18);
linkedList.print();

let node = linkedList.findNthFromlastNode(linkedList.head, 1);
console.log(node);
console.log(linkedList.length());
linkedList.reverseIteratively();
linkedList.print();

node = linkedList.reverseRecursively(linkedList.head);
linkedList.head = node;
linkedList.print();

linkedList.deleteNode(linkedList.head, 18);
console.log(linkedList.length());
linkedList.print();
console.log(linkedList.removeByIndex(0)); // remove 3
linkedList.print();

//test add two integers
let list1 = new SinglyLinkedList();
list1.insert(1);
list1.insert(0);
list1.insert(9);
list1.insert(9);
list1.print();

let list2 = new SinglyLinkedList();
list2.insert(7);
list2.insert(3);
list2.insert(2);
list2.print();

let rs = list1.addIntegers(list1, list2);

list1.print();


