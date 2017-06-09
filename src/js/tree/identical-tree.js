/**
 * Given roots of two binary trees, determine if these trees are identical or not.
 * Identical trees have the same layout and data at each node
 * @param root1
 * @param root2
 * @returns {boolean}
 */
let are_identical = function(root1, root2) {
    if (!root1 && !root2) {
        return true;
    }

    if (root1 && root2) {
        return (root1.data === root2.data &&
        are_identical(root1.left, root2.left) &&
        are_identical(root1.right, root2.right));
    }

    return false;
};