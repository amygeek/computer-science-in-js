/*
 Given an array arr[0 … n-1] containing n positive integers, a subsequence of arr[] is called Bitonic
 if it is first increasing, then decreasing. Write a function that takes an array as argument
 and returns the length of the longest bitonic subsequence.
 A sequence, sorted in increasing order is considered Bitonic with the decreasing part as empty.
 Similarly, decreasing order sequence is considered Bitonic with the increasing part as empty.
 Input arr[] = {1, 11, 2, 10, 4, 5, 2, 1};
Output: 6 (A Longest Bitonic Subsequence of length 6 is 1, 2, 10, 4, 2, 1)

Input arr[] = {12, 11, 40, 5, 3, 1}
Output: 5 (A Longest Bitonic Subsequence of length 5 is 12, 11, 5, 3, 1)

Input arr[] = {80, 60, 30, 40, 20, 10}
Output: 5 (A Longest Bitonic Subsequence of length 5 is 80, 60, 30, 20, 10)

 Time Complexity: O(n^2)
 Auxiliary Space: O(n)
 */

let longestBitonicSubSeq = ( arr ) => {
    let n = arr.length;
    let lis = new Array(n).fill(1);  //store longest increase indexes

    /* Compute LIS values from left to right */
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j] && lis[i] < lis[j] + 1) {
                lis[i] = lis[j] + 1;
            }
        }
    }

    console.log(lis);
    /*
     Allocate memory for lds and initialize LDS values for all indexes
     store longest decrease indexes
     */
    let lds = new Array(n).fill(1);

    /* Compute LDS values from right to left */
    for (let i = n-2; i >= 0; i--) {
        for (let j = n-1; j > i; j--) {
            if (arr[i] > arr[j] && lds[i] < lds[j] + 1) {
                lds[i] = lds[j] + 1;
            }
        }

    }

    console.log(lds);
    /* Return the maximum value of lis[i] + lds[i] - 1*/
    let max = lis[0] + lds[0] - 1;
    for (let i = 1; i < n; i++) {

        if (lis[i] + lds[i] - 1 > max) {
            max = lis[i] + lds[i] - 1;
        }
           
    }
    return max;
}

let arr = [1, 11, 2, 10, 4, 5, 2, 1]  // 6: [1, 2, 10, 4, 2, 1]
//let arr = [12, 11, 40, 5, 3, 1]         // 5: [12, 11, 5, 3, 1]
//let arr = [80, 60, 30, 40, 20, 10]      // 5: [80, 60, 30, 20, 10]

console.log(longestBitonicSubSeq(arr));