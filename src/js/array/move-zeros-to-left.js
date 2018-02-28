/*

 Runtime Complexity
 Linear, O(n).

 Memory Complexity
 Constant, O(1).
 */
let move_zeros_to_left = function(arr) {

    let n = arr.length;

    //return if array is empty or only one element in the array
    if (n < 2) {
        return;
    }

    let writeIndex = n - 1;
    let readIndex = n - 1;

    while (readIndex >= 0) {
        if (arr[readIndex] != 0) {
            arr[writeIndex] = arr[readIndex];
            writeIndex--;
        }

        readIndex--;
    }

    while (writeIndex >= 0) {
        arr[writeIndex] = 0;
        writeIndex--;
    }

    return arr;
};

let arr = [1, 0, 3, 0, 4, 5];
console.log(move_zeros_to_left(arr));