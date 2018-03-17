
/*
 We will use BFS for moving through states, use of BFS will assure removal of minimal number of brackets because we traverse into states
 level by level and each level corresponds to one extra bracket removal.
 Time Complexity of BFS Gives a O(|V|+|E|) time complexity. V will be lenght of the string. E will be number of unvisited sub string
 */
//  method checks if character is parenthesis(open // or closed)
let isParenthesis = (c) => {
    return ((c == '(') || (c == ')'));
}

//  method returns true if string contains valid
// parenthesis
let  isValidParenthesis = ( str) => {

    let cnt = 0;
    for (let i = 0; i < str.length; i++) {

        if (str[i] == '(') {
            cnt++;
        } else if (str[i] == ')') {
            cnt--;
        }

        if (cnt < 0) {
            return false;
        }
    }
    return (cnt == 0);
}


//  method to remove invalid parenthesis: time O(n2)
let removeInvalidParenthesis = ( str ) =>
{
    if (str.length === 0 ) {
        return ;
    }

    //  visit set to ignore already visited string
    let visit = new Set();
    //  queue to maintain BFS
    //queue<string> q;
    let q = [];
    let level = false;

    //  pushing given string as starting node into queue
    q.push(str);
    visit.add(str);
    let count = 0;
    while (q.length !== 0) {

        let str = q.shift();

        if (isValidParenthesis(str)) {
            console.log(str);
            level = true;
        }
        if (level) {
            continue;
        }

        for (let i = 0; i < str.length; i++) {
            if (!isParenthesis(str[i])) {
                continue;
            }

            // Removing parenthesis from str and
            // pushing into queue,if not visited already
            let temp = str.substr(0, i) + str.substr(i + 1);
            if (!visit.has(temp) ) {
                q.push(temp);
                visit.add(temp);
            }
        }
    }
}


let str = "((r()()(";   // ()() and (())
//let str = "()())()";   // (())() and ()()()
// let str = "()v)";    //(v)
removeInvalidParenthesis(str);



