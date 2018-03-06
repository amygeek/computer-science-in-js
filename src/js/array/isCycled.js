/*
determine whether a circular array of relative indices is composed of a single, complete cycle
e.g., array of integers such that if x[3] = 2, then it points at the 5th element, and if x[4] = -1
then it points to 3rd element.
circular means that if the array has length 10, then if x[9] = 1, it points to 0th element(x[0])
ex: x=[2,2,-1], x[0] = 2, x[2] = -1, x[1] = 2, so true
    x=[2,3,-1,10]  false
 */
let isCycle = (arr) => {
    let n = arr.length;
    if ( n == 0 ) {
        return;
    }
    let index = 0;
    for ( let i=0; i<n; i++) {
        index = ( index + arr[index] ) % n;
        if ( index < 0 ) {
            index = index + n;
        }

        if(index == 0 && i < n - 1) {  // subcyle
            return false;
        }

    }

    return index == 0;
}

console.log(isCycle([2, 2, -1]));   //true
console.log(isCycle([2, 3, -1, 10]));   //false
console.log(isCycle([1, 1, 1, 1, 1, 1 ]));   //true