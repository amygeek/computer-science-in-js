//set bit using |; clear bit using &; toggling bit using xor ^
// -0 = 11111111; -1 = 11111110
//Determining if an integer is a power of 2

let isPowerOf2 = (v) => {
    return (!!v && !(v & v-1));  //using !!v to take care 0 value
}

console.log(isPowerOf2(10));  //false
console.log(isPowerOf2(8));  //true
console.log(isPowerOf2(0));  //false

let findMin = (x, y) => {
    return y ^ (x ^ y) & -( x < y );
}


let findMax = (x, y) => {
    return x ^ (x ^ y) & -( x < y );
}

console.log(findMin(5, 8));   //5
console.log(findMax(100, 10));  //100

//compute the integer absolute value

let abs = ( x ) => {
    let mask = x >> 31;  //all 1 if it is negative and all 0 is it is positive

    /**
     * So for positives we perform an XOR with 0 and a subtraction of 0 and thus get the same number.
     * And for negatives, we got (NOT x) + 1, which is exactly -x when using twos-complement representation.
     */
    return (x ^ mask) - mask;
}

console.log( abs(-15) );  //15

// determine whether two integers differ by exactly 1 bit
let differByOne = (a, b) => {
    let x = a ^ b;
    return (x & (x - 1)) === 0;
}

console.log("It is differ by one bit: ", differByOne(0, 1));  // true
console.log("It is differ by one bit: ", differByOne(1, 2));  // false