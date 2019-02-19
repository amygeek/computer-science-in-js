//Randomly generate a set of m integers from an array of size n
let rand = (low, high) => {
    return parseInt(Math.random() * (high - low + 1) + low);
}
let pickSet = (arr, m) => {
    let subset = [];
    for (let i=0; i<m; i++) {
        subset[i] = arr[i];
    }
    for (let j=m, l=arr.length; j<l; j++) {
        let num = parseInt(Math.random() * (j + 1));
        if ( num < m ) {
            subset[num] = arr[j];
        }
    }
    return subset;
}


//test
let arr = [2, 4, 50, 7, 90, 10, 1, 30, 16, 8];

console.log(pickSet(arr, 4)); //[90, 10, 1, 7]
