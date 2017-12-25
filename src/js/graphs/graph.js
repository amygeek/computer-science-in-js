class Queue {

    constructor() {
        this.q = [];
    }

    isEmpty() {
        return (this.q.length === 0) ? true : false;
    }

    dequeue() {
        if (!this.isEmpty()) {
            return this.q.shift();
        }
    }

    enqueue(v) {
        this.q.push(v);
    }

}

class Node {
    constructor( v ) {
        this.vertex = v;
        this.adjList = new Map();
    }
}
class Graph {
    
    // defining vertex array and
    // adjacent list
    constructor(noVerts) {
        this.noVerts = noVerts;
        this.adjList = new Map();
        this.vertex = [];
    }
    
    addVertex(v) {
        // add vertex 
        this.vertex.push(v);
        // initialize the adjacent list with an empty array
        this.adjList.set(v, []);
    }

    // add edge to the graph
    addEdge(v, w) {
        
        // get the list for vertex v and put the vertex w denoting edge between v and w
        this.adjList.get(v).push(w);

        // Since graph is undirected, add an edge from w to w also
        this.adjList.get(w).push(v);
    }

    removeEdge(v, w) {

        let adjList = this.adjList.get(v);
        
        for(let i=0, l=adjList.length; i<l; i++) {

            if ( adjList[i] == w ) {
                adjList.splice(i, 1);
            }
        }
    }
    
    // Prints the vertex and adjacency list
    printGraph(list) {
        
        // get all the vertices
        let getVertex = list.keys();

        // iterate over the vertices
        for ( let i of getVertex ) {
            
            // great the corresponding adjacency list for the vertex
            let getAdj = list.get(i);
            let adjStr = "";

            // iterate over the adjacency list
            // concatenate the values into a string
            for ( let j of getAdj ) {
                adjStr += j + " ";
            }

            // print the vertex and its adjacency list
            console.log(i + " -> " + adjStr);
        }
    }

    // function to performs BFS: Breadth First Search
    bfs( startNode ) {

        // create a visited array
        let visited = [];
        for (let i = 0; i < this.noVerts; i++) {
            visited[i] = false;
        }

        // Create an object for queue
        let q = new Queue();

        // add the starting node to the queue
        visited[startNode] = true;
        q.enqueue(startNode);

        // loop until queue is element
        while (!q.isEmpty()) {
            // get the element from the queue
            let vertex = q.dequeue();

            console.log(vertex);

            // get the adjacent list for current vertex
            let adjList = this.adjList.get( vertex );

            // loop through the list and add the elemnet to the
            // queue if it is not processed yet
            for (let i in adjList) {
                let neighbor = adjList[i];

                if ( !visited[neighbor] ) {
                    visited[neighbor] = true;
                    q.enqueue(neighbor);
                }
            }
        }

    }

    // main dfs method: Depth first traversal
    dfs( startNode ) {

        let visited = [];
        for (let i = 0; i < this.noVerts; i++) {
            visited[i] = false;
        }

        this.DFSUtil(startNode, visited);
    }

    // Recursive function which process and explore
    // all the adjacent vertex of the vertex with which it is called
    DFSUtil( vert, visited ) {
        
        visited[vert] = true;
        console.log(vert);

        let adjList = this.adjList.get( vert );

        for (let i in adjList) {
            let neighbor = adjList[i];
            if ( !visited[neighbor] ) {
                this.DFSUtil( neighbor, visited);
            }                
        }
    }

    //F is not printed
    dfsI(g, root ) {
        let stack = [];
        let visited = [];
        for ( let i of g.vertex) {
            visited[i] = false;
        }
        stack.push(root);
        visited[root] = true;

        while (stack.length > 0) {

            let v = stack.pop();
            console.log(v);

            let adjList = g.adjList.get(v);
            let len = adjList.length;

            for(let i=len-1; i>=0; i--) {
                
                let neighbor = adjList[i];
                if ( !visited[neighbor] ) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }  
            }
        }
    }
    
    cloneGraph(source){
        let visited = [];
        let vertex = source.vertex;
        for(let i=0; i<vertex.length; i++) {
            visited[i] = false;
        }
        let cp = {
            vertex: [],
            adjList: new Map()
        };
        
        this.cloneGraphRec(source, source.vertex[0], cp, visited);
        return cp;
    }

    cloneGraphRec(sourceG, vert, dest, visited) {
        
        visited[vert] = true;
        
        dest.vertex.push(vert);
        dest.adjList.set(vert, []);

        let adjList = sourceG.adjList.get(vert);
        for(let i in adjList) {
            let neighbor = adjList[i];
            dest.adjList.get(vert).push(neighbor);
            if ( !visited[neighbor] ) {
                this.cloneGraphRec(sourceG, neighbor, dest, visited);
            }

        }
    }
}

/*
          1
        /  \
       2    3
      / \
     4  5
 */
// test graph class
var g = new Graph(6);

// adding vertices
g.addVertex(1);
g.addVertex(2);
g.addVertex(3);
g.addVertex(4);
g.addVertex(5);


// adding edges
g.addEdge(1, 2);
g.addEdge(1, 3);

g.addEdge(2, 4);
g.addEdge(2, 5);


// prints all vertex and
// its adjacency list
// A -> B D E
// B -> A C
// C -> B E F
// D -> A E
// E -> A D F C
// F -> E C
g.printGraph(g.adjList);


console.log("prints BFS");
g.bfs(1);  //A B D E C F


console.log("prints DFS");
g.dfs(1); // A B C E D F

// let newG = g.cloneGraph(g);
// console.log("prints Vertex and adjacency list for cloned graph");
// g.printGraph(newG.adjList);

console.log("prints DFS iterative");
g.dfsI(g, 1);