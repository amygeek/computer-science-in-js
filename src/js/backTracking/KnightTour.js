
/*
 A knight’s tour is a sequence of moves of a knight on a chessboard such that the knight visits every square only once.
 If the knight ends on a square that is one knight’s move from the beginning square (so that it could tour the board again immediately,
 following the same path), the tour is closed, otherwise it is open

 Create a solution matrix of the same structure as chessboard.
 Start from 0,0 and index = 0. (index will represent the no of cells has been covered by the knight)
 Check current cell is not already used if not then mark that cell (start with 0 and keep incrementing it,
 it will show us the path for the knight).
 Check if index = N*N-1, means Knight has covered all the cells. return true and print the solution matrix.
 Now try to solve rest of the problem recursively by making index +1. Check all 8 directions.
 (Knight can move to 8 cells from its current position.) Check the boundary conditions as well

 If none of the 8 recursive calls return true, BACKTRACK and undo the changes ( put 0 to corresponding cell in solution matrix) and return false.
 */
class KnightTour {

    constructor( n ) {
        
        this.res = [];
        for(let i= 0; i<n; i++) {
            this.res.push( new Array( n ).fill(0));
        }
        this.path = 0;
    }
    
    solve() {
        
        if (this.findPath(0, 0, 0, this.res.length)) {
            this.print();
        } else {
            console.log("NO PATH FOUND");
        }
    }
    
    findPath( row, column, index, n) {
        // check if current is not used already
        if (this.res[row][column] != 0) {
            return false;
        }
        // mark the current cell is as used
        this.res[row][column] = this.path++;
        // if (index == 50) {
        if (index == n * n - 1) {
            // if we are here means we have solved the problem
            return true;
        }
        // try to solve the rest of the problem recursively
    
        // go down 2 and right 1
        if (this.canMove(row + 2, column + 1, n) && this.findPath(row + 2, column + 1, index + 1, n)) {
            return true;
        }
        // go down 1 and right 2
        if (this.canMove(row + 1, column + 2, n) && this.findPath(row + 1, column + 2, index + 1, n)) {
            return true;
        }
        // go up 1 and right 2
        if (this.canMove(row - 1, column + 2, n) && this.findPath(row - 1, column + 2, index + 1, n)) {
            return true;
        }
        // go up 2 and right 1
        if (this.canMove(row - 2, column + 1, n) && this.findPath(row - 2, column + 1, index + 1, n)) {
            return true;
        }
        // go up 2 and left 1
        if (this.canMove(row - 2, column - 1, n) && this.findPath(row - 2, column - 1, index + 1, n)) {
            return true;
        }
        // go up 1 and left 2
        if (this.canMove(row - 1, column - 2, n) && this.findPath(row - 1, column - 2, index + 1, n)) {
            return true;
        }
        // go down 1 and go left 2
        if (this.canMove(row + 1, column - 2, n) && this.findPath(row + 1, column - 2, index + 1, n)) {
            return true;
        }
        // go down 2 and go left
        if (this.canMove(row + 2, column - 1, n) && this.findPath(row + 2, column - 1, index + 1, n)) {
            return true;
        }
        // if we are here means nothing has worked , backtrack
        this.res[row][column] = 0;
        this.path--;
        return false;
    
    }
    
    canMove( row, col, n) {
        if (row >= 0 && col >= 0 && row < n && col < n) {
            return true;
        }
        return false;
    }

    digitFormat( d ) {
        d = d + "";
        return (d.length === 1)? "0" + d: d;
    }
    print() {
        //DecimalFormat twodigits = new DecimalFormat("00");
        for (let i = 0; i < this.res.length; i++) {
            let str = " "
            for (let j = 0; j < this.res.length; j++) {
                str += this.digitFormat( this.res[i][j] ) + "  ";
            }
            console.log( str );
        }
    }

}

let n = 5;
let i = new KnightTour(n);

i.solve();