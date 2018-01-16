
class Node {
    constructor( x ) {
        this.data = x;
        this.next = null;
    }
}

class MergeSortLinkedList {

    mergeList(a, b) {
        let result = null;
        if (a == null) {
            return b;
        }
            
        if (b == null) {
            return a;
        }
            
        if (a.data > b.data) {
            result = b;
            result.next = this.mergeList(a, b.next);
        } else {
            result = a;
            result.next = this.mergeList(a.next, b);
        }
        return result;
    }
    
    getLength( n ) {
        let count = 0;
        let current = n;
        while (current != null) {
            count++;
            current = current.next;
        }
        return count;
    }
    
    mergeSort( n ) {
        
        let oldHead = n;
        // find the length of the linkedlist
        let mid = this.getLength( n ) / 2;
        
        if (n.next == null) {
            return n;
        }
           
        // set one pointer to the beginning of the list and another at the next element after mid
        while (mid - 1 > 0) {
            oldHead = oldHead.next;
            mid--;
        }

        
        let newHead = oldHead.next;  // make newHead points to the beginning of the second half of the list
        
        oldHead.next = null;  // break the list
        oldHead = n;          // make one pointer points at the beginning of the first half of the list
        
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

        let n = new Node(9);
        n.next = new Node(3);
        n.next.next = new Node(4);
        n.next.next.next = new Node(2);
        n.next.next.next.next = new Node(5);
        n.next.next.next.next.next = new Node(1);

        this.display(n);

        let x = this.mergeSort(n);
        console.log("Sorted List: ");

        this.display(x);
    }
}

let mergeSortLinkedList = new MergeSortLinkedList();

mergeSortLinkedList.test();