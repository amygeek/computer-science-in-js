let getMaxArea = (st, arr, i) => {
    let area = 0;
    let top = st.shift();
    //if stack is empty means everything till i has to be
    //greater or equal to input[top] so get area by
    //input[top] * i;
    if (st.length === 0) {
        area = arr[top] * i;
    } else {
        //if stack is not empty then everything from i-1 to front of the stack + 1
        //has to be greater or equal to input[top]
        //so area = input[top]*(i - st[0] - 1);
        area = arr[top] * (i - st[0] - 1);
    }
    return area;
}
let maximumHistogram = (arr) => {
    let n = arr.length;
    let st = [];
    let maxArea = 0;
    let i;
    for (i=0; i<n;) {
        let stackIsEmpty = (st.length === 0);
        if (stackIsEmpty || arr[st[0]] <= arr[i]) {
            st.unshift(i++);
        } else {
            let area = getMaxArea(st, arr, i);
            if (area > maxArea) {
                maxArea = area;
            }
        }        
    }

    while (st.length > 0) {
        let area = getMaxArea(st, arr, i);
        if (area > maxArea) {
            maxArea = area;
        }
    }
    return maxArea;
}

console.log(maximumHistogram([2,2,2,6,1,5,4,2,2,2,2])); // 12  from index 5 to end of array 6 x 2

let maxRectangularSubmatrixOf1s = (input) => {
    let m = input.length;
    let n = input[0].length;
    let temp = [...Array(n).fill(0)];
    let maxArea = 0;
    
    for(let i=0; i < m; i++){
        for(let j=0; j < n; j++){
            if(input[i][j] == 0){
                temp[j] = 0;
            }else{
                temp[j] += input[i][j];
            }
        }
        area = maximumHistogram(temp);
        if(area > maxArea){
            maxArea = area;
        }
    }
    return maxArea;
}
let m = [[1,1,1,0],
        [1,1,1,1],
        [0,1,1,0],
        [0,1,1,1],
        [1,0,0,1],
        [1,1,1,1]];
console.log(maxRectangularSubmatrixOf1s(m));  // 8
