/**
 * The objective is to fill a 9×9 grid with digits so that each column, each row, and each of the nine 3×3 sub-grids
 * that compose the grid (also called “boxes”, “blocks”, “regions”, or “sub-squares”) contains all of the digits from 1 to 9.
 Find empty cell, find int row, col number
 If there are no empty cells, return true, problem solved.
 For number  from 1 to 9
 a) If there if is safe for digit at cell[row][col]
 fill the cell[row][col]=number and recursively try fill in rest of 	grid
 b) If recursion successful, return true
 c) Else, undo the selection, cell[row][col]=0 and try another
 If all numbers are tried and solution not found, return false

 O(n ^ m) where n is the number of possibilities for each square (i.e., 9 in classic Sudoku)
 and m is the number of spaces that are blank.

 This can be seen by working backwards from only a single blank. If there is only one blank,
 then you have n possibilities that you must work through in the worst case. If there are two blanks,
 then you must work through n possibilities for the first blank and n possibilities for the second blank
 for each of the possibilities for the first blank. If there are three blanks, then you must
 work through n possibilities for the first blank. Each of those possibilities will yield a puzzle
 with two blanks that has n^2 possibilities.

 This algorithm performs a depth-first search through the possible solutions.
 Each level of the graph represents the choices for a single square.
 The depth of the graph is the number of squares that need to be filled.
 With a branching factor of n and a depth of m, finding a solution
 in the graph has a worst-case performance of O(n ^ m).
 */
class Sudoku {

    constructor( g ) {
        this.grid = g;
    }

    solveSudoku() {

        let row;
        let col;

        let blankCell = this.findBlankLocation();

        row = blankCell[0];
        col = blankCell[1];

        if ( row == -1 ) {
            // means will have filled the grid, return;
            return true;
        }
        // we need to fill grid[row][col] cell
        for ( let i = 1; i <= 9; i++) {
            // check if number i is safe for grid[row][col] cell
            if (this.isSafe( row, col, i )) {
                // means its safe to fill the number
                this.grid[row][col] = i;
                // fill the rest of the grid
                if ( this.solveSudoku()) {
                    return true;
                }
                // if we are here that means current selection of number didnt
                // work, revert back the changes
                this.grid[row][col] = 0;
            }
        }
        return false; // This will cause the backtracking
    }

    isSafe(row, col, n) {
        // we need to check row contains number n OR
        // Column contains number n OR
        // Block in which cell appears contains number n
        // If Any of the above statement is true, return false
        if (!this.usedInRow( row, n ) && !this.usedInColumn(col, n) && !this.usedInBox(row - row % 3, col - col % 3, n)) {
            return true;
        }
        return false;
    }
    
    // check if n not in particular row
    usedInRow( row,  n ) {
        for (let i = 0; i < 9; i++) {
            if (this.grid[row][i] == n) {
                return true;
            }
        }
        return false;
    }
    
    // check if n not in particular column
    usedInColumn(col, n) {
        for (let i = 0; i < 9; i++) {
            if (this.grid[i][col] == n) {
                return true;
            }
        }
        return false;
    }
    
    // check if n not in particular box
    usedInBox(boxStartRow, boxStartCol, n) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if ( this.grid[i + boxStartRow][j + boxStartCol] == n ) {
                    return true;
                }
            }
        }
        return false;
    }
    
    findBlankLocation() {
        let cell = []; // cell[0]-row cell[1] -column
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if ( this.grid[i][j] == 0 ) {
                    cell[0] = i;
                    cell[1] = j;
                    return cell;
                }
            }
        }
        cell[0] = -1;
        cell[1] = -1;
        return cell; // means grid is full
    }
    
    print() {
        for (let row = 0; row < 9; row++) {

            let str = " ";
            if (row % 3 == 0) {
                console.log( " "); // for more readability
            }
            for (let col = 0; col < 9; col++) {

                str += grid[row][col] + "  ";
    
            }
            console.log ( str );
        }
    }

}

let  grid = [[ 5, 3, 0, 0, 7, 0, 0, 0, 0 ],
             [ 6, 0, 0, 1, 9, 5, 0, 0, 0 ],
             [ 0, 9, 8, 0, 0, 0, 0, 6, 0 ],
             [ 8, 0, 0, 0, 6, 0, 0, 0, 3 ],
             [ 4, 0, 0, 8, 0, 3, 0, 0, 1 ],
             [ 7, 0, 0, 0, 2, 0, 0, 0, 6 ],
             [ 0, 6, 0, 0, 0, 0, 2, 8, 0 ],
             [ 0, 0, 0, 4, 1, 9, 0, 0, 5 ],
             [ 0, 0, 0, 0, 8, 0, 0, 7, 9 ] ];

let s = new Sudoku(grid);
if (s.solveSudoku()) {
    s.print();
} else {
    console.log("NO SOLUTION");
}
