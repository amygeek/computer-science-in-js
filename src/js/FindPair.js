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
    
    findPair(arr, sum, sets) {
        let st = new Set();
        for (let i=0, l=arr.length; i<l; i++) {
            
            if (st.has(sum - arr[i])) {
                //return "Pair found at index " + arr.indexOf(sum - arr[i]) + " and " + i;
                sets.add([arr.indexOf(sum - arr[i]), i]);
            } else {
                st.add(arr[i]);
            }
            

        }
        
    }

    findMinNumberIndex(arr, low, high) {

        if (high < low) {
            return 0;
        }

        if ( low == high) {
            return low;
        }
        let mid = Math.floor ( (high + low) / 2 );

        if (mid < high && arr[mid + 1] < arr[mid]) {
            return mid + 1;
        }

        if (mid > low && arr[mid] < arr[mid - 1]) {
            return mid;
        }

        if ( arr[high] > arr[mid]) {
            return findMin(arr, low, mid -1);
        }
        return findMin(arr, mid+1, high);
    }

    findPairRotated(arr, sum, sets) {

        let n = arr.length;
        let i;
        //for ( i=1; i<n; i++) {
        //    if (arr[i] < arr[i-1]) {
        //        break;
        //    }
        //}
        i = this.findMinNumberIndex( arr, 0, n - 1);

        let low = i % n;
        let high = i - 1;

        while(low != high) {
            let v = arr[low] + arr[high];
            if (v === sum) {
                sets.add([arr[low], arr[high]]);

            }
            if (v < sum) {
                low = (low + 1) % n;
            } else {
                high = (high - 1 + n) % n;
            }
        }
    }
}

//export default FindPair;

let arr = [8, 7, 2, 5, 3, 1, 9];
let st = new Set();
let findPair = new FindPair();
//findPair.findPair(arr, 10, st);
//console.log(st)

let rotatedArr = [3, 4, 5, 1, 2];

findPair.findPairRotated(rotatedArr, 5, st);
console.log(st)