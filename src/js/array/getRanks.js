//get smallest one million number from a billion number

class Ranks {

    getRandomIntInArray ( low, high ) {
        return parseInt( Math.random() * (high - low + 1) + low);
    }

    swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    partition(arr, low, high, randomNum) {
        this.swap(arr, high, randomNum);
        let value = arr[high];
        let pIndex = low;
        for(let i=low; i<high; i++) {
            if (arr[i] <= value) {
                this.swap(arr, i, pIndex);
                pIndex++;
            }
        }
        this.swap(arr, high, pIndex);
        return pIndex;
    }
    getRank( arr, low, high, rank) {
        let randowNum = this.getRandomIntInArray(low, high);
        let leftEnd = this.partition(arr, low, high, randowNum);

        let leftSide = leftEnd - low + 1;

        if (leftSide === rank + 1) {
            return arr.slice(0, leftEnd);
        } else if (rank < leftSide) {
            return this.getRank(arr, low, leftEnd, rank);
        } else {
            return this.getRank(arr, leftEnd + 1, high, rank - leftSide )
        }
    }
}

//testing
let arr = [2, 4, 50, 7, 90, 10, 1, 30, 16, 8];

let ranks = new Ranks();

console.log(ranks.getRank(arr, 0, arr.length-1, 4));

