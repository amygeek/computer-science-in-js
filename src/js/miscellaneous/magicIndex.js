
let search = (arr, start, end) => {
    if (start <= end) {
        let mid = Math.floor( ( start + end ) / 2 );

        if (mid == arr[mid]) // check for magic index.
            return mid;
        if (mid > arr[mid]) {

            return search(arr, mid + 1, end);  // the right half of the array
        } else {

            return search(arr, start, mid - 1);  // the left half of the array
        }
    }
    return -1;
}

let magicIndex = (arr, start, end) => {
    if (end < start || start < 0 || end >= arr.length) {
        return -1;
    }

    let mid = Math.floor( ( start + end ) / 2 );
    let midVal = arr[mid];

    if ( mid === midVal) {
        return mid;
    }

    let leftIndex = Math.min(mid - 1, midVal);
    let left = magicIndex(arr, start, leftIndex);

    if (left >= 0 ) {
        return left;
    }

    let rightIndex = Math.max(mid + 1, midVal);
    let right = magicIndex(arr, rightIndex, end);

    return right;
}

let a = [-10, -5, 2, 2, 2, 2, 2, 3, 5, 7, 9, 12, 13];

console.log(magicIndex(a, 0, a.length-1));