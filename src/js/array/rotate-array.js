/**
 * @desc Given an array of integers, rotate the array by 'N' elements.
 * Solution #1
     Runtime Complexity
     Linear, O(n).
     Memory Complexity
     Constant, O(1).
     Here is how the solution works.

     Reverse the elements of the original array.
     Reverse the elements from 0 -> N-1.
     Reverse the elements from N -> Length-1.

 * @param arr
 * @param start
 * @param end
 */
let reverse_array = function(arr, start, end) {
    //swap start with end index array
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
};

let rotate_array_in_place = function(arr, n) {
    let len = arr.length;

    // Let's normalize rotations
    // if n > array size or n is negative.
    n = n % len;
    if (n < 0) {
        // calculate the positive rotations needed.
        n = n + len;
    }
    // Let's partition the array based on rotations 'n'.
    // For example: 1, 2, 3, 4, 5 where n = 2.
    // -> 5, 4, 3, 2, 1
    // -> 4, 5, 3, 2, 1
    // -> 4, 5, 1, 2, 3

    reverse_array(arr, 0, len - 1);  //Reverse the elements of the original array.
    reverse_array(arr, 0, n - 1);   //Reverse the elements from 0 -> N-1.
    reverse_array(arr, n, len - 1); //Reverse the elements from N -> Length-1.

    return arr;
};

let arr = [1, 2, 3, 4, 5];

//[ 4, 5, 1, 2, 3 ]
console.log( rotate_array_in_place( arr, 2 ) );

/**
 * Solution #2
     Runtime Complexity
     Linear, O(n).
     Memory Complexity
     Linear, O(N).
     Here 'd' is the number of places we are rotating the array by.

     Here is how the solution works.

     Store the last 'N' elements into a temporary array.
     Shift the original array towards right by 'L-N' places. Here, L is the length of array.
     Copy the temporary array at the beginning of the original array.
 * @param arr
 * @param n
 */
let rotate_array = function(arr, n) {
    let len = arr.length;

    // Let's normalize rotations
    // if n > array size or n is negative.
    n = n % len;
    if (n < 0) {
        // calculate the positive rotations needed.
        n = n + len;
    }

    let temp = [];
    // copy last N elements of array into temp
    for (let i = 0; i < n; i++) {
        temp[i] = arr[len - n + i];
    }

    // shift original array
    for (let i = len - 1; i >= n; i--) {
        arr[i] = arr[i - n];
    }

    // copy temp into original array
    for (let i = 0; i < n; i++) {
        arr[i] = temp[i];
    }

    return arr;
};

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//let arr2 = [1, 2, 3, 4, 5];  //[ 4, 5, 1, 2, 3 ]

console.log( rotate_array( arr2, 3 ) );  //[ 8, 9, 10, 1, 2, 3, 4, 5, 6, 7 ]




