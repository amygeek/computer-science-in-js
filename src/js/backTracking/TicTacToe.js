

class TicTacToe {

    constructor() {
        this.piece = {
            Empty: "Empty",
            Red: "Red",
            Blue: "Blue"
        }
    }

    convertIntToPiece( arr ) {
        let n = arr.length;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if ( arr[i][j] === 1 ) {
                    arr[i][j] =  this.piece.Blue;
                } else if ( arr[i][j] === 2 ) {
                    arr[i][j] =  this.piece.Red;
                } else {
                    arr[i][j] = this.piece.Empty;
                }
            }
        }
        return arr;
    }
    hasWon ( arr ) {
        let n = arr.length;


        let row = 0;
        let col = 0;

        //check row
        for ( row=0; row<n; row++ ) {
            if ( arr[row][0] !== this.piece.Empty ) {
                for ( col=1; col<n; col++ ) {
                    if ( arr[row][col-1] != arr[row][col]) {
                        break;
                    }
                }
                if ( col === n) {
                    return arr[row][0];
                }
            }
        }

        //check column
        for ( col=0; col<n; col++ ) {
            if (arr[0][col] !== this.piece.Empty ) {
                for ( row=1; row<n; row++ ) {
                    if ( arr[row-1][col] !== arr[row][col] ) {
                        break;
                    }
                }
                if ( row === n ) {
                    return arr[0][col];
                }
            }
        }

        //check diagonal from top left to bottom right
        if ( arr[0][0] !== this.piece.Empty ) {
            for ( row=1; row<n; row++ ) {
                if ( arr[row-1][row-1] !== arr[row][row]) {
                    break;
                }
            }
            if ( row === n ) {
                return arr[0][0];
            }

        }

        //check diagonal from bottom left to top right
        if ( arr[n-1][0] !== this.piece.Empty ) {
            for ( row=1; row<n; row++ ) {
                if ( arr[n-row][row-1] !== arr[n-row-1][row] ) {
                    break;
                }
            }
            if ( row === n ) {
                return arr[n-1][0]
            }
        }
    }
}

let ticTacToe = new TicTacToe();

let N = 3;
let arr = [ [2,  2,  1],
            [0,  1,  2],
            [1,  2,  2] ];

arr = ticTacToe.convertIntToPiece(arr);

let p3 = ticTacToe.hasWon(arr);

console.log( p3 );
