//Given an unsorted array of integers, find a pair with given sum in it .
/*
    For example,

    Input:
    arr = [8, 7, 2, 5, 3, 1]
    sum = 10

    Output:
    Pair found at index 0 and 2	(8 + 2)
    OR
    Pair found at index 1 and 5 (7 + 3)
*/

class FindPair {
    
    constructor() {
        this.map = {};
    }
    
    findPair(arr, sum) {
        
        for (let i=0, l=arr.length; i<l; i++) {
            
            if (this.map.hasOwnProperty(sum - arr[i])) {
                return "Pair found at index " + this.map[sum - arr[i]] + " and " + i;
            }
            
            this.map[arr[i]] = i ;
        }
        
    }
}

export default FindPair;