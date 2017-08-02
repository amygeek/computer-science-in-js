let magicIndexSearch = (arr, start, end) => {

    if ( end  < start || start < 0 || end >= arr.length) {
        return -1;
    }

    let mid =  Math.floor( ( start + end ) / 2 );
    if (arr[mid] === mid) {
        return mid;
    } else if (arr[mid] < mid) {
        return magicIndexSearch( arr, mid + 1, end);
    } else {
        return magicIndexSearch( arr, start, mid - 1);
    }
}

let magicIndex = (arr, start, end) => {
    if (end < start || start < 0 || end < arr.length) {
        return -1;
    }

    let midIndex = Math.floor( ( start + end ) / 2 );
    let midValue = arr[midIndex];

    if ( midIndex === midValue) {
        return midIndex;
    }

    let rightIndex = Math.max(midIndex + 1, midValue);
    let right = magicIndexSearch(arr, rightIndex, end);

    if (right > 0) {
        return right;
    }

    let leftIndex = Math.min(midIndex - 1, midValue);
    let left = magicIndexSearch(arr, start, leftIndex);

    if (left > 0 ) {
        return left;
    }
}

let a = [-10, -5, 2, 2, 2, 3, 4, 7, 9, 12, 13];

console.log(magicIndex(a, 0, a.length));