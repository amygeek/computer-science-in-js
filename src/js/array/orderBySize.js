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

    return newArr;

}

let arr = ['orange','apple', 'orange', 'pear', 'orange', 'apple', 'apple', 'apple', 'apple'];

console.log(orderBySize(arr));