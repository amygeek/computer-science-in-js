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
 */
//Scoring options are 1, 2, 4
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

    let result = [];
    for (let i = 0; i < n + 1; i++) {
        result[i] = 0;
    }

    result[0] = 1;

    scoring_options_rec(n, result);

    return result[n];
};

console.log( scoring_options(5) );  //10

/**
 we'll use the dynamic programming approach to build the solution bottom-up.
 We'll store the results in a fixed size array. Scoring options are 1, 2, 4.
 Maximum score is 4, so we need to save last four ways to calculate the number of ways for a given 'n'.
 Runtime Complexity
 Linear, O(n).

 Memory Complexity
 Constant, O(1).
 * @param n
 * @returns {number}
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

    for (var i = 1; i < n + 1; i++) {
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