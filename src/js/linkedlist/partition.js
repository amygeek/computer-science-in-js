/**
 * partition a linkedlist arround a value x, all nodes less than x come before all nodes greater than or equal to x
 */

class LinkedList {

    partition( node, x ) {

        let head = node;
        let tail = node;

        while ( node !== null ) {
            let next = node.next;

            if ( node.data < x ) {
                node.next = head;    //insert at head
                head = node;
            } else {
                tail.next = node;
                tail = node;
            }
            node = next;
        }
        tail.next = null;
        return head;
    }

    print( node ) {
        let current = node;
        let str = ''
        while( current ) {
            str += current.data + " -> ";
            current = current.next;
        }
        str += 'null';
        console.log( str );
    }
}

//test
class Node {
    constructor( x ) {
        this.data = x;
        this.next = null;
    }
}

let list = new Node(3);
list.next = new Node(7);
list.next.next = new Node(5);
list.next.next.next = new Node(6);
list.next.next.next.next = new Node(20);
list.next.next.next.next.next = new Node(21);
list.next.next.next.next.next.next = new Node(1);

let ll = new LinkedList();

//3 -> 7 -> 5 -> 6 -> 20 -> 21 -> 1 -> null
ll.print( list );

console.log( "partition around number 7: ")
let newList = ll.partition( list, 7);

//1 -> 6 -> 5 -> 3 -> 7 -> 20 -> 21 -> null
ll.print( newList );