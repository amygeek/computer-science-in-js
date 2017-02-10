class QuickSort {
    
    constructor( data ) {
        this.data = data;
    }
    
    swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    
    partition(arr, start, end) {
        let pivot = arr[end];
        let pIndex = start;
        let temp;
        
        for(let i = start; i < end; i++) {
            if( arr[i] <= pivot) {
                this.swap(arr, i, pIndex);
                pIndex++;
            }
        }

        this.swap(arr, pIndex, end);
        
        return pIndex;
    }
    
    quickSort(arr, start, end) {
        if (start < end) {
            let pivot = this.partition(arr, start, end);
            this.quickSort(arr, start, pivot - 1);
            this.quickSort(arr, pivot + 1, end);
        }
    }
} 

export default QuickSort;