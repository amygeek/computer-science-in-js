/**
 * @desc Find low and high index
 * Given a sorted array of integers, return the low and high index of the given num.
 * Return -1 if not found. The array length can be in millions with lots of duplicates.
 In the following example,
     [1, 2, 5, 5, 5, 5, 5, 5, 5, 5, 20]

     low and high indices would be:

     num: 1, Low=0 and High=0

     num: 2, Low=1 and High=1

     num: 5, Low=2 and High=9

     num: 20, Low=10 and High=10
 * @param arr
 * @param num
 * @returns {number}
 */
let find_low_index = function(arr, num) {
    let low = 0;
    let high = arr.length - 1;
    let mid = Math.floor(high / 2);

    while (low <= high) {

        let mid_elem = arr[mid];

        if (mid_elem < num) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }

        mid = low + Math.floor((high - low) / 2);
    }

    if (arr[low] === num) {
        return low;
    }

    return -1;
};

let find_high_index = function(arr, num) {
    let low = 0;
    let high = arr.length - 1;
    let mid = Math.floor(high / 2);

    while (low <= high) {
        let mid_elem = arr[mid];

        if (mid_elem <= num) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }

        mid = low + Math.floor((high - low) / 2);
    }

    if (arr[high] === num) {
        return high;
    }

    return -1;
};

let arr = [1, 2, 5, 5, 5, 5, 5, 5, 5, 5, 20];

console.log("find_low_index: ", find_low_index(arr, 5));  //2
console.log("find_high_index: ", find_high_index(arr, 5)); //9