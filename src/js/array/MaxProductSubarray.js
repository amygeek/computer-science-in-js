
/*
 Given an array that contains both positive and negative integers,
 find the product of the maximum product subarray. Expected Time complexity is O(n) and only O(1) extra space can be used.

 Examples:

 Input: arr[] = {6, -3, -10, 0, 2}
 Output:   180  // The subarray is {6, -3, -10}

 Input: arr[] = {-1, -3, -10, 0, 60}
 Output:   60  // The subarray is {60}

 Input: arr[] = {-2, -3, 0, -2, -40}
 Output:   80  // The subarray is {-2, -40}

 Time Complexity: O(n)
 Auxiliary Space: O(1)

 */
class MaxProductSubarray {

    // Utility functions to get minimum of two integers
    min ( x, y) {
        return x < y? x : y;
    }
    
    // Utility functions to get maximum of two integers
    max ( x, y) {
        return x > y? x : y;
    }
    
    /* Returns the product of max product subarray.
     Assumes that the given array always has a subarray
     with product more than 1 */
    maxSubarrayProduct( arr) {
        let n = arr.length;
        // max positive product ending at the current position
        let maxEnd = 1;
    
        // min negative product ending at the current position
        let minEnd = 1;
    
        // Initialize overall max product
        let max = 1;
    
        /* Traverse through the array. Following
         values are maintained after the ith iteration:
         maxEnd is always 1 or some positive product ending with arr[i]
         minEnd is always 1 or some negative product ending with arr[i] */
    
        for (let i = 0; i < n; i++) {
            /* If this element is positive, update maxEnd.
             Update minEnd only if minEnd is
             negative */
            if (arr[i] > 0) {
                maxEnd = maxEnd * arr[i];
                minEnd = Math.min (minEnd * arr[i], 1);
            } else if (arr[i] == 0) {
                /* If this element is 0, then the maximum product cannot
                 end here, make both maxEnd and minEnd 1
                 Assumption: Output is always greater than or equal to 1. */
                maxEnd = 1;
                minEnd = 1;
            } else {
    
                /* If element is negative. This is tricky
                 maxEnd can either be 1 or positive.
                 minEnd can either be 1 or negative.
                 next minEnd will always be prev.
                 maxEnd * arr[i]
                 next maxEnd will be 1 if prev
                 minEnd is 1, otherwise
                 next maxEnd will be prev minEnd * arr[i] 
                 */
    
                let temp = maxEnd;
                maxEnd = Math.max (minEnd * arr[i], 1);
                minEnd = temp * arr[i];
            }
    
            // update max, if needed
            if (max <  maxEnd) {
                max  =  maxEnd;
            }
    
        }
    
        return max;
    }
    
    test () {
    
        let arr = [6, -3, -10, 0, 2];
        console.log("Maximum Sub array product is "+ this.maxSubarrayProduct(arr) );
    }
}

let maxProductSubarray = new MaxProductSubarray();

maxProductSubarray.test();