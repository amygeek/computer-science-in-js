/*

 Runtime Complexity
 Linear, O(n).

 Memory Complexity
 Constant, O(1).
 */
let moveZerosToLeft = function(arr) {

    let n = arr.length;

    //return if array is empty or only one element in the array
    if (n < 2) {
        return;
    }

    let i = n - 1;
    let j = n - 1;

    while (i >= 0) {
        if (arr[i] != 0) {
            arr[j] = arr[i];
            j--;
        }

        i--;
    }

    while (j >= 0) {
        arr[j] = 0;
        j--;
    }

    return arr;
};

let arr = [1, 0, 3, 0, 4, 5];
console.log(moveZerosToLeft(arr));  // [0, 0, 1, 3, 4, 5]

let swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// Use Quick sort technique. The none-zeros value is moved to the right, but they will be changed the respective order
let moveZerosToLeft2 = (arr) => {
    let i = 0;
    let j = arr.length - 1;
    while (i <= j) {
        if (arr[i] === 0) {
            i++;
        }
        if (arr[j] !== 0) {
            j--;
        }
        if (i <= j && arr[j] === 0) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }
    return arr;
}

console.log(moveZerosToLeft2([1, 0, 3, 0, 4, 5])); // [0, 0, 3, 1, 4, 5]
