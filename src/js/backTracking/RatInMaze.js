/*
 Create a solution matrix of the same structure as maze.
 Whenever rat moves to cell in a maze, mark that particular cell in solution matrix.
 At the end print the solution matrix, follow that 1’s from the top left corner, it will be that path for the rat.
 Algorithm:

 If rat reaches the destination
 print the solution matrix.
 Else
 Mark the current cell in solution matrix as 1
 If previous step is not in vertical direction (upwards) then move forward in the vertical direction(downwards)
 and recursively check if this movement leads to solution.
 If movement in above step doesn’t lead to the solution and If previous step is not in horizontal direction (towards left)
 then move forward in the horizontal direction(towards right) and recursively check if this movement leads to solution.
 If movement in above step doesn’t lead to the solution and If previous step is not in vertical direction (downwards)
 then move forward in the horizontal direction(upwards) and recursively check if this movement leads to solution.
 If movement in above step doesn’t lead to the solution and If previous step is not in horizontal direction (towards right)
 then move forward in the horizontal direction(towards left) and recursively check if this movement leads to solution.
 If none of the above solution works then BACKTRACK and mark the current cell as 0.
 NOTE: It is important to check the previous direction in which the rat has moved because if rat will move in the opposite direction w.r.t
 its previous direction then rat might end up in infinite loop. Example: if rat has moved to its left in the previous direction
 then if in next moves to right then moving left option will be available again then rat will move to left again ,
 then again right and so on
 */

class RatInMaze {

    //initialize the solution matrix in constructor.
    constructor( n ) {
        this.solution = [];
        for (let i = 0; i < n; i++) {
            this.solution.push(new Array( n).fill(0));
        }
    }

    solveMaze(maze, n) {
        
        if (this.findPath(maze, 0, 0, n, "down")) {
            
            this.print(this.solution, n);
        }else{
            console.log("NO PATH FOUND");
        }

    }

    findPath( maze, x, y, n, direction) {
        
        // check if maze[x][y] is feasible to move
        if(x == n - 1 && y == n - 1){ //we have reached
            this.solution[x][y] = 1;
            return true;
        }
        if ( this.isSafeToGo( maze, x, y, n )) {
            // move to maze[x][y]
            this.solution[x][y] = 1;
            // now rat has four options, either go right OR go down or left or go up
            if( direction != "up" && this.findPath( maze, x + 1, y, n, "down")){ //go down
                return true;
            }
            //else go down
            if( direction != "left" && this.findPath( maze, x, y + 1, n,"right")){ //go right
                return true;
            }
            if( direction != "down" && this.findPath(maze, x - 1, y, n, "up")){ //go up
                return true;
            }
            if( direction != "right" &&  this.findPath(maze, x, y - 1, n, "left")){ //go left
                return true;
            }
            //if none of the options work out BACKTRACK undo the move
            this.solution[x][y] = 0;
            return false;
        }
        return false;
    }

    // this function will check if mouse can move to this cell
    isSafeToGo( maze,  x,  y, n) {
        // check if x and y are in limits and cell is not blocked
        if ( x >= 0 && y >= 0 && x < n  && y < n && maze[x][y] != 0 ) {
            return true;
        }
        return false;
    }

    print( solution, n){

        let str = " "
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                str += " " + solution[i][j];
            }
            console.log( str );
            str = " ";
        }
    }

    test ( ) {
        let n = 5;
        let maze = [
            [ 1, 0, 1, 1, 1 ],
            [ 1, 1, 1, 0, 1 ],
            [ 0, 0, 0, 1, 1 ],
            [ 0, 0, 0, 1, 0 ],
            [ 0, 0, 0, 1, 1 ]];

        this.solveMaze(maze, n);
    }

}

let r = new RatInMaze(5);
r.test();