/*
*The main function that returns the max possible product
* Given a positive integer n, break it into the sum of at least two positive integers
* and maximize the product of those integers. Return the maximum product you can get.
* For example, given n = 2, return 1 (2 = 1 + 1); given n = 10, return 36 (10 = 3 * 3 * 4).
* If we see the breaking result for some numbers, we can see repeated pattern like the following:
    2 -> 1*1
    3 -> 1*2
    4 -> 2*2
    5 -> 3*2
    6 -> 3*3
    7 -> 3*4
    8 -> 3*3*2
    9 -> 3*3*3
    10 -> 3*3*4
    11 -> 3*3*3*2
*/
function maxProd( n ) {
    // n equals to 2 or 3 must be handled explicitly
    if (n == 2 || n == 3) {
        return ( n - 1);
    }

    // Keep removing parts of size 3 while n is greater than 4
    let product = 1;
    while (n > 4) {
        n -= 3;       //decrement n by 3
        product *= 3; // multiple product by 3
    }
    return (n * product); // The remaining n multiplied by previous product
}


console.log( "Maximum Product is " + maxProd(11) );  //54



