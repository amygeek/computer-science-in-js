

class CountingSort{

    sort( arr ) {

        let n = arr.length;

        // arr to be sorted in, this arr is necessary
        // when we sort object data types, if we don't,
        // we can sort directly into the input arr
        let res = new Array( n );

        // find the smallest and the largest value
        let min = Math.min( ...arr );
        let max = Math.max( ...arr );

        // init arr of frequencies
        let counts = new Array( max - min + 1).fill( 0 );

        // init the frequencies
        for (let i = 0;  i < n; i++) {
            counts[arr[i] - min]++;
        }

        // recalculate the arr - create the arr of occurrences
        counts[0]--;
        for (let i = 1; i < counts.length; i++) {
            counts[i] += counts[i-1];
        }

    /*
      Sort the arr right to the left
      1) Look up in the arr of occurrences the last occurence of the given value
      2) Place it leto the sorted arr
      3) Decrement the index of the last occurence of the given value
      4) Continue with the previous value of the input arr (goto set1),
         terminate if all values were already sorted
    */
        for (let i = n - 1; i >= 0; i--) {
            res[counts[arr[i] - min]--] = arr[i];
        }

        return res;
    }

}

let countingSort = new CountingSort();
let arr = [ 9,3,0,2,4,10,0,5,2,3,1,4 ];

let sorted = countingSort.sort( arr );
console.log("Sorted:  " + sorted );