let revertStack = ( st ) => {
    let i = 0;
    let j = st.length-1;
    while(i<j) {
        let temp = st[i];
        st[i] = st[j];
        st[j] = temp;
        i++;
        j--;
    }
    return st;
}

let arr = [1,2,3];
//console.log(revertStack(arr));

let revertStackRec = (st) => {

    if (st.length == 0) {
        return;
    }
    let temp = st.pop();
    revertStackRec(st);
    pushToBottom(st, temp);

}

let pushToBottom = ( st, data ) => {
    if ( st.length === 0 ) {
        st.push(data);
        return;
    }
    let temp = st.pop();
    pushToBottom(st, data);
    st.push(temp);

}

revertStackRec(arr);
console.log(arr);