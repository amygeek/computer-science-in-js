
/**
 * get continue sub sequence that integers are positive. return the max sum of sequence. 
 * if the sum are equal between sequence, return sequence that has larger length.
 * if the sequences are the same length, return the sequence that its lastSeqSum digit is smaller
 * 
 * @type {number[]}
 */
let arr = [2, 4, 6, -7, 6, 10, -3, 5, 11];

/**
 * @desc: compare currentSeq with the first seq in stack
 * @param {*} currentSeq: current continue sub sequence
 * @param {*} stack: contain previous highest sequence
 */
let checkSeq = (currentSeq, stack) => {
    if ( stack.length === 0 ) {
        //if nothing is in the stack yet, push the first sequence
        stack.push(currentSeq);
    } else {
        //comparing the current sequence with sequence in the stack
        let currentSeqLen = currentSeq.length;
        let lastSeqLen = stack[0].length;
        let lastSeqSum = stack[0].reduce((prev, current) => {
                return prev + current;
            });
        let currentSeqSum = currentSeq.reduce((prev, current) => {
                return prev + current;
            });
        if ( currentSeqSum > lastSeqSum) {
            stack.pop();
            stack.push(currentSeq);
            
        } else if (currentSeqSum === lastSeqSum) {
            if (currentSeqLen > lastSeqLen || (currentSeqLen === lastSeqLen && currentSeq[0] < stack[0][0] ) ) {
                stack.pop();
                stack.push(currentSeq)
            }
        }
    }
}

let getMaxSequence = (arr) => {

    let stack = [];

    let temp = [];
    for (let i=0; i<arr.length; i++) {

        if (arr[i] > 0) {
            temp.push(arr[i]);
        } else {

            checkSeq(temp, stack);
            temp = [];

        }
    }
    if (temp.length > 0) {
        checkSeq(temp, stack);
    }

    return stack;
}

console.log(getMaxSequence(arr));

//get continue sub sequence that includes negative integer .
let getMaxSeq = (arr) => {
    let max = 0;
    let currentSeq = 0;
    for (let i=0; i<arr.length; i++) {
        currentSeq += arr[i];
        if ( currentSeq < 0) {
            currentSeq = 0;
        } else if ( currentSeq > max) {
            max = currentSeq;
        }
    }
    return max;
}
let arr2 = [-2, -3, 4, -1, -2, 1, 5, -3];  //7

console.log(getMaxSeq(arr2));