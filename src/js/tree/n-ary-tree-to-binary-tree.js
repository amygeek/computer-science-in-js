/**
 * Convert an N-ary tree to Binary tree and then convert this Binary tree back to its original N-ary tree structure.
 Runtime Complexity
 Linear, O(n).

 Memory Complexity
 O(h).

 Initial Direction = Left
 For each node, append its children in a binary tree in given direction (Left/Right).
 If any of the nodes in step 2 have further children, then change the direction and do step 2

 * @param node
 */


let convert_n_ary_to_binary = function(node) {
    return convert_n_ary_to_binary_rec(node, 1);
};

let convert_n_ary_to_binary_rec = function(root, isLeft) {
    if (!root) {
        return;
    }

    let btnode = new BinaryTreeNode(root.data);
    let lastnode = btnode;

    for (let c in root.children) {
        if (isLeft === 1) {
            lastnode.left = convert_n_ary_to_binary_rec(root.children[c], 0);
            lastnode = lastnode.left;
        } else {
            lastnode.right = convert_n_ary_to_binary_rec(root.children[c], 1);
            lastnode = lastnode.right;
        }
    }

    return btnode;
};

let convert_binary_to_n_ary = function(node) {
    return convert_binary_to_n_ary_rec(node, 1);
};

let convert_binary_to_n_ary_rec = function(node, isLeft) {
    if (!node) {
        return;
    }

    let nnode = new TreeNode(node.data);
    let temp = node;

    if (isLeft === 1) {
        while (temp.left) {
            let child = convert_binary_to_n_ary_rec(temp.left, 0);
            nnode.children.push(child);
            temp = temp.left;
        }
    } else {
        while (temp.right) {
            let child = convert_binary_to_n_ary_rec(temp.right, 1);
            nnode.children.push(child);
            temp = temp.right;
        }
    }
    return nnode;
};