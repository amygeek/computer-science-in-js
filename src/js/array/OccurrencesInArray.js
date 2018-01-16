class OccurrencesInArray {

    constructor(arr) {
        this.arr = arr;
        this.size = arr.length;
    }

    findLowIndex( arr, low, high, x ) {
        while ( low <= high ) {
            let mid = Math.floor( (low + high ) / 2);

            if ( arr[mid] < x ) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        if (arr[low] === x) {
            return low;
        }

        return -1;

    }

    findHighIndex ( arr, low, high, x) {
        while ( low <= high ) {
            let mid = Math.floor( (low + high) /2 );

            if ( arr[mid] <= x) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        if (arr[high] === x) {
            return high;
        }
        return -1;
    }

    occurrenceLen ( x ) {
        let leftIndex = this.findLowIndex(this.arr, 0, this.arr.length, x);
        let rightIndex = this.findHighIndex(this.arr, 0, this.arr.length, x);
        return rightIndex - leftIndex + 1;
    }
}

let arr = [1,2,2,2,2,2,2,2,3,4,5,5,6];

let occurrencesInArray = new OccurrencesInArray(arr);

console.log(occurrencesInArray.occurrenceLen( 2 ));