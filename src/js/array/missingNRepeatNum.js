/*
 You are given a read only array of n integers from 1 to n.

 Each integer appears exactly once except A which appears twice and B which is missing.

 Return A and B.

 Note: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

 Note that in your output A should precede B.
 Input:[3 1 2 5 3]

 Output:[3, 4]

 A = 3, B = 4

 arr[] = {3, 1, 3}
 Output: 2, 3
 */

/*
 Time Complexity: O(n)
 */
let missingNRepeatNum = ( arr, size ) => {

    //find the repeating element
    for ( let i=0; i<size; i++ ) {

        let index = Math.abs( arr[i] ) - 1;

        if ( arr[ index ] > 0  ) {
            arr[ index ] = -arr[ index ];
        } else {
            console.log("The repeating element is ", Math.abs( arr[i]) );
        }
    }
    console.log(arr)
    //find missing element;
    for ( let i=0; i<size; i++ ) {
        if ( arr[i] > 0) {
            console.log("The missing element is ", i + 1 );
        }
    }

}

let arr = [1, 2, 3, 1, 3, 6];  //repeat 3, missing 4

missingNRepeatNum(arr, arr.length);

//Given an Integer array. Array contains duplicates of all the numbers in array except one number . Find that number.
let arr2 = [2, 1, 3, 5, 5, 3, 2, 1, 6, 7, 7, 8, 8];  //6
let findNoneRepeatNum = arr => {
    let miss = arr[0];

    for ( let i=1; i<arr.length; i++ ) {
        miss = miss ^ arr[i];
    }

    return miss;
}

console.log('none repeat number: ', findNoneRepeatNum(arr2));

// when find a number i, flip the number at position i-1 to negative.
// if the number at position i-1 is already negative, i is the number that occurs twice.

let findDuplicates = ( arr ) => {

    let res = new Set();

    for (let i = 0; i < arr.length; ++i) {

        let index = Math.abs( arr[i]) - 1;

        if (arr[index] < 0) {
            res.add(Math.abs(index+1));
        }

        arr[index] = -arr[index];
    }
    return res;
}

console.log('find all repeat numbers: ', findDuplicates(arr2));