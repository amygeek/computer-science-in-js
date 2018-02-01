class LinkedList {

    constructor() {
        this.head = null;
    }


    findLength (head) {
        let length = 0;
        while (head) {
            length++;
            head = head.next;
        }
    
        return length;
    }
    
    adjustRotations (n, length) {
        //  If n is positive then number of rotations performed is from right side
        //  and if n is negative then number of rotations performed from left side
        //  Let's optimize the number of rotations.
        //  Handle case if 'n' is a negative number.
        n = n % length;
    
        if (n < 0) {
            n = n + length;
        }
    
        return n;
    }
    
    rotateList (head, n) {
    
        if (!head || n === 0) {
            return;
        }
    
        //  find length of the linked list
        let len = this.findLength(head);
    
        //  Let's optimize the number of rotations.
        //  Handle case if 'n' is a negative number.
    
        //  If n (number of rotations required) is bigger than
        //  length of linked list or if n is negative then
        //  we need to adjust total number of rotations needed
        n = this.adjustRotations(n, len);
    
        if (n === 0) {
            return head;
        }
    
        //  Find the start of rotated list.
        //  If we have 1, 2, 3, 4, 5 where n = 2,
        //  4 is the start of rotated list.
        let count = len - n - 1;
        let temp = head;
    
        while (count > 0) {
            count--;
            temp = temp.next;
        }
    
        //  After the above loop temp will be pointing
        //  to one node prior to rotation point
        let new_head = temp.next;  //temp.next = 4 so, new_head is 4 -> 5
    
        //  Set new end of list. now head = 1 -> 2 -> 3 -> null
        temp.next = null;
    
        //  Iterate to the end of list and
        //  link that to original head.
        temp = new_head;
        while (temp.next) {
            temp = temp.next;
        }

        temp.next = head;
    
        return new_head;
    }
    
    display (head) {
        let currNode = head;
        let list = '';
        while (currNode != null) {
            list += currNode.data + "->";
            currNode = currNode.next;
        }
        console.log(list + "null");
    }
    
    displayRec (head) {
    
        if (!head) {
            return head;
        }
    
        this.displayRec(head.next);
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

    swapNthNode (head, n) {

        // No need to swap head with head.
        if ( !head || n === 1) {
            return head;
        }

        let prev = null;
        let current = head;
        let count = 1;

        while (current && count < n) {
            prev = current;
            current = current.next;
            count++;
        }

        if ( !current ) {
            return head;
        }

        // current is pointing to nth node.
        // Let's swap nth node with head.

        prev.next = head;
        let temp = head.next;
        head.next = current.next;
        current.next = temp;

        return current;
    }
    
}


//test
class Node {

    constructor (data) {
        this.data = data;
        this.next = null;
    }
}

let ll = new LinkedList();

ll.insert(1);
ll.insert(2);
ll.insert(3);
ll.insert(4);
ll.insert(5);


ll.display( ll.head );

//let x = ll.rotateList(ll.head, 2);
//console.log("Rotate LinkedList: ");

let x = ll.swapNthNode(ll.head, 4);
console.log("Swap Nth Node: ");

ll.display( x );



