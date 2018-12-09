let addOne = (arr) => {

    let carry = 0;
    let len = arr.length;

    for(let i=len; i>=0; i--) {

        if ( i === len - 1 || carry === 1 ) {
            arr[i]++;
            if (arr[i] === 10 ) {
                arr[i] = 0;
                carry = 1;
            } else {
                carry = 0;
            }
        }
    }

    carry !== 0 && arr.unshift(1);
    return arr;
}


let addOne2 = (arr, x) => {

    let carry = 0;
    let len = arr.length;

    for(let i=len-1; i>=0; i--) {

        if ( i === len - 1) {
            arr[i] = arr[i] + x;
            if (arr[i] / 10  >=  1) {
                arr[i] = arr[i] % 10;
                carry = 1;
            }
        } else {
            arr[i] = arr[i] + carry;
            if (arr[i] / 10 >= 1) {
                arr[i] = arr[i] % 10;
                carry = 1;

            } else {
                carry = 0;
            }
        }
    }
    if (carry !== 0) {
        arr.unshift(1);
    }
    return arr;
}

let arr = [ 9,9,9 ];
console.log(addOne(arr));
// console.log(addOne2(arr, 8));