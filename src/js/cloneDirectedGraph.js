/**
 * Given root node of a directed graph, clone this graph by creating its deep copy
 * such that cloned graph has same vertices and edges as the original graph.
 * If input graph is G = (V, E) where V is set of vertices and E is set of edges,
 * then output graph (cloned graph) G' = (V', E') such that V = V' and E = E'.
 * Runtime Complexity
    Linear, O(n).

 * Memory Complexity
    Logarithmic, O(n). 'n' is number of vertices in graph.
 * We can have most n entries in hash table, so worst case space complexity is O(n).
 */
class NodeClone {
    constructor(d) {
        this.data = d;
        this.neighbors = [];
    }
}

let cloneRecursive = function(root, nodeCompleted) {
    if (!root) {
        return null;
    }

    let pNew = new NodeClone(root.data);
    nodeCompleted[root.data] = pNew;

    for (let p in root.neighbors) {
        let x = nodeCompleted[root.neighbors[p].data];
        if (!x) {
            pNew.neighbors.push(cloneRecursive(root.neighbors[p], nodeCompleted));
        } else {
            pNew.neighbors.push(x);
        }
    }

    return pNew;
};

let clone = function(root) {
    let nodeCompleted = {};
    return cloneRecursive(root, nodeCompleted);
};