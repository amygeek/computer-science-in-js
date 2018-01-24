/**
 * Given an integer arr, sort it in ascending order using quicksort.
 Runtime Complexity
 Linearithmic, O(nlogn).

 Memory Complexity
 Logarithmic, O(logn).

 Recursive solution has O(logn) memory complexity as it will consume memory on the stack.
 */


class Quicksort {

    swap( arr,  i,  j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    
    partition( arr, left, right) {
        
        let mid = parseInt( (left + right) / 2 ) 
        let pivot = arr[mid]; // Pick a pivot point. Can be an element.
        
        while (left <= right) { // Until we've gone through the whole array
            // Find element on left that should be on right
            while (arr[left] < pivot) {
                left++;
            }
    
            // Find element on right that should be on left
            while (arr[right] > pivot) {
                right--;
            }
    
            // Swap elements, and move left and right indices
            if (left <= right) {
                this.swap(arr, left, right);
                left++;
                right--;
            }
        }
        return left;
    }
    
    sort( arr, left, right ) {

        let pIndex = this.partition(arr, left, right);

        if (left < pIndex - 1) { // Sort left half
            this.sort(arr, left, pIndex - 1);
        }
        if (pIndex < right) { // Sort right half
            this.sort(arr, pIndex, right);
        }
    }
}


let arr = [1,8,6, 2, 1, 4, 1, 5, 0, 10];

let quicksort = new Quicksort();
quicksort.sort(arr, 0, arr.length - 1);

console.log(arr)