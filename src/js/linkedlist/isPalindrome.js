/**
 * check if a linked list is a palindrome
 */

class LinkedList {

    isPalindrome ( head ) {

        let fast = head;
        let slow = head;
        let stack = [];

        // push elements from half of linked list onto stock. When fast which is moving 2x speed reaches the end of
        // the linked list, then we know we are at the middle
        while ( fast !== null && fast.next !== null ) {

            stack.push( slow.data );
            slow = slow.next;
            fast = fast.next.next;
        }

        //has odd number of elements, skip the middle element
        if ( fast !== null ) {
            slow = slow.next;
        }

        while ( slow != null ) {

            let top = stack.pop();

            if ( top !== slow.data ) {
                return false;
            }
            slow = slow.next;
        }
        return true;
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

let list = new Node(1);
list.next = new Node(2);
list.next.next = new Node(3);
list.next.next.next = new Node(4);
list.next.next.next.next = new Node(3);
list.next.next.next.next.next = new Node(2);
list.next.next.next.next.next.next = new Node(1);

let ll = new LinkedList();

//1 -> 2 -> 3 -> 4 -> 3 -> 2 -> 1 -> null
ll.print( list );


let isPalindrome = ll.isPalindrome( list);

console.log( "Is list a palindrome : ",  isPalindrome);   //true