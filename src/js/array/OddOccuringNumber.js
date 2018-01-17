
/*
 Given a array of integers, in which every elements occurs even number of times except one number
 which occurs odd number of times. Find out that number.

 Example:

 int[] A = { 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 5, 6, 6, 6, 6, 7, 7 };
 Element appearing odd number of times: 5
 Approach:

 we know that A XOR A = 0 so numbers appearing even number of times will be cancelled out and remaining element will the number which is appearing odd number of times.
 */

let oddOccuringNumber = ( arr ) => {
    let n = arr.length;
    let x=0;
    for(let i=0; i<n; i++){
        x= x ^ arr[i];
    }
    return x;
}

let arr = [ 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 5, 6, 6, 6, 6, 7, 7 ];
console.log("Element appearing odd number of times: " + oddOccuringNumber( arr ));
