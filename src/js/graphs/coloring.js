
/* Java program for solution of M Coloring problem
 using backtracking */

class Coloring {

    constructor( v, color) {
        this.v = v;
        this.color = color;
    }
    /* A utility function to check if the current
     color assignment is safe for vertex v */
    isSafe(v, graph, color, c) {
        
        for (let i = 0; i < this.v; i++) {
            if (graph[v][i] == 1 && c == color[i])
                return false;
        }
        
        return true;
    }
    
    /* A recursive utility function to solve m
     coloring  problem */
    graphColoringUtil(graph, m, color, v) {
        /* base case: If all vertices are assigned
         a color then return true */
        if (v == this.v) {
            return true;
        }
            
    
        /* Consider this vertex v and try different colors */
        for (let c = 1; c <= m; c++) {
            /* Check if assignment of color c to v
             is fine*/
            if ( this.isSafe( v, graph, color, c ) ) {
                
                color[v] = c;
    
                /* recur to assign colors to rest of the vertices */
                if ( this.graphColoringUtil(graph, m, color, v + 1)) {
                    return true;
                }
                    
    
                /* If assigning color c doesn't lead to a solution then remove it */
                color[v] = 0;
            }
        }
    
        /* If no color can be assigned to this vertex then return false */
        return false;
    }
    
    /* This function solves the m Coloring problem using
     Backtracking. It mainly uses graphColoringUtil()
     to solve the problem. It returns false if the m
     colors cannot be assigned, otherwise return true
     and  prints assignments of colors to all vertices.
     Please note that there  may be more than one
     solutions, this function prints one of the
     feasible solutions.*/
    graphColoring(graph, m) {
        // Initialize all color values as 0. This
        // initialization is needed correct functioning
        // of isSafe()
        this.color = new Array(this.v);
        for (let i = 0; i < this.v; i++)
            this.color[i] = 0;
    
        // Call graphColoringUtil() for vertex 0
        if (!this.graphColoringUtil(graph, m, this.color, 0)) {
            console.log("Solution does not exist");
            return false;
        }
    
        // Print the solution
        this.printSolution(this.color);
        return true;
    }
    
    /* A utility function to print solution */
    printSolution( color ) {

        console.log("Solution Exists: Following are the assigned colors");
        let str = "";
        for (let i = 0; i < this.v; i++) {
            str += color[i] + " ";
        }
        console.log(str);
    }
    
    // driver program to test above function
    test () {
        let coloring = new Coloring(4);
        /* Create following graph and test whether it is
         3 colorable
         (3)---(2)
         |   / |
         |  /  |
         | /   |
         (0)---(1)
         */
        let graph = [[0, 1, 1, 1],
                    [1, 0, 1, 0],
                    [1, 1, 0, 1],
                    [1, 0, 1, 0]];
        let m = 3; // Number of colors
        this.graphColoring(graph, m);
    }
}

let coloring = new Coloring(4);
coloring.test();