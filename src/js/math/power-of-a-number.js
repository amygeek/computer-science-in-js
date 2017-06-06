/**
 * Given a double 'x' and an integer 'n'. Write a function to calculate 'x' raised to the power 'n'. For example:

     power (2, 5) = 32
     power (3, 4) = 81
     power (1.5, 3) = 3.375
     power (2, -2) = 0.25
 * @param x
 * @param n
 * @returns {*}
     Runtime Complexity
     Logarithmic, O(logn).

     Memory Complexity
     Logarithmic, O(log n).
 */
let power_rec = function(x, n) {
    if (n === 0) {
        return 1;
    }
    if (n === 1) {
        return x;
    }

    let temp = power_rec(x, Math.floor(n / 2));
    if (n % 2 === 0) {
        return temp * temp;
    } else {
        return x * temp * temp;
    }
};

let power = function(x, n) {
    let is_negative = false;
    if (n < 0) {
        is_negative = true;
        n *= -1;
    }
    let result = power_rec(x, n);
    if (is_negative) {
        return 1 / result;
    }

    return result;
};

console.log(power(3, 5));  //243
console.log(power(2, 2));  //4
console.log(power(2, -2));  //0.25