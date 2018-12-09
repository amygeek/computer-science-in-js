
/*
 Time Complexity: O(n)
 Extra Space: O(n)
 */
class AreConsecutive {
    /* The function checks if the array elements are consecutive
     If elements are consecutive, then returns true, else returns
     false */
    areConsecutive(arr, n) {

        if (n < 1) {
            return false;
        }

    
        /* 1) Get the minimum element in array */
        let min = this.getMin(arr, n);
    
        /* 2) Get the maximum element in array */
        let max = this.getMax(arr, n);
    
        /* 3) max - min + 1 is equal to n,  then only check all elements */
        if (max - min == n - 1) {
            /* Create a temp array to hold visited flag of all elements.
             Note that, calloc is used here so that all values are initialized
             as false */
            let visited = [];
            for ( let i = 0; i < n; i++) {
                /* If we see an element again, then return false */
                if (visited[arr[i] - min]) {
                    return false;
                }

                /* If visited first time, then mark the element as visited */
                visited[arr[i] - min] = true;
            }

            /* If all elements occur once, then return true */
            return true;
        }

        return false; // if (max - min  + 1 != n)

    }
    
    /* UTILITY FUNCTIONS */
    getMin(arr, n) {
        let min = arr[0];
        for (let i = 1; i < n; i++) {
            if (arr[i] < min)
                min = arr[i];
        }
        return min;
    }
    
    getMax( arr,  n) {
        let max = arr[0];
        for (let i = 1; i < n; i++)
        {
            if (arr[i] > max)
                max = arr[i];
        }
        return max;
    }
    /**
     Time Complexity — O(n).

     this method with work if numbers are non negative

     Find the Maximum and minimum elements in array (Say the array is arr)
     Check if array length   = max-min+1
     Subtract the min from every element of the array.
     Check if array doesn’t have duplicates
     Navigate the array.
     Update the array as for ith index :- arr[arr[i]] = arr[arr[i]]*-1 (if it already not negative).
     If is already negative, we have duplicates, return false.
     */

    withoutAuxArray(arr){
        let n = arr.length;
        let max = Math.max( ...arr );
        let min = Math.min( ...arr );
    
        if (max - min !== n - 1) {
            return false;
        }

        for(let i = 0; i<n; i++){
            let x  = max - Math.abs(arr[i]);
            if(arr[x] >= 0){
                arr[x] *= -1;
            } else {
                return false;
            } 
        }
        return true;
    }
}


let consecutive = new AreConsecutive();

console.log(consecutive.withoutAuxArray([5, 3, 2, 1, 4, 0]));  // true

console.log(consecutive.withoutAuxArray([5, 3, 2, 1, 4, 8]));  // false

console.log(consecutive.withoutAuxArray([100, 105, 103, 102, 104, 101]));  // true



        

