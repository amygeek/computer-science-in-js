/**
 * Given two integers: x and y; return x ÷ y without using '/' (division) or '*' (multiplication) operators.
     Example
     7 ÷ 2 = 3
     5 ÷ 4 = 1
     1 ÷ 3 = 0
 * @param x
 * @param y
 * @returns {*}
 */
let integer_divide = function(x, y) {

    // We will return -1 if the
    // divisor is '0'.
    if (y === 0) {
        return -1;
    }

    if (x < y) {
        return 0;
    } else if (x === y) {
        return 1;
    } else if (y === 1) {
        return x;
    }

    let quotient = 1;
    let val = y;

    while (val < x) {
        val <<= 1;
        // we can also use 'val = val + val;'
        quotient <<= 1;
        // we can also use 'quotient = quotient + quotient;'
    }
    if (val > x) {
        val >>= 1;
        quotient >>= 1;
        return quotient + integer_divide(x - val, y);
    }
    return quotient;
};

console.log(integer_divide(3,2));