let getRanIndex = (low, high) => (parseInt(Math.random() * (high - low + 1) + low));
let shuffle = (arr) => {
    let n = arr.length;

    for (let i=n-1; i>0; i--) {
        let num = getRanIndex(0, i);
        let temp = arr[i];
        arr[i] = arr[num];
        arr[num] = temp;
    }
    return arr;
}

let arr = [1,0,3,9,2];


console.log(shuffle(arr));