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

    deleteNode( v ) {
        let current = this.head;
        let previous = null;

        if ( current.data === v ) {
            this.head = current.next;
        } else {

            while(current && current.data !== v) {
                previous = current;
                current = current.next;
            }
            //not found in the list
            if (!current) {
                return null;
            }
            // skip current item that is being removed
            previous.next = current.next;
        }


        return this.head;
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

    findNthFromlastNode(head, k) {
        if ( !head || k < 1 ) {
            return null;
        }
        let current = head;
        while ( current && k > 0) {
            current = current.next;
            k--;
        }
        if ( k !== 0 ) {
            return null; //out of bound
        }
        while(current) {
            current = current.next;
            head = head.next;
        }
        return head;

    }

    add_integers (list1, list2) {

        let result = null;
        let last = null;
        let carry = 0;
        let integer1 = list1.head;
        let integer2 = list2.head;

        while (integer1 || integer2 || carry > 0) {
            let first = !integer1 ? 0 : integer1.data;
            let second = !integer2 ? 0 : integer2.data;
            let sum = first + second + carry;
            let pNew = this.insert(sum);
            carry = Math.floor(sum / 10);
            if (!result) {
                result = pNew;
            } else {
                last.next = pNew;
            }

            last = pNew;
            if (integer1) {
                integer1 = integer1.next;
            }

            if (integer2) {
                integer2 = integer2.next;
            }
        }

        return result;
    }
}

export default SinglyLinkedList;

//test
/*
(function() {
    let linkedList = new SinglyLinkedList();
    linkedList.insert(3);
    linkedList.insert(2);
    linkedList.insert(8);
    linkedList.insert(7);
    linkedList.insert(1);
    linkedList.insert(18);
    console.log(linkedList.print());
    let node = linkedList.findNthFromlastNode(linkedList.head, 1);
    console.log(node);
    console.log(linkedList.length());
    linkedList.reverseIteratively();
    console.log(linkedList.print());
    node = linkedList.reverseRecursively(linkedList.head);
    linkedList.head = node;
    console.log(linkedList.print());
    linkedList.deleteNode(18);
    console.log(linkedList.length());
    console.log(linkedList.print());
    console.log(linkedList.removeByIndex(10)); // -1
})();
*/
