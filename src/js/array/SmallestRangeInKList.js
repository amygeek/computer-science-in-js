/*
 You have k lists of sorted integers. Find the smallest range that includes at least one number from each of the k lists.
 */
class SmallestRangeInKList {
    
    constructor( k ) {
        this.size = k;
        this.heap = new Array(k + 1); // size+1 because index 0 will be empty
        this.position = 0;
        this.heap[0] = new HeapNode(0, -1); // put some junk values at 0th index node
        this.currMax = 0; //tracks the max entry in the heap
        this.gMax = -1;
        this.gMin = -1;
        this.range = Number.MAX_VALUE;
    }
    
    merge(lists, k, n) {
        let nk = n * k;
        let count = 0;

        // create index pointer for every list.
        let ptrs = new Array(k).fill(0);
        
        
        for (let i = 0; i < k; i++) {
            this.insert( lists[i][ ptrs[i] ], i); // insert the element into heap
    
        }
        console.log(this.heap)
        while (count < nk) {
            
            let h = this.extractMin(); // get the min node from the heap.
            let min = h.data; // this is min among all the values in the heap
            
            if (this.range > this.currMax - min) { // check if current difference > this.range
                this.gMin = min;
                this.gMax = this.currMax;
                this.range = this.gMax - this.gMin;
            }
            ptrs[h.listNo]++; // increase the particular list pointer
            if (ptrs[h.listNo] < n) { // check if list is not burns out
                this.insert(lists[h.listNo][ptrs[h.listNo]], h.listNo); // insert the
                // next element
                // from the list
            } else {
                return this.range; // if any of this list
                // burns out, return this.range
            }
            count++;
        }
        return this.range;
    }
    
    insert( data,  listNo) {
        // keep track of max element entered in this.heap till now
        if (data != Number.MAX_VALUE && this.currMax < data) {
            this.currMax = data;
        }
        if (this.position == 0) { // check if this.heap is empty
            this.heap[this.position + 1] = new HeapNode(data, listNo); // insert the first element in heap
            this.position = 2;
        } else {
            this.heap[this.position++] = new HeapNode(data, listNo);// insert the element
            // to the end
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
    
class HeapNode {
    constructor( data, listNo ) {
        this.data = data;
        this.listNo = listNo;
    }
}

let lists = [];
lists[0] = [ 3, 10, 15, 24 ];
lists[1] = [ 0, 1, 2, 20 ];
lists[2] = [ 1, 18, 21, 30 ];

let m = new SmallestRangeInKList(lists.length);
let rng = m.merge(lists, lists.length, lists[0].length);
console.log("Smallest Range is: " + rng + " from " + m.gMin + " To " + m.gMax);