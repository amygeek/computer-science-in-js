let minJump = (arr) => {  
    let res = [...Array(arr.length).fill(Number.MAX_VALUE)];
    res[0] = 0;

    let n = arr.length;
    for (let i=1; i < n; i++) {
        for(let j=0; j < i; j++) {
            if (arr[j] + j >= i) {
                if (res[i] > res[j] + 1) {
                    res[i] = res[j] + 1;
                }
            }
        }
    }
    return res[res.length-1];
}

let arr = [1,3,5,3,2,2,6,1,6,8,9];  // jump from 3 -> 2, 2 -> 2, 2 -> 6, 6 -> 9

console.log(minJump(arr));  //4;

arr = [2,3,1,1,2,4,2,0,1,1];  // jump from 2 -> 3, 3 -> 2, 2 -> 4, 4 -> 1

console.log(minJump(arr));  //4;