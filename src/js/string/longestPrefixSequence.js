//find The Longest Sequence Of Prefix Shared By All The Words In A String.
let longestPrefixSeq = ( str ) => {
    let arr = str.split( " ");

    let n = arr.length;

    let endIndex = arr[0].length;

    for ( let i=1; i<n; i++ ) {
        let current = 0;
        while ( current < endIndex && current < arr[i].length && arr[0].charAt(current) === arr[i].charAt(current) ) {
            current++;
        }
        endIndex = current;
    }
    return arr[0].substr(0, endIndex);

}

let str = "Bedroom BedClock BedTable BedWall";

console.log( longestPrefixSeq( str ) );