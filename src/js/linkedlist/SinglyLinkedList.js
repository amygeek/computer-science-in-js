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

//export default SinglyLinkedList;

//test

(function() {
    let list1 = new SinglyLinkedList();
    list1.insert(5);
    list1.insert(7);
    list1.insert(9);
    list1.insert(9);
    list1.print();

    let list2 = new SinglyLinkedList();
    list2.insert(7);
    list2.insert(1);
    list2.insert(9);
    list2.print();

    let list3 = new SinglyLinkedList();

    list3.add_integers(list1, list2);

    console.log(list3)

})();

