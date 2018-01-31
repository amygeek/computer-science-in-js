class RankNode {

    constructor( d ) {
        this.data = d;
        this.left = null;
        this.right = null;
        this.leftSize = 0;
    }

    insert ( d ) {

        if ( d <= this.data ) {
            if ( this.left !== null ) {
                this.left.insert( d );
            } else {
                this.left = new RankNode( d );
            }
            this.leftSize++;
        } else {
            if ( this.right !== null ) {
                this.right.insert( d );
            } else {
                this.right = new RankNode( d );
            }
        }
    }

    getRank( d ) {
        if ( d === this.data ) {
            return this.leftSize
        } else if ( d < this.data ) {
            if ( this.left === null ) {
                return -1;
            }
            return this.left.getRank( d );
        } else {
            let rightSize = ( this.right !== null ) ? this.right.getRank( d ) : -1;

            if ( rightSize !== -1  ) {
                return rightSize + this.leftSize + 1;
            }
            return -1;
        }
    }
}

class TrackRank {

    constructor () {
        this.root = null;
    }

    track ( d ) {
        if ( this.root === null ) {
            this.root = new RankNode( d );
        } else {
            this.root.insert( d );
        }
    }

    getRankOfNumber ( d ) {
        return this.root.getRank( d )
    }
}

let size = 100;
let list = [60, 58, -56, -51, 75, 68, 46, -24, -58, 54, -46, 97, 64, 78, -20, 39, 38, -99, -95, -85, -89, 61, -33, -1, 66, 20, -86, -51, 88, -75, 86, 6, -20, -99, -70, 65, -80, -19, 67, 44, 26, -91, 43, 64, 15, -48, 32, -37, -69, 31, 8, -84, -35, -8, 12, 16, 47, 75, 31, 28, 4, 21, -85, -25, -76, 99, 85, 21, 81, -32, 46, -89, 45, 38, -69, -53, -60, -30, -51, -24, 84, 21, -7, 94, -23, -20, -8, -10, -68, 70, -50, 6, -58, -66, -62, 74, -50, -68, -73, 10];

let trackRank = new TrackRank();

for (let i = 0; i < size; i++) {
    trackRank.track(list[i]);
}

console.log( trackRank.getRankOfNumber( 38 ));  //
