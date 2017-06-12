/**
 *Serialize binary tree to a file and then deserialize back to tree such that original and deserialized trees are identical.
     Runtime Complexity
     Linear, O(n).

     Memory Complexity
     Logarithmic, O(logn).

     Recursive solution has O(h) memory complexity as it will consume memory on the stack up to the height of binary tree h.
     It will be O(logn) for balanced tree and in worst case can be O(n).
 */
let MARKER = Number.MAX_VALUE;
let serialize = function(node, stream) {
    if (!node) {
        stream.push(MARKER);
        return;
    }
    stream.push(node.data);
    serialize(node.left, stream);
    serialize(node.right, stream);
};

let deserialize = function(stream) {
    try {
        let data = stream.shift();
        if (data === MARKER) {
            return null;
        }

        let node = new BinaryTreeNode(data);
        node.left = deserialize(stream);
        node.right = deserialize(stream);
        return node;
    } catch (err) {
        return null;
    }
};