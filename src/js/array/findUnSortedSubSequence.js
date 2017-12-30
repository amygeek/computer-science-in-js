/**
 * find unsorted sub sequence in an array
 * giving [1, 2, 4, 7, 10, 11, 8, 12, 5, 6, 16, 17, 18]
 * the unsorted sub sequence is 7, 10, 11, 8, 12, 5, 6
 * Steps to solve
 * 1) find the end of left index that is sorted, in the example it will be the index for value 11
 * 2) find the start index on the right that is sorted, in the example it will be the index for value 5
 * 3) set the min value to the value at start index which is 5 and set the max value to end of left index which is 11
 * 4) get smallest value and largest value in unsorted sub sequence is 7, 10, 11, 8, 12, 5, 6 and reset min and max
 * 5) find the value is not smaller than min on the left and the value is greater than max. return the indexes from the search
 */

let findLeftIndex = ( arr ) => {
    for (let i=1, l=arr.length; i<l; i++) {
        if ( arr[i] < arr[i-1] ) {
            return i - 1;
        }
    }
    return arr.length - 1;
}
let findRightIndex = arr => {
    for ( let i = arr.length -2; i>=0; i--) {
        if ( arr[i] > arr[i+1] ) {
            return i + 1;
        }
    }
}
let findSortedIndexOnLeft = ( arr, min, start) => {
    for ( let i=start - 1; i>=0; i--) {
        if ( arr[i] <= min ) {
            return i + 1;
        }
    }
    return 0;
}

let findSortedIndexOnRight = (arr, max, start) => {
    for ( let i=start; i<arr.length; i++) {
        if ( arr[i] >= max ) {
            return i - 1;
        }
    }
    return arr.length - 1;
}

let findUnSortedSeq = (arr) => {
    let endLeft = findLeftIndex(arr);
    if ( endLeft == arr.length - 1) {
        return; //sorted
    }
    let startRight = findRightIndex(arr);

    let min = arr[startRight]; //5

    let max = arr[endLeft]; //11

    for(let i=endLeft + 1; i<startRight; i++) {
        if (arr[i] < min ) {
            min = arr[i];
        }
        if ( arr[i] > max ) {
            max = arr[i];
        }
    }
    let leftIndex = findSortedIndexOnLeft( arr, min, endLeft );
    let rightIndex = findSortedIndexOnRight( arr, max, startRight);
    console.log( "unsorted array is between index " + leftIndex + " and " + rightIndex);
}

//test
let arr = [1, 2, 4, 7, 10, 11, 8, 12, 5, 6, 16, 17, 18];

findUnSortedSeq( arr );