/**
 * Given head of a linked list and a key, delete node with this given key from the linked list.
 * @param head
 * @param key
 * @returns {*}
 */

class LinkedList {

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
    
    deleteNode2(head, key) {
  
      let current = head;
      let prev = null;

      while (current) {
        if (current.data === key) {
          if (current === head) {
            head = head.next;
          } else {
            prev.next = current.next;
          }
          return head;
        } else {
          prev = current;
          current = current.next;
        }

      }
  
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

let list = new Node(7);
list.next = new Node(8);
list.next.next = new Node(5);
list.next.next.next = new Node(6);
list.next.next.next.next = new Node(20);
list.next.next.next.next.next = new Node(21);
list.next.next.next.next.next.next = new Node(9);

let ll = new LinkedList();

ll.print( list );

ll.deleteNode( list, 8);

ll.print( list );
