
/**
 * 
 * An Inplace function to rotate a N x N matrix by 90 degrees in clockwise direction
        a[i][j]         a[j][n-i-1]
                1  2  3
                4  5  6
                7  8  9
    arr[n-j-1][i]       a[n-i-1][n-j-1]
                7  4  1
                8  5  2
                9  6  3

            [[1,2,3,4],
             [5,6,7,8],
             [9,10,11,12],
             [13,14,15,16]]

            [[13,9,5,1],
             [14,10,6,2],
             [15,11,7,3],
             [16,12,8,4]]

 */
let rotateMatrix = ( arr, n) => {
    // Consider all squares one by one
    for (let i = 0; i < parseInt(n / 2); i++)
    {
        // Consider elements in group of 4 in current square
        for (let j = i; j < n-i-1; j++)
        {

            let temp = arr[i][j];
            // bottom left -> top left
            arr[i][j] = arr[n-j-1][i];

            // bottom right -> bottom left
            arr[n-j-1][i] = arr[n-i-1][n-j-1];

            // top right -> bottom right
            arr[n-i-1][n-j-1] = arr[j][n-i-1];

            // top left -> top right
            arr[j][n-i-1] = temp;
        }
    }
    return arr;
}
let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

arr = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
];
//[
    [13,9,5,1],
    [14,10,6,2],
    [15,11,7,3],
    [16,12,8,4]
]
console.log(rotateMatrix(arr, arr.length));



