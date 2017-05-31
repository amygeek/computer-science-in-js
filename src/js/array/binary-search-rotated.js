/**
 * @desc Search rotated array
 * Search a given number in a sorted array that has been rotated by some arbitrary number.
 * @param arr
 * @param low
 * @param high
 * @param x
 * @returns {*}
 */
let binarySearchRecs = function(arr, low, high, x) {
    // assuming all the xs are unique.
    if (low > high) {
        return -1;
    }

    let mid = low + Math.floor((high - low) / 2);

    if (arr[mid] === x) {
        return mid;
    }

    if (arr[low] < arr[mid] && x < arr[mid] && x >= arr[low]) {
        return binarySearchRecs(arr, low, mid - 1, x);
    } else if (arr[mid] < arr[high] && x > arr[mid] && x <= arr[high]) {
        return binarySearchRecs(arr, mid + 1, high, x);
    } else if (arr[low] > arr[mid]) {
        return binarySearchRecs(arr, low, mid - 1, x);
    } else if (arr[high] < arr[mid]) {
        return binarySearchRecs(arr, mid + 1, high, x);
    }

    return -1;
};

let binary_search_rotated = function(arr, x) {
    return binarySearchRecs(arr, 0, arr.length - 1, x);
};