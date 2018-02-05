
/**
 * get continue sub sequence that integers are positive. return the max sum of sequence. 
 * if the sum are equal between sequence, return sequence that has larger length.
 * if the sequences are the same length, return the sequence that its lastSeqSum digit is smaller
 * Time O(n)
 * Space O(n)
 * @type {number[]}
 */


let maxSet = (arr) => {

    let n = arr.length;

    let maxSum = Number.MIN_VALUE;
    let currentSum = 0;
    let currentSet = [];
    let maxSet = [];

    for( let i=0; i<n; i++ ) {

        if (arr[i] > 0) {
            currentSum += arr[i];
            currentSet.push(arr[i]);
            if (currentSum > maxSum || (currentSum === maxSum && (currentSet.length > maxSet.length || currentSet[0] < maxSet[0]) ) ){
                maxSum = currentSum;
                maxSet = currentSet;
            }
        } else {
            currentSum = 0;
            currentSet = [];
        }

    }
    return maxSet;
}

let arr = [2, 8, 6, -7, 6, 10, -3, 4, 11, 1];  //[ 2, 8, 6 ]
console.log(maxSet(arr));


//get continue sub sequence that includes negative integer .
let getMaxSeq = (arr) => {
    let max = 0;
    let currentSeq = 0;
    for (let i=0; i<arr.length; i++) {
        currentSeq += arr[i];
        if ( currentSeq < 0) {
            currentSeq = 0;
        } else if ( currentSeq > max) {
            max = currentSeq;
        }
    }
    return max;
}
let arr2 = [-2, -3, 4, -1, -2, 1, 5, -3];  //7

console.log(getMaxSeq(arr2));