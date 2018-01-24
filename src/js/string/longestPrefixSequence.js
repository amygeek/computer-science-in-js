//find The Longest Sequence Of Prefix Shared By All The Words In A String.
let longestPrefixSeq = ( str ) => {
    let arr = str.split( " ");

    let n = arr.length;

    let endIndex = arr[0].length;

    for ( let i=1; i<n; i++ ) {

        let j = 0;

        while ( j < endIndex && j < arr[i].length && arr[0].charAt(j) === arr[i].charAt(j) ) {
            j++;
        }

        endIndex = j;
    }
    return arr[0].substr(0, endIndex);

}

let str = "Bedroom BedClock BedTable BedWall";

console.log( longestPrefixSeq( str ) );