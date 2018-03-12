/*
 Objective: Given a rope of length n meters, write an algorithm to cut the rope in such a way that product of different
 lengths of rope is maximum. At least one cut has to be made.
 
 Rope length: 2 
 Options: (1*1)
 Maximum Product Cutting : 1*1 = 1

 Rope length: 3 
 Options: (1*1*1, 2*1)
 Maximum Product Cutting : 2*1 = 2

 Rope length: 4 
 Options: (1*1*1*1, 2*1*1, 3*1, 2*2)
 Maximum Product Cutting : 2*2 = 4

 Rope length: 5 
 Options: (1*1*1*1*1, 2*1*1*1, 3*1*1, 2*2*1, 3*2)
 Maximum Product Cutting : 3*2 = 2
 */


/*
 Time Complexity: O(2n).
                    m(4)
             /       |      \
           m(3)     m(2)    m(1)
           / \        |
       m(2)  m(1)   m(1)

 */
let maxProductRec = ( n ) => {
    // base case
    if (n == 0 || n == 1) {
        return 0;
    }
    // make all possible cuts and get the maximum
    let max = 0;
    for (let i = 1; i < n; i++) {
        // Either this cut will produce the max product OR we need to make further cuts
        max = Math.max(max, i * (n - i), i * maxProductRec( n - i ) );
    }

    return max;
}


/*
 Time Complexity: O(n2).
 Dynamic Programming: Bottom-Up manner.

 We will store the solutions for sub problems when it getting solved for the first time and use it again in future
 so that we don’t have to solve again.
 */
let maxProductCutting = ( n ) => {

    let res = new Array( n + 1).fill(0);
    res[1] = 1;

    for (let i = 2; i <= n; i++) {

        let max = Number.MIN_VALUE;

        for (let j = 1; j < i; j++) {
            max = Math.max(max, j * res[i - j], j * (i - j ) );
        }
        res[i] = max;
    }

    return res[n];

}

console.log("Maximum product cutting in 10 is follow: ");
console.log( maxProductRec( 5 ) );
console.log( maxProductCutting( 5 ) );