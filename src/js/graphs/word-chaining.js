/**
 * Figure out whether the given words can form a circular chain. Assume that single word can never form a chain.

 Two words can be chained together if the first word's last letter is equal to the second word's first letter.
 We are given a list of words and we need to figure out if all these words can be chained together or not.
 Let's assume that all words are lower case.

 Runtime Complexity
 generate_graph: Quadratic, O(n2).

 check_cycle_rec: Factorial, O(n!).

 The recurrence relation for time complexity is:

 T(n) = O(n) + nT(n-1)T(n)=O(n)+nT(n−1)
 Memory Complexity
 Linear, O(n).

 We need to add an edge from starting character of a word to its ending character for each word in the list.
 If there exists a cycle in this graph containing all the nodes, then chain can be formed.

 To determine that a chain can be formed connecting all the strings, the graph must be connected in such a way
 that if we start traversing it from any vertex, it should end at the same vertex ensuring that all vertices
 have been visited and all edges have been traversed exactly once, thus forming a cycle which represents the chain of words.

 This leads us to the concept of Euler circuit of a graph. An Euler circuit is a circuit that uses every edge of a
 graph exactly once and it starts and ends at the same vertex. Therefore, we can find that chain exists for a list of words
 if there exists an Euler circuit for the graph created by them.

 To find the Euler circuit of the graph, we need to ensure these two points:
 1) In degree of every vertex is equal to its out degree
 2) There exists a cycle connecting all the vertices of the graph which starts and ends at the same vertex.
 */
class vertex_chain {
    constructor(value, visited) {
        this.value = value;
        this.visited = visited;
        this.adj_vertices = [];
        this.in_vertices = [];
    }
}

class graph_chain {
    constructor(g) {
        this.g = g;
    }

    // This method creates a graph from a list of words. A node of
    // the graph contains a character representing the start or end
    // character of a word.
    create_graph(words_list) {
        for (let i = 0; i < words_list.length; i++) {
            let word = words_list[i];
            let start_char = word[0];
            let end_char = word[word.length - 1];

            let start = this.vertex_exists(start_char);

            if (!start) {
                start = new vertex_chain(start_char, false);
                this.g.push(start);
            }

            let end = this.vertex_exists(end_char);
            if (!end) {
                end = new vertex_chain(end_char, false);
                this.g.push(end);
            }

            // Add an edge from start vertex to end vertex
            this.add_edge(start, end);
        }
    }

    // This method returns the vertex with a given value if it
    // already exists in the graph, returns NULL otherwise
    vertex_exists(value) {
        for (let i = 0; i < this.g.length; i++) {
            if (this.g[i].value === value) {
                return this.g[i];
            }
        }

        return null;
    }

    // This method returns TRUE if all nodes of the graph have
    // been visited
    all_visited() {
        for (let i = 0; i < this.g.length; i++) {
            if (this.g[i].visited === false) {
                return false;
            }
        }
        return true;
    }

    // This method adds an edge from start vertex to end vertex by
    // adding the end vertex in the adjacency list of start vertex
    // It also adds the start vertex to the in_vertices of end vertex
    add_edge(start, end) {
        start.adj_vertices.push(end);
        end.in_vertices.push(start);
    }

    // This method returns TRUE if out degree of each vertex is equal
    // to its in degree, returns FALSE otherwise
    out_equals_in() {
        for (let i = 0; i < this.g.length; i++) {
            let out = this.g[i].adj_vertices.length;
            let inn = this.g[i].in_vertices.length;
            if (out != inn) {
                return false;
            }
        }

        return true;
    }

    // This method returns TRUE if the graph has a cycle containing
    // all the nodes, returns FALSE otherwise
    check_cycle_rec(node, starting_node) {
        node.visited = true;

        // Base case
        // return TRUE if all nodes have been visited and there
        // exists an edge from the last node being visited to
        // the starting node
        let adj = node.adj_vertices;
        if (this.all_visited()) {
            for (let i = 0; i < adj.length; i++) {
                if (adj[i] === starting_node) {
                    return true;
                }
            }
        }

        // Recursive case
        for (let i = 0; i < adj.length; i++) {
            if (adj[i].visited === false) {
                node = adj[i];
                if (this.check_cycle_rec(node, starting_node)) {
                    return true;
                }
            }
        }

        return false;
    }

    check_cycle(list_size) {
        // Empty list and single word cannot form a chain
        if (list_size < 2) {
            return false;
        }

        if (this.g.length > 0) {
            if (this.out_equals_in()) {
                return this.check_cycle_rec(this.g[0], this.g[0]);
            }
        }

        return false;
    }

    print_graph() {
        for (let i = 0; i < this.g.length; i++) {
            console.log(this.g[i].value + " " + this.g[i].visited);
            let adj = this.g[i].adj_vertices;
            for (let j = 0; j < adj.length; j++) {
                console.log(adj[j].value + " ");
            }
        }
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
}
