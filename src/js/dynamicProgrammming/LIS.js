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


let ceilIndex = ( arr,  l,  r,  key) => {

    while (l<=r) {
        let mid = (l + r ) /2;

        if (arr[mid] >= key)
            r = mid - 1;
        else
            l = mid + 1;
    }

    return r;
}

let LIS2 = (arr, size) => {
    // Add boundary case, when array size is one

    let tailTable = [];
    let len = 0; // always points empty slot

    tailTable[0] = arr[0];

    for (let i = 1; i < size; i++) {
        if (arr[i] < tailTable[0]) {
            // new smallest value
            tailTable[0] = arr[i];

        } else if (arr[i] > tailTable[len]) {
            // arr[i] wants to extend largest subsequence
            tailTable[++len] = arr[i];

        } else {
            // arr[i] wants to be current end candidate of an existing
            // subsequence. It will replace ceil value in tailTable
            tailTable[ceilIndex(tailTable, 0, len, arr[i])] = arr[i];
        }

    }

    return tailTable;
}

let testArr = [2, 6, 3, 4, 1, 2, 9, 5, 8];

console.log(LIS2(testArr, testArr.length));

