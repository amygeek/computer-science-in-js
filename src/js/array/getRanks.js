//get smallest one million number from a billion number

let getRandNumInRange = (low, high) => {
    return parseInt( Math.random() * (high - low + 1) + low );
}
let swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
let partition = (arr, left, right, pivot) => {

    while( true) {
        while( left <= right && arr[left] <= pivot ) {
            left++;
        }
        while ( left <= right && arr[right] > pivot ) {
            right --;
        }

        if ( left > right ) {
            return left -1;
        }
        swap( arr, left, right);
    }

}

let max = ( arr, left, right ) => {
    let max = Number.MIN_VALUE;
    for( let i=0; i<=right; i++) {
        max = Math.max(max, arr[i]);
    }
    return max;
}

let getRanks = (arr, left, right, rank) => {
    let p = getRandNumInRange( left, right);
    //console.log('pIndex: ', arr[p]);
    //let leftEnd = partition(arr, left, right, arr[p]);
    let leftEnd = partition(arr, left, right, 8);
    let leftSize = leftEnd - left + 1;

    if ( leftSize === rank + 1 ) {
        //console.log('arr: ', arr);
        //return max(arr,left, leftEnd);
        return arr.splice(0, leftEnd);
    } else if (rank < leftSize) {
        return getRanks(arr, left, leftEnd, rank);
    } else {
        return getRanks(arr, leftEnd + 1, right, rank-leftSize);
    }

}

//testing
let arr = [2, 4, 50, 7, 90, 10, 1, 30, 16, 8];


console.log(getRanks(arr, 0, arr.length-1, 4));
//console.log(arr.sort((a, b) => a > b))
