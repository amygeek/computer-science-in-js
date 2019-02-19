

/**
 * Find longest consecutive subsequence in unsorted array.
 *
 Time complexity : O(n).

 Although the time complexity appears to be quadratic due to the while loop nested within the for loop,
 closer inspection reveals it to be linear. Because the while loop is reached only when current i marks
 the beginning of a sequence (i.e. i-1 is not present in the set ), the while loop can only run
 for n iterations throughout the entire runtime of the algorithm. This means that despite looking
 the nested loops actually run in O(n + n) =O(n) time.
 All other computations occur in constant time, so the overall runtime is linear.

 Space complexity : O(n).
 */

let longestConsecutiveSubsequence = ( arr ) => {
    let n = arr.length;
    let max = 0;
    let set = new Set();

    // create set of the arr to remove all duplicate value since they are irrelevant to the sequence
    for (let i=0; i<n; ++i) {
        set.add(arr[i]);
    }
    // check each possible sequence from the set
    for (let val of set) {
        
        // if i-1 (leftmost start sequence) is not present in the set
        if (!set.has(val - 1)) {
            // Then check for next elements in the sequence
            let len = 0;
            while (set.has(val++)) {
                len++;
            }

            max = Math.max(max, len);

        }
    }
    return max;
}


let arr = [4, 2, 1, 6, 5];
console.log(longestConsecutiveSubsequence ( arr ));  // Max: 3 -> 4, 5, 6