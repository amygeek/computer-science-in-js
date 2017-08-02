/**
 * Given an array of integers and a value, determine if there are any three integers in the array that sum equal to the given value.
 Solution #1
 Runtime Complexity
 Cubic, O(n3).

 Memory Complexity
 Constant, O(1).
 */
let find_sum_of_three_v1 = function(arr, required_sum) {
    for (let i = 0; i < arr.length - 2; ++i) {
        for (let j = i + 1; j < arr.length - 1; ++j) {
            for (let k = j + 1; k < arr.length; ++k) {
                if (i != j && j != k && k != i) {
                    let sum = arr[i] + arr[j] + arr[k];
                    if (sum === required_sum) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
};


/**
 Solution #2
 Runtime Complexity
 O(n2logn).

 Memory Complexity
 Constant, O(1).

 We first sort the input array in O(nlogn) time.
 */
let find_fast = function(a, key) {
    let low = 0;
    let high = a.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (a[mid] === key) {
            return mid;
        }
        if (key < a[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
};

let find_sum_of_three_v2 = function(arr, required_sum) {
    arr.sort(function(a, b) {
        return a - b;
    });

    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            // Looking for required_sum = arr[i]+arr[j]+arr[k]
            let remaining_sum = required_sum - arr[i] - arr[j];
            let k = find_fast(arr, remaining_sum);
            if (k > 0 && k != i && k != j) {
                return true;
            }
        }
    }
    return false;
};

/*
 Solution #3
 Runtime Complexity
 Quadratic, O(n2)

 Memory Complexity
 Constant, O(1)
 */
let find_sum_of_two = function(arr, val, start) {
    for (let i = start, j = arr.length - 1; i < j;) {
        let sum = arr[i] + arr[j];
        if (sum === val) {
            return `${i} and ${j}`;
        }

        if (sum < val) {
            ++i;
        } else {
            --j;
        }
    }
    return false;
};

let find_sum_of_three_v3 = function(arr, required_sum) {
    arr.sort(function(a, b) {
        return a - b;
    });

    for (let i = 0; i < arr.length - 2; ++i) {
        let remaining_sum = required_sum - arr[i];

        let sumOfTwo = find_sum_of_two(arr, remaining_sum, i + 1);
        if ( false !== sumOfTwo ) {
            return `index at ${i}, ${sumOfTwo}`;
        }
    }
    return false;
};


let arr = [1, 3, 8, 10, 30, 2, 9, 50, 18, 20];
// after sort arr = [ 1, 2, 3, 8, 9, 10, 18, 20, 30, 50 ]
console.log( find_sum_of_three_v3( arr, 37) );  //index at 3, 4 and 7
