/*
 Say child has to take n steps.
 At every step the child has 3 options, to take 1 step, 2 step or 3 steps.
 So if child take 1 step then find the number of ways to complete n-1 steps +1.
 Similarly if child take 2 steps then find the number of ways to complete n-2 steps +1.
 If child take 3 step then find the number of ways to complete n-3 steps +1.
 So total number of ways to complete n steps
 = No of ways to complete (n-1)steps
 + No of ways to complete (n-2)steps
 + No of ways to complete (n-3)steps +1.
 */
let findWaysRec = ( n ) => {
    
    if (n < 1) {
        return 0;
    }
    return 1 + findWaysRec(n - 1) + findWaysRec(n - 2) + findWaysRec(n - 3);
}

let findWaysDP = ( n, res) => {

    if (n < 1) {
        return 0;
    }
    if (res[n] > 0) {
        return res[n];
    }
    
    res[n] = 1 + findWaysDP(n - 1, res) + findWaysDP(n - 2, res) + findWaysDP(n - 3, res);
    
    return res[n];
}

let n = 3;
let res = [];
console.log( findWaysDP(n, res) );