const EPSILON = 0.00001;

/**
 * Given a double number, write a function to calculate its square root.
     Square root of 16 is 4 (4 x 4 = 16).
     Square root of 17 is 4.123
     Square root of 2.25 is 1.5
     For this problem assume that the given number is always a positive double number.

     Runtime Complexity
     Logarithmic, O(logn).

     Memory Complexity
     Constant, O(1).
 * @param num
 * @returns {number}
 */
let square_root_iterative = function(num) {
    let low = 0.0;

    //  square root can never be more than
    //  half of number except if number is <= 1
    //  so square root of any number always lie
    //  between 0 and 1 + (num / 2);
    let high = 1.0 + num / 2.0;

    while (low < high) {

        //  we can't do a === b for doubles because
        //  of rounding errors, so we use error threshold
        //  EPSILON. Two doubles a and b are equal if
        //   abs(a-b) <= EPSILON

        let mid = (low + high) / 2;
        let sqr = mid * mid;
        let diff = Math.abs(num - sqr);

        if (diff <= EPSILON) {
            return mid;
        }

        if (sqr < num) {
            low = mid;
        } else {
            high = mid;
        }
    }
    return -1;
};

/*************************
     Runtime Complexity
     Logarithmic, O(logn).

     Memory Complexity
     Logarithmic, O(logn)
 * @param num
 * @param low
 * @param high
 * @returns {number}
 */

let square_root_rec = function(num, low, high) {
    let mid = (low + high) / 2;
    let sqr = mid * mid;
    let diff = Math.abs(sqr - num);

    //  we can't do a === b for doubles because
    //  of rounding errors, so we use error threshold
    //  EPSILON. Two doubles a and b are equal if
    //   abs(a-b) <= EPSILON

    if (diff <= EPSILON) {
        return mid;
    }

    if (sqr < num) {
        return square_root_rec(num, mid, high);
    }

    return square_root_rec(num, low, mid);
};

let square_root_recursive = function(num) {
    return square_root_rec(num, 0, 1 + num / 2);
};

console.log(square_root_recursive(9));