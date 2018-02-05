/*
 O(n) extra space.
 The ugly-number sequence is 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, …
 because every number can only be divided by 2, 3, 5, one way to look at the sequence is to split the sequence to three groups as below:
 (1) 1×2, 2×2, 3×2, 4×2, 5×2, …
 (2) 1×3, 2×3, 3×3, 4×3, 5×3, …
 (3) 1×5, 2×5, 3×5, 4×5, 5×5, …
 initialize
 ugly[] =  | 1 |
 i2 =  i3 = i5 = 0;

 First iteration
 ugly[1] = Min(ugly[i2]*2, ugly[i3]*3, ugly[i5]*5)
 = Min(2, 3, 5)
 = 2
 ugly[] =  | 1 | 2 |
 i2 = 1,  i3 = i5 = 0  (i2 got incremented )

 Second iteration
 ugly[2] = Min(ugly[i2]*2, ugly[i3]*3, ugly[i5]*5)
 = Min(4, 3, 5)
 = 3
 ugly[] =  | 1 | 2 | 3 |
 i2 = 1,  i3 =  1, i5 = 0  (i3 got incremented )

 Third iteration
 ugly[3] = Min(ugly[i2]*2, ugly[i3]*3, ugly[i5]*5)
 = Min(4, 6, 5)
 = 4
 ugly[] =  | 1 | 2 | 3 |  4 |
 i2 = 2,  i3 =  1, i5 = 0  (i2 got incremented )

 Fourth iteration
 ugly[4] = Min(ugly[i2]*2, ugly[i3]*3, ugly[i5]*5)
 = Min(6, 6, 5)
 = 5
 ugly[] =  | 1 | 2 | 3 |  4 | 5 |
 i2 = 2,  i3 =  1, i5 = 1  (i5 got incremented )

 Fifth iteration
 ugly[4] = Min(ugly[i2]*2, ugly[i3]*3, ugly[i5]*5)
 = Min(6, 6, 10)
 = 6
 ugly[] =  | 1 | 2 | 3 |  4 | 5 | 6 |
 i2 = 3,  i3 =  2, i5 = 1  (i2 and i3 got incremented )

 Will continue same way till I < 150
 */
let uglyNumber = ( n ) => {

    let res = new Array( n).fill( 0 ) ;  //to store ugly number

    let i2 = 0;
    let i3 = 0;
    let i5 = 0;
    let nextMultiplyI2 = 2;
    let nextMultiplyI3 = 3;
    let nextMultiplyI5 = 5;
    let nextUglyNum = 1;

    for ( let i=1; i<n; i++ ) {

        nextUglyNum = Math.min(nextMultiplyI2, Math.min( nextMultiplyI3, nextMultiplyI5));

        res[i] = nextUglyNum;

        if (nextUglyNum === nextMultiplyI2 ) {
            i2++;
            nextMultiplyI2 = res[i2] * 2;
        }

        if ( nextUglyNum === nextMultiplyI3 ) {
            i3++;
            nextMultiplyI3 = res[i3] * 3;
        }
        if ( nextUglyNum === nextMultiplyI5 ) {
            i5++;
            nextMultiplyI5 = res[i5] * 5;
        }
    }
    console.log(res);
    return nextUglyNum;
}

console.log( uglyNumber ( 10 ));