class QuickSort {
    
    swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    
    sort(arr, left, right) {

        let pivot = this.partition(arr, left, right);

        if (left < pivot - 1) { // Sort left half
            this.sort(arr, left, pivot - 1);
        }
        if (pivot < right) { // Sort right half
            this.sort(arr, pivot, right);
        }
    }

    partition(arr, left, right) {

        let pIndex = parseInt((left + right) / 2 );
        let pivot = arr[pIndex]; // Pick a pivot point. Can be an element.

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
} 

let quickSort = new QuickSort();

let arr = [1,8,6, 2, 1, 4, 1, 5, 0, 10];

quickSort.sort(arr, 0, arr.length - 1);
console.log( arr );