/**
 * The Longest Increasing Subsequence (LIS) problem is to find the length of the longest subsequence of a given sequence
 * such that all elements of the subsequence are sorted in increasing order. For example, the length of LIS
 * for [10, 22, 9, 33, 21, 50, 41, 60, 80] is 6 and LIS is [10, 22, 33, 50, 60, 80].
 */

let ceilIndex = ( arr,  left,  right,  key) => {

    while (right - left > 1) {

        let mid =  Math.floor((right + left ) /2 );

        if (arr[mid] >= key) {
            right = mid;
        } else {
            left = mid;
        }
    }

    return right;
}

let LIS = (arr, size) => {

    if ( size === 0 ) {
        return -1;
    }
    // Add boundary case, when array size is one

    let newArr = [];
    let len = 1;

    newArr[0] = arr[0];

    for (let i = 1; i < size; i++) {
        if (arr[i] < newArr[0]) {
            // new smallest value
            newArr[0] = arr[i];

        } else if (arr[i] > newArr[len - 1]) {
            // arr[i] wants to extend largest subsequence
            newArr[len++] = arr[i];

        } else {
            // If arr[i] is in between, we will find a list with largest end element that is smaller than arr[i]
            // It will replace ceil value in newArr. We make sure there is at least one more element after arr[i]
            newArr[ceilIndex(newArr, 0, len-1, arr[i])] = arr[i];
        }

    }

    //return newArr.length;
    return newArr;
}

//[10, 22, 9, 33, 21, 50, 41, 60, 80] is 6 and LIS is [10, 22, 33, 41, 60, 80].
let testArr = [3, 4, -1, 5, 8, 2, 3, 12, 7, 9, 10];

console.log(LIS(testArr, testArr.length));  //6 in len [ 2, 3, 7, 8, 10, 13 ]