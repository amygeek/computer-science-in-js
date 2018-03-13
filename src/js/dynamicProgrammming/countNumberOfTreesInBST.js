// * Count number of binary search tree created for array of size n

let countTrees = ( n ) => {
    
    let res = new Array( n + 1 ).fill(0);
    res[0] = 1;
    res[1] = 1;


    for(let i=2; i <= n; i++){
        for(let j=0; j <i; j++){
            res[i] += res[j] * res[i-j-1];
        }
    }
    return res[n];
}

console.log( countTrees(3) );
console.log( countTrees(4) );
console.log( countTrees(5) );