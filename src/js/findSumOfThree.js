/**
 * Given an array of integers and a value, determine if there are any three integers in the array which sum equal to the given value.
 * findSumOfThreeV1
 * Runtime Complexity
    Cubic, O(n3).

 * Memory Complexity
    Constant, O(1).
 */
let findSumOfThreeV1 = function(arr, required_sum) {
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
 * findSumOfThreeV2
 * Runtime Complexity
    O(n2logn).

 * Memory Complexity
    Constant, O(1).

 * This solution is also simple. We first sort the input array in O(nlogn) time.
 * Then we iterate over each pair (a, b) in the array in a nested loop and calculate
 * the remaining sum (sum - (a + b)). We try to find the remaining sum in the array using binary search.
 * If we find it, we have found the solution, with the three numbers being a,b and (sum - (a+b)).
 */
let binarySeach = function(a, key) {
    let low = 0;
    let high = a.length - 1;
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
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

let findSumOfThreeV2 = function(arr, required_sum) {
    arr.sort(function(a, b) {
        return a - b;
    });

    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            // Looking for required_sum = arr[i]+arr[j]+arr[k]
            let remaining_sum = required_sum - arr[i] - arr[j];
            let k = binarySeach(arr, remaining_sum);
            if (k > 0 && k != i && k != j) {
                return true;
            }
        }
    }
    return false;
};

/**
 * Runtime Complexity
    Quadratic, O(n2)

 * Memory Complexity
    Constant, O(1)
 */
let findSumOfTwo = function(arr, val, index) {
    for (let i = index, j = arr.length - 1; i < j;) {
        let sum = arr[i] + arr[j];
        if (sum === val) {
            return true;
        }

        if (sum < val) {
            ++i;
        } else {
            --j;
        }
    }
    return false;
};

let findSumOfThreeV3 = function(arr, required_sum) {
    arr.sort(function(a, b) {
        return a - b;
    });
    for (let i = 0; i < arr.length - 2; ++i) {
        let remaining_sum = required_sum - arr[i];
        if (findSumOfTwo(arr, remaining_sum, i + 1)) {
            return true;
        }
    }
    return false;
};