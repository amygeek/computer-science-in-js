/**
 * Given root of a binary tree, delete any subtrees whose nodes sum up to zero. In the below binary tree,
 * we need to delete the subtree starting at node 5 as it's sum (5 -3 -2) equals zero.
        7
      /   \
     5     6
   /  \
 -3  -2
 This is what the binary tree will look like after deleting the zero sum subtree
 7
 \
 6

 Runtime Complexity
 Linear, O(n).

 Memory Complexity
 O(h).
 We will do a post order traversal of the binary tree.
 * @param root
 * @returns {*}
 */
let delete_zero_sum_subtree_rec = function(root) {
    if (!root) {
        return 0;
    }

    let sum_left = delete_zero_sum_subtree_rec(root.left);
    let sum_right = delete_zero_sum_subtree_rec(root.right);

    if (sum_left === 0) {
        root.left = null;
    }

    if (sum_right === 0) {
        root.right = null;
    }

    return (root.data + sum_left + sum_right);
};

let delete_zero_sum_subtree = function(root) {
    if (root) {
        let sum = delete_zero_sum_subtree_rec(root);
        if (sum === 0) {
            root = null;
        }
    }
};