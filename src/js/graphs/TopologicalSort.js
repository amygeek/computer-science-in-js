/*
 Topological Sort: A topological sort or topological ordering of a directed graph is a linear ordering of its vertices such that
 for every directed edge uv from vertex u to vertex v, u comes before v in the ordering. A topological ordering is possible
 if and only if the graph has no directed cycles, that is, if it is a directed acyclic graph (DAG).

                  5 ---------->2
                /   \         /
               7    4        1 ------->0
                \  /        /
                 6 ------->3

 As in the image above, the topological order is 7 6 5 4 3 2 1 0. There can be one or more topological order in any graph.
 Like in the example above 7 5 6 4 2 3 1 0 is also a topological order.
 */
class Node {
    constructor( d ) {
        this.data = d;
        this.next = null;
        this.size = 0;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    addFirst(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.tail = newNode;
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        newNode.size++;

        return newNode;
    }
    size() {
        return this.size;
    }

    addLast( data ) {
        let newNode = new Node(data);
        if (!this.tail) {
            this.tail = newNode;
            this.head = newNode;

        } else {
            this.tail.next = newNode;
            this.tail = newNode;

        }
        newNode.next = null;
        this.size++;

        return node;
    }

}

class Graph {

    constructor ( vertices) {
        this.vertices = vertices;
        //this.adjList = new Array( this.vertices ).fill( new LinkedList());

        this.adjList = new Array( vertices );
        for (let i = 0; i < vertices; i++) {
            this.adjList[i]  = new LinkedList();
        }
    }

    //not working in JS
    addEgde( source,  destination) {
        this.adjList[source].addFirst(destination);
    }

    topologicalSorting() {
        let visited = new Array( this.vertices ).fill( false );
        let stack = [];
        //visit from each node if not already visited
        for (let i = 0; i < this.vertices; i++) {
            if (!visited[i]) {
                this.topologicalSortUtil(i, visited, stack);
            }
        }
        console.log("Topological Sort: ");
        let size = stack.length;
        let str = "";
        for (let i = 0; i <size ; i++) {
            str += stack.pop() + " "

        }
        console.log( str );
    }

    topologicalSortUtil( start, visited, stack) {
        visited[start] = true;
        for (let i = 0; i < this.adjList[start].size; i++) {
            let vertex = this.adjList[start][i];
            if (!visited[vertex]) {
                this.topologicalSortUtil(vertex, visited, stack);
            }             
        }
        stack.push(start);
    }
}

//7 6 5 4 3 2 1 0
let vertices = 8;
let graph = new Graph(vertices);
graph.addEgde(7, 6);
graph.addEgde(7, 5);
graph.addEgde(6, 4);
graph.addEgde(6, 3);
graph.addEgde(5, 4);
graph.addEgde(5, 2);
graph.addEgde(3, 1);
graph.addEgde(2, 1);
graph.addEgde(1, 0);

graph.topologicalSorting();