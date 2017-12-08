/**
 * @desc Search rotated array
 * Search a given number in a sorted array that has been rotated by some arbitrary number.
 * @param arr
 * @param start
 * @param end
 * @param x
 * @returns {*}
 */
let binarySearchRecs = function(arr, start, end, x) {
    // assuming all the xs are unique.
    if (start > end) {
        return -1;
    }

    let mid = start + Math.floor((end - start) / 2);

    if (arr[mid] === x) {
        return mid;
    }

    if (arr[start] < arr[mid] && x < arr[mid] && x >= arr[start]) {

        //search left half
        return binarySearchRecs(arr, start, mid - 1, x);
        
    } else if (arr[mid] < arr[end] && x > arr[mid] && x <= arr[end]) {
        //search right half
        return binarySearchRecs(arr, mid + 1, end, x);

    } else if (arr[start] > arr[mid]) {

        //if start index array is great than middle index array, search left half
        return binarySearchRecs(arr, start, mid - 1, x);

    } else if (arr[end] < arr[mid]) {
        //if end index array is less than middle index array, search right half
        return binarySearchRecs(arr, mid + 1, end, x);
    }

    return -1;
};

let arr = [90,100,200,60,70,80,1,10,20,30,40,50,55,56];
let binary_search_rotated = function(arr, x) {
    return binarySearchRecs(arr, 0, arr.length - 1, x);
};
console.log(binary_search_rotated(arr, 1));