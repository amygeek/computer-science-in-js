
/*
 Objective: Given k sorted array, write an algorithm to merge Them into One sorted array.

 Example :

 let[][] A = new let[5][];

 A[0] = new let[] { 1, 5, 8, 9 };
 A[1] = new let[] { 2, 3, 7, 10 };
 A[2] = new let[] { 4, 6, 11, 15 };
 A[3] = new let[] { 9, 14, 16, 19 };
 A[4] = new let[] { 2, 4, 6, 9 };

 Output:
 [1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8, 9, 9, 9, 10, 11, 14, 15, 16, 19]
 O(nkLogk)
 Create an result[] of size n*k.
 Create Min-Heap of type HeapNode.( HeapNode- Every Node will store the data and the list no from which it belongs).
 Now take one element from each of the K list and create HeapNode object and insert into min-Heap.
 Extract the minimum Node from the min-Heap, insert the data into result array.
 The extracted node will also contain the list to which it belongs, insert the next element from that list into min-Heap.
 If any point of time any list gets over, insert +∞ into min-Heap.
 Keep repeating until all the K list gets over.
 */

class HeapNode {
    constructor( data, listNo ) {
        this.data = data;
        this.listNo = listNo;
    }
}

class MergeKSortedArrays {

    constructor( k ) {
        this.size = k;
        this.heap = new Array(k + 1); // size+1 because index 0 will be empty
        this.position = 0;
        this.heap[0] = new HeapNode(0, -1); // put some junk values at 0th index node
    }
    
    merge( arr, k, n) {
        let nk = n * k;
        let res = new Array(nk).fill(0);
        let count = 0;

        // create index pointer for every list.
        let ptrs = new Array(k).fill(0);

    
        for (let i = 0; i < k; i++) {
            if (ptrs[i] < n) {
                this.insert(arr[i][ptrs[i]], i); // insert the element into heap
            } else {
                this.insert(Number.MAX_VALUE, i); // if any of this list burns out, insert +infinity
            }
    
        }

        while (count < nk) {
            let min = this.extractMin(); // get the min node from the heap.
            res[count] = min.data; // store node data into result array
            ptrs[min.listNo]++; // increase the particular list pointer
            if (ptrs[min.listNo] < n) { // check if list is not burns out
                this.insert(arr[min.listNo][ptrs[min.listNo]], min.listNo); // insert the next element from the list
            } else {
                this.insert(Number.MAX_VALUE, min.listNo); // if any of this list burns out, insert +infinity
            }
            count++;
        }
        return res;
    }
    
    insert(data, listNo) {
        if (this.position == 0) { // check if Heap is empty
            this.heap[this.position + 1] = new HeapNode(data, listNo); // insert the first element in heap
            this.position = 2;
        } else {
            this.heap[this.position++] = new HeapNode(data, listNo);// insert the element to the end
            this.bubbleUp(); // call the bubble up operation
        }
    }

    extractMin() {
        let min = this.heap[1]; // extract the root
        this.heap[1] = this.heap[this.position - 1]; // replace the root with the last element
        // in
        // the heap
        this.heap[this.position - 1] = null; // set the last Node as NULL
        this.position--; // reduce the this.position pointer
        this.minHeapify(1); // sink down the root to its correct this.position
        return min;
    }

    minHeapify( i ) {
        let smallest = i;
        let l = 2 * i;
        let r = 2 * i + 1;
        // check which is smaller child , 2k or 2k+1.
        if (l < this.position && this.heap[l].data < this.heap[i].data) {
            smallest = l;
        }
        if (r < this.position && this.heap[r].data< this.heap[smallest].data ) {
            smallest = r;
        }
        if (smallest != i) { // if any if the child is small, swap
            this.swap(i, smallest);
            this.minHeapify(smallest); // call recursively
        }

    }

    swap( a, b) {
        // System.out.println("swappinh" + mH[a] + " and " + mH[b]);
        let temp = this.heap[a];
        this.heap[a] = this.heap[b];
        this.heap[b] = temp;
    }

    bubbleUp() {
        let pos = this.position - 1; // last position

        while (pos > 0 && this.heap[parseInt( pos / 2 )].data > this.heap[pos].data) { // check if its parseInt( pos / 2 ) is greater.
            this.swap(parseInt( pos / 2 ), pos);
            pos = parseInt( pos / 2 ); // make pos to its parseInt( pos / 2 ) for next iteration.
        }
    }

}


let arr = [];
arr[0] = [ 1, 5, 8, 9 ];
arr[1] = [ 2, 3, 7, 10 ];
arr[2] = [ 4, 6, 11, 15 ];
arr[3] = [ 9, 14, 16, 19 ];
arr[4] = [ 2, 4, 6, 9 ];
let m = new MergeKSortedArrays(arr.length);
let lists = m.merge(arr, arr.length, arr[0].length);
console.log( lists );
