//get smallest one million number from a billion number

class Ranks {

    getRandomIntInArray ( low, high ) {
        return parseInt( Math.random() * (high - low + 1) + low);
    }

    //use it to find Kth smallest element
    max( arr, start, end ) {
        let max = Number.MIN_VALUE;
        for (let i=start; i<=end; i++) {
            max = Math.max( max, arr[i])
        }
        return max;
    }

    //use it to find Kth largest element
    min( arr, start, end ) {
        let min = Number.MAX_VALUE;
        for (let i=start; i<=end; i++) {
            min = Math.min( min, arr[i])
        }
        return min;
    }

    swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    //partition: smallest element in the front, use it to find Kth smallest element
    partition( arr, left, right, pivot) {

        while (true) {
            while (left <= right && arr[left] <= pivot) {
                left++;
            }

            while (left <= right && arr[right] > pivot) {
                right--;
            }

            if (left > right) {
                return left - 1;
            }
            this.swap(arr, left, right);
        }
    }

    //partition: largest element in the front, use it to find Kth largest element
    partition2( arr, left, right, pivot) {

        while (true) {
            while (left <= right && arr[left] > pivot) {
                left++;
            }

            while (left <= right && arr[right] <= pivot) {
                right--;
            }

            if (left > right) {
                return left - 1;
            }
            this.swap(arr, left, right);
        }
    }

    getRank( arr, left, right, rank) {


        let pivot = arr[this.getRandomIntInArray(left, right)];
        let leftEnd = this.partition(arr, left, right, pivot); // returns end of left partition

        let leftSide = leftEnd - left + 1;

        console.log("pivot, ", pivot)
        if (leftSide === rank ) {
            //return arr.slice(0, leftEnd);
            return this.max(arr, left, leftEnd);
            //return this.min(arr, left, leftEnd);
        } else if (rank < leftSide) {
            return this.getRank(arr, left, leftEnd, rank);
        } else {
            return this.getRank(arr, leftEnd + 1, right, rank - leftSide )
        }
    }
}

//testing
let arr = [2, 4, 50, 7, 90, 10, 1, 30, 16, 8];

let ranks = new Ranks();

console.log(ranks.getRank(arr, 0, arr.length-1, 3));

