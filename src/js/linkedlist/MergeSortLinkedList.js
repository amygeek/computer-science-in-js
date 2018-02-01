
class Node {
    constructor( x ) {
        this.data = x;
        this.next = null;
    }
}

class MergeSortLinkedList {

    mergeListRec(head1, head2) {
        let result = null;
        if (head1 == null) {
            return head2;
        }
            
        if (head2 == null) {
            return head1;
        }
            
        if (head1.data > head2.data) {
            result = head2;
            result.next = this.mergeList(head1, head2.next);
        } else {
            result = head1;
            result.next = this.mergeList(head1.next, head2);
        }
        return result;
    }

    mergeList( head1, head2 ) {

        if ( !head1 ) {
            return head2;
        }

        if ( !head2 ) {
            return head1;
        }

        let mergeHead = null;
        if ( head1.data < head2.data ) {
            mergeHead = head1;
            head1 = head1.next;
        } else {
            mergeHead = head2;
            head2 = head2.next;
        }

        let mergeTail = mergeHead;
        while ( head1 && head2 ) {
            let temp = null;

            if ( head1.data < head2.data ) {
                temp = head1;
                head1 = head1.next;
            } else {
                temp = head2;
                head2 = head2.next;
            }
            mergeTail.next = temp;
            mergeTail = temp;
        }

        if ( head1 ) {
            mergeTail.next = head1;
        } else if (head2 ) {
            mergeTail.next = head2;
        }
        return mergeHead;
    }
    
    getLength( head ) {
        let count = 0;
        let current = head;
        while (current != null) {
            count++;
            current = current.next;
        }
        return count;
    }
    
    mergeSort( head ) {

        if (head.next == null) {
            return head;
        }
        
        let oldHead = head;
        // find the length of the linkedlist
        let mid = parseInt( this.getLength( head ) / 2 );

        // set one pointer to the beginning of the list and another at the next element after mid
        while (mid - 1 > 0) {
            oldHead = oldHead.next;
            mid--;
        }

        
        let newHead = oldHead.next;  // make newHead points to the beginning of the second half of the list
        
        oldHead.next = null;  // break the list
        oldHead = head;          // make one pointer points at the beginning of the first half of the list
        
        let head1 = this.mergeSort(oldHead); //make recursive calls
        let head2 = this.mergeSort(newHead);
        
        return this.mergeList(head1, head2); // merge the sorted lists
        
    }
    
    display( head ) {
        let current = head;
        let str = " "
        while (current != null) {

            str += current.data + "->";
            current = current.next;
        }
    
        console.log(str + "null");
    }
    
    test() {

        let head = new Node(9);
        head.next = new Node(3);
        head.next.next = new Node(4);
        head.next.next.next = new Node(2);
        head.next.next.next.next = new Node(5);
        head.next.next.next.next.next = new Node(1);
        head.next.next.next.next.next.next = new Node(6);

        this.display(head);

        let x = this.mergeSort(head);
        console.log("Sorted List: ");

        this.display(x);
    }
}

let mergeSortLinkedList = new MergeSortLinkedList();

mergeSortLinkedList.test();