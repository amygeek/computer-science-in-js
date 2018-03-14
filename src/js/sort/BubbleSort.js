
class BubbleSort {

    swap (a, i, j) {
        let t = a[i];
        a[i] = a[j];
        a[j] = t;
    }

    sort( arr, n) {

        for (let i=0; i < n - 1; i++) {
            for (let j=0; j < n - 1 - i; j++) {
                if(arr[j] > arr[j + 1]){
                    this.swap(arr, j, j+1);
                }

            }
        }

    }

    sortRec ( arr, n) {

        for ( let j=0; j< n-1; j++) {
            if (arr[j] > arr[j+1]) {
                this.swap(arr, j, j+1);
            }
        }
        if ( n - 1 > 1 ) {
            this.sortRec(arr, n - 1);
        }
    }
    
}

let arr = [68, 34, 25, 12, 22, 1, 100, 8];
console.log("before: " + arr);

let bubbleSort = new BubbleSort();
bubbleSort.sort(arr, arr.length);
console.log("after: " + arr);