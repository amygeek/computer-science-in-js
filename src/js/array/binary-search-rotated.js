/**
 * @desc Search rotated array
 * Search a given number in a sorted array that has been rotated by some arbitrary number.
 * @param a
 * @param left
 * @param right
 * @param x
 * @returns {*}
 */
let search = function(a, left, right, x) {
    // assuming all the xs are unique.
    if (left > right) {
        return -1;
    }

    let mid =  Math.floor((right + left) / 2);

    if (a[mid] === x) {
        return mid;
    }

    if (a[left] < a[mid]) { // Left is normally ordered.
        if (x >= a[left] && x <= a[mid]) {
            return search(a, left, mid - 1, x);
        } else {
            return search(a, mid + 1, right, x);
        }
    } else if (a[mid] < a[right]) { // Right is normally ordered.
        if (x >= a[mid] && x <= a[right]) {
            return search(a, mid + 1, right, x);
        } else {
            return search(a, left, mid - 1, x);
        }
    } else if (a[left] == a[mid]) { // Left is either all repeats OR loops around (with the right half being all dups)
        if (a[mid] != a[right]) { // If right half is different, search there
            return search(a, mid + 1, right, x);
        } else { // Else, we have to search both halves
            let result = search(a, left, mid - 1, x);
            if (result == -1) {
                return search(a, mid + 1, right, x);
            } else {
                return result;
            }
        }
    }

    return -1;
};


let binary_search_rotated = function(a, x) {
    return search(a, 0, a.length - 1, x);
};

let a = [2, 3, 2, 2, 2, 2, 2, 2 , 2 , 2 ];
console.log(binary_search_rotated( a, 2));  //4
console.log(binary_search_rotated( a, 3));   //1
console.log(binary_search_rotated([6,7,1,2,3,4,5], 3));   // 4
console.log(binary_search_rotated([4,5,6,1,2,3], 3 ));   // 5
console.log(binary_search_rotated([4,5,6,1,2,3], 6 ));   // 2

