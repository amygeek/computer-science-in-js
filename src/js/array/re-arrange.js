let swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

//Zig Zag Arrangement re arrange arr so that the value at even index is greater than its left and less than its right
// Given an array of unique elements rearrange the array to be a < b > c < d > e form
let arrangeArr = (arr) => {
    for (let i = 1; i < arr.length; i += 2 ) {

        if (arr[i - 1] > arr[i]) {
            swap(arr, i - 1, i);
        }

        if ( i + 1 < arr.length && arr[i+1] > arr[i]) {
            swap(arr, i + 1, i);
        }

    }
    return arr;
}

let arr = [4, 3, 2, 6, 7, 1, 9];  //3 4 2 7 1 9 6
//let arr = [9, 6, 8, 3, 7];  // [ 6, 8, 3, 7, 3 ]

console.log(arrangeArr(arr));

//wave arrange

let arrangeArr2 = (arr) => {
    arr.sort();
    for(let i=1; i<arr.length; i+=2) {
        swap ( arr, i, i-1)
    }
    return arr;
}

console.log(arrangeArr2(arr));  //wave arrange: [ 2, 1, 4, 3, 6, 5, 7 ]

/**
 * Given an unsorted array of integers, sort the array into a wave like array. An array ‘arr[0..n-1]’ is sorted
 * in wave form if arr[0] >= arr[1] <= arr[2] >= arr[3] <= arr[4] >= …..
 * odd number should be bigger than the next even number; the even number should be smaller than the next odd number
 */

let waveArray = ( arr ) => {
    let n = arr.length;

    for ( let i=0; i<n; i+=2) {

        if(i > 0 && arr[i-1] > arr[i]) {
            swap(arr, i, i-1);
        }
        if (i< n-1 && arr[i] < arr[i+1]) {
            swap(arr, i, i+1);
        }


    }
}

//let arr =[2, 4, 6, 8, 10, 20];  //[ 4, 2, 8, 6, 20, 10 ]

waveArray(arr);
console.log(arr);