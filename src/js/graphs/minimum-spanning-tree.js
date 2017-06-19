/**
 * Find the minimum spanning tree of a connected, undirected graph with weighted edges.
     Runtime Complexity
     Quadratic, O(n2).

     Here, 'n' is the number of vertices.

     Memory Complexity
     Linear, O(n + e).

     Here, 'n' is the number of vertices and 'e' is the number of edges.

     A spanning tree of a connected, undirected graph is a subgraph that is a tree and connects
     all the vertices together. One graph can have many different spanning trees.
     A graph with n vertices has a spanning tree with n-1 edges.

     A weight can be assigned to each edge of the graph. The weight of a spanning tree is the sum of weights
     of all the edges of the spanning tree. A minimum spanning tree(MST) for a weighted, connected and
     undirected graph is a spanning tree with weight less than or equal to the weight of every other spanning tree.

     We'll find the minimum spanning tree of a graph using Prim's algorithm.
 */
find_min_spanning_tree() {
    let vertex_count = 0;
    let weight = 0;

    // Add first vertex to the MST
    let current = this.g[0];
    current.visited = true;
    vertex_count++;

    // Construct the remaining MST using the
    // smallest weight edge
    while (vertex_count < this.g.length) {
        let smallest = null;
        for (let i = 0; i < this.e.length; i++) {
            if (this.e[i].visited === false && this.e[i].dest.visited === false) {
                smallest = this.e[i];
                break;
            }
        }

        for (let i = 0; i < this.e.length; i++) {
            if (this.e[i].visited === false) {
                if (this.e[i].src.visited === true && this.e[i].dest.visited === false && this.e[i].weight < smallest.weight) {
                    smallest = this.e[i];
                }
            }
        }

        smallest.visited = true;
        smallest.dest.visited = true;
        weight += smallest.weight;
        vertex_count++;
    }
    return weight;
}