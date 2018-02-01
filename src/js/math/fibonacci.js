/**
 * Find the nth fibonacci number.
 * --------------------------------------------------------
     Fibonacci numbers are defined as:

     Fib(0): 0
     Fib(1): 1
     Fib(N): Fib(N-1) + Fib(N-2), for N >= 2
     First 10 fibonacci numbers are: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

     Runtime Complexity
        Exponential, O(2n).
     Memory Complexity
        Linear, O(n).
     Memory complexity of recursive solution is O(n) as each recursive call consumes memory on the stack.
 */
let fibonacciRec = (n) => {

    if (n === 0 || n === 1) {
        return n;
    }

    return fibonacciRec(n - 1) + fibonacciRec(n - 2);
};

/**
 * Runtime Complexity
     Linear, O(n).

 * Memory Complexity
     Constant, O(1).
 */
let fibonacci = (n) => {

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