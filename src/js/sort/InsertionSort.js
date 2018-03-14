
class InsertionSort {

    insertionSort ( arr, n) {

        for (let i = 1; i < n; i++) {
            let value = arr[i];
            let j = i;
            while( j > 0 && arr[j-1] > value) {
                arr[j] = arr[j-1];
                j--;
            }
            arr[j] = value;
        }
    }

    sortRec ( arr, i, n) {
        let value = arr[i];
        let j = i;

        while ( j > 0 && arr[j-1] > value) {
            arr[j] = arr[j-1];
            j--;
        }
        arr[j] = value;

        if (i + 1 < n ) {
            this.sortRec(arr, i + 1, n);
        }

    }
    
}

let arr = [ 6,4,8,1,3,5,7];
let insertionSort = new InsertionSort();
insertionSort.sortRec(list, 1, list.length);
console.log( arr );