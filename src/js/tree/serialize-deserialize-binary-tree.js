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

let serialize_preorder = function(node, stream) {
    if (!node) {
        return;
    }

    stream.push(node.data);
    serialize_preorder(node.left, stream);
    serialize_preorder(node.right, stream);
};

let serialize_inorder = function(node, stream) {
    if (!node) {
        return;
    }

    serialize_inorder(node.left, stream);
    stream.push(node.data);
    serialize_inorder(node.right, stream);
};

let deserialize_preorder = function(stream, size) {
    let v = [];

    for (let i = 1; i < size; i++) {
        let data = stream.shift();
        v.push(data);
    }
    return v;
};

let deserialize_inorder = function(stream, size) {
    let v = [];

    for (let i = 1; i < size; i++) {
        let data = stream.shift();
        v.push(data);
    }

    return v;
};

let deserialize2 = function(preOrder, inOrder, preStart, inStart, preEnd, inEnd) {

    // check if there is no element or one element
    if (preStart > preEnd) {
        return null;
    } else if (preStart === preEnd) {
        let node = new BinaryTreeNode(preOrder[preStart]);
        node.left = null;
        node.right = null;
        return node;
    }

    // otherwise first element in preOrder array is root,
    // we find that value in inOrder array
    // and determine how many elemnets are in left and
    // right subtrees
    let rootIndexInorder = 0;

    for (let i = inStart; i < inEnd + 1; i++) {
        if (inOrder[i] === preOrder[preStart]) {
            // we find the first value of preOrder in
            // inOrder array.
            rootIndexInorder = i;
            break;
        }
    }

    // now we calculate number of elements in right subtree
    // and left subtree
    let leftSubCount = rootIndexInorder - inStart;
    let rightSubCount = inEnd - rootIndexInorder;

    let node = new BinaryTreeNode(preOrder[preStart]);
    node.left = deserialize2(preOrder, inOrder, preStart + 1, inStart, preStart + leftSubCount, inStart + leftSubCount - 1);
    node.right = deserialize2(preOrder, inOrder, preStart + leftSubCount + 1, inStart + leftSubCount + 1, preEnd, inEnd);
    return node;
};