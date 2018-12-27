/**
 * Merge Overlapping Intervals
 * Given an array (list) of intervals as input where each interval has a start and end timestamps.
 * Input array is sorted by starting timestamps. You are required to merge overlapping intervals and return output array (list)
 * Consider below input array. Intervals (1, 5), (3, 7), (4, 6), (6, 8) are overlapping so should be merged to one big interval (1, 8).
 * Similarly intervals (10, 12) and (11, 15) are also overlapping intervals and should be merged to (10, 15).
 * @param list
 * @returns {Array}
 */
let mergeInterval = function(list) {
    let len = list.length;
    if (!list || len === 0) {
        return;
    }

    let res = [];
    res.push(list[0]); // push the first elm into the list

    for (let i = 1; i < len; i++) {
        let x2 = list[i].first;
        let y2 = list[i].second;

        let y1 = res[res.length - 1].second;

        if (y1 >= x2) {
            res[res.length - 1].second = Math.max(y1, y2);
        } else {
            res.push(list[i]);
        }

    }
    return res;
};

let list = [
    {first: 1, second: 5},
    {first: 3, second: 7},
    {first: 4, second: 6},
    {first: 6, second: 8},
    {first: 10, second: 12},
    {first: 11, second: 15}];

console.log(mergeInterval(list)); // [{first: 1, second: 8}, {first: 10, second: 15}]

list = [
    {"first":4,"second":12},
    {"first":13,"second":16},
    {"first":19,"second":20},
    {"first":20,"second":24}];
    /**
     * [{"first":4,"second":12},{"first":13,"second":16},{"first":19,"second":24}]
     */
console.log(mergeInterval(list));
