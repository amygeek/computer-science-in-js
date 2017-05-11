/* The main function that returns the max possible product */
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



