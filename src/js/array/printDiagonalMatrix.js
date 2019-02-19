/*
 Print All Diagonals of a given matrix
 Objective: Given two dimensional matrix, write an algorithm to print all the diagonals of matrix.
 input;
 [[1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12],
  [13,14,15,16]]
  output;
  1
  5 2
  9 6 3
  13 10 7 4
  14 11 8
  15 12
  16
 */

// works on matrix that has different length on columns and rows
let printDiagonalMatrix2 = ( arr ) => {

    let m = arr.length;
    let n = arr[0].length;

    let i = 0;
    while( i < m) {

        let row = i;
        let col = 0;
        let str = "";

        while( row >= 0 && col < n ){
            str += arr[row][col] + " ";
            row--;
            col++;
        }
        
        console.log( str );
        i++;
    }

    let j = 1;
    while ( j < n ) {

        let row = m - 1;
        let col = j;
        let str = "";

        while ( col < n  ) {
            str += arr[row][col] + " ";
            row--;
            col++;
        }

        console.log( str );
        j++
    }
}

let m = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9,10,11,12],
    [13,14,15,16],
    [17,18,19,20]];
/*
 1
 5 2
 9 6 3
 13 10 7 4
 17 14 11 8
 18 15 12
 19 16
 20
 */
printDiagonalMatrix2(m);