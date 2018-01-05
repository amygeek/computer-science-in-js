let rand5 = () => {
    return parseInt( Math.random()  * 5 );
}

let rand7_2 = () => {

    let num = 5 * rand5() + rand5();
    if ( num < 21 ) {
        return num % 7;  //num % 7 return   0 to 6, and num % 7 + 1 return 0 to 7
    }
    return rand7_2();
}

let rand7 = () => {

    let r1 = 2 * rand5();
    let r2 = rand5();

    if ( r2 !== 4 ) {
        let zeroOrOne = r2 % 2;
        let num = r1 + zeroOrOne;
        if ( num < 7 ) {
            return num;
        }
    }
    return rand7();
}

let arr = new Array(7).fill(0);

let testSize = 1000;
for(let i=0; i<testSize; i++) {
    let r7 = rand7_2();
    if ( r7 !== undefined) {
        arr[r7]++;
    }
}

console.log(arr);
for (let i=0; i<7; i++) {
    let str = `index ${i} appeared ${arr[i] * 100 / testSize }%`;
    console.log(str);
}
