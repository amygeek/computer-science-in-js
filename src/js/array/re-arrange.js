let swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

//Zig Zag Arrangement re arrange arr so that the value at even index is greater than its left and less than its right
// Given an array of unique elements rearrange the array to be a < b > c < d > e form
let arrangeArr = (arr) => {

    let n = arr.length;
    for (let i = 1; i < n; i += 2 ) {

        if ( arr[i] < arr[i - 1] ) {
            swap(arr, i - 1, i);
        }

        if ( i < n - 1 && arr[i] < arr[i+1] ) {
            swap(arr, i + 1, i);
        }

    }
    return arr;
}

console.log(arrangeArr( [4, 3, 2, 6, 7, 1, 9] ));  //Zig Zag: [ 3, 4, 2, 7, 1, 9, 6 ]

/**
 * Given an unsorted array of integers, sort the array into a wave like array. An array ‘arr[0..n-1]’ is sorted
 * in wave form if arr[0] >= arr[1] <= arr[2] >= arr[3] <= arr[4] >= …..
 * odd number should be bigger than the next even number; the even number should be smaller than the next odd number
 */

let waveArray = ( arr ) => {

    let n = arr.length;
    for (let i = 1; i < n; i += 2 ) {

        if ( arr[i] > arr[i - 1] ) {
            swap(arr, i - 1, i);
        }

        if ( i < n - 1 && arr[i] > arr[i+1] ) {
            swap(arr, i + 1, i);
        }

    }
    return arr;
}


console.log( waveArray([4, 3, 2, 6, 7, 1, 9]) );  //[ 4, 2, 6, 3, 7, 1, 9 ]


//wave arrange
let arrangeArr2 = (arr) => {

    arr.sort( (a, b) => {
        return a - b;
    });   //[ 1, 2, 3, 4, 6, 7, 9 ]

    for(let i=1; i<arr.length; i+=2) {
        swap ( arr, i, i-1)
    }
    return arr;
}

//console.log(arrangeArr2( [4, 3, 2, 6, 7, 1, 9] ));  //wave arrange: [ 2, 1, 4, 3, 7, 6, 9 ]
