
let factorial = function(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
};

/**
 * Given a set of n elements find their kth permutation.
 * Runtime Complexity
 Linear, O(n).

 * Memory Complexity
 Linear, O(n).
 * @param n
 * @returns {number}
 */
let findKthPermutation = function(v, k, result) {
    if (!v || v.length === 0) {
        return;
    }

    let n = v.length;
    // count is number of permutations starting with first digit
    let count = factorial(n - 1);

    let selected = Math.floor((k - 1) / count);

    result.push( v[selected]);

    v.splice(selected, 1);
    k = k - (count * selected);

    findKthPermutation(v, k, result);
    return result.join('');
};

let result = [];
console.log(findKthPermutation([1, 2, 3, 4], 8, result ));