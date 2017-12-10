/**
 * Given an array, find the contiguous subarray with the largest sum. 
 * In the array below, the largest sum subarray starts at index 3 and ends at 6 and the largest sum is 12.
 [-4, 2, -5, 1, 2, 3, 6, -5, 1]

 Runtime Complexity
 Linear, O(n).

 Memory Complexity
 Constant, O(1).

 Basic idea of Kadane's algorithm is scanning the entire array and at each position
 finding the maximum sum of subarray ending there. This is achieved by keeping a
 current maximum for the current array index and a global maximum. The algorithm is as follows:

 current_max = A[0]
 global_max = A[0]
 for i = 1 -> size of A
    if current_max is less than 0
        then current_max = A[i]
    otherwise
        current_max = current_max + A[i]
    if global_max is less than current_max
        then global_max = current_max
 */
let find_max_sum_sub_array = function(arr) {
    if (arr.length < 1) {
        return 0;
    }

    let curr_max = arr[0];
    let global_max = arr[0];
    let lengtharray = arr.length;
    for (let i = 1; i < lengtharray; i++) {
        if (curr_max < 0) {
            curr_max = arr[i];
        } else {
            curr_max += arr[i];
        }

        if (global_max < curr_max) {
            global_max = curr_max;
        }
    }
    return global_max;
};

let getLargestSum = ( arr ) => {

    if ( arr.length < 1 ) {
        return 0;
    }

    let largest = arr[0];
    let currentMax = arr[0];

    for (let i = 1, l = arr.length; i < l; i++) {
        if ( currentMax < 0 ) {
            currentMax = arr[i];
        } else {
            currentMax += arr[i];
        }
        if ( currentMax > largest ) {
            largest = currentMax;
        }
    }
    return largest;
}

let arr = [-4, 2, -5, 1, 2, 3, 6, -5, 1];

console.log(find_max_sum_sub_array(arr));
console.log(getLargestSum(arr));