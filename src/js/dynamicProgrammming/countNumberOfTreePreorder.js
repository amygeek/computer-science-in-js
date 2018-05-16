
/**
 * Given a preorder sequence how many unique trees can be created
 * Solution is catalan number. Number of tree is exactly same
 * as number of unique BST create with array of size n
 *
 * The way it works for preorder sequence is as follows
 *
 * Suppose our preorder sequence is 1 2 3 4
 * So we need to compute following things
 * count(3)* 2 (combination of 2,3 and 4 on both side of 1)
 * count(1)*count(2) (combination of 2 on one side and 3, 4 on other side)
 * count(2)*count(1) (combination of 2,3 on one side and 4 on other side)
 * count(3)*2 can be broken into count(3)*count(0) + count(0)*count(3)
 *
 * So our final result is
 * count(0)*count(3) + count(1)*count(2) + count(2)*count(1) + count(3)*count(0)
 * which is a catalan number
 */
class CountNumberOfTreePreorder {

    count( num ){
        if(num == 0){
            return 0;
        }
        let res = new Array( num + 1 ).fill(0);
        res[0] = 1;
        res[1] = 1;

        for(let i=2; i <= num; i++){
            let sum = 0;
            for(let j=0; j < i; j++){
                sum += res[j] * res[i - j - 1];
            }
            res[i] = sum;
        }
        return res[num];
    }
    
    countRec( num){
        if(num == 0 || num ==1){
            return 1;
        }
        let sum = 0;
        for(let i=1; i <= num; i++){
            sum += this.countRec(i-1) * this.countRec(num-i);
        }
        return sum;
    }
}

let cn = new CountNumberOfTreePreorder();
console.log(cn.count(3));
console.log(cn.count(4));
console.log(cn.count(5));
console.log(cn.countRec(3));
console.log(cn.countRec(4));
console.log(cn.countRec(5));