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

        if (current) {
            let len = 1;
        } else {
            let len = 0;
        }
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
        return str;
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
    console.log(linkedList.length());
    linkedList.reverseIteratively();
    console.log(linkedList.print());
    let node = linkedList.reverseRecursively(linkedList.head);
    linkedList.head = node;
    console.log(linkedList.print());
    linkedList.removeByIndex(2);
    console.log(linkedList.length());
    console.log(linkedList.print());
    console.log(linkedList.removeByIndex(10)); // -1
})();
*/
