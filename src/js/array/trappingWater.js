/**
 * Trapping Rain Water
 * Given n non-negative integers representing an elevation map where the width of each bar is 1,
 * compute how much water it is able to trap after raining.
    Time Complexity: O(n)
    Auxiliary Space: O(n)
 */
let trappingWater = (arr) => {
    let n = arr.length;

    let left = [];
    let right = [];
    
    left[0] = arr[0];
    for (let i = 1; i < n; i++) {
        left[i] = Math.max(left[i-1], arr[i]);
    }

    right[n-1] = arr[n-1];
    for (let i = n - 2; i>=0; i--) {
        right[i] = Math.max(right[i+1], arr[i]);
    }

    let totalUnitWater = 0;
    for (let i = 0; i < n; i++) {
        totalUnitWater += Math.min(left[i], right[i]) - arr[i];
    }
    return totalUnitWater;
}

// 3 units on 1 and 1 unit on 3
console.log(trappingWater([5, 1, 3, 4]));  // 4
/**
 We can trap "3*2 units" of water between 3 an 2,
"1 unit" on top of bar 2 and "3 units" between 2 
and 4.
 */
console.log(trappingWater([3, 0, 0, 2, 0, 4]));  // 10
/**
 Trap "1 unit" between first 1 and 2, "4 units" between
 first 2 and 3 and "1 unit" between second last 1 and last 2 
 */
console.log(trappingWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));  // 6
console.log(trappingWater([2, 0, 2]));  // 2

/**
    Space Optimization in above solution :
    Instead of maintaing two arrays of size n for storing left and right max of each element, 
    we will just maintain two variables to store the maximum till that point. 
    Since water trapped at any element = min( max_left, max_right) – arr[i] 
    we will calculate water trapped on smaller element out of A[low] and A[high] first
    and move the pointers till lo doesn’t cross high.
 */

 let trappingWater2 = (arr) => {
     let left = 0;
     let right = arr.length - 1;
     let maxLeft = 0;
     let maxRight = 0;
     let res = 0;
     while (left < right) {
        if (arr[left] < arr[right]) {
            if (arr[left] > maxLeft) {
                maxLeft = arr[left]
            } else {
                res += maxLeft - arr[left];
            }
            left++;
        } else {
            if (arr[right] > maxRight) {
                maxRight = arr[right];
            } else {
                res += maxRight - arr[right];
            }
            right--;
        }
     }
     return res;
 }

 console.log(trappingWater2([3, 0, 0, 2, 0, 4]));  // 6