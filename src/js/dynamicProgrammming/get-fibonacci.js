/**
 Find the nth fibonacci number.
 First 10 fibonacci numbers are: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

 Runtime Complexity
 Linear, O(n).

 Memory Complexity
 Constant, O(1).

 */
let get_fibonacci = function(n) {

    if (n === 0 || n === 1) {
        return n;
    }
    let n_1 = 1;
    let n_2 = 0;
    let res = 0;

    let i = 2;
    while (i <= n) {
        res = n_1 + n_2;
        n_2 = n_1;
        n_1 = res;
        i++;
    }

    return res;
};

/**
 Runtime Complexity
 Exponential, O(2n).
 Memory Complexity
 Linear, O(n).
 */
let get_fibonacci_rec = function(n) {

    if (n === 0 || n === 1) {
        return n;
    }

    return get_fibonacci_rec(n - 1) + get_fibonacci_rec(n - 2);
};