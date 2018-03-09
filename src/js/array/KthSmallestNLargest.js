/*
1. find kth smallest number
    1) build a minHeap with same size of original array
    2) run minHeapify on minHeap
    3) loop i to k-1 to extract min

 Time Complexity: O(k + (n-k)Logk) without sorted output. If sorted output is needed then O(k + (n-k)Logk + kLogk)
 */
class KthSmallestNLargest {

    swap( arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    minHeapify(arr, size, i) {
        let l = 2 * i;
        let r = 2 * i + 1;

        let smallest = i;
        if ( l<size && arr[l] < arr[i]) {
            smallest = l;
        }
        if ( r < size && arr[r] < arr[smallest]) {
            smallest = r;
        }
        if ( smallest !== i ) {
            this.swap( arr, i, smallest);
            this.minHeapify(arr, size, smallest);
        }
    }
    buildMinHeap( arr, size ) {
        
        for(let i=Math.floor(size / 2); i>=0; i--) {
            this.minHeapify(arr, size, i);
        }
    }

    // If there are more than 1 items, move the last item to root and call heapify.
    extractMin(arr, size) {
        if ( size === 0 ) {
            return Number.MAX_VALUE;
        }
        let root = arr[0];
        
        if ( size > 1 ) {
            arr[0] = arr[size - 1];
            this.minHeapify(arr, size-1, 0)
        }
        return 0;
    }
    findKthSmallest(arr, size, k) {
        let minHeap = [];
        for ( let i=0; i<size; i++) {
            minHeap[i] = arr[i];
        }
        //[ 17, 18, 4, 16, 20, 9, 5, 1 ]
        this.buildMinHeap(minHeap, size);
        //[ 1, 4, 9, 5, 20, 17, 18, 16 ]
        for (let j=0; j<k-1; j++ ) {
            this.extractMin(minHeap, size);
        }
        return minHeap[0];
    }

    findKthLargest(arr, size, k) {

        let minHeap = [];
        //create a heap array with size of k
        for( let i=0; i<k; i++) {
            minHeap[i] = arr[i];
        }

        //buildMinHeap will run minHeapify for minHeap, so the smallest number in the front of the minHeap
        this.buildMinHeap(minHeap, k);

        //start at index k and loop through the rest of array
        for( let i=k; i<size; i++) {
            //if we found the number that is greater than the first element in the minHeap
            if(arr[i] > minHeap[0]) {
                //set the larger number for the first element
                minHeap[0] = arr[i];

                //run minHeapify to make sure it is maintained as min heap
                this.minHeapify(minHeap, k, 0);

            }
        }
        return minHeap[0];
    }
}

let kthSmallestNLargest = new KthSmallestNLargest();

let a = [17,18,4,16,20,9,5,1];
let size = a.length;

let k = 3;
console.log(kthSmallestNLargest.findKthLargest(a, size, k));  //third largest number is 16
console.log(kthSmallestNLargest.findKthSmallest(a, size, k)); //third smallest number is 5