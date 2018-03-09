//Print All Path From Top Left To Bottom Right

let printPath = ( arr, row, col, result, pos) => {

    if ( col === arr[0].length - 1 && row === arr.length - 1) {
        result[pos] = arr[row][col];
        console.log(result);
        return;
    }

    if ( row >= arr.length || col >= arr[0].length ) {
        return;
    }

    result[pos] = arr[row][col];
    printPath( arr, row, col+1, result, pos+1);
    printPath( arr, row + 1, col, result, pos+1)
}

let arr = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]];
/*
 [1, 2, 3, 4, 8, 12]
 [1, 2, 3, 7, 8, 12]
 [1, 2, 3, 7, 11, 12]
 [1, 2, 6, 7, 8, 12]
 [1, 2, 6, 7, 11, 12]
 [1, 2, 6, 10, 11, 12]
 [1, 5, 6, 7, 8, 12]
 [1, 5, 6, 7, 11, 12]
 [1, 5, 6, 10, 11, 12]
 [1, 5, 9, 10, 11, 12]
 */
let result = new Array ( arr.length + arr[0].length - 1 );
printPath(arr, 0, 0, result,0);