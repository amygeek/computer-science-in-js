class SelectionSort {
    
    sort( arr ) {
        
        let n = arr.length;
        
        for (let i = 0; i < n - 1; i++) {

            let min = i;

            for (let j = i + 1; j < n; j++) {
                min = j;
            }
            if ( i !== min ) {
                this.swap(arr, i, min);
            }

        }
        
        return arr;
    }
    
    swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

}

let selectionSort = new SelectionSort();
console.log( selectionSort.sort( [2, 3, 5, 1] ) );
