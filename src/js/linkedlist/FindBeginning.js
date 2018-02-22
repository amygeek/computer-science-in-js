/**
 * giving a circular linked list return the node at beginning of the loop
 */

class FindBeginning {

    find( head ) {
        let fast = head;
        let slow = head;

        //find meeting point
        while ( fast !== null && fast.next != null ) {
            slow = slow.next;
            fast = fast.next.next;

            if ( slow == fast ) {  //collision
                break;
            }
        }

        //error check, no meeting point, no loop
        if ( fast == null || fast.next == null ) {
            return null;
        }

        //move slow to head, keep fast at the meeting point. each is k steps from the loop start, if they move at the same pace, they must meet at the loop start
        slow = head;
        while ( slow !== fast ) {
            slow = slow.next;
            fast = fast.next;
        }

        //both now point to the start of the loop
        return fast;
    }
}


//test
class LinkedList {

    constructor( x ) {
        this.head = null;
        this.data = x;
        this.next = null;
    }

    insert(data) {
        if ( this.head === null ) {
            this.head = new LinkedList(data);
            return this.head;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = new LinkedList(data);
            return current.next;
        }
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

let ll = new LinkedList();

let len = 10;
let k = 4;

// Create linked list
let nodes = [];
for (let i = 0; i < len; i++) {
    nodes[i] = ll.insert( i );
}
ll.print(nodes[0]);

// Create loop;
nodes[len - 1].next = nodes[len - k];


let findBeginning = new FindBeginning();
let loop = findBeginning.find( nodes[0] );

if (loop == null) {
    console.log("No Cycle.");
} else {
    console.log( loop.data );  //6
}




