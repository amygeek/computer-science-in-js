/**
 * Given a chess board of n N x N, determine how many ways N queens can be placed on this board so that no two queens attack each other.
 Runtime Complexity
 Factorial, O(n!).

 The recurrence relation for time complexity is:
 T(n) = nT(n-1) + O(n^2)T(n)=nT(n−1)+O(n​2)

 Memory Complexity
 O(n)

 how to place queens on an ordinary chess board so that none of them can hit any other in one move

 This earlier approach we have seen solution matrix, at every row we have only one entry as 1 and rest of the entries are 0.
 Solution matrix takes O(N2) space. We can reduce it to O(N). We will solve it by taking one dimensional array and
 consider this.res[1] = 2 as “Queen at 1st row is placed at 2nd column.

 this.res[i]=j means queen at i-th row is placed at j-th column.

 Check if Queens placed at (x1, y1) and (x2,y2) are safe

 x1==x2 means same rows,
 y1==y2 means same columns
 |x2-x1|==|y2-y1| means they are placed in diagonals.
 */
class NQueens {
    
    constructor() {
        this.res = []; // this array will store the result
    }
    // this.res[i]=j; means queen at i-th row is placed at j-th column.
    // Queens placed at (x1, y1) and (x2,y2)
    // x1==x2 means same rows, y1==y2 means same columns, |x2-x1|==|y2-y1| means
    // they are placed in diagonals.
    canPlace( x2, y2) {
    // This function will check if queen can be placed (x2,y2), or we can
        // say that Can queen at x2 row is placed at y2 column.
        // for finding the column for x2 row, we will check all the columns for
        // all the rows till x2-1.
        for (let i = 0; i < x2; i++) {
            //this.res[i] == y2 => columns are same
            //|i - x2| == |this.res[i] - y2| => in diagonals.
            if ( this.res[i] === y2 || ( Math.abs( i - x2 ) == Math.abs( this.res[i] - y2 ) )) {
                    return false;
            }
        }
        return true;
    }
    placeQueens( x, n) {

        //check if queen at xth row can be placed at i-th column.
        for (let i = 0; i < n; i++) {

            if (this.canPlace(x, i)) {

                this.res[x] = i; // place the queen at this position.

                if (x == n - 1) {
                    console.log( this.res );
                }
                this.placeQueens(x + 1, n);
            }
        }
    }
}

/***** [ [ 1, 3, 0, 2 ], [ 2, 0, 3, 1 ] ] *****
 | 0 | 1 | 0 | 0 |
 | 0 | 0 | 0 | 1 |
 | 1 | 0 | 0 | 0 |
 | 0 | 0 | 1 | 0 |

 | 0 | 0 | 1 | 0 |
 | 1 | 0 | 0 | 0 |
 | 0 | 0 | 0 | 1 |
 | 0 | 1 | 0 | 0 |
 */
let i = new NQueens();
i.placeQueens(0, 4);;





