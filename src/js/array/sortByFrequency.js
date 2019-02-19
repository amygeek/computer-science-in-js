//return an array that is sorted by highest count
// Time Complexity : O(n) + O(m Log m) where n is total number of elements and m is total number of distinct elements

let sortByFrequency = (arr) => {

    let map = new Map();

    for(let i=0; i<arr.length; i++) {
        let temp = map.get(arr[i]);

        if ( temp ) {
            map.set( arr[i], temp + 1)
        } else {
            map.set( arr[i], 1);
        }
    }
    let newArr = Array.from(map);

    newArr.sort((a, b) => {
        //return a[1] > b[1] ? -1 : a[1] < b[1] ? 1 : 0;
        return b[1] - a[1];
    })

    let temp = [];
    for (let i= 0; i<newArr.length; i++) {
        for (let j= 0; j<newArr[i][1]; j++) {
            temp.push(newArr[i][0]);
        }
    }
    return temp;
}

// arr = ['pear', 'orange','apple', 'orange', 'orange', 'apple', 'banana']
let sortByFrequency2 = (arr) => {
    // after reduce, res = {pear: 1, orange: 3, apple: 2, banana: 1}
    let res = arr.reduce((prev, curr) => {
        prev[curr] = prev[curr] ? prev[curr] + 1 : 1;
        return prev;
    }, {});
    
    // sort object value by descending: sortedKeys = ["orange", "apple", "pear", "banana"]
    const sortedKeys = Object.keys(res).sort((a, b) => (res[b] - res[a]));

    let n = sortedKeys.length;
    let newArr = [];
    for (let i=0; i<n; i++) {
        /**
         * res[sortedKeys[0] = 3
         * sortedKeys[0] = "orange"
         * push 3 'orange' into newArr
         */
        newArr.push(...Array(res[sortedKeys[i]]).fill(sortedKeys[i]));
    }
    return newArr; // ["orange", "orange", "orange", "apple", "apple", "pear", "banana"]
}

const arr = [2, 5, 2, 8, 5, 6, 8, 8];
console.log(sortByFrequency(arr)); //[ 8, 8, 8, 2, 2, 5, 5, 6 ]

const arr2 = ['pear', 'orange','apple', 'orange', 'orange', 'apple', 'banana'];
console.log(sortByFrequency2(arr2));  //[ 'orange', 'orange', 'orange', 'apple', 'apple', 'apple', 'pear' ]

