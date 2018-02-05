class NextPerm {

    swap( arr, a, b) {
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }

    reverse( arr, start, end ) {
        while ( start <= end ) {
            this.swap(arr, start, end );
            start++;
            end--;
        }
    }

    findNextPerm( arr ) {

        let n = arr.length;

        //find the first number that is not in decreasing order from the end
        let i = n - 2;
        while(i >= 0 && arr[i] > arr[i+1] ) {
            i--;
        }

        //find the second number that is larger than the first number from the end
        if ( i >= 0 ) {
            let j = n - 1;
            while ( j >= 0 && arr[j] < arr[i] ) {
                j--;
            }

            //if both numbers found, swap them
            this.swap(arr, i, j);
        }
        //reverse the arr from index 1 + 1 to end of array
        this.reverse(arr, i + 1, n-1);
    }
}

//test
let nextPerm = new NextPerm();
let arr = [1,5,8,4,7,6,5,3,1]; //[1, 5, 8, 5, 1, 3, 4, 6, 7]
nextPerm.findNextPerm( arr );
console.log( arr );
