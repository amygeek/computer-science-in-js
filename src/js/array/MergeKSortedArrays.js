
/*
 Objective: Given k sorted array, write an algorithm to merge Them into One sorted array.

 Example :

 let arr = [];
 arr[0] = [ 1, 5, 8, 9 ];
 arr[1] = [ 2, 3, 7, 10 ];
 arr[2] = [ 4, 6, 11, 15 ];
 arr[3] = [ 9, 14, 16, 19 ];
 arr[4] = [ 2, 4, 6, 9 ];

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

        this.heap = new Array(k);
        this.size = 0;

    }

    //k is the total number of lists, and n is the length of the first list in k lists
    //in the example, we have total k of 5 lists and 4 numbers in the first list
    merge( arr, k, n) {

        let nk = n * k;
        let res = new Array(nk).fill(0);

        // create index pointer for every list.
        let list = new Array(k).fill(0);


        for (let i = 0; i < k; i++) {
            if (list[i] < n) {
                this.insert(arr[i][ list[i] ], i); // insert the element into heap
            } else {
                this.insert(Number.MAX_VALUE, i); // if any of this list burns out, insert +infinity
            }

        }

        let count = 0;
        while (count < nk) {

            // get the min node from the heap.
            let min = this.extractMin();

            // store node data into result array
            res[count] = min.data;

            // increase the particular list pointer
            list[min.listNo]++;

            if (list[min.listNo] < n) { // check if list is not burns out
                this.insert(arr[min.listNo][list[min.listNo]], min.listNo); // insert the next element from the list
            } else {
                this.insert(Number.MAX_VALUE, min.listNo); // if any of this list burns out, insert +infinity
            }
            count++;
        }

        return res;
    }
    
    insert(data, listNo) {
        if (this.size == 0) { // check if Heap is empty
            this.heap[this.size] = new HeapNode(data, listNo); // insert the first element in heap
            this.size = 1;
        } else {
            this.heap[this.size++] = new HeapNode(data, listNo);// insert the element to the end
            this.bubbleUp(this.size - 1); // call the bubble up operation
        }
    }

    extractMin() {
        let min = this.heap[0]; // extract the root
        this.heap[0] = this.heap[this.size - 1]; // replace the root with the last element
        // in
        // the heap
        this.heap[this.size - 1] = null; // set the last Node as NULL
        this.size--; // reduce the this.size pointer
        this.minHeapify(0); // sink down the root to its correct this.size
        return min;
    }

    minHeapify( i ) {
        let smallest = i;
        let l = 2 * i + 1;
        let r = l + 1;
        // check which is smaller child , 2k or 2k+1.
        if (l < this.size && this.heap[l].data < this.heap[i].data) {
            smallest = l;
        }
        if (r < this.size && this.heap[r].data< this.heap[smallest].data ) {
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

    bubbleUp( i ) {


        let parent = parseInt( (i - 1) / 2 );
        if (i > 0 && this.heap[parent].data > this.heap[i].data ) {
            // swap the two if heap property is violated
            this.swap(i, parent);

            // call bubbleUp on the parent
            this.bubbleUp(parent);
        }

        //let pos = this.size - 1; // last size
        //while (pos > 0 && this.heap[parseInt( pos / 2 )].data > this.heap[pos].data) { // check if its parseInt( pos / 2 ) is greater.
        //    this.swap(parseInt( pos / 2 ), pos);
        //    pos = parseInt( pos / 2 ); // make pos to its parseInt( pos / 2 ) for next iteration.
        //}
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
console.log( lists );  //[ 1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8, 9, 9, 9, 10, 11, 14, 15, 16, 19 ]
