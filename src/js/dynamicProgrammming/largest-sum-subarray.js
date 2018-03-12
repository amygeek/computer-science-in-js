/**
 * Given an array, find the contiguous sub-array with the largest sum. 
 * In the array below, the largest sum sub-array starts at index 3 and ends at 6 and the largest sum is 12.
 [-4, 2, -5, 1, 2, 3, 6, -5, 1]

 Runtime Complexity
 Linear, O(n).

 Memory Complexity
 Constant, O(1).

 Basic idea of Kadane's algorithm is scanning the entire array and at each position
 finding the maximum sum of sub-array ending there. 
 */

let getLargestSum = ( arr ) => {

    let n = arr.length;

    if ( n < 1 ) {
        return 0;
    }

    let max = arr[0];
    let current = arr[0];

    for (let i = 1; i < n; i++) {
        if ( current < 0 ) {
            current = arr[i];
        } else {
            current += arr[i];
        }
        if ( current > max ) {
            max = current;
        }
    }
    return max;
}

let arr = [-4, 2, -5, 1, 2, 3, 6, -5, 1];

console.log(getLargestSum(arr));