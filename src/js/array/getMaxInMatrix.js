let getMaxValue = ( arr ) => {

    let row = arr.length;
    let col = arr[0].length;

    let res = [...Array(col)];
    for( let i=0; i<row; i++) {
        for (let j=0; j<col; j++) {
            let left = 0;
            let up = 0;
            if ( i > 0 ) {
                up = res[j];
            }
            if ( j > 0 ) {
                left = res[ j - 1 ];
            }

            res[j] = Math.max( up, left ) + arr[i][j];

        }
    }

    return res[col-1];
}


let arr1 = [
[1, 10, 3, 8],
[12, 2, 9, 6],
[5, 7, 4, 11],
[3, 7, 16, 5]
];

//output 53
// console.log(getMaxValue(arr1));

let arr2 = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
];

//output 29
console.log(getMaxValue(arr2));