/*
 Given a 2D matrix of characters. Check whether the word exist in the matrix or not. If it exists then print its this.path.
 All movements are allowed (right, left, up, down and diagonally).

 Create a solution matrix of the same structure as Matrix.
 Try each cell a starting point.
 Check current cell is not already used and character in it matches with the character in the word at index (starts will 0).
 Check if index = length of the word, means we have found the word. return true and print the solution matrix.
 If above criteria matches, mark that cell with a number Whenever any cell matches with the criteria,
 put a number corresponding to it in solution matrix. (start with 0 and keep incrementing it, it will show us the this.path for the word).
 Now try to solve rest of the problem recursively by making index +1. Check all 8 directions
 ( up, down, left right, diagonally up-left, diagonally up-right, diagonally down-left, diagonally down-right). Check the boundary conditions as well
 If none of the 8 recursive calls return true, BACKTRACK and undo the changes ( put 0 to corresponding cell in solution matrix) and return false.
 Choose different starting point.
 If all the starting points tried and solution not found, return false
 */
class WordMatrix {

    // initialize the solution matrix in constructor.
    constructor( n) {

        this.path = 1;

        this.solution = [];
        for (let i = 0; i < n; i++) {
            this.solution.push( new Array( n ).fill(0) );  //create 2D array filled with 0
        }
    }
    
    searchWord(matrix, word) {
        let n = matrix.length;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (this.search(matrix, word, i, j, 0, n)) {
                    return true;
                }
            }
        }
        return false;
    }
    
    search(matrix, word, row, col, index, n) {
    
        // check if current cell not already used or character in it is not
    
        if (this.solution[row][col] != 0 || word.charAt(index) != matrix[row][col]) {
            return false;
        }
    
        if (index == word.length - 1) {
            // word is found, return true
            this.solution[row][col] = this.path++;
            return true;
        }
    
        // mark the current cell as 1
        this.solution[row][col] = this.path++;
        // check if cell is already used
    
        if (row + 1 < n && this.search(matrix, word, row + 1, col, index + 1, n)) { // go down
            return true;
        }
        if (row - 1 >= 0 && this.search(matrix, word, row - 1, col, index + 1, n)) { // go up
            return true;
        }
        if (col + 1 < n && this.search(matrix, word, row, col + 1, index + 1, n)) { // go right
            return true;
        }
        if (col - 1 >= 0 && this.search(matrix, word, row, col - 1, index + 1, n)) { // go left
            return true;
        }
        if (row - 1 >= 0 && col + 1 < n && this.search(matrix, word, row - 1, col + 1, index + 1, n)) {  // go diagonally up right
    
            return true;
        }
        if (row - 1 >= 0 && col - 1 >= 0 && this.search(matrix, word, row - 1, col - 1, index + 1, n)) { // go diagonally up left
    
            return true;
        }
        if (row + 1 < n && col - 1 >= 0 && this.search(matrix, word, row + 1, col - 1, index + 1, n)) {
            // go diagonally down left
            return true;
        }
        if (row + 1 < n && col + 1 < n && this.search(matrix, word, row + 1, col + 1, index + 1, n)) {
            // go diagonally down right
            return true;
        }
    
        // if none of the option works out, BACKTRACK and return false
        this.solution[row][col] = 0;
        this.path--;
        return false;
    }
    
    print() {
        let n = this.solution.length;

        for (let i = 0; i < n; i++) {
            let str = " "
            for (let j = 0; j < n; j++) {
                str += this.solution[i][j] + " ";
            }
            console.log(str);
        }
    }
}


let matrix = [
    [ 't', 'z', 'x', 'c', 'd' ],
    [ 'a', 'h', 'n', 'z', 'x' ],
    [ 'h', 'w', 'o', 'i', 'o' ],
    [ 'o', 'r', 'n', 'r', 'n' ],
    [ 'a', 'b', 'r', 'i', 'n' ]];

let w = new WordMatrix(matrix.length);
if (w.searchWord(matrix, "horizon")) {
    w.print();
} else {
    console.log("NO PATH FOUND");
}
