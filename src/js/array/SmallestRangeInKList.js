/*
 You have k arr of sorted integers. Find the smallest range that includes at least one number from each of the k arr.
 */
class SmallestRangeInKList {
    
    constructor( k ) {

        this.heap = new Array( k );
        this.size = 0;

        this.currMax = 0; //tracks the max entry in the heap
        this.gMax = -1;
        this.gMin = -1;
        this.range = Number.MAX_VALUE;
    }
    
    merge(arr, k, n) {

        let nk = n * k;
        // create index pointer for every list.
        let list = new Array(k).fill(0);
        
        
        for (let i = 0; i < k; i++) {
            this.insert( arr[i][ list[i] ], i); // insert the element into heap
    
        }

        let count = 0;
        while (count < nk) {

            //console.log(this.heap)

            let min = this.extractMin(); // get the min node from the heap. this is min among all the values in the heap

            if (this.range > this.currMax - min.data) { // check if current difference > this.range
                this.gMin = min.data;
                this.gMax = this.currMax;
                this.range = this.gMax - this.gMin;
            }

            list[min.listNo]++; // increase the particular list pointer

            if (list[min.listNo] < n) { // check if list is not burns out
                this.insert(arr[min.listNo][list[min.listNo]], min.listNo); // insert the next element from the list

            } else {
                return this.range; // if any of this list burns out, return this.range

            }
            count++;
        }

        return this.range;
    }
    
    insert( data,  listNo) {
        // keep track of max element entered in this.heap till now
        if ( this.currMax < data) {
            this.currMax = data;
        }
        if (this.size == 0) { // check if this.heap is empty
            this.heap[this.size++ ] = new HeapNode(data, listNo); // insert the first element in heap
        } else {
            this.heap[this.size++] = new HeapNode(data, listNo);// insert the element
            // to the end
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
        let l = 2 * i;
        let r = 2 * i + 1;
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


        let parent = parseInt( i / 2 );
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
    
class HeapNode {
    constructor( data, listNo ) {
        this.data = data;
        this.listNo = listNo;
    }
}

let arr = [];

//Smallest Range is: 2 from 1 To 3
//arr[0] = [ 3, 10, 15, 24 ];
//arr[1] = [ 0, 1, 2, 20 ];
//arr[2] = [ 1, 18, 21, 30 ];

//Smallest Range is: 4 from 20 To 24
arr[0] = [ 4, 10, 15, 24 ];
arr[1] = [ 0, 9, 12, 20 ];
arr[2] = [ 5, 18, 22, 30 ];

//Smallest Range is: 2 from 6 To 8
//arr[0] = [4, 7, 9, 12, 15]
//arr[1] = [0, 8, 10, 14, 20]
//arr[2] = [6, 12, 16, 30, 50]

//Smallest Range is: 18 from 2 To 20
//arr[0] = [4, 7];
//arr[1] =[1, 2];
//arr[2] =[20, 40];

let m = new SmallestRangeInKList(arr.length);
let rng = m.merge(arr, arr.length, arr[0].length);
console.log("Smallest Range is: " + rng + " from " + m.gMin + " To " + m.gMax);