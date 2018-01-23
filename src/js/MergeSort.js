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
        console.log('left: ', left)
        console.log('right: ', right)

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
        return arr;
    }

}

//export default MergeSort;

//run test

let arr1 = [2, 4, 6, 1, 5, 3];

let sort = new MergeSort(arr1);

let newArr = sort.mergeSort([2, 4, 1, 6, 5, 3]);

console.log("Sorted array: ", newArr);


