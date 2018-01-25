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

let ceilIndex = (int input[], int T[], int end, int s){
    int start = 0;
    int middle;
    int len = end;
    while(start <= end){
        middle = (start + end)/2;
        if(middle < len && input[T[middle]] < s && s <= input[T[middle+1]]){
            return middle+1;
        }else if(input[T[middle]] < s){
            start = middle+1;
        }else{
            end = middle-1;
        }
    }
    return -1;
}

let LIS = (arr, size) => {

    if ( size === 0 ) {
        return -1;
    }
    // Add boundary case, when array size is one

    let res = [];
    res[0] = arr[0];
    let len = 1;

    for (let i = 1; i < size; i++) {
        if (arr[i] < res[0]) {
            // new smallest value
            res[0] = arr[i];

        } else if (arr[i] > res[len - 1]) {
            // arr[i] wants to extend largest subsequence
            res[len++] = arr[i];

        } else  {
            // If arr[i] is in between, we will find a list with largest end element that is smaller than arr[i]
            // It will replace ceil value in res. We make sure there is at least one more element after arr[i]
            res[ceilIndex(res, 0, len-1, arr[i])] = arr[i];
        }

    }

    //return res.length;
    return res;
}

//[10, 22, 9, 33, 21, 50, 41, 60, 80] is 6 and LIS is [10, 22, 33, 41, 60, 80].
//let testArr = [10, 22, 9, 33, 21, 50, 41, 60, 80];
let testArr = [1,6,10,4,7,9,5];

console.log(LIS(testArr, testArr.length));  //6 in len [ 2, 3, 7, 8, 10, 13 ]
