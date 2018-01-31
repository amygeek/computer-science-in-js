let flip = ( bit ) => {
    return 1 ^ bit;
}

/* Returns 1 if a is positive, and 0 if a is negative */
let sign = ( a ) => {
    return flip((a >> 31) & 0x1);   //0x1 is a hex value of 1.
}

let getMax = ( a,  b) => {

    let c = a - b;

    let sa = sign(a); // if a >= 0, then 1 else 0
    let sb = sign(b); // if b >= 0, then 1 else 0
    let sc = sign(c); // depends on whether or not a - b overflows

    /* We want to define a value k which is 1 if a > b and 0 if a < b. 
     * (if a = b, it doesn't matter what value k is) */

    let use_sign_of_a = sa ^ sb; // If a and b have different signs, then k = sign(a)
    let use_sign_of_c = flip(sa ^ sb); // If a and b have the same sign, then k = sign(a - b)

    /* 
    We can't use a comparison operator, but we can multiply values by 1 or 0 
    if a > b, k will be 1, q will be 0, so (a * k + b * q) returns max a
    if a < b, k will be 0, q will be 1, so (a * k + b * q) returns max b
    */
    let k = use_sign_of_a * sa + use_sign_of_c * sc;
    let q = flip(k); // opposite of k

    return a * k + b * q;
}

console.log( getMax( 2, 11 ));
console.log( getMax( 10, 2 ));