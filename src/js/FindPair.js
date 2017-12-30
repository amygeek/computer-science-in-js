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

    findPairRotated(arr, sum, sets) {

        let len = arr.length;
        let i;
        for ( i=1; i<len; i++) {
            if (arr[i] < arr[i-1]) {
                break;
            }
        }

        let low = i % len;
        let high = i - 1;

        while(low != high) {
            let v = arr[low] + arr[high];
            if (v === sum) {
                sets.add([low, high]);

            }
            if (v < sum) {
                low = (low + 1) % len;
            } else {
                high = (high + len - 1) % len;
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