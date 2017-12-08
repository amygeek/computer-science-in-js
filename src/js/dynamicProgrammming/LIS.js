/**
 * The Longest Increasing Subsequence (LIS) problem is to find the length of the longest subsequence of a given sequence
 * such that all elements of the subsequence are sorted in increasing order. For example, the length of LIS
 * for [10, 22, 9, 33, 21, 50, 41, 60, 80] is 6 and LIS is [10, 22, 33, 50, 60, 80].
 */

let LIS = (arr) => {
    let len = arr.length;
    let lis = Array(len).fill(1);

    for(let i=1; i<len; i++) {
        for(let j=0; j<i; j++) {
            if (arr[j] < arr[i] && lis[i] < lis[j] + 1) {
                lis[i] = lis[j] + 1;
            }
        }
    }
    return lis;
}


let ceilIndex = ( arr,  left,  right,  key) => {

    while (left < right) {

        let mid = (left + right ) /2;

        if (arr[mid] >= key) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }

    }

    return right;
}

let LIS2 = (arr, size) => {

    // Add boundary case, when array size is one

    let newArr = [];
    let len = 0;

    newArr[0] = arr[0];

    for (let i = 1; i < size; i++) {
        if (arr[i] < newArr[0]) {
            // new smallest value
            newArr[0] = arr[i];

        } else if (arr[i] > newArr[len]) {
            // arr[i] wants to extend largest subsequence
            newArr[++len] = arr[i];

        } else if (i + 1 < size) {
            // If arr[i] is in between, we will find a list with largest end element that is smaller than arr[i]
            // It will replace ceil value in newArr. We make sure there is at least one more element after arr[i]
            newArr[ceilIndex(newArr, 0, len, arr[i])] = arr[i];
        }

    }

    return newArr;
}

let testArr = [2, 5, 3, 7, 11, 8, 10, 13, 6 ];

console.log(LIS2(testArr, testArr.length));  //6 in len [ 2, 3, 7, 8, 10, 13 ]


