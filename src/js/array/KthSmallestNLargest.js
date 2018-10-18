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
        return root;
    }
    findKthSmallest(arr, size, k) {
        
        let minHeap = [...arr];
        
        //[ 17, 18, 4, 16, 20, 9, 5, 1 ]
        this.buildMinHeap(minHeap, size);

        //minHeap: [ 1, 4, 9, 5, 20, 17, 18, 16 ]
        for (let j=0; j<k-1; j++ ) {
            this.extractMin(minHeap, size);
        }
        return minHeap[0];
    }

    maxHeapify(arr, size, i) {
        let l = 2 * i;
        let r = 2 * i + 1;

        let max = i;
        if ( l<size && arr[l] > arr[i]) {
            max = l;
        }
        if ( r < size && arr[r] > arr[max]) {
            max = r;
        }
        if ( max !== i ) {
            this.swap( arr, i, max);
            this.maxHeapify(arr, size, max);
        }
    }
    buildMaxHeap( arr, size ) {
        
        for(let i=Math.floor(size / 2); i>=0; i--) {
            this.maxHeapify(arr, size, i);
        }
    }

    // If there are more than 1 items, move the last item to root and call heapify.
    extractMax(arr, size) {
        if ( size === 0 ) {
            return Number.MIN_VALUE;
        }
        let root = arr[0];
        
        if ( size > 1 ) {
            arr[0] = arr[size - 1];
            this.maxHeapify(arr, size-1, 0)
        }
        return root;
    }

    findKthLargest(arr, size, k) {

        let maxHeap = [...arr];
        
        //[ 17, 18, 4, 16, 20, 9, 5, 1 ]
        this.buildMaxHeap(maxHeap, size);
        //maxHeap: [ 20, 18, 17, 16, 4, 9, 5, 1 ]
        for (let j=0; j<k-1; j++ ) {
            this.extractMax(maxHeap, size);
        }
        return maxHeap[0];
    }
}

let kthSmallestNLargest = new KthSmallestNLargest();

let arr = [17,18,4,16,20,9,5,1];
let k = 3;

console.log(kthSmallestNLargest.findKthLargest(arr, arr.length, k));  //third largest number is 17
console.log(kthSmallestNLargest.findKthSmallest(arr, arr.length, k)); //third smallest number is 5