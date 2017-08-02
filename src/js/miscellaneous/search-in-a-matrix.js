/**
 * Search (find position of) a given key in 2D matrix. All rows and columns are sorted.
 Runtime Complexity
 Linear, O(m+n) where 'm' is number of rows and 'n' is number of columns.

 Memory Complexity
 Constant, O(1).
 We start from the upper right corner of the matrix and compare its value with the key.
 If they are equal, we have found the position of the key. If the key is smaller than the current element,
 we move one position left. If the key is larger than the current element, we move one position down.
 The reason for doing so is that because the matrix is sorted, moving Left would result in lower values
 than current value and moving Down would result in higher values than current value.
 */
let search_in_matrix = function(matrix, value) {
    let rows = matrix.length; // rows
    let cols = matrix[0].length; // columns

    // Let's start searching from top right.
    // Alternatively, searching from bottom left
    // i.e. matrix[M-1][0] can also work.

    let i = 0;
    let j = cols - 1;

    while (i < rows && j >= 0) {
        if (matrix[i][j] === value) {
            return [i, j];
        } else if (value < matrix[i][j]) {
            // search left
            j--;
        } else {
            // search down
            i++;
        }
    }
    return [-1, -1];
};


let m = [
    [2, 4, 9, 13],
    [3, 5, 11, 18],
    [6, 8, 16, 21],
    [9, 11, 20, 25]
]

console.log( search_in_matrix( m, 20 ) );  //[3, 2] key's position in matrix