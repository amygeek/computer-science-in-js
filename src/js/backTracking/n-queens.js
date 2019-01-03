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
            //this.res[i] == y2 => row has a queen in the same column
            //|i - x2| == |this.res[i] - y2| => if the distance between the columns equals the distance between the rows, then they're in the same diagonal.
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
                    this.printPlacedQueen(this.res);
                }
                this.placeQueens(x + 1, n);
            }
        }
    }

    printPlacedQueen() {
        let n = this.res.length;

        for ( let i=0; i<n; i++ ) {

            let col = this.res[i];
            let str = "|";
            for ( let j=0; j<n; j++ ) {
                if ( col === j ) {
                    str += " 1 |"
                } else {
                    str += " 0 |"
                }
            }
            console.log(str);
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
// let q = new NQueens();
// q.placeQueens(0, 4);

let solve_n_queens = function(n) {
    let solved = [];
    let res = [];
    solveQueenRec(n, 0, res, solved);
    return res;
};
let solveQueenRec = (n, row, res, solved) => {
    if (row === n) {
        res.push(solved.slice());
        return;
    }
    for (let j=0; j<n; j++) {
        if (isValid(row, j, solved)) {
            solved[row] = j;
            solveQueenRec(n, row+1, res, solved);
        }
    }
}
let isValid = (row, col, solved) => {
    for (let i=0; i<row; i++) {
        if (solved[i] === col || row - i === Math.abs(solved[i] - col)) {
        return false;
        }    
    }
    return true;
}

console.log(solve_n_queens(4).toString());

// This solution uses stack to store the solution.
// Stack will hold only the column values and one solution
// will be stored in the stack at a time.

let is_valid_move = function(proposed_row, proposed_col, solution) {

    // we need to check with all queens
    // in current solution
    for (let i = 0; i < proposed_row; i++) {
      if (solution[i] === proposed_col || proposed_row - i === Math.abs(solution[i] - proposed_col)) {
        return false;
      }
    }
    return true;
  };
  
  let solve_n_queens_2 = function(n, results) {
    let solution = new Array(n);
    let sol_stack = [];
  
    let row = 0;
    let col = 0;
  
    while (row < n) {
      while (col < n) {
        if (is_valid_move(row, col, solution)) {
          sol_stack.push(col);
          solution[row] = col;
          row = row + 1;
          col = 0;
          break;
        }
        col = col + 1;
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
  
  console.log("+++++++++++++++++++++++++++++++++++++++");
  console.log("n queens");
  console.log("---------------------------------------");
  let results = [];
  solve_n_queens_2(8, results);
  console.log("Total Solutions Count: " + results.length);
  for (let i = 0; i < results.length; i++) {
      console.log(results[i]);
  }
  console.log("++++++ Test Done Successfully ++++++");

