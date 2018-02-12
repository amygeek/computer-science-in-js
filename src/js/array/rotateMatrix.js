// An Inplace function to rotate a N x N matrix
// by 90 degrees in Anti-Clockwise direction
let rotateMatrix = ( arr, n) => {

    // Consider all squares one by one
    for (let x = 0; x < n / 2; x++)
    {
        // Consider elements in group of 4 in
        // current square
        for (let y = x; y < n-x-1; y++)
        {

            let temp = arr[x][y];
            // move values from right to top
            arr[x][y] = arr[y][n-x-1];

            // move values from bottom to right
            arr[y][n-x-1] = arr[n-x-1][n-y-1];

            // move values from left to bottom
            arr[n-x-1][n-y-1] = arr[n-y-1][x];

            // assign temp to left
            arr[n-y-1][x] = temp;
        }
    }
    return arr;
}

let arr = [[1,2,3], [4,5,6], [7,8,9]];

/*
 1  2  3
 4  5  6
 7  8  9

 3  6  9
 2  5  8
 1  4  7
 */

//console.log(rotateMatrix(arr, 3));

// An Inplace function to rotate a N x N matrix
// by 90 degrees in clockwise direction
let rotateMatrix2 = ( arr, n) => {

    // Consider all squares one by one
    for (let x = 0; x < n / 2; x++)
    {
        // Consider elements in group of 4 in
        // current square
        for (let y = x; y < n-x-1; y++)
        {

            let temp = arr[x][y];
            // left -> top
            arr[x][y] = arr[n-y-1][x];

            // bottom -> left
            arr[n-y-1][x] = arr[n-x-1][n-y-1];

            // right -> bottom
            arr[n-x-1][n-y-1] = arr[y][n-x-1];

            // top -> right
            arr[y][n-x-1] = temp;
        }
    }
    return arr;
}
arr = [[1,2,3], [4,5,6], [7,8,9]];
console.log(rotateMatrix2(arr, 3));

// An Inplace function to rotate a N x N matrix
// by 90 degrees in Clockwise direction
let rotateMatrix3 = ( arr, n) => {

    // Consider all squares one by one
    for (let x=0; x < n/2; x++) {
        let first = x;
        let last = n - x -1;

        for(let i=first; i<last; i++) {

            let offset = i-first;
            let temp = arr[first][i];

            arr[first][i] = arr[last-offset][first];

            arr[last-offset][first] = arr[last][last-offset];

            arr[last][last-offset] = arr[i][last];

            arr[i][last] = temp;
        }
    }

    return arr;
}

/*
 1  2  3
 4  5  6
 7  8  9

 7  4  1
 8  5  2
 9  6  3
 */
arr = [[1,2,3], [4,5,6], [7,8,9]];
//console.log(rotateMatrix3(arr, 3));
