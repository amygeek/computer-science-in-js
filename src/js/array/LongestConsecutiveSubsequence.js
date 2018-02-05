

/**
 * Find longest consecutive subsequence in unsorted array.
 *
 Time complexity : O(n).

 Although the time complexity appears to be quadratic due to the while loop nested within the for loop,
 closer inspection reveals it to be linear. Because the while loop is reached only when currentNum marks
 the beginning of a sequence (i.e. currentNum-1 is not present in nums), the while loop can only run
 for nn iterations throughout the entire runtime of the algorithm. This means that despite looking
 the nested loops actually run in O(n + n) =O(n) time.
 All other computations occur in constant time, so the overall runtime is linear.

 Space complexity : O(n).
 */

let longestConsecutiveSubsequence = ( arr ) => {

    let set = new Set();

    let n = arr.length;
    let max = 0;

    // Hash all the array elements
    for (let i=0; i<n; ++i) {
        set.add(arr[i]);
    }
    // check each possible sequence from the start
    // then update optimal length
    for (let i=0; i<n; ++i) {
        // if current element is the starting
        // element of a sequence
        if ( !set.has( arr[i] - 1 ) ) {
            // Then check for next elements in the
            // sequence
            let j = arr[i];
            while (set.has(j)) {
                j++;
            }

            // update  optimal length if this length
            // is more
            if ( max < j - arr[i] ) {
                max = j - arr[i];
            }

        }
    }
    return max;
}


let arr = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutiveSubsequence ( arr ));