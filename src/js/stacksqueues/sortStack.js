//sort a stack in ascending order with biggest items on top. You may use at most one additional stack to hold items
let sortStack = ( st ) => {

    let newSt = [];

    while ( st.length !== 0 ) {

        let val = st.pop();

        while ( newSt.length !== 0 && newSt[newSt.length - 1] > val) {
            st.push( newSt.pop() );
        }
        newSt.push( val );
    }

    return newSt;
}

let arr = [3, 4, 1, 2, 5];


console.log(sortStack( arr ) )