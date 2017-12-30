/**
 Runtime Complexity
 Linear, O(n).

 Memory Complexity
 O(w).
 where 'w' is the window size.

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

    result.push(arr[w[0]]); //get the first index in w and push the value of that index to result
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

let arr = [-4, 2, -5, 1, -1, 6]; // [ 2, 2, 1, 6 ]
let size = 3;

console.log(find_max_sliding_window(arr, size));

let findMax = (arr, wSize) => {
    let result = [];  //to store the largest number in every size of array
    let w = []; //to story the indexes in every size of array

    for (let i=0; i < wSize; i++ ) {
        while (w.length > 0 && arr[i] >= arr[w[w.length-1]]) {
            w.pop();
        }
        w.push(i);
    }

    //get the first element in w which will be the largest number in set of wSize element in array
    result.push(arr[w[0]]);

    for (let i=wSize; i<arr.length; i++) {
        while (w.length > 0 && arr[i] >= arr[w[w.length-1]]) {
            w.pop();
        }

        if (w.length > 0 && (w[0] <= i - wSize) )  {
            w.shift();  //remove first one in w if it is out of bound
        }
        w.push(i);
        result.push(arr[w[0]]);
    }
    return result;
}
console.log(findMax(arr, size));