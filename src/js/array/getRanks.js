//get smallest one million number from a billion number

class Ranks {

    getRandomIntInArray ( low, high ) {
        return parseInt( Math.random() * (high - low + 1) + low);
    }
    max( arr, start, end ) {
        let max = Number.MIN_VALUE;
        for (let i=start; i<=end; i++) {
            max = Math.max( max, arr[i])
        }
        return max;
    }
    swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    partition( arr, left, right) {

        let mid = parseInt( (left + right) / 2 )
        let pivot = arr[mid]; // Pick a pivot point. Can be an element.

        while (left <= right) { // Until we've gone through the whole array
            // Find element on left that should be on right
            while (arr[left] < pivot) {
                left++;
            }

            // Find element on right that should be on left
            while (arr[right] > pivot) {
                right--;
            }

            // Swap elements, and move left and right indices
            if (left <= right) {
                this.swap(arr, left, right);
                left++;
                right--;
            }
        }
        return left;
    }

    getRank( arr, left, right, rank) {

        let leftEnd = this.partition(arr, left, right);

        let leftSide = leftEnd - left + 1;

        if (leftSide === rank + 1) {
            //return arr.slice(0, leftEnd);
            return this.max(arr, left, leftEnd);
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

console.log(ranks.getRank(arr, 0, arr.length-1, 5));

