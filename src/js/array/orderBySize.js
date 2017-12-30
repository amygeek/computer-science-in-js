//return an array that is sorted by highest count
let orderBySize = (arr) => {
    let dist = new Map();

    for( let i= 0, l=arr.length; i<l; i++) {
        if (dist.has(arr[i])) {
            dist.set(arr[i], dist.get(arr[i]) + 1)
        } else {
            dist.set(arr[i], 1);
        }
    }

    let newArr = Array.from(dist);

    newArr.sort((a, b) => {
        return a[1] > b[1] ? -1 : a[1] < b[1] ? 1 : 0;
    });

    let temp = [];
    for (let i= 0; i<newArr.length; i++) {
        for (let j= 0; j<newArr[i][1]; j++) {
            temp.push(newArr[i][0]);
        }
    }
    return temp;

}

let arr = ['pear', 'orange','apple', 'orange', 'orange', 'apple', 'apple'];

console.log(orderBySize(arr));  //[ 'orange', 'orange', 'orange', 'apple', 'apple', 'apple', 'pear' ]

let arr2 = [2, 5, 2, 8, 5, 6, 8, 8];

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
        return a[1] > b[1] ? -1 : a[1] < b[1] ? 1 : 0;
    })

    let temp = [];
    for (let i= 0; i<newArr.length; i++) {
        for (let j= 0; j<newArr[i][1]; j++) {
            temp.push(newArr[i][0]);
        }
    }
    return temp;
}

console.log(sortByFrequency(arr2)); //[ 8, 8, 8, 2, 2, 5, 5, 6 ]