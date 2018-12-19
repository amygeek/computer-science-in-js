/**
 * @desc Find smallest common number
 * Given three integer arrays sorted in ascending order,
 * find the smallest number that is common in all three arrays.
 * @param a
 * @param b
 * @param c
 * @returns {*}
 */
let find_least_common_number = function(a, b, c) {
    let i = 0;
    let j = 0;
    let k = 0;
    let aLen = a.length;
    let bLen = b.length;
    let cLen = c.length;

    while ( i < aLen && j < bLen && k < cLen ) {

        // Found the smallest common number
        if (a[i] === b[j] && b[j] === c[k]) {
            return a[i];
        }

        // Let's advance the iterator
        // for the smallest value.

        if (a[i] < b[j]) {
            i++;
        } else if (b[j] < c[k]) {
            j++;
        } else {
            k++;
        }
    }

    return -1;
};

let array1 = [5, 6, 10, 25, 26, 30, 50, 80];
let array2 = [-1, 4, 5, 6, 7, 8, 50];
let array3 = [1, 6, 10, 14];

//6
console.log(find_least_common_number(array1, array2, array3));