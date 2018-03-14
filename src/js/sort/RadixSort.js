
class RadixSort {
    
    // A function to do counting sort of arr[] according to
    // the digit represented by exp.
    countSort(arr, n, exp) {
    
        let i;
        let output = []; // output array
        let count = new Array(10).fill(0);
    
        // Store count of occurrences in count[]
        for (i = 0; i < n; i++) {
            let index = parseInt( arr[i] / exp );
            count[ index % 10]++;
        }

        // Change count[i] so that count[i] now contains
        // actual position of this digit in output[]
        for (i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }

        // Build the output array
        for (i = n - 1; i >= 0; i--) {

            let index = parseInt( arr[i] / exp );

            output[count[ index % 10 ] - 1] = arr[i];
            count[ index % 10 ]--;
        }
    
        // Copy the output array to arr[], so that arr[] now
        // contains sorted numbers according to curent digit
        for (i = 0; i < n; i++) {
            arr[i] = output[i];
        }
    }
    
    // The main function to that sorts arr[] of size n using
    // Radix Sort
    sort(arr, n) {
        // Find the maximum number to know number of digits
        let m = Math.max( ...arr );
    
        // Do counting sort for every digit. Note that instead
        // of passing digit number, exp is passed. exp is 10^i
        // where i is current digit number
        for (let exp = 1; parseInt(m/exp) > 0; exp *= 10) {
            this.countSort(arr, n, exp);
        }
    }

}

let radixSort = new RadixSort();

let arr = [170, 45, 75, 888];

radixSort.sort( arr, arr.length );
console.log( arr );  //[ 45, 75, 170, 888 ]