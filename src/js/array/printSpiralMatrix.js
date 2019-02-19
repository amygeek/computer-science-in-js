let printMatrixRec = (matrix, col, row, n) => {

    if ( col >= parseInt(n / 2) || row >= parseInt( n /2 ) ) {
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
    printMatrixRec(matrix, col + 1, row + 1, n)
}

let printMatrix = (matrix) => {

    let m = 0;  // row index
    let n = 0;  // column index
    let row = matrix.length;
    let col = matrix[0].length;

    while ( m < row && n < col ) {
        /* Print the first row from the remaining rows */
        for (let i = n; i<col; i++) {
            console.log(matrix[m][i]);
        }
        m++;

        /* Print the last column from the remaining columns */
        for (let i = m; i < row; i++) {
            console.log(matrix[i][col-1]);
        }
        col--;

        /* Print the last row from the remaining rows */
        for (let i = col-1; i>=n; i--) {
            console.log(matrix[row-1][i]);
        }
        row--;

        /* Print the first column from the remaining columns */
        for (let i=row-1; i>=m; i-- ) {
            console.log(matrix[i][n]);
        }
        n++;
    }
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
//printMatrixRec(m2, 0, 0, 4);

printMatrix(m2)
