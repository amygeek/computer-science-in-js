let printMatrix = (matrix, col, row, n) => {

    if ( col >= n || row >= n ) {
        return;
    }
    //print top row
    for (let j = col; j<n-col; j++) {
        console.log(matrix[row][j]);
    }
    //print right column
    for (let i = row + 1; i<n-row; i++) {
        console.log(matrix[i][n-1-col]);
    }
    //print bottom row
    for (let j=n-2-col; j>=col; j--) {
        console.log(matrix[n-1-row][j]);
    }
    //print left column
    for (let i=n-2-row; i>row; i-- ) {
        console.log(matrix[i][col]);
    }
    //recursive print the rest
    printMatrix(matrix, col + 1, row + 1, n)
}
//let m2 = [
//    [1,  2,  3,  4],
//    [12, 13, 14, 5],
//    [11, 17, 16, 6],
//    [10, 9,  8,  7]
//];
let m2 = [
    [1,  2, 3, 4],
    [5,  6, 7, 8],
    [9, 10,11,12],
    [13,14,15,16]
];
/*
 Print a given matrix in spiral form
 Given a 2D array, print it in spiral form
 Input:
 1    2   3   4
 5    6   7   8
 9   10  11  12
 13  14  15  16
 Output:
 1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10
 */
printMatrix(m2, 0, 0, 4);