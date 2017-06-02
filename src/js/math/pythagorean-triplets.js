/**
 * Given an integer array find all Pythagorean triplets.
 * For the above array, the Pythagorean triplets are (3, 4, 5) and (6, 8, 10) as

 Solution #1
 Runtime Complexity
 Polynomial, O(n3).

 Memory Complexity
 Constant, O(1).

 This solution uses the brute force approach. We look at all possible triplets and save the ones that match our criteria i.e.
 they're Pythagorean triplets (a2 + b2 = c2).
 * @param a
 * @param b
 * @param c
 * @returns {boolean}
 */
let is_pythagorean_triplet = function(a, b, c) {
    let sqra = a * a;
    let sqrb = b * b;
    let sqrc = c * c;

    if (sqra + sqrb === sqrc) {
        return true;
    } else if (sqra + sqrc === sqrb) {
        return true;
    } else if (sqrb + sqrc === sqra) {
        return true;
    } else {
        return false;
    }
};

let find_pythagorean_triplets_1 = function(arr) {
    let n = arr.length;
    let triplets = [];
    for (let i = 0; i < n - 2; i++) {
        if (arr[i] === 0) {
            continue;
        }

        for (let j = i + 1; j < n - 1; j++) {
            if (arr[j] === 0) {
                continue;
            }
            for (let k = j + 1; k < n; k++) {
                if (is_pythagorean_triplet(arr[i], arr[j], arr[k])) {
                    triplets.push([arr[i], arr[j], arr[k]]);
                }
            }
        }
    }
    return triplets;
};

/**
 * Solution #2
 Runtime Complexity
 Quadratic, O(n2).

 Memory Complexity
 Constant, O(1).

 This solution is based on 3SUM problem. Here is an overview of the approach where we try to
 find elements matching the criteria a2 + b2 = c2.

 1) Sort the list of integers.
 2) Iterate the list from start to end. Select current element as c2.
     In order to find the other two elements (a2+b2 = c2), we'll traverse the list from start and end till start < end.
     We can take advantage of the fact that the list is sorted. While traversing the list we're looking for 3 numbers that sum up to 0: a2+b2 + (-c2) = 0.
     a2 = list[start] * list[start]
     b2 = list[end] * list[end]
     If current values of start & end iterators make such a triplet, we'll save it.
     If a2+b2 + (-c2) > 0, we'll decrement the end iterator in hope of hitting the target sum. Remember, (list[start] <= list[end]).
     If a2+b2 + (-c2) < 0, we'll increment the start iterator.
 * @param arr
 * @returns {Array}
 */
let find_pythagorean_triplets_2 = function(arr) {
    let n = arr.length;
    let triplets = [];
    arr.sort(function(a, b) {
        return a - b;
    });

    for (let i = 0; i < n; i++) {
        if (arr[i] === 0) {
            continue;
        }

        let c2 = arr[i] * arr[i];

        let j = 0;
        let k = n - 1;

        while (j < k) {
            if (j === i || arr[j] === 0) {
                j++;
                continue;
            }

            if (k === i || arr[k] === 0) {
                k--;
                continue;
            }

            let a2 = arr[j] * arr[j];
            let b2 = arr[k] * arr[k];

            if (a2 + b2 === c2) {
                triplets.push([arr[i], arr[j], arr[k]]);
                break;
            } else if (a2 + b2 -c2 > 0) {
                k--;
            } else {
                j++;
            }
        }
    }
    return triplets;
};