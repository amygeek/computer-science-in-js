/**
 * @desc Search rotated array
 * Search a given number in a sorted array that has been rotated by some arbitrary number.
 * @param arr
 * @param left
 * @param right
 * @param x
 * @returns {*}
 */
let binarySearchRecs = function(arr, left, right, x) {
    // assuming all the xs are unique.
    if (left > right) {
        return -1;
    }

    let mid = left + Math.floor((right - left) / 2);

    if (arr[mid] === x) {
        return mid;
    }

    if (arr[left] < arr[mid] && x < arr[mid] && x >= arr[left]) {
        return binarySearchRecs(arr, left, mid - 1, x);
    } else if (arr[mid] < arr[right] && x > arr[mid] && x <= arr[right]) {
        return binarySearchRecs(arr, mid + 1, right, x);
    } else if (arr[left] > arr[mid]) {
        return binarySearchRecs(arr, left, mid - 1, x);
    } else if (arr[right] < arr[mid]) {
        return binarySearchRecs(arr, mid + 1, right, x);
    }

    return -1;
};

let binary_search_rotated = function(arr, x) {
    return binarySearchRecs(arr, 0, arr.length - 1, x);
};


let a = [90,100,200,60,70,80,1,10,20,30,40,50,55,56];
console.log(binary_search_rotated( a, 10));  //7
console.log(binary_search_rotated( a, 3));   //-1
console.log(binary_search_rotated( a, 4));   //-1
console.log(binary_search_rotated( a, 1));   //6