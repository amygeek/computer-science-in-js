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
// be placed at proposed_row, proposed_col
// with current solution i.e. this move
// is valid only if no queen in current
// solution should attacked square at
// proposed_row and proposed_col
let is_valid_move = function(proposed_row, proposed_col, solution) {

    // we need to check with all queens
    // in current solution
    for (let row = 0; row < proposed_row; row++) {

        let col = solution[row];


        if (col === proposed_col || Math.abs(col - proposed_col) === proposed_row - row) {
            return false;
        }
    }
    return true;
};

let solve_n_queens_rec = function(n, solution, row, results) {
    if (row === n) {
        results.push(solution.slice());
        return;
    }

    for (let i = 0; i < n; i++) {
        if (is_valid_move(row, i, solution)) {
            solution[row] = i;
            solve_n_queens_rec(n, solution, row + 1, results);
        }
    }
};

let solve_n_queens = function(n, results) {
    let solution = new Array(n);
    solve_n_queens_rec(n, solution, 0, results);
};
/**
 Runtime Complexity
 Exponential.

 Memory Complexity
 Exponential.

 The number of solutions grow exponentially. Memory consumed by the stack will be linear, O(n)
 in this solution as there won't be more than 'n' elements in the stack at one time.
 */
// This solution uses stack to store the solution.
// Stack will hold only the column values and one solution
// will be stored in the stack at a time.
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

let re = [];

//solve_n_queens_2(4, re);


solve_n_queens(4, re);  //[ [ 1, 3, 0, 2 ], [ 2, 0, 3, 1 ] ]
console.log(re);

let placeQueen = (n) => {
    let result = [];
    let solution = [];
    moveQueen(n, solution, 0, result);
    return result;
}

let moveQueen = (n, solution, row, result) => {
    if ( row === n ) {
        result.push(solution.slice());
        return;
    }
    for (let col = 0; col < n; col++) {
        if ( canPlaceQueen (solution, row, col) ) {
            solution[row] = col;
            moveQueen(n, solution, row + 1, result);
        }
    }
}

let canPlaceQueen = (solution, row1, col1) => {
    for (let row2=0; row2<row1; row2++) {
        let col2 = solution[row2];
        if (col2 === col1) {
            return false;
        }
        let rowDistance = row1 - row2;
        colDistance = Math.abs(col1 - col2);
        if (rowDistance === colDistance) {
            return false;
        }
    }
    return true;
}

//[ [ 1, 3, 0, 2 ], [ 2, 0, 3, 1 ] ]
console.log(placeQueen(4));