/**
 * Given a chess board of size N x N, determine how many ways N queens can be placed on this board so that no two queens attack each other.
 Runtime Complexity
 Factorial, O(n!).

 The recurrence relation for time complexity is:
 T(n) = nT(n-1) + O(n^2)T(n)=nT(n−1)+O(n​2)

 Memory Complexity
 Exponential.
 */
// this method determines if a queen can
// be placed at row, col
// with current solution i.e. this move
// is valid only if no queen in current
// solution should attacked square at
// proposed_row and proposed_col
let isValidMove = (solution, row, col) => {
    // check all queens in current solution
    for (let row2=0; row2<row; row2++) {
        let col2 = solution[row2];
        if (col2 === col) {
            return false;
        }
        let rowDistance = row - row2;
        colDistance = Math.abs(col - col2);

        if (rowDistance === colDistance) {
            return false;
        }
    }
    return true;
}

let solveQueenRec = (n, solution, row, result) => {
    if ( row === n ) {
        result.push(solution.slice());
        return;
    }
    for (let col = 0; col < n; col++) {
        if ( isValidMove (solution, row, col) ) {
            solution[row] = col;
            solveQueenRec(n, solution, row + 1, result);
        }
    }
}

let solveQueen = (n) => {
    let result = [];
    let solution = new Array(n);
    solveQueenRec(n, solution, 0, result);
    return result;
}

/**
 Runtime Complexity
 Exponential.

 Memory Complexity
 O(n)

 The number of solutions grow exponentially. Memory consumed by the stack will be linear, O(n)
 in this solution as there won't be more than 'n' elements in the stack at one time.
 */
// This solution uses stack to store the solution.
// Stack will hold only the column values and one solution
// will be stored in the stack at a time.
let solveQueens2 = function(n, results) {
    let solution = new Array(n);
    let sol_stack = [];

    let row = 0;
    let col = 0;

    while (row < n) {
        while (col < n) {
            if (isValidMove(solution, row, col)) {
                sol_stack.push(col);
                solution[row] = col;
                row++;
                col = 0;
                break;
            }
            col++;
        }

        if (col === n) {
            if (sol_stack.length != 0) {
                col = sol_stack.pop() + 1;
                row = row - 1;

            } else {
                break; // no more solutions exist
            }
        }

        if (row === n) {
            // add the solution into results
            results.push(solution.slice());

            // backtrack to find the next solution
            row = row - 1;
            col = sol_stack.pop() + 1;
        }
    }
};

let re = [];
solveQueens2(4, re);  //[ [ 1, 3, 0, 2 ], [ 2, 0, 3, 1 ] ]
console.log(re);


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
console.log(solveQueen(4));

