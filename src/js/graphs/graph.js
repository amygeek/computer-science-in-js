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
        this.data = v;
        this.visited = false;
    }
}
class Graph {
    
    // defining vertex array and
    // adjacent list
    constructor() {
        this.noVerts = 0;
        this.adjList = new Map();
        this.vertex = [];
    }
    
    addVertex(v) {
        // add vertex 
        this.vertex[this.noVerts++] = new Node( v );
        // initialize the adjacent list with an empty array
        this.adjList.set(v, []);
    }

    getVertex ( v ) {
        for ( let i=0; i<this.vertex.length; i++ ) {
            if (this.vertex[i].data == v ) {
                return this.vertex[i];
            }
        }
        return null;
    }
    // add edge to the graph
    addEdge(v, w) {
        
        // get the list for vertex v and put the vertex w denoting edge between v and w
        this.adjList.get(v).push(w);

        // if graph is undirected, add an edge from w to w by uncomment the following line
        //this.adjList.get(w).push(v);
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
            // concatenate the values into "a" string
            for ( let j of getAdj ) {

                adjStr += j + " ";
            }

            // print the vertex and its adjacency list
            console.log(i + " -> " + adjStr);
        }
    }

    // function to performs BFS: Breadth First Search
    bfs( startNode ) {

        // create "a" visited array
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
            console.log( v );

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
            vertex[i].visited = false;
        }

        let cp = {
            noVerts: 0,
            vertex: [],
            adjList: new Map()
        };
        
        this.cloneGraphRec(source, vertex[0], cp, visited);
        return cp;
    }

    cloneGraphRec(g, vert, dest, visited) {

        vert.visited = true;
        
        dest.vertex.push(vert);
        dest.adjList.set(vert.data, []);

        let adjList = g.adjList.get(vert.data);

        for(let i in adjList) {

            let neighbor = adjList[i];

            dest.adjList.get(vert.data).push(neighbor);

            let nextVert = this.getVertex( neighbor );

            if ( nextVert !== null && !nextVert.visited ) {
                this.cloneGraphRec(g, nextVert, dest, visited);
            }
        }
    }

    search ( g, start, end ) {

        let node = g.vertex;

        for (let i=0; i<node.length; i++ ) {
            node[i].visited = false;
        }

        let q = [];
        q.push(start);

        start.visited = true;

        while ( q.length !== 0 ) {

            let current = q.shift().data;

            if ( current ) {
                for ( let v of g.adjList.get( current ) ){
                    let nextNode = this.getVertex( v );
                    if ( nextNode && !nextNode.visited ) {
                        if ( nextNode === end ) {
                            return true;
                        } else {
                            nextNode.visited = true;
                            q.push(nextNode);
                        }
                    }
                }
            }
        }
        return false;

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
var g = new Graph();

// adding vertices
g.addVertex("a");
g.addVertex("b");
g.addVertex("c");
g.addVertex("d");
g.addVertex("e");
g.addVertex("f");


// adding edges
g.addEdge("a", "b");
g.addEdge("a", "c");
g.addEdge("a", "d");

g.addEdge("d", "e");
g.addEdge("e", "f");


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
g.bfs("a");  //A B D E C F


console.log("prints DFS");
g.dfs("a"); // A B C E D F

 let newG = g.cloneGraph(g);
 console.log("prints Vertex and adjacency list for cloned graph");
 g.printGraph(newG.adjList);

console.log("prints DFS iterative");
g.dfsI(g, "a");

console.log(g.search(g, g.vertex[0], g.vertex[5]));