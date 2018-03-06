/**
 * Find an efficient algorithm to find maximum sum of a subsequence in an array such that no consecutive elements are part of this subsequence.
 Runtime Complexity
 Linear, O(n).

 Memory Complexity
 Linear, O(n)
 */
let find_max_sum_nonadjacent = function( a ) {
    
    let n = a.length;

    if (n < 1) {
        return 0;
    } else if (n === 1) {
        return a[0];
    }

    let res = [];
    res[0] = a[0];

    for (let i = 1; i < n; i++) {

        //Max Sum of the last iteration
        res[i] = Math.max(a[i], res[i - 1]);

        if (i - 2 >= 0) {
            //Max Sum of second last iteration + current iteration index.
            res[i] = Math.max(res[i], a[i] + res[i - 2]);
        }
    }
    return res[n - 1];
};

let res = find_max_sum_nonadjacent( [1, -1, 6, -4, 2, 2] );

console.log( res ); //9