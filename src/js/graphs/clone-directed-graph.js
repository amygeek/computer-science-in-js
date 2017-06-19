/**
 * Given root node of a directed graph, clone this graph by creating its deep copy
 * such that cloned graph has same vertices and edges as the original graph.
     Runtime Complexity
     Linear, O(n).

     Memory Complexity
     Logarithmic, O(n). 'n' is number of vertices in graph.

     We can have most n entries in hash table, so worst case space complexity is O(n).
 */
class Node_clone {
    constructor(d) {
        this.data = d;
        this.neighbors = [];
    }
}

let clone_rec = function(root, nodes_completed) {
    if (!root) {
        return null;
    }

    let pNew = new Node_clone(root.data);
    nodes_completed[root.data] = pNew;

    for (let p in root.neighbors) {
        let x = nodes_completed[root.neighbors[p].data];
        if (!x) {
            pNew.neighbors.push(clone_rec(root.neighbors[p], nodes_completed));
        } else {
            pNew.neighbors.push(x);
        }
    }

    return pNew;
};

let clone = function(root) {
    let nodes_completed = {};
    return clone_rec(root, nodes_completed);
};