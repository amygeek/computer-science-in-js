/**
 * Imagine a game (like baseball) where a player can score 1, 2 or 4 runs. Given a score "n",
 * find the total number of ways score "n" can be reached.

 Fibonacci Numbers
 Memoization
 S(n)=S(n−1)+S(n−2)+S(n−4)

 Runtime Complexity
 Linear, O(n).

 Memory Complexity
 Linear, O(n).

we'll use the memoization technique.

 Memoization is an optimization technique used to make programs faster and improve their performance by storing the results of
 expensive function calls and returning the cached result when the same inputs occur again. It saves the computed results
 for possible later reuse, rather than recomputing them.

 The scoring options are 1, 2, 4. To find the number of ways a player can score 'n' runs, the recurrence relation is as follows:

 S(n) = S(n-1) + S(n-2) + S(n-4)

 n = 5
 11111
 1112
 1121
 1211
 122
 14
 2111
 212
 221
 41

 */
let scoring_options_rec = function(n, result) {
    if (n < 0) {
        return 0;
    }

    if (result[n] > 0) {
        return result[n];
    }

    result[n] = scoring_options_rec(n - 1, result) +
        scoring_options_rec(n - 2, result) +
        scoring_options_rec(n - 4, result);
    return result[n];
};

let scoring_options = function(n) {
    if (n <= 0) {
        return 0;
    }

    let result = new Array(n+1).fill(0);

    result[0] = 1;

    scoring_options_rec(n, result);

    return result[n];
};

console.log( scoring_options(5) );  //10

/**
 Runtime Complexity
 Linear, O(n).

 Memory Complexity
 Constant, O(1).

 In solution 2, we'll use the dynamic programming approach to build the solution bottom-up. We'll store the results in a fixed size array.
 Scoring options are 1, 2, 4. Maximum score is 4, so we need to save last four ways to calculate the number of ways for a given 'n'.
 On each iteration, the result will be the sum of values present at 3rd, 2nd and 0th index of the results array.
 This is because the result at 'n' is the sum of values at n-1, n-2 and n-4. We'll slide the results towards
 left and save the current result at the last index.
 */
let scoring_options_dp = function(n) {
    if (n <= 0) {
        return 0;
    }

    //Max score is 4. Hence we need to save
    //last 4 ways to calculate the number of ways
    //for a given n
    //save the base case on last index of the vector
    let result = [0, 0, 0, 1];

    for (var i = 1; i <= n; i++) {
        let current_sum = result[3] + result[2] + result[0];

        //slide left all the results in each iteration
        //result for current i will be saved at last index
        result[0] = result[1];
        result[1] = result[2];
        result[2] = result[3];
        result[3] = current_sum;
    }
    return result[3];
};

console.log( scoring_options_dp(5) );  //10

