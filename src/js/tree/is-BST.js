/**
 * Given a Binary Tree figure out whether it's a Binary Search Tree.
 * A binary search tree holds the property that each node's key value is smaller
 * than the key value of all nodes in the right subtree and greater than
 * the key values of all nodes in the left subtree i.e. L < N < R.
     Runtime Complexity
     Linear, O(n)

     Memory Complexity
     O(h).
     Recursive solution has O(h) memory complexity as it will consume memory on the stack up to the height of binary tree h.
     It will be O(log n) for a balanced tree and in the worst case can be O(n).
 * @param root
 * @param min_value
 * @param max_value
 * @returns {*}
 */
let is_bst_rec = function(root, min_value, max_value) {
    if (!root) {
        return true;
    }

    if (root.data < min_value || root.data > max_value) {
        return false;
    }

    return is_bst_rec(root.left, min_value, root.data) && is_bst_rec(root.right, root.data, max_value);
};

let is_bst = function(root) {
    return is_bst_rec(root, -Number.MAX_VALUE - 1, Number.MAX_VALUE);
};


/********************************************************************************************************
 * inorder traversal is always sorted
 * Just do a regular inorder traversal and keep track of the last seen node (prev) in the traversal
 * and check whether the current node's value is greater than or equal to previous (prev) node's value.
     Runtime Complexity
     Linear, O(n).

     Memory Complexity
     O(h).
 * @param root
 * @returns {boolean}
 */
let prev = -1;
let is_binary_search_tree = function(root) {
    // assuming all tree values are positive.
    prev = -1;
    return is_binary_search_tree_rec(root);
};

let is_binary_search_tree_rec = function(root) {

    if (!root) {
        return true;
    }

    if (is_binary_search_tree_rec(root.left) === false) {
        return false;
    }

    if (prev > root.data && prev != -1) {
        return false;
    }

    prev = root.data;

    if (is_binary_search_tree_rec(root.right) === false) {
        return false;
    }

    return true;
};