/*
 Given an array A[] consisting 0s, 1s and 2s, write a function that sorts A[].
 The functions should put all 0s first, then all 1s and all 2s in last.

 Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
 using counting sort
 */
let sortColor = ( arr ) => {
    let n = arr.length;

    let countArray = new Array(3).fill(0);

    //count the number 0, 1, 2;  return [5, 5, 2] in the example
    for( let i=0; i<n; i++ ) {
        countArray[arr[i]]++;
    }

    let j=0;
    let k=0;
    while ( j <= 2 ) {

        if ( countArray[j] != 0 ) {
            arr[k++] = j;
            countArray[j]--;
        } else {
            j++;
        }
    }
}

let arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];
sortColor(arr);

console.log(arr);