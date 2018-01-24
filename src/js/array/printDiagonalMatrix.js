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

let printDiagonalMatrix = ( arr ) => {

    let n = arr.length;

    //print first half
    let row = 0;
    let col = 0;

    while( row < n) {
        col =0;

        let rowTemp = row;
        let str = "";

        while( rowTemp >= 0 ){
            str += arr[rowTemp][col] + " ";
            rowTemp--;
            col++;
        }
        console.log( str );

        row++;
    }

    col = 1;

    while ( col < n ) {
        row = n - 1;
        let colTemp = col;
        let str = "";

        while ( colTemp < n ) {
            str += arr[row][colTemp] + " ";
            colTemp++;
            row--;
        }

        console.log( str );
        col++
    }

}

let m = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9,10,11,12],
    [13,14,15,16]];
/*
 1
 5 2
 9 6 3
 13 10 7 4
 14 11 8
 15 12
 16
 */
printDiagonalMatrix(m);