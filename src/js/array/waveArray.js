/**
 * Given an unsorted array of integers, sort the array into a wave like array. An array ‘arr[0..n-1]’ is sorted
 * in wave form if arr[0] >= arr[1] <= arr[2] >= arr[3] <= arr[4] >= …..
 * odd number should be bigger than the next even number; the even number should be smaller than the next odd number
 */
let swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
let waveArray = ( arr ) => {
    let n = arr.length;

    for ( let i=0; i<n; i+=2) {

        if (i > 0 && arr[i] < arr[i-1]) {
            swap(arr, i, i-1);
        }
        if (i< n-1 && arr[i] < arr[i+1]) {
            swap(arr, i, i+1);
        }


    }
}

let arr =[2, 4, 6, 8, 10, 20];  //[ 4, 2, 8, 6, 20, 10 ]

waveArray(arr);
console.log(arr);

