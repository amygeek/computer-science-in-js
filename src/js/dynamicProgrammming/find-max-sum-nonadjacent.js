/**
 * Find an efficient algorithm to find maximum sum of a subsequence in an array such that no consecutive elements are part of this subsequence.
 Runtime Complexity
 Linear, O(n).

 Memory Complexity
 Linear, O(n)
 */
let find_max_sum_nonadjacent = function( a ) {
    
    let len = a.length;

    if (len < 1) {
        return 0;
    } else if (len === 1) {
        return a[0];
    }

    let result = [];
    result[0] = a[0];
    for (var i = 1; i < len; i++) {

        //Max Sum of the last iteration
        result[i] = Math.max(a[i], result[i - 1]);
        if (i - 2 >= 0) {
            //Max Sum of second last iteration + current iteration index.
            result[i] = Math.max(result[i], a[i] + result[i - 2]);
        }

        console.log(result);
    }
    return result[len - 1];
};

let res = find_max_sum_nonadjacent( [1, -1, 6, -4, 2, 2] );

console.log( res ); //9