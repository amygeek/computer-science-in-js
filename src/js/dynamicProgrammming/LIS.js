/**
 * The Longest Increasing Subsequence (LIS) problem is to find the length of the longest subsequence of a given sequence
 * such that all elements of the subsequence are sorted in increasing order. For example, the length of LIS
 * for [10, 22, 9, 33, 21, 50, 41, 60, 80] is 6 and LIS is [10, 22, 33, 50, 60, 80].
 */

let LIS2 = ( arr ) => {

    let n = arr.length;
    let res = new Array( n).fill( 1 );

    for ( let i=1; i<n; i++ ) {
        for ( let j=0; j<i; j++ ) {
            if ( arr[i] > arr[j] ) {
                if (res[j] + 1 > res[i]) {
                    res[i] = res[j] + 1;
                }
            }
        }
    }

    let max = 0;
    for ( let i=0; i<n; i++ ) {
        if (res[i] > max ) {
            max = res[i];
        }
    }

    return max;
}

let ceilIndex = ( arr,  left,  right,  key) => {

    while (left <= right) {

        let mid =  Math.floor((right + left ) /2 ) ;

        if (arr[mid] <= key) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
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

        } else {
            // If arr[i] is in between, we will find a list with largest end element that is smaller than arr[i]
            // It will replace ceil value in res. We make sure there is at least one more element after arr[i]
            res[ceilIndex(res, 0, len-1, arr[i])] = arr[i];
        }

    }
    console.log(res)
    return res.length;
    //return res;
}

let getCeilIndex = ( arr, T, l,  r, key) => {
    while (r - l > 1) {
        let m = l + parseInt ((r - l)/2 );
        if (arr[T[m]] >= key)
            r = m;
        else
            l = m;
    }

    return r;
}

let LIS3 = (arr) => {
    // Add boundary case, when array n is zero
    // Depend on smart pointers

    let n = arr.length;
    let tailIndices = [];
    let prevIndices = [];

    tailIndices[0] = 0;
    let len = 1; // it will always point to empty location

    for (let i = 1; i < n; i++) {

        if (arr[i] < arr[tailIndices[0]]) {
            // new smallest value
            tailIndices[0] = i;
        } else if (arr[i] > arr[tailIndices[len-1]]) {
            // arr[i] wants to extend largest subsequence
            prevIndices[i] = tailIndices[len-1];
            tailIndices[len++] = i;
        } else {
            // arr[i] wants to be a potential condidate of
            // future subsequence
            // It will replace ceil value in tailIndices
            let pos = getCeilIndex(arr, tailIndices, -1, len-1, arr[i]);

            prevIndices[i] = tailIndices[pos-1];
            tailIndices[pos] = i;
        }
    }


    console.log( "LIS of given input" );
    let str = " ";
    for (let i = tailIndices[len-1]; i >= 0; i = prevIndices[i]) {
        str += arr[i] + " "
    }
    console.log(str);

    return len;
}

let testArr = [10, 22, 9, 33, 21, 50, 41, 60, 80];  //[ 2, 3, 7, 8, 10, 13 ]


console.log(LIS(testArr, testArr.length));  //6 in len [ 2, 3, 7, 8, 10, 13 ]
console.log( LIS3(testArr) );  //6
