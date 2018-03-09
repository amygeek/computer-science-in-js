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

//works only on matrix that has same length on columns and rows
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

////works on matrix that has different length on columns and rows
let printDiagonalMatrix2 = ( arr ) => {

    let row = arr.length;
    let col = arr[0].length;

    let i = 0;

    while( i < row) {

        let c = 0;
        let temp = i;
        let str = "";

        while( temp >= 0 && c < col ){
            str += arr[temp][c] + " ";
            temp--;
            c++;
        }
        console.log( str );

        i++;
    }

    let j = 1;
    while ( j < col ) {

        let r = row - 1;
        let temp = j;
        let str = "";

        while ( temp < col  ) {
            str += arr[r][temp] + " ";
            temp++;
            r--;
        }

        console.log( str );
        j++
    }

}


/*
 1
 4 2
 7 5 3
 8 6
 9
let m = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]];
*/

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