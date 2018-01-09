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

//console.log(integer_divide(3,2));

var integerDiv = (x, y) => {

    try {
        if (y === 0) {
            throw ("can't divide by zero");
        } else if (x < y) {
            return 0;
        } else if (x === y) {
            return 1;
        } else if (y === 1) {
            return x;
        }
        let val = y;
        let q = 1;

        while ( x > val ) {
            val <<= 1;
            q <<= 1;
        }
        if ( x < val ) {
            val >>= 1;
            q >>= 1;
            return q + integerDiv(x-val, y);
        }
        return q;
    } catch(e) {
        console.log(e);
        return -1;
    }

}

console.log(integerDiv(21, 7));