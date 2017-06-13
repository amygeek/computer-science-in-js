/**
 * Inorder successor of a node in binary tree is the next node in inorder traversal.
 * find inorder successor of a given binary tree node in binary search tree given parent pointers
     Runtime Complexity
     Logarithmic, O(logn).

     Memory Complexity
     Constant, O(1).
 * @param root
 * @returns {*}
 */
let find_min_in_tree = function(root) {
    if (!root) {
        return null;
    }

    while (root.left) {
        root = root.left;
    }

    return root;
};

let inorder_successor_bst_parent_pointer = function(node) {
    if (!node) {
        return null;
    }

    if (node.right) {
        return find_min_in_tree(node.right);
    }

    while (node.parent) {
        if (node.parent.left === node) {
            return node.parent;
        }

        node = node.parent;
    }

    return null;
};

let find_successor = function(root, d) {

    while (root) {
        if (root.data < d) {
            root = root.right;
        } else if (root.data > d) {
            root = root.left;
        } else {
            return inorder_successor_bst_parent_pointer(root);
        }
    }
    return null;
};