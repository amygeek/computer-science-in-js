/**
 * Merge Overlapping Intervals
 * Given an array (list) of intervals as input where each interval has a start and end timestamps.
 * Input array is sorted by starting timestamps. You are required to merge overlapping intervals and return output array (list)
 * Consider below input array. Intervals (1, 5), (3, 7), (4, 6), (6, 8) are overlapping so should be merged to one big interval (1, 8).
 * Similarly intervals (10, 12) and (11, 15) are also overlapping intervals and should be merged to (10, 15).
 * @param list
 * @returns {Array}
 */
let find_busy_intervals = function(list) {
    let len = list.length;
    if (!list || len === 0) {
        return;
    }

    let newList = [];
    newList.push({
        'first': list[0].first,
        'second': list[0].second
    });
    for (let i = 2; i < len; i++) {
        let x1 = list[i].first;
        let y1 = list[i].second;

        let y2 = newList[newList.length - 1].second;

        if (y2 >= x1) {
            newList[newList.length - 1].second = Math.max(y1, y2);
        } else {
            newList.push({
                'first': x1,
                'second': y1
            });
        }

    }
    return newList;
};

let list = [
    {first: 1, second: 5},
    {first: 3, second: 7},
    {first: 4, second: 6},
    {first: 6, second: 8},
    {first: 10, second: 12},
    {first: 11, second: 15}];

console.log(find_busy_intervals(list));