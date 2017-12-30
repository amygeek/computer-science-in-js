
let arr = [2, 4, 6, -7, 6, 10, -3, 5, 11];

let getMaxSequence = (arr) => {

    let maxArr = [];

    let temp = [];
    for (let i=0; i<arr.length; i++) {

        if (arr[i] > 0) {
            temp.push(arr[i]);
        } else {

            maxArr.push(temp);
            temp = []

        }
    }
    if (temp.length > 0) {
        maxArr.push(temp);
    }

    let max = 0;
    for (let i=0; i<temp.length; i++) {
        let currentMax = 0;
        let currentMaxInt = i;
        for(let j=0; j<temp[i].length; j++) {
            currentMax += temp[i][j];
        }
        if (currentMax > max) {
            max = currentMax;
        }
    }
    return maxArr;
}

//console.log(getMaxSequence(arr));

let getMaxSeq = (arr) => {
    let max = 0;
    let currentMax = 0;
    for (let i=0; i<arr.length; i++) {
        currentMax += arr[i];
        if ( currentMax < 0) {
            currentMax = 0;
        } else if ( currentMax > max) {
            max = currentMax;
        }
    }
    return max;
}
let arr2 = [-2, -3, 4, -1, -2, 1, 5, -3];  //7

console.log(getMaxSeq(arr2));