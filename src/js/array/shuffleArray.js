let swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let shuffle = (arr) => {
    let n = arr.length;

    for (let i=n-1; i>0; i--) {
        let num = parseInt((i + 1) * Math.random());
        swap(arr, i, num);
    }
    return arr;
}

let arr = [1,0,3,9,2];


console.log(shuffle(arr));