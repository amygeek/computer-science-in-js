//re arrange arr so that the value at even index is greater than its left and less than its right
let arrangeArr = (arr) => {
    for (let i = 1; i < arr.length; i += 2 ) {

        if (arr[i - 1] > arr[i]) {
            let temp = arr[i - 1];
            arr[i - 1] = arr[i];
            arr[i] = temp;
        }

        if ( i + 1 < arr.length && arr[i+1] > arr[i]) {
            let temp = arr[i+1];
            arr[i + 1] = arr[i];
            arr[i] = temp;
        }

    }
    return arr;
}

//let arr = [1, 2, 3, 4, 5, 6, 7];  //[ 1, 3, 2, 5, 4, 7, 6 ]
let arr = [9, 6, 8, 3, 7];  // [ 6, 8, 3, 7, 3 ]

console.log(arrangeArr(arr));