/*
 Please implement a function to get the number of 1s in an integer.
 For example, the integer 9 is 1001 in binary, so it returns 2 since there are two bits of 1s.
 */

//Solution 1: Check the most right bit. only work for positive number
let numberOf1Solution1 = (n) =>{
    let count = 0;
    while(n) {
        if(n & 1) {
            count ++;
        }
        n = n >> 1;
    }

    return count;
}

//Solution 2: Check the most right bit, with left shift operation on 1. it loops 32 times on 32-bit numbers.
let numberOf1Solution2 = ( n ) => {
    let count = 0;
    let flag = 1;
    while(flag) {

        if(n & flag) {
            count ++;
        }

        flag = flag << 1;
    }

    return count;
}

//Solution 3: The number of times in the while loops equals to the number of 1 in the binary format of input n.
let numberOf1Solution3 = ( n ) => {
    let count = 0;

    while (n) {
        ++ count;
        n = (n - 1) & n;
    }

    return count;
}

console.log(numberOf1Solution3(11));  //2: 1011
