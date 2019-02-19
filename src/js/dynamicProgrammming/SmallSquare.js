
/*
 Minimum Numbers are Required Whose Square Sum is Equal To a Given Number
 Given a number, Write an algorithm to find out minimum numbers required whose square is equal to the number.
 Given Number: 12

 Numbers whose sum of squares are equal to 12.

 1 pow2 + 1 pow 2 + ....+ 1 pow2 = 12  //count 12

 2 pow 2+ 2 pow 2+ 2 pow 2 = 12  //count 3

 3 pow 2+ 1 pow 2 + 1 pow 2 + 1 pow 2 = 12  //count 4

 Answer: 3 numbers (2,2,2)

 this problem has been reduced to “Minimum Coin Change Problem” with some modification. In “Minimum Coin Change Problem“,
 the minimum numbers of coins are required to make change of a given amount,
 here minimum numbers required whose square sum is equal to given number.
 */
class SmallSquare {

    //solve using recursion
    solveRecursively( n, options) {
        if (n <= 0) {
            return 0;
        }

        let min = this.solveRecursively(n - 1 * 1, options);
        for (let i = 2; i <= options; i++) {
            if (n >= i * i) {
                min = Math.min(min, this.solveRecursively(n - i * i, options));
            }
        }
        return min + 1;
    }

    solve( n ) {

        let options = parseInt( Math.sqrt( n ) );

        //solve using recursion
        console.log(this.solveRecursively(n, options));

    }

    getMinSquare( n ) {
        // Create a dynamic programming table
        // to store sq
        
        let res = new Array( n+1 );
    
        // getMinSquares table for base case entries
        res[0] = 0;
        res[1] = 1;
        res[2] = 2;
        res[3] = 3;
    
        // getMinSquares rest of the table using recursive
        // formula
        for (let i = 4; i <= n; i++) {
            // max value is i as i can always be represented as 1*1 + 1*1 + ...
            res[i] = i;

            // Go through all smaller numbers to find the minimum
            for (let x = 1; x <= i; x++) {
                let temp = x * x;
                if (temp > i) {
                    break;
                } else {
                    res[i] = Math.min(res[i], 1 + res[i - temp]);
                }
            }
        }

        console.log( res[n] );
    }
    
}

let N = 12;
let smallSquare = new SmallSquare();
smallSquare.solve(N);
smallSquare.getMinSquare(N);