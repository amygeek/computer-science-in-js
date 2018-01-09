/*
 Given an array arr[], find the maximum j – i such that arr[j] > arr[i].
 Input: {34, 8, 10, 3, 2, 80, 30, 33, 1}
 Output: 6  (j = 7, i = 1)

 Input: {9, 2, 3, 4, 5, 6, 7, 8, 18, 0}
 Output: 8 ( j = 8, i = 0)

 Input:  {1, 2, 3, 4, 5, 6}
 Output: 5  (j = 5, i = 0)

 Input:  {6, 5, 4, 3, 2, 1}
 Output: -1
 */
class MaxDistance {

    /* Utility Functions to get max and minimum of two integers */
    max( x,  y) {
        return x > y ? x : y;
    }

     min( x,  y) {
        return x < y ? x : y;
    }

    //Time Complexity: O(n^2)
     maxIndexDiff0 (arr, n) {
        let maxDiff = -1;
        let i, j;

        for (i = 0; i < n; ++i) {
            for (j = n - 1; j > i; --j) {
                if (arr[j] > arr[i] && maxDiff < (j - i)) {
                    maxDiff = j - i;
                }

            }
        }

        return maxDiff;
    }
     /*
     Time Complexity: O(n)
     Auxiliary Space: O(n)
     */
     maxIndexDiff( arr,  n) {
        let maxDiff;
        let i, j;

        let rightMax = new Array(n);
        let leftMin = new Array(n);

        /* Construct leftMin[] such that leftMin[i] stores the minimum value from (arr[0], arr[1], ... arr[i]) */
        leftMin[0] = arr[0];
        for (i = 1; i < n; ++i) {
            leftMin[i] = this.min(arr[i], leftMin[i - 1]);
        }

        /* Construct rightMax[] such that rightMax[j] stores the maximum value from (arr[j], arr[j+1], ..arr[n-1]) */
        rightMax[n - 1] = arr[n - 1];
        for (j = n - 2; j >= 0; --j) {
            rightMax[j] = this.max(arr[j], rightMax[j + 1]);
        }

        /* Traverse both arrays from left to right to find optimum j - i. This process is similar to merge() of MergeSort */
        i = 0; j = 0; maxDiff = -1;
        while (j < n && i < n) {
            if (leftMin[i] < rightMax[j])
            {
                maxDiff = this.max(maxDiff, j - i);
                j = j + 1;
            } else {
                i = i + 1;
            }

        }

        return maxDiff;
    }
}

let maxDistance = new MaxDistance();

//let arr = [3, 5, 4, 2];
let arr = [34, 8, 10, 3, 2, 80, 30, 33, 1];

let dist = maxDistance.maxIndexDiff(arr, arr.length)

console.log(dist);