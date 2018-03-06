/**
 * Remove duplicate nodes from linked list of integers while keeping only the first occurrence of duplicates.
 * turn 7 ->14->28->28->14->21->null  to 7 ->14->28->21->null
 * Runtime Complexity
     Linear, O(n) - where 'n' is length of the linked list.

     Memory Complexity
     Linear, O(n) - to store visited nodes in hashset.

     For O(1) Memory Complexity, we can take following approaches
     1) If we are allowed to change the order of the list, we can just sort the linked list in O(n logn) time.
        After sorting, all duplicates must be adjacent and can be removed in a linear scan.
     2) For each node in the linked list do another scan of the preceding nodes to see if it already exists or not.
        The time complexity of this algorithm is O(n^2) but it does not require any extra space.
 * @param head
 * @returns {*}
 */
class LinkedList {

    //time O(n), space O(n)
    deleteDup( head ) {

        if ( !head ) {
            return;
        }
    
        // Let's track existing values.
        let set = new Set();
        
        let node = head;
        let prev = null;

        while ( node ) {

            if (set.has(node.data)) {
                // Duplicate node found. Let's remove it from the list.
                prev.next = node.next;
            } else {
                // Element not found in map, let's add it.
                set.add(node.data);
                prev = node;
            }
            node = node.next;
        }
    
        return head;
    }

    //quadratic time O(n2), space O(1)
    deleteDup2( head ) {

        if ( !head ) {
            return;
        }

        let current = head;

        while ( current ) {

            let runner = current;

            while ( runner.next ) {

                if ( runner.next.data == current.data ) {
                    runner.next = runner.next.next;
                } else {
                    runner = runner.next;
                }
            }
            current = current.next;
        }
        return head;
    }
    
    print(node) {
        
        if ( !node ) {
            return;
        }
        
        let str = '';
        while (node) {
            str += node.data + '->';
            node = node.next;
        }
        console.log(str + " null");
    }

}

//test
class Node {
    constructor( x ) {
        this.data = x;
        this.next = null;
    }
}

//turn 7->14->28->28->14->21->28-> null  to 7->14->28->21->null
let list = new Node(7);
list.next = new Node(14);
list.next.next = new Node(28);
list.next.next.next = new Node(28);
list.next.next.next.next = new Node(14);
list.next.next.next.next.next = new Node(21);
list.next.next.next.next.next.next = new Node(28);

let ll = new LinkedList();
ll.print(list)

ll.deleteDup2(list);

ll.print(list)


