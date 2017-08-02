/**
 * @desc Find Maximum in Sliding Window
 * Given a large array of integers and a window of size 'w', 
 * find the current maximum in the window as the window slides through the entire array.
 * @param arr
 * @param wSize
 * @returns {Array}
 */
let find_max_sliding_window = function(arr, wSize) {
    let result = [];
    if (wSize > arr.length) {
        return;
    }

    let w = [];
    //find out max for first window
    for (let i = 0; i < wSize; i++) {
        while (w.length > 0 && arr[i] >= arr[w[w.length - 1]]) {
            w.pop();
        }

        w.push(i); //push arr indexes
    }

    for (let i = wSize; i < arr.length; i++) {
        // remove all numbers that are smaller than current number
        // from the tail of list
        while (w.length > 0 && arr[i] >= arr[w[w.length - 1]]) {
            w.pop();
        }

        //remove first number if it doesn't fall in the window anymore
        if (w.length > 0 && (w[0] <= i - wSize)) {
            w.shift();
        }

        w.push(i);
        result.push(arr[w[0]]);
    }

    return result;
};

let arr = [-4, 2, -5, 1, -1, 6];
let size = 3;

console.log(find_max_sliding_window(arr, size));