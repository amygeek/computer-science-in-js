let stock = [100, 80, 60, 70, 60, 75, 85];

/*
 * The stock span problem is a financial problem where we have a series of n daily price quotes for a stock
 * and we need to calculate span of stock’s price for all n days. The span Si of the stock’s price on a given day
 * i is defined as the maximum number of consecutive days just before the given day, for which the price of the stock
 * on the current day is less than or equal to its price on the given day.
 * For example, if an array of 7 days prices is given as {100, 80, 60, 70, 60, 75, 85},
 * then the span values for corresponding 7 days are {1, 1, 1, 2, 1, 4, 6}
 *
 */

let stockSpan = (arr) => {

    let len = arr.length;
    let spans = new Array(len).fill(0);
    spans[0] = 1;

    let st = [];
    st[0] = 0;  //st stores stock indexes. Let's start at index 0

    //loop through the stock prices
    for(let i=1; i<len; i++) {

        //if st is not empty and current stock price is greater than the previous stock price, pop the index off from st
        while ( st.length > 0 && arr[i] > arr[st[st.length -1]] ) {
            st.pop();
        }
        if (st.length === 0) {
            spans[i] = i + 1;
        } else {
            spans[i] = i - st[st.length -1];
        }
        console.log(spans)
        //push stock index to st
        st.push(i);
    }
    return spans;
}

//[1, 1, 1, 2, 1, 4, 6]
console.log(stockSpan(stock));