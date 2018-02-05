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

    //right rotate: reverse the original array first
    reverse_array(arr, 0, len - 1);  //Reverse the elements of the original array.
    reverse_array(arr, 0, n - 1);   //Reverse the elements from 0 -> N-1.
    reverse_array(arr, n, len - 1); //Reverse the elements from N -> Length-1.

    //left rotate: reverse the original array last
    //reverse_array(arr, 0, n - 1);   //Reverse the elements from 0 -> N-1.           => 2, 1, 3, 4, 5
    //reverse_array(arr, n, len - 1); //Reverse the elements from N -> Length-1.      => 2, 1, 5, 4, 3
    //reverse_array(arr, 0, len - 1);  //Reverse the elements of the original array.  => 3, 4, 5, 1, 2

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
let rotate_array = function(arr, n) {  //right rotate
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

//let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = [1, 2, 3, 4, 5];  //[ 3, 4, 5, 1, 2 ]

console.log( rotate_array( arr2, 2 ) );

let rotate = (arr) => {
    let temp = arr[0];
    let i = 0;
    for(i=0; i<arr.length - 1; i++) {
        arr[i] = arr[i+1];
    }
    arr[i] = temp;

}
let leftRotate = (arr, d) => {
    for(let i=0; i<d; i++) {
        rotate(arr);
    }
    return arr;
}

console.log("leftRotate: " + leftRotate( arr2, 2 ) );

/**
 *
 * Given an array, only rotation operation is allowed on array. We can rotate the array as many times as we want.
 * Return the maximum possible of summation of i*arr[i].
 Input: arr[] = {1, 20, 2, 10}
 Output: 72 rotating array twice.
 {2, 10, 1, 20}
 20*3 + 1*2 + 10*1 + 2*0 = 72

 Input: arr[] = {10, 1, 2, 3, 4, 5, 6, 7, 8, 9};
 Output: 330
 rotating array 9 times.
 {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
 0*1 + 1*2 + 2*3 ... 9*10 = 330
 */
let getMaxSumInAllRotation = (arr, len) => {

    let currentSum = 0;
    let currentValue = 0;
    for (let i=0; i<len; i++) {
        currentSum += arr[i];
        currentValue += arr[i] * i;
    }

    let max = currentValue;

    for (let i=1; i<len; i++) {
        currentValue = currentValue + (currentSum - len * arr[len-i]);
        if (currentValue > max ) {
            max = currentValue;
        }
    }
    return max;
}


let arr3 = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log("getMaxSumInAllRotation: " + getMaxSumInAllRotation(arr3,  arr3.length));


//o(n)
let findRotatingCount = ( arr ) => {
    let count = 0;
    for(let i=1, l=arr.length; i<l; i++) {
        if(arr[i] < arr[i - 1]) {
            count = count + i;
            break;
        }
    }
    return count;
}

//o(logn)
let findRotatingCount2 = (arr, low, high) => {
    if (high > low) {
        return 0;
    }
    if (low === high) {
        return low;
    }
    let mid = Math.floor( (high + low) / 2 );
    if (mid > low && arr[mid] < arr[mid - 1]) {
        return mid - 1;
    }
    if ( mid < high && arr[mid + 1] < arr[mid] ) {
        return mid;
    }

    if (arr[mid] < arr[high]) {
        return findRotatingCount2(arr, low, mid-1);
    }
    return findRotatingCount2(arr, mid+1, high);
}
//console.log(findRotatingCount([7, 9, 11, 12, 5])) //4
console.log(findRotatingCount([7, 9, 11, 12, 5], 0, 4)) //4

/*
 Quickly find multiple left rotations of an array
 Given an array of size n and multiple values around which we need to left rotate the array.
 How to quickly find multiple left rotations?
 */

let preprocess = (arr, temp, len) => {
    //fills temp[] with two copies of arr[]
    for(let i=0; i<len; i++) {
        temp[i] = temp[i+len] = arr[i];
    }
}
let findMultiRotation = (arr, n, len, temp) => {

    if ( n < 0) {
        n = n + len;
    }

    let start = n % len;


    //for( let i=start; i< start+ len; i++) {
    //    console.log(temp[i]);
    //}
    return temp.slice(start, start+ len);
}

let testArr = [7, 9, 11, 12, 5];
let temp = [];
preprocess(testArr, temp, testArr.length);
console.log(findMultiRotation(testArr, 2, testArr.length, temp ));
//console.log(findMultiRotation(testArr, 3, testArr.length, temp ));

let findMin = (arr, low, high) => {

    if (high < low) {
        return arr[0];
    }

    if ( low == high) {
        return arr[low];
    }
    let mid = Math.floor ( (high + low) / 2 );

    if (mid > low && arr[mid] < arr[mid - 1]) {
        return arr[mid];
    }

    if (mid < high && arr[mid + 1] < arr[mid]) {
        return arr[mid + 1];
    }

    if ( arr[high] > arr[mid]) {
        return findMin(arr, low, mid -1);
    }
    return findMin(arr, mid+1, high);
}

console.log(findMin(testArr, 0, testArr.length - 1));
