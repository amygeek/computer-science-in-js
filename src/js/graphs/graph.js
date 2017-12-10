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

class Graph {
    
    // defining vertex array and
    // adjacent list
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }

    // add vertex to the adjacent list
    addAdjacent(v) {
        // initialize the adjacent list with null array
        this.AdjList.set(v, []);
    }

    // add edge to the graph
    addEdge(v, w) {
        // get the list for vertex v and put the
        // vertex w denoting edge betweeen v and w
        this.AdjList.get(v).push(w);

        // Since graph is undirected,
        // add an edge from w to w also
        this.AdjList.get(w).push(v);
    }

    // Prints the vertex and adjacency list
    printGraph() {
        // get all the vertices
        var get_keys = this.AdjList.keys();

        // iterate over the vertices
        for (var i of get_keys) {
            // great the corresponding adjacency list
            // for the vertex
            var get_values = this.AdjList.get(i);
            var conc = "";

            // iterate over the adjacency list
            // concatenate the values into a string
            for (var j of get_values) {
                conc += j + " ";
            }

            // print the vertex and its adjacency list
            console.log(i + " -> " + conc);
        }
    }

    // function to performs BFS: Breadth First Search
    bfs(startingNode) {

        // create a visited array
        var visited = [];
        for (var i = 0; i < this.noOfVertices; i++) {
            visited[i] = false;
        }

        // Create an object for queue
        var q = new Queue();

        // add the starting node to the queue
        visited[startingNode] = true;
        q.enqueue(startingNode);

        // loop until queue is element
        let vertex = '';
        while (!q.isEmpty()) {
            // get the element from the queue
            var getQueueElement = q.dequeue();

            vertex +=  getQueueElement + ' ';

            // get the adjacent list for current vertex
            var get_List = this.AdjList.get(getQueueElement);

            // loop through the list and add the elemnet to the
            // queue if it is not processed yet
            for (var i in get_List) {
                var neighbor = get_List[i];

                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    q.enqueue(neighbor);
                }
            }
        }
        console.log(vertex);
    }

    // main dfs method: Depth first traversal
    dfs(startingNode) {

        var visited = [];
        for (var i = 0; i < this.noOfVertices; i++) {
            visited[i] = false;
        }

        this.DFSUtil(startingNode, visited);
    }

    // Recursive function which process and explore
    // all the adjacent vertex of the vertex with which it is called
    DFSUtil(vert, visited) {
        visited[vert] = true;
        console.log(vert);

        var getNeighbors = this.AdjList.get(vert);

        for (var i in getNeighbors) {
            var get_elem = getNeighbors[i];
            if (!visited[get_elem])
                this.DFSUtil(get_elem, visited);
        }
    }
}

// test graph class
var g = new Graph(6);
var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];

// adding vertices
for (var i = 0; i < vertices.length; i++) {
    g.addAdjacent(vertices[i]);
}

// adding edges
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

// prints all vertex and
// its adjacency list
// A -> B D E
// B -> A C
// C -> B E F
// D -> A E
// E -> A D F C
// F -> E C
g.printGraph();


console.log("prints BFS");
g.bfs('A');  //A B D E C F


console.log("prints");
g.dfs('A'); // A B C E D F