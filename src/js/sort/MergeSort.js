class MergeSort {
    
    
    min ( a, b) {
        return (a > b) ? b : a;
    }
    
    sort(arr, low, high) {
    
        if(low >= high){
            return;
        }
    
        let mid = parseInt( (low + high) / 2 );
        this.sort(arr, low, mid);
        this.sort(arr, mid + 1, high);
    
        this.merge(arr, low, high);
    
    }
    
    sortIterative( arr, low, high) {
    
        for (let m=1; m< high - low + 1; m = 2*m) {
    
            for (let i = low; i< high; i += 2*m) {
                let mid = min(i + 2*m - 1, high);
                merge(arr, i, mid);
            }
        }
    
    }
    
    merge( arr, low, high) {
        let mid = parseInt( (low + high) / 2 );
        let i = low;
        let j = mid + 1;
        let k = 0;
        //let temp = new Array( high - low + 1 );
        let temp = [];
        while ( i<=mid && j<=high ) {
    
            if ( arr[i] <= arr[j]) {
                temp[k++] = arr[i++];
            } else {
                temp[k++] = arr[j++];
            }
        }
        while (i<=mid) {
            temp[k++] = arr[i++];
        }
        while ( j<= high ) {
    
            temp[k++] = arr[j++];
        }
    
        i = low;
        for( k=0; k < temp.length; k++){
            arr[i++] = temp[k];
        }
    }
}

//run test

let arr = [68, 34, 25, 12, 22, 1, 100, 8];

let mergeSort = new MergeSort();

mergeSort.sort(arr, 0, arr.length-1);

console.log("Sorted array: ", arr);


