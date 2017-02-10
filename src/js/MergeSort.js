class MergeSort {
    
    constructor( data ) {
        this.data = data;
    }
    
    swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    
    merge(results, left, right ) {

        let i = 0, j = 0, k = 0;

        while (k < results.length) {
            
            if (j >= right.length || ( i < left.length && left[i] <= right[j] ) ) {
                results[k++] = left[i++];
            } else {
                results[k++] = right[j++];
            }
        }  
    }
    
    mergeSort(arr) {
        
        let mid, len, left, right;
        
        len = arr.length;

        if (len < 2) {
            return; // base condition. If the array has less than two element, do nothing. 
        }

        mid = Math.floor( len / 2 );  // find the mid index. 
        left    = arr.slice(0, mid),
        right   = arr.slice(mid),

        this.mergeSort(left);  // sorting the left subarray
        this.mergeSort(right);  // sorting the right subarray
        this.merge(arr, left, right);  // Merging left and right into A as sorted list.
    }

} 

export default MergeSort;