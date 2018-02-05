

class TicTacToe {

    constructor() {
        this.piece = {
            Empty: "Empty",
            Red: "Red",
            Blue: "Blue"
        }
    }

    convertIntToPiece( board ) {
        let n = board.length;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if ( board[i][j] === 1 ) {
                    board[i][j] =  this.piece.Blue;
                } else if ( board[i][j] === 2 ) {
                    board[i][j] =  this.piece.Red;
                } else {
                    board[i][j] = this.piece.Empty;
                }
            }
        }
        return board;
    }
    hasWon ( board ) {
        let n = board.length;


        let row = 0;
        let col = 0;

        //check row
        for ( row=0; row<n; row++ ) {
            if ( board[row][0] !== this.piece.Empty ) {
                for ( col=1; col<n; col++ ) {
                    if ( board[row][col-1] != board[row][col]) {
                        break;
                    }
                }
                if ( col === n) {
                    return board[row][0];
                }
            }
        }

        //check column
        for ( col=0; col<n; col++ ) {
            if (board[0][col] !== this.piece.Empty ) {
                for ( row=1; row<n; row++ ) {
                    if ( board[row-1][col] !== board[row][col] ) {
                        break;
                    }
                }
                if ( row === n ) {
                    return board[0][col];
                }
            }
        }

        //check diagonal from top left to bottom right
        if ( board[0][0] !== this.piece.Empty ) {
            for ( row=1; row<n; row++ ) {
                if ( board[row-1][row-1] !== board[row][row]) {
                    break;
                }
            }
            if ( row === n ) {
                return board[0][0];
            }

        }

        //check diagonal from bottom left to top right
        if ( board[n-1][0] !== this.piece.Empty ) {
            for ( row=1; row<n; row++ ) {
                if ( board[n-row][row-1] !== board[n-row-1][row] ) {
                    break;
                }
            }
            if ( row === n ) {
                return board[n-1][0]
            }
        }
    }
}

let ticTacToe = new TicTacToe();

let N = 3;
let board = [[2,  2,  1],
             [0,  1,  2],
             [1,  2,  2]];

board = ticTacToe.convertIntToPiece(board);

let p3 = ticTacToe.hasWon(board);

console.log( p3 );
